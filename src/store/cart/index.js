import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addDish: (state, { payload }) => {
      state[payload] = (state[payload] || 0) + 1;
    },
    removeDish: (state, { payload }) => {
      if (!state[payload]) {
        return;
      }

      if (state[payload] === 1) {
        delete state[payload];
        return;
      }

      state[payload] -= 1;
    },
  },
});
