import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { carService } from "../../services/car.service";

const initialState = {
  cars: [],
  carForUpdate: null,
  trigger: null,
  loading: false,
  error: null,
};

const getAll = createAsyncThunk("carSlice/getAll", async (_, thunkAPI) => {
  try {
    const { data } = await carService.getAll();
    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.respose.data);
  }
});

const create = createAsyncThunk("carSlice/create", async (car, thunkAPI) => {
  try {
    await carService.create(car);
  } catch (e) {
    return thunkAPI.rejectWithValue(e.respose.data);
  }
});

const slice = createSlice({
  name: "carSlice",
  initialState,
  reducers: {
    setAll: (state, action) => {
      state.cars = action.payload;
    },
    setCarForUpdate: (state, action) => {
      state.carForUpdate = action.payload;
    },
    changeTrigger: (state) => {
      state.trigger = !state.trigger;
    },
  },
  // extraReducers: {
  //   [getAll.fulfilled]: (state, action) => {
  //     state.cars = action.payload;
  //   },
  //   [create.fulfilled]: (state) => {
  //     state.trigger = !state.trigger;
  //   },
  // },
  extraReducers: (builder) =>
    builder
      .addCase(getAll.fulfilled, (state, action) => {
        state.cars = action.payload;
        state.loading = false;
      })
      .addCase(getAll.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAll.rejected, (state, action) => {
        state.error = action.error;
        state.loading = false;
      })
      .addCase(create.fulfilled, (state) => {
        state.trigger = !state.trigger;
        state.loading = false;
      })
      .addCase(create.pending, (state) => {
        state.loading = true;
      })
      .addCase(create.rejected, (state, action) => {
        state.error = action.error;
        state.loading = false;
      }),
});

const { reducer: carReducer, actions } = slice;

const carActions = { ...actions, getAll, create };

export { carReducer, carActions };
