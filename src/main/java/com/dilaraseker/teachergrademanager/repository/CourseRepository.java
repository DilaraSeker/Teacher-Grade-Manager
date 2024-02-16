package com.dilaraseker.teachergrademanager.repository;

import com.dilaraseker.teachergrademanager.model.Course;
import com.dilaraseker.teachergrademanager.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;
import java.util.Optional;

@Repository
public interface CourseRepository extends JpaRepository<Course, Long> {
    Course findByCourseId(Long id);
}