import { Menu } from "../Menu/Menu";
import React, { useMemo } from "react";
import { Reviews } from "../Reviews/Reviews";
import { Rating } from "../Rating/Rating";
import { NewReviewForm } from "../NewReviewForm/NewReviewForm";
import styles from "./styles.module.css";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../store/restaurant/selectors";

export const Restaurant = ({ restaurantId }) => {
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, { restaurantId })
  );

  // const rating = useMemo(
  //   () =>
  //     Math.floor(
  //       restaurant.reviews.reduce((sum, review) => sum + review.rating, 0) /
  //         restaurant.reviews.length
  //     ),
  //   [restaurant.reviews]
  // );

  if (!restaurant) {
    return <span>NotFound</span>;
  }

  return (
    <div>
      <h1>{restaurant.name}</h1>
      {/*<Rating value={rating} />*/}
      <Menu restaurantId={restaurantId} className={styles.menu} />

      <Reviews restaurantId={restaurantId} className={styles.review} />

      <NewReviewForm className={styles.reviewForm} />
    </div>
  );
};
