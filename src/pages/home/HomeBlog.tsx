/* eslint-disable @typescript-eslint/no-explicit-any */
import { CalendarOutlined, UserOutlined } from "@ant-design/icons";
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
        backgroundColor: "#E5E3FF",
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
          >
            Recent News Blogs
          </h1>
          <p
            data-aos="zoom-in"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
            style={{
              padding: "1rem 0",
            }}
          >
            Fresh job related news content posted each day.
          </p>
        </div>
        <div className="CardContainer">
          {data?.map((blog: any) => (
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
                <div className="small">
                  <p>
                    <CalendarOutlined />{" "}
                    <span style={{ marginLeft: ".4rem" }}>
                      {blog?.publishDate}
                    </span>
                  </p>
                  <p>
                    <UserOutlined />
                    <span style={{ marginLeft: ".4rem" }}>{blog?.author}</span>
                  </p>
                </div>
                <p className="cardTitle">{blog?.title}</p>
                <p className="cardText">{blog?.content?.slice(0, 143)}</p>
                <Link style={{ fontWeight: "bold" }} to="/blog">
                  Read more
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Col>
    </Row>
  );
};

export default HomeBlog;
