import { Col, Row } from "antd";
import { Form, Formik } from "formik";
import React, { useRef, useEffect } from "react";
import dayjs from "dayjs";

import { AppDropDown, AppInput, CommonCard, DateInput } from "../../components";
import { settingsFormVS } from "../../utilities";
import { SettingsFormFields } from "../../utilities";
import { FilterDropDown } from "../../components";

import { DataGrid } from "@mui/x-data-grid";
import { Add as AddIcon, Edit as EditIcon } from "@material-ui/icons";
import { AppButton } from "../../components";
export const SettingsComp = ({
  supp,
  suppData,
  onSave,
  co2Factor,
  treeFactor,
}) => {
  const findTariffByName = (name) => {
    const result = suppData.find((item) => item.name === name);
    return result ? result.tariff : null;
  };
  const formikRef = useRef(null);

  useEffect(() => {
    if (formikRef?.current) {
      formikRef?.current?.setFieldValue("co2_factor", co2Factor);
      formikRef?.current?.setFieldValue("tree_factor", treeFactor);
      formikRef?.current?.setFieldValue("tariff", suppData[0]?.tariff || "");
      formikRef?.current?.setFieldValue("gridSupplName", suppData[0]?.name);
    }
  }, [suppData]);

  return (
    <Formik
      innerRef={formikRef}
      initialValues={SettingsFormFields({
        co2_factor: co2Factor,
        tree_factor: treeFactor,
        client_data: suppData,
      })}
      validationSchema={settingsFormVS}
      onSubmit={(values) => {
        onSave(values);
      }}
    >
      {({ errors, status, touched, handleSubmit, setFieldValue, values }) => {
        return (
          <Form className="Auth-form" onSubmit={handleSubmit}>
            <CommonCard
              title={"Please fill in the details"}
              mT={50}
              buttonTitle={"Save"}
              onClick={handleSubmit}
            >
              <Row gutter={[50, 50]} style={{ marginTop: 50 }}>
                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                  <AppInput
                    label={"CO2 Factor"}
                    vldName={"co2_factor"}
                    placeholder={"Enter Co2 Value"}
                    fieldType={"float"}
                  />
                  <AppInput
                    label={"Tree Factor"}
                    vldName={"tree_factor"}
                    placeholder={"Enter Tree Value"}
                    fieldType={"float"}
                  />
                  <FilterDropDown
                    label={"Grid Supplier Name"}
                    value={values?.gridSupplName || null}
                    placeholder={"Enter Grid Supplier Name"}
                    vldName={"gridSupplName"}
                    list={supp || []}
                    onSelect={(item) => {
                      setFieldValue("gridSupplName", item);
                      const lescoTariff = findTariffByName(item);
                      setFieldValue("tariff", lescoTariff);
                    }}
                  />
                  <AppInput
                    label={`Base Terrif`}
                    vldName={"tariff"}
                    placeholder={"Enter Terrif Value"}
                    fieldType={"float"}
                  />
                </Col>
                <Col>
                  <DataGrid
                    columns={[
                      {
                        field: "name",
                        headerName: "Grid Supplier",
                        editable: false,
                        width: 250,
                      },
                      {
                        field: "tariff",
                        headerName: "Grid Rate",
                        align: "left",
                        headerAlign: "left",
                        width: 250,
                        type: "number",
                      },
                    ]}
                    rows={suppData}
                    disableColumnMenu={true} // Disable column menu to remove the column manager icon
                    components={{
                      Footer: () => null, // Remove the default footer component (pagination)
                    }}
                  />
                </Col>
              </Row>
            </CommonCard>
          </Form>
        );
      }}
    </Formik>
  );
};
