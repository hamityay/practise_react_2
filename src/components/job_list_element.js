import React from 'react';
import './job_list_element.css'

export default class JobListElement extends React.Component {
  render() {
    return(
      <a href="#" className="job-item">
        <div>
          <h2 className="job-item_title">
            {this.props.title}
          </h2>
          <p className="job_info">
            🏢 {this.props.company} | 🌍 {this.props.location} | 💰 {this.props.salary}
          </p>
      </div>
      </a>
    );
  }
}