import React, { useEffect } from "react";
import Home from "./components/Homepage/HomePage";
import DisplayCalendar from "./components/Bookings/DisplayCalendar";
import bangaloreData from "./components/Homepage/DeskLayout/DeskData";
function App() {
  useEffect(() => {
    // console.log("useeffect called");
    const bookings = {};
    if (localStorage.getItem("bookings") === null)
      localStorage.setItem("bookings", JSON.stringify(bookings));

    if (localStorage.getItem("blrData") === null)
      localStorage.setItem("blrData", JSON.stringify(bangaloreData));
  }, []);
  return (
    <>
      <Home />
      <DisplayCalendar />
    </>
  );
}

export default App;
