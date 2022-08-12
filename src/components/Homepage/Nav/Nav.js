import React from "react";
import "../../styles.css";
import logo from "./logo2.png";
const Nav = () => {
  return (
    <>
      <header>
        <div className="logo">
          <img src={logo} alt="sprinklr logo" width="200" height="54.5" />
        </div>

        <nav className="top-nav">
          <a className="home" href="/index.html">
            Home
          </a>
          <a className="bookings" href="./bookings.html">
            My Bookings
          </a>
        </nav>
      </header>
      <section className="form-header">
        <h1 className="form-header-text">Desk Booking</h1>
      </section>
    </>
  );
};
export default Nav;
