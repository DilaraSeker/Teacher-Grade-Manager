package com.dilaraseker.teachergrademanager.model;

import jakarta.persistence.*;
import java.util.List;

@Entity
public class Course {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long courseId;

    @Column(unique = true)
    private String courseCode;

    @Column(unique = true)
    private String courseName;

    @OneToMany(mappedBy = "course")
    private List<Grade> grades;

    private int examId;
    public Course() {
    }

    public Course(String courseCode, String courseName, int examId) {
        this.courseCode = courseCode;
        this.courseName = courseName;
        this.examId = examId;
    }

    public Long getCourseId() {
        return courseId;
    }

    public void setCourseId(Long courseId) {
        this.courseId = courseId;
    }

    public String getCourseCode() {
        return courseCode;
    }

    public void setCourseCode(String courseCode) {
        this.courseCode = courseCode;
    }

    public String getCourseName() {
        return courseName;
    }

    public void setCourseName(String courseName) {
        this.courseName = courseName;
    }

    public List<Grade> getGrades() {
        return grades;
    }

    public void setGrades(List<Grade> grades) {
        this.grades = grades;
    }
}