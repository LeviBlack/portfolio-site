import React from "react";

const HrefButton = ({ href, title, pointer }) => {
  return (
    <h3 className="intro-contact">
      <span>
        <a target="_blank" href={href} className="interact-link">
          {pointer ? "👉🏼" + title : title}
        </a>
      </span>{" "}
    </h3>
  );
};

export default HrefButton;
