import { createSlice } from "@reduxjs/toolkit";
import {
  filterDevicesAction,
  getDeviceDetail,
  getDevicesAction,
  getMeterDetail,
} from "../../actions";
import { meterHierarchy_data } from "../../../utilities";

const initialState = {
  deviceLoad: false,
  deviceDetLoad: false,
  meterDetLoad: false,
  error: null,
  success: false,
  devices: [],
  filteredDevices: [],
  deviceFilter: "All OEM",
  deviceDetail: [],
  meterDetail: [],
  search: "",
  devicesFetchTime: null,
};

const devicesSlice = createSlice({
  name: "devices",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getDevicesAction.pending, (state, { payload }) => {
      state.deviceLoad = true;
      state.error = null;
    });
    builder.addCase(getDevicesAction.fulfilled, (state, { payload }) => {
      state.deviceLoad = false;
      state.devices = payload?.data?.items;
      state.filteredDevices = payload?.data?.items;
      state.devicesFetchTime = payload?.data?.recent_fetch_time;
    });

    builder.addCase(getDevicesAction.rejected, (state, { payload }) => {
      state.deviceLoad = false;
      state.error = payload;
    });

    builder.addCase(getDeviceDetail.pending, (state, { payload }) => {
      state.deviceDetLoad = true;
      state.error = null;
    });
    builder.addCase(getDeviceDetail.fulfilled, (state, { payload }) => {
      state.deviceDetLoad = false;
      state.deviceDetail = payload?.data;
    });

    builder.addCase(getDeviceDetail.rejected, (state, { payload }) => {
      state.deviceDetLoad = false;
      state.error = payload;
    });

    builder.addCase(getMeterDetail.pending, (state, { payload }) => {
      state.meterDetLoad = true;
      state.error = null;
    });
    builder.addCase(getMeterDetail.fulfilled, (state, { payload }) => {
      state.meterDetLoad = false;
      for (let i = 0; i < payload?.data?.device_hierarchy_data.length; i++) {
        payload.data.device_hierarchy_data[i]["x"] = meterHierarchy_data[i].x;
        payload.data.device_hierarchy_data[i]["y"] = meterHierarchy_data[i].y;
        payload.data.device_hierarchy_data[i]["icon"] =
          meterHierarchy_data[i].icon;
      }
      state.meterDetail = payload?.data;
    });

    builder.addCase(getMeterDetail.rejected, (state, { payload }) => {
      state.meterDetLoad = false;
      state.error = payload;
    });

    builder.addCase(filterDevicesAction.pending, (state, { payload }) => {
      state.error = null;
    });
    builder.addCase(filterDevicesAction.fulfilled, (state, { payload }) => {
      state.filteredDevices = state.devices;
      state.deviceFilter = payload;

      if (payload === "All OEM") {
        state.filteredDevices = state.devices;
      } else {
        state.filteredDevices = state.devices.filter(
          (device) =>
            device.provider_name?.toLowerCase() == payload?.toLowerCase()
        );
      }
    });
    builder.addCase(filterDevicesAction.rejected, (state, { payload }) => {
      state.error = payload;
    });
  },
});
export default devicesSlice.reducer;
