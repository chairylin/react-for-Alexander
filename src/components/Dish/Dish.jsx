import { Button } from "../Button/Button";
import React from "react";
import { Ingredient } from "../Ingredient/Ingredient";

import styles from "./styles.module.css";
import classnames from "classnames";
import { Size } from "../../constants/ui";
import { useSelector } from "../../CustomeStore/hooks/useSelector";
import { useDispatch } from "../../CustomeStore/hooks/useDispatch";
import { Actions } from "../../store";
import { useCount } from "../../hooks/useCount";

export const Dish = ({ dish, className }) => {
  // const { count, decrement, increment } = useCount();

  const count = useSelector((state) => {
    console.log("state: ", state);
    return state[dish.id] || 0;
  });
  const dispatch = useDispatch();

  const decrement = () =>
    dispatch({ type: Actions.RemoveDish, payload: dish.id });
  const increment = () => dispatch({ type: Actions.AddDish, payload: dish.id });

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
