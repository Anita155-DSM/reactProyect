import { useState } from "react";

export const useCounter = (initialValue = 1) => {
  const [count, setCount] = useState(initialValue);

  const handleIncrement = (number) => {
    // Usar función de actualización segura y evitar que el contador baje de 1
    setCount((prev) => Math.max(1, prev + number));
  };

  const handleDecrement = (number) => {
    const resta = count - number;

    if(resta < 0) return

    setCount(count - number);
  };

  const handleReset = () => {
    setCount(initialValue);
  };

  return {
    count,
    handleIncrement,
    handleDecrement,
    handleReset,
  };
};
