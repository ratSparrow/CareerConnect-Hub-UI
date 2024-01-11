import { Col, Divider, Row } from "antd";
import { Link } from "react-router-dom";
import style from "./Contact.module.css";

const Contact = () => {
  return (
    <>
      <Row
        justify="center"
        align="middle"
        style={{
          backgroundColor: "#EEEEEE",
        }}
      >
        <Col
          sm={23}
          md={23}
          lg={23}
          style={{
            backgroundColor: "white",
            borderRadius: ".5rem",
            padding: "1.5rem",
            margin: "1rem",
          }}
        >
          <h1
            style={{
              color: "#123770",

              fontSize: "1.6rem",
            }}
          >
            Contact Information
          </h1>
          <Divider />
          <p
            style={{
              color: "#2F66B8",
              marginBottom: ".8rem",
            }}
          >
            Dial{" "}
            <span
              style={{
                color: "#FF0000",
                fontSize: "1.3rem",
                fontWeight: "bold",
              }}
            >
              16479, 09612444888
            </span>{" "}
            from any number.
          </p>
          <p style={{}}>
            {" "}
            <span style={{ fontWeight: "bold" }}>N.B.</span> Our Contact Centre
            is available from 9 am to 8 pm (Saturday to Thursday).
          </p>
          <Divider />

          <div className={style.text}>
            <p>
              This Site and its content are provided as is and SEPL and its
              directors, employees, content providers, agents and affiliates
              exclude, to the fullest extent permitted by applicable law, any
              warranty, express or implied, including, without limitation, any
              implied warranties of merchantability, satisfactory quality or
              fitness for a particular purpose. SEPL will not be liable for any
              damages of any kind arising from the use of this site. The
              functions embodied on or in the materials of this site are not
              warranted to be uninterrupted or without error. You, not SEPL
              and/or Internshala, assume the entire cost of all necessary care
              or correction due to your use of this site or content. SEPL makes
              no warranty that the site or the content is free from infection by
              viruses or anything else that has contaminating or destructive
              properties. SEPL uses reasonable efforts to ensure the accuracy,
              correctness and reliability of the Content, but we make no
              representations or warranties for the same. Images of people or
              places displayed on the Site are either the property of, or used
              with permission by, SEPL or third parties. The use of these images
              by you, or anyone else authorized by you, is prohibited unless
              specifically permitted by these Terms or specific permission
              provided elsewhere on the Site or by separate license or
              agreement. Any unauthorized use of these images may violate
              copyright laws, trademark laws, the laws of privacy and publicity,
              and other applicable laws.
            </p>
          </div>
          <div className={style.office}>
            <div style={{ display: "flex", gap: "1rem" }}>
              <img
                className={style.img}
                src="/assets/contact_icon1.jpg"
                alt=""
              />
              <div className="">
                <p style={{ marginBottom: ".3rem" }}>Meshjob, Street Name</p>
                <p style={{ marginBottom: ".3rem" }}>
                  6901,Melbourne Australia
                </p>
              </div>
            </div>
            <div style={{ display: "flex", gap: "1rem" }}>
              <img
                className={style.img}
                src="/assets/contact_icon2.jpg"
                alt=""
              />
              <div className="">
                <p style={{ marginBottom: ".3rem" }}>+440 875369208 - Office</p>
                <p style={{ marginBottom: ".3rem" }}>+440 353363114 - Fax</p>
              </div>
            </div>
            <div style={{ display: "flex", gap: "1rem" }}>
              <img
                className={style.img}
                src="/assets/contact_icon3.jpg"
                alt=""
              />
              <div className="">
                <p>
                  <Link to="" style={{ marginBottom: ".3rem" }}>
                    support@careerConnectHub.com
                  </Link>
                </p>
                <p>
                  <Link to="" style={{ marginBottom: ".3rem" }}>
                    info@careerConnectHub.com
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Contact;
