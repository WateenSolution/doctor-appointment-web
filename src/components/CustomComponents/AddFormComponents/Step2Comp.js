import { Col, Row } from "antd";
import { Form, Formik } from "formik";
import React from "react";

import { AppInput, CommonCard } from "../../../components";
import { Induction2FormFields, InductionStep2VS } from "../../../utilities";
import { FilterDropDown } from "../../../components";

export const Step2Comp = ({ onClickNext, stepper, setStepper, data, supp }) => {
  return (
    <Formik
      initialValues={Induction2FormFields(data)}
      validationSchema={InductionStep2VS}
      onSubmit={(values) => {
        onClickNext(values);
        setStepper(stepper + 1);
      }}
    >
      {({ errors, status, touched, handleSubmit, setFieldValue, values }) => {
        return (
          <Form className="Auth-form" onSubmit={handleSubmit}>
            <CommonCard
              title={"Please fill in the details"}
              buttonTitle={"Next"}
              secButtonTitle={"Previous"}
              secOnClick={() => {
                setStepper(stepper - 1);
              }}
              onClick={handleSubmit}
              titleFontSize={21}
              titleFontWeight={400}
            >
              <Row style={{ marginTop: 30 }}>
                {/* Col 1 */}
                <Col xs={24} sm={24} md={6} lg={6} xl={6}>
                  <AppInput
                    label={"Inverter Supplier Name"}
                    vldName={"invrSupplName"}
                    placeholder={"Enter Inverter Supplier Name"}
                    labelSize={18}
                    labelWeigh={500}
                    labelColor={"#012D75"}
                  />
                  <AppInput
                    label={"Mechnaical Contractor Name"}
                    vldName={"mechContrName"}
                    placeholder={"Enter Mechnaical Contractor Name"}
                    labelSize={18}
                    labelWeigh={500}
                    labelColor={"#012D75"}
                  />
                </Col>

                {/* Col 2 */}
                <Col xs={24} sm={24} md={6} lg={6} xl={6}>
                  <AppInput
                    label={"POC"}
                    vldName={"poc"}
                    placeholder={"Enter POC"}
                    labelSize={18}
                    labelWeigh={500}
                    labelColor={"#012D75"}
                  />
                  <FilterDropDown
                    label={"Grid Supplier Name"}
                    value={values?.gridSupplName || null}
                    placeholder={"Enter Grid Supplier Name"}
                    vldName={"gridSupplName"}
                    list={supp || []}
                    onSelect={(item) => {
                      setFieldValue("gridSupplName", item);
                    }}
                    labelSize={18}
                    labelWeigh={500}
                    labelColor={"#012D75"}
                  />
                </Col>
                {/* Col 3 */}
                <Col xs={24} sm={24} md={6} lg={6} xl={6}>
                  <AppInput
                    label={"POC Number"}
                    vldName={"pocNo"}
                    placeholder={"Enter POC Number"}
                    fieldType={"number"}
                    labelSize={18}
                    labelWeigh={500}
                    labelColor={"#012D75"}
                  />
                  <AppInput
                    label={"Electrical Contractor Name"}
                    vldName={"electContrName"}
                    placeholder={"Enter Electrical Contractor Name"}
                    labelSize={18}
                    labelWeigh={500}
                    labelColor={"#012D75"}
                  />
                </Col>
                {/* Col 4 */}
                <Col xs={24} sm={24} md={6} lg={6} xl={6}>
                  <AppInput
                    label={"Reference Number of electricity bill"}
                    vldName={"refElectBill"}
                    placeholder={"Enter Reference Number  of electricity bill"}
                    labelSize={18}
                    labelWeigh={500}
                    labelColor={"#012D75"}
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
