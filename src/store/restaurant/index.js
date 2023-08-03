import { LoadingStatuses } from "../constants/statuses";
import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import { selectRestaurantIds } from "./selectors";
import { normalize } from "../utils/normalize";

export const fetchRestaurants = createAsyncThunk(
  "restaurant/fetchRestaurants",
  async (_, thunkAPI) => {
    const restaurantIds = selectRestaurantIds(thunkAPI.getState());

    if (restaurantIds?.length) {
      return thunkAPI.rejectWithValue(LoadingStatuses.alreadyLoaded);
    }

    const response = await fetch("http://localhost:3001/api/restaurants/");

    return await response.json();
  }
);

const restaurantEntityAdapter = createEntityAdapter();

export const restaurantSlice = createSlice({
  name: "restaurant",
  initialState: restaurantEntityAdapter.getInitialState({
    status: LoadingStatuses.idle,
  }),
  extraReducers: (builder) =>
    builder
      .addCase(fetchRestaurants.pending, (state) => {
        state.status = LoadingStatuses.inProgress;
      })
      .addCase(fetchRestaurants.rejected, (state, { payload }) => {
        if (payload === LoadingStatuses.alreadyLoaded) {
          state.status = LoadingStatuses.success;
          return;
        }

        state.status = LoadingStatuses.failed;
      })
      .addCase(fetchRestaurants.fulfilled, (state, { payload }) => {
        restaurantEntityAdapter.addMany(state, payload);
        state.status = LoadingStatuses.success;
      }),
});
