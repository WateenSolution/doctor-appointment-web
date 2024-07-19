import { createSlice } from "@reduxjs/toolkit";
import { getOverviewAction, generateReportAction } from "../../actions";

const initialState = {
  genReportLoad: false,
  ReportLoad: false,
  error: null,
  success: false,
};

const reportSlice = createSlice({
  name: "report",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getOverviewAction.pending, (state, { payload }) => {
      state.genReportLoad = true;
      state.error = null;
    });
    builder.addCase(getOverviewAction.fulfilled, (state, { payload }) => {
      state.genReportLoad = false;
    });

    builder.addCase(getOverviewAction.rejected, (state, { payload }) => {
      state.genReportLoad = false;
      state.error = payload;
    });
    builder.addCase(generateReportAction.pending, (state, { payload }) => {
      state.reportLoad = true;
      state.error = null;
    });
    builder.addCase(generateReportAction.fulfilled, (state, { payload }) => {
      state.reportLoad = false;
    });

    builder.addCase(generateReportAction.rejected, (state, { payload }) => {
      state.reportLoad = false;
      state.error = payload;
    });
  },
});
export default reportSlice.reducer;
