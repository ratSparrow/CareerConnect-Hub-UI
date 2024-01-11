/* eslint-disable @typescript-eslint/no-explicit-any */

import { FileTextOutlined, ImportOutlined } from "@ant-design/icons";
import { Button, Col, Row } from "antd";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DataTable from "../../../components/ui/dashboard/common/DataTable";
import { getUserInfo } from "../../../services/auth.service";

const MyApplicationPage = () => {
  const query: Record<string, any> = {};
  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [applicationData, setApplicationData] = useState();
  const [email, setEmail] = useState(null);

  useEffect(() => {
    // Fetch user role on mount
    const { email } = getUserInfo() as any;
    setEmail(email);
  }, []);
  //   console.log(email);

  query["limit"] = size;
  query["page"] = page;
  query["sortBy"] = sortBy;
  query["sortOrder"] = sortOrder;

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (email) {
          const res = await fetch(
            `https://career-connect-hub-api.vercel.app/api/v1/applied-job/applicant/${email}`,
            {
              cache: "no-store",
            }
          );
          const data = await res.json();
          setApplicationData(data?.data);
        }
      } catch (error) {
        console.error("Error fetching Blog details:", error);
      }
    };

    fetchData();
  }, [email]);

  if (!applicationData) {
    return <p>Loading...</p>;
  }

  console.log(applicationData);

  const onPaginationChange = (page: number, pageSize: number) => {
    console.log("Page:", page, "PageSize:", pageSize);
    setPage(page);
    setSize(pageSize);
  };
  const onTableChange = (sorter: any) => {
    const { order, field } = sorter;
    // console.log(order, field);
    setSortBy(field as string);
    setSortOrder(order === "ascend" ? "asc" : "desc");
  };

  const columns = [
    {
      title: "COMPANY",
      dataIndex: ["jobId", "company"],
      key: "company",
    },
    {
      title: "PROFILE",
      dataIndex: ["jobId", "title"],
      key: "profile",
    },
    {
      title: "",
      dataIndex: ["jobId", "id"],
      key: "jobDetail",
      render: (id: any) => (
        <Link to={`/details/${id}`}>
          <span style={{ color: "#00A6E5", fontSize: "1rem" }}>
            <ImportOutlined />
          </span>
        </Link>
      ),
    },
    {
      title: "APPLIED ON",
      dataIndex: "createdAt",
      key: "date",
    },
    {
      title: "Job Type",
      dataIndex: ["jobId", "jobType"],
      key: "applicationStatus",
      render: (text: any) => (
        <Button type="primary" style={{ fontWeight: "bold" }} ghost>
          {text}
        </Button>
      ),
    },
    {
      title: "REVIEW APPLICATION",
      dataIndex: ["jobId", "id"],
      key: "reviewApplication",
      render: (id: any) => (
        <Link to={`/details/${id}`}>
          <span style={{ color: "#00A6E5", fontSize: "1rem" }}>
            <FileTextOutlined />
          </span>
        </Link>
      ),
    },
  ] as const;

  return (
    <Row justify="center" style={{ minHeight: "100vh" }}>
      <Col sm={22} md={22} lg={22}>
        <h1 style={{ textAlign: "center", margin: "2rem 0" }}>
          My Applications
        </h1>
        <DataTable
          columns={columns}
          dataSource={applicationData}
          showSizeChanger={true}
          showPagination={true}
          pageSize={size}
          onPaginationChange={onPaginationChange}
          onTableChange={onTableChange}
        />
      </Col>
    </Row>
  );
};

export default MyApplicationPage;
