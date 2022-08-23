import React, {
  useEffect,
  useReducer,
  useRef,
  useState,
  Suspense,
} from "react";
import "../bookingsStyles.css";
import CalendarBody from "./CalendarBody";

import SelectDesk from "../Homepage/SelectDesk/SelectDesk";
import Nav from "../Homepage/Nav/Nav";
import useChange from "../hooks/changeState";
const SeatOverlay = React.lazy(() => import("./SeatOverlay"));
const SuccessMessage = React.lazy(() => import("../successMessage"));
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
  const [bookings, changeBookings] = useChange();
  const [bookingsUpdate, , changeBookingsUpdate] = useChange(false);
  console.log("display calendar re rendered", overlay);
  const [currentMonth, dispatchMonth] = useReducer(handleMonth, {
    currentMonth: cmonth,
  });

  useEffect(() => {
    console.log("display calendar useffect");
    const bookings = JSON.parse(localStorage.getItem("bookings"));
    changeBookings(bookings);
  }, [bookingsUpdate]);

  //ask about dom target
  const EditBooking = (e) => {
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
            style={{ fontSize: "50px" }}
            onClick={() => dispatchMonth({ type: "prev" })}
          >
            &#8249;
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
              {bookings ? (
                <CalendarBody
                  currentMonth={currentMonth.currentMonth}
                  bookings={bookings}
                />
              ) : null}
            </tbody>
          </table>
        </section>
        <section className="next-month">
          <button
            className="next-button"
            disabled={currentMonth.currentMonth === 12 ? true : false}
            onClick={() => dispatchMonth({ type: "next" })}
            style={{ fontSize: "50px" }}
          >
            &#8250;
            <i />
          </button>
        </section>
        {overlay && (
          <Suspense fallback={<div>Loading...</div>}>
            <SeatOverlay
              currentDay={currentDay}
              currentMonth={currentMonth.currentMonth}
              seat={seat}
              changeOverlay={changeOverlay}
              changeDesk={changeDesk}
              changeOverlayObj={changeOverlayObj}
              changeMessage={changeMessage}
              changeBookingsUpdate={changeBookingsUpdate}
            />
          </Suspense>
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
            changeBookingsUpdate={changeBookingsUpdate}
          />
        )}
        {message !== "" && (
          <Suspense>
            <SuccessMessage message={message} />
          </Suspense>
        )}
      </section>
    </>
  );
};
export default DisplayCalendar;
