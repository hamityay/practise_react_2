import React from 'react';
import './counter.css'

export default class Counter extends React.Component {
  state = {
    counter: 0
  };

  increment = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  };

  decrement = () => {
    this.setState({
      counter: this.state.counter - 1
    });
  };

  render() {
    return(
      <div className="counter-box">
        <button onClick={ this.increment }>+1</button>
        <span className={this.state.counter < 0 ? 'counter-box--danger' : ''}>
          { this.state.counter }
        </span>
        <button onClick={ this.decrement }>-1</button>
      </div>
    );
  }
}