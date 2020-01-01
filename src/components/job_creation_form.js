import React from 'react';
import TextInputField from './form_elements/text_input_field';
import CheckboxField from './form_elements/checkbox_field';
import SelectField from './form_elements/select_field';

export default class JobCreationForm extends React.Component {
  handleChange(e) {
    const { type, name, value, checked } = e.target;
    if (type === 'checkbox') {
      console.log(name, ' => ', checked);
    } else {
      console.log(name, ' => ', value);
    }
  }

  render() {
    return(
      <form>
        <TextInputField 
          label="Title"
          name="title"
          onChange={this.handleChange}
        />
        <TextInputField 
          label="Company"
          name="company"
          onChange={this.handleChange}
        />
        <TextInputField 
          label="Salary"
          name="salary"
          onChange={this.handleChange}
        />
        <CheckboxField 
          label="Remote friendly?"
          name="isRemoteFriendly"
          onChange={this.handleChange}
        />
        <SelectField 
          name="location"
          label="Location"
          onChange={this.handleChange}
          options={[
            {
              'label': 'Select...',
              'value': ''
            },
            {
              'label': 'Berlin',
              'value': 'Berlin'
            },
            {
              'label': 'San Francisco',
              'value': 'San Francisco'
            },
            {
              'label': 'London',
              'value': 'London'
            },
            {
              'label': 'Austin',
              'value': 'Austin'
            },
            {
              'label': 'Tokyo',
              'value': 'Tokyo'
            },
            {
              'label': 'Barcelona',
              'value': 'Barcelona'
            },
            {
              'label': 'Other',
              'value': 'Other'
            }
          ]}
        />
      </form>
    );
  }
}