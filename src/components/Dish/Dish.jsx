import { Button } from "../Button/Button";
import React from "react";

export const Dish = ({ dish }) => {
  return (
    <div>
      <span>{dish.name}</span>
      <Button onClick={() => console.log("on - click")}>
        <span>-</span>
      </Button>
      <Button onClick={() => console.log("on + click")}>
        <span>+</span>
      </Button>
    </div>
  );
};
