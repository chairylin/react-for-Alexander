import { restaurants } from "../../constants/fixtures";
import { Restaurant } from "../../components/Restaurant/Restaurant";
import React from "react";

export const RestaurantPage = () => {
  const restaurant = restaurants[0];
  return (
    <div>
      {/* Tabs */}
      <Restaurant restaurant={restaurant} />
    </div>
  );
};
