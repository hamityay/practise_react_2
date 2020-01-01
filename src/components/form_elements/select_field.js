import React from 'react';
import './input_field.css';

export default class SelectField extends React.Component {
  handleChange(e) {
    const { name, value } = e.target;
    console.log(name, ' => ', value);
  }

  render() {
    const { label, name, options, value } = this.props;

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
          onChange={this.handleChange}
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