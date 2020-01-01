import React from 'react';
import TextInputField from './form_elements/text_input_field';
import CheckboxField from './form_elements/checkbox_field';

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
      </form>
    );
  }
}