import styles from "./styles.module.css";
import { Rating } from "../Rating/Rating";
import React from "react";
import { Size } from "../../constants/ui";
import classnames from "classnames";

export const Review = ({ review, className }) => {
  return (
    <div className={classnames(styles.root, className)}>
      <div className={styles.mainInfo}>
        <span className={styles.user}>{review.user}</span>
        <Rating value={review.rating} size={Size.s} className={styles.rating} />
      </div>
      <span>{review.text}</span>
    </div>
  );
};
