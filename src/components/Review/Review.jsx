import { Rating } from "../Rating/Rating";
import "./styles.css";



export const Review = ({ review, restaurant }) => {


  return (
    <div className="root">
      <span>{review.text}</span>
      <Rating value={review.rating} />
    </div>
  );
};
