import { combineReducers } from "@reduxjs/toolkit";
import { appR } from "./modules/app";
import { doctorsR } from "./modules/doctors";

export const rootReducer = combineReducers({
  app: appR,
  doctors: doctorsR,
});
