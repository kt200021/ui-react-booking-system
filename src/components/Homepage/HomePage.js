import React, { useState } from "react";
import Nav from "./Nav/Nav.js";
import SelectDate from "./SelectDesk/SelectDate.js";
import SelectDesk from "./SelectDesk/SelectDesk.js";
import SelectLocation from "./SelectDesk/SelectLocation.js";
const Home = () => {
  const [index, setIndex] = useState(1);
  const [month, setMonth] = useState();
  const [day, setDay] = useState();
  const changeIndex = (newIndex) => {
    setIndex(() => {
      return newIndex;
    });
  };
  const changeMonth = (newMonth) => {
    setMonth(() => {
      return newMonth;
    });
  };
  const changeDay = (newDay) => {
    setDay(() => {
      return newDay;
    });
  };
  //console.log(index);
  return (
    <>
      <Nav />
      {index === 1 && <SelectLocation changeIndex={changeIndex} />}
      {index === 2 && <SelectDate changeIndex={changeIndex} />}
      {index === 3 && (
        <SelectDesk month={month} day={day} changeIndex={changeIndex} />
      )}
    </>
  );
};
export default Home;
