import { Col, Row } from "antd";
import { Form, Formik } from "formik";
import React from "react";
import dayjs from "dayjs";

import {
  AppDropDown,
  AppInput,
  CommonCard,
  DateInput,
} from "../../../components";
import {
  Induction1FormFields,
  InductionStep1VS,
  mountType,
  panelKind,
  providerList,
} from "../../../utilities";

export const Step1Comp = ({ onClickNext, stepper, setStepper, data }) => {
  return (
    <Formik
      initialValues={Induction1FormFields(data)}
      validationSchema={InductionStep1VS}
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
                  <AppDropDown
                    label={"Mount Type"}
                    value={values?.mountType || null}
                    placeholder={"Enter Mount Type"}
                    vldName={"mountType"}
                    list={mountType}
                    onSelect={(item) => {
                      setFieldValue("mountType", item);
                    }}
                    labelSize={18}
                    labelWeigh={500}
                    labelColor={"#012D75"}
                  />

                  <DateInput
                    label={"Warranty Ends"}
                    value={
                      values?.warrantyStarts
                        ? dayjs(values?.warrantyStarts, "YYYY-DD-MM")
                        : ""
                    }
                    vldName={"warrantyStarts"}
                    placeholder={"Enter Warranty Shipping Date"}
                    onSelect={(item) => {
                      setFieldValue("warrantyStarts", item);
                    }}
                    labelSize={18}
                    labelWeigh={500}
                    labelColor={"#012D75"}
                  />

                  <AppInput
                    label={"OEM Panel"}
                    vldName={"oemPanels"}
                    placeholder={"Enter OEM Panel"}
                    labelSize={18}
                    labelWeigh={500}
                    labelColor={"#012D75"}
                  />

                  <AppInput
                    label={"Model Name"}
                    vldName={"modelName"}
                    placeholder={"Enter Model Name"}
                    labelSize={18}
                    labelWeigh={500}
                    labelColor={"#012D75"}
                  />
                  <AppInput
                    label={"Pmax (kW)"}
                    vldName={"pMax"}
                    placeholder={"Enter Pmax"}
                    fieldType={"number"}
                    labelSize={18}
                    labelWeigh={500}
                    labelColor={"#012D75"}
                  />
                </Col>

                {/* Col 2 */}
                <Col xs={24} sm={24} md={6} lg={6} xl={6}>
                  <AppDropDown
                    label={"Provider"}
                    value={values?.provider || null}
                    placeholder={"Enter Provider"}
                    vldName={"provider"}
                    list={providerList}
                    onSelect={(item) => {
                      setFieldValue("provider", item);
                    }}
                    labelSize={18}
                    labelWeigh={500}
                    labelColor={"#012D75"}
                  />
                  <AppInput
                    label={"Structure Type"}
                    vldName={"structureType"}
                    placeholder={"Enter Structure Type"}
                    labelSize={18}
                    labelWeigh={500}
                    labelColor={"#012D75"}
                  />
                  <AppInput
                    label={"Module Efficienncy STC (%)"}
                    vldName={"moduleEff"}
                    placeholder={"Enter Module Efficienncy STC"}
                    fieldType={"number"}
                    labelSize={18}
                    labelWeigh={500}
                    labelColor={"#012D75"}
                  />
                  <AppInput
                    label={"Maximum System Voltage (V)"}
                    vldName={"maxSysVolt"}
                    placeholder={"Enter Maximum System Voltage"}
                    fieldType={"number"}
                    labelSize={18}
                    labelWeigh={500}
                    labelColor={"#012D75"}
                  />

                  <AppInput
                    label={"Number of inverters"}
                    vldName={"noOfInv"}
                    placeholder={"Enter Number of inverters"}
                    fieldType={"number"}
                    labelSize={18}
                    labelWeigh={500}
                    labelColor={"#012D75"}
                  />
                </Col>
                {/* Col 3 */}
                <Col xs={24} sm={24} md={6} lg={6} xl={6}>
                  <AppInput
                    label={"Panels Type"}
                    vldName={"panelType"}
                    placeholder={"Enter Panels Type"}
                    labelSize={18}
                    labelWeigh={500}
                    labelColor={"#012D75"}
                  />
                  <AppInput
                    label={"Inverter Datasheet"}
                    vldName={"invDatasheet"}
                    placeholder={"Enter Inverter Datasheet"}
                    fieldType={"number"}
                    labelSize={18}
                    labelWeigh={500}
                    labelColor={"#012D75"}
                  />
                  <AppDropDown
                    label={"Panel Kind"}
                    value={values?.panelKind || null}
                    placeholder={"Enter Panel Kind"}
                    vldName={"panelKind"}
                    list={panelKind}
                    onSelect={(item) => {
                      setFieldValue("panelKind", item);
                    }}
                    labelSize={18}
                    labelWeigh={500}
                    labelColor={"#012D75"}
                  />
                  <DateInput
                    label={"Individual Inverter Commisioning Date"}
                    value={
                      values?.indivInvCommDate
                        ? dayjs(values?.indivInvCommDate, "YYYY-DD-MM")
                        : ""
                    }
                    vldName={"indivInvCommDate"}
                    placeholder={"Enter Individual Inverter Commisioning Date"}
                    onSelect={(item) => {
                      setFieldValue("indivInvCommDate", item);
                    }}
                    labelSize={18}
                    labelWeigh={500}
                    labelColor={"#012D75"}
                  />
                </Col>
                {/* Col 4 */}
                <Col xs={24} sm={24} md={6} lg={6} xl={6}>
                  <AppInput
                    label={"String in MPPTs"}
                    vldName={"stringMppt"}
                    placeholder={"Enter String in MPPTs"}
                    fieldType={"number"}
                    labelSize={18}
                    labelWeigh={500}
                    labelColor={"#012D75"}
                  />
                  <AppInput
                    label={"Total Number of Panels"}
                    vldName={"tNoPanel"}
                    placeholder={"Enter Total Number of Panels"}
                    fieldType={"number"}
                    labelSize={18}
                    labelWeigh={500}
                    labelColor={"#012D75"}
                  />
                  <AppInput
                    label={"Inverter Model"}
                    vldName={"invrModel"}
                    placeholder={"Enter Inverter Model"}
                    labelSize={18}
                    labelWeigh={500}
                    labelColor={"#012D75"}
                  />
                  <AppInput
                    label={"Temperature cofficients of Pmax (°C)"}
                    vldName={"tempCoeff"}
                    placeholder={"Enter Temperature cofficients of Pmax"}
                    fieldType={"number"}
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
