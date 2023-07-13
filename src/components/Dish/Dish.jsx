import { Button } from "../Button/Button";
import React, { useEffect } from "react";
import { Ingredient } from "../Ingredient/Ingredient";
import { useCount } from "../../hooks/useCount";

export const Dish = ({ dish }) => {
  const { count, decrement, increment } = useCount();

  useEffect(() => {
    console.log("Hello!");
  }, [decrement]);

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
