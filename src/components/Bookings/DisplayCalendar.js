import React, {
  useCallback,
  useMemo,
  useReducer,
  useRef,
  useState,
} from "react";
import "../bookingsStyles.css";
import CalendarBody from "./CalendarBody";
import SeatOverlay from "./SeatOverlay";
import SelectDesk from "../Homepage/SelectDesk/SelectDesk";
import Nav from "../Homepage/Nav/Nav";

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
  console.log("display calendar re rendered");
  const cmonth = new Date().getMonth() + 1;
  const [overlay, setOverlay] = useState(false);
  const [seat, setSeat] = useState({ row: "", col: "" });
  const [desk, setDesk] = useState(false);
  const [currentDay, setCurrentDay] = useState();
  const [overlayObj, setOverlayObj] = useState({});
  const seatSelected = useRef();

  const [currentMonth, dispatchMonth] = useReducer(handleMonth, {
    currentMonth: cmonth,
    nextDisabled: false,
    prevDisabled: false,
  });

  const changeOverlayObj = useCallback((obj) => {
    setOverlayObj(() => {
      return obj;
    });
  }, []);
  const changeDesk = useCallback(() => {
    setDesk((desk) => {
      return !desk;
    });
  }, []);
  const changeOverlay = useCallback(() => {
    setOverlay((overlay) => {
      return !overlay;
    });
  }, []);

  //ask about dom target
  const EditBooking = (e) => {
    if (e.target === seatSelected.current) {
      //console.log("heksknkk ");
      changeOverlay();
      return;
    } else if (
      e.target.classList.contains("calendar-seat") &&
      e.target.innerText !== "--"
    ) {
      const parent = e.target.parentElement;

      const seatRow = parent.getAttribute("data-seat-row");
      const seatCol = parent.getAttribute("data-seat-col");
      console.log("i am in");
      setSeat(() => {
        return { row: seatRow, col: seatCol };
      });

      setCurrentDay(() => {
        return parent.getAttribute("data-id");
      });
      seatSelected.current = e.target;
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
            disabled={currentMonth.prevDisabled}
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
            changeDesk={changeDesk}
            deskClass={"select-desk"}
          />
        )}
      </section>
    </>
  );
};
export default React.memo(DisplayCalendar);
