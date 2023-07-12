import { Button } from "../Button/Button";
import React from "react";


export const Menu = ({ menu }) => {
    return (
        <div>
            <h3>Menu</h3>
            <ul>
                {menu.map((dish) => (
                    <li key={dish.id}>
                        <span>{dish.name}</span>
                        <Button onClick={() => console.log('on - click')}>
                            <span>-</span>
                        </Button>
                        <Button onClick={() => console.log('on + click')}>
                            <span>+</span>
                        </Button>
                    </li>
                ))}
            </ul>
        </div>
    );
};