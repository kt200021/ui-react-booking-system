import React, { useState } from "react";
import DeleteBooking from "../Homepage/DeskApi's/DeleteBooking";
import ModifyBooking from "../Homepage/DeskApi's/ModifyBooking";
import AddBooking from "../Homepage/DeskApi's/AddBooking";
const SeatOverlay = (props) => {
  const { currentDay, currentMonth, seat } = props;

  const cancelSeat = (e) => {
    let bookings = localStorage.getItem("bookings");
    bookings = JSON.parse(bookings);

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

  const editSeat = (e) => {
    const blrData = JSON.parse(localStorage.getItem("blrData"));

    const deskLayout = blrData[currentMonth][currentDay];

    // props.changeOverlay();
    props.changeDesk();
    const cRow = seat.row;
    const cCol = seat.col;
    const currentSelected = cRow + cCol;

    //   console.log(`${cRow}-${cCol}`);
    //   const currentSeat = document.querySelector(`.${cRow}-${cCol}`);
    //   console.log(currentSeat);
    //   currentSeat.style.backgroundColor = "yellow";

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
      <section className="seat-overlay">
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
export default SeatOverlay;
