import React from 'react';
import './input_field.css';

export default class CheckboxField extends React.Component {
  render() {
    const { label, name, value, onChange } = this.props;
    
    return(
      <div className="checkbox-field">
        <input 
          type="checkbox"
          name={name}
          id={name}
          value={value}
          onChange={onChange}
        />
        <label htmlFor={name}>{label}</label>
      </div>
    );
  }
}