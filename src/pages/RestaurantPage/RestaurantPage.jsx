import React, { useEffect, useState } from "react";
import { Restaurant } from "../../components/Restaurant/Restaurant";
import { Tabs } from "../../components/Tabs/Tabs";
import styles from "./styles.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectIsRestaurantLoading } from "../../store/restaurant/selectors";
import { fetchRestaurants } from "../../store/restaurant";

export const RestaurantPage = () => {
  const [activeRestaurantId, setActiveRestaurantId] = useState();
  const isLoading = useSelector(selectIsRestaurantLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRestaurants());
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.root}>
      <Tabs
        onTabClick={setActiveRestaurantId}
        activeId={activeRestaurantId}
        className={styles.tabs}
      />
      {activeRestaurantId !== undefined && (
        <Restaurant restaurantId={activeRestaurantId} />
      )}
    </div>
  );
};
