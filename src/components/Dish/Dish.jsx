import { Button } from "../Button/Button";
import React from "react";
import { Ingredient } from "../Ingredient/Ingredient";
import { useCount } from "../../hooks/useCount";

import styles from "./styles.module.css";
import classnames from "classnames";
import { Size } from "../../constants/ui";

export const Dish = ({ dish, className }) => {
  const { count, decrement, increment } = useCount();

  console.log(styles);

  return (
    <div className={classnames(styles.root, className)}>
      <div className={styles.mainInfo}>
        <span className={styles.title}>{dish.name}</span>
        <div className={styles.controls}>
          <Button onClick={decrement} size={Size.s} borderRadiusSize={Size.s}>
            <span>-</span>
          </Button>
          {count}
          <Button onClick={increment} size={Size.s} borderRadiusSize={Size.s}>
            <span>+</span>
          </Button>
        </div>
      </div>
      {count > 0 && (
        <div className={styles.ingredients}>
          {dish.ingredients.map((ingredient) => (
            <Ingredient
              key={ingredient}
              ingredient={ingredient}
              className={styles.ingredient}
            />
          ))}
        </div>
      )}
    </div>
  );
};
