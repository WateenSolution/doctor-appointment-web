import React from "react";
import { useDispatch } from "react-redux";
import { AppContainer, AppHeading, LoaderButton } from "../../components";
import { Box, Button, TextField } from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { PaymentBillingVS, billingForm } from "../../utilities";

const BillingAndPayment = () => {
  const dispatch = useDispatch();

  const handlePaymentMethodChange = (setFieldValue, method) => {
    setFieldValue("paymentMethod", method);
    if (method === "cash") {
      setFieldValue("paypalEmail", "");
    }
  };

  const handleSubmit = (values, { setSubmitting }) => {
    setSubmitting(true);
    if (values.paymentMethod === "cash") {
      console.log("Processing cash payment for amount:", values.amount);
    } else if (values.paymentMethod === "paypal") {
      console.log("Processing PayPal payment with data:", values);
    }
    setSubmitting(false);
  };

  return (
    <AppContainer
      style={{
        position: "relative",
        backgroundColor: "#f7f9fc",
        padding: "30px",
      }}
    >
      <Box sx={{ width: "100%" }}>
        <AppHeading
          title={"Billing and Payment"}
          titleFontWeight={800}
          dateCheck={true}
        />

        <Formik
          initialValues={billingForm}
          validationSchema={PaymentBillingVS}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, setFieldValue, values }) => (
            <Form className="form-container">
              <div className="payment-method-container">
                <Button
                  variant="outlined"
                  className={`payment-method-button ${
                    values.paymentMethod === "cash" ? "active" : ""
                  }`}
                  onClick={() =>
                    handlePaymentMethodChange(setFieldValue, "cash")
                  }
                >
                  Cash Payment
                </Button>
                <Button
                  variant="outlined"
                  className={`payment-method-button ${
                    values.paymentMethod === "paypal" ? "active" : ""
                  }`}
                  onClick={() =>
                    handlePaymentMethodChange(setFieldValue, "paypal")
                  }
                >
                  PayPal Payment
                </Button>
              </div>

              {values.paymentMethod === "paypal" && (
                <div className="form-group">
                  <label className="labelText">PayPal Email</label>
                  <Field
                    type="email"
                    name="paypalEmail"
                    className="form-control"
                    as={TextField}
                    fullWidth
                    variant="outlined"
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "6px",
                      },
                    }}
                  />
                  <ErrorMessage
                    name="paypalEmail"
                    component="div"
                    className="error"
                  />
                </div>
              )}

              <div className="form-group">
                <label className="labelText">Card Number</label>
                <Field
                  type="text"
                  name="cardNumber"
                  className="form-control"
                  as={TextField}
                  fullWidth
                  variant="outlined"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "6px",
                    },
                  }}
                />
                <ErrorMessage
                  name="cardNumber"
                  component="div"
                  className="error"
                />
              </div>

              <div className="form-group">
                <label className="labelText">Expiry Date</label>
                <Field
                  type="text"
                  name="expiryDate"
                  className="form-control"
                  placeholder="MM/YY"
                  as={TextField}
                  fullWidth
                  variant="outlined"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "6px",
                    },
                  }}
                />
                <ErrorMessage
                  name="expiryDate"
                  component="div"
                  className="error"
                />
              </div>

              <div className="form-group">
                <label className="labelText">CVV</label>
                <Field
                  type="text"
                  name="cvv"
                  className="form-control"
                  as={TextField}
                  fullWidth
                  variant="outlined"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "6px",
                    },
                  }}
                />
                <ErrorMessage name="cvv" component="div" className="error" />
              </div>

              <div className="form-group">
                <label className="labelText">Card Holder Name</label>
                <Field
                  type="text"
                  name="cardHolderName"
                  className="form-control"
                  as={TextField}
                  fullWidth
                  variant="outlined"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "6px",
                    },
                  }}
                />
                <ErrorMessage
                  name="cardHolderName"
                  component="div"
                  className="error"
                />
              </div>

              <div className="form-group">
                <label className="labelText">Billing Address</label>
                <Field
                  type="text"
                  name="billingAddress"
                  className="form-control"
                  as={TextField}
                  fullWidth
                  variant="outlined"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "6px",
                    },
                  }}
                />
                <ErrorMessage
                  name="billingAddress"
                  component="div"
                  className="error"
                />
              </div>

              <div className="form-group">
                <label className="labelText">Phone Number</label>
                <Field
                  type="text"
                  name="phoneNumber"
                  className="form-control"
                  as={TextField}
                  fullWidth
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "6px",
                    },
                  }}
                />
                <ErrorMessage
                  name="phoneNumber"
                  component="div"
                  className="error"
                />
              </div>

              <div className="form-group">
                <label className="labelText">Amount</label>
                <Field
                  type="text"
                  name="amount"
                  className="form-control"
                  as={TextField}
                  fullWidth
                  variant="outlined"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "6px",
                    },
                  }}
                />
                <ErrorMessage name="amount" component="div" className="error" />
              </div>

              <LoaderButton
                title="Submit"
                type="submit"
                disabled={isSubmitting}
                // isLoading={isSubmitting}
              />
            </Form>
          )}
        </Formik>
      </Box>
    </AppContainer>
  );
};

export default BillingAndPayment;
