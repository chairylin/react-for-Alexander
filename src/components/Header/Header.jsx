import styles from "./styles.module.css";

import { ReactComponent as Logo } from "./img/logo.svg";

export const Header = () => {
  return (
    <div className={styles.root}>
      {/*<div className={styles.logo} />*/}
      {/*<img src={Logo} loading="lazy" />*/}
      <Logo />
    </div>
  );
};
