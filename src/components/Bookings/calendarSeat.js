import React from "react";
import seatDisplay from "../Homepage/DeskApi's/seatDisplay";
const CalendarSeat = (props) => {
  const { day, bookings, currentMonth } = props;
  //console.log(bookings);
  ///console.log(seatDisplay);
  const seat = seatDisplay(day, bookings, currentMonth);

  let row, col, seatNo, deskPresent;
  if (seat) {
    row = seat.row;
    col = seat.col;
    seatNo = row + col;
    deskPresent = 1;
  } else {
    seatNo = "-";
    deskPresent = 0;
  }
  return (
    <td data-id={day} data-seat-row={row} data-seat-col={col}>
      {day}
      <br />
      <span className="calendar-seat" data-desk-present={deskPresent}>
        {seatNo}
      </span>
    </td>
  );
};
export default CalendarSeat;
