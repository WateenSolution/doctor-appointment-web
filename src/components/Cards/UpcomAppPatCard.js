import React from "react";
import {
  CalendarTwoTone,
  ClockCircleTwoTone,
  UserOutlined,
  MessageTwoTone,
  PhoneOutlined,
} from "@ant-design/icons";
import { Tooltip } from "antd";
import { motion } from "framer-motion";
import moment from "moment";
import { Col, Row } from "antd";

export const UpcomAppPatCard = ({
  appointmentTime,
  doctorName,
  pendingMessage,
  onClick,
  calendar,
  profile,
  available,
  fee,
}) => {
  // Format the appointment date and day
  const formattedMonth = moment(calendar).format("MMM");
  const formattedDateDay = moment(calendar).format("Do");

  // Parse and format the appointment time
  const formattedTime = moment(appointmentTime, "HH:mm:ss").format("hh:mm A");

  // Determine which icon to display based on available prop
  const IconComponent = available === "remote" ? PhoneOutlined : UserOutlined;

  return (
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
      onClick={onClick}
    >
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
              fontSize: "42px", // Adjusted font size for the icon
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
        <Col xs={24} sm={6}>
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
                marginBottom: "10px", // Added margin-bottom for spacing
              }}
            />
            <span style={{ fontSize: "16px", fontWeight: "500" }}>
              Dr. {doctorName}
            </span>
          </div>
        </Col>

        {/* Right Column with Appointment Details */}
        <Col xs={24} sm={18}>
          <Row gutter={[8, 8]}>
            <Col span={24}>
              {/* Appointment Time */}
              <div style={{ display: "flex", alignItems: "center" }}>
                <ClockCircleTwoTone
                  twoToneColor="#4e5faf"
                  style={{
                    fontSize: "20px",
                    marginRight: "8px",
                  }}
                />
                <span style={{ fontSize: "16px", fontWeight: "500" }}>
                  {formattedMonth} {formattedDateDay} at{" "}
                  {formattedTime || "Invalid time"}
                </span>
              </div>
            </Col>

            <Col span={24}>
              {/* Doctor Icon */}
              <div style={{ display: "flex", alignItems: "center" }}>
                <IconComponent
                  style={{
                    fontSize: "20px",
                    color: "#4e5faf",
                    marginRight: "8px",
                  }}
                />
                <span style={{ fontSize: "16px", fontWeight: "500" }}>
                  {available} meeting
                </span>
              </div>
            </Col>

            <Col span={24}>
              {/* Pending Message */}
              <div style={{ display: "flex", alignItems: "center" }}>
                <MessageTwoTone
                  twoToneColor="#4e5faf"
                  style={{
                    fontSize: "20px",
                    marginRight: "8px",
                  }}
                />
                <span
                  style={{
                    fontSize: "16px",
                    fontWeight: "500",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                    maxWidth: "calc(100% - 50px)", // Adjust width as needed
                  }}
                >
                  {pendingMessage}
                </span>
              </div>
            </Col>

            {/* Fee Tab */}
            <Col span={24}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "10px",
                }}
              >
                <span
                  style={{
                    fontSize: "16px",
                    fontWeight: "500",
                    marginRight: "8px",
                  }}
                >
                  Fee:
                </span>
                <span
                  style={{
                    fontSize: "16px",
                    fontWeight: "500",
                    color: "#4e5faf",
                  }}
                >
                  Rs. {fee}
                </span>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </motion.div>
  );
};
