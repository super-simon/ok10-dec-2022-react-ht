import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { characterReducer } from "./slices";

const rootReducer = combineReducers({
  characters: characterReducer
});

const setupStore = () =>
  configureStore({
    reducer: rootReducer,
  });

export { setupStore };
