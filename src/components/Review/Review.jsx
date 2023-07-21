import styles from './styles.module.css';
import { Rating } from "../Rating/Rating";




export const Review = ({ review }) => {


  return (
    <div className={styles.root}>
      <span>{review.text}</span>
      <Rating value={review.rating} />
    </div>
  );
};
