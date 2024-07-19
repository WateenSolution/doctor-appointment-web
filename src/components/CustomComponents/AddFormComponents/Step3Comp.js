import {
  Add as AddIcon,
  Edit as EditIcon,
  MoreVert as MoreVertIcon,
} from "@material-ui/icons";
import { Col, Row } from "antd";
import { Form, Formik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Box } from "@mui/material";

import {
  AddFormTable,
  AppButton,
  AppDropDown,
  AppInput,
  CommonCard,
} from "../../../components";
import { addMpptAction, deleteMpptAction } from "../../../redux/actions";
import {
  ExpectedPowerRows,
  Induction3FormFields,
  InductionStep3VS,
  mountType,
  mpptColumns,
} from "../../../utilities";

//imports

// import AddIcon from "@mui/icons-material/Add";
// import EditIcon from "@mui/icons-material/Edit";
import CancelIcon from "@mui/icons-material/Close";
import SaveIcon from "@mui/icons-material/Save";
import {
  DataGrid,
  GridActionsCellItem,
  GridRowEditStopReasons,
  GridRowModes,
} from "@mui/x-data-grid";

const initialRows = ExpectedPowerRows.expected_power;
export const Step3Comp = ({
  onClickSubmit,
  stepper,
  setStepper,
  setMpptId,
  isUpdated,
  data,
}) => {
  const dispatch = useDispatch(null);
  const { mpptData } = useSelector((state) => state?.inductions);

  const updated_initialRows = initialRows.map((month) => {
    const updatedMonth = data?.expected_power.find(
      (newMonth) => newMonth.name === month.name
    );
    return updatedMonth ? { ...month, value: updatedMonth.value } : month;
  });
  const component3Styles = {
    border: "none",
    boxShadow: "0 7px 15px rgba(193, 227, 200)",
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional: adds smooth scrolling animation
    });
  };

  const [rows, setRows] = React.useState(updated_initialRows);
  const [rowModesModel, setRowModesModel] = React.useState({});
  const handleRowEditStop = (params, event) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };

  const handleEditClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
  };

  const handleSaveClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
  };

  const handleCancelClick = (id) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });

    const editedRow = rows.find((row) => row.id === id);
    if (editedRow.isNew) {
      setRows(rows.filter((row) => row.id !== id));
    }
  };

  const processRowUpdate = (newRow) => {
    const updatedRow = { ...newRow, isNew: false };
    setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
    return updatedRow;
  };

  const handleRowModesModelChange = (newRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };

  return (
    <Formik
      initialValues={Induction3FormFields}
      validationSchema={InductionStep3VS}
      onSubmit={(values, { resetForm }) => {
        dispatch(addMpptAction(values));

        if (isUpdated) {
          setMpptId(null);
        }

        resetForm({
          values: {
            id: "",
            mppt: "",
            input: "",
            imp: "",
            noOfPanels: "",
            mountType: "",
            vmp: "",
            orientation: "",
            tilt: "",
            voc: "",
          },
        });
      }}
    >
      {({
        errors,
        status,
        touched,
        handleSubmit,
        setFieldValue,
        values,
        setValues,
      }) => {
        return (
          <Form className="Auth-form" onSubmit={handleSubmit}>
            <CommonCard
              title={"Please fill in the details"}
              buttonTitle={"Submit"}
              titleFontSize={21}
              titleFontWeight={400}
              onClick={() => {
                if (mpptData.length > 0) {
                  const values = {
                    mppt_values: mpptData,
                    expected_power: rows,
                  };

                  onClickSubmit(values);
                } else {
                  toast.error("Please Add MPPT details");
                }
              }}
              secButtonTitle={"Previous"}
              secOnClick={() => {
                setStepper(stepper - 1);
              }}
            >
              <Row style={{ marginTop: 30 }}>
                {/* Col 1 */}
                <Col xs={24} sm={24} md={6} lg={6} xl={6}>
                  <AppInput
                    label={"MPPT"}
                    vldName={"mppt"}
                    placeholder={"MPPT"}
                    labelSize={18}
                    labelWeigh={500}
                    labelColor={"#012D75"}
                  />

                  <AppInput
                    label={"Input"}
                    vldName={"input"}
                    placeholder={"Enter Input"}
                    fieldType={"number"}
                    labelSize={18}
                    labelWeigh={500}
                    labelColor={"#012D75"}
                  />

                  <AppInput
                    label={"Imp (A)"}
                    vldName={"imp"}
                    placeholder={"Enter Imp"}
                    fieldType={"number"}
                    labelSize={18}
                    labelWeigh={500}
                    labelColor={"#012D75"}
                  />
                </Col>

                {/* Col 2 */}
                <Col xs={24} sm={24} md={6} lg={6} xl={6}>
                  <AppInput
                    label={"Number of Panels"}
                    vldName={"noOfPanels"}
                    placeholder={"Number of Panels"}
                    fieldType={"number"}
                    labelSize={18}
                    labelWeigh={500}
                    labelColor={"#012D75"}
                  />

                  <AppDropDown
                    label={"Mount Type"}
                    value={values?.mountType || null}
                    placeholder={"Enter Mount Type"}
                    vldName={"mountType"}
                    list={mountType}
                    onSelect={(item) => {
                      setFieldValue("mountType", item);
                    }}
                    labelSize={18}
                    labelWeigh={500}
                    labelColor={"#012D75"}
                  />
                </Col>

                {/* Col 3 */}
                <Col xs={24} sm={24} md={6} lg={6} xl={6}>
                  <AppInput
                    label={"Orientation"}
                    vldName={"orientation"}
                    placeholder={"Enter Orientation"}
                    fieldType={"number"}
                    labelSize={18}
                    labelWeigh={500}
                    labelColor={"#012D75"}
                  />
                  <AppInput
                    label={"Vmp (V)"}
                    vldName={"vmp"}
                    placeholder={"Enter Vmp"}
                    fieldType={"number"}
                    labelSize={18}
                    labelWeigh={500}
                    labelColor={"#012D75"}
                  />
                </Col>
                {/* Col 4*/}
                <Col xs={24} sm={24} md={6} lg={6} xl={6}>
                  <AppInput
                    label={"Tilt (Degree)"}
                    vldName={"tilt"}
                    placeholder={"Enter Tilt"}
                    fieldType={"number"}
                    labelSize={18}
                    labelWeigh={500}
                    labelColor={"#012D75"}
                  />

                  <AppInput
                    label={"Voc (V)"}
                    vldName={"voc"}
                    placeholder={"Enter Voc"}
                    fieldType={"number"}
                    labelSize={18}
                    labelWeigh={500}
                    labelColor={"#012D75"}
                  />
                </Col>
              </Row>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <AppButton
                  startIcon={isUpdated ? <EditIcon /> : <AddIcon />}
                  onClick={handleSubmit}
                  buttonTitle={isUpdated ? "Update" : "Add"}
                  backgroundColor={"var(--primary_color)"}
                />
              </div>
              <div style={{ marginBottom: "2%" }}>
                <div className="commonCardText titleText">
                  Expected Monthly Power
                </div>
              </div>
              <Box bgcolor={"#F0F0F0"}>
                <DataGrid
                  columns={[
                    {
                      field: "name",
                      headerName: "Month",
                      editable: false,
                      width: 500,
                    },
                    {
                      field: "value",
                      headerName: "Expected Value",
                      align: "left",
                      headerAlign: "left",
                      editable: true,
                      width: 500,
                      type: "number",
                    },
                    {
                      field: "actions",
                      type: "actions",
                      headerName: "Actions",
                      width: 100,
                      cellClassName: "actions",
                      getActions: ({ id }) => {
                        const isInEditMode =
                          rowModesModel[id]?.mode === GridRowModes.Edit;

                        if (isInEditMode) {
                          return [
                            <GridActionsCellItem
                              icon={<SaveIcon />}
                              label="Save"
                              sx={{
                                color: "primary.main",
                              }}
                              onClick={handleSaveClick(id)}
                            />,
                            <GridActionsCellItem
                              icon={<CancelIcon />}
                              label="Cancel"
                              className="textPrimary"
                              onClick={handleCancelClick(id)}
                              color="inherit"
                            />,
                          ];
                        }

                        return [
                          <GridActionsCellItem
                            icon={<MoreVertIcon />}
                            label="More"
                            className="textPrimary"
                            onClick={handleEditClick(id)}
                            color="inherit"
                          />,
                        ];
                      },
                    },
                  ]}
                  rows={rows}
                  editMode="row"
                  rowModesModel={rowModesModel}
                  onRowModesModelChange={handleRowModesModelChange}
                  onRowEditStop={handleRowEditStop}
                  processRowUpdate={processRowUpdate}
                  hideFooter
                />
              </Box>

              {mpptData && mpptData?.length > 0 && (
                <AddFormTable
                  columns={mpptColumns}
                  rows={mpptData}
                  handleDelete={(id) => dispatch(deleteMpptAction(id))}
                  handleUpdate={(obj) => {
                    scrollToTop();
                    setFieldValue("mppt", obj?.mppt);
                    setFieldValue("input", obj?.input);
                    setFieldValue("imp", obj?.imp);
                    setFieldValue("noOfPanels", obj?.noOfPanels);
                    setFieldValue("mountType", obj?.mountType);
                    setFieldValue("vmp", obj?.vmp);
                    setFieldValue("orientation", obj?.orientation);
                    setFieldValue("tilt", obj?.tilt);
                    setFieldValue("voc", obj?.voc);
                    setFieldValue("id", obj?.id);
                    //setFieldValue("expected_power", rows);
                    setMpptId(obj?.id);
                  }}
                />
              )}
            </CommonCard>
          </Form>
        );
      }}
    </Formik>
  );
};
