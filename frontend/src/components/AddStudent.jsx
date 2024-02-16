import React, { useState } from 'react';
import axios from 'axios';

const AddStudent = () => {
  const [studentNumber, setStudentNumber] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/api/students', {
        studentNumber,
        firstName: name,
        lastName: surname
      });
      console.log('Student added successfully');
      setStudentNumber('');
      setName('');
      setSurname('');
      setErrorMessage('');
    } catch (error) {
      console.error('Error adding student:', error);
      setErrorMessage('Öğrenci eklenirken bir hata oluştu. Lütfen tekrar deneyin.');
    }
  };

  return (
    <div className="container">
      <div className="mt-5 form-container">
        <h3>Öğrenci Ekle</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Öğrenci Numarası:</label>
            <input
              type="text"
              placeholder="Öğrenci Numarası"
              value={studentNumber}
              onChange={e => setStudentNumber(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Ad:</label>
            <input
              type="text"
              placeholder="Ad"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Soyad:</label>
            <input
              type="text"
              placeholder="Soyad"
              value={surname}
              onChange={e => setSurname(e.target.value)}
            />
          </div>
          <button type="submit">Ekle</button>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </form>
      </div>
    </div>
  );
};

export default AddStudent;
