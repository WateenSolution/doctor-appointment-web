import { Col, Row } from "antd";
import { Form, Formik } from "formik";
import React from "react";

import { AppInput, CommonCard, InputBox } from "../../components";
import {
  ContactUsVS,
  contactUsFormFields,
  contactUsImage,
} from "../../utilities";

export const UserCard = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={contactUsFormFields}
      validationSchema={ContactUsVS}
      onSubmit={(values, { resetForm }) => {
        onSubmit(values);

        resetForm({
          values: {
            name: "",
            email: "",
            subject: "",
            message: "",
          },
        });
      }}
    >
      {({ errors, status, touched, handleSubmit, setFieldValue, values }) => {
        return (
          <Form className="Auth-form" onSubmit={handleSubmit}>
            <CommonCard
              title={"Define new roles"}
              buttonTitle={"Submit"}
              onClick={handleSubmit}
            >
              <Row gutter={[50, 50]} style={{ marginTop: 50 }}>
                {/* Col 1 */}
                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                  <AppInput
                    label={"Subject"}
                    vldName={"subject"}
                    placeholder={"Enter Subject"}
                  />

                  <AppInput
                    label={"Email"}
                    vldName={"email"}
                    placeholder={"Enter Email"}
                  />

                  <AppInput
                    label={"Phone Number"}
                    vldName={"phoneNo"}
                    placeholder={"Enter Phone Number"}
                  />

                  <InputBox
                    label={"Message"}
                    vldName={"message"}
                    placeholder={"Enter Message"}
                  />
                </Col>

                {/* Col 2 */}
                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                  <div className="contactImgCon">
                    <img className="contactUsImg" src={contactUsImage} />
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
