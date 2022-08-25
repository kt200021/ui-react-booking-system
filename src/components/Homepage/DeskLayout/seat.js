import React from "react";

const Seat = (props) => {
  //console.log("Seat rendered");
  const { seatRow, seatNumber, seatColor, currentSeat } = props;
  const seatId = seatRow + "-" + seatNumber;
  const seatClass = seatRow + " seat " + seatId;
  let dataColor = seatColor;

  if (
    currentSeat &&
    currentSeat.row === seatRow &&
    currentSeat.col == seatNumber
  ) {
    dataColor = "4";
  }
  return (
    <div className={seatClass} data-number={seatNumber} data-color={dataColor}>
      {seatId}
    </div>
  );
};
export default Seat;
