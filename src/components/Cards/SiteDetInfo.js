import { Col, Row } from "antd";
import React from "react";

export const SiteDetInfo = ({
  mT,
  iconSrc,
  title,
  unit,
  value,
  iconHeight,
  iconWidth,
  valueColor,
  titleColor,
}) => {
  return (
    <Col className="overviewInfoCon" style={{ marginTop: mT }}>
      <Row>
        {iconSrc && (
          <Col className="iconCon">
            <img height={iconHeight} width={iconWidth} src={iconSrc} />
          </Col>
        )}

        <Col className="textCon">
          <div>
            <span style={{ color: titleColor || "var(--b1)" }}>
              {title || ""}
            </span>

            <Row>
              <h4 style={{ color: valueColor || "var(--color-wateen)" }}>
                {value ?? "--"}
              </h4>
              {unit && (
                <div className="unitCon">
                  <h4 style={{ color: valueColor || "var(--color-wateen)" }}>
                    {unit}
                  </h4>
                </div>
              )}
            </Row>
          </div>
        </Col>
      </Row>
    </Col>
  );
};
