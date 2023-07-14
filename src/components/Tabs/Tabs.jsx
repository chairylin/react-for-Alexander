import { Tab } from "../Tab/Tab";

export const Tabs = ({ restaurants, onTabClick, activeIndex }) => {
  return (
    <div>
      {restaurants.map((restaurant, index) => (
        <Tab
          key={restaurant.id}
          title={restaurant.name}
          onClick={() => onTabClick(index)}
          isActive={activeIndex === index}
        />
      ))}
    </div>
  );
};
