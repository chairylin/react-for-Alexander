import { Tab } from "../Tab/Tab";

import styles from "./tabs.module.css";
import classnames from "classnames";
import { useSelector } from "react-redux";
import { selectRestaurantIdsFilteredByName } from "../../store/restaurant/selectors";
import { useSearchParams } from "react-router-dom";

export const Tabs = ({ className }) => {
  const [search, setSearch] = useSearchParams();
  const restaurantIds = useSelector((state) =>
    selectRestaurantIdsFilteredByName(state, {
      searchValue: search.get("restaurantName") || "",
    })
  );

  return (
    <div className={classnames(styles.root, className)}>
      <input
        value={search.get("restaurantName") || ""}
        onChange={(event) => setSearch({ restaurantName: event.target.value })}
        placeholder="Search..."
        className={styles.searchInput}
      />
      <div>
        {restaurantIds.map((restaurantId) => (
          <Tab
            key={restaurantId}
            restaurantId={restaurantId}
            className={styles.tab}
          />
        ))}
      </div>
    </div>
  );
};
