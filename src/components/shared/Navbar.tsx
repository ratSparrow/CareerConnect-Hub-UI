/* eslint-disable @typescript-eslint/no-explicit-any */

import blueLogo from "../../assets/images/1-removebg-preview.png";

import {
  MenuOutlined,
  QuestionCircleOutlined,
  UserOutlined,
} from "@ant-design/icons";
import {
  Avatar,
  Button,
  Divider,
  Drawer,
  Dropdown,
  Menu,
  MenuProps,
  Space,
} from "antd";

import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getUserInfo, removeUserInfo } from "../../services/auth.service";

const NavBar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [role, setRole] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    // Fetch user role on mount
    const { role } = getUserInfo() as any;
    setRole(role);
  }, []);
  // console.log(role);

  const handleLogout = (accessToken: string) => {
    removeUserInfo(accessToken);
    return navigate("/login");
  };

  const items: MenuProps["items"] = [];

  if (role === "applicant") {
    items.push(
      {
        key: "1",
        label: <Link to={`/user-profile`}>Profile</Link>,
      },
      {
        key: "2",
        label: <Link to={`/resume`}>Edit Resume</Link>,
      },
      {
        key: "3",
        label: <Link to={`/my-application`}>My Application</Link>,
      }
    );
  }

  return (
    <div style={{}}>
      <div
        style={{
          backgroundColor: "#2d2d2d",
          height: "4rem",
          padding: "0rem 1rem",
        }}
        className="menuIcon"
      >
        <MenuOutlined
          style={{ color: "white", fontSize: "30px" }}
          onClick={() => {
            setOpenMenu(true);
          }}
        />
      </div>
      <div
        className="headerMenu"
        style={{
          backgroundColor: "#2d2d2d",
          height: "4rem",
          padding: "0rem 1rem",
          width: "100%",
        }}
      >
        <Link to="/">
          {" "}
          <img
            src={blueLogo}
            alt="Logo"
            width={200}
            style={{ marginRight: "10px", height: "80px" }}
          />
        </Link>
        <NavMenu />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Link
            to="/career-services"
            style={{
              color: "white",
              fontSize: "0.9rem",
              backgroundColor: "#2d2d2d",
              border: "none",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "7rem",
            }}
          >
            <p>Help Center</p>
            <QuestionCircleOutlined
              style={{
                fontWeight: "bolder",
                fontSize: "1.2rem",
                marginLeft: "0.4rem",
              }}
            />
          </Link>
          <Divider
            type="vertical"
            style={{
              backgroundColor: "#949494",
              height: "2rem",
              margin: "0 1.5rem",
            }}
          />

          {role ? (
            <Button
              onClick={() => handleLogout("accessToken")}
              size="large"
              type="primary"
              style={{
                fontSize: "1rem",
                fontWeight: "bold",
                borderRadius: "5px",
                border: "none",
                cursor: "pointer",
              }}
            >
              Log out
            </Button>
          ) : (
            <Link
              to={"/login"}
              style={{
                cursor: "pointer",
              }}
            >
              <button
                style={{
                  backgroundColor: "#2557a7",
                  color: "white",
                  fontSize: "1rem",
                  fontWeight: "bold",
                  padding: "0.6rem 1rem",
                  borderRadius: "5px",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Login
              </button>
            </Link>
          )}

          <Divider
            type="vertical"
            style={{
              backgroundColor: "#949494",
              height: "2rem",
              margin: "0 1.5rem",
            }}
          />
          <Link
            to="/find-job"
            style={{
              color: "white",
              fontSize: "0.9rem",
              backgroundColor: "#2d2d2d",
              border: "none",
              textDecoration: "none",
              width: "8rem",
            }}
          >
            Find jobs
          </Link>
        </div>

        {role && (
          <Space size={16} wrap>
            <Dropdown menu={{ items }}>
              <Space wrap size={16}>
                <Avatar
                  style={{ backgroundColor: "#87d068" }}
                  icon={<UserOutlined />}
                />
              </Space>
            </Dropdown>
          </Space>
        )}
      </div>
      <Drawer
        // placement="left"
        open={openMenu}
        onClose={() => {
          setOpenMenu(false);
        }}
        closable={false}
        style={{ backgroundColor: "#2d2d2d" }}
      >
        <NavMenu isInline />
      </Drawer>
    </div>
  );
};

const NavMenu = ({ isInline = false }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Menu
        style={{
          color: "white",
          fontSize: "0.9rem",
          backgroundColor: "#2d2d2d",
          border: "none",
        }}
        mode={isInline ? "inline" : "horizontal"}
        className="custom-menu" // Add className here
        items={[
          {
            label: (
              <Link
                to="/"
                // target="_blank"
                rel="noopener noreferrer"
              >
                Home
              </Link>
            ),
            key: "home",
          },
          {
            label: (
              <Link
                to="/contact"
                // target="_blank"
                rel="noopener noreferrer"
              >
                Contact
              </Link>
            ),
            key: "contact",
          },
          {
            label: (
              <Link
                to="/blog"
                // target="_blank"
                rel="noopener noreferrer"
              >
                Blog
              </Link>
            ),
            key: "blog",
          },
        ]}
      ></Menu>
    </div>
  );
};

export default NavBar;
