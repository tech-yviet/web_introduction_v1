import { extendActions } from "./actions";
import { selectors } from "./selectors";
import * as T from "./types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const initialState: T.ContainerState = {
  doctors: [],
};

// ==========================================================================================

const slice = createSlice({
  name: "doctors",
  initialState,
  reducers: {
    setDoctors: (state, action: PayloadAction<T.ContainerState["doctors"]>) => {
      state.doctors = action.payload;
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
