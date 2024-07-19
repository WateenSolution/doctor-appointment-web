import React from "react";
import { Col, Row } from "antd";
import { CommonCard, DeviceDetInfo } from "../../../components";
import moment from "moment";

export const InductionStep1Comp = ({
  stepper,
  setStepper,
  mT,
  data,
  handleClickStep,
}) => {
  const handlePreviousClick = () => {
    if (stepper > 0) {
      setStepper(stepper - 1);
      handleClickStep(stepper - 1); // Call handleClickStep to update the active step
    }
  };
  return (
    <CommonCard
      buttonTitle={"Next"}
      onClick={() => handleClickStep(2)}
      secButtonTitle={"Previous"}
      secOnClick={handlePreviousClick}
    >
      <div className="induction-step">
        <Row gutter={[50, 0]}>
          <Col xs={24} sm={24} md={6} lg={6} xl={6}>
            <DeviceDetInfo
              title={"Individual Inverter Commisioning Date"}
              value={
                data?.inverter_commisioning_date
                  ? moment(data?.inverter_commisioning_date).format(
                      "YYYY-MM-DD"
                    )
                  : null
              }
              mT={10}
              wrapText={true}
            />
            <DeviceDetInfo
              title={"Warranty Ends"}
              value={
                data?.warranty_starts
                  ? moment(data?.warranty_starts).format("YYYY-MM-DD")
                  : null
              }
              mT={10}
              wrapText={true}
            />

            <DeviceDetInfo
              title={"Model Name"}
              value={data?.model_name}
              mT={10}
              wrapText={true}
            />
            <DeviceDetInfo
              title={"Panel Kind"}
              value={data?.panel_kind}
              mT={10}
              wrapText={true}
            />
            <DeviceDetInfo
              title={"String in MPPTs"}
              value={data?.string_mppt}
              mT={10}
              wrapText={true}
            />
          </Col>
          <Col xs={24} sm={24} md={6} lg={6} xl={6}>
            <DeviceDetInfo
              title={"Provider"}
              value={data?.provider}
              mT={10}
              wrapText={true}
            />

            <DeviceDetInfo
              title={"Module Efficienncy STC (%)"}
              value={data?.module_efficienncy_stc}
              mT={10}
              wrapText={true}
            />
            <DeviceDetInfo
              title={"Temperature Cofficients of Pmax (°C)"}
              value={data?.temperature_cofficients_pmax}
              mT={10}
              wrapText={true}
            />
            <DeviceDetInfo
              title={"Inverter Model"}
              value={data?.inverter_model}
              mT={10}
              wrapText={true}
            />

            <DeviceDetInfo
              title={"Inverter Datasheet"}
              value={data?.inverter_datasheet}
              mT={10}
              wrapText={true}
            />
          </Col>
          <Col xs={24} sm={24} md={6} lg={6} xl={6}>
            <DeviceDetInfo
              title={"Mount Type"}
              value={data?.mount_type}
              mT={10}
              wrapText={true}
            />

            <DeviceDetInfo
              title={"OEM Panel"}
              value={data?.oem_panel}
              mT={10}
              wrapText={true}
            />

            <DeviceDetInfo
              title={"Panels Type"}
              value={data?.panels_type}
              mT={10}
              wrapText={true}
            />

            <DeviceDetInfo
              title={"Pmax (kW)"}
              value={data?.p_max}
              mT={10}
              wrapText={true}
            />
          </Col>

          <Col xs={24} sm={24} md={6} lg={6} xl={6}>
            <DeviceDetInfo
              title={"Structure Type"}
              value={data?.structure_type}
              mT={10}
              wrapText={true}
            />
            <DeviceDetInfo
              title={"Maximum System Voltage(V)"}
              value={data?.maximum_system_voltage}
              mT={10}
              wrapText={true}
            />

            <DeviceDetInfo
              title={"Total Number of Panels"}
              value={data?.total_panels}
              mT={10}
              wrapText={true}
            />

            <DeviceDetInfo
              title={"Number of Inverters"}
              value={data?.total_inverters}
              mT={10}
              wrapText={true}
            />
          </Col>
        </Row>
      </div>
    </CommonCard>
  );
};
