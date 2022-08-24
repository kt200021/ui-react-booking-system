import React, { useRef } from "react";
import Seat from "./seat";

const DisplayDesk = (props) => {
  const prevSelected = useRef("empty");
  const { deskLayout, currentSeat } = props;
  const { A: rowA, B: rowB, C: rowC } = deskLayout;

  // console.log("display desk rendered");
  //ask this
  const seatClick = (e) => {
    if (e.target.classList.contains("seat")) {
      const dataColor = e.target.getAttribute("data-color");
      if (dataColor === "2") {
        if (prevSelected.current !== "empty") {
          prevSelected.current.setAttribute("data-color", 2);
        }
        props.changeSeat(e.target.innerText);
        e.target.setAttribute("data-color", 3);
        prevSelected.current = e.target;
      }
    }
  };

  return (
    <div className="desk-layout" onClick={seatClick}>
      <section className="row-A seats-row">
        {rowA.map((element, index) => {
          return (
            <Seat
              key={index + 1}
              seatRow={"A"}
              seatNumber={index + 1}
              seatColor={element}
              currentSeat={currentSeat}
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
              currentSeat={currentSeat}
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
              currentSeat={currentSeat}
            />
          );
        })}
      </section>
    </div>
  );
};

export default DisplayDesk;
