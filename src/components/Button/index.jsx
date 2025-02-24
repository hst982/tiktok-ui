import { Link } from "react-router";
import classNames from "classnames/bind";
import styles from "./Button.module.scss";

const cx = classNames.bind(styles);

function Button({
  to,
  href,
  primary = false,
  outline = false,
  disabled = false,
  rounded = false,
  text = false,
  small = false,
  larger = false,
  children,
  className,
  onClick,
  ...passProps
}) {
  let Com = "button";
  const classes = cx("wrapper", {
    [className]:className,
    primary,
    outline,
    disabled,
    rounded,
    text,
    small,
    larger,
  });
  const props = {
    onClick,
    ...passProps,
  };

  if (to) {
    props.to = to;
    Com = Link;
  } else if (href) {
    props.href = href;
    Com = "a";
  }

  if (disabled) {
    // delete props.onClick
    Object.keys(props).forEach((key) => {
      if (key.startsWith("on") && typeof props[key] === "function") {
        delete props[key];
      }
    });
  }

  return (
    <Com className={classes} {...props}>
      {children}
    </Com>
  );
}

export default Button;
