import { createAsyncThunk } from "@reduxjs/toolkit";
import { get, post, put } from "../../../service";
import { ENDPOINTS } from "../../../utilities";
import * as Types from "../../types";

export const getAllFormsAction = createAsyncThunk(
  Types.GET_FORMS,
  async ({ onSuccess, onFailure }, { rejectWithValue }) => {
    try {
      const res = await get(ENDPOINTS.GET_FORMS);
      console.log("res induction", res);
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

export const addMpptAction = createAsyncThunk(
  Types.ADD_MPPT,
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

export const deleteMpptAction = createAsyncThunk(
  Types.DELETE_MPPT,
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

export const addInductionStation = createAsyncThunk(
  Types.ADD_ONBOARDING_STATION,
  async ({ values, onSuccess, onFailure }, { rejectWithValue }) => {
    try {
      const res = await post(ENDPOINTS.ADD_ONBOARDING_STATION, values);
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

export const getInductionDetails = createAsyncThunk(
  Types.GET_INDUCTION_DETAILS,
  async ({ values, onSuccess, onFailure }, { rejectWithValue }) => {
    try {
      const res = await post(ENDPOINTS.GET_ONBOARDING_DETAILS, values);
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

export const updateFormStatusAction = createAsyncThunk(
  Types.UPDATE_FORM_STATUS,
  async ({ values, onSuccess, onFailure }, { rejectWithValue }) => {
    try {
      const requestBody = {
        id: values.id,
        status: values.action,
      };

      const res = await put(ENDPOINTS.UPDATE_ONBOARDING_STATION, requestBody);
      onSuccess(res?.data);
      return { item: requestBody, data: res?.data };
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

export const getOrgAction = createAsyncThunk(
  Types.GET_ORGANIZATIONS,
  async ({ onSuccess, onFailure }, { rejectWithValue }) => {
    try {
      const res = await get(ENDPOINTS.GET_ORGANIZATIONS);
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

export const addOrgAction = createAsyncThunk(
  Types.ADD_ORGANIZATION,
  async ({ values, onSuccess, onFailure }, { rejectWithValue }) => {
    try {
      // const res = await get(ENDPOINTS.GET_ORGANIZATIONS);
      onSuccess(values);
      return values;
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

export const addSupplierAction = createAsyncThunk(
  Types.ADD_SUPPLIER,
  async ({ values, onSuccess, onFailure }, { rejectWithValue }) => {
    try {
      const res = await post(ENDPOINTS.ADD_SUPPLIER, values);
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
