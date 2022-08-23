import React, { useEffect, useRef } from "react";
import DeleteBooking from "../Homepage/DeskApi's/DeleteBooking";
import ModifyBooking from "../Homepage/DeskApi's/ModifyBooking";

const SeatOverlay = (props) => {
  //console.log(props);
  const { currentDay, currentMonth, seat } = props;
  const overlayBox = useRef();
  console.log("seat overlay re rendered");

  const handleWindowClick = (e) => {
    if (
      e.target !== overlayBox.current &&
      !overlayBox.current.contains(e.target)
    ) {
      props.changeOverlay();
    }
  };

  const cancelSeat = (e) => {
    let cancelledBooking = {
      row: seat.row,
      col: seat.col,
      location: "Bangalore",
      month: currentMonth,
      day: currentDay,
    };
    // console.log(cancelledBooking);
    DeleteBooking(currentMonth, currentDay);
    ModifyBooking(cancelledBooking, 2);
    //console.log("ggegeh");
    props.changeMessage("Seat cancelled !");
    props.changeBookingsUpdate();
    setTimeout(() => {
      props.changeOverlay();
      props.changeMessage("");
    }, 1000);
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
      <section className="seat-overlay" onClick={handleWindowClick}>
        <section className="overlay-message" ref={overlayBox}>
          <p className="seat-no-overlay">
            <span className="overlay-info">
              {" "}
              <b> Date :</b> &nbsp;
              {currentDay + "/" + currentMonth}/2022
            </span>
            <br />
            <span className="overlay-info">
              <b> Seat Selected :</b> &nbsp;{seat.row + seat.col}
            </span>
          </p>
          <button
            className="cancel-seat form-buttons"
            data-row=""
            data-col=""
            onClick={cancelSeat}
          >
            Cancel Seat
          </button>
          <button
            className="edit-seat form-buttons"
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
