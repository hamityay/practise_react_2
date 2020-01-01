import React from 'react';
import './App.css';
// import List from './components/list';
// import Jobıtem from './components/job_list_element'
// import jobs from './data/jobs';
import JobCreationForm from './components/job_creation_form';

// const items = ['banana', 'apple', 'orange'];

class App extends React.Component {
  state = { isFormVisible: true };

  toggleFormVisible = () => {
    this.setState({
      isFormVisible: !this.state.isFormVisible
    });
  };

  render() {
    return(
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">
            Creating a Reusable List Component
          </h1>
        </header>
        {/* <List items={jobs} itemElement={Jobıtem} /> */}
        <button onClick={this.toggleFormVisible}>
          {this.state.isFormVisible ? 'Hide Form' : 'Show Form'}
        </button>
        <div style={{visibility: this.state.isFormVisible ? 'visible' : 'hidden'}}>
          <JobCreationForm />
        </div>
    </div>
    );
  }
}

export default App;
