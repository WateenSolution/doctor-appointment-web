import { createAsyncThunk } from "@reduxjs/toolkit";
import { del, get, post, put } from "../../../service";
import { ENDPOINTS, responseValidator } from "../../../utilities";
import * as Types from "../../types";

export const getAllUsersAction = createAsyncThunk(
  Types.GET_USERS,
  async ({ onSuccess, onFailure }, { rejectWithValue }) => {
    try {
      const res = await get(ENDPOINTS.GET_USERS);
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

export const addUserAction = createAsyncThunk(
  Types.ADD_USER,
  async ({ values, onSuccess, onFailure }, { rejectWithValue }) => {
    try {
      const res = await post(ENDPOINTS.ADD_USER, values);
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

export const getUserDetAction = createAsyncThunk(
  Types.GET_USER_DETAILS,
  async ({ values, onSuccess, onFailure }, { rejectWithValue }) => {
    try {
      const res = await get(`${ENDPOINTS.GET_USER_DETAILS}/${values?.id}`);
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

export const updateUserAction = createAsyncThunk(
  Types.UPDATE_USER,
  async ({ values, onSuccess, onFailure }, { rejectWithValue }) => {
    try {
      const res = await put(ENDPOINTS.UPDATE_USER, values);
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

export const deleteUserAction = createAsyncThunk(
  Types.DELETE_USER,
  async ({ values, onSuccess, onFailure }, { rejectWithValue }) => {
    try {
      const res = await del(`${ENDPOINTS.DELETE_USER}/${values?.user_id}`);
      const data = {
        user_id: values?.user_id,
      };
      onSuccess(data);
      return data;
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
