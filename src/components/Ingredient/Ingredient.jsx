import { Button } from "../Button/Button";
import React from "react";
import { useCount } from "../../hooks/useCount";
import { Size } from "../../constants/ui";
import styles from "./styles.module.css";
import classnames from "classnames";

export const Ingredient = ({ ingredient, className }) => {
  const { count, decrement, increment } = useCount(1);

  return (
    <div className={classnames(styles.root, className)}>
      <span>{ingredient}</span>
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
