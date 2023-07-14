import { Tab } from "../Tab/Tab";

import styles from "./tabs.module.css";

export const Tabs = ({ restaurants, onTabClick, activeIndex }) => {
  return (
    <div className={styles.root}>
      {restaurants.map((restaurant, index) => (
        <Tab
          key={restaurant.id}
          title={restaurant.name}
          onClick={() => onTabClick(index)}
          isActive={activeIndex === index}
          className={styles.tab}
        />
      ))}
    </div>
  );
};
