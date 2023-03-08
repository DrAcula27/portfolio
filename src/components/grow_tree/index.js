import React, { useEffect, useState } from "react";
import acorn from "../../acorn.svg";
import "./index.css";

const GrowTree = ({ onFinish }) => {
  const [isHidden, setIsHidden] = useState("");

  const toggleHidden = () => {
    setIsHidden(!isHidden);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      toggleHidden();
    }, 4000);
    onFinish();
    return () => clearTimeout(timer);
    // eslint-disable-next-line
  }, [onFinish]);

  return (
    <div id="container">
      <div id="quote" className={isHidden ? "hidden" : ""}>
        From little seeds grow mighty trees.
      </div>
      <div id="seed" className={isHidden ? "hidden" : ""}>
        <img src={acorn} alt={"seed"} />
      </div>
      <div id="wave" className={isHidden ? "hidden" : ""}></div>
      <div id="tree" className={!isHidden ? "hidden" : ""}>
        <div id="tree-bg"></div>
      </div>
    </div>
  );
};

export default GrowTree;
