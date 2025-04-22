import { initialState } from ".";
import { RootState } from "@/store/index";
import { createSelector } from "@reduxjs/toolkit";

const selectDomain = (state: RootState) => state.doctors || initialState;

const selectDoctors = createSelector(selectDomain, (state) => state.doctors);

export const selectors = {
  selectDomain,
  selectDoctors,
};
