import React from "react";

const SelectLocation = (props) => {
  const submitLocation = () => {
    props.changeIndex(2);
  };
  return (
    <section className="select-location">
      <label className="location-label">Select Location : </label>

      <select id="location">
        <option
          value="Bangalore"
          className="option-location"
          defaultValue={true}
        >
          Bangalore
        </option>
        <option value="Gurgaon" className="option-location">
          Gurgaon
        </option>
      </select>
      <br />
      <button className="submit-location form-buttons" onClick={submitLocation}>
        Next
      </button>
    </section>
  );
};
export default SelectLocation;
