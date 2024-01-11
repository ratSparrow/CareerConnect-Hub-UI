/* eslint-disable @typescript-eslint/no-unused-vars */
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Flex } from "antd";
import { Link } from "react-router-dom";
import { getFromLocalStorage } from "../../helpers/utils/saveData";
import { useUserProfileQuery } from "../../redux/api/userApi";

const PersonalInfo = () => {
  const token = getFromLocalStorage("accessToken");

  const {data} = useUserProfileQuery(token)
  
  return (
    <Flex
      wrap="wrap"
      gap="small"
      justify="space-between"
      style={{
        borderBottom: "1px solid black",
        paddingBottom: "10px",
      }}
    >
      <Flex wrap="wrap" gap="middle" justify="space-between" align="start">
        <div>
          <h2>Name: {data?.data?.name.firstName}</h2>
          <p>Email: {data?.data?.email}</p>
          <p>Contact: {data?.data?.phoneNumber}</p>
          <p>Location: {data?.data?.address}</p>
        </div>
        {/* <EditOutlined /> */}
      </Flex>
      <Link to={'/user-profile'}>
      <Avatar size={64} icon={<UserOutlined />} />
      </Link>
    </Flex>
  );
};

export default PersonalInfo;
