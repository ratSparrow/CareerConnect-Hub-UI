import { CalendarOutlined, UserOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";
import { useEffect, useState } from "react";
import styles from "./Blog.module.css";

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
          backgroundColor: "white",
        }}
      >
        <Col
          sm={23}
          md={23}
          lg={22}
          style={{
            borderRadius: ".5rem",
            margin: "1rem 0",
          }}
        >
          <h1
            style={{
              borderBottom: "1px solid #00A5EC",
              margin: "5px",
              // textAlign: "center",
            }}
          >
            Latest Blogs
          </h1>
          <div className={styles.CardContainer}>
            {data?.map((blog) => (
              <div key={blog?._id} className={styles.CardDesign}>
                <div>
                  <img
                    src={blog?.img}
                    alt="Image"
                    className={styles.cardImage}
                  />
                </div>
                <div className={styles.cardTextContainer}>
                  <p className={styles.cardTitle}>{blog?.title}</p>
                  <p className={styles.cardText}>
                    {blog?.content?.slice(0, 143)}
                  </p>
                  <div className={styles.small}>
                    <p>
                      <CalendarOutlined />{" "}
                      <span style={{ marginLeft: ".4rem" }}>
                        {blog?.publishDate}
                      </span>
                    </p>
                    <p>
                      <UserOutlined />
                      <span style={{ marginLeft: ".4rem" }}>
                        {blog?.author}
                      </span>
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
