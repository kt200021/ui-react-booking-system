import React, { useRef } from "react";
import useChange from "../../hooks/changeState";

const SelectDate = (props) => {
  const dateChosen = useRef();
  const [dateError, , changeDateError] = useChange(false);

  const submitDate = () => {
    const dateString = dateChosen.current.value;
    if (dateString) {
      let monthValue = dateString[5] + dateString[6];
      monthValue = parseInt(monthValue);
      let dateValue = dateString[8] + dateString[9];
      dateValue = parseInt(dateValue);

      props.changeIndex(3);
      props.changeMonth(monthValue);
      props.changeDay(dateValue);
    } else {
      changeDateError();
    }
  };

  const backDate = () => {
    props.changeIndex(1);
  };
  return (
    <section className="select-date">
      <label className="select-date-header">Select Date :</label>
      <input type="date" id="date-selected" ref={dateChosen} />
      <br />
      {dateError ? (
        <div className="error">
          <label className="date-error">Date cannot be empty</label>
        </div>
      ) : (
        ""
      )}
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
