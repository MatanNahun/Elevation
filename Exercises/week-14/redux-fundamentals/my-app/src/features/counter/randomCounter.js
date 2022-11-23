import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { incrementRandom, selectRandomCount } from "./counterSlice";
import styles from "./Counter.module.css";

export function RandomCounter() {
  const count = useSelector(selectRandomCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState("2");

  const incrementValue = Number(incrementAmount) || 0;

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(incrementRandom())}
        >
          get random number
        </button>
        <span className={styles.value}>{count}</span>
      </div>
    </div>
  );
}
