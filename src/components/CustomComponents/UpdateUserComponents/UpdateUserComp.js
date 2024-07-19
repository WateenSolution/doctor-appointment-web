import { Col, Row } from "antd";
import { Form, Formik } from "formik";
import React, { useEffect } from "react";

import { AppDropDown, AppInput, CommonCard, FilterDropDown } from "../..";
import {
  UpdateUserFormFields,
  UpdateUserVS,
  roleList,
  users,
} from "../../../utilities";
import { DataGrid } from "@mui/x-data-grid";

export const UpdateUserComp = ({
  onSubmit,
  sites,
  data,
  formikRef,
  allSites,
  getOrganizationalSites,
  organizations,
  setSelectedRows,
  selectedRows,
}) => {
  useEffect(() => {
    if (formikRef?.current) {
      formikRef?.current?.setFieldValue("siteName", data?.station_name || "");
      formikRef?.current?.setFieldValue("username", data?.username || "");
      formikRef?.current?.setFieldValue("email", data?.email || "");
      formikRef?.current?.setFieldValue("role", data?.role || "");
    }
  }, []);

  return (
    <Formik
      innerRef={formikRef}
      initialValues={UpdateUserFormFields}
      validationSchema={UpdateUserVS}
      onSubmit={(values) => {
        onSubmit(values);
      }}
    >
      {({ errors, status, touched, handleSubmit, setFieldValue, values }) => {
        return (
          <Form className="Auth-form" onSubmit={handleSubmit}>
            <CommonCard
              title={"Update existing data"}
              buttonTitle={"Submit"}
              onClick={handleSubmit}
            >
              <Row gutter={[50, 50]} style={{ marginTop: 50 }}>
                {/* Col 1 */}
                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                  <AppInput
                    label={"Username"}
                    vldName={"username"}
                    placeholder={"Enter Username"}
                    disabled={true}
                  />
                  <AppInput
                    label={"Email"}
                    vldName={"email"}
                    placeholder={"Enter Email"}
                  />
                  <AppInput
                    label={"Password"}
                    vldName={"password"}
                    placeholder={"Enter Password"}
                    fieldType={"password"}
                  />
                  {values?.role === "Client" && data?.role !== "Client" && (
                    <AppDropDown
                      value={values?.role || null}
                      label={"Role"}
                      placeholder={"Enter Role"}
                      vldName={"role"}
                      list={roleList}
                      onSelect={(item) => {
                        setFieldValue("role", item);
                      }}
                    />
                  )}
                  {data?.role === "Client" && (
                    <AppInput
                      label={"Role"}
                      vldName={"role"}
                      placeholder={"Enter Role"}
                      disabled={true}
                    />
                  )}

                  {data?.role === "Client" && (
                    <AppInput
                      label={"Organization Name"}
                      vldName={"siteName"}
                      placeholder={"Enter Username"}
                      disabled={true}
                    />
                  )}
                  {values?.role === "Client" && data?.role !== "Client" && (
                    <FilterDropDown
                      value={values?.siteName || null}
                      label={"Site Name"}
                      placeholder={"Enter Site Name"}
                      vldName={"siteName"}
                      list={sites}
                      onSelect={(item) => {
                        setFieldValue("siteName", item);
                      }}
                    />
                  )}
                </Col>

                {/* Col 2 */}
                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                  <div className="contactImgCon">
                    <img height={"100%"} width={"100%"} src={users} />
                  </div>
                </Col>

                {values.role === "Client" && (
                  <DataGrid
                    columns={[
                      {
                        field: "id",
                        headerName: "ID",
                        editable: false,
                        width: 300,
                      },
                      {
                        field: "name",
                        headerName: "Station Name",
                        align: "left",
                        headerAlign: "left",
                        width: 1000,
                      },
                    ]}
                    rows={allSites}
                    checkboxSelection
                    onRowSelectionModelChange={(newRowSelectionModel) => {
                      setSelectedRows(newRowSelectionModel);
                    }}
                    rowSelectionModel={selectedRows}
                  />
                )}
              </Row>
            </CommonCard>
          </Form>
        );
      }}
    </Formik>
  );
};
