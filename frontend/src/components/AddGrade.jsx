import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AddGrade = () => {
  const [students, setStudents] = useState([]);
  const [courses, setCourses] = useState([]);
  const [studentId, setStudentId] = useState('');
  const [courseId, setCourseId] = useState('');
  const [examNumber, setExamNumber] = useState('');
  const [grade, setGrade] = useState('');

  // Veri alma işlemi
  useEffect(() => {
    // Öğrenci verilerini al
    axios.get('http://localhost:8080/api/students')
      .then(response => {
        setStudents(response.data);
      })
      .catch(error => {
        console.error('Error fetching students:', error);
      });

    // Ders verilerini al
    axios.get('http://localhost:8080/courses') // Değişiklik yapıldı: 'http://localhost:8080/courses' yerine 'http://localhost:8080/api/courses'
      .then(response => {
        setCourses(response.data);
      })
      .catch(error => {
        console.error('Error fetching courses:', error);
      });
  }, []);
  const handleSubmit = async e => {
    e.preventDefault();
    console.log(studentId);
    console.log('course id:', courseId);
    try {
      const response = await axios.post('http://localhost:8080/api/grades/save', {
        studentId: parseInt(studentId),
        courseId: parseInt(courseId),
        examNumber: parseInt(examNumber),
        grade: parseFloat(grade)
      });
      
      console.log('Response from server:', response); // Sunucudan gelen yanıtı kontrol et
      console.log('Grade added successfully:', response.data);
    } catch (error) {
      console.error('Error adding grade:', error);
      if (error.response) {
        console.error('Server response:', error.response.data);
      }
    }
  };
  
  

  return (
    <div className="container">
      <div className="mt-5 form-container">
        <h3>Not Ekle</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Öğrenci:</label>
            <select value={studentId} onChange={e => setStudentId(e.target.value)}>
              <option value="">Öğrenci Seçin</option>
              {students.map(student => (
                <option key={student.studentId} value={student.studentId}>{student.firstName} {student.lastName}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label>Ders:</label>
            <select value={courseId} onChange={e => setCourseId(e.target.value)}>
              <option value="">Ders Seçin</option>
              {courses.map(course => (
                <option key={course.courseId} value={course.courseId}>{course.courseName}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label>Sınav Numarası:</label>
            <input
              type="number"
              value={examNumber}
              onChange={e => setExamNumber(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Not:</label>
            <input
              type="number"
              value={grade}
              onChange={e => setGrade(e.target.value)}
            />
          </div>
          <button type="submit">Ekle</button>
        </form>
      </div>
    </div>
  );
};

export default AddGrade;
