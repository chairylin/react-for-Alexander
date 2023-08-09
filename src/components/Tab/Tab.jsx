import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../store/restaurant/selectors";
import { NavLink } from "react-router-dom";
import classnames from "classnames";

import styles from "./styles.module.css";

export const Tab = ({ restaurantId, className }) => {
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, { restaurantId })
  );

  return (
    <NavLink
      to={restaurantId}
      className={({ isActive }) =>
        classnames(className, {
          [styles.active]: isActive,
        })
      }
    >
      {restaurant.name}
    </NavLink>
  );
};
