package com.dilaraseker.teachergrademanager.DTO;

public class GradeRequestDTO {
    private Long studentId;
    private Long courseId;
    private Integer examNumber;
    private Double grade;

    // Constructor, getters, and setters
    public GradeRequestDTO() {
    }

    public GradeRequestDTO(Long studentId, Long courseId, Integer examNumber, Double grade) {
        this.studentId = studentId;
        this.courseId = courseId;
        this.examNumber = examNumber;
        this.grade = grade;
    }

    public Long getStudentId() {
        return studentId;
    }

    public void setStudentId(Long studentId) {
        this.studentId = studentId;
    }

    public Long getCourseId() {
        return courseId;
    }

    public void setCourseId(Long courseId) {
        this.courseId = courseId;
    }

    public Integer getExamNumber() {
        return examNumber;
    }

    public void setExamNumber(Integer examNumber) {
        this.examNumber = examNumber;
    }

    public Double getGrade() {
        return grade;
    }

    public void setGrade(Double grade) {
        this.grade = grade;
    }
}
