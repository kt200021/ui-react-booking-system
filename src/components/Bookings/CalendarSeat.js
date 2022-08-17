import React from "react";
const CalendarSeat = (props) => {
  const day = props.day;

  const bookings = JSON.parse(localStorage.getItem("bookings"));
  //console.log(bookings);
  const currentMonth = props.currentMonth;
  const seatDisplay = (day) => {
    if (bookings !== null) {
      const seat =
        bookings[currentMonth] && bookings[currentMonth][day]
          ? bookings[currentMonth][day]
          : null;
      //console.log(seat);

      if (seat !== null) return { row: seat.row, col: seat.col };
      else return null;
    }
  };
  const seat = seatDisplay(day);

  let row, col, seatNo;
  if (seat) {
    row = seat.row;
    col = seat.col;
    seatNo = row + col;
  } else {
    seatNo = "---";
  }
  return (
    <td data-id={day} data-seat-row={row} data-seat-col={col}>
      {day}
      <br />
      <span className="calendar-seat">{seatNo}</span>
    </td>
  );
};
export default CalendarSeat;
