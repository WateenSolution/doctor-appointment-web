import React, { useState, useEffect, useRef } from "react";
import { AppContainer, LoaderButton } from "../../components";
import {
  AppointmentFormFields,
  AppointmentVS,
  AppointmentImg,
  networkText,
} from "../../utilities";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Row, Input, Select, Card, Col, Radio } from "antd";
import {
  getUserDetAction,
  getAppointTimeAction,
  submitAppointmentFormAction,
} from "../../redux/actions";
import { UserOutlined } from "@ant-design/icons";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const { Option } = Select;
const { TextArea } = Input;

const AppointmentForm = ({ id }) => {
  const navigate = useNavigate();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isDateTimeEnabled, setIsDateTimeEnabled] = useState(false);
  const formColumnRef = useRef(null);

  const dispatch = useDispatch();
  const { usersInfo, appointmentBook } = useSelector(
    (state) => state?.appointment
  );

  useEffect(() => {
    getUserData(id);
  }, [id]);

  const getUserData = async (id) => {
    if (navigator.onLine) {
      const requestBody = { id: id };
      const body = {
        values: requestBody,
        onSuccess: async (res) => {},
        onFailure: (error) => {
          toast.error(networkText);
        },
      };
      dispatch(getUserDetAction(body));
    } else {
      toast.error(networkText);
    }
  };

  const getAvailableTime = async (values) => {
    if (navigator.onLine) {
      const requestBody = {
        name: values,
      };

      const body = {
        values: requestBody,
        onSuccess: async (res) => {},
        onFailure: (error) => {
          toast.error(networkText);
        },
      };

      dispatch(getAppointTimeAction(body));
    } else {
      toast.error(networkText);
    }
  };
  const addAppForm = async (values, id) => {
    if (navigator.onLine) {
      const selectedDoctor = usersInfo.find(
        (doctor) => doctor.id === values?.doctor
      );
      const doctor = selectedDoctor?.username;
      const { firstName, lastName, appointmentTime, notes } = values; // Extract values

      const requestBody = {
        firstName,
        lastName,
        doctor,
        appointmentTime,
        notes,
      };

      const body = {
        values: requestBody,
        onSuccess: async (res) => {
          toast.success("Appointment Booked Successfully");
          navigate("/");
        },
        onFailure: (error) => {
          toast.error(networkText);
        },
      };

      dispatch(submitAppointmentFormAction(body));
    } else {
      toast.error(networkText);
    }
  };

  const handleDoctorChange = (value, setFieldValue) => {
    setFieldValue("doctor", value);
    setIsDateTimeEnabled(!!value);

    if (value) {
      const selectedDoctor = usersInfo.find((doctor) => doctor.id === value);
      if (selectedDoctor) {
        console.log("fields", selectedDoctor);
        getAvailableTime(selectedDoctor?.username);
        setFieldValue("doctorFee", selectedDoctor.doctor_fee || "");
        setFieldValue("doctorEmail", selectedDoctor.email || "");
      }
    }
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
              onSubmit={addAppForm}
            >
              {({ handleSubmit, setFieldValue }) => (
                <Form onSubmit={handleSubmit}>
                  <div className="form-content">
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
                            <Field name="doctor">
                              {({ field }) => (
                                <Select
                                  {...field}
                                  style={{ width: "100%" }}
                                  placeholder="Select Doctor"
                                  onChange={(value) =>
                                    handleDoctorChange(value, setFieldValue)
                                  }
                                >
                                  {(usersInfo || []).map((doctor) => (
                                    <Option key={doctor.id} value={doctor.id}>
                                      {doctor.username}
                                    </Option>
                                  ))}
                                </Select>
                              )}
                            </Field>
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
                      <Col span={24}>
                        <div className="form-group">
                          <label className="label">Doctor Fee</label>
                          <div className="input-icon">
                            <Field
                              name="doctorFee"
                              as={Input}
                              placeholder="Doctor Fee"
                              disabled
                            />
                          </div>
                          <ErrorMessage
                            name="doctorFee"
                            component="div"
                            className="error"
                          />
                        </div>
                      </Col>
                      <Col span={24}>
                        <div className="form-group">
                          <label className="label">Doctor Email</label>
                          <div className="input-icon">
                            <Field
                              name="doctorEmail"
                              as={Input}
                              placeholder="Doctor Email"
                              disabled
                            />
                          </div>
                          <ErrorMessage
                            name="doctorEmail"
                            component="div"
                            className="error"
                          />
                        </div>
                      </Col>
                      <Col span={24}>
                        <div className="form-group">
                          <label className="label">Appointment Time</label>
                          <div className="input-icon">
                            <Field name="appointmentTime">
                              {({ field }) => (
                                <Select
                                  {...field}
                                  style={{ width: "100%" }}
                                  onChange={(value) =>
                                    setFieldValue("appointmentTime", value)
                                  }
                                  disabled={!isDateTimeEnabled} // Disable if no doctor is selected
                                  placeholder="Select Appointment Time"
                                >
                                  {appointmentBook?.[0]?.available_slots.map(
                                    (time) => (
                                      <Option key={time} value={time}>
                                        {time}
                                      </Option>
                                    )
                                  )}
                                </Select>
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
                      <label className="label">Additional Notes</label>
                      <Field
                        name="notes"
                        as={TextArea}
                        rows={4}
                        placeholder="Comment some symptoms here..."
                      />
                    </div>
                    <div className="form-group">
                      <LoaderButton
                        title="Submit"
                        onClick={handleSubmit}
                        className="submit-button"
                      />
                    </div>
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
