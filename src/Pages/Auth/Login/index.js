import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AppContainer, AuthHeader, LoaderButton } from "../../../components";
import { loginAction } from "../../../redux/actions";
import {
  LoginVS,
  loginFormFields,
  networkText,
  loginSide,
} from "../../../utilities";

import { Fade } from "react-awesome-reveal";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Col, Row } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loginLoad } = useSelector((state) => state?.auth);

  const onLogin = async (values) => {
    if (navigator.onLine) {
      const requestBody = {
        username: values.username.trim(),
        password: values.password.trim(),
      };
      const body = {
        values: requestBody,
        onSuccess: async (res) => {
          if (res) {
            if (res?.user?.role === "Installer") {
              navigate("/induction");
            } else {
              navigate("/");
            }
          }
        },
        onFailure: (error) => {
          toast.error("Login failed");
        },
      };
      dispatch(loginAction(body));
    } else {
      toast.error(networkText);
    }
  };

  return (
    <AppContainer loading={false} style={{ position: "relative" }}>
      <div>
        <AuthHeader />
        <Row justify="center" align="middle" className="Auth-form-container">
          <Col xs={24} sm={24} md={12} lg={12} xl={12} className="Image-column">
            <Fade direction="left" triggerOnce>
              <img src={loginSide} alt="Auth" className="Auth-image" />
            </Fade>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12} className="Form-column">
            <Formik
              initialValues={loginFormFields}
              validationSchema={LoginVS}
              onSubmit={(values) => {
                onLogin(values);
              }}
            >
              {({ handleSubmit }) => (
                <Form className="Auth-form" onSubmit={handleSubmit}>
                  <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Welcome!</h3>
                    <div className="form-group mt-3">
                      <label className="labelText">Username</label>
                      <div className="input-icon">
                        <UserOutlined className="icon" />
                        <Field
                          type="text"
                          className="form-control mt-1"
                          placeholder="Enter username"
                          name="username"
                        />
                      </div>
                      <ErrorMessage
                        name="username"
                        component="div"
                        className="error"
                      />
                    </div>
                    <div className="form-group mt-3">
                      <label className="labelText">Password</label>
                      <div className="input-icon">
                        <LockOutlined className="icon" />
                        <Field
                          type="password"
                          className="form-control mt-1"
                          placeholder="Enter password"
                          name="password"
                        />
                      </div>
                      <ErrorMessage
                        name="password"
                        component="div"
                        className="error"
                      />
                    </div>
                    <div className="remember-forgot-container">
                      <div className="remember-me">
                        <Field
                          type="checkbox"
                          name="rememberMe"
                          id="rememberMe"
                        />
                        <label
                          htmlFor="rememberMe"
                          className="custom-checkbox"
                        ></label>
                        <label>Remember Me</label>
                      </div>
                      <div className="linkText">
                        <Link to="/sign-Up">Sign-Up</Link>
                      </div>
                    </div>
                    <LoaderButton
                      title="Login"
                      onClick={handleSubmit}
                      isLoading={loginLoad}
                    />
                  </div>
                </Form>
              )}
            </Formik>
          </Col>
        </Row>
      </div>
    </AppContainer>
  );
};

export default Login;
