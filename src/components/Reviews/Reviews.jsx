import React, { useEffect } from "react";
import { Review } from "../Review/Review";
import classnames from "classnames";
import styles from "./styles.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectRestaurantReviewIdsById } from "../../store/restaurant/selectors";
import { selectIsReviewLoading } from "../../store/review/selectors";
import { fetchReviews } from "../../store/review";
import { fetchUsers } from "../../store/user";
import { NewReviewForm } from "../NewReviewForm/NewReviewForm";
import { useParams } from "react-router-dom";

export const Reviews = () => {
  const dispatch = useDispatch();
  const { restaurantId } = useParams();
  const reviews = useSelector((state) =>
    selectRestaurantReviewIdsById(state, { restaurantId })
  );
  const isLoading = useSelector(selectIsReviewLoading);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!reviews?.length) {
    return null;
  }

  return (
    <div className={classnames(styles.root)}>
      <h2 className={styles.title}>Reviews</h2>
      {reviews.length > 0 ? (
        <div>
          {reviews.map((reviewId) => (
            <Review
              key={reviewId}
              reviewId={reviewId}
              className={styles.review}
            />
          ))}
        </div>
      ) : (
        <div>Empty</div>
      )}
      <NewReviewForm className={styles.reviewForm} />
    </div>
  );
};
