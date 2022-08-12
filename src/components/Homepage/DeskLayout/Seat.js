import React from "react";

const Seat = (props) => {
  const { seatRow, seatNumber, seatColor } = props;
  const seatId = seatRow + "-" + seatNumber;
  const seatClass = seatRow + " seat " + seatId;

  return (
    <div className={seatClass} data-number={seatNumber} data-color={seatColor}>
      <span className="seat-text">{seatId}</span>
    </div>
  );
};
export default Seat;
