import React from "react";
import projectInfo from "../../projectInfo";

const Projects = () => {
  const projectsJSX = projectInfo.map((project, i) => {
    return (
      <div className="project" key={i}>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <a href={project.link} target="_blank" rel="noopener noreferrer">
          project link
        </a>
      </div>
    );
  });
  return (
    <section id="projects">
      <h2>Featured Projects</h2>
      {projectsJSX}
    </section>
  );
};

export default Projects;
