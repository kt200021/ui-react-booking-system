import { useEffect, useState } from "react";

const useChange = (initialValue) => {
  const [index, setIndex] = useState(initialValue);

  const changeIndex = (value) => {
    setIndex(() => {
      return value;
    });
  };
  const toggleIndex = () => {
    setIndex((index) => {
      return !index;
    });
  };
  return [index, changeIndex, toggleIndex];
};
export default useChange;
