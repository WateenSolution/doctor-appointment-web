import { Col, Row } from "antd";
import { Form, Formik } from "formik";
import React from "react";

import { AppDropDown, AppInput, CommonCard, FilterDropDown } from "../..";
import {
  AddAlarmFormFields,
  AddAlarmVS,
  alarmStatusList,
  priorityList,
} from "../../../utilities";

export const AddAlarmComp = ({ onSubmit, data, sites }) => {
  return (
    <Formik
      initialValues={AddAlarmFormFields}
      validationSchema={AddAlarmVS}
      onSubmit={(values) => {
        onSubmit(values);
      }}
    >
      {({ errors, status, touched, handleSubmit, setFieldValue, values }) => {
        return (
          <Form className="Auth-form" onSubmit={handleSubmit}>
            <CommonCard
              title={"Please fill in the details"}
              mT={50}
              buttonTitle={"Submit"}
              onClick={handleSubmit}
            >
              <Row gutter={[50, 50]} style={{ marginTop: 50 }}>
                {/* Col 1 */}

                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                  <FilterDropDown
                    label={"Site Name"}
                    value={values?.siteName || null}
                    placeholder={"Select Site Code"}
                    vldName={"siteName"}
                    list={sites}
                    onSelect={(item) => {
                      setFieldValue("siteName", item);
                    }}
                  />

                  <AppDropDown
                    label={"Alarm Status"}
                    placeholder={"Enter Alarm Status"}
                    vldName={"alarmStatus"}
                    list={alarmStatusList}
                    onSelect={(item) => {
                      setFieldValue("alarmStatus", item);
                    }}
                  />
                </Col>

                {/* Col 2 */}
                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                  <AppInput
                    label={"Event"}
                    vldName={"event"}
                    placeholder={"Enter Event"}
                  />
                  <AppDropDown
                    label={"Priority"}
                    placeholder={"Enter Priority"}
                    vldName={"priority"}
                    list={priorityList}
                    onSelect={(item) => {
                      setFieldValue("priority", item);
                    }}
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
