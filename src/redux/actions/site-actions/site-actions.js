import { createAsyncThunk } from "@reduxjs/toolkit";
import * as Types from "../../types";
import { ENDPOINTS, stations_data } from "../../../utilities";
import { get, post, put, weatherPost } from "../../../service";

export const getAllSitesAction = createAsyncThunk(
  Types.GET_SITES,
  async ({ onSuccess, onFailure }, { rejectWithValue }) => {
    try {
      const res = await get(ENDPOINTS.GET_SITES);
      onSuccess(res?.data);
      return res?.data;
    } catch (error) {
      onFailure(error);
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const getSiteDetailAction = createAsyncThunk(
  Types.GET_SITE_DETAIL,
  async ({ values, onSuccess, onFailure }, { rejectWithValue }) => {
    try {
      const requestBody = {
        station_id: values.station_id,
        data_type: values.data_type,
      };
      const res = await post(ENDPOINTS.GET_SITE_DETAIL, requestBody);
      onSuccess(res?.data);
      return res?.data;
    } catch (error) {
      onFailure(error);
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const getWeatherAction = createAsyncThunk(
  Types.GET_SITE_WEATHER,
  async ({ values, onSuccess, onFailure }, { rejectWithValue }) => {
    try {
      const requestBody = {
        lat: values.lat,
        long: values.long,
      };

      const res = await weatherPost(
        ENDPOINTS.GET_SITE_WEATHER,
        requestBody,
        "application/x-www-form-urlencoded"
      );
      onSuccess(res?.data);
      return res?.data;
    } catch (error) {
      onFailure(error);
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

// export const updateSiteExportAction = createAsyncThunk(
//   Types.UPDATE_EXPORT_ENABLE,
//   async ({ values, onSuccess, onFailure }, { rejectWithValue }) => {
//     try {
//       const requestBody = {
//         station_id: values.station_id,
//         is_export_enabled: values.is_export_enabled,
//       };
//       const res = await put(ENDPOINTS.UPDATE_EXPORT_ENABLE, requestBody);
//       onSuccess(res?.data);
//       return res?.data;
//     } catch (error) {
//       onFailure(error);
//       if (error.response && error.response.data.message) {
//         return rejectWithValue(error.response.data.message);
//       } else {
//         return rejectWithValue(error.message);
//       }
//     }
//   }
// );

// export const manipSiteExportAction = createAsyncThunk(
//   Types.MANIP_SITE_STATUS,
//   async (values, { rejectWithValue }) => {
//     try {
//       return values;
//     } catch (error) {
//       if (error.response && error.response.data.message) {
//         return rejectWithValue(error.response.data.message);
//       } else {
//         return rejectWithValue(error.message);
//       }
//     }
//   }
// );
export const getActualVsExpectedAction = createAsyncThunk(
  Types.ACTUAL_VS_EXPECTED,
  async ({ values, onSuccess, onFailure }, { rejectWithValue }) => {
    try {
      const requestBody = {
        station_code: String(values.station_code),
        data_type: values.data_type,
      };
      const res = await post(ENDPOINTS.ACTUAL_VS_EXPECTED, requestBody);
      onSuccess(res?.data);
      return res?.data;
    } catch (error) {
      onFailure(error);
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const getInverterWisePowerAction = createAsyncThunk(
  Types.INVERTER_WISE_POWER,
  async ({ values, onSuccess, onFailure }, { rejectWithValue }) => {
    try {
      const requestBody = {
        station_code: String(values.station_code),
        data_type: values.data_type,
      };
      const res = await post(ENDPOINTS.INVERTER_WISE_POWER, requestBody);
      onSuccess(res?.data);
      return res?.data;
    } catch (error) {
      onFailure(error);
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
export const getPowerMixAction = createAsyncThunk(
  Types.POWER_MIX,
  async ({ values, onSuccess, onFailure }, { rejectWithValue }) => {
    try {
      const requestBody = {
        station_code: String(values.station_code),
        data_type: values.data_type,
      };
      const res = await post(ENDPOINTS.POWER_MIX, requestBody);
      onSuccess(res?.data);
      return res?.data;
    } catch (error) {
      onFailure(error);
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const getOrganizationalSitesAction = createAsyncThunk(
  Types.GET_ORGANIZATIONAL_SITES,
  async ({ values, onSuccess, onFailure }, { rejectWithValue }) => {
    try {
      const requestBody = {
        organization: values.organization,
      };
      const res = await post(ENDPOINTS.GET_ORGANIZATIONAL_SITES, requestBody);
      onSuccess(res?.data);
      return res?.data;
    } catch (error) {
      onFailure(error);
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const getStationFilterVendorAction = createAsyncThunk(
  Types.GET_STATION_FILTER,
  async ({ values, onSuccess, onFailure }, { rejectWithValue }) => {
    try {
      const requestBody = {
        station_name: values.station_name,
        station_date: values.station_date,
      };
      const res = await put(ENDPOINTS.GET_STATION_FILTER, requestBody);
      onSuccess(res?.data);
      return res?.data;
    } catch (error) {
      onFailure(error);
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const getStationVendorAction = createAsyncThunk(
  Types.GET_STATION_VENDOR,
  async ({ values, onSuccess, onFailure }, { rejectWithValue }) => {
    try {
      const requestBody = {
        station_name: values.station_name,
        station_date: values.station_date,
      };
      const res = await post(ENDPOINTS.GET_STATION_VENDOR, requestBody);
      onSuccess(res?.data);
      return res?.data;
    } catch (error) {
      onFailure(error);
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
