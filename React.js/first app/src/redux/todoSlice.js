import { createSlice } from "@reduxjs/toolkit";

const inputFieldState = createSlice({
    name: "inputFiledEdit",
    initialState:{
        value:""
    },
    reducers:{
        change:(state, action) => {return {...state,value:action.payload}},
    }
})

export const { change } = inputFieldState.actions;
export default inputFieldState.reducer;