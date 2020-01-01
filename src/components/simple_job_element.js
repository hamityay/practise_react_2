import React from 'react';
import './job_list_element.css'

export default class SimpleJobElement extends React.Component {
  render() {
    const { title } = this.props;
    
    return(
      <a href="#" className="job-item">
        <div>
          <h2 className="job-item_title">
            # {title}
          </h2>
      </div>
      </a>
    );
  }
}