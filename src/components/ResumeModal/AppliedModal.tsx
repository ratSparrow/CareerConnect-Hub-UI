/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { Button, message } from "antd";
import Form from "../Forms/Form";
import FormTextArea from "../Forms/FormTextArea";
import { useAddAppliedJobMutation } from "../../redux/api/appliedJobApi";
import FormInput from "../Forms/FormInput";
import { Link, useNavigate } from "react-router-dom";

const AppliedModal = ({ appliedJobInfo }: any) => {
  const [addAppliedJob] = useAddAppliedJobMutation();
  // console.log(appliedJobInfo);
  const navigate = useNavigate();

  const onSubmit = async (data: any) => {
    message.loading("Adding...");
    console.log(data);
    try {
      const res = await addAppliedJob(appliedJobInfo);
      //@ts-ignore
      if (res?.data.statusCode === 200) {
        navigate("/my-application");
        //@ts-ignore
        message.success(res.data.message);
      }
    } catch (err: any) {
      console.error(err.message);
      message.error(err.message);
    }
  };
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h4
          style={{
            color: "",
            fontWeight: 400,
            marginTop: "2rem",
            marginBottom: "1rem",
          }}
        >
          Your resume will be forwarded from here.
        </h4>

        <Button
          style={{ marginTop: "2rem", marginBottom: "1rem" }}
          type="primary"
          size="small"
          htmlType="submit"
        >
          <Link to="/edit-resume"> Edit Resume</Link>
        </Button>
      </div>

      <Form submitHandler={onSubmit}>
        <div style={{ width: "100%", marginTop: ".5rem" }}>
          <FormInput name="name" type="tet" label="Your Name" />
        </div>
        <div style={{ width: "100%", marginTop: ".5rem" }}>
          <FormInput name="email" type="email" label="Your Email" />
        </div>
        <div style={{ width: "100%" }}>
          <FormTextArea name="coverLetter" label="Cover Letter" />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "10px",
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit Application
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default AppliedModal;
