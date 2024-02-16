package com.dilaraseker.teachergrademanager.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

@Entity
public class Grade {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long gradeId;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "STUDENT_ID")
    private Student student;
    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "COURSE_ID")
    private Course course;

    private int examNumber;
    private double grade;

    public Grade() {
    }

    public Grade(Student student, Course course, int examNumber, double grade) {
        this.student = student;
        this.course = course;
        this.examNumber = examNumber;
        this.grade = grade;
    }

    public Long getGradeId() {
        return gradeId;
    }

    public void setGradeId(Long gradeId) {
        this.gradeId = gradeId;
    }

    public Student getStudent() {
        return student;
    }

    public void setStudent(Student student) {
        this.student = student;
    }

    public Course getCourse() {
        if (course == null) {
            throw new IllegalStateException("Course cannot be null for this grade.");
        }
        return course;
    }

    public void setCourse(Course course) {
        this.course = course;
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
