import React from "react";
// import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <ul>
        {/* <li>
          <Link to="#about">About</Link>
        </li>
        <li>
          <Link to="#projects">Projects</Link>
        </li>
        <li>
          <Link to="#contact">Contact</Link>
        </li> */}
        <li>
          <a
            href="https://docs.google.com/document/d/1ryPuYTND-wJXY-NuJKB6va6pvMPSzcb8xnhOs88SUUQ/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>Resume</button>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
