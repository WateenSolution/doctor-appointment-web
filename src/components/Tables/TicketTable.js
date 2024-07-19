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
import { showTicketItems } from "../../utilities";
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

export function TicketTable({
  rows = [],
  columns = [],
  handleRowClick = () => {},
  handleUpdate = () => {},
  search_key,
}) {
  const [columnVisibilityModel, setColumnVisibilityModel] =
    useState(showTicketItems);

  const customFilterFunction = (data, search_key) => {
    return data.filter((row) => {
      const typeMatch =
        search_key && row.handlingQueue
          ? row.handlingQueue.toLowerCase().includes(search_key)
          : true;

      return typeMatch;
    });
  };

  const renderColumns = columns.map((column) => {
    if (column.id === "status") {
      return {
        field: column.id,
        headerName: column.label,
        headerClassName: "tableHeadCell",
        headerAlign: column.align,
        align: column.align,

        renderCell: (params) => {
          let cellColor = "black";

          if (params.value === "Resolved") {
            cellColor = "green";
          } else if (params.value === "Pending") {
            cellColor = "red";
          } else if (params.value === "Open") {
            cellColor = "orange";
          }

          return (
            <span style={{ color: cellColor, fontWeight: 700 }}>
              {params?.value}
            </span>
          );
        },
      };
    }

    return {
      width: column.width,
      // flex: 1,
      field: column.id,
      headerName: column.label,
      headerClassName: "tableHeadCell",
      headerAlign: column.align,
      align: column.align,
      renderCell: (params) => {
        const cellValue = params.value;
        return cellValue ? cellValue : "------";
      },
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
        <DataGrid
          data-testid="data-grid"
          rows={customFilterFunction(rows, search_key)}
          columns={renderColumns}
          slots={{
            toolbar: CustomToolbar,
          }}
          columnVisibilityModel={columnVisibilityModel}
          onColumnVisibilityModelChange={(newModel) => {
            setColumnVisibilityModel(newModel);
          }}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          }}
          pageSizeOptions={[5, 10, 20]}
          sx={{
            ".MuiTablePagination-displayedRows, .MuiTablePagination-selectLabel":
              {
                marginTop: "1em",
                marginBottom: "1em",
              },

            ".MuiDataGrid-cell:focus": {
              outline: "none",
            },
            // overflowX: "auto",
          }}
          onRowClick={(params, event) => {
            const isEditIconClick =
              event.target.tagName === "svg" || event.target.tagName === "path";
            if (!isEditIconClick) {
              handleRowClick(params.row);
            }
          }}
        />
      </CustomPaper>
    </React.Fragment>
  );
}
