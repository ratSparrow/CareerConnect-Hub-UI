/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import { RiseOutlined } from "@ant-design/icons";
import { Button, Card, Col, Row, Flex } from "antd";
import Search from "antd/es/input/Search";
import { Link } from "react-router-dom";
import { IJobData } from "../../types";
import { useJobsQuery } from "../../redux/api/jobApi";

const FindJob = async () => {
    const query: Record<string, any> = {};
    const { data } = useJobsQuery({ ...query });
    const jobData = data?.data?.data;
    console.log(jobData);

  return (
    <div style={{ padding: "16px" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          marginBottom: "16px",
        }}
      >
        <Search
          placeholder="Search for jobs"
          enterButton="Search"
          size="large"
          style={{
            maxWidth: "500px",
            width: "100%",
          }}
        />
      </div>
      <div
        style={{
          textAlign: "center",
          marginBottom: "16px",
        }}
      >
        <h2>Job Feed</h2>
        <h4>We are working on your personalized job feed.</h4>
        <p>In the meantime, run a search to find your next job</p>
      </div>

      <Row gutter={[16, 24]}>
        {jobData?.map((job: IJobData) => (
          <Col xs={24} sm={12} md={8} lg={8} key={job?._id}>
            <div
              style={{
                height: "100%",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Flex
                style={{
                  padding: "10px",
                  color: "blue",
                }}
                wrap="wrap"
                gap="small"
              >
                <RiseOutlined /> <p>Active Hiring</p>
              </Flex>
              <Card title={job?.title} bordered={false}>
                <h4>{job?.company}</h4>
                <br />
                <Flex wrap="wrap" gap="small">
                  <p>Location: {job?.location},</p>
                  <p>JobType: {job?.jobType},</p>
                  <p> Joining Date: {job?.joiningDate},</p>
                  <p>CTC: {job?.salary},</p>
                  <p>Experience: {job?.experienceLevel}</p>
                </Flex>
                <br />
                <Flex wrap="wrap" gap="small" justify="end" align="center">
                  <Link to={`/jobDetails/${job?._id}`}>View Details</Link>
                  <Button type="primary">Apply Now</Button>
                </Flex>
              </Card>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default FindJob;
