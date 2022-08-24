import React from "react";
import Nav from "./Nav/nav.js";
import SelectDate from "./SelectDesk/selectDate";
import SelectDesk from "./SelectDesk/selectDesk";
import SelectLocation from "./SelectDesk/selectLocation";
import useChange from "../hooks/useChange";
import SuccessMessage from "../successMessage";
import "../styles.css";
const message = "Booking added successfully !";
const Home = () => {
  const [index, changeIndex] = useChange(1);
  const [month, changeMonth] = useChange();
  const [day, changeDay] = useChange();

  return (
    <>
      <Nav />
      <section className="form-header">
        <h1 className="form-header-text"> Book a new desk</h1>
      </section>
      {index === 1 && <SelectLocation changeIndex={changeIndex} />}
      {index === 2 && (
        <SelectDate
          changeDay={changeDay}
          changeMonth={changeMonth}
          changeIndex={changeIndex}
        />
      )}
      {index === 3 && (
        <SelectDesk
          month={month}
          day={day}
          changeIndex={changeIndex}
          overlay={false}
        />
      )}
      {index === 4 && (
        <SuccessMessage message={message} changeIndex={changeIndex} />
      )}
    </>
  );
};
export default Home;
