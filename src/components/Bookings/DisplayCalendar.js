import React from "react";
import "../bookingsStyles.css";
const DisplayCalendar = () => {
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
              <tr>
                <td data-id="1" data-seat-row="" data-seat-col="">
                  1
                </td>
                <td data-id="2" data-seat-row="" data-seat-col="">
                  2
                </td>
                <td data-id="3" data-seat-row="" data-seat-col="">
                  3
                </td>
                <td data-id="4" data-seat-row="" data-seat-col="">
                  4
                </td>
                <td data-id="5" data-seat-row="" data-seat-col="">
                  5
                </td>
                <td data-id="6" data-seat-row="" data-seat-col="">
                  6
                </td>
                <td data-id="7" data-seat-row="" data-seat-col="">
                  7
                </td>
              </tr>
              <tr></tr>
              <tr>
                <td data-id="8" data-seat-row="" data-seat-col="">
                  8
                </td>
                <td data-id="9" data-seat-row="" data-seat-col="">
                  9
                </td>
                <td data-id="10" data-seat-row="" data-seat-col="">
                  10
                </td>
                <td data-id="11" data-seat-row="" data-seat-col="">
                  11
                </td>
                <td data-id="12" data-seat-row="" data-seat-col="">
                  12
                </td>
                <td data-id="13" data-seat-row="" data-seat-col="">
                  13
                </td>
                <td data-id="14" data-seat-row="" data-seat-col="">
                  14
                </td>
              </tr>
              <tr>
                <td data-id="15" data-seat-row="" data-seat-col="">
                  15
                </td>
                <td data-id="16" data-seat-row="" data-seat-col="">
                  16
                </td>
                <td data-id="17" data-seat-row="" data-seat-col="">
                  17
                </td>
                <td data-id="18" data-seat-row="" data-seat-col="">
                  18
                </td>
                <td data-id="19" data-seat-row="" data-seat-col="">
                  19
                </td>
                <td data-id="20" data-seat-row="" data-seat-col="">
                  20
                </td>
                <td data-id="21" data-seat-row="" data-seat-col="">
                  21
                </td>
              </tr>
              <tr>
                <td data-id="22" data-seat-row="" data-seat-col="">
                  22
                </td>
                <td data-id="23" data-seat-row="" data-seat-col="">
                  23
                </td>
                <td data-id="24" data-seat-row="" data-seat-col="">
                  24
                </td>
                <td data-id="25" data-seat-row="" data-seat-col="">
                  25
                </td>
                <td data-id="26" data-seat-row="" data-seat-col="">
                  26
                </td>
                <td data-id="27" data-seat-row="" data-seat-col="">
                  27
                </td>
                <td data-id="28" data-seat-row="" data-seat-col="">
                  28
                </td>
              </tr>
              <tr>
                <td data-id="29" data-seat-row="" data-seat-col="">
                  29
                </td>
                <td data-id="30" data-seat-row="" data-seat-col="">
                  30
                </td>
              </tr>
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
