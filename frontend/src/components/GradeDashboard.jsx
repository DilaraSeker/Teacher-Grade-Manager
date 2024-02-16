import React, { Component } from 'react';
import AddGrade from './AddGrade';
import GradeList from './GradeList';

class GradeDashboard extends Component {
  state = {
    activeComponent: null,
  };

  handleAddGrade = () => {
    this.setState({ activeComponent: 'AddGrade' });
  };

  handleGradeList = () => {
    this.setState({ activeComponent: 'GradeList' });
  };

  render() {
    const { activeComponent } = this.state;

    return (
      <div>
        <h2>Grade Dashboard</h2>
        <button onClick={this.handleAddGrade}>Add Grade</button>
        <button onClick={this.handleGradeList}>Grade List</button>

        <div>
          {activeComponent === 'AddGrade' && <AddGrade />}
          {activeComponent === 'GradeList' && <GradeList />}
        </div>
      </div>
    );
  }
}

export default GradeDashboard;
