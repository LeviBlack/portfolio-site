import React from "react";
import {
  FaJsSquare,
  FaReact,
  FaHtml5,
  FaCss3,
  FaNpm,
  FaNode,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import { SiFirebase, SiRedux, SiMongodb, SiTailwindcss } from "react-icons/si";

const Background = () => {
  return (
    <section className="section background">
      <div className="section-title">BACKGROUND</div>
      <div className="section-content">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque,
          facere nostrum ipsum dicta facilis expedita totam inventore amet
          deleniti est mollitia? Maxime repellendus at reprehenderit nobis
          dolores laboriosam deleniti placeat? Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Itaque, facere nostrum ipsum dicta
          facilis expedita totam inventore amet deleniti est mollitia? Maxime
          repellendus at reprehenderit nobis dolores laboriosam deleniti Lorem
          ipsum dolor, sit amet consectetur adipisicing elit. Itaque, facere
          nostrum ipsum dicta facilis expedita totam inventore amet deleniti est
          mollitia? Maxime repellendus at reprehenderit nobis dolores laboriosam
          deleniti placeat? placeat?
        </p>

        <div className="section-content section-icons">
          <FaHtml5 className="icon-hover" />
          <FaCss3 className="icon-hover" />
          <FaJsSquare className="icon-hover" />
          <FaReact className="icon-hover" />
          <SiRedux className="icon-hover" />
          <FaNode className="icon-hover" />
          {/* <SiMongodb className="icon-hover" /> */}
          <SiFirebase className="icon-hover" />
          <SiTailwindcss className="icon-hover" />
          <FaNpm className="icon-hover" />
          <FaGithub className="icon-hover" />
        </div>
      </div>
    </section>
  );
};

export default Background;
