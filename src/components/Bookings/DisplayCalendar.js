import React, { useState } from "react";
import "../bookingsStyles.css";
import CalendarBody from "./CalendarBody";
const DisplayCalendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth() + 1);
  return (
    <>
      <h1 className="calendar-month"> July</h1>
      <section className="calendar-section">
        <section className="prev-month">
          <button style={{ fontSize: "24px" }}>
            prev
            <i />
          </button>
        </section>

        <section className="calendar-display">
          <table className="calendar">
            <thead className="header">
              <tr>
                <th>Sun</th>
                <th>Mon</th>
                <th>Tue</th>
                <th>Wed</th>
                <th>Thu</th>
                <th>Fri</th>
                <th>sat</th>
              </tr>
            </thead>
            <tbody className="calendar-body">
              <CalendarBody currentMonth={currentMonth} />
            </tbody>
          </table>
        </section>
        <section className="next-month">
          <button style={{ fontSize: "24px" }}>
            next
            <i />
          </button>
        </section>
        <section className="seat-overlay hide">
          <section className="overlay-message">
            <h1 className="seat-no-overlay">Seat : </h1>
            <button className="cancel-seat" data-row="" data-col="">
              Cancel Seat
            </button>
            <button className="edit-seat" data-row="" data-col="">
              Edit Seat
            </button>
          </section>
        </section>
        <section className="desk-overlay hide">
          <section className="select-desk">
            <h1 className="select-desk-header">Choose a desk</h1>
            <div className="desk-layout">
              <section className="row-A seats-row"></section>
              <section className="row-B seats-row"></section>
              <section className="row-C seats-row"></section>
            </div>
            <div className="submit-buttons">
              <label className="desk-error hidden">Invalid desk</label>
              <input type="submit" className="submit-desk form-buttons" />
            </div>
          </section>
        </section>
      </section>
    </>
  );
};
export default DisplayCalendar;
