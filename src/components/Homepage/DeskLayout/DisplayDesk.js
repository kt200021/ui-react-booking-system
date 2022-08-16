import React, { useRef } from "react";
import Seat from "./Seat";

const DisplayDesk = (props) => {
  const prevSelected = useRef("empty");
  const { deskLayout, displayClass } = props;
  const { A: rowA, B: rowB, C: rowC } = deskLayout;

  //ask this
  const seatClick = (e) => {
    if (e.target.classList.contains("seat")) {
      if (prevSelected.current !== "empty") {
        console.log(prevSelected.current);
        prevSelected.current.setAttribute("data-color", 2);
      }
      props.changeSeat(e.target.innerText);
      e.target.setAttribute("data-color", 3);
      prevSelected.current = e.target;
    }
  };

  return (
    <div className={displayClass} onClick={seatClick}>
      <section className="row-A seats-row">
        {rowA.map((element, index) => {
          return (
            <Seat
              key={index + 1}
              seatRow={"A"}
              seatNumber={index + 1}
              seatColor={element}
            />
          );
        })}
      </section>
      <section className="row-B seats-row">
        {rowB.map((element, index) => {
          return (
            <Seat
              key={index + 1}
              seatRow={"B"}
              seatNumber={index + 1}
              seatColor={element}
            />
          );
        })}
      </section>
      <section className="row-C seats-row">
        {rowC.map((element, index) => {
          return (
            <Seat
              key={index + 1}
              seatRow={"C"}
              seatNumber={index + 1}
              seatColor={element}
            />
          );
        })}
      </section>
    </div>
  );
};

export default DisplayDesk;
