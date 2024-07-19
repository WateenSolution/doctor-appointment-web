import { createAsyncThunk } from "@reduxjs/toolkit";
import * as Types from "../../types";
import { ENDPOINTS, responseValidator } from "../../../utilities";
import { post, put } from "../../../service";
// userActions.js
export const loginAction = createAsyncThunk(
  Types.AUTH_LOGIN,
  async ({ values, onSuccess, onFailure }, { rejectWithValue }) => {
    try {
      const requestBody = {
        username: values.username,
        password: values.password,
      };

      const res = await post(ENDPOINTS.LOGIN, requestBody);
      localStorage.setItem("token", res?.data?.token);

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

//Logout
export const logoutAction = createAsyncThunk(
  Types.AUTH_LOGOUT,
  async ({ values, onSuccess, onFailure }, { rejectWithValue }) => {
    try {
      const res = await post(ENDPOINTS.LOGOUT);
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

export const forgotPassAction = createAsyncThunk(
  Types.FORGOT_PASS,
  async ({ values, onSuccess, onFailure }, { rejectWithValue }) => {
    try {
      const requestBody = {
        email: values.email,
      };

      const res = await post(ENDPOINTS.FORGOT_PASSWORD, requestBody);

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

export const changePassAction = createAsyncThunk(
  Types.CHANGE_PASS,
  async ({ values, onSuccess, onFailure }, { rejectWithValue }) => {
    try {
      const res = await put(ENDPOINTS.CHANGE_PASSWORD, values);
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

export const resetPassAction = createAsyncThunk(
  Types.RESET_PASS,
  async ({ values, onSuccess, onFailure }, { rejectWithValue }) => {
    try {
      const res = await post(ENDPOINTS.RESET_PASSWORD, values);
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
