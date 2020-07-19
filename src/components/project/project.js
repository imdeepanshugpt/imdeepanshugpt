import React from "react";
import styles from "./project.module.css";
// import ProjectCard from "./project-card/project-card";
import { EXPERIENCE } from "./index.constant";

const Projects = () => {
  // const PG = require("../../assets/PandG.jpg");

  const renderExperienceList = () => {
    return EXPERIENCE.map((list, index) => {
      console.log(index);
      return <li key={index}>{list}</li>;
    });
  };

  return (
    <div className={styles.projects}>
      <div>
        <h2 className={styles.experience}>
          <strong>Experience and Responsiblities</strong>
        </h2>
        <ol className={styles.gradientList}>{renderExperienceList()}</ol>
      </div>
      {/* <div className={styles.indProjects}>
        <ProjectCard
          src={PG}
          hide={false}
          title={"Airline"}
          description={
            "It is a airline model of managing check-in, flight-in and passengers details functionality of flights ."
          }
        />
      </div> */}
    </div>
  );
};

export default Projects;
