import { Button } from "../Button/Button";
import React from "react";
import { useCount } from "../../hooks/useCount";
import { Size } from "../../constants/ui";
import styles from "./styles.module.css";

export const Ingredient = ({ ingredient }) => {
  const { count, decrement, increment } = useCount(1);

  return (
    <div className={styles.root}>
      <span className={styles.title}>{ingredient}</span>
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
  );
};
