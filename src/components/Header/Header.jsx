import styles from "./styles.module.css";

import { ReactComponent as Logo } from "./img/logo.svg";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className={styles.root}>
      {/*<div className={styles.logo} />*/}
      {/*<img src={Logo} loading="lazy" />*/}
      <Link to="/" className={styles.logo}>
        <Logo />
      </Link>
      <Link to="/restaurants" className={styles.link}>
        Restaurant
      </Link>
      <Link to="/cart" className={styles.link}>
        Cart
      </Link>
    </div>
  );
};
