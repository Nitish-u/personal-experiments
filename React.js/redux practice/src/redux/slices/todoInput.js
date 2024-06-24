import { createSlice } from "@reduxjs/toolkit";

const editInputFeild = createSlice({
    name:"editInputFeild",
    initialState:{
        value:""
    },
    reducers:{
        change:(state,action) => {return {...state,value:action.payload}}
    }
})

export const {change} = editInputFeild.actions;
export default editInputFeild.reducer;