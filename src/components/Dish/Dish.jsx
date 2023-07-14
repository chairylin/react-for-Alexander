import { Button } from "../Button/Button";
import React from "react";
import { Ingredient } from "../Ingredient/Ingredient";
import { useCount } from "../../hooks/useCount";

import styles from "./styles.module.css";
import { Size } from "../../constants/ui";

export const Dish = ({ dish }) => {
  const { count, decrement, increment } = useCount();

  console.log(styles);

  return (
    <div className={styles.root}>
      <span>{dish.name}</span>
      <div>
        <Button onClick={decrement} size={Size.s} borderRadiusSize={Size.s}>
          <span>-</span>
        </Button>
        {count}
        <Button onClick={increment} size={Size.s} borderRadiusSize={Size.s}>
          <span>+</span>
        </Button>
      </div>
      {count > 0 && (
        <div>
          {dish.ingredients.map((ingredient) => (
            <Ingredient key={ingredient} ingredient={ingredient} />
          ))}
        </div>
      )}
    </div>
  );
};
