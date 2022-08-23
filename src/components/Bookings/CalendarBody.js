import React from "react";
import CalendarSeat from "./CalendarSeat";
const CalendarBody = (props) => {
  const { bookings, currentMonth } = props;
  //   console.log(bookings);
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
  const row1 = [1, 2, 3, 4, 5, 6, 7];
  const row2 = [8, 9, 10, 11, 12, 13, 14];
  const row3 = [15, 16, 17, 18, 19, 20, 21];
  const row4 = [22, 23, 24, 25, 26, 27, 28];
  const row5 = [29, 30];
  return (
    <>
      <tr>
        {row1.map((element) => {
          return (
            <CalendarSeat
              key={element}
              currentMonth={currentMonth}
              day={element}
              seatDisplay={seatDisplay}
            />
          );
        })}
      </tr>

      <tr>
        {row2.map((element) => {
          return (
            <CalendarSeat
              key={element}
              currentMonth={currentMonth}
              day={element}
              seatDisplay={seatDisplay}
            />
          );
        })}
      </tr>

      <tr>
        {row3.map((element) => {
          return (
            <CalendarSeat
              key={element}
              currentMonth={currentMonth}
              day={element}
              seatDisplay={seatDisplay}
            />
          );
        })}
      </tr>

      <tr>
        {row4.map((element) => {
          return (
            <CalendarSeat
              key={element}
              currentMonth={props.currentMonth}
              day={element}
              seatDisplay={seatDisplay}
            />
          );
        })}
      </tr>
      <tr>
        {row5.map((element) => {
          return (
            <CalendarSeat
              key={element}
              currentMonth={props.currentMonth}
              day={element}
              seatDisplay={seatDisplay}
            />
          );
        })}
      </tr>
    </>
  );
};

export default CalendarBody;
