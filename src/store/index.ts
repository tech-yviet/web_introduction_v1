import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { rootReducer } from "./rootReducer";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    const mid = getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    });

    return mid;
  },
});

const { dispatch: appDispatch, getState: appGetState } = store;

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof appDispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const dispatch = appDispatch;
export const getState = appGetState;
export type { ConnectedProps } from "react-redux";
export { connect } from "react-redux";
