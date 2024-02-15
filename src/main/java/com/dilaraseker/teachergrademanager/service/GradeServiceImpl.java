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
    public List<Grade> getGradesByStudentId(Long studentId) {
        return gradeRepository.findByStudentId(studentId);
    }

    @Override
    public List<Grade> getGradesByCourseId(Long courseId) {
        return gradeRepository.findByCourseId(courseId);
    }

    @Override
    public List<Grade> getGradesByStudentIdAndCourseId(Long studentId, Long courseId) {
        return gradeRepository.findByStudentIdAndCourseId(studentId, courseId);
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