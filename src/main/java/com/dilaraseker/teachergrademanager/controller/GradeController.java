package com.dilaraseker.teachergrademanager.controller;

import com.dilaraseker.teachergrademanager.DTO.GradeResponseDTO;
import com.dilaraseker.teachergrademanager.DTO.GradeRequestDTO;
import com.dilaraseker.teachergrademanager.exception.CourseNotFoundException;
import com.dilaraseker.teachergrademanager.model.Course;
import com.dilaraseker.teachergrademanager.model.Grade;
import com.dilaraseker.teachergrademanager.model.Student;
import com.dilaraseker.teachergrademanager.repository.GradeRepository;
import com.dilaraseker.teachergrademanager.repository.CourseRepository;
import com.dilaraseker.teachergrademanager.repository.StudentRepository;
import com.dilaraseker.teachergrademanager.service.GradeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/grades")
public class GradeController {

    @Autowired
    private GradeService gradeService;
    @Autowired
    private GradeRepository gradeRepository;
    @Autowired
    private StudentRepository studentRepository; // Burada StudentRepository örneğini enjekte etmek gerekiyor
    @Autowired
    private CourseRepository courseRepository; // Burada da CourseRepository örneğini enjekte etmek gerekiyor
    @GetMapping
    public List<GradeResponseDTO> getAllGrades() {
        List<Grade> grades = gradeService.getAllGrades();
        return grades.stream().map(this::convertToDTOWithCourseAndStudentInfo).collect(Collectors.toList());
    }

    private GradeResponseDTO convertToDTOWithCourseAndStudentInfo(Grade grade) {
        GradeResponseDTO dto = new GradeResponseDTO();
        dto.setId(grade.getGradeId());
        dto.setStudentNumber(grade.getStudent().getStudentNumber());
        dto.setCourseId(grade.getCourse().getCourseId());
        dto.setCourseName(grade.getCourse().getCourseName());
        dto.setExamNumber(grade.getExamNumber());
        dto.setGrade(grade.getGrade());
        String studentFullName = grade.getStudent().getFirstName() + " " + grade.getStudent().getLastName();
        dto.setStudentName(studentFullName);

        return dto;
    }

    @PostMapping("/save")
    public ResponseEntity<String> saveGrade(@RequestBody GradeRequestDTO gradeRequestDTO) {
        try {
            if (gradeRequestDTO.getStudentId() == null || gradeRequestDTO.getExamNumber() == null || gradeRequestDTO.getCourseId() == null) {
                return ResponseEntity.badRequest().body("StudentId, ExamId, and CourseId cannot be null.");
            }

            Student student = studentRepository.findByStudentId(gradeRequestDTO.getStudentId());
            if (student == null) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Student not found with student id: " + gradeRequestDTO.getStudentId());
            }

            Course course = courseRepository.findById(gradeRequestDTO.getCourseId())
                    .orElseThrow(() -> new CourseNotFoundException("Course not found with id: " + gradeRequestDTO.getCourseId()));

            Grade existingGrade = gradeRepository.findByStudentStudentIdAndCourseCourseIdAndExamNumber(student.getStudentId(), course.getCourseId(), gradeRequestDTO.getExamNumber());

            if (existingGrade != null) {
                existingGrade.setGrade(gradeRequestDTO.getGrade());
                gradeRepository.save(existingGrade);
                return ResponseEntity.status(HttpStatus.OK).body("Grade updated successfully.");
            } else {
                // Notu ekle
                Grade grade = new Grade();
                grade.setStudent(student);
                grade.setCourse(course);
                grade.setExamNumber(gradeRequestDTO.getExamNumber());
                grade.setGrade(gradeRequestDTO.getGrade());

                gradeService.saveGrade(grade);
                return ResponseEntity.status(HttpStatus.CREATED).body("Grade saved successfully.");
            }
        } catch (CourseNotFoundException ex) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(ex.getMessage());
        } catch (Exception ex) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An error occurred while saving the grade.");
        }
    }

    @DeleteMapping("/{gradeId}")
    public ResponseEntity<String> deleteGradeById(@PathVariable Long gradeId) {
        try {
            gradeService.deleteGradeById(gradeId);
            return ResponseEntity.ok("Grade deleted successfully.");
        } catch (Exception ex) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An error occurred while deleting the grade.");
        }
    }
}
