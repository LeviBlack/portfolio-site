import React from "react";
import HrefButton from "./HrefButton";

const Header = () => {
  return (
    <header className="intro">
      <h1 className="intro-hello">
        <span className="emoji">👋👀</span>
      </h1>
      <h2 className="intro-tagline">
        I'm <span className="name">Toussaint.dev</span>, a Canadian web
        developer. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
        a rem quibusdam natus, fuas.
      </h2>

      <HrefButton
        href="mailto:toussaint.webdev@gmail.com"
        title=" Get in touch 👉🏼 toussaint.webdev@gmail.com"
      />
    </header>
  );
};

export default Header;
