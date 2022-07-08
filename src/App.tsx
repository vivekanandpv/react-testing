import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter((v) => {
      return v + 1;
    });
  };
  return (
    <div className='App'>
      <h3>Counter: {counter}</h3>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default App;
