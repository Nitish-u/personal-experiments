// in this challnge we had to make synced value inputs i.e., what we write in one input gets written in the other input box at the sametime.
// this challange was based on lifiting state up concept.
import { useState } from 'react';

export default function SyncedInputs() {
  const [text, setText] = useState('');
  return (
    <>
      <Input label="First input" setText={setText} txt={text} />
      <Input label="Second input" setText={setText} txt={text} />
    </>
  );
}

function Input({ label,setText,txt:text }) {

  function handleChange(e) {
    setText(e.target.value);
  }

  return (
    <label>
      {label}
      {' '}
      <input
        value={text}
        onChange={handleChange}
      />
    </label>
  );
}
