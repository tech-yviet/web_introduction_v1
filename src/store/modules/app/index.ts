import { extendActions } from "./actions";
import { selectors } from "./selectors";
import * as T from "./types";
import { createSlice } from "@reduxjs/toolkit";

export const initialState: T.ContainerState = {
  isOpenDrawerMenuMobile: false,
};

// ==========================================================================================

const slice = createSlice({
  name: "app",
  initialState,
  reducers: {
    openDrawerMenuMobile: (state) => {
      state.isOpenDrawerMenuMobile = true;
    },
    closeDrawerMenuMobile: (state) => {
      state.isOpenDrawerMenuMobile = false;
    },
    toggleDrawerMenuMobile: (state) => {
      state.isOpenDrawerMenuMobile = !state.isOpenDrawerMenuMobile;
    },
  },
});

// ==========================================================================================

export const { actions } = slice;

// For external use
export const appS = selectors;
export const appA = { ...actions, ...extendActions };
export const appR = slice.reducer;
export * as appTypes from "./types";
