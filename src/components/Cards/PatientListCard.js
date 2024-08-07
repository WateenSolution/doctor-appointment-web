import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CustomTextBox } from "../CustomComponents/CustomTextBox";
import { Chat } from "../../components";
import {
  EyeOutlined,
  CheckCircleOutlined,
  CloseCircleOutlined,
  ClockCircleOutlined,
  CommentOutlined,
} from "@ant-design/icons";
import { Tooltip, Row, Col, Modal, Button } from "antd";
import { motion } from "framer-motion";

export const PatientListCard = ({
  id,
  lastName,
  firstName,
  image,
  note,
  status,
  icoHeight,
  icoWidth,
  mT,
  mL,
  addAvailableTime,
  doctor,
  appointmentTime,
  user_id,
}) => {
  const navigate = useNavigate();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleEyeClick = () => {
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  const handleApprove = () => {
    addAvailableTime(doctor, appointmentTime, "approved", user_id);
    setIsModalVisible(false);
  };

  const handleChatClick = () => {
    navigate("/live-chat", {
      state: {
        user_id,
        username: firstName + " " + lastName,
        doctor_name: doctor, // Assuming doctor object has name
        doctor_image: image, // Assuming doctor object has image URL
      },
    });
  };

  const renderStatusIcon = (status) => {
    switch (status) {
      case "approved":
        return (
          <CheckCircleOutlined style={{ color: "green", fontSize: "20px" }} />
        );
      case "disapproved":
        return (
          <CloseCircleOutlined style={{ color: "red", fontSize: "20px" }} />
        );
      case "pending":
      default:
        return (
          <ClockCircleOutlined style={{ color: "orange", fontSize: "20px" }} />
        );
    }
  };

  return (
    <div
      className="patientListCard"
      style={{
        marginTop: mT,
        marginLeft: mL,
        padding: "20px",
        background: "linear-gradient(135deg, #4e5faf, #2a3b8f)",
        borderRadius: "12px",
        boxShadow: "0 6px 12px rgba(0, 0, 0, 0.2)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
      }}
      whileHover={{ scale: 1.03 }}
    >
      <Row gutter={[16, 16]} align="middle">
        <Col xs={24} sm={6} md={4}>
          <div className="iconContainer">
            <img
              height={icoHeight || 60}
              width={icoWidth || 60}
              src={image}
              alt={`${firstName} ${lastName}`}
              style={{
                borderRadius: "50%",
                border: "3px solid white",
                boxShadow: "0 6px 12px rgba(0, 0, 0, 0.25)",
                transition: "transform 0.3s ease",
              }}
            />
          </div>
        </Col>
        <Col xs={24} sm={12} md={14}>
          <CustomTextBox
            text={`${firstName} ${lastName}`}
            textFontColor="white"
            textFontSize={18}
            textFontWeight={600}
            textFontFamily="Lato"
            textLineHeight="22px"
            textLetterSpacing={0.2}
          />
          {note && (
            <div className="description">
              <CustomTextBox
                text={note}
                textFontColor="white"
                textFontSize={14}
                textFontWeight={400}
                textFontFamily="Lato"
                textLineHeight="16.8px"
                textLetterSpacing={0.15}
              />
            </div>
          )}
        </Col>
        <Col xs={24} sm={6} md={6}>
          {status && (
            <div className="status">
              {renderStatusIcon(status)} {appointmentTime}
            </div>
          )}
          <div className="additionalIcons">
            <Tooltip title="Live Chat">
              <CommentOutlined
                style={{ fontSize: "20px", color: "#fff", cursor: "pointer" }}
                onClick={handleChatClick}
              />
            </Tooltip>

            <Tooltip title="View Details">
              <EyeOutlined
                style={{ fontSize: "20px", color: "#fff", cursor: "pointer" }}
                onClick={handleEyeClick}
              />
            </Tooltip>
          </div>
        </Col>
      </Row>

      <Modal
        title="Patient Details"
        visible={isModalVisible}
        onCancel={handleCloseModal}
        footer={null}
      >
        <p>
          <strong>Name:</strong> {firstName} {lastName}
        </p>
        {note && (
          <p>
            <strong>Note:</strong> {note}
          </p>
        )}
        {status && (
          <p>
            <strong>Status:</strong> {status}
          </p>
        )}
        {status === "pending" && (
          <div
            style={{
              display: "flex",
              justifyContent: "center", // Centering the button
              marginTop: "20px",
            }}
          >
            <Button type="primary" onClick={handleApprove}>
              Approve
            </Button>
          </div>
        )}
      </Modal>
    </div>
  );
};
