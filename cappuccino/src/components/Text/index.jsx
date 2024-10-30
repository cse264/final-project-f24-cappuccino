import React from "react";

const sizeClasses = {
  txtInterBold100: "font-bold font-inter",
  txtInterBold50: "font-bold font-inter",
  txtInterBold40: "font-bold font-inter",
  txtInterRegular30: "font-inter font-normal",
  txtInterRegular32: "font-inter font-normal",
  txtInterRegular25: "font-inter font-normal",
  txtInterBold54: "font-bold font-inter",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
