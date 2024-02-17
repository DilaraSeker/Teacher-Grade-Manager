package com.dilaraseker.teachergrademanager.repository;

import com.dilaraseker.teachergrademanager.model.Grade;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GradeRepository extends JpaRepository<Grade, Long> {
    Grade findByStudentStudentId(Long studentId);
    Grade findByCourseCourseId(Long courseId);
    Grade findByStudentStudentIdAndCourseCourseId(Long studentId, Long courseId);
    Grade findByStudentStudentIdAndCourseCourseIdAndExamNumber(Long studentId, Long courseId, Integer examNumber);
}