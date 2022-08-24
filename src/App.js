import React, { useEffect } from "react";
import Home from "./components/Homepage/homePage";
import DisplayCalendar from "./components/Bookings/displayCalendar";
import bangaloreData from "./components/Homepage/DeskLayout/deskData";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
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
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/bookings">
            <DisplayCalendar />
          </Route>
          <Redirect from="/" to="/home" />
        </Switch>
      </Router>
    </>
  );
}

export default App;
