import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectRestaurantReviewIdsById } from "../restaurant/selectors";
import { selectReviewIds } from './selectors';
import { createEntityAdapter } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { LoadingStatuses } from "../constants/statuses";


export const fetchReviews = createAsyncThunk(
  "dish/fetchReviews",
  async (restaurantId, { getState, rejectWithValue }) => {
    const restaurantReviewIds = selectRestaurantReviewIdsById(getState(), {
      restaurantId,
    });
    const reviewIds = selectReviewIds(getState());

    if (restaurantReviewIds.every((id) => reviewIds.includes(id))) {
      return rejectWithValue(LoadingStatuses.earlyAdded);
    }

    const response = await fetch(
      `http://localhost:3001/api/reviews?id=${restaurantId}`
    );
    return await response.json();
  }
);

const reviewEntityAdapter = createEntityAdapter();

export const reviewSlice = createSlice({
  name: 'review',
  initialState: reviewEntityAdapter.getInitialState({ status: LoadingStatuses.idle, }),
  extraReducers: (builder) =>
    builder
      .addCase(fetchReviews.pending, (state) => {
        state.status = LoadingStatuses.inProgress;
      })
      .addCase(fetchReviews.fulfilled, (state, { payload }) => {
        reviewEntityAdapter.addMany(state, payload);
        state.status = LoadingStatuses.success;
      })
      .addCase(fetchReviews.rejected, (state, { payload }) => {
        state.status =
          payload === LoadingStatuses.earlyAdded
            ? LoadingStatuses.success
            : LoadingStatuses.failed;
      }),
});
