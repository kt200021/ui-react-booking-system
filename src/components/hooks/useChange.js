import { useCallback, useState } from "react";

const useChange = (initialValue) => {
  const [index, setIndex] = useState(initialValue);

  const changeIndex = useCallback((value) => {
    setIndex(() => {
      return value;
    });
  }, []);
  const toggleIndex = useCallback(() => {
    setIndex((index) => {
      return !index;
    });
  }, []);
  return [index, changeIndex, toggleIndex];
};
export default useChange;
