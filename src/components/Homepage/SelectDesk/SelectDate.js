import React, { useRef } from "react";
import useChange from "../../hooks/changeState";

const SelectDate = (props) => {
  const dateChosen = useRef();
  const [dateError, , changeDateError] = useChange(false);

  const dateCheck = (dateString, currentDate) => {
    let monthValue1 = dateString[5] + dateString[6];
    monthValue1 = parseInt(monthValue1);
    let dateValue1 = dateString[8] + dateString[9];
    dateValue1 = parseInt(dateValue1);
    console.log(currentDate);
    const monthValue2 = currentDate.getMonth() + 1;

    const dateValue2 = currentDate.getDate();

    console.log(monthValue1, monthValue2);
    console.log(dateValue1, dateValue2);
    if (monthValue1 > monthValue2) {
      return true;
    } else if (monthValue1 < monthValue2) return false;
    else {
      if (dateValue1 >= dateValue2) return true;
      else return false;
    }
  };
  const submitDate = () => {
    const dateString = dateChosen.current.value;
    let currentDate = new Date();

    if (dateString && dateCheck(dateString, currentDate)) {
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
