import { Button, Col, Row } from "antd";
import { useState } from "react";
import GlobalModal from "../../components/shared/GlobalModal";
import HomePageModal from "./homePageModal";
import { Link } from "react-router-dom";

const HomePageBanner = () => {
  const [open, setOpen] = useState(false);
  const userData = localStorage.getItem("userInfo")
  const parseData = JSON.parse(userData)
  const role = parseData?.role

  console.log(role)

  return (
    <>
      <Row
        justify="center"
        align="middle"
        style={{
          padding: "0 20px",
          color: "white",
          backgroundColor: "#123770",
        }}
      >
        <Col xs={24} sm={12} data-aos="zoom-in-right" data-aos-duration="1000">
          <p>CareerConnect Hub FOR EMPLOYERS</p>
          <h1
            style={{
              fontSize: "40px",
              padding: "30px 0",
            }}
          >
            Find Your Next Job with CareerConnect Hub
          </h1>
          <p
            style={{
              fontSize: "18px",
              paddingBottom: "30px",
            }}
          >
            No matter the skills, experience, or qualifications you’re looking
            for, you’ll find the right people on CareerConnect Hub’s matching
            and hiring platform.
          </p>
          {
            role == "recruiter" ? <Button
              size="large"
              style={{
                padding: "0 30px",
                fontSize: "18px",
                background: "#4096FF",
                color: "white",
                border: "none",
              }}
            >
              <Link to="/dashboard/job/create">Post a Job</Link>
            </Button> : <Button
              onClick={() => setOpen(true)}
              size="large"
              style={{
                padding: "0 30px",
                fontSize: "18px",
                background: "#4096FF",
                color: "white",
                border: "none",
              }}
            >
              Post a Job
            </Button>
          }
        </Col>
        <Col xs={24} sm={12} data-aos="zoom-in-left" data-aos-duration="1000">
          <img
            style={{
              width: "100%",
            }}
            src="/assets/home2.png"
            alt="Banner Image"
          />
        </Col>
        <GlobalModal
          open={open}
          setOpen={setOpen}
          width={600}
          title={"Let's create your account"}
        >
          <div className="">
            <HomePageModal></HomePageModal>
          </div>
        </GlobalModal>
      </Row>
    </>
  );
};

export default HomePageBanner;
