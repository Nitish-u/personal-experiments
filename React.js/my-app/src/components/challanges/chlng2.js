//Fix stuck form inputs 
import { useState } from "react";
export default function Form() {
  let firstName = '';
  let lastName = '';

  const [fname, setFname] = useState(firstName);
  const [lname, setLname] = useState(lastName);

  function handleFirstNameChange(e) {
    firstName = e.target.value;
    setFname(firstName);
  }

  function handleLastNameChange(e) {
    lastName = e.target.value;
    setLname(lastName);
  }

  function handleReset() {
    firstName = '';
    lastName = '';
    setFname(firstName);
    setLname(lastName);
  }

  return (
    <form onSubmit={e => e.preventDefault()}>
      <input
        placeholder="First name"
        value={fname}
        onChange={handleFirstNameChange}
      />
      <input
        placeholder="Last name"
        value={lname}
        onChange={handleLastNameChange}
      />
      <h1>Hi, {fname} {lname}</h1>
      <button onClick={handleReset}>Reset</button>
    </form>
  );
}
