import React from "react";
import CalendarSeat from "./CalendarSeat";
const CalendarBody = (props) => {
  //console.log(bookings);

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
              currentMonth={props.currentMonth}
              day={element}
            />
          );
        })}
      </tr>

      <tr>
        {row2.map((element) => {
          return (
            <CalendarSeat
              key={element}
              currentMonth={props.currentMonth}
              day={element}
            />
          );
        })}
      </tr>

      <tr>
        {row3.map((element) => {
          return (
            <CalendarSeat
              key={element}
              currentMonth={props.currentMonth}
              day={element}
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
            />
          );
        })}
      </tr>
    </>
  );
};

export default CalendarBody;
