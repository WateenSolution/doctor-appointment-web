import { CloseOutlined } from "@mui/icons-material";
import { IconButton, useMediaQuery } from "@mui/material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Col, Row } from "antd";
import React from "react";
import { SpecsInfo } from "../../components";
import moment from "moment";

export const WeatherComponent = ({ isOpen, setIsOpen, data }) => {
  const isMobileView = useMediaQuery("(max-width: 1000px)");

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="weather-modal-title"
      aria-describedby="weather-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: isMobileView ? "90%" : undefined,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 3,
          borderRadius: 2,
          maxHeight: isMobileView ? "80%" : "100%",
          overflowY: "auto",
        }}
      >
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{ position: "absolute", top: 0, right: 0 }}
        >
          <CloseOutlined />
        </IconButton>

        {/* <span
          style={{
            fontFamily: "poppinsSemiBold",
            color: "var(--color-wateen)",
            fontSize: "24px",
            // marginBottom: "20px",
          }}
        >
          Weather Card
        </span> */}

        <Col>
          <Row gutter={[20, 10]}>
            <Col>
              <img
                style={{
                  height: 70,
                  width: 70,
                }}
                src={data?.nowcast?.weatherConditionImage}
                alt="weather-image"
              />
            </Col>
            <Col>
              <div>
                <span className="resource-det-title">{`${data?.nowcast?.temp} °`}</span>
              </div>

              <div>
                <span className="resource-det-desc">
                  {data?.nowcast?.weatherConditionEnglish}
                </span>
              </div>
            </Col>
            <Col>
              <div>
                <span className="resource-det-day">
                  {`Sunrise Time: ${moment(data?.nowcast?.sunrise).format(
                    "HH:mm:ss"
                  )}`}
                </span>
              </div>
              <div>
                <span className="resource-det-day">
                  {`Sunset Time: ${moment(data?.nowcast?.sunset).format(
                    "HH:mm:ss"
                  )}`}
                </span>
              </div>
            </Col>
          </Row>

          <div style={{ marginTop: 10 }}>
            <span className="resource-det-day">{data?.nowcast?.dayOfWeek}</span>
          </div>

          <div style={{ marginTop: 10 }}>
            <span className="resource-det-location">{data?.poi}</span>
          </div>
        </Col>

        <Row gutter={[20, 20]} style={{ marginTop: 30 }}>
          <Col xs={24} sm={24} md={8} lg={8} xl={8}>
            <SpecsInfo
              title={"Wind Direction"}
              value={data?.nowcast?.windDir}
              unit={"°"}
            />
            <SpecsInfo
              title={"Humidity"}
              value={`${data?.nowcast?.hum}`}
              unit={"%"}
              mT={20}
            />
          </Col>
          <Col xs={24} sm={24} md={8} lg={8} xl={8}>
            <SpecsInfo
              title={"Wind Velocity"}
              value={`${data?.nowcast?.windSpeed}`}
              unit={"km/h"}
            />
            <SpecsInfo
              title={"UV"}
              value={`${data?.nowcast?.uv}`}
              unit={"Index"}
              mT={20}
            />
          </Col>
          <Col xs={24} sm={24} md={8} lg={8} xl={8}>
            <SpecsInfo
              title={"Rainfall Chanes"}
              value={data?.nowcast?.expectedRainfall}
              unit={"%"}
            />
            <SpecsInfo
              title={"Heat Index"}
              value={`${data?.nowcast?.heatIndex} °`}
              mT={20}
            />
          </Col>
        </Row>
      </Box>
    </Modal>
  );
};
