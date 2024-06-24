import React, { useState } from "react";
import "../../components-css/form.css";
export default function Form() {
  const [input, setInput] = useState({
    name: "",
    branch: "*",
    rollno: "",
  });
  function changeHndlr(identifier, value) {
    switch (identifier) {
      case "name":
        setInput((prevState) => {
          return { ...prevState, [identifier]: value };
        });
        break;
      case "branch":
        setInput((prevState) => {
          return { ...prevState, [identifier]: value };
        });
        break;
      case "rollno":
        setInput((prevState) => {
          return { ...prevState, [identifier]: value };
        });
        break;
      case "reset":
        setInput(() => {
          return { name: "", branch: "", rollno: "" };
        });
        // setInput("");
        break;
    }
  }

  function submitHandler(obj) {
    obj.preventDefault();
    const student = {
      stdName: obj.target[0].value,
      branch: obj.target[1].value,
      rollno: obj.target[2].value,
    };
    console.log(student);
  }
  return (
    <>
      <h1>Student Details form</h1>
      <form onSubmit={submitHandler}>
        <input
          onChange={(e) =>
            changeHndlr(e.target.getAttribute("name"), e.target.value)
          }
          type="text"
          name="name"
          placeholder="Enter your name"
          value={input.name}
        />
        <select
          name="branch"
          value={input.branch}
          onChange={(e) =>
            changeHndlr(e.target.getAttribute("name"), e.target.value)
          }
        >
          <option value="*">-Select-Branch-</option>
          <option value="cse">Computer Science and Engineering</option>
          <option value="me">Mechanical Engineering</option>
          <option value="ce">Civil Engineering</option>
        </select>
        <input
          onChange={(e) =>
            changeHndlr(e.target.getAttribute("name"), e.target.value)
          }
          type="number"
          name="rollno"
          placeholder="Enter your Roll no."
          value={input.rollno}
        />
        <input type="submit" />
      </form>
        <button
          name="reset"
          onClick={(e) => changeHndlr(e.target.getAttribute("name"))}
        >
          Reset
        </button>
    </>
  );
}
