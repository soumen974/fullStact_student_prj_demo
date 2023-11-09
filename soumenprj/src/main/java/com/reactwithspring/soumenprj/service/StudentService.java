package com.reactwithspring.soumenprj.service;

import com.reactwithspring.soumenprj.model.Student;

import java.util.List;

public interface StudentService {
    public Student saveStudent(Student student);
    public List<Student> getAllStudents();

}
