import Paper from "@mui/material/Paper";
import MoreVertIcon from "@mui/icons-material/MoreVert";
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
import { Menu, MenuItem } from "@mui/material";

const CustomPaper = styled(Paper)({
  borderRadius: 10,
  marginTop: 20,
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

export function SiteTable({
  rows = [],
  columns = [],
  handleRowClick = () => {},
  handleAction = () => {},
  showActions,
  search_key = "",
}) {
  const [filterText, setFilterText] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const [openRowId, setOpenRowId] = useState(null);

  React.useEffect(() => {
    if (search_key) {
      setFilterText(search_key);
    }
  }, [search_key]);
  const filteredRows = rows.filter((row) => {
    if (filterText) {
      return (
        row.station_name?.toLowerCase() == filterText?.toLowerCase() ||
        row.region?.toLowerCase() == filterText?.toLowerCase() ||
        row.category?.toLowerCase() == filterText?.toLowerCase() ||
        row.totalSysSize?.toString() == filterText?.toLowerCase() ||
        row.total_yield?.toString() == filterText?.toLowerCase() ||
        row.total_alarms?.toString() == filterText?.toLowerCase() ||
        row.export_enabled?.toString() == filterText?.toLowerCase() ||
        row.status?.toLowerCase() == filterText?.toLowerCase()
      );
    } else {
      return row;
    }
  });

  // const handleActionClick = (id, action) => {
  //   handleAction(id, action);
  //   setOpenRowId(null);
  // };

  const handleIconClick = (event, rowId) => {
    event.stopPropagation();
    setOpenRowId(rowId);
    setAnchorEl(event.currentTarget);
  };

  const renderColumns = columns.map((column) => {
    if (column.id === "actions" && showActions) {
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
            <MoreVertIcon
              style={{ cursor: "pointer" }}
              onClick={(event) => handleIconClick(event, params.row.id)}
            />

            {openRowId === params.row.id && showActions && (
              <Menu
                anchorEl={anchorEl}
                open={openRowId === params.row.id}
                onClose={() => setOpenRowId(null)}
                PaperProps={{
                  sx: {
                    boxShadow: "0px 0px 5px 0px rgba(0, 0, 0, 0.1)",
                  },
                }}
              >
                {/* <MenuItem
                  onClick={() => handleActionClick(params.row?.id, true)}
                >
                  Export Enable
                </MenuItem>
                <MenuItem
                  onClick={() => handleActionClick(params.row?.id, false)}
                >
                  Export Disable
                </MenuItem> */}
              </Menu>
            )}
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
      renderCell: (params) => {
        const cellValue = params.row[column.id];

        // If the data is missing, display "--"
        return cellValue !== undefined && cellValue !== null ? cellValue : "--";
      },
    };
  });

  return (
    <React.Fragment>
      <CustomPaper
        className={"paperCon"}
        sx={{
          width: "98%",
          backgroundColor: "var(--neutral_light)",
        }}
      >
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

            "& .MuiDataGrid-row:hover": {
              cursor: "pointer",
            },
          }}
          onRowClick={(params) => {
            handleRowClick(params.row);
          }}
        />
      </CustomPaper>
    </React.Fragment>
  );
}
