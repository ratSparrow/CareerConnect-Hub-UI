/* eslint-disable @typescript-eslint/ban-ts-comment */

import { AppstoreOutlined } from "@ant-design/icons";

import type { MenuProps } from "antd";
import { Link } from "react-router-dom";
//@ts-ignore
import { USER_ROLE } from "./role";

export const sidebarItems = (role: string) => {
  const adminSidebarItems: MenuProps["items"] = [
    {
      label: "Manage Company",
      key: "company",
      icon: <AppstoreOutlined />,
      children: [
        {
          label: <Link to="/dashboard/company">View Company</Link>,
          key: `/${role}/dashboard/company`,
        },
      ],
    },
    {
      label: "Manage Blog",
      key: "blog",
      icon: <AppstoreOutlined />,
      children: [
        {
          label: <Link to="/dashboard/blog">View Blog</Link>,
          key: `/${role}/dashboard/blog`,
        },
        {
          label: <Link to="/dashboard/blog/create">Publish a Blog</Link>,
          key: `/${role}/dashboard/blog/create`,
        },
      ],
    },
  ];

  const recruiterSidebarItems: MenuProps["items"] = [
    {
      label: <Link to="/dashboard/job/create">Publish a Job</Link>,
      key: `/${role}/dashboard/job/create`,
    },
    {
      label: <Link to="/dashboard/job">View Job</Link>,
      key: `/${role}/dashboard/job`,
    },
    {
      label: <Link to="/dashboard/job/applied-jobs">Applied Job</Link>,
      key: `/${role}/dashboard/job/appliedJob`,
    },
  ];

  if (role === USER_ROLE.ADMIN) return adminSidebarItems;
  else if (role === USER_ROLE.RECRUITER) return recruiterSidebarItems;
};
