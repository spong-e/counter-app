import React, { useState } from "react";

export default function LocalCounter() {
  const [count, setCount] = useState(0);

  //increment count by 1
  const increment = () => {
    setCount((count) => count + 1);
  };

  //decrement count by 1
  const decrement = () => {
    setCount((count) => count - 1);
  };

  //reset count to 0
  const reset = () => {
    setCount(0);
  };

  return (
    <div className="counter">
      <h1>React Local Counter</h1>
      <span className="counter__output">{count}</span>
      <div className="btn__container">
        <button className="control__btn" onClick={increment}>
          +
        </button>
        <button className="control__btn" onClick={decrement}>
          -
        </button>
        <button className="reset" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
}
