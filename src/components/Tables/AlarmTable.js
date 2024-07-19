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
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Menu, MenuItem } from "@mui/material";

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

export function AlarmTable({
  rows = [],
  columns = [],
  handleRowClick = () => {},
  handleAction = () => {},
  handleDelete = () => {},
  showActions,
  search_key = "",
}) {
  const [filterText, setFilterText] = useState("");
  const [openRowId, setOpenRowId] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);

  React.useEffect(() => {
    if (search_key) {
      setFilterText(search_key);
    }
  }, [search_key]);

  const filteredRows = rows.filter((row) => {
    return (
      row.station_name?.toLowerCase().includes(filterText?.toLowerCase()) ||
      row.event?.toLowerCase().includes(filterText?.toLowerCase()) ||
      row.raised_time?.toLowerCase().includes(filterText?.toLowerCase()) ||
      row.status?.toLowerCase().includes(filterText?.toLowerCase()) ||
      row.elapsed_time?.toLowerCase().includes(filterText?.toLowerCase()) ||
      row.priority?.toLowerCase().includes(filterText?.toLowerCase())
    );
  });

  const renderColumns = columns.map((column) => {
    let cellClassName;

    if (column.id === "priority") {
      cellClassName = (params) =>
        params.value === "Critical" ? "highPriorityCell" : "normalPriorityCell";
    }
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
              onClick={(event) => {
                setOpenRowId(params.row.id);
                setAnchorEl(event.currentTarget);
              }}
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
                <MenuItem
                  onClick={() => handleActionClick(params.row?.id, "Resolved")}
                >
                  Resolved
                </MenuItem>
                <MenuItem
                  onClick={() =>
                    handleActionClick(params.row?.id, "Acknowledged")
                  }
                >
                  Acknowledged
                </MenuItem>
                <MenuItem onClick={() => handleDeleteClick(params.row?.id)}>
                  Clear
                </MenuItem>
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
      cellClassName,
    };
  });

  const handleActionClick = (id, action) => {
    handleAction(id, action);
    setOpenRowId(null);
  };

  const handleDeleteClick = (id, action) => {
    handleDelete(id);
    setOpenRowId(null);
  };

  return (
    <React.Fragment>
      <CustomPaper
        className={"paperCon"}
        sx={{
          width: "98%",
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
  );
}
