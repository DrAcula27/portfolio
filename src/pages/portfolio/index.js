import React from "react";
import Nav from "../../components/nav";
import Intro from "../../components/intro";
import About from "../../components/about";
import Projects from "../../components/projects";
import Contact from "../../components/contact";
import "./index.css";

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <Nav />
      <Intro />
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default Portfolio;
