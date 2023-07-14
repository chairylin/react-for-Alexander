import { Button } from "../Button/Button";
import React from "react";
import { useCount } from "../../hooks/useCount";
import { Size } from "../../constants/ui";

export const Ingredient = ({ ingredient }) => {
  const { count, decrement, increment } = useCount(1);

  return (
    <div>
      <span>{ingredient}</span>
      <div>
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
