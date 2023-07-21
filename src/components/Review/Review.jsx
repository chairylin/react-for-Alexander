
import styles from './styles.module.css';

import { Rating } from "../Rating/Rating";
import React from "react";
import { Size } from "../../constants/ui";


export const Review = ({ review }) => {


  return (
    <div className={styles.root}>
      <span className={styles.user}>{review.user}</span>
      <span className={styles.rating}>{review.text}</span>
      <Rating value={review.rating} />

    <div className="root">
      <span>{review.text}</span>
      <Rating value={review.rating} size={Size.s} />
    </div>
  );
};
