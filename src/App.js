import React from 'react';
import './App.css';
import List from './components/list';
import Jobıtem from './components/job_list_element'
import jobs from './data/jobs';
import SimpleJobElement from './components/simple_job_element';

const items = ['banana', 'apple', 'orange'];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">
          Creating a Reusable List Component
        </h1>
      </header>
      <List items={jobs} itemElement={SimpleJobElement} />
    </div>
  );
}

export default App;
