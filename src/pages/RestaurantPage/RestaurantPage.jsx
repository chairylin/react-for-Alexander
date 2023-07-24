import React, { useState } from "react";
import { Restaurant } from "../../components/Restaurant/Restaurant";
import { Tabs } from "../../components/Tabs/Tabs";

import styles from "./styles.module.css";

export const RestaurantPage = ({ restaurants }) => {
  const [activeRestaurantIndex, setActiveRestaurantIndex] = useState(0);

  return (
    <div className={styles.root}>
      <Tabs
        restaurants={restaurants}
        onTabClick={setActiveRestaurantIndex}
        activeIndex={activeRestaurantIndex}
        className={styles.tabs}
      />
      <Restaurant restaurant={restaurants[activeRestaurantIndex]} />
    </div>
  );
};
