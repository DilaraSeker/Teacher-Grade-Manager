import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGraduate, faBook, faClipboard } from '@fortawesome/free-solid-svg-icons';


function HomePage({ onButtonClick, activeButton }) {
  const navigate = useNavigate();

  const handleNavigation = (destination, buttonName) => {
    onButtonClick(buttonName);
    navigate(destination);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4 mt-5">
          <button
            id="button1"
            onClick={() => handleNavigation('/student-dashboard', 'button1')}
            className={`btn btn-primary btn-lg btn-block square-btn ${activeButton === 'button1' ? 'active' : ''}`}
          >
            <FontAwesomeIcon icon={faUserGraduate} className="mr-2" />
            Student Dashboard
          </button>
        </div>
        <div className="col-md-4 mt-5">
          <button
            id="button2"
            onClick={() => handleNavigation('/course-dashboard', 'button2')}
            className={`btn btn-success btn-lg btn-block square-btn ${activeButton === 'button2' ? 'active' : ''}`}
          >
            <FontAwesomeIcon icon={faBook} className="mr-2" />
            Course Dashboard
          </button>
        </div>
        <div className="col-md-4 mt-5">
          <button
            id="button3"
            onClick={() => handleNavigation('/grade-dashboard', 'button3')}
            className={`btn btn-warning btn-lg btn-block square-btn ${activeButton === 'button3' ? 'active' : ''}`}
          >
            <FontAwesomeIcon icon={faClipboard} className="mr-2" />
            Grade Dashboard
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
