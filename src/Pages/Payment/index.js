import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Fade } from "react-awesome-reveal";
import { AppContainer, AppHeading, LoaderButton } from "../../components";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";

const BillingAndPayment = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    amount: "",
    paymentMethod: "card",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.paymentMethod === "cash") {
      console.log("Processing cash payment for amount:", formData.amount);
    } else {
      console.log("Processing card payment with data:", formData);
    }
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
        <AppHeading title={"Billing and Payment"} titleFontWeight={800} />
        <Fade>
          <form onSubmit={handleSubmit} className="form-container">
            <FormLabel component="legend" className="form-label">
              Payment Method
            </FormLabel>
            <RadioGroup
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleChange}
              row
              className="payment-method"
            >
              <FormControlLabel
                value="card"
                control={<Radio />}
                label="Card Payment"
              />
              <FormControlLabel
                value="cash"
                control={<Radio />}
                label="Cash Payment"
              />
            </RadioGroup>

            {formData.paymentMethod === "card" && (
              <>
                <TextField
                  label="Card Number"
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleChange}
                  fullWidth
                  required
                  className="form-control"
                  variant="outlined"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "6px",
                    },
                  }}
                />
                <TextField
                  label="Expiry Date (MM/YY)"
                  name="expiryDate"
                  value={formData.expiryDate}
                  onChange={handleChange}
                  fullWidth
                  required
                  className="form-control"
                  variant="outlined"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "6px",
                    },
                  }}
                />
                <TextField
                  label="CVV"
                  name="cvv"
                  value={formData.cvv}
                  onChange={handleChange}
                  fullWidth
                  required
                  className="form-control"
                  variant="outlined"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "6px",
                    },
                  }}
                />
              </>
            )}
            <TextField
              label="Amount"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              fullWidth
              required
              className="form-control"
              variant="outlined"
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "6px",
                },
              }}
            />
            <LoaderButton
              title="Submit"
              onClick={handleSubmit}
              //isLoading={loginLoad}
            />
          </form>
        </Fade>
      </Box>
    </AppContainer>
  );
};

export default BillingAndPayment;
