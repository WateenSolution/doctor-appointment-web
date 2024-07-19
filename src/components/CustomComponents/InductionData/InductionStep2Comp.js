import React from "react";
import { Col, Row } from "antd";
import { CommonCard, DeviceDetInfo } from "../../../components";

export const InductionStep2Comp = ({
  stepper,
  setStepper,
  mT,
  data,
  handleClickStep,
}) => {
  const handlePreviousClick = () => {
    if (stepper > 0) {
      setStepper(stepper - 1);
      handleClickStep(stepper - 1);
    }
  };
  return (
    <CommonCard
      buttonTitle={"Next"}
      onClick={() => handleClickStep(3)}
      secButtonTitle={"Previous"}
      secOnClick={handlePreviousClick}
    >
      <div className="induction-step">
        <Row gutter={[50, 0]}>
          <Col xs={24} sm={24} md={6} lg={6} xl={6}>
            <DeviceDetInfo
              title={"Inverter Supplier Name"}
              value={data?.inverter_supplier_name}
              mT={10}
              wrapText={true}
            />

            <DeviceDetInfo
              title={"Electrical Contractor Name"}
              value={data?.electrical_contractor_name}
              mT={10}
              wrapText={true}
            />
          </Col>

          <Col xs={24} sm={24} md={6} lg={6} xl={6}>
            <DeviceDetInfo
              title={"Reference Number of Electricity Bill"}
              value={data?.reference_number_electricity_bill}
              mT={10}
              wrapText={true}
            />

            <DeviceDetInfo
              title={"POC Number"}
              value={data?.poc_number}
              mT={10}
              wrapText={true}
            />
          </Col>
          <Col xs={24} sm={24} md={6} lg={6} xl={6}>
            <DeviceDetInfo
              title={"Mechnaical Contractor Name"}
              value={data?.mechnaical_contractor_name}
              mT={10}
              wrapText={true}
            />

            <DeviceDetInfo
              title={"Grid Supplier Name"}
              value={data?.grid_supplier_name}
              mT={10}
              wrapText={true}
            />
          </Col>
          <Col xs={24} sm={24} md={6} lg={6} xl={6}>
            <DeviceDetInfo
              title={"POC"}
              value={data?.poc}
              mT={10}
              wrapText={true}
            />
          </Col>
        </Row>
      </div>
    </CommonCard>
  );
};
