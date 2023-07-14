import React from "react";
import { RestaurantPage } from "./pages/RestaurantPage/RestaurantPage";
import { restaurants } from "./constants/fixtures";
import { Header } from "./components/Header/Header";

export const App = () => {
  return (
    <div>
      <Header />
      <RestaurantPage restaurants={restaurants} />
    </div>
  );
};
