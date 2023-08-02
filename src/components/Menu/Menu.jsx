import React from "react";
import { Dish } from "../Dish/Dish";

import styles from "./styles.module.css";

import classnames from "classnames";
import { useSelector } from "react-redux";
import { selectRestaurantDishIdsById } from "../../store/restaurant/selectors";

export const Menu = ({ restaurantId, className }) => {
  const menu = useSelector((state) =>
    selectRestaurantDishIdsById(state, { restaurantId })
  );
  return (
    <div className={classnames(styles.root, className)}>
      <h2 className={styles.title}>Menu</h2>
      {menu.length > 0 ? (
        <div>
          {menu.map((dish) => (
            <Dish key={dish} dishId={dish} className={styles.dish} />
          ))}
        </div>
      ) : (
        <div>Empty</div>
      )}
    </div>
  );
};
