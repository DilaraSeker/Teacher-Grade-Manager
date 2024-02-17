import React, { Component } from 'react';
import AddCourse from './AddCourse';
import ListCourse from './ListCourse';

class DashboardCourse extends Component {
  state = {
    activeComponent: null,
  };

  handleAddCourse = () => {
    this.setState({ activeComponent: 'AddCourse' });
  };

  handleListCourse = () => {
    this.setState({ activeComponent: 'ListCourse' });
  };

  render() {
    const { activeComponent } = this.state;

    return (
      <div>
        <h2>Course Dashboard</h2><br></br>
        <div className="mb-3">
          <button type="button" className="btn btn-primary mr-2 custom-button" style={{ backgroundColor: '#7b6bf0' }} onClick={this.handleAddCourse}>Add Course</button>
          <button type="button" className="btn btn-primary mr-2 custom-button" style={{ backgroundColor: '#7b6bf0' }} onClick={this.handleListCourse}>List Courses</button>
        </div>
        <div>
          {activeComponent === 'AddCourse' && <AddCourse/>}
          {activeComponent === 'ListCourse' && <ListCourse/>}
        </div>
      </div>
    );
  }
}

export default DashboardCourse;
