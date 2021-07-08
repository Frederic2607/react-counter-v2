import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Counter = (props) => {
  const { counter, setCounter, item, index } = props;

  const handleDecrement = () => {
    const newCounter = [...counter];
    newCounter[index] = newCounter[index] - 1;
    setCounter(newCounter);
  };

  const handleIncrement = () => {
    const newCounter = [...counter];
    newCounter[index] = newCounter[index] + 1;
    setCounter(newCounter);
  };

  const handleReset = () => {
    const newCounter = [...counter];
    newCounter[index] = 0;
    setCounter(newCounter);
  };

  return (
    <div className="wrapper-counter">
      <div className="counter">
        <FontAwesomeIcon
          className="minus"
          icon="minus"
          size="3x"
          onClick={handleDecrement}
        />
        <div className="count">{item} </div>
        <FontAwesomeIcon
          className="plus"
          icon="plus"
          size="3x"
          onClick={handleIncrement}
        />
      </div>

      <button className="reset" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
};

export default Counter;
