import { Tab } from "../Tab/Tab";

import styles from "./tabs.module.css";
import classnames from "classnames";

export const Tabs = ({ restaurants, onTabClick, activeIndex, className }) => {
  return (
    <div className={classnames(styles.root, className)}>
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
