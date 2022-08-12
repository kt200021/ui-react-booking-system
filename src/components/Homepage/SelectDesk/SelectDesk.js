import React, { useState } from "react";
import DisplayDesk from "../DeskLayout/DisplayDesk";
import AddBooking from "../DeskApi's/AddBooking";
const SelectDesk = (props) => {
  const { month, day } = props;
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
  const backDesk = () => {
    props.changeIndex(2);
  };

  const blrData = JSON.parse(localStorage.getItem("blrData"));
  //console.log(month, day);
  const deskLayout = blrData[month][day];
  // console.log(deskLayout);
  return (
    <section className="select-desk">
      <h1 className="select-desk-header">Choose a desk</h1>
      <DisplayDesk
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
          onClick={submitDesk}
        />
      </div>
    </section>
  );
};
export default SelectDesk;
