import React, { Component } from 'react';
import AddGrade from './AddGrade';
import ListGrade from './ListGrade';

class DashboardGrade extends Component {
  state = {
    activeComponent: null,
  };

  handleAddGrade = () => {
    this.setState({ activeComponent: 'AddGrade' });
  };

  handleListGrade = () => {
    this.setState({ activeComponent: 'ListGrade' });
  };

  render() {
    const { activeComponent } = this.state;

    return (
      <div>
        <h2>Grade Dashboard</h2><br></br>
        <div className="mb-3">
          <button type="button" className="btn btn-primary mr-2 custom-button" onClick={this.handleAddGrade}>Add Grade</button>
          <button type="button" className="btn btn-primary mr-2 custom-button" onClick={this.handleListGrade}>Grade List</button>
        </div>
        <div>
          {activeComponent === 'AddGrade' && <AddGrade/>}
          {activeComponent === 'ListGrade' && <ListGrade/>}
        </div>
      </div>
    );
  }
}

export default DashboardGrade;
