import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [state, setState] = useState(false);

  useEffect(() => {
    console.log('New state', state);
  }, [state]);

  const handleClick = () => {
    setState(prevState => !prevState);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 data-cy="state-label">
          State: {state ? "Active" : "Inactive"}
        </h1>
        <button data-cy="button" onClick={handleClick}>
          Toggle State
        </button>
      </header>
    </div>
  );
}

export default App;
