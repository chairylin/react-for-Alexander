import React from "react";

import styles from "./styles.module.css";
import classnames from "classnames";
import { ViewVariant } from "./constants";
import { Size } from "../../constants/ui";

const borderRadiusStyles = {
  s: styles.borderRadiusSizeS,
  m: styles.borderRadiusSizeM,
};

export const Button = ({
  children,
  onClick = () => {},
  disabled = false,
  size = Size.m,
  borderRadiusSize = Size.m,
  viewVariant = ViewVariant.base,
  className,
}) => {
  return (
    <button
      className={classnames(
        styles.root,
        className,
        styles[size],
        borderRadiusStyles[borderRadiusSize],
        styles[viewVariant]
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
