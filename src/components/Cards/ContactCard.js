import React from "react";
import { Col, Row } from "antd";
import { contactUsImage } from "../../utilities";

export const ContactCard = ({ title, desc, icon, mT }) => {
  return (
    <Row gutter={[0, 10]} style={{ marginTop: mT }}>
      <Col xs={24} sm={24} md={6} lg={6} xl={6}>
        <div className="contactIconCon">{icon}</div>
      </Col>
      <Col xs={24} sm={24} md={18} lg={18} xl={18}>
        <h5 style={{ marginBottom: 0 }}>{title}</h5>
        <p
          style={{
            marginTop: 2,
            color: "#a9a9a9",
          }}
        >
          {desc}
        </p>
      </Col>
    </Row>
  );
};
