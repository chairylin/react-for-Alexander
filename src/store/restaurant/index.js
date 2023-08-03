import { LoadingStatuses } from "../constants/statuses";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  entities: {},
  ids: [],
  status: LoadingStatuses.idle,
};

export const restaurantSlice = createSlice({
  name: "restaurant",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.status = LoadingStatuses.inProgress;
    },
    failLoading: (state) => {
      state.status = LoadingStatuses.failed;
    },
    finishLoading: (state, { payload: { entities, ids } }) => {
      state.status = LoadingStatuses.success;
      state.entities = entities;
      state.ids = ids;
    },
  },
});
