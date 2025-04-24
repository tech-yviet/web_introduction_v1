import { extendActions } from "./actions";
import { selectors } from "./selectors";
import * as T from "./types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const initialState: T.ContainerState = {
  doctors: [],
  mainSpecialties: [],
  cities: [],
  districts: [],
  filterDoctors: {
    mainSpecialties: [],
    searchValue: "",
  },
  filterMobileDrawer: {
    isOpen: false,
    cityId: null,
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
    setSearchMainSpecialtyFilterValue: (
      state,
      action: PayloadAction<string>
    ) => {
      state.filterDoctors.searchValue = action.payload;
    },
    setCities: (state, action: PayloadAction<T.ContainerState["cities"]>) => {
      state.cities = action.payload;
    },
    setDistricts: (state, action: PayloadAction<T.ContainerState["districts"]>) => {
      state.districts = action.payload;
    },
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.filterDoctors.searchValue = action.payload;
    },
    openFilterMobileDrawer: (state) => {
      state.filterMobileDrawer.isOpen = true;
    },
    closeFilterMobileDrawer: (state) => {
      state.filterMobileDrawer.isOpen = false;
    },
    setCityIdFilterMobileDrawer: (state, action: PayloadAction<number>) => {
      state.filterMobileDrawer.cityId = action.payload;
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
