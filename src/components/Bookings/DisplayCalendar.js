import React, { useReducer, useState } from "react";
import "../bookingsStyles.css";
import CalendarBody from "./CalendarBody";
import SeatOverlay from "./SeatOverlay";
import SelectDesk from "../Homepage/SelectDesk/SelectDesk";
function handleMonth(state, action) {
  if (action.type === "next") {
    if (state.currentMonth < 11)
      return {
        currentMonth: state.currentMonth + 1,
        nextDisabled: false,
        prevDisabled: false,
      };
    else
      return {
        currentMonth: state.currentMonth + 1,
        nextDisabled: true,
        prevDisabled: false,
      };
  } else {
    if (state.currentMonth > 2)
      return {
        currentMonth: state.currentMonth - 1,
        prevDisabled: false,
        nextDisabled: false,
      };
    else
      return {
        currentMonth: state.currentMonth - 1,
        prevDisabled: true,
        nextDisabled: false,
      };
  }
}
const DisplayCalendar = () => {
  // const [currentMonth, setCurrentMonth] = useState(new Date().getMonth() + 1);
  const cmonth = new Date().getMonth() + 1;
  const [overlay, setOverlay] = useState(false);
  const [seat, setSeat] = useState({ row: "", col: "" });
  const [desk, setDesk] = useState(false);
  const [currentDay, setCurrentDay] = useState();
  const [overlayObj, setOverlayObj] = useState({});
  const [currentMonth, dispatchMonth] = useReducer(handleMonth, {
    currentMonth: cmonth,
    nextDisabled: false,
    prevDisabled: false,
  });
  const changeOverlayObj = (obj) => {
    setOverlayObj(() => {
      return obj;
    });
  };
  const changeDesk = () => {
    setDesk((desk) => {
      return !desk;
    });
  };
  const changeOverlay = () => {
    setOverlay((overlay) => {
      return !overlay;
    });
  };
  const EditBooking = (e) => {
    if (
      e.target.classList.contains("calendar-seat") &&
      e.target.innerText !== "--"
    ) {
      const parent = e.target.parentElement;

      const seatRow = parent.getAttribute("data-seat-row");
      const seatCol = parent.getAttribute("data-seat-col");

      setSeat(() => {
        return { row: seatRow, col: seatCol };
      });

      setCurrentDay(() => {
        return parent.getAttribute("data-id");
      });
      changeOverlay();
    }
  };
  return (
    <>
      <h1 className="calendar-month"> {currentMonth.currentMonth}</h1>
      <section className="calendar-section">
        <section className="prev-month">
          <button
            className="prevButton"
            disabled={currentMonth.prevDisabled}
            style={{ fontSize: "24px" }}
            onClick={() => dispatchMonth({ type: "prev" })}
          >
            prev
            <i />
          </button>
        </section>

        <section className="calendar-display" onClick={EditBooking}>
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
              <CalendarBody currentMonth={currentMonth.currentMonth} />
            </tbody>
          </table>
        </section>
        <section className="next-month">
          <button
            className="next-button"
            disabled={currentMonth.nextDisabled}
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
          />
        )}
        {desk && (
          <SelectDesk
            month={currentMonth.currentMonth}
            day={currentDay}
            overlay={true}
            overlayObj={overlayObj}
          />
        )}
      </section>
    </>
  );
};
export default DisplayCalendar;
