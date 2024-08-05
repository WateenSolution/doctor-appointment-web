import React from "react";
import { Card, Row, Col } from "antd";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { AppHeading, OverviewCommonCard, OverviewCard } from "..";

export const ProfileDocComp = ({
  profilePicture,
  name,
  phoneNumber,
  email,
  rating,
  review,
}) => {
  return (
    <div className="doctor-profile">
      <AppHeading
        title="Doctor Profile"
        titleFontWeight={800}
        titleFontSize="20px"
      />
      <div className="doctor-profile-header">
        <img
          src={profilePicture}
          alt="Doctor Profile"
          className="doctor-profile-picture"
        />
        <p className="doctor-profile-name">
          <span className="greeting">Dr. </span>
          <span className="name">{name}</span>
        </p>
      </div>
      <div className="doctor-profile-details">
        <Row gutter={[16, 16]}>
          <Col span={24}>
            <Card className="contact-info">
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
            <Card className="contact-info" style={{ marginBottom: "20px" }}>
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

      <div className="doctor-schedules">
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <OverviewCommonCard
              title="Rating"
              bgColor="#F0F0F0"
              titleFontSize={17}
              titleFontWeight={700}
              titleFontFamily="Lato"
              titleLineHeight="36px"
              titleLetterSpacing={0.25}
            >
              <OverviewCard count={rating} />
            </OverviewCommonCard>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <OverviewCommonCard
              title="Reviews"
              bgColor="#F0F0F0"
              titleFontSize={17}
              titleFontWeight={700}
              titleFontFamily="Lato"
              titleLineHeight="36px"
              titleLetterSpacing={0.25}
            >
              <OverviewCard count={review} />
            </OverviewCommonCard>
          </Col>
        </Row>
      </div>
    </div>
  );
};
