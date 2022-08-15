import React, { useState } from "react";
import DisplayDesk from "../DeskLayout/DisplayDesk";
import AddBooking from "../DeskApi's/AddBooking";
import DeleteBooking from "../DeskApi's/DeleteBooking";
import ModifyBooking from "../DeskApi's/ModifyBooking";
const SelectDesk = (props) => {
  const { month, day, overlay } = props;
  const [seat, setSeat] = useState("");
  const changeSeat = (newSeat) => {
    setSeat(() => {
      return newSeat;
    });
  };
  const submitDesk = (e) => {
    const deskString = seat;
    const deskRow = deskString[0];
    const lengthString = deskString.length;
    const deskNumber = parseInt(deskString.slice(2, lengthString));
    let newBooking = {
      row: deskRow,
      col: deskNumber,
      location: "Bangalore",
      month: month,
      day: day,
    };

    // console.log(seat);
    AddBooking(newBooking);
    props.changeIndex(1);
  };
  const submitDeskOverlay = (cancelledBooking) => {
    //   console.log("Form details");
    //   console.log("Location Selected:", locationValue);
    //   console.log("date selected:", dateValue, "/", monthValue, "/2022");
    //   console.log("seat selected", deskRow + deskNumber);

    const deskString = seat;
    const deskRow = deskString[0];
    const lengthString = deskString.length;
    const deskNumber = parseInt(deskString.slice(2, lengthString));

    console.log("cancelled booking:", cancelledBooking);
    const newBooking = { ...cancelledBooking, row: deskRow, col: deskNumber };
    console.log(newBooking);
    DeleteBooking(month, day);
    ModifyBooking(cancelledBooking, 2);
    AddBooking(newBooking);
    ModifyBooking(newBooking, 0);
  };

  const backDesk = () => {
    props.changeIndex(2);
  };

  const blrData = JSON.parse(localStorage.getItem("blrData"));

  console.log(month, day);
  const deskLayout = blrData[month][day];
  console.log(deskLayout);
  let classOverlay, deskOverlay;
  if (overlay) classOverlay = "desk-layout-overlay";
  else classOverlay = "desk-layout";

  if (overlay) deskOverlay = "desk-overlay";
  else deskOverlay = "";
  return (
    <section className={deskOverlay}>
      <section className="select-desk">
        <h1 className="select-desk-header">Choose a desk</h1>
        <DisplayDesk
          displayClass={classOverlay}
          deskLayout={deskLayout}
          changeSeat={changeSeat}
          currentSelected={3}
        />
        <div className="submit-buttons">
          <div>
            <label className="desk-error hidden">Invalid desk</label>
          </div>
          <button className="back-seat form-buttons" onClick={backDesk}>
            Back
          </button>
          <input
            type="submit"
            className="submit-desk form-buttons"
            onClick={
              overlay
                ? () => {
                    submitDeskOverlay(props.overlayObj);
                  }
                : submitDesk
            }
          />
        </div>
      </section>
    </section>
  );
};
export default SelectDesk;
