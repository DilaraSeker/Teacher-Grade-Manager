import React, { Component } from 'react';
import AddCourse from './AddCourse';
import CourseList from './CourseList';

class CourseDashboard extends Component {
  state = {
    activeComponent: null,
  };

  handleAddCourse = () => {
    this.setState({ activeComponent: 'AddCourse' });
  };

  handleCourseList = () => {
    this.setState({ activeComponent: 'CourseList' });
  };

  render() {
    const { activeComponent } = this.state;

    return (
      <div>
        <h2>Course Dashboard</h2>
        <button onClick={this.handleAddCourse}>Add Course</button>
        <button onClick={this.handleCourseList}>List Courses</button>

        <div>
          {activeComponent === 'AddCourse' && <AddCourse />}
          {activeComponent === 'CourseList' && <CourseList />}
        </div>
      </div>
    );
  }
}

export default CourseDashboard;
