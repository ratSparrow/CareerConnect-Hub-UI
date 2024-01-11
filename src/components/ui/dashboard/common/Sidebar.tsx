/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Layout, Menu } from "antd";

import { Link } from "react-router-dom";
import { getUserInfo } from "../../../../services/auth.service";
import { sidebarItems } from "../../../constant/sidebarItems";
import logo from "../../../../assets/images/1-removebg-preview.png"

const { Sider } = Layout;

const SideBar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const { role } = getUserInfo() as any;

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      width={280}
      style={{
        overflow: "auto",
        height: "100vh",
        position: "sticky",
        left: 0,
        top: 0,
        bottom: 0,
      }}
    >
      <div
        style={{
          color: "white",
          fontSize: "1rem",
          textAlign: "center",
          fontWeight: "bold",
          marginBottom: ".5rem",
          padding: "10px 0px",
        }}
      >
        <Link to="/">
          <img src={logo} className="dashboardLogo" style={{
            // height: "50px",
            // width: "200px",
            // borderRadius: "50%",
            // marginBottom: "10px"
          }}/>
        </Link>
      </div>
      <Menu
        theme="dark"
        defaultSelectedKeys={["1"]}
        mode="inline"
        items={sidebarItems(role)}
      />
    </Sider>
  );
};

export default SideBar;
