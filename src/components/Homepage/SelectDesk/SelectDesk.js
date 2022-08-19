import React from "react";
import DisplayDesk from "../DeskLayout/DisplayDesk";
import AddBooking from "../DeskApi's/AddBooking";
import DeleteBooking from "../DeskApi's/DeleteBooking";
import ModifyBooking from "../DeskApi's/ModifyBooking";
import useChange from "../../hooks/changeState";
const SelectDesk = (props) => {
  const {
    month,
    day,
    overlay,
    changeDesk,
    changeIndex,
    currentSeat,
    overlayObj,
  } = props;
  console.log("select desk rendered");
  const [seat, changeSeat] = useChange("");
  console.log(seat);

  const backEvent = overlay ? changeDesk : changeIndex;
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
    ModifyBooking(newBooking, 0);
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
    console.log(deskString);
    const deskNumber = parseInt(deskString.slice(2, lengthString));

    console.log("cancelled booking:", cancelledBooking);
    const newBooking = { ...cancelledBooking, row: deskRow, col: deskNumber };
    console.log(newBooking);
    DeleteBooking(month, day);
    ModifyBooking(cancelledBooking, 2);
    AddBooking(newBooking);
    ModifyBooking(newBooking, 0);
    props.changeDesk();
  };

  const backDesk = () => {
    backEvent(2);
  };

  const blrData = JSON.parse(localStorage.getItem("blrData"));

  const deskLayout = blrData[month][day];

  let classOverlay, deskOverlay;
  if (overlay) classOverlay = "select-desk-overlay";
  else classOverlay = "select-desk";

  if (overlay) deskOverlay = "desk-overlay";
  else deskOverlay = "";

  return (
    <section className={deskOverlay}>
      <section className={classOverlay}>
        <h1 className="select-desk-header">Choose a desk</h1>
        <DisplayDesk
          deskLayout={deskLayout}
          changeSeat={changeSeat}
          seat={seat}
          currentSeat={currentSeat}
          currentSelected={3}
        />
        <div className="submit-buttons">
          <button className="back-seat form-buttons" onClick={backDesk}>
            Back
          </button>
          <button
            className="submit-desk form-buttons"
            onClick={
              overlay
                ? () => {
                    submitDeskOverlay(overlayObj);
                  }
                : submitDesk
            }
            disabled={seat === "" ? true : false}
          >
            Submit
          </button>
        </div>
      </section>
    </section>
  );
};
export default SelectDesk;
