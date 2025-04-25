import { extendActions } from "./actions";
import { selectors } from "./selectors";
import * as T from "./types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const initialState: T.ContainerState = {
  doctors: [],
  mainSpecialties: [],
  cities: [],
  districts: [],
  trainingUnits: [],
  filterDoctors: {
    mainSpecialties: [],
    doctorName: "",
    cityId: null,
    districtId: null,
    unitName: "",
    genderType: "",
    score: "",
    orderDate: null,
  },
  filterMobileDrawer: {
    isOpen: false,
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
    setCities: (state, action: PayloadAction<T.ContainerState["cities"]>) => {
      state.cities = action.payload;
    },
    setDistricts: (
      state,
      action: PayloadAction<T.ContainerState["districts"]>
    ) => {
      state.districts = action.payload;
    },
    setDoctorNameFilter: (state, action: PayloadAction<string>) => {
      state.filterDoctors.doctorName = action.payload;
    },
    openFilterMobileDrawer: (state) => {
      state.filterMobileDrawer.isOpen = true;
    },
    closeFilterMobileDrawer: (state) => {
      state.filterMobileDrawer.isOpen = false;
    },
    setCityIdFilter: (state, action: PayloadAction<number | null>) => {
      state.filterDoctors.cityId = action.payload;
    },
    setDistrictIdFilter: (state, action: PayloadAction<number | null>) => {
      state.filterDoctors.districtId = action.payload;
    },
    setTrainingUnits: (
      state,
      action: PayloadAction<T.ContainerState["trainingUnits"]>
    ) => {
      state.trainingUnits = action.payload;
    },
    setUnitNameFilter: (state, action: PayloadAction<string>) => {
      state.filterDoctors.unitName = action.payload;
    },
    setGenderFilter: (state, action: PayloadAction<string>) => {
      state.filterDoctors.genderType = action.payload;
    },
    setScoreFilter: (state, action: PayloadAction<string>) => {
      state.filterDoctors.score = action.payload;
    },
    setOrderDateFilter: (state, action: PayloadAction<Date | null>) => {
      state.filterDoctors.orderDate = action.payload;
    },
    resetFilter: (state) => {
      state.filterDoctors = initialState.filterDoctors;
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
