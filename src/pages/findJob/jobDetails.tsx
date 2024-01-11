/* eslint-disable @typescript-eslint/no-explicit-any */
import { useParams } from "react-router-dom";
import { useJobQuery } from "../../redux/api/jobApi";
import { Button, Card, Divider, Flex } from "antd";
import { RiseOutlined } from "@ant-design/icons";
import { useState } from "react";
import AppliedModal from "../../components/ResumeModal/AppliedModal";
import GlobalModal from "../../components/shared/GlobalModal";
import { getUserInfo } from "../../services/auth.service";

const JobDetails = () => {
  const { id } = useParams();
  const { email } = getUserInfo() as any;
  const { data } = useJobQuery(id);
  const [open, setOpen] = useState(false);

  const appliedJobInfo = {
    jobId: id,
    companyEmail: data?.data.contactEmail,
    jobSeekerEmail: email,
  };

  return (
    <>
      <div
        style={{
          maxWidth: "800px",
          margin: "auto",
          padding: "20px",
          marginTop: "30px",
          background: "#fff",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          borderRadius: "8px",
        }}
      >
        <h2
          style={{
            color: "#123770",
            fontSize: "30px",
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          Applying For {data?.data?.title}
        </h2>

        <div style={{ textAlign: "center" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              color: "#1890ff",
              marginBottom: "20px",
            }}
          >
            <RiseOutlined style={{ fontSize: "20px", marginRight: "5px" }} />
            <p style={{ margin: 0, fontSize: "16px" }}>Active Hiring</p>
          </div>
        </div>

        <Card bordered={false}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>
            {data?.data?.title}
          </h3>
          <p>{data?.data?.company}</p>

          <Divider />

          <Flex wrap="wrap" gap="20px">
            <div>
              <h4>Location</h4>
              <p>{data?.data?.location}</p>
            </div>
            <div>
              <h4>Job Type</h4>
              <p>{data?.data?.jobType}</p>
            </div>
            <div>
              <h4>Joining Date</h4>
              <p>{data?.data?.joiningDate}</p>
            </div>
            <div>
              <h4>CTC</h4>
              <p>{data?.data?.salary}</p>
            </div>
            <div>
              <h4>Experience</h4>
              <p>{data?.data?.experienceLevel}</p>
            </div>
          </Flex>

          <Divider />

          <div>
            <h4>About {data?.data?.company}</h4>
            <p>{data?.data?.companyDescription}</p>
          </div>

          <Divider />

          <div>
            <h4>About Job</h4>
            <p>{data?.data?.jobDescription}</p>
          </div>

          <div>
            <h4>Key Responsibilities</h4>
            <p>{data?.data?.keyResponsibilities}</p>
          </div>

          <Divider />

          <div>
            <h4>Skill(s) Required</h4>
            <p>{data?.data?.skills}</p>
          </div>

          <Divider />

          <div>
            <h4>Salary</h4>
            <p>{data?.data?.salary}</p>
          </div>

          <Divider />

          <div>
            <h4>Benefits</h4>
            <p>{data?.data?.benefits}</p>
          </div>

          <Divider />

          <div>
            <h4>Number of Openings</h4>
            <p>{data?.data?.numberOfOpenings}</p>
          </div>

          <Divider />

          <Flex
            wrap="wrap"
            gap="20px"
            justify="center"
            align="center"
            style={{
              padding: "20px 0",
            }}
          >
            <Button
              type="primary"
              onClick={() => setOpen(true)}
              style={{ width: "200px" }}
            >
              Apply Now
            </Button>
          </Flex>
        </Card>
        <GlobalModal open={open} setOpen={setOpen} width={650} title={""}>
          <AppliedModal appliedJobInfo={appliedJobInfo} />
        </GlobalModal>
      </div>
    </>
  );
};

export default JobDetails;
