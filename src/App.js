import React from 'react';
import './App.css';
import JobItem from './components/job_list_element';
import jobs from './data/jobs';

const items = ['banana', 'apple', 'orange'];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">
          Creating a Reusable List Component
        </h1>
      </header>
      {jobs.map(job =>
        <JobItem 
          title={job.title}
          company={job.company}
          location={job.location}
          salary={job.salary}
          key={job.id}
        />
      )}
    </div>
  );
}

export default App;
