import React from 'react';
import TextInputField from './form_elements/text_input_field';
import CheckboxField from './form_elements/checkbox_field';
import SelectField from './form_elements/select_field';

const locationOptions = [
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
]

const initialState = {
  title: '',
  company: '',
  salary: '',
  isRemoteFriendly: false,
  location: ''
};

export default class JobCreationForm extends React.Component {
  state = initialState;

  handleChange = (e) => {
    const { type, name, value, checked } = e.target;
    if (type === 'checkbox') {
      this.setState({ [name]: checked });
    } else {
      this.setState({ [name]: value });
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <TextInputField 
          label="Title"
          name="title"
          onChange={this.handleChange}
          value={this.state.title}
        />
        <TextInputField 
          label="Company"
          name="company"
          onChange={this.handleChange}
          value={this.state.company}
        />
        <TextInputField 
          label="Salary"
          name="salary"
          onChange={this.handleChange}
          value={this.state.salary}
        />
        <CheckboxField 
          label="Remote friendly?"
          name="isRemoteFriendly"
          onChange={this.handleChange}
          value={this.state.isRemoteFriendly}
        />
        <SelectField 
          name="location"
          label="Location"
          onChange={this.handleChange}
          value={this.state.location}
          options={locationOptions}
        />
        <button>Submit Job</button>
      </form>
    );
  }
}