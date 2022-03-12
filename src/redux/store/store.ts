import { loadingReducer } from "./../reducers/loadingReducer";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
// ...

const reducers = {
  loadingReducer,
};

const rootReducer = combineReducers(reducers);

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
