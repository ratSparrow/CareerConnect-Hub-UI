/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { useJobsQuery } from "../../redux/api/jobApi";
import { Button, Card, Checkbox, Col, Divider, Flex, Input, Row } from "antd";
import { IJobData } from "../../types";
import { RiseOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useState } from "react";

const FindJob = () => {
  const query: Record<string, any> = {};
  const { data } = useJobsQuery({ ...query });
  const jobData = data?.data?.data;
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // Search jobs
  const handleSearch = async () => {
    try {
      const res = await fetch(
        `https://career-connect-hub-api.vercel.app/api/v1/jobs?searchTerm=${searchQuery}`
      );
      const data = await res.json();
      setSearchResults(data?.data?.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  function setOpen(_arg0: boolean): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div style={{ minHeight: "100vh", margin: "30px 50px" }}>
      <div
        style={{
          textAlign: "center",
          marginBottom: "30px",
        }}
      >
        <h2
          style={{
            color: "#123770",
            marginBottom: "20px",
            fontSize: "30px",
          }}
        >
          Explore Exciting Job Opportunities
        </h2>
        <h4>
          Discover your next career move with personalized job recommendations.
        </h4>
        <p>In the meantime, run a search to find your perfect job</p>
      </div>

      <Row gutter={[16, 24]}>
        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
          <h3
            style={{
              textAlign: "center",
              margin: "20px 0",
            }}
          >
            Search Criteria
          </h3>
          <Flex>
            <Input
              placeholder="Search for jobs"
              size="large"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button type="primary" onClick={handleSearch} size="large">
              Search
            </Button>
          </Flex>

          <Divider plain>Or</Divider>

          <div>
            <h3
              style={{
                textAlign: "center",
                marginBottom: "20px",
              }}
            >
              Filters
            </h3>
            <Checkbox>
              As per my{" "}
              <span
                style={{
                  color: "#4096FF",
                  fontWeight: "bold",
                }}
              >
                preferences
              </span>
            </Checkbox>
          </div>

          <div style={{ margin: "20px 0" }}>
            <p>Profile</p>
            <Input size="large" placeholder="e.g. marketing" />
          </div>
          <div style={{ margin: "20px 0" }}>
            <p>Location</p>
            <Input size="large" placeholder="e.g. Dhaka" />
          </div>
          <div>
            <Checkbox>Work from home</Checkbox>
          </div>
          <div style={{ margin: "20px 0" }}>
            <Checkbox>Part-time</Checkbox>
          </div>
          <div>
            <Checkbox>Include all internships matching filters</Checkbox>
          </div>
        </Col>

        <Col xs={24} sm={24} md={16} lg={16} xl={16}>
          <div
            style={{
              overflowX: "auto",
              maxHeight: "100vh",
              marginLeft: "20px",
            }}
          >
            {searchResults.length > 0 // Render search results if available
              ? searchResults.map((job: IJobData) => (
                  <div
                    key={job?._id}
                    style={{
                      boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.1)",
                      borderRadius: "5px",
                      marginBottom: "10px",
                    }}
                  >
                    <div
                      style={{
                        padding: "0 20px",
                        paddingTop: "20px",
                        color: "blue",
                        display: "flex",
                        gap: "5px",
                      }}
                    >
                      <RiseOutlined /> <p>Active Hiring</p>
                    </div>

                    <Card bordered={false}>
                      <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>
                        {job?.title}
                      </h3>
                      <p>{job?.company}</p>
                      <br />
                      <div>
                        <h4>Location</h4>
                        <p>{job?.location}</p>
                      </div>

                      <br />

                      <Flex wrap="wrap" gap="20px">
                        <div>
                          <h4>Job Type</h4>
                          <p>{job?.jobType}</p>
                        </div>
                        <div>
                          <h4>Joining Date</h4>
                          <p>{job?.joiningDate}</p>
                        </div>
                        <div>
                          <h4>CTC</h4>
                          <p>{job?.salary}</p>
                        </div>
                        <div>
                          <h4>Experience</h4>
                          <p>{job?.experienceLevel}</p>
                        </div>
                      </Flex>
                      <br />
                      <Flex
                        wrap="wrap"
                        gap="small"
                        justify="end"
                        align="center"
                      >
                        <Link to={`/details/${job?._id}`}>View Details</Link>
                        <Button type="primary" onClick={() => setOpen(true)}>
                          Apply Now
                        </Button>
                      </Flex>
                    </Card>
                  </div>
                ))
              : // Otherwise, render caregivers data
                jobData?.map((job: IJobData) => (
                  <div
                    key={job?._id}
                    style={{
                      boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.1)",
                      borderRadius: "5px",
                      marginBottom: "10px",
                    }}
                  >
                    <div
                      style={{
                        padding: "0 20px",
                        paddingTop: "20px",
                        color: "blue",
                        display: "flex",
                        gap: "5px",
                      }}
                    >
                      <RiseOutlined /> <p>Active Hiring</p>
                    </div>

                    <Card bordered={false}>
                      <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>
                        {job?.title}
                      </h3>
                      <p>{job?.company}</p>
                      <br />
                      <div>
                        <h4>Location</h4>
                        <p>{job?.location}</p>
                      </div>

                      <br />

                      <Flex wrap="wrap" gap="20px">
                        <div>
                          <h4>Job Type</h4>
                          <p>{job?.jobType}</p>
                        </div>
                        <div>
                          <h4>Joining Date</h4>
                          <p>{job?.joiningDate}</p>
                        </div>
                        <div>
                          <h4>CTC</h4>
                          <p>{job?.salary}</p>
                        </div>
                        <div>
                          <h4>Experience</h4>
                          <p>{job?.experienceLevel}</p>
                        </div>
                      </Flex>
                      <br />
                      <Flex
                        wrap="wrap"
                        gap="small"
                        justify="end"
                        align="center"
                      >
                        <Link to={`/details/${job?._id}`}>View Details</Link>
                      </Flex>
                    </Card>
                  </div>
                ))}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default FindJob;
