package com.dilaraseker.teachergrademanager.service;

import com.dilaraseker.teachergrademanager.model.Course;
import java.util.List;

public interface CourseService {

    List<Course> getAllCourses();
    Course getCourseById(Long id);
    void saveCourse(Course course);
    void deleteCourseById(Long id);

}