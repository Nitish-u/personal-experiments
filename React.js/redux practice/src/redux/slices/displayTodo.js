import { createSlice } from "@reduxjs/toolkit";

const todoList = createSlice({
    name:"todos",
    initialState:{
        todos:[]
    },
    reducers:{
        createTodo:(state,action) => {
            const newTodoCollection = [...state.todos,action.payload];
            return {...state,todos:newTodoCollection}
        }
    }
})

export const {createTodo} = todoList.actions;
export default todoList.reducer;