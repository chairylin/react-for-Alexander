import { combineReducers, createStore } from "redux";
import { cartReducer } from "./cart";
import { restaurantReducer } from "./restaurant";

const rootReducer = combineReducers({
  cart: cartReducer,
  restaurant: restaurantReducer,
});

export const store = createStore(rootReducer);

console.log(store.getState());
