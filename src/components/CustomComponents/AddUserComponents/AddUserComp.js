import { Col, Row } from "antd";
import { Form, Formik, Field } from "formik";
import React, { useEffect, useState } from "react";

import {
  AppDropDown,
  AppInput,
  CommonCard,
  FilterDropDown,
} from "../../../components";
import {
  AddUserFormFields,
  AddUserVS,
  roleList,
  users,
} from "../../../utilities";

import { DataGrid } from "@mui/x-data-grid";

export const AddUserComp = ({
  onSubmit,
  sites,
  allSites,
  getOrganizationalSites,
  organizations,
  setSelectedRows,
  selectedRows,
}) => {
  return (
    <Formik
      initialValues={AddUserFormFields}
      validationSchema={AddUserVS}
      onSubmit={(values) => {
        onSubmit(values);
      }}
    >
      {({ errors, status, touched, handleSubmit, setFieldValue, values }) => {
        return (
          <Form className="Auth-form" onSubmit={handleSubmit}>
            <CommonCard
              title={"Define new roles"}
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
                  {values.role === "Client" && (
                    <FilterDropDown
                      value={values?.siteName || null}
                      label={"Organization"}
                      placeholder={"Select Organization"}
                      vldName={"siteName"}
                      list={organizations}
                      onSelect={(item) => {
                        setFieldValue("siteName", item);
                        getOrganizationalSites(item);
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

                {values.role === "Client" && values?.siteName && (
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
