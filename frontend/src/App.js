import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import HomePage from "./components/HomePage"
import StudentDashboard from "./components/StudentDashboard"
import CourseDashboard from "./components/CourseDashboard"
import GradeDashboard from "./components/GradeDashboard"

function App() {
  const [activeButton, setActiveButton] = React.useState('home');

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  }

  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <a className={`navbar-brand ${activeButton === 'home' ? 'active' : ''}`} href="#home" onClick={() => setActiveButton('home')}>Home</a>
          <a className={`navbar-brand ${activeButton === 'button1' ? 'active' : ''}`} href="#button1" onClick={() => setActiveButton('button1')}>Student Dashboard</a>
          <a className={`navbar-brand ${activeButton === 'button2' ? 'active' : ''}`} href="#button2" onClick={() => setActiveButton('button2')}>Course Dashboard</a>
          <a className={`navbar-brand ${activeButton === 'button3' ? 'active' : ''}`} href="#button3" onClick={() => setActiveButton('button3')}>Grade Dashboard</a>
        </nav>

        <div className="main-content">
          {activeButton === 'home' && <HomePage onButtonClick={handleButtonClick} activeButton={activeButton} />}
          {activeButton === 'button1' && <StudentDashboard />}
          {activeButton === 'button2' && <CourseDashboard />}
          {activeButton === 'button3' && <GradeDashboard />}
        </div>
      </div>
    </Router>
  );
}

export default App;
