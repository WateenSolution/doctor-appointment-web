import { createAsyncThunk } from "@reduxjs/toolkit";
import * as Types from "../../types";
import { ENDPOINTS, responseValidator } from "../../../utilities";
import { get, post } from "../../../service";

export const getUserDetAction = createAsyncThunk(
  Types.GET_USER_BY_ID,
  async ({ values, onSuccess, onFailure }, { rejectWithValue }) => {
    try {
      const res = await get(`${ENDPOINTS.GET_USER_BY_ID}/${values?.id}`);
      onSuccess(res?.data);
      return res?.data;
    } catch (error) {
      responseValidator(error?.response?.data?.message);
      onFailure(error?.response);
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const availableTimeStatusAction = createAsyncThunk(
  Types.AVAILABLE_TIME_STATUS,
  async ({ values, onSuccess, onFailure }, { rejectWithValue }) => {
    try {
      const res = await post(ENDPOINTS.AVAILABLE_TIME_STATUS, values);
      onSuccess(res?.data);
      return res?.data;
    } catch (error) {
      responseValidator(error?.response?.data?.message);
      onFailure(error);
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
export const addRatingAction = createAsyncThunk(
  Types.ADD_RATING,
  async ({ values, onSuccess, onFailure }, { rejectWithValue }) => {
    try {
      const res = await post(ENDPOINTS.ADD_RATING, values);
      onSuccess(res?.data);
      return res?.data;
    } catch (error) {
      responseValidator(error?.response?.data?.message);
      onFailure(error);
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
export const getAppointTimeAction = createAsyncThunk(
  Types.GET_APPOINT_BOOK_TIME,
  async ({ values, onSuccess, onFailure }, { rejectWithValue }) => {
    try {
      const res = await post(ENDPOINTS.GET_APPOINT_BOOK_TIME, values);
      onSuccess(res?.data);
      return res?.data;
    } catch (error) {
      responseValidator(error?.response?.data?.message);
      onFailure(error);
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const submitAppointmentFormAction = createAsyncThunk(
  Types.ADD_APPOINT_FORM,
  async ({ values, onSuccess, onFailure }, { rejectWithValue }) => {
    try {
      const res = await post(ENDPOINTS.ADD_APPOINT_FORM, values);
      onSuccess(res?.data);
      return res?.data;
    } catch (error) {
      responseValidator(error?.response?.data?.message);
      onFailure(error);
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
export const getPatientAppointListAction = createAsyncThunk(
  Types.GET_PAT_APPOINT_LIST,
  async ({ values, onSuccess, onFailure }, { rejectWithValue }) => {
    try {
      const res = await get(ENDPOINTS.GET_PAT_APPOINT_LIST);
      onSuccess(res?.data);
      return res?.data;
    } catch (error) {
      responseValidator(error?.response?.data?.message);
      onFailure(error?.response);
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const getDoctorAppointListAction = createAsyncThunk(
  Types.GET_DOC_APPOINT_LIST,
  async ({ values, onSuccess, onFailure }, { rejectWithValue }) => {
    try {
      const res = await get(ENDPOINTS.GET_DOC_APPOINT_LIST);
      onSuccess(res?.data);
      return res?.data;
    } catch (error) {
      responseValidator(error?.response?.data?.message);
      onFailure(error?.response);
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
