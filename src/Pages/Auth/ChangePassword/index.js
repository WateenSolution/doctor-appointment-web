import { Col, Row } from "antd";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  AppHeading,
  ChngPassFormCard,
  ContactFormCard,
} from "../../../components";
import { networkText } from "../../../utilities";
import { changePassAction } from "../../../redux/actions";
import { Box } from "@mui/material";
const ChangePassword = ({ navigation }) => {
  const dispatch = useDispatch(null);
  const navigate = useNavigate();
  const location = useLocation();

  const onSubmit = async (values) => {
    if (navigator.onLine) {
      const requestBody = {
        old_password: values.oldpass.trim(),
        new_password: values.newpass.trim(),
      };
      const body = {
        values: requestBody,
        onSuccess: async (res) => {
          if (res) {
            toast.success("Password Changed Successfully");
          }
        },
        onFailure: (error) => {},
      };

      dispatch(changePassAction(body));
    } else {
      toast.error(networkText);
    }
  };

  return (
    <Col>
      <Box sx={{ p: 3, width: "100%" }}>
        <AppHeading title={"Change Password"} />
        <Row className="rowCard" gutter={[20, 20]}>
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <ChngPassFormCard
              onSubmit={(values) => {
                onSubmit(values);
              }}
            />
          </Col>
        </Row>
      </Box>
    </Col>
  );
};

export default ChangePassword;
