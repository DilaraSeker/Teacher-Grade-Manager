import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AddGrade = () => {
  const [students, setStudents] = useState([]);
  const [courses, setCourses] = useState([]);
  const [studentId, setStudentId] = useState('');
  const [courseId, setCourseId] = useState('');
  const [examNumber, setExamNumber] = useState('');
  const [grade, setGrade] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8080/api/students')
      .then(response => {
        setStudents(response.data);
      })
      .catch(error => {
        console.error('Error fetching students:', error);
      });
    axios.get('http://localhost:8080/api/courses') 
      .then(response => {
        setCourses(response.data);
      })
      .catch(error => {
        console.error('Error fetching courses:', error);
      });
  }, []);

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/grades/save', {
        studentId: parseInt(studentId),
        courseId: parseInt(courseId),
        examNumber: parseInt(examNumber),
        grade: parseFloat(grade)
      });

      console.log('Response from server:', response); 
      setMessage('Not Başarıyla Eklendi');
      // Formu sıfırla
      setStudentId('');
      setCourseId('');
      setExamNumber('');
      setGrade('');
    } catch (error) {
      console.error('Error adding grade:', error);
      if (error.response) {
        console.error('Server response:', error.response.data);
      }
      setMessage('Not Eklenmedi! Sorun var!');
    }
  };

  return (
    <div className="container">
      <div className="mt-5 form-container">
        <form onSubmit={handleSubmit}>
        <legend>Add Grade</legend>
          <div className="form-group">
            <label>Student:</label>
            <select className="form-control" value={studentId} onChange={e => setStudentId(e.target.value)}>
              <option value="">Choose Student</option>
              {students.map(student => (
                <option key={student.studentId} value={student.studentId}>{student.firstName} {student.lastName}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label>Course:</label>
            <select className="form-control" value={courseId} onChange={e => setCourseId(e.target.value)}>
              <option value="">Choose Course</option>
              {courses.map(course => (
                <option key={course.courseId} value={course.courseId}>{course.courseName}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label>Exam No:</label>
            <input
              type="number"
              className="form-control"
              value={examNumber}
              onChange={e => setExamNumber(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Grade:</label>
            <input
              type="number"
              className="form-control"
              value={grade}
              onChange={e => setGrade(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary mr-2" style={{ backgroundColor: '#7b6bf0' }}>ADD</button>
        </form>
        {/* Bootstrap modal */}
        <div className="modal" tabIndex="-1" role="dialog" style={{ display: message ? 'block' : 'none' }}>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Bilgilendirme</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => setMessage('')}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <p>{message}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddGrade;
