import React from "react";
import { Card, Row, Col } from "antd";

import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { AppHeading, OverviewCommonCard, OverviewCard2 } from "..";

export const ProfilePatComp = ({
  profilePicture,
  name,
  phoneNumber,
  email,
}) => {
  return (
    <div className="patient-profile">
      <AppHeading title="Profile" titleFontWeight={800} titleFontSize="20px" />
      <div className="patient-profile-header">
        <img
          src={profilePicture}
          alt="Profile"
          className="patient-profile-picture"
        />
        <p className="patient-profile-name">
          <span className="dear">Dear </span>
          <span className="name">{name}</span>
        </p>
      </div>
      <div className="patient-profile-details">
        <Row gutter={[16, 16]}>
          <Col span={24}>
            <Card className="contact-item">
              <Row style={{ alignItems: "center" }}>
                <Col span={4}>
                  <FaPhoneAlt className="contact-icon" />
                </Col>
                <Col span={20}>
                  <span className="contact-value">{phoneNumber}</span>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col span={24}>
            <Card className="contact-item" style={{ marginBottom: "20px" }}>
              <Row style={{ alignItems: "center" }}>
                <Col span={4}>
                  <FaEnvelope className="contact-icon" />
                </Col>

                <Col span={20}>
                  <span className="contact-value">{email}</span>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </div>

      <div>
        <Row>
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <OverviewCommonCard
              title="Schedules"
              bgColor="#F0F0F0"
              titleFontSize={18}
              titleFontWeight={700}
              titleFontFamily="Lato"
              titleLineHeight="36px"
              titleLetterSpacing={0.25}
            >
              <OverviewCard2 count={0} />
            </OverviewCommonCard>
          </Col>
        </Row>
      </div>
    </div>
  );
};
