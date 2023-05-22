import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { carReducer } from "./slices";

const rootReducer = combineReducers({
  cars: carReducer,
});

const setupStore = () => configureStore({ reducer: rootReducer });

export { setupStore };
