import React from 'react';
import './input_field.css';

export default class CheckboxField extends React.Component {
  render() {
    const { label, name } = this.props;
    
    return(
      <div className="checkbox-field">
        <input 
          type="checkbox"
          name={name}
          id={name}
        />
        <label htmlFor={name}>{label}</label>
      </div>
    );
  }
}