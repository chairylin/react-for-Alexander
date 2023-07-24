import { Tab } from "../Tab/Tab";

import styles from "./tabs.module.css";
import classnames from "classnames";
import { useSelector } from "react-redux";
import { selectRestaurantIds } from "../../store/restaurant/selectors";

export const Tabs = ({ onTabClick, activeId, className }) => {
  const restaurantIds = useSelector(selectRestaurantIds);

  return (
    <div className={classnames(styles.root, className)}>
      {restaurantIds.map((restaurantId) => (
        <Tab
          key={restaurantId}
          restaurantId={restaurantId}
          onClick={() => onTabClick(restaurantId)}
          isActive={activeId === restaurantId}
          className={styles.tab}
        />
      ))}
    </div>
  );
};
