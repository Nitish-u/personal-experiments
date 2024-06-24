import { configureStore } from "@reduxjs/toolkit";
import todoInput from "./slices/todoInput";
import displayTodo from "./slices/displayTodo";

const store = configureStore({
    reducer:{
        inputFieldEdit: todoInput,
        todoList:displayTodo
    }
})

export default store;