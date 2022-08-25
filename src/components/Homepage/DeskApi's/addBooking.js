const AddBooking = (desk) => {
  const bookings = JSON.parse(localStorage.getItem("bookings"));

  const { row, col, month, day } = desk;

  bookings[month] = bookings[month] ? bookings[month] : {};
  bookings[month][day] = {
    row: row,
    col: col,
  };
  localStorage.setItem("bookings", JSON.stringify(bookings));
  console.log(bookings);
  //console.log(bookings);
};
export default AddBooking;
