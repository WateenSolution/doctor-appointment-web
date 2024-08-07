import React, { useState } from "react";
import {
  CalendarTwoTone,
  ClockCircleTwoTone,
  UserOutlined,
  PhoneOutlined,
  ScheduleOutlined,
  MessageTwoTone,
} from "@ant-design/icons";
import { Tooltip, Modal } from "antd";
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
  const formattedTime = moment(appointmentTime, "HH:mm:ss").format("hh:mm A");

  const IconComponent = available === "remote" ? PhoneOutlined : UserOutlined;

  const handleCardClick = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const modalContent = (
    <div
      style={{
        textAlign: "center",
        padding: "20px",
        borderRadius: "12px",
        background: "transparent",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        boxShadow: "none",
      }}
    >
      <Row gutter={16}>
        {/* Left Column with Profile Picture and Doctor Name */}
        <Col span={12}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img
              src={profile}
              alt="Profile"
              style={{
                width: "100px",
                height: "100px",
                borderRadius: "50%",
                border: "3px solid #4e5faf",
                objectFit: "cover",
                marginBottom: "10px",
              }}
            />
            <h3
              style={{
                fontSize: "20px",
                fontWeight: "500",
                marginBottom: "10px",
                color: "#333",
              }}
            >
              {firstName} {lastName}
            </h3>
          </div>
        </Col>
        {/* Right Column with Contact Details */}
        <Col span={12}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              textAlign: "left",
            }}
          >
            <p style={{ fontSize: "12px", color: "#666", marginBottom: "5px" }}>
              Appointment Time: {formattedMonth} {formattedDateDay} at{" "}
              {formattedTime}
            </p>
            <p style={{ fontSize: "12px", color: "#666", marginBottom: "5px" }}>
              Availability: {available} meeting
            </p>
            <p style={{ fontSize: "12px", color: "#666", marginBottom: "5px" }}>
              Message: {pendingMessage}
            </p>
            <p style={{ fontSize: "12px", color: "#666", marginBottom: "5px" }}>
              Fee: Rs. {fee}
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );

  return (
    <>
      <div
        className="upcomAppDocCard"
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
                  fontSize: "16px",
                  fontWeight: "600",
                  marginTop: "5px",
                }}
              >
                {firstName} {lastName}
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
      </div>

      {/* Modal */}
      <Modal
        title="Doctor Details"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        style={{ top: 20 }}
      >
        {modalContent}
      </Modal>
    </>
  );
};
