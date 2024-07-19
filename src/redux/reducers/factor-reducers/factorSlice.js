import { createSlice } from "@reduxjs/toolkit";
import { stations_data, status } from "../../../utilities";
import { editFactorAction, getFactorAction } from "../../actions";

const initialState = {
  factorLoad: false,
  co2Factor: 0,
  treeFactor: 0,
};

const factorSlice = createSlice({
  name: "factor",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getFactorAction.pending, (state, { payload }) => {
      state.factorLoad = true;
      state.error = null;
    });
    builder.addCase(getFactorAction.fulfilled, (state, { payload }) => {
      state.siteload = false;
      state.co2Factor = payload?.data?.items[0]?.value;
      state.treeFactor = payload?.data?.items1[0]?.value;
    });

    builder.addCase(getFactorAction.rejected, (state, { payload }) => {
      state.factorLoad = false;
      state.error = payload;
      state.co2Factor = 0;
      state.treeFactor = 0;
    });
    builder.addCase(editFactorAction.pending, (state, { payload }) => {
      state.factorLoad = true;
      state.error = null;
    });
    builder.addCase(editFactorAction.fulfilled, (state, { payload }) => {
      state.siteload = false;
      state.co2Factor = payload?.data?.items[0]?.co2_factor;
      state.treeFactor = payload?.data?.items1[1]?.tree_factor;
    });

    builder.addCase(editFactorAction.rejected, (state, { payload }) => {
      state.factorLoad = false;
      state.error = payload;
      state.co2Factor = 0;
      state.treeFactor = 0;
    });
  },
});
export default factorSlice.reducer;
