const ModifyBooking = (desk, color) => {
  const { row, col, month, day } = desk;
  const blrData = JSON.parse(localStorage.getItem("blrData"));

  blrData[month][day][row][col - 1] = color;
  console.log(blrData[month][day][row]);
  console.log(blrData[month][day][row][col - 1]);
  localStorage.setItem("blrData", JSON.stringify(blrData));
  //   const d = JSON.parse(localStorage.getItem("blrData"));
};
export default ModifyBooking;
