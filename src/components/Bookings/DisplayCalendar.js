import React, { useReducer, useRef, useState } from "react";
import "../bookingsStyles.css";
import CalendarBody from "./CalendarBody";
import SeatOverlay from "./SeatOverlay";
import SelectDesk from "../Homepage/SelectDesk/SelectDesk";
import Nav from "../Homepage/Nav/Nav";
import useChange from "../hooks/changeState";
import SuccessMessage from "../successMessage";
const monthsList = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JULY",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
];

function handleMonth(state, action) {
  if (action.type === "next" && state.currentMonth <= 11) {
    return {
      currentMonth: state.currentMonth + 1,
    };
  } else if (state.currentMonth >= 2)
    return {
      currentMonth: state.currentMonth - 1,
    };
}
const DisplayCalendar = () => {
  const cmonth = new Date().getMonth() + 1;

  const [seat, setSeat] = useState({ row: "", col: "" });

  const [currentDay, setCurrentDay] = useState();

  const seatSelected = useRef();

  const [desk, , changeDesk] = useChange(false);
  const [overlayObj, changeOverlayObj] = useChange({});
  const [overlay, , changeOverlay] = useChange(false);
  const [message, changeMessage] = useChange("");
  console.log("display calendar re rendered", overlay);
  const [currentMonth, dispatchMonth] = useReducer(handleMonth, {
    currentMonth: cmonth,
  });

  //ask about dom target
  const EditBooking = (e) => {
    // console.log("hellllooo");
    //console.log(e.target.innerText);
    if (
      e.target.classList.contains("calendar-seat") &&
      e.target.innerText !== "-"
    ) {
      const parent = e.target.parentElement;
      const deskString = e.target.innerText;
      // console.log(deskString);
      const deskRow = deskString[0];
      const lengthString = deskString.length;
      const deskNumber = parseInt(deskString.slice(1, lengthString));
      // const seatRow = parent.getAttribute("data-seat-row");
      //const seatCol = parent.getAttribute("data-seat-col");
      //  console.log("i am in");
      setSeat(() => {
        return { row: deskRow, col: deskNumber };
      });

      setCurrentDay(() => {
        return parent.getAttribute("data-id");
      });

      changeOverlay();
    }
  };
  return (
    <>
      <Nav></Nav>

      <section className="calendar-section">
        <section className="prev-month">
          <button
            className="prevButton"
            disabled={currentMonth.currentMonth === 1 ? true : false}
            style={{ fontSize: "24px" }}
            onClick={() => dispatchMonth({ type: "prev" })}
          >
            prev
            <i />
          </button>
        </section>

        <section className="calendar-display" onClick={EditBooking}>
          <h1 className="calendar-month">
            {" "}
            {monthsList[currentMonth.currentMonth - 1]}
          </h1>
          <table className="calendar">
            <thead className="header">
              <tr>
                <th>Sun</th>
                <th>Mon</th>
                <th>Tue</th>
                <th>Wed</th>
                <th>Thu</th>
                <th>Fri</th>
                <th>Sat</th>
              </tr>
            </thead>
            <tbody className="calendar-body">
              <CalendarBody currentMonth={currentMonth.currentMonth} />
            </tbody>
          </table>
        </section>
        <section className="next-month">
          <button
            className="next-button"
            disabled={currentMonth.currentMonth === 12 ? true : false}
            style={{ fontSize: "24px" }}
            onClick={() => dispatchMonth({ type: "next" })}
          >
            next
            <i />
          </button>
        </section>
        {overlay && (
          <SeatOverlay
            currentDay={currentDay}
            currentMonth={currentMonth.currentMonth}
            seat={seat}
            changeOverlay={changeOverlay}
            changeDesk={changeDesk}
            changeOverlayObj={changeOverlayObj}
            changeMessage={changeMessage}
          />
        )}
        {desk && (
          <SelectDesk
            month={currentMonth.currentMonth}
            day={currentDay}
            overlay={true}
            overlayObj={overlayObj}
            changeDesk={changeDesk}
            deskClass={"select-desk"}
            currentSeat={seat}
            changeMessage={changeMessage}
          />
        )}
        {message !== "" && <SuccessMessage message={message} />}
      </section>
    </>
  );
};
export default DisplayCalendar;
