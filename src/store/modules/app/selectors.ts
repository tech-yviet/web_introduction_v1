import { initialState } from ".";
import { RootState } from "@/store/index";
import { createSelector } from "@reduxjs/toolkit";

const selectDomain = (state: RootState) => state.app || initialState;

const selectIsOpenDrawerMenuMobile = createSelector(
  selectDomain,
  (state) => state.isOpenDrawerMenuMobile
);

export const selectors = {
  selectDomain,
  selectIsOpenDrawerMenuMobile,
};
