// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slice';
import inputFieldState from './todoSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    inputForTodo:inputFieldState
  },
});

export default store;
