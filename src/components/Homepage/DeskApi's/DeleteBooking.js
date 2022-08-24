const DeleteBooking = (currentMonth, currentDay) => {
  let bookings = localStorage.getItem("bookings");
  bookings = JSON.parse(bookings);

  delete bookings[currentMonth][currentDay];
  localStorage.setItem("bookings", JSON.stringify(bookings));
};

export default DeleteBooking;
