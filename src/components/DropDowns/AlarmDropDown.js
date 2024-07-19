import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import React from "react";

export const AlarmDropDown = ({
  optionSelectData,
  onChangeOptionSelect = () => {},
  selectValue,
  outlineColor,
  dropDColor,
  label,
}) => {
  return (
    <div className="alarmDropCon">
      <Autocomplete
        value={selectValue}
        onChange={(event, newValue) => {
          onChangeOptionSelect(newValue || "");
        }}
        options={optionSelectData || []}
        sx={{
          "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
            {
              borderColor: outlineColor || "var(--color-wateen)",
            },
        }}
        // disableClearable
        disableInput
        autoComplete="off"
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            label={label}
            InputLabelProps={{
              style: {
                color: "var(--b1)",
              },
            }}
            style={{}}
            size="small"
            disabled
          />
        )}
      />
    </div>
  );
};
