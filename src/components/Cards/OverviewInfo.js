import React from "react";
import { Col, Row } from "antd";
import { generationIcon } from "../../utilities";

export const OverviewInfo = ({
  mT,
  iconSrc,
  title,
  unit,
  value,
  iconHeight,
  iconWidth,
  textColor,
}) => {
  return (
    <Col className="overviewInfoCon" style={{ marginTop: mT }}>
      <Row>
        {iconSrc && (
          <Col className="iconCon">
            <img height={iconHeight} width={iconWidth} src={iconSrc} />
          </Col>
        )}

        <Col className="titleCon">
          <text style={{ color: textColor || "var(--b1)" }}>{title || ""}</text>
        </Col>
        <Col className="unitCon">
          <text style={{ color: textColor || "var(--b1)" }}>{`${
            unit || ""
          }`}</text>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <h4 style={{ color: textColor || "var(--b1)" }}>{value || "--"}</h4>
        </Col>
      </Row>
    </Col>
  );
};
