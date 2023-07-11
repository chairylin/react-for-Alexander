import React from "react";
import ReactDOM from "react-dom/client";

import { restaurants } from "./constants/fixtures";

import "./index.css";
import { Menu } from "./components/Menu/Menu";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div>
    {restaurants?.map((restaurant) => (
      <div key={restaurant.id}>
        <h2>{restaurant.name}</h2>

        <Menu menu={restaurant.menu} />

        {restaurant.reviews.length > 0 && (
          <div>
            <h3>Reviews</h3>
            <ul>
              {restaurant.reviews.map((review) => (
                <li key={review.id}>{review.text}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    ))}
  </div>
);

// root.render(
//   React.createElement("div", {
//     className: "divClass",
//     children: restaurant.menu.map((dish) =>
//       React.createElement("div", { children: dish.name })
//     ),
//   })
// );
