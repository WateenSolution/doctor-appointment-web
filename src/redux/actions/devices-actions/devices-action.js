import { createAsyncThunk } from "@reduxjs/toolkit";
import * as Types from "../../types";
import { ENDPOINTS } from "../../../utilities";
import { get, post } from "../../../service";

export const getDevicesAction = createAsyncThunk(
  Types.GET_DEVICES,
  async ({ onSuccess, onFailure }, { rejectWithValue }) => {
    try {
      const res = await get(ENDPOINTS.GET_DEVICES);
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

export const getDeviceDetail = createAsyncThunk(
  Types.GET_DEVICE_DETAIL,
  async ({ values, onSuccess, onFailure }, { rejectWithValue }) => {
    try {
      const requestBody = {
        device_id: values.device_id,
      };

      const res = await post(ENDPOINTS.GET_DEVICE_DETAIL, requestBody);
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

export const getMeterDetail = createAsyncThunk(
  Types.GET_METER_DETAIL,
  async ({ values, onSuccess, onFailure }, { rejectWithValue }) => {
    try {
      const requestBody = {
        device_id: values.device_id,
      };

      const res = await post(ENDPOINTS.GET_METER_DETAIL, requestBody);
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

export const filterDevicesAction = createAsyncThunk(
  Types.FILTER_DEVICES,
  async (values, { rejectWithValue }) => {
    try {
      return values;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
