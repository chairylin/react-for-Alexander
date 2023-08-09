import { selectCartDishIds } from "../../store/cart/selectors";
import { useSelector } from "react-redux";
import { Dish } from "../../components/Dish/Dish";

import styles from "./styles.module.css";

export const CartPage = () => {
  const dishIds = useSelector(selectCartDishIds);

  return (
    <div className={styles.root}>
      <h1>Cart</h1>
      {dishIds?.length ? (
        <div className={styles.cartContainer}>
          {dishIds.map((id) => (
            <Dish key={id} dishId={id} className={styles.cartItem} />
          ))}
        </div>
      ) : (
        <div>Empty</div>
      )}
    </div>
  );
};
