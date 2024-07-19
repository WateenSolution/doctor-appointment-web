import { Col, Row } from "antd";
import React from "react";
import { downloadIcon, inverterImage } from "../../utilities";
import { EquipmentInfo } from "./EquipmentInfo";
import { CommonCard, DeviceDetInfo, SpecsInfo } from "../../components";

export const EquipmentCard = ({
  mT,
  title,
  value,
  supplier,
  id,
  name,
  size,
  comissionDate,
  warranty,
  startTime,
  shutdownTime,
  downTime,
  mmptMismatch,
  totalFault,
  inverterEff,
  gridFreq,
  inverterTemp,
  totalCurt,
  currentPower,
  onClickDownload,
}) => {
  return (
    <Row style={{ marginTop: mT }} className="equipCardCon" gutter={[6, 6]}>
      <Col xs={24} sm={24} md={5} lg={5} xl={5}>
        <DeviceDetInfo title={"ID"} value={id} mT={10} />
        <DeviceDetInfo
          title={"Commisioning Date"}
          value={comissionDate}
          mT={10}
        />
        <DeviceDetInfo
          title={"Internal Temperature"}
          value={inverterTemp}
          mT={10}
          unit={"°C"}
        />
        <DeviceDetInfo title={"Remaining Warranty"} value={warranty} mT={10} />
      </Col>

      <Col xs={24} sm={24} md={5} lg={5} xl={5} style={{ marginLeft: 20 }}>
        <DeviceDetInfo title={"Name"} value={name} mT={10} />
        <DeviceDetInfo title={"Start Time"} value={startTime} mT={10} />
        <DeviceDetInfo
          title={"Current Active Power"}
          value={currentPower}
          unit={"kW"}
          mT={10}
        />
      </Col>

      <Col xs={24} sm={24} md={5} lg={5} xl={5} style={{ marginLeft: 20 }}>
        <DeviceDetInfo title={"Size"} value={size} mT={10} unit={"kW"} />
        <DeviceDetInfo title={"Shutdown Time"} value={shutdownTime} mT={10} />
        <DeviceDetInfo
          title={"Grid Frequency"}
          value={gridFreq}
          mT={10}
          unit={"Hz"}
        />
      </Col>

      <Col xs={24} sm={24} md={5} lg={5} xl={5} style={{ marginLeft: 20 }}>
        <DeviceDetInfo title={"Supplier"} value={supplier} mT={10} />
        <DeviceDetInfo title={"Inverter Down Time"} value={downTime} mT={10} />
        <DeviceDetInfo
          title={"MPPT Mismatch Loss"}
          value={mmptMismatch?.toString()}
          mT={10}
          unit={"%"}
        />
        {/* <DeviceDetInfo title={"Inverter Efficiency"} value={inverterEff?.toString()} mT={10} unit={"%"} /> */}
        {/* <DeviceDetInfo title={"Total Faults"} value={totalFault} mT={10} /> */}
        {/* <DeviceDetInfo title={"Total Curtailment"} value={totalCurt} mT={20} /> */}
      </Col>
    </Row>
  );
};
