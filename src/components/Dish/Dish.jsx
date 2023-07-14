import React from "react";
import { Button } from "../Button/Button";
import { useCount } from "../../hooks/useCount";
import { Ingredient } from "../Ingredient/Ingredient";



export const Dish = ({ dish }) => {
  const { count, decrement, increment } = useCount();
  return (
    <div>
      <span>{dish.name}</span>
      <div>
        <Button onClick={decrement}>
          <span>-</span>
        </Button>
        {count}
        <Button onClick={increment}>
          <span>+</span>
        </Button>
      </div>
      {count > 0 && <div>
        {dish.ingredients.map((ingredient) => (
          <Ingredient key={ingredient} ingredient={ingredient} />
        ))}
      </div>}
    </div>
  );
};
