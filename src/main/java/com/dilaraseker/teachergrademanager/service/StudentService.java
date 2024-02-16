package com.dilaraseker.teachergrademanager.service;

import com.dilaraseker.teachergrademanager.model.Student;
import java.util.List;

public interface StudentService {

    List<Student> getAllStudents();
    Student getStudentById(Long id);
    Student getStudentByStudentNumber(String studentNumber);
    void saveStudent(Student student);
    void deleteStudentByStudentId(Long id);

}