import { useEffect, useState } from "react";
import { isLoggedIn } from "../../services/auth.service";
import { Layout, Row, Space, Spin } from "antd";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import SideBar from "../ui/dashboard/common/Sidebar";
import Contents from "../ui/dashboard/common/Contents";

const DashboardLayout = () => {
  const { pathname } = useLocation();
  const userLoggedIn = isLoggedIn();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  useEffect(() => {
    if (!userLoggedIn) {
      <Navigate to="/login" state={{ path: pathname }} />;
    }
    setIsLoading(true);
  }, [pathname, isLoading, userLoggedIn]);

  if (!isLoading) {
    return (
      <Row
        justify="center"
        align="middle"
        style={{
          height: "100vh",
        }}
      >
        <Space>
          <Spin tip="Loading" size="large"></Spin>
        </Space>
      </Row>
    );
  }
  return (
    <Layout hasSider>
      <SideBar />
      <Contents>
        <Outlet />
      </Contents>
    </Layout>
  );
};

export default DashboardLayout;
