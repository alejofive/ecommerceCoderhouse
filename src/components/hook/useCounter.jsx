import { useState } from "react";

export const useCounter = (min, max) => {
  const [count, setCount] = useState(min);

  const handleAdd = () => {
    if (count < max) {
      setCount(count + 1);
    }
  };

  const handleSubtract = () => {
    if (count > min) {
      setCount(count - 1);
    }
  };

  return { count, handleAdd, handleSubtract };
};
