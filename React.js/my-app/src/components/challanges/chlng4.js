// import { useState } from 'react';

export default function FeedbackForm() {
//   const [name, setName] = useState('');

  function handleClick() {
    // setName(prompt('What is your name?'));
    alert(`Hello, ${prompt('What is your name?')}!`);
  }

  return (
    <button onClick={handleClick}>
      Greet
    </button>
  );
}
