import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/user.slice";
import carReducer from "./slices/car.slice";

const store = configureStore({
  reducer: {
    user: userReducer,
    car: carReducer,
  },
});

export default store;
