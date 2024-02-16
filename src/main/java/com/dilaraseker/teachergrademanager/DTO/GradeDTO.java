package com.dilaraseker.teachergrademanager.DTO;

public class GradeDTO {
    private Long id;
    private String studentNumber;
    private Long courseId;
    private String courseName;
    private int examNumber;
    private double grade;

    public GradeDTO() {
    }

    public GradeDTO(Long id, String studentNumber, Long courseId, String courseName, int examNumber, double grade) {
        this.id = id;
        this.studentNumber = studentNumber;
        this.courseId = courseId;
        this.courseName = courseName;
        this.examNumber = examNumber;
        this.grade = grade;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getStudentNumber() {
        return studentNumber;
    }

    public void setStudentNumber(String studentNumber) {
        this.studentNumber = studentNumber;
    }

    public Long getCourseId() {
        return courseId;
    }

    public void setCourseId(Long courseId) {
        this.courseId = courseId;
    }

    public String getCourseName() {
        return courseName;
    }

    public void setCourseName(String courseName) {
        this.courseName = courseName;
    }

    public int getExamNumber() {
        return examNumber;
    }

    public void setExamNumber(int examNumber) {
        this.examNumber = examNumber;
    }

    public double getGrade() {
        return grade;
    }

    public void setGrade(double grade) {
        this.grade = grade;
    }
}
