import React, { useEffect } from "react";
import { Dish } from "../Dish/Dish";

import styles from "./styles.module.css";
import classnames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { selectRestaurantDishIdsById } from "../../store/restaurant/selectors";
import { fetchDishes } from "../../store/dish";

export const Menu = ({ restaurantId, className }) => {
  const dispatch = useDispatch();
  const menu = useSelector((state) =>
    selectRestaurantDishIdsById(state, { restaurantId })
  );

  useEffect(() => {
    dispatch(fetchDishes(restaurantId));
  }, [restaurantId]);

  useEffect(() => {
    dispatch(fetchDishes());
  }, []);

  return (
    <div className={classnames(styles.root, className)}>
      <h2 className={styles.title}>Menu</h2>
      {menu.length > 0 ? (
        <div>
          {menu.map((dishId) => (
            <Dish key={dishId} dishId={dishId} className={styles.dish} />
          ))}
        </div>
      ) : (
        <div>Empty</div>
      )}
    </div>
  );
};