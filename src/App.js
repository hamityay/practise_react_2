import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from "./components/counter";

const items = ['banana', 'apple', 'orange'];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {items.map((item, index) =>
          <Counter name={item} key={index} />
        )}
      </header>
    </div>
  );
}

export default App;
