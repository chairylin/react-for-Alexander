import { createAsyncThunk, createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { selectRestaurantDishIdsById } from "../restaurant/selectors";
import { selectDishIds } from "./selectors";
import { LoadingStatuses } from "../constants/statuses";

export const fetchDishes = createAsyncThunk(
  "dish/fetchDishes",
  async (restaurantId, { getState, rejectWithValue }) => {
    const restaurantDishIds = selectRestaurantDishIdsById(getState(), {
      restaurantId,
    });
    const dishIds = selectDishIds(getState());

    if (restaurantDishIds.every((id) => dishIds.includes(id))) {
      return rejectWithValue(LoadingStatuses.earlyAdded);
    }

    const response = await fetch(
      `http://localhost:3001/api/products?id=${restaurantId}`
    );
    return await response.json();
  }
);

const dishEntityAdapter = createEntityAdapter();

export const dishSlice = createSlice({
  name: 'dish',
  initialState: dishEntityAdapter.getInitialState({ status: LoadingStatuses.idle, }),
  extraReducers: (builder) =>
    builder
      .addCase(fetchDishes.pending, (state) => {
        state.status = LoadingStatuses.inProgress;
      })
      .addCase(fetchDishes.fulfilled, (state, { payload }) => {
        dishEntityAdapter.addMany(state, payload);
        state.status = LoadingStatuses.success;
      })
      .addCase(fetchDishes.rejected, (state, { payload }) => {
        state.status =
          payload === LoadingStatuses.earlyAdded
            ? LoadingStatuses.success
            : LoadingStatuses.failed;
      }),
});