import React from "react";
import { Col, Row } from "antd";
import { CommonCard, DeviceDetInfo, SpecsInfo } from "../../../components";
import {
  siteIcon,
  deviceSolarIcon,
  powerIcon,
  voltageIcon,
  currentIcon,
} from "../../../utilities";
import moment from "moment";

export const InductionStep0Comp = ({ mT, data, handleClickStep }) => {
  return (
    <CommonCard buttonTitle={"Next"} onClick={() => handleClickStep(1)}>
      <div className="induction-step">
        <Row gutter={[50, 0]}>
          <Col xs={24} sm={24} md={6} lg={6} xl={6}>
            <DeviceDetInfo
              title={"Site ID"}
              value={data?.site_id}
              mT={10}
              wrapText={true}
            />
            <DeviceDetInfo
              title={"Postal Address"}
              value={data?.postal_address}
              mT={10}
              wrapText={true}
            />

            <DeviceDetInfo
              title={"System Type"}
              value={data?.system_type}
              mT={10}
              wrapText={true}
            />
            <DeviceDetInfo
              title={"Longitude"}
              value={data?.longitude}
              mT={10}
              wrapText={true}
            />
          </Col>
          <Col xs={24} sm={24} md={6} lg={6} xl={6}>
            <DeviceDetInfo
              title={"Project ID"}
              value={data?.project_id}
              mT={10}
              wrapText={true}
            />
            <DeviceDetInfo
              title={"Client Name"}
              value={data?.client_name}
              mT={10}
              wrapText={true}
            />
            <DeviceDetInfo
              title={"Site Type"}
              value={data?.site_type}
              mT={10}
              wrapText={true}
            />
            <DeviceDetInfo
              title={"Site Commissioning Date"}
              value={
                data?.site_comissioning_date
                  ? moment(data?.site_comissioning_date).format("YYYY-MM-DD")
                  : null
              }
              mT={10}
              wrapText={true}
            />
          </Col>

          <Col xs={24} sm={24} md={6} lg={6} xl={6}>
            <DeviceDetInfo
              title={"Site Name"}
              value={data?.site_name}
              mT={10}
              wrapText={true}
            />
            <DeviceDetInfo
              title={"System Size(kW)"}
              value={data?.system_size}
              mT={10}
              wrapText={true}
            />
            <DeviceDetInfo
              title={"Sit Category"}
              value={data?.site_category}
              mT={10}
              wrapText={true}
            />
            <DeviceDetInfo
              title={"Export Type"}
              value={
                data?.is_export_enabled == 1
                  ? "Export-Enable"
                  : "Export-Disable"
              }
              mT={10}
              wrapText={true}
            />
          </Col>

          <Col xs={24} sm={24} md={6} lg={6} xl={6}>
            <DeviceDetInfo
              title={"City"}
              value={data?.city}
              mT={10}
              wrapText={true}
            />
            <DeviceDetInfo
              title={"Region"}
              value={data?.region}
              mT={10}
              wrapText={true}
            />
            <DeviceDetInfo
              title={"Latitude"}
              value={data?.latitude}
              mT={10}
              wrapText={true}
            />
          </Col>
        </Row>
      </div>
    </CommonCard>
  );
};
