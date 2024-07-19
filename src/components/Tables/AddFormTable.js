import Paper from "@mui/material/Paper";
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

import { Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material";

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

export function AddFormTable({
  title,
  rows = [],
  columns = [],
  handleRowClick = () => {},
  handleDelete = () => {},
  search_key = "",
  handleUpdate = () => {},
}) {
  const [filterText, setFilterText] = useState("");

  React.useEffect(() => {
    if (search_key) {
      setFilterText(search_key);
    }
  }, [search_key]);

  // const filteredRows = rows.filter((row) => {
  //   return (
  //     row.imp?.toString()?.toLowerCase().includes(filterText?.toLowerCase()) ||
  //     row.input
  //       ?.toString()
  //       ?.toLowerCase()
  //       .includes(filterText?.toLowerCase()) ||
  //     row.mountType?.toLowerCase().includes(filterText?.toLowerCase()) ||
  //     row.mppt?.toLowerCase().includes(filterText?.toLowerCase()) ||
  //     row.noOfPanels
  //       ?.toString()
  //       ?.toLowerCase()
  //       .includes(filterText?.toLowerCase()) ||
  //     row.orientation
  //       ?.toString()
  //       ?.toLowerCase()
  //       .includes(filterText?.toLowerCase()) ||
  //     row.tilt?.toString()?.toLowerCase().includes(filterText?.toLowerCase()) ||
  //     row.vmp?.toString()?.toLowerCase().includes(filterText?.toLowerCase()) ||
  //     row.voc?.toString()?.toLowerCase().includes(filterText?.toLowerCase())
  //   );
  // });

  const renderColumns = columns.map((column) => {
    let cellClassName;

    if (column.id === "actions") {
      return {
        field: column.id,
        headerName: column.label,
        flex: 1,
        headerClassName: "tableHeadCell",
        headerAlign: column.align,
        align: column.align,
        minWidth: column.minWidth,
        renderCell: (params) => (
          <React.Fragment>
            <EditIcon
              style={{ cursor: "pointer", color: "blue" }}
              onClick={() => handleUpdate(params.row)}
            />

            <DeleteIcon
              style={{ cursor: "pointer", color: "red", marginLeft: 10 }}
              onClick={() => handleActionClick(params.row?.id)}
            />
          </React.Fragment>
        ),
      };
    }
    return {
      field: column.id,
      headerName: column.label,
      flex: 1,
      headerClassName: "tableHeadCell",
      headerAlign: column.align,
      align: column.align,
      minWidth: column.minWidth,
      cellClassName,
    };
  });

  const handleActionClick = (id, action) => {
    handleDelete(id);

    // Perform any additional logic for deleting the row
  };

  return (
    <div>
      {title && <span className="commonCardText titleText">{title}</span>}
      <React.Fragment>
        <CustomPaper
          className={"paperCon"}
          sx={{
            width: "99%",
          }}
        >
          <DataGrid
            rows={rows}
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
            }}
            pageSizeOptions={[5, 10, 20]}
            onRowClick={(params) => {
              handleRowClick(params.row);
            }}
          />
        </CustomPaper>
      </React.Fragment>
    </div>
  );
}
