import { Col, Row } from "antd";
import { Form, Formik } from "formik";
import React from "react";
import { useSelector } from "react-redux";
import {
  CommonCard,
  DateIntervalInput,
  FilterDropDown,
  LoaderButton,
} from "../../components";
import {
  customReportImage,
  preReportFormFields,
  preReportVS,
  switchOptions,
} from "../../utilities";
import Item from "antd/es/list/Item";

export const PreReportCard = ({ mT, sites, onSubmit, formats, setFormat }) => {
  const initialSelectedIndex = switchOptions.findIndex(
    ({ value }) => value === "daily"
  );
  const { reportLoad } = useSelector((state) => state?.report);
  return (
    <Formik
      initialValues={preReportFormFields}
      validationSchema={preReportVS}
      onSubmit={(values, { resetForm }) => {
        onSubmit(values);
      }}
    >
      {({ errors, status, touched, handleSubmit, setFieldValue, values }) => {
        return (
          <Form className="Auth-form" onSubmit={handleSubmit}>
            <CommonCard mT={mT} title={"Generate Report (Predefined-Template)"}>
              {/* <div className="topCon">
                <Col
                  className="switchButtonInner"
                  xs={24}
                  sm={24}
                  md={8}
                  lg={8}
                  xl={8}
                >
                  <SwitchSelector
                    onChange={(item) => {
                      setViewOption(item);
                    }}
                    options={switchOptions}
                    initialSelectedIndex={initialSelectedIndex}
                    backgroundColor={"var(--g3)"}
                    fontColor={"var(--b1)"}
                    wrapperBorderRadius={50}
                    optionBorderRadius={50}
                  />
                </Col>
              </div>
              <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                <CalendarComponent
                  boxWidth={50}
                  boxHeight={50}
                  borderRadius={10}
                  wrapperBackgroundColor={"var(--w1)"}
                  selectedDate={selectedDate}
                  setSelectedDate={(item) => setSelectedDate(item)}
                  viewOption={viewOption}
                  mT={50}
                />
              </Col> */}
              <Row className="preRepbottomCon" gutter={[0, 50]}>
                <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                  <FilterDropDown
                    label={"Site "}
                    value={values?.site || null}
                    placeholder={"Select Site"}
                    vldName={"site"}
                    list={sites.map((data) => data?.label)}
                    onSelect={(item) => {
                      setFieldValue("site", item);
                    }}
                  />

                  <DateIntervalInput
                    label={"Time Period"}
                    // value={values?.timePeriod}
                    vldName={"timePeriod"}
                    placeholder={"Enter Time Period"}
                    onSelect={(item) => {
                      setFieldValue("timePeriod", item);
                    }}
                  />

                  <FilterDropDown
                    label={"Export Type"}
                    value={values?.reportFormat || null}
                    placeholder={"Select Format"}
                    vldName={"reportFormat"}
                    list={formats.map((data) => data?.value)}
                    onSelect={(item) => {
                      setFieldValue("reportFormat", item);
                      setFormat(item);
                    }}
                  />
                  <div className="Auth-form-content">
                    <LoaderButton
                      title={"Generate"}
                      onClick={handleSubmit}
                      isLoading={reportLoad}
                    />
                  </div>
                  {/* <CommonCard
                    buttonTitle={"Generate"}
                    onClick={handleSubmit}
                  ></CommonCard> */}
                </Col>

                <Col className="imgCon" xs={24} sm={24} md={16} lg={16} xl={16}>
                  <img
                    className="preReportImg"
                    height={"90%"}
                    width={"50%"}
                    src={customReportImage}
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
