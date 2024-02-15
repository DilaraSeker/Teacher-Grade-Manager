package com.dilaraseker.teachergrademanager.controller;

import com.dilaraseker.teachergrademanager.model.Grade;
import com.dilaraseker.teachergrademanager.service.GradeService;
import com.dilaraseker.teachergrademanager.model.Course;
import com.dilaraseker.teachergrademanager.repository.CourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.webjars.NotFoundException;
import java.util.List;

@RestController
@RequestMapping("/api/grades")
public class GradeController {

    @Autowired
    private GradeService gradeService;

    @Autowired
    private CourseRepository courseRepository;

    @GetMapping
    public List<Grade> getAllGrades() {
        return gradeService.getAllGrades();
    }

    @GetMapping("/students/{studentId}")
    public List<Grade> getGradesByStudentId(@PathVariable Long studentId) {
        return gradeService.getGradesByStudentId(studentId);
    }

    @GetMapping("/courses/{courseId}")
    public List<Grade> getGradesByCourseId(@PathVariable Long courseId) {
        return gradeService.getGradesByCourseId(courseId);
    }

    @GetMapping("/students/{studentId}/courses/{courseId}")
    public List<Grade> getGradesByStudentIdAndCourseId(@PathVariable Long studentId, @PathVariable Long courseId) {
        return gradeService.getGradesByStudentIdAndCourseId(studentId, courseId);
    }

    @PostMapping
    public void saveGrade(@RequestBody Grade grade) {
        Course course = courseRepository.findById(grade.getCourse().getId()).orElseThrow(() -> new NotFoundException("Course not found with id: " + grade.getCourse().getId()));
        grade.setCourse(course);
        gradeService.saveGrade(grade);
    }

    @DeleteMapping("/{gradeId}")
    public void deleteGradeById(@PathVariable Long gradeId) {
        gradeService.deleteGradeById(gradeId);
    }
}
