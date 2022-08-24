const SeatDisplay = (day, bookings, currentMonth) => {
  if (bookings !== null) {
    const seat =
      bookings[currentMonth] && bookings[currentMonth][day]
        ? bookings[currentMonth][day]
        : null;
    //console.log(seat);

    if (seat !== null) return { row: seat.row, col: seat.col };
    else return null;
  }
};
export default SeatDisplay;
