/* eslint-disable @typescript-eslint/no-explicit-any */
import { UserOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./HomeBlog.css";

interface Blog {
  _id: string;
  img: string;
  publishDate: string;
  author: string;
  title: string;
  content: string;
}

const HomeBlog = () => {
  const [data, setData] = useState<Blog[] | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/blog.json");
        const jsonData = await res.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Row
      justify="center"
      align="middle"
      style={{
        backgroundColor: "#FFFFFF",
        padding: "3em 0",
      }}
    >
      <Col
        sm={23}
        md={23}
        lg={23}
        style={{
          borderRadius: ".5rem",
          margin: "1rem 0",
        }}
      >
        <div
          style={{
            padding: "1.5rem 0",
            textAlign: "center",
          }}
        >
          <h1
            data-aos="zoom-in"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
            style={{ fontSize: "2.2rem" }}
          >
            Our Latest Blogs
          </h1>
        </div>
        <div className="CardContainer">
          {data?.slice(0, 3).map((blog: any) => (
            <div
              data-aos="zoom-in"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
              key={blog?._id}
              className="CardDesign"
            >
              <div>
                <img src={blog?.img} alt="Image" className="cardImage" />
              </div>
              <div className="cardTextContainer">
                <p className="cardTitle">{blog?.title}</p>
                <div className="small">
                  <p>
                    <UserOutlined />
                    <span style={{ marginLeft: ".4rem" }}>{blog?.author}</span>
                  </p>
                  <p>
                    <Link style={{ fontWeight: "bold" }} to="/blog">
                      Read more
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Col>
    </Row>
  );
};

export default HomeBlog;
