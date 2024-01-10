/* eslint-disable @typescript-eslint/no-explicit-any */

import { Button, Col, Row, message } from "antd";
import { useAddCompanyMutation } from "../../redux/api/companyApi";
import Form from "../../components/Form/Form";
import FormInput from "../../components/Form/FormInput";
import FormSelectField from "../../components/Forms/FormSelectField";
import { sizes } from "../../components/constant/global";
import FormTextArea from "../../components/Forms/FormTextArea";

const AddCompany = () => {
  const [addCompany] = useAddCompanyMutation();

  const onSubmit = async (companyData: any) => {
    const options = {
      data: {
        name: companyData.name,
        description: companyData.description,
        industry: companyData.industry,
        location: companyData.location,
        website: companyData.website,
        logoUrl: companyData.logoUrl,
        size: companyData.size,
        password: companyData.password,
        numberOfEmployees: companyData.numberOfEmployees,
        introducing: companyData.introducing,
        socialMedia: {
          twitter: companyData.twitter,
          linkedin: companyData.linkedin,
          facebook: companyData.facebook,
        },
        contact: {
          email: companyData.email,
          phone: companyData.phone,
          address: companyData.address,
        },
      },
    };
    message.loading("Publishing...");
    try {
      console.log(options);
      await addCompany(options);
      message.success("Company published successfully");
    } catch (err: any) {
      console.error(err.message);
      message.error(err.message);
    }
  };

  return (
    <>
      <div
        style={{
          marginTop: "10px",
          marginBottom: "4rem",
          borderRadius: "10px",
          width: "100%",
          maxWidth: "1100px",
          margin: "auto",
        }}
      >
        <Form submitHandler={onSubmit}>
          <h2
            style={{
              color: "#1F2B6C",
              marginBottom: "1rem",
              marginTop: "1rem",
            }}
          >
            Sign Up For Your Company
          </h2>
          <div
            style={{
              border: "1px solid #d9d9d9",
              borderRadius: "5px",
              padding: "15px",
              margin: "10px 0",
            }}
          >
            <p
              style={{
                fontSize: "18px",
                marginBottom: "10px",
              }}
            >
              Contact Information
            </p>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col
                xs={24}
                sm={12}
                md={8}
                lg={8}
                style={{
                  margin: "5px 0",
                }}
              >
                <FormInput
                  name="email"
                  type="text"
                  label="Email"
                  size="small"
                />
              </Col>
              <Col
                xs={24}
                sm={12}
                md={8}
                lg={8}
                style={{
                  margin: "5px 0",
                }}
              >
                <FormInput
                  name="password"
                  type="password"
                  label="Password"
                  size="small"
                />
              </Col>
              <Col
                xs={24}
                sm={12}
                md={8}
                lg={8}
                style={{
                  margin: "5px 0",
                }}
              >
                <FormInput
                  name="phone"
                  type="text"
                  label="Phone"
                  size="small"
                />
              </Col>
              <Col
                xs={24}
                sm={12}
                md={8}
                lg={8}
                style={{
                  margin: "5px 0",
                }}
              >
                <FormInput
                  name="twitter"
                  type="text"
                  size="small"
                  label="Twitter"
                />
              </Col>
              <Col
                xs={24}
                sm={12}
                md={8}
                lg={8}
                style={{
                  margin: "5px 0",
                }}
              >
                <FormInput
                  name="linkedin"
                  type="text"
                  size="small"
                  label="Linkedin"
                />
              </Col>
              <Col
                xs={24}
                sm={12}
                md={8}
                lg={8}
                style={{
                  margin: "5px 0",
                }}
              >
                <FormInput
                  name="facebook"
                  type="text"
                  size="small"
                  label="Facebook"
                />
              </Col>
            </Row>
          </div>

          <div
            style={{
              border: "1px solid #d9d9d9",
              borderRadius: "5px",
              padding: "15px",
              margin: "10px 0",
            }}
          >
            <p
              style={{
                fontSize: "18px",
                marginBottom: "10px",
              }}
            >
              Company Information
            </p>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col
                xs={24}
                sm={12}
                md={8}
                lg={8}
                style={{
                  margin: "5px 0",
                }}
              >
                <FormInput name="name" type="text" label="Name" size="small" />
              </Col>
              <Col
                xs={24}
                sm={12}
                md={8}
                lg={8}
                style={{
                  margin: "5px 0",
                }}
              >
                <FormInput
                  name="industry"
                  type="text"
                  label="Industry"
                  size="small"
                />
              </Col>
              <Col
                xs={24}
                sm={12}
                md={8}
                lg={8}
                style={{
                  margin: "5px 0",
                }}
              >
                <FormInput
                  name="location"
                  type="text"
                  label="Location"
                  size="small"
                />
              </Col>
              <Col
                xs={24}
                sm={12}
                md={8}
                lg={8}
                style={{
                  margin: "5px 0",
                }}
              >
                <FormInput
                  name="address"
                  type="text"
                  label="Address"
                  size="small"
                />
              </Col>
              <Col
                xs={24}
                sm={12}
                md={8}
                lg={8}
                style={{
                  margin: "5px 0",
                }}
              >
                <FormSelectField
                  name="size"
                  label="size"
                  size="small"
                  options={sizes}
                />
              </Col>
              <Col
                xs={24}
                sm={12}
                md={8}
                lg={8}
                style={{
                  margin: "5px 0",
                }}
              >
                <FormInput
                  name="numberOfEmployees"
                  type="text"
                  label="Number Of Employees"
                  size="small"
                />
              </Col>
            </Row>
          </div>

          <div
            style={{
              border: "1px solid #d9d9d9",
              borderRadius: "5px",
              padding: "15px",
              margin: "10px 0",
            }}
          >
            <p
              style={{
                fontSize: "18px",
                marginBottom: "10px",
              }}
            >
              Others
            </p>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col
                xs={24}
                sm={12}
                md={8}
                lg={8}
                style={{
                  margin: "5px 0",
                }}
              >
                <FormInput
                  name="website"
                  type="text"
                  size="small"
                  label="Website"
                />
              </Col>
              <Col
                xs={24}
                sm={12}
                md={8}
                lg={8}
                style={{
                  margin: "5px 0",
                }}
              >
                <FormInput
                  name="logoUrl"
                  type="text"
                  size="small"
                  label="LogoUrl"
                />
              </Col>
              <Col
                xs={24}
                sm={12}
                md={8}
                lg={8}
                style={{
                  margin: "5px 0",
                }}
              >
                <FormInput
                  name="introducing"
                  type="text"
                  size="small"
                  label="Introducing"
                />
              </Col>
              <Col
                xs={24}
                sm={12}
                md={8}
                lg={8}
                style={{
                  margin: "10px 0",
                }}
              >
                <FormTextArea name="description" label="Description" rows={3} />
              </Col>
            </Row>
          </div>
          <div style={{ margin: "10px 0" }}>
            <Button type="primary" htmlType="submit" size="large">
              Submit
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default AddCompany;
