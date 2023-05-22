import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { carReducer, commentReducer, userReducer } from "./slices";

const rootReducer = combineReducers({
  users: userReducer,
  comments: commentReducer,
  cars: carReducer,
});

const setupStore = () => configureStore({ reducer: rootReducer });

export { setupStore };
