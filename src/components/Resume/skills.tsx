/* eslint-disable @typescript-eslint/no-explicit-any */

import { DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Col, Flex, Row, message } from "antd";
import {
  JSXElementConstructor,
  Key,
  ReactElement,
  ReactNode,
  ReactPortal,
  useState,
} from "react";
import {
  useDeleteSkillMutation,
  useSkillsQuery,
} from "../../redux/api/skillApi";
import { getUserInfo } from "../../services/auth.service";
import SkillModal from "../ResumeModal/SkillModal";
import GlobalModal from "../shared/GlobalModal";

const Skills = () => {
  const [open, setOpen] = useState(false);

  const query: Record<string, any> = {};
  const { data } = useSkillsQuery({ ...query });
  const { email } = getUserInfo() as any;
  const skillData = data?.data;
  const [deleteSkill] = useDeleteSkillMutation();

  const deleteHandler = async (id: string) => {
    message.loading("Deleting.....");
    try {
      const res = await deleteSkill(id);
      if (res) {
        message.success("Skill deleted successfully");
      }
    } catch (err: any) {
      message.error(err.message);
    }
  };

  const filteredByEmail = skillData?.filter(
    (skill: any) => skill.userEmail === email
  );

  return (
    <>
      <Row
        style={{
          borderBottom: "1px solid black",
          padding: "10px 0",
        }}
      >
        <Col xs={24} sm={8}>
          <p>SKILLS</p>
        </Col>
        <Col xs={24} sm={16}>
          <Col>
            {filteredByEmail?.map((skill: any) => (
              <Flex wrap="wrap" gap="middle" align="start" key={skill._id}>
                {skill?.skills?.map(
                  (
                    item:
                      | string
                      | number
                      | boolean
                      | ReactElement<any, string | JSXElementConstructor<any>>
                      | Iterable<ReactNode>
                      | ReactPortal
                      | null
                      | undefined,
                    index: Key | null | undefined
                  ) => (
                    <div
                      key={index}
                      style={{
                        padding: "5px 0",
                        display: "flex",
                        flexWrap: "wrap",
                        width: "100%",
                      }}
                    >
                      <h4
                        style={{
                          width: "20%",
                        }}
                      >
                        {item}
                      </h4>
                      <Button onClick={() => deleteHandler(skill?._id)}>
                        <DeleteOutlined />
                      </Button>
                    </div>
                  )
                )}
              </Flex>
            ))}
          </Col>
          <div>
            <Button type="link" onClick={() => setOpen(true)}>
              <PlusOutlined />
              Add Skill
            </Button>
          </div>
          <GlobalModal open={open} setOpen={setOpen} width={650} title={""}>
            <SkillModal />
          </GlobalModal>
        </Col>
      </Row>
    </>
  );
};

export default Skills;
