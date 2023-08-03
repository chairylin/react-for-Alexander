import { applyMiddleware, combineReducers, createStore } from "redux";
import { cartReducer } from "./cart";
import { restaurantReducer, restaurantSlice } from "./restaurant";
import { dishReducer } from "./dish";
import { reviewReducer } from "./review";
import { userReducer } from "./user";
import { logger } from "./middlewares/logger";
import { configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  cart: cartReducer,
  restaurant: restaurantSlice.reducer,
  dish: dishReducer,
  review: reviewReducer,
  user: userReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger]),
});
