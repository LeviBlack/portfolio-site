import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-copyright"></div>

      <div className="navbar-links">
        <a
          href="mailto:toussaint.webdev@gmail.com"
          title="email"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="text">email</span>
        </a>
        <a
          href="https://github.com/LeviBlack"
          title="github"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="text">github</span>
        </a>

        <a
          href="https://twitter.com/Toussaint_dev"
          title="twitter"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="text">twitter</span>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
