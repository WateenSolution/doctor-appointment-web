import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthHeader, LoaderButton } from "../../../components";
import { loginAction, resetPassAction } from "../../../redux/actions";
import {
  ResetPassVS,
  networkText,
  resetPassFormFields,
} from "../../../utilities";

const ResetPassword = () => {
  const dispatch = useDispatch(null);
  const navigate = useNavigate();
  const { resetLoad } = useSelector((state) => state?.auth);

  const onSubmit = async (values) => {
    if (navigator.onLine) {
      const requestBody = {
        password: values.password.trim(),
      };
      const body = {
        values: requestBody,
        onSuccess: async (res) => {
          if (res) {
            toast.success("Password Reset Successfully!!");
            navigate("/login");
          }
        },
        onFailure: (error) => {},
      };

      dispatch(resetPassAction(body));
    } else {
      toast.error(networkText);
    }
  };

  return (
    <div>
      <div className="Auth-form-container">
        <AuthHeader />
        <Formik
          initialValues={resetPassFormFields}
          validationSchema={ResetPassVS}
          onSubmit={(values) => {
            onSubmit(values);
          }}
        >
          {({ errors, status, touched, handleSubmit }) => (
            <Form className="Auth-form" onSubmit={handleSubmit}>
              <div className="Auth-form-content">
                <h3 className="Auth-form-title">Reset Password</h3>
                <div className="form-group mt-3">
                  <label className="labelText">Password</label>
                  <Field
                    type="password"
                    className="form-control mt-1"
                    placeholder="Enter password"
                    name="password"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="error"
                  />
                </div>

                <div className="form-group mt-3">
                  <label className="labelText">Confirm Password</label>
                  <Field
                    type="password"
                    className="form-control mt-1"
                    placeholder="Confirm password"
                    name="cpassword"
                  />
                  <ErrorMessage
                    name="cpassword"
                    component="div"
                    className="error"
                  />
                </div>

                <LoaderButton
                  title={"Submit"}
                  onClick={handleSubmit}
                  isLoading={resetLoad}
                />
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default ResetPassword;
