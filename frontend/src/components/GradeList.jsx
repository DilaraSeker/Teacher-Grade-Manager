import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GradeList = () => {
  const [grades, setGrades] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [sorted, setSorted] = useState(false);

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

  const handleSort = () => {
    if (sorted) {
      // Notları sıralıyorsak, sıralamayı kaldır
      setGrades([...grades].sort((a, b) => a.id - b.id));
      setSorted(false);
    } else {
      // Notları öğrenci numarasına göre sırala
      setGrades([...grades].sort((a, b) => a.grade - b.grade));
      setSorted(true);
    }
  };

  const handleView = id => {
    // Görüntüleme işlemi buraya eklenecek
    console.log(`View grade with id ${id}`);
  };

  const handleDelete = async id => {
    try {
      await axios.delete(`http://localhost:8080/api/grades/${id}`);
      setGrades(grades.filter(grade => grade.id !== id));
    } catch (error) {
      console.error(`Error deleting grade with id ${id}:`, error);
      setErrorMessage('Not silinirken bir hata oluştu. Lütfen tekrar deneyin.');
    }
  };

  return (
    <div className="mt-5 container">
      <button onClick={handleSort} className="btn btn-primary mb-3">
        {sorted ? 'Sıralamayı Kaldır' : 'Notları Sırala'}
      </button>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Öğrenci Numarası</th>
            <th>Ders</th>
            <th>Not</th>
            <th>İşlemler</th>
          </tr>
        </thead>
        <tbody>
          {grades.map((grade, index) => (
            <tr key={grade.id}>
              <td>{index + 1}</td>
              <td>{grade.studentNumber}</td>
              <td>{grade.courseName}</td>
              <td>{grade.grade}</td>
              <td>
                <button onClick={() => handleView(grade.id)} className="btn btn-info mr-2">Görüntüle</button>
                <button onClick={() => handleDelete(grade.id)} className="btn btn-danger">Sil</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GradeList;
