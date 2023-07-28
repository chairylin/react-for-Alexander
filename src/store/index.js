import { combineReducers, createStore } from "redux";
import { cartReducer } from "./cart";
import { restaurantReducer } from "./restaurant";
import { dishReducer } from "./dish";
import { reviewsReducer } from "./review";
import { userReducer } from "./user";

const rootReducer = combineReducers({
  cart: cartReducer,
  restaurant: restaurantReducer,
  dish: dishReducer,
  review: reviewsReducer,
  user: userReducer,
});

export const store = createStore(rootReducer);

console.log(store.getState());
