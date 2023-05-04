import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cars: [
    { id: 1, brand: "Ford" },
    { id: 2, brand: "Audi" },
    { id: 3, brand: "Mersedes" },
  ],
};

const carSlice = createSlice({
  name: "carSlice",
  initialState,
});

const carReducer = carSlice.reducer;
export default carReducer;
