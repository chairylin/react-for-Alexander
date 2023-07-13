import { restaurants } from "../../constants/fixtures";
import { Restaurant } from "../../components/Restaurant/Restaurant";
import React from "react";

export const RestaurantPage = () => {
  return (
    <div>
      {restaurants?.map((restaurant) => (
        <Restaurant key={restaurant.id} restaurant={restaurant} />
      ))}
    </div>
  );
};
