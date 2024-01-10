/* eslint-disable @typescript-eslint/no-explicit-any */
// "use client";

// import Form from "@/components/Forms/Form";
// import FormInput from "@/components/Forms/FormInput";
// import FormTextArea from "@/components/Forms/FormTextArea";
// import CareerBreadCrumb from "@/components/ui/CareerBreadCrumb";
// import { useAddBlogMutation } from "@/redux/api/blogApi";
// import { IBlogData } from "@/types";
import { Button, Col, Row, message } from "antd";
import { useAddBlogMutation } from "../../../redux/api/blogApi";
import BreadCrumb from "../../../components/ui/dashboard/common/BreadCrumb";
import Form from "../../../components/Forms/Form";
import FormInput from "../../../components/Forms/FormInput";
import FormTextArea from "../../../components/Forms/FormTextArea";
import { Navigate, useLocation } from "react-router-dom";
// import { useRouter } from "next/navigation";

const CreateBlog = () => {
  const [addBlog] = useAddBlogMutation();
  const { pathname } = useLocation();

  const onSubmit = async (data: any) => {
    message.loading("Adding...");
    try {
      await addBlog(data);
      message.success("Blog added successfully");
      return <Navigate to="/dashboard/blog" state={{ path: pathname }} />;
    } catch (err: any) {
      console.error(err.message);
      message.error(err.message);
    }
  };

  return (
    <>
      <div
        style={{
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.1)",
          width: "100%",
        }}
      >
        <BreadCrumb
          items={[
            {
              label: "View Blog",
              link: "/dashboard/blog",
            },
          ]}
        />
        <Form submitHandler={onSubmit}>
          <h2
            style={{
              color: "#1F2B6C",
              textAlign: "center",
            }}
          >
            Publish a blog
          </h2>
          <div
            style={{
              border: "1px solid #d9d9d9",
              borderRadius: "5px",
              padding: "15px",
              margin: "10px 0",
            }}
          >
            <p
              style={{
                fontSize: "18px",
                marginBottom: "10px",
              }}
            >
              Blog Information
            </p>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col
                xs={24}
                sm={12}
                md={8}
                lg={8}
                style={{
                  margin: "5px 0",
                }}
              >
                <FormInput
                  name="title"
                  type="text"
                  size="large"
                  label="Title"
                />
              </Col>
              <Col
                xs={24}
                sm={12}
                md={8}
                lg={8}
                style={{
                  margin: "5px 0",
                }}
              >
                <FormInput
                  name="author"
                  type="text"
                  size="large"
                  label="Author"
                />
              </Col>
              <Col
                xs={24}
                sm={12}
                md={8}
                lg={8}
                style={{
                  margin: "5px 0",
                }}
              >
                <FormInput
                  name="publishDate"
                  type="date"
                  size="large"
                  label="Publish Date"
                />
              </Col>
              <Col
                xs={24}
                sm={12}
                md={8}
                lg={8}
                style={{
                  margin: "5px 0",
                }}
              >
                <FormInput
                  name="img"
                  type="text"
                  size="large"
                  label="Image Link"
                />
              </Col>
              <Col
                xs={24}
                sm={12}
                md={8}
                lg={8}
                style={{
                  margin: "5px 0",
                }}
              >
                <FormTextArea name="content" label="Content" rows={4} />
              </Col>
            </Row>
          </div>
          <div style={{ margin: "10px 0" }}>
            <Button type="primary" htmlType="submit" size="large">
              Add Blog
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default CreateBlog;
