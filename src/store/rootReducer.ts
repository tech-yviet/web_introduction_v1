import { combineReducers } from "@reduxjs/toolkit";
import { appR } from "./modules/app";

export const rootReducer = combineReducers({
  app: appR,
});
