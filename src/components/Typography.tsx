import React from "react";
import "./typography.css";
const variantsMapping = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  body: "p",
};

const Typography = ({  ...props }) => {

  return (
    <Component
      className={cn({
        [`typography--variant-${variant}`]: variant,
      })}
      {...props}
    ></Component>
  );
};

export default Typography;