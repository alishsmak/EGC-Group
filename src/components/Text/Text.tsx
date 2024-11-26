import React, { cloneElement, FC, memo, PropsWithChildren } from "react";
import cn from "classnames";
import { ITextProps } from "./Text.type";
import styles from "./Text.module.scss";

const TextFC: FC<PropsWithChildren<ITextProps>> = ({
  children,
  size = "medium",
  variant = "regular",
  element = "p",
  className
}) => {
  let tag: React.ReactNode;

  switch (element) {
    case "p":
      tag = <p />;
      break;
    case "span":
      tag = <span />;
      break;
    default:
      tag = <p />;
      break;
  }

  return (
    <span className={styles.customText}>
      {cloneElement(tag, {
        className: cn(styles.text, styles[size], styles[variant], className),
        children
      })}
    </span>
  );
};

export const Text = memo(TextFC);
