import { useState } from "react";
import { useEffect, useRef } from "react";
import "./App.css";
import GrowTree from "./components/grow_tree";
import Portfolio from "./pages/portfolio";

function App() {
  const [isDisplayed, setIsDisplayed] = useState(false);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      setIsDisplayed(true);
      setTimeout(() => {
        setIsDisplayed(false);
      }, 8000);
    }
  }, []);

  return <div>{isDisplayed ? <GrowTree /> : <Portfolio />}</div>;
}

export default App;
