import React from "react";

const SelectDate = (props) => {
  const submitDate = () => {
    props.changeIndex(3);
  };
  const backDate = () => {
    props.changeIndex(1);
  };
  return (
    <section className="select-date">
      <label>Select Date:</label>
      <input type="date" id="date-selected" />
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
