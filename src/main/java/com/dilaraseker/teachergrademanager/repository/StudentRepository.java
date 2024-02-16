package com.dilaraseker.teachergrademanager.repository;

import com.dilaraseker.teachergrademanager.model.Student;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;

@Repository
public interface StudentRepository extends JpaRepository<Student, Long> {
    Student findByStudentNumber(String studentNumber);

    Student findByStudentId(Long studentId);
}
