import { initialState } from ".";
import { RootState } from "@/store/index";
import { createSelector } from "@reduxjs/toolkit";
import uniqBy from "lodash/uniqBy";

const selectDomain = (state: RootState) => state.doctors || initialState;

const selectDoctors = createSelector(selectDomain, (state) =>
  uniqBy(state.doctors, "doctorId")
);

const selectMainSpecialties = createSelector(
  selectDomain,
  (state) => state.mainSpecialties
);

const selectFilterDoctors = createSelector(
  selectDomain,
  (state) => state.filterDoctors
);

const selectMainSpecialtyFilter = createSelector(
  selectDomain,
  (state) => state.filterDoctors.mainSpecialties
);

const selectSearchValue = createSelector(
  selectDomain,
  (state) => state.filterDoctors.searchValue
);

export const selectors = {
  selectDomain,
  selectDoctors,
  selectMainSpecialties,
  selectFilterDoctors,
  selectMainSpecialtyFilter,
  selectSearchValue,
};
