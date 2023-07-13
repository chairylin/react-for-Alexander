import { Menu } from "../Menu/Menu";
import React from "react";
import { Reviews } from "../Reviews/Reviews";

export const Restaurant = ({ restaurant }) => {
  return (
    <div>
      <h2>{restaurant.name}</h2>

      <Menu menu={restaurant.menu} />

      <Reviews reviews={restaurant.reviews} />
    </div>
  );
};
