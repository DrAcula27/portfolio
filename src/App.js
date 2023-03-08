import { useEffect, useRef } from "react";
// import { Router } from "react-router-dom";
import "./App.css";
import GrowTree from "./components/grow_tree";
import Portfolio from "./pages/portfolio";

function App() {
  // const [isFirstVisit, setIsFirstVisit] = useState(false);

  // useEffect(() => {
  //   const isFirstVisit = !localStorage.getItem("hasVisitedBefore");
  //   if (isFirstVisit) {
  //     localStorage.setItem("hasVisitedBefore", true);
  //     setIsFirstVisit(true);
  //   }
  // }, []);
  const hasVisitedBeforeRef = useRef(false);

  useEffect(() => {
    if (!hasVisitedBeforeRef.current) {
      hasVisitedBeforeRef.current = true;
    }
  }, []);

  return (
    <div className="App">
      {/* {isFirstVisit ? (
        <GrowTree onFinish={() => setIsFirstVisit(false)} />
      ) : (
        <Portfolio />
      )} */}
      {hasVisitedBeforeRef.current ? (
        <GrowTree onFinish={() => (hasVisitedBeforeRef.current = true)} />
      ) : (
        <Portfolio />
      )}
    </div>
  );
}

export default App;
