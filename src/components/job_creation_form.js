import React from 'react';
import TextInputField from './form_elements/text_input_field';
import CheckboxField from './form_elements/checkbox_field';
import SelectField from './form_elements/select_field';

export default class JobCreationForm extends React.Component {
  render() {
    return(
      <form>
        <TextInputField 
          label="Title"
          name="title"
        />
        <TextInputField 
          label="Company"
          name="company"
        />
        <TextInputField 
          label="Salary"
          name="salary"
        />
        <CheckboxField 
          label="Remote friendly?"
          name="isRemoteFriendly"
        />
        <SelectField 
          name="location"
          label="Location"
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