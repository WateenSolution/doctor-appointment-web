import React, { useState } from "react";
import {
  CalendarTwoTone,
  ClockCircleTwoTone,
  UserOutlined,
  MessageTwoTone,
  PhoneOutlined,
  StarOutlined,
} from "@ant-design/icons";
import { Tooltip, Modal, Rate } from "antd";
import { motion } from "framer-motion";
import moment from "moment";
import { Col, Row } from "antd";

export const UpcomAppDocCard = ({
  appointmentTime,
  status,
  pendingMessage,
  calendar,
  profile,
  available,
  fee,
  firstName,
  lastName,
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const formattedMonth = moment(calendar).format("MMM");
  const formattedDateDay = moment(calendar).format("Do");

  const formattedTime = moment(appointmentTime, "HH:mm:ss").format("hh:mm:ss");

  const IconComponent = available === "remote" ? PhoneOutlined : UserOutlined;

  const handleCardClick = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const modalContent = (
    <div style={{ textAlign: "center" }}>
      <h2 style={{ fontSize: "24px", fontWeight: "600", marginBottom: "15px" }}>
        Doctor Details
      </h2>
      <img
        src={profile}
        alt="Profile"
        style={{
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          border: "2px solid #4e5faf",
          objectFit: "cover",
          marginBottom: "10px",
        }}
      />
      <h3 style={{ fontSize: "20px", fontWeight: "500", marginBottom: "10px" }}>
        {firstName + " "}
        {lastName}
      </h3>
      <p style={{ fontSize: "16px", color: "#666" }}>
        Appointment Time: {formattedMonth} {formattedDateDay} at {formattedTime}
      </p>
      <p style={{ fontSize: "16px", color: "#666" }}>
        Availability: {available} meeting
      </p>
      <p style={{ fontSize: "16px", color: "#666" }}>
        Message: {pendingMessage}
      </p>
      <p style={{ fontSize: "16px", color: "#666" }}>Fee: Rs. {fee}</p>
    </div>
  );

  return (
    <>
      <motion.div
        className="upcomAppPatCard"
        style={{
          padding: "20px",
          backgroundColor: "#ffffff",
          borderRadius: "12px",
          border: "1px solid #e3e3e3",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          color: "#333",
          marginTop: "15px",
          position: "relative",
          width: "100%",
          maxWidth: "500px",
        }}
        whileHover={{ scale: 1.05 }}
        onClick={handleCardClick}
      >
        {/* Status Tag */}
        <div
          style={{
            position: "absolute",
            top: "10px",
            left: "10px",
            backgroundColor:
              status === "approved"
                ? "#52c41a"
                : status === "pending"
                ? "#faad14"
                : "#f5222d",
            color: "#fff",
            padding: "5px 10px",
            borderRadius: "5px",
            fontSize: "10px",
            fontWeight: "bold",
            textTransform: "uppercase",
          }}
        >
          {status}
        </div>

        {/* Calendar Icon at the Top Right Corner */}
        <div
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Tooltip title="Appointment Date">
            <CalendarTwoTone
              twoToneColor="#4e5faf"
              style={{
                fontSize: "42px",
              }}
            />
          </Tooltip>
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              textAlign: "center",
              color: "#333",
              fontWeight: "600",
            }}
          >
            <div style={{ fontSize: "9px" }}>{formattedDateDay}</div>
            <div style={{ fontSize: "11px" }}>{formattedMonth}</div>
          </div>
        </div>

        <Row gutter={[16, 16]} align="middle">
          {/* Left Column with Profile Picture */}
          <Col xs={24} sm={8}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginBottom: "10px",
              }}
            >
              <img
                src={profile}
                alt="Profile"
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  border: "2px solid #4e5faf",
                  objectFit: "cover",
                }}
              />
              <h3
                style={{
                  fontSize: "10px",
                  fontWeight: "600",
                  marginTop: "5px",
                }}
              >
                {firstName + " "}
                {lastName}
              </h3>
            </div>
          </Col>

          {/* Right Column with Details */}
          <Col xs={24} sm={16}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <p
                style={{
                  fontSize: "14px",
                  color: "#666",
                  marginBottom: "5px",
                }}
              >
                <ClockCircleTwoTone
                  twoToneColor="#4e5faf"
                  style={{ marginRight: "5px" }}
                />
                {formattedTime}
              </p>
              <p
                style={{
                  fontSize: "14px",
                  color: "#666",
                  marginBottom: "5px",
                }}
              >
                <IconComponent
                  style={{ marginRight: "5px", color: "#4e5faf" }}
                />
                {available} meeting
              </p>
              <p
                style={{
                  fontSize: "14px",
                  color: "#666",
                  marginBottom: "5px",
                }}
              >
                <MessageTwoTone
                  twoToneColor="#4e5faf"
                  style={{ marginRight: "5px" }}
                />
                {pendingMessage}
              </p>
              <p
                style={{
                  fontSize: "14px",
                  color: "#666",
                  marginBottom: "5px",
                }}
              >
                Fee: Rs. {fee}
              </p>
            </div>
          </Col>
        </Row>
      </motion.div>

      {/* Modal */}
      <Modal
        title=""
        open={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        {modalContent}
      </Modal>
    </>
  );
};
