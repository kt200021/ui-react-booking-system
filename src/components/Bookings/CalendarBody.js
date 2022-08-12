import React from "react";

const CalendarBody = (props) => {
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
      const deskNo = seat ? seat.row + seat.col : "";
      if (seat !== null) return `${deskNo}`;
      else return `--`;
    }
  };

  return (
    <>
      <tr>
        <td data-id="1" data-seat-row="" data-seat-col="">
          1 <br />
          <span className="calendar-seat">{seatDisplay(1)}</span>
        </td>
        <td data-id="2" data-seat-row="" data-seat-col="">
          2 <br />
          <span className="calendar-seat">{seatDisplay(2)}</span>
        </td>
        <td data-id="3" data-seat-row="" data-seat-col="">
          3 <br />
          <span className="calendar-seat">{seatDisplay(3)}</span>
        </td>
        <td data-id="4" data-seat-row="" data-seat-col="">
          4 <br />
          <span className="calendar-seat">{seatDisplay(4)}</span>
        </td>
        <td data-id="5" data-seat-row="" data-seat-col="">
          5 <br />
          <span className="calendar-seat">{seatDisplay(5)}</span>
        </td>
        <td data-id="6" data-seat-row="" data-seat-col="">
          6 <br />
          <span className="calendar-seat">{seatDisplay(6)}</span>
        </td>
        <td data-id="7" data-seat-row="" data-seat-col="">
          7 <br />
          <span className="calendar-seat">{seatDisplay(7)}</span>
        </td>
      </tr>
      <tr></tr>
      <tr>
        <td data-id="8" data-seat-row="" data-seat-col="">
          8 <br />
          <span className="calendar-seat">{seatDisplay(8)}</span>
        </td>
        <td data-id="9" data-seat-row="" data-seat-col="">
          9 <br />
          <span className="calendar-seat">{seatDisplay(9)}</span>
        </td>
        <td data-id="10" data-seat-row="" data-seat-col="">
          10 <br />
          <span className="calendar-seat">{seatDisplay(10)}</span>
        </td>
        <td data-id="11" data-seat-row="" data-seat-col="">
          11 <br />
          <span className="calendar-seat">{seatDisplay(11)}</span>
        </td>
        <td data-id="12" data-seat-row="" data-seat-col="">
          12 <br />
          <span className="calendar-seat">{seatDisplay(12)}</span>
        </td>
        <td data-id="13" data-seat-row="" data-seat-col="">
          13 <br />
          <span className="calendar-seat">{seatDisplay(13)}</span>
        </td>
        <td data-id="14" data-seat-row="" data-seat-col="">
          14 <br />
          <span className="calendar-seat">{seatDisplay(14)}</span>
        </td>
      </tr>
      <tr>
        <td data-id="15" data-seat-row="" data-seat-col="">
          15 <br />
          <span className="calendar-seat">{seatDisplay(15)}</span>
        </td>
        <td data-id="16" data-seat-row="" data-seat-col="">
          16 <br />
          <span className="calendar-seat">{seatDisplay(16)}</span>
        </td>
        <td data-id="17" data-seat-row="" data-seat-col="">
          17 <br />
          <span className="calendar-seat">{seatDisplay(17)}</span>
        </td>
        <td data-id="18" data-seat-row="" data-seat-col="">
          18 <br />
          <span className="calendar-seat">{seatDisplay(18)}</span>
        </td>
        <td data-id="19" data-seat-row="" data-seat-col="">
          19 <br />
          <span className="calendar-seat">{seatDisplay(19)}</span>
        </td>
        <td data-id="20" data-seat-row="" data-seat-col="">
          20 <br />
          <span className="calendar-seat">{seatDisplay(20)}</span>
        </td>
        <td data-id="21" data-seat-row="" data-seat-col="">
          21 <br />
          <span className="calendar-seat">{seatDisplay(21)}</span>
        </td>
      </tr>
      <tr>
        <td data-id="22" data-seat-row="" data-seat-col="">
          22 <br />
          <span className="calendar-seat">{seatDisplay(22)}</span>
        </td>
        <td data-id="23" data-seat-row="" data-seat-col="">
          23 <br />
          <span className="calendar-seat">{seatDisplay(23)}</span>
        </td>
        <td data-id="24" data-seat-row="" data-seat-col="">
          24 <br />
          <span className="calendar-seat">{seatDisplay(24)}</span>
        </td>
        <td data-id="25" data-seat-row="" data-seat-col="">
          25 <br />
          <span className="calendar-seat">{seatDisplay(25)}</span>
        </td>
        <td data-id="26" data-seat-row="" data-seat-col="">
          26 <br />
          <span className="calendar-seat">{seatDisplay(26)}</span>
        </td>
        <td data-id="27" data-seat-row="" data-seat-col="">
          27 <br />
          <span className="calendar-seat">{seatDisplay(27)}</span>
        </td>
        <td data-id="28" data-seat-row="" data-seat-col="">
          28 <br />
          <span className="calendar-seat">{seatDisplay(28)}</span>
        </td>
      </tr>
      <tr>
        <td data-id="29" data-seat-row="" data-seat-col="">
          29 <br />
          <span className="calendar-seat">{seatDisplay(29)}</span>
        </td>
        <td data-id="30" data-seat-row="" data-seat-col="">
          30 <br />
          <span className="calendar-seat">{seatDisplay(30)}</span>
        </td>
      </tr>
    </>
  );
};

export default CalendarBody;
