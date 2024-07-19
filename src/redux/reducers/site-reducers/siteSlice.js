import { createSlice } from "@reduxjs/toolkit";
import { stations_data, status } from "../../../utilities";
import {
  getAllSitesAction,
  getSiteDetailAction,
  getWeatherAction,
  // manipSiteExportAction,
  getActualVsExpectedAction,
  getPowerMixAction,
  getInverterWisePowerAction,
  getOrganizationalSitesAction,
  getStationFilterVendorAction,
} from "../../actions";

const initialState = {
  siteload: false,
  sitesVenderFilter: [],
  siteVendorload: false,
  updateSitesVenderFilter: [],
  updateSiteVendorload: false,
  siteDetload: false,
  error: null,
  success: false,
  sites: [],
  siteDetail: [],
  search: "",
  weatherRecord: null,
  sitesFetchTime: null,
  sitesDetFetchTime: null,
  actualVsExpected: [],
  powerMix: [],
  inverterWisePower: [],
  inverterList: [],
};

const siteSlice = createSlice({
  name: "site",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllSitesAction.pending, (state, { payload }) => {
      state.siteload = true;
      state.error = null;
    });
    builder.addCase(getAllSitesAction.fulfilled, (state, { payload }) => {
      state.siteload = false;
      state.sites = payload?.data?.items;
      state.sitesFilter = payload?.data?.items;
      state.sitesFetchTime = payload?.data?.recent_fetch_time;
    });
    builder.addCase(getAllSitesAction.rejected, (state, { payload }) => {
      state.siteload = false;
      state.error = payload;
      state.sites = state.sites;
    });

    builder.addCase(
      getOrganizationalSitesAction.rejected,
      (state, { payload }) => {
        state.siteload = false;
        state.error = payload;
        state.sites = state.sites;
      }
    );

    builder.addCase(
      getOrganizationalSitesAction.pending,
      (state, { payload }) => {
        state.siteload = true;
        state.error = null;
      }
    );
    builder.addCase(
      getOrganizationalSitesAction.fulfilled,
      (state, { payload }) => {
        console.log();
        state.siteload = false;
        state.sites = payload?.data?.items;
        state.sitesFilter = payload?.data?.items;
        state.sitesFetchTime = payload?.data?.recent_fetch_time;
      }
    );

    builder.addCase(getSiteDetailAction.pending, (state, { payload }) => {
      state.siteDetload = true;
      state.error = null;
    });

    builder.addCase(getSiteDetailAction.fulfilled, (state, { payload }) => {
      for (let i = 0; i < payload?.data?.station_hierarchy_data.length; i++) {
        payload.data.station_hierarchy_data[i]["x"] = stations_data[i].x;
        payload.data.station_hierarchy_data[i]["y"] = stations_data[i].y;
        payload.data.station_hierarchy_data[i]["icon"] = stations_data[i].icon;
      }
      state.siteDetload = false;
      state.siteDetail = payload?.data;
      state.sitesDetFetchTime = payload?.data?.recent_fetch_time;
    });

    builder.addCase(getSiteDetailAction.rejected, (state, { payload }) => {
      state.siteDetload = false;
      state.error = payload;
      state.sites = state.sites;
    });

    builder.addCase(getWeatherAction.pending, (state, { payload }) => {
      state.error = null;
    });
    builder.addCase(getWeatherAction.fulfilled, (state, { payload }) => {
      state.weatherRecord = payload.record;
    });

    builder.addCase(getWeatherAction.rejected, (state, { payload }) => {
      state.error = payload;
    });

    // builder.addCase(manipSiteExportAction.pending, (state, { payload }) => {
    //   state.error = null;
    // });
    // builder.addCase(manipSiteExportAction.fulfilled, (state, { payload }) => {
    //   const { station_id, is_export_enabled } = payload;
    //   state.sites = state.sites.map((obj) => {
    //     if (obj?.id === station_id) {
    //       if (is_export_enabled === true) {
    //         return { ...obj, export_enabled: "Yes" };
    //       } else if (is_export_enabled === false) {
    //         return { ...obj, export_enabled: "No" };
    //       }
    //     }
    //     return obj;
    //   });
    // });

    // builder.addCase(manipSiteExportAction.rejected, (state, { payload }) => {
    //   state.error = payload;
    // });

    //Actual verse expected action
    builder.addCase(getActualVsExpectedAction.pending, (state, { payload }) => {
      state.siteload = true;
      state.error = null;
    });
    builder.addCase(
      getActualVsExpectedAction.fulfilled,
      (state, { payload }) => {
        state.siteload = false;
        state.actualVsExpected = payload?.data?.items;
      }
    );

    builder.addCase(
      getActualVsExpectedAction.rejected,
      (state, { payload }) => {
        state.siteload = false;
        state.error = payload;
      }
    );
    //Power Mix action
    builder.addCase(getPowerMixAction.pending, (state, { payload }) => {
      state.siteload = true;
      state.error = null;
    });
    builder.addCase(getPowerMixAction.fulfilled, (state, { payload }) => {
      state.siteload = false;
      state.powerMix = payload?.data?.items;
    });

    builder.addCase(getPowerMixAction.rejected, (state, { payload }) => {
      state.siteload = false;
      state.error = payload;
    });

    //getInverterWisePowerAction action
    builder.addCase(
      getInverterWisePowerAction.pending,
      (state, { payload }) => {
        state.siteload = true;
        state.error = null;
      }
    );
    builder.addCase(
      getInverterWisePowerAction.fulfilled,
      (state, { payload }) => {
        state.siteload = false;
        state.inverterWisePower = payload?.data?.inverter_wise_power;
        state.inverterList = payload?.data?.inverter_list;
      }
    );

    builder.addCase(
      getInverterWisePowerAction.rejected,
      (state, { payload }) => {
        state.siteload = false;
        state.error = payload;
      }
    );

    builder.addCase(
      getStationFilterVendorAction.pending,
      (state, { payload }) => {
        state.siteVendorload = true;
        state.error = null;
      }
    );
    builder.addCase(
      getStationFilterVendorAction.fulfilled,
      (state, { payload }) => {
        console.log("payload", payload);
        state.siteVendorload = false;
        state.sitesVenderFilter = payload?.data?.items;
      }
    );
    builder.addCase(
      getStationFilterVendorAction.rejected,
      (state, { payload }) => {
        console.log("fails");
        state.siteVendorload = false;
        state.error = payload;
      }
    );
  },
});
export default siteSlice.reducer;
