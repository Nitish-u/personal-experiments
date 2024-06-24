import React, { useState } from "react";
import "../../components-css/counter.css";
export default function Counter() {
  const [count, setCount] = useState(0);
  const [fntColor, setFntColor] = useState(1);
  const classArr = ["red","yellow","green"];
  const color = {
    color : classArr[fntColor]
  }
  function check(a) {
    if (a == 0) {
      setFntColor(1);
    } else if (a > 0) {
      setFntColor(2);
    } else {
      setFntColor(0);
    }
  }
  function increment() {
      setCount(count + 1);
      check(count+1);
  }
  function zero() {
      setCount(0);
      check(0);
  }
  function decrement() {
      setCount(count - 1);
      check(count-1);
  }
  return (
    <>
      <h1 style={color}>{count}</h1>
      <div className="btns">
        <button onClick={decrement}>Decrement</button>
        <button onClick={zero}>Zero</button>
        <button onClick={increment}>increment</button>
      </div>
    </>
  );
}
