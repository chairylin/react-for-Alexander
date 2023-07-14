import { Button } from "../Button/Button";
import { ViewVariant } from "../Button/constants";

export const Tab = ({ isActive, onClick, title, className }) => {
  return (
    <Button
      onClick={onClick}
      className={className}
      viewVariant={isActive ? ViewVariant.primary : ViewVariant.base}
    >
      {title}
    </Button>
  );
};
