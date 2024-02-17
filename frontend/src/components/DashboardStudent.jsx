import React, { Component } from 'react';
import AddStudent from './AddStudent';
import ListStudent from './ListStudent';

class DashboardStudent extends Component {
  state = {
    activeComponent: null,
  };

  handleAddStudent = () => {
    this.setState({ activeComponent: 'AddStudent' });
  };

  handleListStudent = () => {
    this.setState({ activeComponent: 'ListStudent' });
  };

  render() {
    const { activeComponent } = this.state;

    return (
      <div>
        <h2>Student Dashboard</h2><br></br>
        <div className="mb-3">
          <button type="button" className="btn btn-primary mr-2 custom-button" onClick={this.handleAddStudent}>Add Student</button>
          <button type="button" className="btn btn-primary custom-button" onClick={this.handleListStudent}>List Students</button>
        </div>
        <div className="mt-3">
          {activeComponent === 'AddStudent' && <AddStudent/>}
          {activeComponent === 'ListStudent' && <ListStudent/>}
        </div>
      </div>
    );
  }
}

export default DashboardStudent;
