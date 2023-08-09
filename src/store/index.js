import { combineReducers } from "redux";
import { cartSlice } from "./cart";
import { restaurantSlice } from "./restaurant";
import { dishSlice } from "./dish";
import { reviewSlice } from "./review";
import { userSlice } from "./user";
import { logger } from "./middlewares/logger";
import { configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  cart: cartSlice.reducer,
  restaurant: restaurantSlice.reducer,
  dish: dishSlice.reducer,
  review: reviewSlice.reducer,
  user: userSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger]),
});
