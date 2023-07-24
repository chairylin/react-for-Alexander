import { Menu } from "../Menu/Menu";
import React, { useMemo } from "react";
import { Reviews } from "../Reviews/Reviews";
import { Rating } from "../Rating/Rating";
import { NewReviewForm } from "../NewReviewForm/NewReviewForm";
import styles from "./styles.module.css";

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
      <h1>{restaurant.name}</h1>
      <Rating value={rating} />
      <Menu menu={restaurant.menu} className={styles.menu} />

      <Reviews reviews={restaurant.reviews} className={styles.review} />

      <NewReviewForm className={styles.reviewForm} />
    </div>
  );
};
