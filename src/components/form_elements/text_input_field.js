import React from 'react';
import './input_field.css';

export default class TextInputField extends React.Component {
  render() {
    const { label, name, onChange } = this.props;

    return(
      <div className="input-field">
        <label
          className="input-field__label"
          htmlFor={name}
        >
          {label}
        </label>
        <input
          id={name}
          name={name}
          type="text"
          className="input-field__text-input"
          onChange={onChange}
        />
      </div>
    );
  }
}