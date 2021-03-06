import React from 'react';
import './input_field.css';

export default class SelectField extends React.Component {
  render() {
    const { label, name, options, value, onChange } = this.props;

    return(
      <div className="input-field">
        <label
          className=",nput-field__label"
          htmlFor={name}
        >
          {label}
        </label>
        <select
          className="input-field__text-input"
          name={name}
          id={name}
          value={value}
          onChange={onChange}
        >
          {options.map(option =>
            <option
              value={option.value}
              key={option.label}
            >
              {option.label}
            </option>
          )}
        </select>
      </div>
    );
  }
}