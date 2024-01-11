/* eslint-disable @typescript-eslint/no-explicit-any */
import { UserOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import style from "./Blog.module.css";

interface Blog {
  _id: string;
  img: string;
  publishDate: string;
  author: string;
  title: string;
  content: string;
}

const Blog = () => {
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
    <>
      <Row
        justify="center"
        align="middle"
        style={{
          backgroundColor: "#FFFFFF",
        }}
      >
        <div className={style.header}>
          <div>
            <h1 style={{ fontSize: "2.4rem", marginBottom: "1rem" }}>Blog</h1>
            <p style={{ fontSize: "1.3rem" }}>
              {" "}
              <Link style={{ color: "white" }} to="/">
                Home
              </Link>{" "}
              {">"} Blog
            </p>
          </div>
        </div>
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
          ></div>
          <div className={style.CardContainer}>
            {data?.map((blog: any) => (
              <div
                data-aos="zoom-in"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000"
                key={blog?._id}
                className={style.CardDesign}
              >
                <div>
                  <img
                    src={blog?.img}
                    alt="Image"
                    className={style.cardImage}
                  />
                </div>
                <div className={style.cardTextContainer}>
                  <p className={style.cardTitle}>{blog?.title}</p>
                  <div className={style.small}>
                    <p>
                      <UserOutlined />
                      <span style={{ marginLeft: ".4rem" }}>
                        {blog?.author}
                      </span>
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
    </>
  );
};

export default Blog;
