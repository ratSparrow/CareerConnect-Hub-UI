import { Link, useParams } from "react-router-dom";
import { useJobQuery } from "../../redux/api/jobApi";
import { Button, Card, Flex } from "antd";
import { RiseOutlined } from "@ant-design/icons";

const JobDetails = () => {
  const { id } = useParams();
  const { data } = useJobQuery(id);
  return (
    <Flex justify="center">
      <div
        style={{
          width: "60%",
          height: "100%",
          boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.1)",
          borderRadius: "5px",
          margin: "20px 0",
        }}
      >
        <Card bordered={false}>
          <h3 style={{ fontSize: "20px" }}>{data?.data?.title}</h3>
          <p>{data?.data?.company}</p>
          <br />
          <p>Location: {data?.data?.location}</p>
          <br />
          <Flex wrap="wrap" gap="small">
            <p>JobType: {data?.data?.jobType},</p>
            <p> Joining Date: {data?.data?.joiningDate},</p>
            <p>CTC: {data?.data?.salary},</p>
            <p>Experience: {data?.data?.experienceLevel}</p>
          </Flex>
          <br />
          <div>
            <h4>About {data?.data?.company}</h4>
            <p>{data?.data?.companyDescription}</p>
          </div>
          <div>
            <h4>About Job</h4>
            <p>{data?.data?.jobDescription}</p>
          </div>
          <div>
            <h4>Key responsibilities:</h4>
            <p>{data?.data?.keyResponsibilities}</p>
          </div>
          <div>
            <h4>Skill(s) required</h4>
            <p>{data?.data?.skills}</p>
          </div>
          <div>
            <h4>Salary</h4>
            <p>{data?.data?.salary}</p>
          </div>
          <div>
            <h4>Additional Information</h4>
            <p>{data?.data?.benefits}</p>
          </div>
          <div>
            <h4>Number of openings</h4>
            <p>{data?.data?.numberOfOpenings}</p>
          </div>

          <Flex
            wrap="wrap"
            gap="small"
            justify="center"
            align="center"
            style={{
              padding: "20px 0",
            }}
          >
            <Link to="/login">
              <Button type="primary">Apply Now</Button>
            </Link>
          </Flex>
        </Card>
      </div>
    </Flex>
  );
};

export default JobDetails;
