import React from "react";
import DisplayDesk from "../DeskLayout/DisplayDesk";
const SelectDesk = (props) => {
  const submitDesk = () => {
    //console.log("submitted");
    props.changeIndex(1);
  };
  const backDesk = () => {
    props.changeIndex(2);
  };

  const blrData = JSON.parse(localStorage.getItem("blrData"));

  const deskLayout = blrData[5][5];
  // console.log(deskLayout);
  return (
    <section className="select-desk">
      <h1 className="select-desk-header">Choose a desk</h1>
      <DisplayDesk deskLayout={deskLayout} currentSelect={3} />
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
          onSubmit={submitDesk}
        />
      </div>
    </section>
  );
};
export default SelectDesk;
