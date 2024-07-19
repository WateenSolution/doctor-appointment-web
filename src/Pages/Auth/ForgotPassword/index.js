import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AuthHeader, LoaderButton } from "../../../components";
import { ArrowBack } from "@material-ui/icons";
import { forgotPassAction } from "../../../redux/actions";
import { Formik, Field, Form, ErrorMessage } from "formik";
import {
  ForgotPasswordVS,
  forgotFormFields,
  networkText,
} from "../../../utilities";
import { toast } from "react-toastify";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch(null);
  const { forgotLoad } = useSelector((state) => state?.auth);

  const onForgot = async (values) => {
    if (navigator.onLine) {
      const requestBody = {
        email: values.email.trim(),
      };
      const body = {
        values: requestBody,
        onSuccess: async (res) => {
          toast.success("Reset Password Link has been sent to your email");
        },
        onFailure: (res) => {
          toast.error(res?.message || "Internal Server Error");
        },
      };

      dispatch(forgotPassAction(body));
    } else {
      toast.error(networkText);
    }
  };

  return (
    <div>
      <div className="Auth-form-container">
        <AuthHeader />
        <Formik
          initialValues={forgotFormFields}
          validationSchema={ForgotPasswordVS}
          onSubmit={(values) => {
            onForgot(values);
          }}
        >
          {({ errors, status, touched, handleSubmit }) => (
            <Form className="Auth-form" onSubmit={handleSubmit}>
              <div className="Auth-form-content">
                <div className="headCon">
                  <Link to={"/Login"}>
                    <ArrowBack className="icon" />
                  </Link>
                  <h3 className="Auth-form-title">Forgot Password</h3>
                  <div />
                </div>

                <div className="form-group mt-3">
                  <label className="labelText">Email</label>
                  <Field
                    type="text"
                    className="form-control mt-2"
                    placeholder="Enter email"
                    name="email"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="error"
                  />
                </div>

                <LoaderButton
                  title={"Submit"}
                  onClick={handleSubmit}
                  isLoading={forgotLoad}
                />
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default ForgotPassword;
