import { createAsyncThunk } from "@reduxjs/toolkit";
import * as Types from "../../types";
import { ENDPOINTS } from "../../../utilities";
import { post } from "../../../service";

export const getOverviewAction = createAsyncThunk(
  Types.GET_OVERVIEW,
  async ({ values, onSuccess, onFailure }, { rejectWithValue }) => {
    try {
      const res = await post(ENDPOINTS.GET_OVERVIEW);
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

export const prComparisonAction = createAsyncThunk(
  Types.PR_COMPARISON,
  async ({ values, onSuccess, onFailure }, { rejectWithValue }) => {
    try {
      const res = await post(ENDPOINTS.PR_COMPARISON, values);
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
