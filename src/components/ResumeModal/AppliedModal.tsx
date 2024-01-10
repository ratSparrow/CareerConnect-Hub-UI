/* eslint-disable @typescript-eslint/no-explicit-any */

import { Button, message } from "antd";
import Form from "../Forms/Form";
import FormTextArea from "../Forms/FormTextArea";
import { useAddAppliedJobMutation } from "../../redux/api/appliedJobApi";
import FormInput from "../Forms/FormInput";

const AppliedModal = () => {
  const [addAppliedJob] = useAddAppliedJobMutation();

  const onSubmit = async (data: any) => {
    message.loading("Adding...");
    try {
      await addAppliedJob(data);
      message.success("Applied successfully");
    } catch (err: any) {
      console.error(err.message);
      message.error(err.message);
    }
  };
  return (
    <div>
      <p
        style={{
          fontSize: "1.1rem",
          marginTop: "1rem",
          marginBottom: ".5rem",
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        Apply
      </p>
      <Form submitHandler={onSubmit}>
        <div style={{ width: "100%", marginTop: ".5rem" }}>
          <FormInput name="name" type="tet" label="Your Name" />
        </div>
        <div style={{ width: "100%", marginTop: ".5rem" }}>
          <FormInput name="email" type="email" label="Your Email"/>
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
