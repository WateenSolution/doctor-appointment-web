import SearchIcon from "@material-ui/icons/Search";
import Paper from "@mui/material/Paper";
import { Pagination, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import {
  DataGrid,
  GridToolbar,
  GridToolbarColumnsButton,
  GridToolbarContainer,
  GridToolbarDensitySelector,
  GridToolbarExport,
  GridToolbarFilterButton,
} from "@mui/x-data-grid";
import * as React from "react";
import { useState } from "react";

const CustomPaper = styled(Paper)({
  borderRadius: 10,
  marginTop: 20,
  backgroundColor: "var(--neutral_light)",
});

function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <GridToolbarColumnsButton style={{ color: "var(--primary_color)" }} />
      <GridToolbarFilterButton style={{ color: "var(--primary_color)" }} />
      <GridToolbarDensitySelector style={{ color: "var(--primary_color)" }} />
      <GridToolbarExport style={{ color: "var(--primary_color)" }} />
    </GridToolbarContainer>
  );
}

export function EquipmentTable({
  rows = [],
  columns = [],
  handleRowClick = () => {},
}) {
  const [filterText, setFilterText] = useState("");

  const filteredRows = rows.filter((row) => {
    return (
      row.station_name.toLowerCase().includes(filterText.toLowerCase()) ||
      row.device_name.toLowerCase().includes(filterText.toLowerCase()) ||
      row.device_sn.toLowerCase().includes(filterText.toLowerCase()) ||
      row.capacity
        ?.toFixed(0)
        .toLowerCase()
        .includes(filterText.toLowerCase()) ||
      row.provider_name.toLowerCase().includes(filterText.toLowerCase())
    );
  });

  const renderColumns = columns.map((column) => {
    return {
      field: column.id,
      headerName: column.label,
      flex: 1,
      headerClassName: "tableHeadCell",
      headerAlign: column.align,
      align: column.align,
      minWidth: column.minWidth,
    };
  });

  return (
    <React.Fragment>
      <CustomPaper
        className={"paperCon"}
        sx={{
          width: "98%",
        }}
      >
        <div style={{ width: "100%", marginTop: 20 }}>
          <DataGrid
            rows={filteredRows}
            columns={renderColumns}
            slots={{ toolbar: CustomToolbar }}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 10,
                },
              },
            }}
            sx={{
              ".MuiTablePagination-displayedRows, .MuiTablePagination-selectLabel":
                {
                  marginTop: "1em",
                  marginBottom: "1em",
                },

              ".MuiDataGrid-cell:focus": {
                outline: "none",
              },

              "& .MuiDataGrid-row:hover": {
                cursor: "pointer",
              },
            }}
            pageSizeOptions={[5, 10, 20]}
            onRowClick={(params) => {
              handleRowClick(params.row);
            }}
          />
        </div>
      </CustomPaper>
    </React.Fragment>
  );
}
