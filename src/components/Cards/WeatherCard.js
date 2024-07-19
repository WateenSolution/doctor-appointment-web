import { Col, Row } from "antd";
import React from "react";

export const WeatherCard = ({ setIsOpen, weatherRecord }) => {
  return (
    <Row gutter={[10, 10]}>
      <Col
        onClick={() => {
          setIsOpen(true);
        }}
        className="weather-overview-cols"
      >
        <img
          style={{
            height: 50,
            width: 50,
            display: "block",
          }}
          src={weatherRecord?.nowcast?.weatherConditionImage}
          alt="weather-image"
        />
      </Col>
      <Col
        onClick={() => {
          setIsOpen(true);
        }}
        className="weather-overview-cols"
      >
        <div>
          {weatherRecord?.nowcast?.temp &&
          weatherRecord?.nowcast?.temp !== undefined &&
          weatherRecord?.nowcast?.temp !== null ? (
            <span className="weather-overview-title">{`${weatherRecord?.nowcast?.temp} °`}</span>
          ) : (
            "--"
          )}
        </div>

        <div>
          {weatherRecord?.nowcast?.weatherConditionEnglish &&
          weatherRecord?.nowcast?.weatherConditionEnglish !== undefined &&
          weatherRecord?.nowcast?.weatherConditionEnglish !== null ? (
            <span className="weather-overview-desc">
              {weatherRecord?.nowcast?.weatherConditionEnglish}
            </span>
          ) : (
            "--"
          )}
        </div>
      </Col>
    </Row>
  );
};
