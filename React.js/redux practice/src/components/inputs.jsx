import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { change } from '../redux/slices/todoInput';
import { createTodo } from '../redux/slices/displayTodo';


export default function Inputs() {
    const dispatch = useDispatch();
    const value = useSelector(state => state.inputFieldEdit.value);
    function clickHndlr(){
        dispatch(createTodo(value));
    }
    const styles = {
        input:{
            padding:"0.5rem",
            width:"20rem",
            cursor:"pointer"
        },
        btn:{
            padding:"0.5rem",
            margin:"0 1rem",
            cursor:"pointer"
        }
    }
  return (
    <div>
        <h1>Add todos</h1>
        <input type="text" placeholder='what you want to add today?' style={styles.input} value={value} onChange={e => dispatch(change(e.target.value))}/>
        <button style={styles.btn} onClick={clickHndlr}>Add todo</button>
    </div>
  )
}
