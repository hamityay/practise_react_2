import React from 'react';
import './input_field.css';

export default class CheckboxField extends React.Component {
  handleChange(e) {
    const { name, checked } = e.target;
    console.log(name, ' => ', checked);
  }

  render() {
    const { label, name } = this.props;
    
    return(
      <div className="checkbox-field">
        <input 
          type="checkbox"
          name={name}
          id={name}
          onChange={this.handleChange}
        />
        <label htmlFor={name}>{label}</label>
      </div>
    );
  }
}