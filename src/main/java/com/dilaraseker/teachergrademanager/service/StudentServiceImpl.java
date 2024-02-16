package com.dilaraseker.teachergrademanager.service;

import com.dilaraseker.teachergrademanager.model.Student;
import com.dilaraseker.teachergrademanager.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class StudentServiceImpl implements StudentService {

    private final StudentRepository studentRepository;

    @Autowired
    public StudentServiceImpl(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }

    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }

    public Student getStudentById(Long id) {
        Optional<Student> student = studentRepository.findById(id);
        return student.orElse(null);
    }

    public Student getStudentByStudentNumber(String studentNumber) {
        return studentRepository.findByStudentNumber(studentNumber);
    }

    public void saveStudent(Student student) {
        studentRepository.save(student);
    }

    public void deleteStudentByStudentId(Long id) {
        studentRepository.deleteById(id);
    }
}