import React from "react";
import { RestaurantPage } from "./pages/RestaurantPage/RestaurantPage";
import { restaurants } from "./constants/fixtures";

export const App = () => {
  return <RestaurantPage restaurants={restaurants} />;
};
