import React, { useState, useEffect, useRef } from "react";
import { AppContainer, LoaderButton } from "../../components";
import {
  AppointmentFormFields,
  AppointmentVS,
  AppointmentImg,
} from "../../utilities";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Row, Input, DatePicker, TimePicker, Card, Col, Radio } from "antd";
import {
  UserOutlined,
  CalendarOutlined,
  ClockCircleOutlined,
  FileTextOutlined,
} from "@ant-design/icons";

const { TextArea } = Input;

const AppointmentForm = () => {
  const [showSpecifyField, setShowSpecifyField] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const formColumnRef = useRef(null);

  const handleDepartmentChange = (value) => {
    setShowSpecifyField(value === "others");
  };

  const updateScrollProgress = () => {
    const formColumn = formColumnRef.current;
    if (formColumn) {
      const scrollTop = formColumn.scrollTop;
      const scrollHeight = formColumn.scrollHeight;
      const clientHeight = formColumn.clientHeight;
      const scrollPercent = (scrollTop / (scrollHeight - clientHeight)) * 100;
      setScrollProgress(scrollPercent);
    }
  };

  useEffect(() => {
    const formColumn = formColumnRef.current;
    if (formColumn) {
      formColumn.addEventListener("scroll", updateScrollProgress);
    }
    return () => {
      if (formColumn) {
        formColumn.removeEventListener("scroll", updateScrollProgress);
      }
    };
  }, []);

  const onSubmit = (values, { setSubmitting }) => {
    // Handle form submission here
    console.log(values);
    setSubmitting(false);
  };

  return (
    <div className="appointment-form">
      <Row gutter={16} className="content-rows">
        <Col span={12} className="form-column" ref={formColumnRef}>
          <div
            className="progress-bar"
            style={{ width: `${scrollProgress}%` }}
          ></div>
          <Card bordered={false} className="form-card">
            <Formik
              initialValues={AppointmentFormFields}
              validationSchema={AppointmentVS}
              onSubmit={onSubmit}
            >
              {({ handleSubmit, setFieldValue, values }) => (
                <Form onSubmit={handleSubmit}>
                  <div className="form-content">
                    {/* Form fields go here */}
                    <Row gutter={16}>
                      <Col span={24}>
                        <div className="form-group">
                          <label className="label">Patient Name</label>
                          <Row gutter={16}>
                            <Col span={12}>
                              <div className="input-icon">
                                <UserOutlined className="icon" />
                                <Field
                                  name="firstName"
                                  as={Input}
                                  placeholder="First Name"
                                  onChange={(e) => {
                                    setFieldValue("firstName", e.target.value);
                                  }}
                                />
                              </div>
                              <ErrorMessage
                                name="firstName"
                                component="div"
                                className="error"
                              />
                            </Col>
                            <Col span={12}>
                              <div className="input-icon">
                                <UserOutlined className="icon" />
                                <Field
                                  name="lastName"
                                  as={Input}
                                  placeholder="Last Name"
                                  onChange={(e) => {
                                    setFieldValue("lastName", e.target.value);
                                  }}
                                />
                              </div>
                              <ErrorMessage
                                name="lastName"
                                component="div"
                                className="error"
                              />
                            </Col>
                          </Row>
                        </div>
                      </Col>
                      <Col span={24}>
                        <div className="form-group">
                          <label className="label">Doctor</label>
                          <div className="input-icon">
                            <UserOutlined className="icon" />
                            <Field
                              name="doctor"
                              as={Input}
                              placeholder="Doctor"
                              onChange={(e) => {
                                setFieldValue("doctor", e.target.value);
                              }}
                            />
                          </div>
                          <ErrorMessage
                            name="doctor"
                            component="div"
                            className="error"
                          />
                        </div>
                      </Col>
                    </Row>
                    <Row gutter={16}>
                      <Col span={12}>
                        <div className="form-group">
                          <label className="label">Appointment Date</label>
                          <div className="input-icon">
                            <CalendarOutlined className="icon" />
                            <Field name="appointmentDate">
                              {({ field }) => (
                                <DatePicker
                                  {...field}
                                  placeholder="Appointment Date"
                                  style={{ width: "100%" }}
                                  onChange={(date) => {
                                    setFieldValue("appointmentDate", date);
                                  }}
                                />
                              )}
                            </Field>
                          </div>
                          <ErrorMessage
                            name="appointmentDate"
                            component="div"
                            className="error"
                          />
                        </div>
                      </Col>
                      <Col span={12}>
                        <div className="form-group">
                          <label className="label">Appointment Time</label>
                          <div className="input-icon">
                            <ClockCircleOutlined className="icon" />
                            <Field name="appointmentTime">
                              {({ field }) => (
                                <TimePicker
                                  {...field}
                                  placeholder="Appointment Time"
                                  style={{ width: "100%" }}
                                  onChange={(time) => {
                                    setFieldValue("appointmentTime", time);
                                  }}
                                />
                              )}
                            </Field>
                          </div>
                          <ErrorMessage
                            name="appointmentTime"
                            component="div"
                            className="error"
                          />
                        </div>
                      </Col>
                    </Row>
                    <div className="form-group">
                      <label className="label">Medical Department</label>
                      <Field name="specifiedDepartment">
                        {({ field }) => (
                          <div>
                            <Radio.Group
                              {...field}
                              onChange={(e) =>
                                handleDepartmentChange(e.target.value)
                              }
                            >
                              <Radio value="cardiology">Cardiology</Radio>
                              <Radio value="neurology">Neurology</Radio>
                              <Radio value="orthopedics">Orthopedics</Radio>
                              <Radio value="others">Others</Radio>
                            </Radio.Group>
                            {showSpecifyField && (
                              <Field name="specifiedDepartment">
                                {({ field }) => (
                                  <Input
                                    {...field}
                                    placeholder="Specify other department"
                                  />
                                )}
                              </Field>
                            )}
                          </div>
                        )}
                      </Field>
                      <ErrorMessage
                        name="medicalDepartment"
                        component="div"
                        className="error"
                      />
                    </div>
                    <div className="form-group">
                      <label className="label">Additional Notes</label>
                      <div className="input-icon">
                        <FileTextOutlined className="icon" />
                        <Field
                          name="notes"
                          as={TextArea}
                          placeholder="Additional Notes"
                          rows={4}
                        />
                      </div>
                      <ErrorMessage
                        name="notes"
                        component="div"
                        className="error"
                      />
                    </div>
                    <LoaderButton
                      title="Submit"
                      onClick={handleSubmit}
                      // isLoading={loginLoad}
                      className="submit-button"
                    />
                  </div>
                </Form>
              )}
            </Formik>
          </Card>
        </Col>
        <Col span={12} className="image-columns">
          <div className="image-container">
            <img src={AppointmentImg} alt="Appointment" />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default AppointmentForm;
