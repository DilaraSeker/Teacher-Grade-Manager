import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/students');
        setStudents(response.data);
      } catch (error) {
        console.error('Error fetching students:', error);
        setErrorMessage('Öğrenciler getirilirken bir hata oluştu. Lütfen tekrar deneyin.');
      }
    };

    fetchStudents();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/students/${id}`);
      setStudents(students.filter(student => student.studentId !== id));
    } catch (error) {
      console.error('Error deleting student:', error);
      setErrorMessage('Öğrenci silinirken bir hata oluştu. Lütfen tekrar deneyin.');
    }
  };

  return (
    <div className="mt-5 container">
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Öğrenci Numarası</th>
            <th>Ad</th>
            <th>Soyad</th>
            <th>İşlemler</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={student.studentId}>
              <td>{index + 1}</td>
              <td>{student.studentNumber}</td>
              <td>{student.firstName}</td>
              <td>{student.lastName}</td>
              <td>
                <button onClick={() => handleDelete(student.studentId)} className="btn btn-danger">Sil</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;
