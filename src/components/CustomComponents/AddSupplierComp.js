import { Col, Row } from "antd";
import { Form, Formik } from "formik";
import React, { useRef, useEffect } from "react";
import dayjs from "dayjs";

import { AppInput, CommonCard, DateInput } from "../../components";
import { AddSupplierFormFields, addSupplierFormVS } from "../../utilities";

export const AddSupplierComp = ({ onSave }) => {
  return (
    <Formik
      initialValues={AddSupplierFormFields()}
      validationSchema={addSupplierFormVS}
      onSubmit={(values, { resetForm }) => {
        onSave(values);

        resetForm({
          values: {
            name: "",
            tariff: null,
          },
        });
      }}
    >
      {({ errors, status, touched, handleSubmit, setFieldValue, values }) => {
        return (
          <Form className="Auth-form" onSubmit={handleSubmit}>
            <CommonCard
              title={"Please fill in the details to add a supplier"}
              mT={50}
              buttonTitle={"Add Supplier"}
              onClick={handleSubmit}
            >
              <Row gutter={[50, 50]} style={{ marginTop: 10 }}>
                {/* Col 1 */}
                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                  <AppInput
                    label={`Supplier Name`}
                    vldName={"name"}
                    placeholder={"Enter Supplier Name"}
                    fieldType={"text"}
                  />
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                  <AppInput
                    label={`Base Terrif`}
                    vldName={"tariff"}
                    placeholder={"Enter Terrif Value"}
                    fieldType={"float"}
                  />
                </Col>
              </Row>
            </CommonCard>
          </Form>
        );
      }}
    </Formik>
  );
};
