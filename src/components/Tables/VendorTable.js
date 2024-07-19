import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { AppButton, CommonCard } from "../../components";
import { useDispatch } from "react-redux";
import { Box } from "@mui/material";

export const VendorTable = ({ data, onSubmit }) => {
  const dispatch = useDispatch();

  const columns = [
    {
      field: "production",
      headerName: "Production",
      width: 300,
    },
    {
      field: "income",
      headerName: "Income",
      width: 300,
    },
    {
      field: "grid_power",
      headerName: "Grid Power",
      width: 300,
    },
    {
      field: "consumption",
      headerName: "Consumption",
      width: 200,
    },
  ];

  const rows = [
    {
      id: 1,
      production: data.production,
      income: data.income,
      grid_power: data.grid_power,
      consumption: data.consumption,
    },
  ];
  return (
    <CommonCard
      title={"View the Vendor Details"}
      titleFontSize={24}
      titleFontWeight={400}
      p={"0px 24px 0px 16px"}
      buttonTitle={"Submit"}
      onClick={onSubmit}
      mT={10}
    >
      <Box mt={5} bgcolor={"#F0F0F0"}>
        <DataGrid rows={rows} columns={columns} autoHeight hideFooter />
      </Box>
    </CommonCard>
  );
};

export default VendorTable;
