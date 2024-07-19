import { CloseOutlined } from "@mui/icons-material";
import { IconButton, useMediaQuery } from "@mui/material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Col, Row } from "antd";
import React from "react";
import { AppButton, SpecsInfo } from "../../components";
import moment from "moment";

export const Co2Component = ({
  isOpen,
  setIsOpen,
  co2Factor,
  factor,
  editFactor,
  onChangeFactor,
}) => {
  const isMobileView = useMediaQuery("(max-width: 1000px)");
  const handleClose = () => {
    setIsOpen(false);
    onChangeFactor(co2Factor);
  };

  const handleFactorChange = (event) => {
    // Update the factor state with the new value when the input changes
    onChangeFactor(event.target.value);
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
          width: isMobileView ? "90%" : "30%",
          height: isMobileView ? "80%" : "40%",
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 3,
          borderRadius: 2,
          maxHeight: isMobileView ? "80%" : "100%",
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{ position: "absolute", top: 0, right: 0 }}
        >
          <CloseOutlined />
        </IconButton>

        <Col>
          <div style={{ marginTop: 10 }}>
            <span className="resource-det-location">CO2 Factor</span>
          </div>
        </Col>

        <Row style={{ marginTop: 30 }}>
          <Col xs={24} sm={24} md={8} lg={8} xl={8}>
            <input
              label="CO2 Factor"
              type="number"
              placeholder={factor}
              value={factor}
              onChange={handleFactorChange}
            ></input>
          </Col>
        </Row>
        <Row
          style={{
            marginTop: 10,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Col xs={24} sm={24} md={8} lg={8} xl={8}>
            <AppButton buttonTitle={"save"} onClick={editFactor} />
          </Col>
        </Row>
      </Box>
    </Modal>
  );
};
