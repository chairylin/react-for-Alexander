import React from "react";
import { Dish } from "../Dish/Dish";
import styles from './styles.module.css';
import classnames from "classnames";

export const Menu = ({ menu, className }) => {
  return (
    <div className={classnames(styles.root, className)}>
      <h3 className={styles.title}>Menu</h3>
      {menu.length > 0 ? (
        <div>
          {menu.map((dish) => (
            <Dish key={dish.id} dish={dish} className={styles.dish} />
          ))}
        </div>
      ) : (
        <div>Empty</div>
      )}
    </div>
  );
};
