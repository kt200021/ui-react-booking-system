import React, { useRef } from "react";
import useChange from "../../hooks/useChange";
import SeatDisplay from "../DeskApi's/seatDisplay";
const getCurrentDate = () => {
  const minDate = new Date();
  let month = minDate.getMonth() + 1;
  if (month <= 9) {
    month = "0" + month;
  }
  let day = minDate.getDate();
  if (day <= 9) {
    day = "0" + day;
  }
  const minDateString = minDate.getFullYear() + "-" + month + "-" + day;
  return minDateString;
};

const SelectDate = (props) => {
  const dateChosen = useRef();
  const [dateError, changeDateError] = useChange("");

  const submitDate = () => {
    const dateString = dateChosen.current.value;

    if (dateString) {
      let monthValue = dateString[5] + dateString[6];
      monthValue = parseInt(monthValue);
      let dateValue = dateString[8] + dateString[9];
      dateValue = parseInt(dateValue);
      const bookings = JSON.parse(localStorage.getItem("bookings"));

      if (SeatDisplay(dateValue, bookings, monthValue)) {
        changeDateError("Desk already booked");
      } else {
        props.changeIndex(3);
        props.changeMonth(monthValue);
        props.changeDay(dateValue);
      }
    } else {
      changeDateError("Invalid Date");
    }
  };

  const backDate = () => {
    props.changeIndex(1);
  };
  return (
    <section className="select-date">
      <label className="select-date-header">Select Date :</label>
      <input
        type="date"
        id="date-selected"
        ref={dateChosen}
        min={getCurrentDate()}
      />
      <br />

      <div className="error">
        <label className="date-error">{dateError}</label>
      </div>

      <div className="date-buttons">
        <button className="back-location form-buttons" onClick={backDate}>
          Back
        </button>
        <button className="submit-date form-buttons " onClick={submitDate}>
          Next
        </button>
      </div>
    </section>
  );
};

export default SelectDate;
