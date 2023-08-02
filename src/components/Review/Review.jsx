import styles from "./styles.module.css";
import { Rating } from "../Rating/Rating";
import React from "react";
import { Size } from "../../constants/ui";
import classnames from "classnames";
import { User } from "../User/user";
import { selectReviewById } from "../../store/review/selectors";
import { useSelector } from "react-redux/es/hooks/useSelector";

export const Review = ({ reviewId, className }) => {
  const review = useSelector((state) => selectReviewById(state, { reviewId }));

  if (!review) {
    return null;
  }

  return (
    <div className={classnames(styles.root, className)}>
      <div className={styles.mainInfo}>
        <User className={styles.user} userId={review.userId} />
        <Rating value={review.rating} size={Size.s} className={styles.rating} />
      </div>
      <span>{review.text}</span>
    </div>
  );
};
