import React, {useState} from 'react';
import classes from "./Counter.module.scss"

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  const toggleCounter = () => {
    setCounter(counter + 1)
  }
  return (
    <div className={classes.btn}>
      <div>{counter}</div>
      <button onClick={toggleCounter}>increment</button>
    </div>
  );
};


