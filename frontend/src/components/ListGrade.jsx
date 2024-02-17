import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ListGrade = () => {
  const [grades, setGrades] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [sorted, setSorted] = useState(false);
  const [sortedByStudentNumber, setSortedByStudentNumber] = useState(false);
  const [selectedGrade, setSelectedGrade] = useState(null);

  useEffect(() => {
    const fetchGrades = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/grades');
        setGrades(response.data);
      } catch (error) {
        console.error('Error fetching grades:', error);
        setErrorMessage('Notlar getirilirken bir hata oluştu. Lütfen tekrar deneyin.');
      }
    };

    fetchGrades();
  }, []);

  const handleSort = (sortBy) => {
    const sortedGrades = [...grades]; // Kopya oluştur
    let newSortedState;

    if (sortBy === 'grade') {
      newSortedState = !sorted;
      sortedGrades.sort((a, b) => (newSortedState ? a.grade - b.grade : b.grade - a.grade));
    } else if (sortBy === 'studentNumber') {
      newSortedState = !sortedByStudentNumber;
      sortedGrades.sort((a, b) => (newSortedState ? a.studentNumber.localeCompare(b.studentNumber) : b.studentNumber.localeCompare(a.studentNumber)));
    }

    setGrades(sortedGrades); // Yeni sıralanmış diziyi atama
    setSorted(sortBy === 'grade' ? newSortedState : false);
    setSortedByStudentNumber(sortBy === 'studentNumber' ? newSortedState : false);
  };

  const handleView = (grade) => {
    setSelectedGrade(grade);
  };

  const handleCloseModal = () => {
    setSelectedGrade(null);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/grades/${id}`);
      setGrades(grades.filter((grade) => grade.id !== id));
    } catch (error) {
      console.error(`Error deleting grade with id ${id}:`, error);
      setErrorMessage('Not silinirken bir hata oluştu. Lütfen tekrar deneyin.');
    }
  };

  return (
    <div className="mt-5 container">
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th onClick={() => handleSort('studentNumber')} style={{ cursor: 'pointer' }}>
            Student No {sortedByStudentNumber ? '▲' : '▼'}
            </th>
            <th onClick={() => handleSort('grade')} style={{ cursor: 'pointer' }}>
              Grade {sorted ? '▲' : '▼'}
            </th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {grades.map((grade, index) => (
            <tr key={grade.id}>
              <td>{index + 1}</td>
              <td>{grade.studentNumber}</td>
              <td>{grade.grade}</td>
              <td>
                <button type="button" className="btn btn-primary mr-2" style={{ backgroundColor: '#7b6bf0' }} onClick={() => handleView(grade)}>Details</button>
                <button onClick={() => handleDelete(grade.id)} className="btn btn-danger" style={{ backgroundColor: '#d76b86' }}>Delete</button>

              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedGrade && (
        <div className="modal" style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }} tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Grade Details</h5>
                <button type="button" className="close" onClick={handleCloseModal} aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <p><strong>Student No:</strong> {selectedGrade.studentNumber}</p>
                <p><strong>Student Name:</strong> {selectedGrade.studentName}</p>
                <p><strong>Course:</strong> {selectedGrade.courseName}</p>
                <p><strong>Grade:</strong> {selectedGrade.grade}</p>
                <p><strong>Exam No:</strong> {selectedGrade.examNumber}</p>
              </div>

            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ListGrade;
