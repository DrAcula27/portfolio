import React from "react";
// import { Link } from "react-router-dom";
import "./index.css";

const Nav = () => {
  return (
    <nav>
      <ul className="left-links">
        {/* <li>
          <Link to="#about">About</Link>
        </li>
        <li>
          <Link to="#projects">Projects</Link>
        </li>
        <li>
          <Link to="#contact">Contact</Link>
        </li> */}
      </ul>
      <ul className="right-links">
        <a
          href="https://www.github.com/DrAcula27"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>View GitHub</button>
        </a>
        <a
          href="https://www.linkedin.com/in/daniellerandrews"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>View LinkedIn</button>
        </a>
        <a
          href="https://docs.google.com/document/d/1ryPuYTND-wJXY-NuJKB6va6pvMPSzcb8xnhOs88SUUQ/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>View Resume</button>
        </a>
      </ul>
    </nav>
  );
};

export default Nav;
