import React, { useRef } from "react";

const SelectDate = (props) => {
  const dateChosen = useRef();
  const submitDate = () => {
    //console.log(dateChosen.current.value);
    const dateString = dateChosen.current.value;
    let monthValue = dateString[5] + dateString[6];
    monthValue = parseInt(monthValue);
    let dateValue = dateString[8] + dateString[9];
    dateValue = parseInt(dateValue);

    props.changeIndex(3);
    props.changeMonth(monthValue);
    props.changeDay(dateValue);
  };
  const backDate = () => {
    props.changeIndex(1);
  };
  return (
    <section className="select-date">
      <label>Select Date:</label>
      <input type="date" id="date-selected" ref={dateChosen} />
      <br />
      <div className="error">
        <label className="date-error hidden">Date cannot be empty</label>
      </div>
      <div className="date-buttons">
        <button className="back-location form-buttons" onClick={backDate}>
          Back
        </button>
        <button className="submit-date form-buttons " onClick={submitDate}>
          Next
        </button>
      </div>
    </section>
  );
};

export default SelectDate;
