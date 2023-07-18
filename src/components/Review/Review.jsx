import "./styles.css";
import { Rating } from "../Rating/Rating";
import React from "react";
import { Size } from "../../constants/ui";

export const Review = ({ review }) => {
  return (
    <div className="root">
      <span>{review.text}</span>
      <Rating value={review.rating} size={Size.s} />
    </div>
  );
};
