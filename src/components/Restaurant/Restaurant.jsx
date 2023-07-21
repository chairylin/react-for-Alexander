

import React, { useMemo } from "react";
import { Reviews } from "../Reviews/Reviews";
import { Rating } from "../Rating/Rating";
import { NewReviewForm } from "../NewReviewForm/NewReviewForm";

export const Restaurant = ({ restaurant }) => {
  const rating = useMemo(
    () =>
      Math.floor(
        restaurant.reviews.reduce((sum, review) => sum + review.rating, 0) /
          restaurant.reviews.length
      ),
    [restaurant.reviews]
  );


  return (
    <div>
      <h2>{restaurant.name}</h2>
      <Rating value={rating} />

      <Menu menu={restaurant.menu} />


      <Menu menu={restaurant.menu} />
      <Reviews reviews={restaurant.reviews} />
      <NewReviewForm />
    </div>
  );
};
