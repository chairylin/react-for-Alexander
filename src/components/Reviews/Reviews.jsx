import React from "react";
import { Review } from "../Review/Review";
import classnames from "classnames";
import styles from "./styles.module.css";

export const Reviews = ({ restaurantId, className }) => {
  const reviews = useSelector((state) =>
    selectRestaurantDishIdsById(state, { restaurantId })
  );
  return (
    <div className={classnames(styles.root, className)}>
      <h2 className={styles.title}>Reviews</h2>
      {reviews.length > 0 ? (
        <div>
          {reviews.map((reviewId) => (
            <Review key={reviewId} reviewId={reviewId} className={styles.review} />
          ))}
        </div>
      ) : (
        <div>Empty</div>
      )}
    </div>
  );
};
