import React from "react";
import HrefButton from "./HrefButton";

const CustomProject = ({ title, link, desc, usedArray }) => {
  return (
    <div className="project">
      <HrefButton href={link} title={title} pointer />
      <p>{desc}</p>
      <div className="project-used">
        {usedArray.map((used, index) => {
          return (
            <span key={index} className="project-used-item">
              {used}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default CustomProject;
