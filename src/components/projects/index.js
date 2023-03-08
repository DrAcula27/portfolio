import React from "react";
import projectInfo from "../../projectInfo";

const Projects = () => {
  const projectsJSX = projectInfo.map((project, i) => {
    return (
      <div className="project" key={i}>
        <h3>{project.name}</h3>
        <a href={project.link} target="_blank" rel="noopener noreferrer">
          project link
        </a>
        <p>{project.description}</p>
      </div>
    );
  });
  return (
    <section id="projects" className="max-width">
      <h2>Featured Projects</h2>
      {projectsJSX}
    </section>
  );
};

export default Projects;
