import React from "react";
import Nav from "./Nav/Nav.js";
import SelectDate from "./SelectDesk/SelectDate.js";
import SelectDesk from "./SelectDesk/SelectDesk.js";
import SelectLocation from "./SelectDesk/SelectLocation.js";
import useChange from "../hooks/changeState.js";
import SuccessMessage from "../successMessage.js";
import "../styles.css";
const message = "Booking added successfully !";
const Home = () => {
  const [index, changeIndex] = useChange(1);
  const [month, changeMonth] = useChange();
  const [day, changeDay] = useChange();
  // const [message, changeMessage] = useChange();

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
