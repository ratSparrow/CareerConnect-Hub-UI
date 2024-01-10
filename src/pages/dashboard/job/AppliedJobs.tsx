/* eslint-disable @typescript-eslint/no-explicit-any */

import { EyeOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DataTable from "../../../components/ui/dashboard/common/DataTable";
import { getUserInfo } from "../../../services/auth.service";
import { useCompanyAppliedJobsQuery } from "../../../redux/api/jobApi";

const AppliedJobs = () => {
  const { email } = getUserInfo() as any;

  console.log(email);

  const query: Record<string, any> = {};
  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [appliedJob, setAppliedJob] = useState([]);

  query["limit"] = size;
  query["page"] = page;
  query["sortBy"] = sortBy;
  query["sortOrder"] = sortOrder;

  const { data } = useCompanyAppliedJobsQuery(email);

  console.log(data);

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://career-connect-hub-api.vercel.app/api/v1/applied-job/company/${email}`,
          {
            cache: "no-store",
          }
        );
        const data = await res.json();
        setAppliedJob(data.data);
        // console.log(data.data);
      } catch (error) {
        console.error("Error fetching job details:", error);
      }
    };

    fetchData();
  }, [email]);

  const columns = [
    {
      title: "Title",
      dataIndex: "jobId",
    },
    {
      title: "User Id ",
      dataIndex: "id",
    },
    {
      title: "Job Seeker Email",
      dataIndex: "jobSeekerEmail",
    },
    {
      title: "Company Email",
      dataIndex: "companyEmail",
    },
    {
      title: "View Resume",
      dataIndex: "id",
      render: function () {
        return (
          <>
            <Link to={`/user-profile`}>
              <EyeOutlined
                style={{
                  fontSize: "20px",
                  margin: "0px 5px",
                }}
              />
            </Link>
          </>
        );
      },
    },
  ];

  return (
    <div>
      <h2
        style={{
          padding: "15px",
          color: "#1F2B6C",
          textAlign: "center",
        }}
      >
        Applied Job Information
      </h2>
      <DataTable
        dataSource={appliedJob}
        columns={columns}
        showSizeChanger={true}
        showPagination={true}
        pageSize={size}
        onPaginationChange={onPaginationChange}
        onTableChange={onTableChange}
      />
    </div>
  );
};

export default AppliedJobs;
