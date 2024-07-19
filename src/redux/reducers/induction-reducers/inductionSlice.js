import { createSlice } from "@reduxjs/toolkit";
import {
  addMpptAction,
  addInductionStation,
  deleteMpptAction,
  getAllFormsAction,
  getInductionDetails,
  updateFormStatusAction,
  manipFormStatusAction,
  getOrgAction,
  addOrgAction,
  addSupplierAction,
} from "../../actions";
import { contactUsFormFields } from "../../../utilities";

const initialState = {
  formListloader: false,
  error: null,
  success: false,
  inductions_forms: [],
  organizations: [],
  suppliers: [],
  mpptData: [],
  expectedData: [],
  idCounter: 0,
  inductionInfo: null,
};

const inductionSlice = createSlice({
  name: "inductions",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllFormsAction.pending, (state, { payload }) => {
      state.formListloader = true;
      state.error = null;
    });
    builder.addCase(getAllFormsAction.fulfilled, (state, { payload }) => {
      state.formListloader = false;
      state.inductions_forms = payload?.data?.items;

      state.mpptData = [];
      state.inductionInfo = null;
    });

    builder.addCase(getAllFormsAction.rejected, (state, { payload }) => {
      state.formListloader = false;
      state.error = payload;
    });

    builder.addCase(addMpptAction.pending, (state, { payload }) => {
      state.loader = true;
      state.error = null;
    });
    builder.addCase(addMpptAction.fulfilled, (state, { payload }) => {
      state.loader = false;
      const updatedPayload = { ...payload, id: state.idCounter };
      const existingIndex = state.mpptData.findIndex(
        (item) => item.id === payload?.id
      );

      if (existingIndex !== -1) {
        // Value exists, update it
        state.mpptData[existingIndex] = updatedPayload;
      } else {
        // Value does not exist, push it to the array
        state.mpptData.push(updatedPayload);
      }

      state.idCounter += 1;
    });

    builder.addCase(addMpptAction.rejected, (state, { payload }) => {
      state.loader = false;
      state.error = payload;
    });

    builder.addCase(deleteMpptAction.pending, (state, { payload }) => {
      state.loader = true;
      state.error = null;
    });
    builder.addCase(deleteMpptAction.fulfilled, (state, { payload }) => {
      const index = state.mpptData.findIndex((item) => {
        return item.id == payload;
      });

      if (index !== -1) {
        state.mpptData.splice(index, 1);
      }
      state.loader = false;
    });

    builder.addCase(deleteMpptAction.rejected, (state, { payload }) => {
      state.loader = false;
      state.error = payload;
    });

    builder.addCase(addInductionStation.pending, (state, { payload }) => {
      state.loader = true;
      state.error = null;
    });
    builder.addCase(addInductionStation.fulfilled, (state, { payload }) => {
      state.loader = true;
      state.error = null;
    });

    builder.addCase(addInductionStation.rejected, (state, { payload }) => {
      state.loader = false;
      state.error = payload;
    });

    builder.addCase(getInductionDetails.pending, (state, { payload }) => {
      state.loader = true;
      state.error = null;
    });

    builder.addCase(getInductionDetails.fulfilled, (state, { payload }) => {
      state.loader = false;
      state.error = null;

      state.inductionInfo = payload?.data;
      state.mpptData = payload?.data?.mppt_json || [];
      state.expectedData = payload?.data;
    });

    builder.addCase(getInductionDetails.rejected, (state, { payload }) => {
      state.loader = false;
      state.error = payload;
    });
    builder.addCase(updateFormStatusAction.pending, (state, { payload }) => {
      state.error = null;
    });
    builder.addCase(updateFormStatusAction.fulfilled, (state, { payload }) => {
      const { id, status } = payload?.item;

      state.inductions_forms = state.inductions_forms.map((obj) => {
        if (obj.id === id) {
          return { ...obj, status: status };
        }
        return obj;
      });
    });

    builder.addCase(updateFormStatusAction.rejected, (state, { payload }) => {
      state.error = payload;
    });

    builder.addCase(getOrgAction.pending, (state, { payload }) => {
      state.error = null;
    });
    builder.addCase(getOrgAction.fulfilled, (state, { payload }) => {
      state.organizations = payload?.data?.organizations;
      state.suppliers = payload?.data?.suppliers;
    });
    builder.addCase(getOrgAction.rejected, (state, { payload }) => {
      state.error = payload;
    });
    builder.addCase(addOrgAction.pending, (state, { payload }) => {
      state.error = null;
    });
    builder.addCase(addOrgAction.fulfilled, (state, { payload }) => {
      state.organizations = [
        ...state.organizations,
        { id: state.organizations.length, name: payload.input },
      ];
    });
    builder.addCase(addOrgAction.rejected, (state, { payload }) => {
      state.error = payload;
    });
    builder.addCase(addSupplierAction.pending, (state, { payload }) => {
      state.error = null;
    });
    builder.addCase(addSupplierAction.fulfilled, (state, { payload }) => {
      // state.suppliers= [
      //   ...state.suppliers,
      //   { id: state.suppliers.length, name: payload.input },
      // ];
    });
    builder.addCase(addSupplierAction.rejected, (state, { payload }) => {
      state.error = payload;
    });
  },
});
export default inductionSlice.reducer;
