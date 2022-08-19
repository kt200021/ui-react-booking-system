const ModifyBooking = (desk, color) => {
  const { row, col, location, month, day } = desk;
  const blrData = JSON.parse(localStorage.getItem("blrData"));

  //console.log(month, day);

  console.log(blrData[month][day]);
  blrData[month][day][row][col - 1] = color;
  console.log(blrData[month][day][row]);
  console.log(blrData[month][day][row][col - 1]);
  localStorage.setItem("blrData", JSON.stringify(blrData));
  const d = JSON.parse(localStorage.getItem("blrData"));

  // const d1 = d[month][day];
  //console.log(d, d1);
};
export default ModifyBooking;
