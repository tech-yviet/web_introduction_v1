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

const selectCities = createSelector(selectDomain, (state) => state.cities);

const selectFilterDoctors = createSelector(
  selectDomain,
  (state) => state.filterDoctors
);

const selectDistricts = createSelector(selectDomain, (state) => state.districts);

const selectMainSpecialtyFilter = createSelector(
  selectDomain,
  (state) => state.filterDoctors.mainSpecialties
);

const selectSearchValue = createSelector(
  selectDomain,
  (state) => state.filterDoctors.searchValue
);

const selectFilterMobileDrawer = createSelector(
  selectDomain,
  (state) => state.filterMobileDrawer
);

export const selectors = {
  selectDomain,
  selectDoctors,
  selectMainSpecialties,
  selectFilterDoctors,
  selectMainSpecialtyFilter,
  selectSearchValue,
  selectFilterMobileDrawer,
  selectCities,
  selectDistricts,
};
