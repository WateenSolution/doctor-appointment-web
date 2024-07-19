import { createSlice } from "@reduxjs/toolkit";
import { getOverviewAction, prComparisonAction } from "../../actions";

const initialState = {
  overviewLoad: false,
  error: null,
  success: false,
  prCitiesList: [],
  prRegionsList: [],
  prStationList: [],
  prComparison: [],
  prMountList: [],
  prSiteList: [],
};

const overviewSlice = createSlice({
  name: "overview",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getOverviewAction.pending, (state, { payload }) => {
      state.overviewLoad = true;
      state.error = null;
    });
    builder.addCase(getOverviewAction.fulfilled, (state, { payload }) => {
      state.overviewLoad = false;
      state.overview = payload?.data;
      state.prComparison = payload?.data?.performance_ratio_comparison;
      state.prCitiesList =
        payload?.data?.cities_list?.length > 0
          ? ["All"].concat(payload?.data?.cities_list)
          : [];
      state.prRegionsList =
        payload?.data?.regions_list?.length > 0
          ? ["All"].concat(payload?.data?.regions_list)
          : [];
      state.prStationList =
        payload?.data?.station_list?.length > 0
          ? ["All"].concat(payload?.data?.station_list)
          : [];
      state.prMountList =
        payload?.data?.mount_list?.length > 0
          ? [].concat(payload?.data?.mount_list)
          : [];
      state.prSiteList =
        payload?.data?.site_breakup_list?.length > 0
          ? [].concat(payload?.data?.site_breakup_list)
          : [];
    });
    builder.addCase(getOverviewAction.rejected, (state, { payload }) => {
      state.overviewLoad = false;
      state.error = payload;
    });
    builder.addCase(prComparisonAction.pending, (state, { payload }) => {
      state.error = null;
    });
    builder.addCase(prComparisonAction.fulfilled, (state, { payload }) => {
      state.prComparison = payload?.data?.performance_ratio_comparison;
      state.prCitiesList =
        payload?.data?.cities_list?.length > 0
          ? ["All"].concat(payload?.data?.cities_list)
          : [];
      state.prRegionsList =
        payload?.data?.regions_list?.length > 0
          ? [].concat(payload?.data?.regions_list)
          : [];
      state.prStationList =
        payload?.data?.station_list?.length > 0
          ? [].concat(payload?.data?.station_list)
          : [];
      state.prMountList =
        payload?.data?.mount_list?.length > 0
          ? [].concat(payload?.data?.mount_list)
          : [];
      state.prSiteList =
        payload?.data?.site_breakup_list?.length > 0
          ? [].concat(payload?.data?.site_breakup_list)
          : [];
    });
    builder.addCase(prComparisonAction.rejected, (state, { payload }) => {
      state.error = payload;
    });
  },
});
export default overviewSlice.reducer;
