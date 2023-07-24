import React, { useState } from "react";
import { Restaurant } from "../../components/Restaurant/Restaurant";
import { Tabs } from "../../components/Tabs/Tabs";

import styles from "./styles.module.css";

export const RestaurantPage = () => {
  const [activeRestaurantId, setActiveRestaurantId] = useState();

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
