import React from "react";
import { Col, Row } from "antd";

export const EquipmentInfo = ({ mT, title, value, unit }) => {
  return (
    <Col style={{ marginTop: mT }}>
      <div>
        <text className="cardTitle titleText">{title}</text>
      </div>
      <div>
        <text className="cardValue valueText">
          {value != null || value != undefined ? value : "--"}
        </text>
        {unit && (
          <text className="valueText cardValue equipInfoUnit">{unit}</text>
        )}
      </div>
    </Col>
  );
};
