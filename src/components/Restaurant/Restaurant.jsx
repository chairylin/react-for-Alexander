import { Menu, MenuWithAuthorization } from "../Menu/Menu";
import React, { useEffect, useMemo, useState } from "react";
import { Reviews } from "../Reviews/Reviews";
import { Rating } from "../Rating/Rating";
import { NewReviewForm } from "../NewReviewForm/NewReviewForm";
import styles from "./styles.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  selectRestaurantById,
  selectRestaurantRating,
} from "../../store/restaurant/selectors";
import { useParams } from "react-router-dom";
import { fetchReviews } from "../../store/review";

const CustomInput = () => {
  const [value, setValue] = useState("");

  return (
    <>
      <span>{value}</span>
      <input value={value} onChange={(event) => setValue(event.target.value)} />
    </>
  );
};

export const Restaurant = () => {
  const dispatch = useDispatch();
  const { restaurantId } = useParams();
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, { restaurantId })
  );
  const rating = useSelector((state) =>
    selectRestaurantRating(state, { restaurantId })
  );

  useEffect(() => {
    dispatch(fetchReviews(restaurantId));
  }, [restaurantId]);

  if (!restaurant) {
    return <span>NotFound</span>;
  }

  return (
    <div>
      {/*<CustomInput />*/}
      <h1>{restaurant.name}</h1>
      <Rating value={rating} />
      <MenuWithAuthorization
        restaurantId={restaurantId}
        className={styles.menu}
      />

      <Reviews restaurantId={restaurantId} className={styles.review} />

      <NewReviewForm className={styles.reviewForm} />
    </div>
  );
};
