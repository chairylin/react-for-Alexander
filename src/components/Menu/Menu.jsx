import React, { useEffect } from "react";
import { Dish, DishWithMemo } from "../Dish/Dish";

import styles from "./styles.module.css";
import classnames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { selectRestaurantDishIdsById } from "../../store/restaurant/selectors";
import { selectIsDishLoading } from "../../store/dish/selectors";
import { fetchDishes } from "../../store/dish";
import { selectIsUserAuthorized } from "../../store/authorization/selectors";
import { withAuthorization } from "../../hoc/withAuthorization";
import { useParams } from "react-router-dom";

export const Menu = ({ className }) => {
  const { restaurantId } = useParams();
  const dispatch = useDispatch();
  const menu = useSelector((state) =>
    selectRestaurantDishIdsById(state, { restaurantId })
  );

  const isLoading = useSelector(selectIsDishLoading);

  useEffect(() => {
    dispatch(fetchDishes(restaurantId));
  }, [restaurantId]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!menu?.length) {
    return null;
  }

  return (
    <div className={classnames(styles.root, className)}>
      <h2 className={styles.title}>Menu</h2>
      {menu.length > 0 ? (
        <div>
          {menu.map((dishId) => (
            <DishWithMemo
              key={dishId}
              dishId={dishId}
              className={styles.dish}
            />
          ))}
        </div>
      ) : (
        <div>Empty</div>
      )}
    </div>
  );
};

const MenuForUnauthorizedUsers = ({ className }) => {
  return (
    <div className={classnames(styles.root, className)}>
      <h2 className={styles.title}>Menu</h2>
    </div>
  );
};

export const MenuWithAuthorization = withAuthorization({
  AuthorizedComponent: Menu,
  UnauthorizedComponent: MenuForUnauthorizedUsers,
});
