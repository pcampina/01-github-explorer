import { useState } from 'react';

export function Counter() {
  let [counter, setCounter] = useState(0);

  function increment() {
    setCounter(counter + 1);
  }

  return (
    <div>
      <h2>{ counter }</h2>
      <input type="button" value="Increment" onClick={increment} />
    </div>
  );
}
