import { useState } from 'react';

const App = () => {
  const [counter, setCounter] = useState(0);

  const handleDecrementCounter = () => {
    setCounter(c => c - 1);
  };

  const handleIncrementCounter = () => {
    setCounter(c => c + 1);
  };

  return (
    <>
      <h1>Simple React Counter</h1>
      <div>
        <button type="button" onClick={handleDecrementCounter}>
          Decrement
        </button>
        <span>{counter}</span>
        <button type="button" onClick={handleIncrementCounter}>
          Increment
        </button>
      </div>
    </>
  );
};

export default App;
