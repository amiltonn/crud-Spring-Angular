package com.amilton.controller;

import com.amilton.model.Course;
import com.amilton.repository.CourseRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/courses")
public class CourseController {

    private final CourseRepository courseRepository;
    public CourseController(CourseRepository courseRepository) {
        this.courseRepository = courseRepository;
    }
    @GetMapping
    public List<Course> listCourses(){
        return courseRepository.findAll();
    }
    @PostMapping
    public ResponseEntity<Course> create(@RequestBody Course course){
        return  ResponseEntity.status(HttpStatus.CREATED)
                .body(courseRepository.save(course));
    }
}
