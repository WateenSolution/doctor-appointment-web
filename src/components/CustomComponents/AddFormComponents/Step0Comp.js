import { Col, Row } from "antd";
import dayjs from "dayjs";
import { Form, Formik } from "formik";
import React from "react";

import {
  AlarmDropDown,
  AppDropDown,
  AppInput,
  CommonCard,
  DateInput,
  FilterDropDown,
  InputBox,
} from "../../../components";
import {
  Induction0FormFields,
  InductionStep0VS,
  citiesList,
  regionList,
  siteType1,
  siteType2,
  siteCategory,
  exportType,
} from "../../../utilities";
import { CreatableDropDown } from "../../DropDowns/creatableDropDown";

export const Step0Comp = ({ onClickNext, stepper, setStepper, data, org }) => {
  return (
    <Formik
      initialValues={Induction0FormFields(data)}
      validationSchema={InductionStep0VS}
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
              titleFontSize={21}
              titleFontWeight={400}
              buttonTitle={"Next"}
              onClick={handleSubmit}
            >
              <Row style={{ marginTop: 30 }}>
                {/* Col 1 */}

                <Col xs={24} sm={24} md={6} lg={6} xl={6}>
                  <AppInput
                    label={"Site Id"}
                    vldName={"siteId"}
                    placeholder={"Enter Site Id"}
                    disabled={data?.status === "Approved" ? true : false}
                    labelSize={18}
                    labelWeigh={500}
                    labelColor={"#012D75"}
                  />

                  <AppInput
                    label={"Site Name"}
                    vldName={"siteName"}
                    placeholder={"Enter a Site Name"}
                    labelSize={18}
                    labelWeigh={500}
                    labelColor={"#012D75"}
                  />
                  <AppDropDown
                    label={"Export Type"}
                    value={values?.exportType || null}
                    placeholder={"Select Export Type"}
                    vldName={"exportType"}
                    list={exportType}
                    onSelect={(item) => {
                      setFieldValue("exportType", item);
                    }}
                    labelSize={18}
                    labelWeigh={500}
                    labelColor={"#012D75"}
                  />
                  <FilterDropDown
                    label={"City"}
                    value={values?.city || null}
                    placeholder={"Enter City"}
                    vldName={"city"}
                    list={citiesList}
                    onSelect={(item) => {
                      setFieldValue("city", item);
                    }}
                    labelSize={18}
                    labelWeigh={500}
                    labelColor={"#012D75"}
                  />
                </Col>

                {/* Col 2 */}
                <Col xs={24} sm={24} md={6} lg={6} xl={6}>
                  <AppDropDown
                    label={"Region"}
                    value={values?.region || null}
                    placeholder={"Enter Region"}
                    vldName={"region"}
                    list={regionList}
                    onSelect={(item) => {
                      setFieldValue("region", item);
                    }}
                    labelSize={18}
                    labelWeigh={500}
                    labelColor={"#012D75"}
                  />

                  <AppDropDown
                    label={"Site Type"}
                    value={values?.siteType1 || null}
                    placeholder={"Enter Site Type"}
                    vldName={"siteType1"}
                    list={siteType1}
                    onSelect={(item) => {
                      setFieldValue("siteType1", item);
                    }}
                    labelSize={18}
                    labelWeigh={500}
                    labelColor={"#012D75"}
                  />
                  <AppInput
                    label={"Latitude"}
                    vldName={"latitude"}
                    placeholder={"Enter Latitude"}
                    labelSize={18}
                    labelWeigh={500}
                    labelColor={"#012D75"}
                  />
                  <DateInput
                    label={"Site Commissioning Date"}
                    value={
                      values?.siteCommDate
                        ? dayjs(values?.siteCommDate, "YYYY-DD-MM")
                        : ""
                    }
                    vldName={"siteCommDate"}
                    placeholder={"Enter Site Commissioning Date"}
                    onSelect={(item) => {
                      setFieldValue("siteCommDate", item);
                    }}
                    labelSize={18}
                    labelWeigh={500}
                    labelColor={"#012D75"}
                  />
                </Col>

                {/* Col 3 */}
                <Col xs={24} sm={24} md={6} lg={6} xl={6}>
                  <AppInput
                    label={"Project Id"}
                    vldName={"projectId"}
                    placeholder={"Enter Project Id"}
                    disabled={data?.status === "Approved" ? true : false}
                    labelSize={18}
                    labelWeigh={500}
                    labelColor={"#012D75"}
                  />
                  <CreatableDropDown
                    label={"Client Name"}
                    value={values?.clientName || null}
                    placeholder={"Enter Client Name"}
                    vldName={"clientName"}
                    list={org || []}
                    onSelect={(item) => {
                      setFieldValue("clientName", item);
                    }}
                    labelSize={18}
                    labelWeigh={500}
                    labelColor={"#012D75"}
                    // onInput={(item) => setFieldValue("clientName", item)}
                  />

                  <AppInput
                    label={"System Size (kW)"}
                    vldName={"systemSize"}
                    placeholder={"Enter System Size"}
                    fieldType={"number"}
                    labelSize={18}
                    labelWeigh={500}
                    labelColor={"#012D75"}
                  />
                  <AppInput
                    label={"Longitude"}
                    vldName={"longitude"}
                    placeholder={"Enter Longitude"}
                    labelSize={18}
                    labelWeigh={500}
                    labelColor={"#012D75"}
                  />
                </Col>
                {/* Col 4 */}
                <Col xs={24} sm={24} md={6} lg={6} xl={6}>
                  <AppDropDown
                    label={"System Type"}
                    value={values?.siteType2 || null}
                    placeholder={"Enter Site Type"}
                    vldName={"siteType2"}
                    list={siteType2}
                    onSelect={(item) => {
                      setFieldValue("siteType2", item);
                    }}
                    labelSize={18}
                    labelWeigh={500}
                    labelColor={"#012D75"}
                  />
                  <AppDropDown
                    label={"Site Category"}
                    value={values?.siteCategory || null}
                    placeholder={"Enter Site Category"}
                    vldName={"siteCategory"}
                    list={siteCategory}
                    onSelect={(item) => {
                      setFieldValue("siteCategory", item);
                    }}
                    labelSize={18}
                    labelWeigh={500}
                    labelColor={"#012D75"}
                  />
                  <InputBox
                    label={"Postal Address"}
                    vldName={"postalName"}
                    placeholder={"Enter Postal Address"}
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
