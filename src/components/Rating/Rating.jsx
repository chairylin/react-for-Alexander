import { MAX_RATING } from "./constants";
import Star from "./img/star.svg";
import GoldStar from "./img/star-gold.svg";

import styles from "./styles.module.css";
import classnames from "classnames";
import { Size } from "../../constants/ui";

export const Rating = ({ value, size = Size.m, className }) => {
  return (
    <div className={className}>
      {new Array(MAX_RATING).fill(null).map((_, index) => (
        <img
          src={index >= value ? Star : GoldStar}
          key={index}
          className={classnames(styles.star, styles[size])}
          loading="lazy"
        />
      ))}
    </div>
  );
};
