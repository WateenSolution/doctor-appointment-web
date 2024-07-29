import { createSlice } from "@reduxjs/toolkit";
import { getDashboardDetailAction, getFilterOrAllDoc } from "../../actions";

const initialState = {
  dashboardLoad: false,
  error: null,
  success: false,
  filterDataLoader: false,
};

const DashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getDashboardDetailAction.pending, (state, { payload }) => {
      state.dashboardLoad = true;
      state.error = null;
    });
    builder.addCase(
      getDashboardDetailAction.fulfilled,
      (state, { payload }) => {
        state.dashboardLoad = false;
        state.dashboard = payload?.data;
      }
    );
    builder.addCase(getDashboardDetailAction.rejected, (state, { payload }) => {
      state.dashboardLoad = false;
      state.error = payload;
    });

    builder.addCase(getFilterOrAllDoc.pending, (state, { payload }) => {
      state.filterDataLoader = true;
      state.error = null;
    });
    builder.addCase(getFilterOrAllDoc.fulfilled, (state, { payload }) => {
      console.log("payload of filter data is", payload);
      state.filterDataLoader = false;
      state.filterOrDocDetail = payload?.data;
    });

    builder.addCase(getFilterOrAllDoc.rejected, (state, { payload }) => {
      state.filterDataLoader = false;
      state.error = payload;
    });
  },
});
export default DashboardSlice.reducer;
