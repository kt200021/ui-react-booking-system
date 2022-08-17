import React from "react";
import "../../styles.css";
import logo from "./ui-react.png";
import { Link, NavLink } from "react-router-dom";
const Nav = () => {
  return (
    <>
      <header>
        <div className="logo">
          <img src={logo} alt="sprinklr logo" width="200" height="59.5" />
        </div>

        <nav className="top-nav">
          <NavLink to="/home" className="home">
            Home
          </NavLink>
          <NavLink to="/bookings" className="bookings">
            My Bookings
          </NavLink>
        </nav>
      </header>
    </>
  );
};
export default Nav;
