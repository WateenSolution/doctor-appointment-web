import React from "react";
import { Col, Row } from "antd";
import { CommonCard, SpecsInfo } from "../../components";

export const SpecsCard = ({
  title,
  mT,
  mmptMismatch,
  totalFault,
  inverterEff,
  gridFreq,
  inverterTemp,
  totalCurt,
  currentPower,
}) => {
  return (
    <CommonCard mT={mT} title={"Technical Specifications"}>
      <Row className="specsCardCon" gutter={[50, 50]}>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <SpecsInfo
            title={"Current Active Power"}
            value={currentPower}
            unit={"kW"}
          />
          <SpecsInfo title={"Total Curtailment"} value={totalCurt} mT={20} />
          <SpecsInfo
            title={"Internal Temperature"}
            value={inverterTemp}
            mT={20}
            unit={"°C"}
          />

          <SpecsInfo
            title={"Grid Frequency"}
            value={gridFreq}
            mT={20}
            unit={"Hz"}
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <SpecsInfo
            title={"Inverter Efficiency"}
            value={inverterEff}
            unit={"%"}
          />

          <SpecsInfo title={"Total Faults"} value={totalFault} mT={20} />
          <SpecsInfo
            title={"MPPT Mismatch Loss"}
            value={mmptMismatch}
            mT={20}
            unit={"%"}
          />
        </Col>
      </Row>
    </CommonCard>
  );
};
