import React from "react";
import CustomProject from "./CustomProject";

const Projects = () => {
  return (
    <>
      <section className="section projects">
        <div className="section-title">Projects</div>
        <div className="section-content">
          <CustomProject
            title="Dorway"
            link="https://www.dorway.ca/"
            desc="Dorway is a property app that allows tenants to submit work order tickets to vendors, which elimanates the need for calling and scheduling. I worked on the front end, building reusuable components, screens
            as well as interacting with user data. Check it out on the App stores."
            usedArray={[
              "JavaScript",
              "React Native",
              "React Native Paper",
              "Redux",
              "React Router",
              "Deep-links",
            ]}
          />
          <CustomProject
            title="Crypto Job Board"
            link="https://github.com/LeviBlack/Project-BJ"
            desc="A web app to help you get connected with people in various professions, who wish to sell their services for cryptocurrency."
            usedArray={[
              "JavaScript",
              "React",
              "React Router",
              "Bootstrap",
              "Firebase",
            ]}
          />
          {/* 
          <CustomProject
            title="Kitab Khana"
            link="https://github.com/karantondare/kitab-khana"
            desc="A full stack eCommerce website to purchase books with an admin panel to manage the orders and inventory."
            usedArray={[
              "JavaScript",
              "React",
              "React Router",
              "TMDb API",
              "Styled-Components",
            ]}
          />
          <CustomProject
            title="Movie Search App"
            link="https://github.com/karantondare/react-rmdb-movie-app"
            desc="Find the latest trending movies to binge watch on your weekend!"
            usedArray={[
              "JavaScript",
              "React",
              "React Router",
              "TMDb API",
              "Styled-Components",
            ]}
          /> */}
        </div>
      </section>
      <div className=" section-content projects-flex">
        <a
          href="https://github.com/LeviBlack"
          className=" underline-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h4>Check my other projects on github.</h4>
        </a>
      </div>
    </>
  );
};

export default Projects;
