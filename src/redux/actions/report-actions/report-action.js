import { createAsyncThunk } from "@reduxjs/toolkit";
import { post } from "../../../service";
import { ENDPOINTS, responseValidator } from "../../../utilities";
import * as Types from "../../types";

export const generateReportAction = createAsyncThunk(
  Types.GENERATE_REPORT,
  async ({ values, onSuccess, onFailure }, { rejectWithValue }) => {
    try {
      const res = await post(
        ENDPOINTS.GENERATE_REPORT,
        values,
        "application/json",
        "blob"
      );

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
