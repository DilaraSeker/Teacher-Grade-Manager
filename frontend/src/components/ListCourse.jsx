import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ListCourse = () => {
  const [courses, setCourses] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/courses');
        setCourses(response.data);
      } catch (error) {
        console.error('Error fetching courses:', error);
        setErrorMessage('Dersler getirilirken bir hata oluştu. Lütfen tekrar deneyin.');
      }
    };

    fetchCourses();
  }, []);

  const handleDelete = async id => {
    try {
      await axios.delete(`http://localhost:8080/courses/${id}`);
      // Silinen dersi dışlayarak ders listesini güncelle
      setCourses(courses.filter(course => course.courseId !== id));
      console.log('Course deleted successfully');
    } catch (error) {
      console.error('Error deleting course:', error);
      setErrorMessage('Ders silinirken bir hata oluştu. Lütfen tekrar deneyin.');
    }
  };

  return (
    <div className="mt-5 container">
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Course Name</th>
            <th>Ders Kodu</th>
            <th>İşlemler</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course, index) => (
            <tr key={course.courseId}>
              <td>{index + 1}</td>
              <td>{course.courseName}</td>
              <td>{course.courseCode}</td>
              <td>
                <button onClick={() => handleDelete(course.courseId)} className="btn btn-danger">Sil</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListCourse;
