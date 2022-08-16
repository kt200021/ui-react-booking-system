import React, { useEffect } from "react";
import DeleteBooking from "../Homepage/DeskApi's/DeleteBooking";
import ModifyBooking from "../Homepage/DeskApi's/ModifyBooking";

const SeatOverlay = (props) => {
  console.log(props);
  const { currentDay, currentMonth, seat } = props;
  console.log("seat overlay re rendered");

  const cancelSeat = (e) => {
    let cancelledBooking = {
      row: seat.row,
      col: seat.col,
      location: "Bangalore",
      month: currentMonth,
      day: currentDay,
    };
    console.log(cancelledBooking);
    DeleteBooking(currentMonth, currentDay);
    ModifyBooking(cancelledBooking, 2);
    props.changeOverlay();
  };

  const editSeat = () => {
    props.changeOverlay();
    props.changeDesk();
    const cancelledBooking = {
      row: seat.row,
      col: seat.col,
      location: "Bangalore",
      month: currentMonth,
      day: currentDay,
    };
    props.changeOverlayObj(cancelledBooking);
  };

  return (
    <>
      <section className="seat-overlay" onClick={() => props.changeOverlay()}>
        <section className="overlay-message">
          <h1 className="seat-no-overlay">
            Date: &nbsp;
            {currentDay + "/" + currentMonth}/2022
            <br />
            Seat selected: {seat.row + seat.col}
          </h1>
          <button
            className="cancel-seat"
            data-row=""
            data-col=""
            onClick={cancelSeat}
          >
            Cancel Seat
          </button>
          <button
            className="edit-seat"
            data-row=""
            data-col=""
            onClick={editSeat}
          >
            Edit Seat
          </button>
        </section>
      </section>
      <section className="desk-overlay hide">
        <section className="select-desk">
          <h1 className="select-desk-header">Choose a desk</h1>
          <div className="desk-layout">
            <section className="row-A seats-row"></section>
            <section className="row-B seats-row"></section>
            <section className="row-C seats-row"></section>
          </div>
          <div className="submit-buttons">
            <label className="desk-error hidden">Invalid desk</label>
            <input type="submit" className="submit-desk form-buttons" />
          </div>
        </section>
      </section>
    </>
  );
};
export default React.memo(SeatOverlay);
