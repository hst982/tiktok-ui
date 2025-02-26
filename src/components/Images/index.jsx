import classNames from "classnames/bind";
import { useState } from "react";

import images from "@assets/images";
import styles from "./Image.module.scss";

const cx = classNames.bind(styles);

function Image({ src, alt, className, fallback = images.noImage, ...props }) {
  const [_fallback, setFallback] = useState("");

  const handleError = () => {
    setFallback(fallback);
  };
  return (
    <img
      className={cx("wrapper", className)}
      src={_fallback || src}
      alt={alt}
      {...props}
      onError={handleError}
    />
  );
}

export default Image;
