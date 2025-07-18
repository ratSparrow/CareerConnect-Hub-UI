/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { SubmitHandler } from "react-hook-form";

import { Button, message } from "antd";
import { useUserLoginMutation } from "../../redux/api/authApi";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Form from "../../components/Form/Form";
import FormInput from "../../components/Form/FormInput";
import Loading from "../../components/ui/common/Loading";


type FormValues = {
  email: string;
  password: string;
};

const HomePageModal = () => {
  const [loading, setLoading] = useState(false)
  const [userLogin] = useUserLoginMutation();
  const navigate = useNavigate()

  const [scale, setScale] = useState(1);

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setLoading(true)
    try {
      const loginData = {
        email: data.email,
        password: data.password,
      };
      const res = await userLogin(loginData);
      console.log(res);

      //@ts-ignore
      if (res?.data?.data?.accessToken) {
        message.success("User logged in successfully!");
        setLoading(false)
        //@ts-ignore
        if (res?.data?.data?.role === "admin") {
          navigate("/dashboard/company-chart");
        } //@ts-ignore
        else if (res?.data?.data?.role === "recruiter") {
          navigate("/dashboard/job");
        } //@ts-ignore
        else {
          navigate("/user/user-profile");
        }
      } else {
        setLoading(false)
        return message.error("Wrong credential!");
      }

      //@ts-ignore
      storeUserInfo({ accessToken: res?.data?.data?.accessToken });
    } catch (err: any) {
      console.error(err.message);
    }
  };

  return (
    <div>
      <p style={{ fontSize: "1rem", marginTop: "1rem", marginBottom: ".5rem" }}>
        Dont have an account?? <Link to="/company-sign-up">Sign up</Link>
      </p>
      <p
        style={{
          fontSize: "1.2rem",
          color: "#666",
          marginBottom: "1rem",
        }}
      ></p>
      <Form submitHandler={onSubmit}>
        <div style={{ width: "100%" }}>
          <h3 style={{ color: "gray", fontSize: "14px", marginBottom: "3px" }}>
            Email
          </h3>
          <FormInput name="email" type="email" size="large" />
        </div>
        <div
          style={{
            margin: "15px 0px",
            width: "100%",
          }}
        >
          <h3
            style={{
              color: "gray",
              fontSize: "14px",
              marginBottom: "10px",
            }}
          >
            Password
          </h3>
          <FormInput name="password" type="password" size="large" />
        </div>
        <Button
          type="primary"
          htmlType="submit"
          size="large"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#00A6E5",
            fontSize: "1.2rem",
            width: "100%",
            transition: "transform 0.3s ease-in-out",
            transform: `scale(${scale})`,
          }}
          onMouseEnter={() => setScale(1.03)}
          onMouseLeave={() => setScale(1)}
        >
          {
            loading ? <Loading/> : "Login"
          }
        </Button>
      </Form>
    </div>
  );
};

export default HomePageModal;
