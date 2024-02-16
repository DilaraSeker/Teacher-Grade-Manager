import React, { Component } from 'react';
import AddStudent from './AddStudent';
import StudentList from './StudentList';

class StudentDashboard extends Component {
  state = {
    activeComponent: null,
  };

  handleAddStudent = () => {
    this.setState({ activeComponent: 'AddStudent' });
  };

  handleStudentList = () => {
    this.setState({ activeComponent: 'StudentList' });
  };

  render() {
    const { activeComponent } = this.state;

    return (
      <div>
        <h2>Student Dashboard</h2>
        <button onClick={this.handleAddStudent}>Add Student</button>
        <button onClick={this.handleStudentList}>List Students</button>

        <div>
          {activeComponent === 'AddStudent' && <AddStudent />}
          {activeComponent === 'StudentList' && <StudentList />}
        </div>
      </div>
    );
  }
}

export default StudentDashboard;
