import { Col, Row } from "antd";
import { Form, Formik } from "formik";
import React from "react";
import { AppInput, CommonCard } from "../../components";
import {
  ChngPassVS,
  chngPass,
  chngPassFormFields,
  users,
} from "../../utilities";

export const ChngPassFormCard = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={chngPassFormFields}
      validationSchema={ChngPassVS}
      onSubmit={(values, { resetForm }) => {
        onSubmit(values);

        resetForm({
          values: {
            newpass: "",
            oldpass: "",
          },
        });
      }}
    >
      {({ errors, status, touched, handleSubmit, setFieldValue, values }) => {
        return (
          <Form className="Auth-form" onSubmit={handleSubmit}>
            <CommonCard
              title={"Change you password"}
              buttonTitle={"Submit"}
              onClick={handleSubmit}
            >
              <Row gutter={[50, 50]} style={{ marginTop: 50 }}>
                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                  <AppInput
                    label={"Old Password"}
                    vldName={"oldpass"}
                    placeholder={"Enter Your Old Password"}
                    fieldType={"password"}
                  />
                  <AppInput
                    label={"New Password"}
                    vldName={"newpass"}
                    placeholder={"Enter Your New Password"}
                    fieldType={"password"}
                  />
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                  <div className="contactImgCon">
                    <img height={"50%"} width={"50%"} src={chngPass} />
                  </div>
                </Col>
              </Row>
            </CommonCard>
          </Form>
        );
      }}
    </Formik>
  );
};
