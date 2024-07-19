import { createAsyncThunk } from "@reduxjs/toolkit";
import * as Types from "../../types";
import { ENDPOINTS } from "../../../utilities";

import { del, get, post, put } from "../../../service";

export const getAlarmsAction = createAsyncThunk(
  Types.GET_ALARMS,
  async ({ onSuccess, onFailure }, { rejectWithValue }) => {
    try {
      const res = await get(ENDPOINTS.GET_ALARMS);
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

export const getTicketsAction = createAsyncThunk(
  Types.GET_TICKETS,
  async ({ onSuccess, onFailure }, { rejectWithValue }) => {
    try {
      const res = await get(ENDPOINTS.GET_TICKET);
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

export const updateAlramStatusAction = createAsyncThunk(
  Types.UPDATE_ALARM_STATUS,
  async ({ values, onSuccess, onFailure }, { rejectWithValue }) => {
    try {
      const requestBody = {
        alarm_id: values.alarm_id,
        action: values.action,
      };

      const res = await put(ENDPOINTS.UPDATE_ALARM_STATUS, requestBody);
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

export const manipAlarmStatusAction = createAsyncThunk(
  Types.MANIP_ALARM_STATUS,
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

export const addAlarmAction = createAsyncThunk(
  Types.ADD_ALARM,
  async ({ values, onSuccess, onFailure }, { rejectWithValue }) => {
    try {
      const res = await post(ENDPOINTS.ADD_ALARM, values);
      onSuccess(res?.data);
      return res?.data;
    } catch (error) {
      onFailure(error?.response);
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const deleteAlarmAction = createAsyncThunk(
  Types.DELETE_ALARM,
  async ({ values, onSuccess, onFailure }, { rejectWithValue }) => {
    try {
      const res = await del(`${ENDPOINTS.DELETE_ALARM}/${values?.alarm_id}`);
      const data = {
        alarm_id: values?.alarm_id,
      };
      onSuccess(data);
      return data;
    } catch (error) {
      onFailure(error?.response);
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
