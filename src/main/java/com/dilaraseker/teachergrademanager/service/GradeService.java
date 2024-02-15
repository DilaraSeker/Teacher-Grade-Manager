package com.dilaraseker.teachergrademanager.service;

import com.dilaraseker.teachergrademanager.model.Grade;
import java.util.List;

public interface GradeService {

    List<Grade> getAllGrades();
    List<Grade> getGradesByStudentId(Long studentId);
    List<Grade> getGradesByCourseId(Long courseId);
    List<Grade> getGradesByStudentIdAndCourseId(Long studentId, Long courseId);
    void saveGrade(Grade grade);
    void deleteGradeById(Long gradeId);

}