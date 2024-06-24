// src/components/Counter.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, zero } from '../redux/slice';

function Counter() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.value);

  return (
    <div>
      <p>Counter: {counter}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(zero())}>Zero(0)</button>
    </div>
  );
}

export default Counter;
