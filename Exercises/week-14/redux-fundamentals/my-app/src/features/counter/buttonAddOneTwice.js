import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { incrementRandomAndCount } from "./counterSlice";
import styles from "./Counter.module.css";

export function AddToRandomAndCounter() {
  const dispatch = useDispatch();
  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Add random twice"
          onClick={() => dispatch(incrementRandomAndCount())}
        >
          Add one for both counters
        </button>
      </div>
    </div>
  );
}
