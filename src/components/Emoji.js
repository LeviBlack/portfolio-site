import React from "react";

const Emoji = ({ label, className, symbol }) => (
  <span
    className={className}
    role="img"
    aria-label={label ? label : ""}
    aria-hidden={label ? "false" : "true"}
  >
    {symbol}
  </span>
);
export default Emoji;
