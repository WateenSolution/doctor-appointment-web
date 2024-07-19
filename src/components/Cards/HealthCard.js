import { Col, Row } from "antd";
import React from "react";

export const HealthCard = ({ mT, title, count, iconSrc, onClick }) => {
  return (
    <Row
      style={{
        marginTop: mT,
        height: "70%",
        cursor: onClick ? "pointer" : "default",
      }}
      className="ovCard2Main"
      onClick={onClick}
    >
      <Col>
        <div className="rightHealthCon">
          <h6 className="ovCard2Title">{title}</h6>

          <h4 className="valueText ovCard2Valu">{count || "0"}</h4>
        </div>
      </Col>
    </Row>
  );
};
