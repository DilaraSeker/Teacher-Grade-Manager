package com.dilaraseker.teachergrademanager.service;

import com.dilaraseker.teachergrademanager.model.Grade;
import com.dilaraseker.teachergrademanager.repository.GradeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class GradeServiceImpl implements GradeService {

    @Autowired
    private GradeRepository gradeRepository;

    @Override
    public List<Grade> getAllGrades() {
        return gradeRepository.findAll();
    }

    @Override
    public Grade getGradeByStudentId(Long studentId) {
        return gradeRepository.findByStudentStudentId(studentId);
    }

    @Override
    public Grade getGradeByCourseId(Long courseId) {
        return gradeRepository.findByCourseCourseId(courseId);
    }

    @Override
    public Grade findByStudentStudentIdAndCourseCourseId(Long studentId, Long courseId) {
        return gradeRepository.findByStudentStudentIdAndCourseCourseId(studentId, courseId);
    }

    @Override
    public void saveGrade(Grade grade) {
        gradeRepository.save(grade);
    }

    @Override
    public void deleteGradeById(Long gradeId) {
        gradeRepository.deleteById(gradeId);
    }
}