import { Button } from "../Button/Button";
import { ViewVariant } from "../Button/constants";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../store/restaurant/selectors";

export const Tab = ({ isActive, onClick, restaurantId, className }) => {
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, { restaurantId })
  );

  return (
    <Button
      onClick={onClick}
      className={className}
      viewVariant={isActive ? ViewVariant.primary : ViewVariant.base}
    >
      {restaurant.name}
    </Button>
  );
};
