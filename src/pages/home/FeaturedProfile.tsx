import { HeartOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import styles from "./FeaturedProfile.module.css";

const profiles = [
  {
    _id: "1",
    name: "Shane Mac",
    title: "Web Developer",
    img: "/assets/fetured/1.jpg",
  },
  {
    _id: "2",
    name: "Jerry Hudson",
    title: "Busnise Consultant",
    img: "/assets/fetured/2.jpg",
  },
  {
    _id: "3",
    name: "Jac Jacson",
    title: "Web Consultant",
    img: "/assets/fetured/3.jpg",
  },
  {
    _id: "4",
    name: "Tom Potter",
    title: "UI/UX Consultant",
    img: "/assets/fetured/4.jpg",
  },
  {
    _id: "5",
    name: "Jesson Jac",
    title: "Web Consultant",
    img: "/assets/fetured/5.jpg",
  },
  {
    _id: "6",
    name: "Michel Bhon",
    title: "Web Developer",
    img: "/assets/fetured/6.jpg",
  },
  {
    _id: "7",
    name: "Shane Mac",
    title: "Web Developer",
    img: "/assets/fetured/7.jpg",
  },
  {
    _id: "8",
    name: "Shane Mac",
    title: "Web Developer",
    img: "/assets/fetured/8.jpg",
  },
];

const FeaturedProfile = () => {
  return (
    <div className={styles.container}>
      <h1
        data-aos="zoom-in"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"
        style={{ fontSize: "2.2rem", textAlign: "center", margin: "2rem 0" }}
      >
        Featured Profile
      </h1>
      <div className={styles.cardGrid}>
        {profiles?.slice(0, 4).map((profile) => (
          <div
            data-aos="zoom-in"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
            key={profile._id}
            className={styles.Cardcontainer}
          >
            <img src={profile.img} alt="" />
            <div className={styles.textContainer}>
              <h4>{profile.name}</h4>
              <p>{profile.title}</p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontWeight: "bold",
                }}
              >
                <p>
                  <Link
                    style={{ textDecoration: "none", color: "#123770" }}
                    to=""
                  >
                    View Profile
                  </Link>
                </p>
                <p>
                  <Link
                    style={{ textDecoration: "none", color: "#1966D0" }}
                    to=""
                  >
                    <HeartOutlined />
                  </Link>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProfile;
