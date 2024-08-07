import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  AppContainer,
  AuthHeader,
  LoaderButton,
  DateIntervalInput,
} from "../../../components";
import { forgotPassAction } from "../../../redux/actions";
import {
  ForgotPasswordVS,
  forgotFormFields,
  networkText,
  loginSide,
} from "../../../utilities";
import { Fade } from "react-awesome-reveal";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Col, Row } from "antd";
import { ArrowBack } from "@material-ui/icons";
import moment from "moment";

const ForgotPassword = () => {
  const [role, setRole] = useState("Patient");
  const [imagePreview, setImagePreview] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { forgotLoad } = useSelector((state) => state?.auth);

  const onForgot = async (values) => {
    if (navigator.onLine) {
      let base64Image = null;
      if (values.picture) {
        const reader = new FileReader();
        reader.onloadend = () => {
          base64Image = reader.result;
          submitForm(values, base64Image);
        };
        reader.readAsDataURL(values.picture);
      } else {
        submitForm(values, base64Image);
      }
    } else {
      toast.error(networkText);
    }
  };

  const submitForm = (values, base64Image) => {
    const requestBody = {
      email: values.email.trim(),
      username: values.username,
      password: values.password,
      role_id: role === "Doctor" ? 1 : 2,
      phone_number: values.phoneNumber,
      image: base64Image,
      qualifications: role === "Doctor" ? values.qualifications : undefined,
      qualification_specialisation:
        role === "Doctor" ? values.qualificationSpecialisation : undefined,
      availability_timing:
        role === "Doctor"
          ? JSON.stringify(
              values.availabilityTiming.map((timing) => ({
                start: moment(timing.start).format("HH:mm:ss"),
                end: moment(timing.end).format("HH:mm:ss"),
              }))
            )
          : undefined,
      remote_inperson: role === "Doctor" ? values.remoteInperson : undefined,
      location: role === "Doctor" ? values.location : undefined,
      experience: role === "Doctor" ? values.experience : undefined,
      certificates: role === "Doctor" ? values.certificates : undefined,
      doctor_fee: role === "Doctor" ? values.doctorFee : undefined,
      about: role === "Doctor" ? values.about : undefined,
    };

    const body = {
      values: requestBody,
      onSuccess: async (res) => {
        toast.success("User Added Successfully");
        navigate("/Login");
      },
      onFailure: (res) => {
        toast.error(res?.message || "Internal Server Error");
      },
    };

    dispatch(forgotPassAction(body));
  };

  return (
    <AppContainer loading={false} style={{ position: "relative" }}>
      <AuthHeader />
      <Row
        justify="center"
        align="middle"
        className="forgot-password-container"
      >
        <Col xs={24} sm={24} md={12} lg={12} xl={12} className="form-column">
          <div className="form-card">
            <div className="form-content">
              <div className="headCon">
                <h3 className="form-title">Sign Up</h3>
              </div>
              <div className="role-selection">
                <label className="label-text">Select Role</label>
                <select
                  className="input-field dropdown-field"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                >
                  <option value="Patient">Patient</option>
                  <option value="Doctor">Doctor</option>
                </select>
              </div>

              <Formik
                initialValues={forgotFormFields}
                validationSchema={ForgotPasswordVS(role)}
                onSubmit={(values) => {
                  onForgot(values);
                }}
              >
                {({ values, errors, touched, handleSubmit, setFieldValue }) => (
                  <Form className="form" onSubmit={handleSubmit}>
                    <div className="form-group mt-3">
                      <label className="label-text">Username</label>
                      <Field
                        type="text"
                        className="input-field mt-2"
                        placeholder="Enter username"
                        name="username"
                      />
                      <ErrorMessage
                        name="username"
                        component="div"
                        className="error-message"
                      />
                    </div>
                    <div className="form-group mt-3">
                      <label className="label-text">Password</label>
                      <Field
                        type="password"
                        className="input-field mt-2"
                        placeholder="Enter password"
                        name="password"
                      />
                      <ErrorMessage
                        name="password"
                        component="div"
                        className="error-message"
                      />
                    </div>
                    <div className="form-group mt-3">
                      <label className="label-text">Email</label>
                      <Field
                        type="email"
                        className="input-field mt-2"
                        placeholder="Enter email"
                        name="email"
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="error-message"
                      />
                    </div>
                    <div className="form-group mt-3">
                      <label className="label-text">Phone Number</label>
                      <Field
                        type="text"
                        className="input-field mt-2"
                        placeholder="Enter phone number"
                        name="phoneNumber"
                      />
                      <ErrorMessage
                        name="phoneNumber"
                        component="div"
                        className="error-message"
                      />
                    </div>
                    <div className="form-group mt-3">
                      <label className="label-text">Picture</label>
                      <input
                        type="file"
                        className="input-field mt-2"
                        name="picture"
                        onChange={(event) => {
                          const file = event.target.files[0];
                          setFieldValue("picture", file);

                          // Preview image
                          const reader = new FileReader();
                          reader.onloadend = () => {
                            setImagePreview(reader.result);
                          };
                          if (file) {
                            reader.readAsDataURL(file);
                          }
                        }}
                      />
                      {imagePreview && (
                        <img
                          src={imagePreview}
                          alt="Preview"
                          className="image-preview"
                        />
                      )}
                      <ErrorMessage
                        name="picture"
                        component="div"
                        className="error-message"
                      />
                    </div>

                    {role === "Doctor" && (
                      <>
                        <div className="form-group mt-3">
                          <label className="label-text">Qualifications</label>
                          <Field
                            type="text"
                            className="input-field mt-2"
                            placeholder="Enter qualifications"
                            name="qualifications"
                          />
                          <ErrorMessage
                            name="qualifications"
                            component="div"
                            className="error-message"
                          />
                        </div>
                        <div className="form-group mt-3">
                          <label className="label-text">
                            Qualification Specialisation
                          </label>
                          <Field
                            as="select"
                            className="input-field dropdown-field mt-2"
                            name="qualificationSpecialisation"
                          >
                            <option value="">Select Specialisation</option>
                            <option value="cardiology">Cardiology</option>
                            <option value="neurology">Neurology</option>
                            <option value="orthopedics">Orthopedics</option>
                            <option value="pediatrics">Pediatrics</option>
                          </Field>
                          <ErrorMessage
                            name="qualificationSpecialisation"
                            component="div"
                            className="error-message"
                          />
                        </div>
                        <div className="form-group mt-3">
                          <label className="label-text">
                            Availability Timing
                          </label>
                          <DateIntervalInput
                            value={values.availabilityTiming}
                            onSelect={(val) =>
                              setFieldValue("availabilityTiming", val)
                            }
                          />
                          <ErrorMessage
                            name="availabilityTiming"
                            component="div"
                            className="error-message"
                          />
                        </div>
                        <div className="form-group mt-3">
                          <label className="label-text">Remote/In-person</label>
                          <Field
                            as="select"
                            className="input-field dropdown-field mt-2"
                            name="remoteInperson"
                          >
                            <option value="">Select Option</option>
                            <option value="remote">Remote</option>
                            <option value="inperson">In-person</option>
                          </Field>
                          <ErrorMessage
                            name="remoteInperson"
                            component="div"
                            className="error-message"
                          />
                        </div>
                        <div className="form-group mt-3">
                          <label className="label-text">Location</label>
                          <Field
                            type="text"
                            className="input-field mt-2"
                            placeholder="Enter location"
                            name="location"
                          />
                          <ErrorMessage
                            name="location"
                            component="div"
                            className="error-message"
                          />
                        </div>
                        <div className="form-group mt-3">
                          <label className="label-text">Experience</label>
                          <Field
                            type="text"
                            className="input-field mt-2"
                            placeholder="Enter experience"
                            name="experience"
                          />
                          <ErrorMessage
                            name="experience"
                            component="div"
                            className="error-message"
                          />
                        </div>
                        <div className="form-group mt-3">
                          <label className="label-text">Certificates</label>
                          <Field
                            type="text"
                            className="input-field mt-2"
                            placeholder="Enter certificates"
                            name="certificates"
                          />
                          <ErrorMessage
                            name="certificates"
                            component="div"
                            className="error-message"
                          />
                        </div>
                        <div className="form-group mt-3">
                          <label className="label-text">Doctor Fee</label>
                          <Field
                            type="text"
                            className="input-field mt-2"
                            placeholder="Enter doctor fee"
                            name="doctorFee"
                          />
                          <ErrorMessage
                            name="doctorFee"
                            component="div"
                            className="error-message"
                          />
                        </div>
                        <div className="form-group mt-3">
                          <label className="label-text">About</label>
                          <Field
                            as="textarea"
                            className="input-field mt-2"
                            placeholder="Tell us about yourself"
                            name="about"
                          />
                          <ErrorMessage
                            name="about"
                            component="div"
                            className="error-message"
                          />
                        </div>
                      </>
                    )}
                    <div className="back-to-login mt-4">
                      <Link to="/Login" className="back-link">
                        <ArrowBack />

                        <span>Back to Login</span>
                      </Link>
                    </div>
                    <div className="form-group mt-3">
                      <LoaderButton
                        title="Submit"
                        onClick={handleSubmit}
                        // isLoading={loginLoad}
                      />
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={12} className="image-column">
          <Fade direction="right" triggerOnce>
            <img
              src={loginSide}
              alt="Login Illustration"
              className="side-image"
            />
          </Fade>
        </Col>
      </Row>
    </AppContainer>
  );
};

export default ForgotPassword;
