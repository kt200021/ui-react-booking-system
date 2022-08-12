import React from "react";
import Seat from "./Seat";
const DisplayDesk = (props) => {
  //console.log(props);
  const { deskLayout, currentSelected } = props;
  ///console.log(deskLayout);
  const { A: rowA, B: rowB, C: rowC } = deskLayout;
  //console.log(deskLayout);
  const seatClick = (e) => {
    if (e.target.classList.contains("seat")) {
      //console.log(e.target.innerText);
      props.changeSeat(e.target.innerText);
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
