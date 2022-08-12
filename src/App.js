import React, { useEffect } from "react";
import Home from "./components/Homepage/HomePage";
import bangaloreData from "./components/Homepage/DeskLayout/DeskData";
function App() {
  useEffect(() => {
    // console.log("useeffect called");
    if (localStorage.getItem("blrData") === null)
      localStorage.setItem("blrData", JSON.stringify(bangaloreData));
  }, []);
  return <Home />;
}

export default App;
