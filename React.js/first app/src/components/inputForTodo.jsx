import { useDispatch, useSelector } from "react-redux"
import {change}  from "../redux/todoSlice"

export default function InputForTodo(){
    const inputStyle = {
        padding:"0.5rem",
        width:"20rem",
        margin:"1rem 0"
    }
    const btn = {
        padding:"0.5rem",
        width:"5rem",
        margin:"0 1rem"
    }
    const dispatch = useDispatch()
const selector = useSelector(state => state.inputForTodo.value);
    return(
        <>
            <input type="text" placeholder="What you want to add today?" style={inputStyle} value={selector} onChange={e => dispatch(change(e.target.value))}/>
            <button style={btn}>Add todo</button>
        </>
    )
}