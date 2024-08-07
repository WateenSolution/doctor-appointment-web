import { createSlice } from "@reduxjs/toolkit";
import {
  getDashboardDetailAction,
  getFilterOrAllDoc,
  getBookedPatientAction,
} from "../../actions";

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
      state.filterDataLoader = false;
      state.filterOrDocDetail = payload?.data;
    });

    builder.addCase(getFilterOrAllDoc.rejected, (state, { payload }) => {
      state.filterDataLoader = false;
      state.error = payload;
    });

    builder.addCase(getBookedPatientAction.pending, (state, { payload }) => {
      state.filterDataLoader = true;
      state.error = null;
    });
    builder.addCase(getBookedPatientAction.fulfilled, (state, { payload }) => {
      state.filterDataLoader = false;
      state.bookedPatient = payload?.data;
    });

    builder.addCase(getBookedPatientAction.rejected, (state, { payload }) => {
      state.filterDataLoader = false;
      state.error = payload;
    });
  },
});
export default DashboardSlice.reducer;
