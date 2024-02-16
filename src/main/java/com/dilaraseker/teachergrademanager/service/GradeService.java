package com.dilaraseker.teachergrademanager.service;

import com.dilaraseker.teachergrademanager.model.Grade;
import java.util.List;

public interface GradeService {

    List<Grade> getAllGrades();
    Grade getGradeByStudentId(Long studentId);
    Grade getGradeByCourseId(Long courseId);
    Grade findByStudentStudentIdAndCourseCourseId(Long studentId, Long courseId);
    void saveGrade(Grade grade);
    void deleteGradeById(Long gradeId);

}