import React from "react";
import "../../styles.css";
import logo from "./ui-react.png";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <>
      <header>
        <div className="logo">
          <img src={logo} alt="sprinklr logo" width="200" height="59.5" />
        </div>

        <nav className="top-nav">
          <Link to="/home" className="home">
            Home
          </Link>
          <Link to="/bookings" className="bookings">
            My Bookings
          </Link>
        </nav>
      </header>
      <section className="form-header">
        <h1 className="form-header-text"> Book a new desk</h1>
      </section>
    </>
  );
};
export default Nav;
