import React, { useState } from 'react';
import axios from 'axios';

const AddCourse = () => {
  const [courseCode, setCourseCode] = useState('');
  const [courseName, setCourseName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/courses', {
        courseCode,
        courseName
      });
      console.log('Course added successfully');
      setCourseCode('');
      setCourseName('');
      setErrorMessage('');
    } catch (error) {
      console.error('Error adding course:', error);
      setErrorMessage('Ders eklenirken bir hata oluştu. Lütfen tekrar deneyin.');
    }
  };

  return (
    <div className="container">
      <div className="mt-5 form-container">
        <h3>Ders Ekle</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Öğrenci Numarası:</label>
            <input
              type="text"
              placeholder="Ders Kodu"
              value={courseCode}
              onChange={e => setCourseCode(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Ders Adı:</label>
            <input
              type="text"
              placeholder="Ders Adı"
              value={courseName}
              onChange={e => setCourseName(e.target.value)}
            />
          </div>
          <button type="submit">Ekle</button>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </form>
      </div>
    </div>
  );
};

export default AddCourse;
