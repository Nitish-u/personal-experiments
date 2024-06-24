import { useSelector } from "react-redux";
import Inputs from "./components/inputs";
import { nanoid } from "@reduxjs/toolkit";
function App() {
  const todoCollection = useSelector((state) => state.todoList.todos);
  const style ={
    card:{
      padding:"1rem",
      backgroundColor:"black",
      color:"white",
      margin:"0.25rem 0",
      maxWidth:"30rem",
      display:"flex",
      justifyContent:"space-between",
      width:"fit-content",
      minWidth:"10rem",
      gap:"0.5rem"
    }
  }
  return (
    <>
      <Inputs />
      <div>
        {todoCollection.map((todo) => (
          <div key={nanoid()} style={style.card}>{todo}<button>X</button></div>
        ))}
      </div>
    </>
  );
}

export default App;
