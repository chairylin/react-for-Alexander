import React from "react";
import { Button } from "../Button/Button";
import { useCount } from "../../hooks/useCount";

export const Ingredient = ({ ingredient }) => {
    const { count, decrement, increment } = useCount(1);


    return (
        <div>
            <span>{ingredient}</span>
            <div>
                <Button onClick={decrement}>
                    <span>-</span>
                </Button>
                {count}
                <Button onClick={increment}>
                    <span>+</span>
                </Button>
            </div>
        </div>
    );
};