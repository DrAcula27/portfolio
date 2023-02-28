import React from "react";
import "./index.css";

const Home = () => {
  return (
    <div id="container">
      <div id="seed"></div>
      <div id="wave"></div>
      <div id="tree" class="hidden">
        <img src="./tree.svg" alt="tree" />
        <div id="tree-bg"></div>
      </div>
    </div>
  );
};

export default Home;
