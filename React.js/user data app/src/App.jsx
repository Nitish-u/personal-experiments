import { useState } from "react";
import InputBoxes from "./components/inputboxes.jsx/input";
import InvalidPopUp from "./components/popup/invalidPopUp";

function App() {
  window.users = [];
  const [newuser, setNewUser] = useState([]);
  const [val, setVal] = useState({
    user: "Ram",
    age: "18",
  });
  const [isValid, setIsValid] = useState(true);
  const submitHndlr = (e) => {
    e.preventDefault();
    const user = val.user;
    const age = val.age;
    if (!user.match(/[a-zA-Z]/g)) {
      window.msg =
        "Please enter a valid user name (user name should not be only numbers)!";
      setIsValid(false);
      return;
    } else if (age < 0 || age > 150) {
      window.msg = "Please enter a valid age (-1 < age < 150)";
      setIsValid(false);
      return;
    } else if (user == "") {
      window.msg = "Please enter a valid user name.";
      setIsValid(false);
      return;
    } else if (age == "") {
      window.msg = "Please enter a valid age.";
      setIsValid(false);
      return;
    }
    usersCreater(`${user} (${age} Years)`);
  };
  function usersCreater(user) {
    const data = <p key={Math.floor(Math.random() * 100)}>{user}</p>;
    setNewUser((prevState) => {
      return [...prevState, data];
    });
  }

  return (
    <>
      <InputBoxes
        onChangeFun={setVal}
        inputValue={val}
        submitHndlr={submitHndlr}
        users={newuser}
      />
      {!isValid && <InvalidPopUp msg={window.msg} clickHndlr={setIsValid} />}
    </>
  );
}

export default App;
