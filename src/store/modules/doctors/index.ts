import { extendActions } from "./actions";
import { selectors } from "./selectors";
import * as T from "./types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const initialState: T.ContainerState = {
  doctors: [],
  mainSpecialties: [],
  filterDoctors: {
    mainSpecialties: [],
  },
};

// ==========================================================================================

const slice = createSlice({
  name: "doctors",
  initialState,
  reducers: {
    setDoctors: (state, action: PayloadAction<T.ContainerState["doctors"]>) => {
      state.doctors = action.payload;
    },
    setMainSpecialties: (
      state,
      action: PayloadAction<T.ContainerState["mainSpecialties"]>
    ) => {
      state.mainSpecialties = action.payload;
    },
    setMainSpecialtyFilter: (state, action: PayloadAction<string[]>) => {
      state.filterDoctors.mainSpecialties = action.payload;
    },
  },
});

// ==========================================================================================

export const { actions } = slice;

// For external use
export const doctorsS = selectors;
export const doctorsA = { ...actions, ...extendActions };
export const doctorsR = slice.reducer;
export * as doctorsTypes from "./types";
