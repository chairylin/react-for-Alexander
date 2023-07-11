import React from "react";
import ReactDOM from "react-dom/client";

import { restaurants } from "./constants/fixtures";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <div>
        {restaurants?.map((restaurant) => (
            <div>
                <h1>{restaurant.name}</h1>

                {restaurant.menu.length > 0 && (
                    <div>
                        <h3>Menu</h3>
                        <ul>
                            {restaurant.menu.map((dish) => (
                                <li>{dish.name}</li>
                            ))}
                        </ul>
                    </div>
                )}
                {restaurant.reviews.length > 0 && (
                    <div>
                        <h3>Reviews</h3>
                        <ul>
                            {restaurant.reviews.map((review) => (
                                <li>{review.text}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        ))}

    </div>
);
