//0-> red
//1-> grey
//2->white

const DeskData = () => {
  const deskList = [{}];
  const A = [1, 2, 1, 2, 2, 2, 2, 1, 2, 1];
  const B = [2, 2, 1, 0, 2, 2, 1, 2, 2, 1];
  const C = [0, 2, 2, 1, 2, 2, 2, 2, 1, 1];
  const deskObj = {
    A: A,
    B: B,
    C: C,
  };
  for (let index = 1; index <= 30; index++) {
    deskList.push(deskObj);
  }

  return deskList;
};
const deskList = DeskData();

// const MonthData=(deskList)=>{
// for (let index = 1; index < array.length; index++) {
//     const element = array[index];

// }

// }
const YearData = (deskList) => {
  const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  const yearObj = {};
  months.forEach((element) => {
    // console.log(element);
    yearObj[element] = deskList;
  });
  return yearObj;
};

const bangaloreData = YearData(deskList);
export default bangaloreData;

//console.log(bangalore);
