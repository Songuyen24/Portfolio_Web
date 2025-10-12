import React from 'react';
import { Link } from 'react-router-dom';
import { FiCalendar, FiClock, FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import '../../assets/styles/BlogPost.css';

const SpringBootAPIPost = () => {
  return (
    <div className="blog-post">
      <div className="blog-header">
        <h1 className="blog-title">
          🚀 Xây dựng REST API với Spring Boot
        </h1>
        
        <div className="blog-meta">
          <div className="meta-item">
            <FiCalendar />
            <span>12 tháng 10, 2025</span>
          </div>
          <div className="meta-item">
            <FiClock />
            <span>25 phút đọc</span>
          </div>
          <div className="meta-item">
            <span>📂 Spring Boot</span>
          </div>
        </div>
        
        <p className="blog-excerpt">
          Học cách xây dựng REST API hoàn chỉnh với Spring Boot, từ setup project đến triển khai production
        </p>
        
        <div className="blog-tags">
          <span className="tag">Java</span>
          <span className="tag">Spring Boot</span>
          <span className="tag">REST API</span>
          <span className="tag">Web Development</span>
          <span className="tag">Backend</span>
        </div>
      </div>

      <div className="blog-content">
        <h2>🚀 Giới thiệu Spring Boot</h2>
        
        <p>
          <strong>Spring Boot</strong> là framework phổ biến nhất để xây dựng ứng dụng Java, 
          đặc biệt là <strong>REST API</strong>. Nó giúp:
        </p>

        <ul>
          <li>⚡ <strong>Khởi tạo nhanh</strong> - Setup project trong vài phút</li>
          <li>🔧 <strong>Auto-configuration</strong> - Tự động cấu hình các dependency</li>
          <li>📦 <strong>Embedded server</strong> - Không cần cài đặt Tomcat riêng</li>
          <li>🎯 <strong>Production-ready</strong> - Sẵn sàng cho môi trường thực tế</li>
        </ul>

        <blockquote>
          💡 <strong>Tại sao chọn Spring Boot cho API?</strong>
          <ul>
            <li>Ecosystem mạnh mẽ với Spring Data, Security, Cloud</li>
            <li>Community lớn và tài liệu phong phú</li>
            <li>Performance cao và scalable</li>
            <li>Hỗ trợ microservices architecture</li>
          </ul>
        </blockquote>

        <div className="section-divider"></div>

        <h2>🛠️ Setup Project</h2>

        <h3>1️⃣ Tạo project với Spring Initializr</h3>

        <p>Truy cập <a href="https://start.spring.io" target="_blank" rel="noopener noreferrer">start.spring.io</a> và chọn:</p>

        <pre><code>{`Project: Maven
Language: Java
Spring Boot: 3.2.0
Group: com.example
Artifact: student-api
Name: Student Management API
Description: REST API for Student Management
Package name: com.example.studentapi
Packaging: Jar
Java: 17`}</code></pre>

        <p><strong>Dependencies cần thiết:</strong></p>
        <ul>
          <li>Spring Web</li>
          <li>Spring Data JPA</li>
          <li>H2 Database (để demo)</li>
          <li>Spring Boot DevTools</li>
          <li>Validation</li>
        </ul>

        <h3>2️⃣ Cấu trúc project</h3>

        <pre><code>{`student-api/
├── src/main/java/com/example/studentapi/
│   ├── StudentApiApplication.java
│   ├── controller/
│   │   └── StudentController.java
│   ├── model/
│   │   └── Student.java
│   ├── repository/
│   │   └── StudentRepository.java
│   ├── service/
│   │   ├── StudentService.java
│   │   └── StudentServiceImpl.java
│   └── exception/
│       ├── GlobalExceptionHandler.java
│       └── ResourceNotFoundException.java
├── src/main/resources/
│   ├── application.properties
│   └── data.sql
└── pom.xml`}</code></pre>

        <div className="section-divider"></div>

        <h2>🏗️ Xây dựng API từng bước</h2>

        <h3>📋 1. Model - Student Entity</h3>

        <pre><code>{`package com.example.studentapi.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import java.time.LocalDate;

@Entity
@Table(name = "students")
public class Student {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @NotBlank(message = "Tên không được để trống")
    @Size(min = 2, max = 50, message = "Tên phải từ 2-50 ký tự")
    @Column(name = "full_name", nullable = false)
    private String fullName;
    
    @NotBlank(message = "Email không được để trống")
    @Email(message = "Email không đúng định dạng")
    @Column(name = "email", unique = true, nullable = false)
    private String email;
    
    @NotNull(message = "Ngày sinh không được để trống")
    @Past(message = "Ngày sinh phải là quá khứ")
    @Column(name = "date_of_birth")
    private LocalDate dateOfBirth;
    
    @NotBlank(message = "Số điện thoại không được để trống")
    @Pattern(regexp = "^[0-9]{10,11}$", message = "Số điện thoại không hợp lệ")
    @Column(name = "phone")
    private String phone;
    
    @NotBlank(message = "Địa chỉ không được để trống")
    @Column(name = "address")
    private String address;
    
    @Min(value = 0, message = "GPA không được âm")
    @Max(value = 4, message = "GPA không được vượt quá 4.0")
    @Column(name = "gpa")
    private Double gpa;
    
    @Enumerated(EnumType.STRING)
    @Column(name = "status")
    private StudentStatus status = StudentStatus.ACTIVE;
    
    // Constructors, Getters, Setters...
}

enum StudentStatus {
    ACTIVE, INACTIVE, GRADUATED, SUSPENDED
}`}</code></pre>

        <h3>🗃️ 2. Repository Layer</h3>

        <pre><code>{`package com.example.studentapi.repository;

import com.example.studentapi.model.Student;
import com.example.studentapi.model.StudentStatus;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Repository
public interface StudentRepository extends JpaRepository<Student, Long> {
    
    // Query methods
    List<Student> findByStatus(StudentStatus status);
    
    Page<Student> findByFullNameContainingIgnoreCase(String name, Pageable pageable);
    
    @Query("SELECT s FROM Student s WHERE s.gpa >= :minGpa")
    List<Student> findExcellentStudents(@Param("minGpa") double minGpa);
    
    @Query("SELECT s FROM Student s WHERE s.dateOfBirth BETWEEN :startDate AND :endDate")
    List<Student> findByDateOfBirthBetween(
        @Param("startDate") LocalDate startDate, 
        @Param("endDate") LocalDate endDate
    );
    
    Long countByStatus(StudentStatus status);
    
    boolean existsByEmail(String email);
}`}</code></pre>

        <h3>🔧 3. Service Layer</h3>

        <pre><code>{`package com.example.studentapi.service;

import com.example.studentapi.exception.ResourceNotFoundException;
import com.example.studentapi.model.Student;
import com.example.studentapi.model.StudentStatus;
import com.example.studentapi.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.List;

@Service
@Transactional
public class StudentServiceImpl implements StudentService {
    
    @Autowired
    private StudentRepository studentRepository;
    
    @Override
    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }
    
    @Override
    public Page<Student> getAllStudents(Pageable pageable) {
        return studentRepository.findAll(pageable);
    }
    
    @Override
    public Student getStudentById(Long id) {
        return studentRepository.findById(id)
            .orElseThrow(() -> new ResourceNotFoundException(
                "Không tìm thấy sinh viên với ID: " + id));
    }
    
    @Override
    public Student createStudent(Student student) {
        // Validate unique email
        if (studentRepository.existsByEmail(student.getEmail())) {
            throw new IllegalArgumentException("Email đã tồn tại: " + student.getEmail());
        }
        return studentRepository.save(student);
    }
    
    @Override
    public Student updateStudent(Long id, Student studentDetails) {
        Student student = getStudentById(id);
        
        student.setFullName(studentDetails.getFullName());
        student.setEmail(studentDetails.getEmail());
        student.setDateOfBirth(studentDetails.getDateOfBirth());
        student.setPhone(studentDetails.getPhone());
        student.setAddress(studentDetails.getAddress());
        student.setGpa(studentDetails.getGpa());
        student.setStatus(studentDetails.getStatus());
        
        return studentRepository.save(student);
    }
    
    @Override
    public void deleteStudent(Long id) {
        Student student = getStudentById(id);
        studentRepository.delete(student);
    }
    
    @Override
    public List<Student> searchByName(String name) {
        return studentRepository.findByFullNameContainingIgnoreCase(name, Pageable.unpaged()).getContent();
    }
    
    @Override
    public List<Student> getExcellentStudents() {
        return studentRepository.findExcellentStudents(3.5);
    }
}`}</code></pre>

        <h3>🎮 4. Controller Layer</h3>

        <pre><code>{`package com.example.studentapi.controller;

import com.example.studentapi.model.Student;
import com.example.studentapi.model.StudentStatus;
import com.example.studentapi.service.StudentService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/students")
@CrossOrigin(origins = "*") // Cho phép CORS
public class StudentController {
    
    @Autowired
    private StudentService studentService;
    
    // GET /api/students - Lấy tất cả sinh viên với phân trang
    @GetMapping
    public ResponseEntity<Map<String, Object>> getAllStudents(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(defaultValue = "id") String sortBy,
            @RequestParam(defaultValue = "asc") String sortDir) {
        
        Sort sort = sortDir.equalsIgnoreCase("desc") 
            ? Sort.by(sortBy).descending() 
            : Sort.by(sortBy).ascending();
            
        Pageable pageable = PageRequest.of(page, size, sort);
        Page<Student> studentPage = studentService.getAllStudents(pageable);
        
        Map<String, Object> response = new HashMap<>();
        response.put("students", studentPage.getContent());
        response.put("currentPage", studentPage.getNumber());
        response.put("totalItems", studentPage.getTotalElements());
        response.put("totalPages", studentPage.getTotalPages());
        response.put("hasNext", studentPage.hasNext());
        response.put("hasPrevious", studentPage.hasPrevious());
        
        return ResponseEntity.ok(response);
    }
    
    // GET /api/students/{id} - Lấy sinh viên theo ID
    @GetMapping("/{id}")
    public ResponseEntity<Student> getStudentById(@PathVariable Long id) {
        Student student = studentService.getStudentById(id);
        return ResponseEntity.ok(student);
    }
    
    // POST /api/students - Tạo sinh viên mới
    @PostMapping
    public ResponseEntity<Student> createStudent(@Valid @RequestBody Student student) {
        Student savedStudent = studentService.createStudent(student);
        return new ResponseEntity<>(savedStudent, HttpStatus.CREATED);
    }
    
    // PUT /api/students/{id} - Cập nhật sinh viên
    @PutMapping("/{id}")
    public ResponseEntity<Student> updateStudent(
            @PathVariable Long id, 
            @Valid @RequestBody Student studentDetails) {
        Student updatedStudent = studentService.updateStudent(id, studentDetails);
        return ResponseEntity.ok(updatedStudent);
    }
    
    // DELETE /api/students/{id} - Xóa sinh viên
    @DeleteMapping("/{id}")
    public ResponseEntity<Map<String, String>> deleteStudent(@PathVariable Long id) {
        studentService.deleteStudent(id);
        
        Map<String, String> response = new HashMap<>();
        response.put("message", "Đã xóa sinh viên có ID: " + id);
        return ResponseEntity.ok(response);
    }
    
    // GET /api/students/search - Tìm kiếm theo tên
    @GetMapping("/search")
    public ResponseEntity<List<Student>> searchStudents(@RequestParam String name) {
        List<Student> students = studentService.searchByName(name);
        return ResponseEntity.ok(students);
    }
    
    // GET /api/students/excellent - Lấy sinh viên xuất sắc
    @GetMapping("/excellent")
    public ResponseEntity<List<Student>> getExcellentStudents() {
        List<Student> students = studentService.getExcellentStudents();
        return ResponseEntity.ok(students);
    }
    
    // GET /api/students/statistics - Thống kê
    @GetMapping("/statistics")
    public ResponseEntity<Map<String, Object>> getStatistics() {
        Map<String, Object> stats = new HashMap<>();
        stats.put("totalStudents", studentService.getTotalStudentCount());
        stats.put("activeStudents", studentService.getStudentCountByStatus(StudentStatus.ACTIVE));
        stats.put("graduatedStudents", studentService.getStudentCountByStatus(StudentStatus.GRADUATED));
        stats.put("excellentStudentsCount", studentService.getExcellentStudents().size());
        
        return ResponseEntity.ok(stats);
    }
}`}</code></pre>

        <h3>⚠️ 5. Exception Handling</h3>

        <pre><code>{`package com.example.studentapi.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;

@RestControllerAdvice
public class GlobalExceptionHandler {
    
    @ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity<Map<String, Object>> handleResourceNotFound(ResourceNotFoundException ex) {
        Map<String, Object> errorResponse = createErrorResponse(
            HttpStatus.NOT_FOUND.value(),
            "Resource Not Found",
            ex.getMessage()
        );
        return new ResponseEntity<>(errorResponse, HttpStatus.NOT_FOUND);
    }
    
    @ExceptionHandler(IllegalArgumentException.class)
    public ResponseEntity<Map<String, Object>> handleIllegalArgument(IllegalArgumentException ex) {
        Map<String, Object> errorResponse = createErrorResponse(
            HttpStatus.BAD_REQUEST.value(),
            "Bad Request",
            ex.getMessage()
        );
        return new ResponseEntity<>(errorResponse, HttpStatus.BAD_REQUEST);
    }
    
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<Map<String, Object>> handleValidationExceptions(
            MethodArgumentNotValidException ex) {
        
        Map<String, String> validationErrors = new HashMap<>();
        ex.getBindingResult().getAllErrors().forEach(error -> {
            String fieldName = ((FieldError) error).getField();
            String errorMessage = error.getDefaultMessage();
            validationErrors.put(fieldName, errorMessage);
        });
        
        Map<String, Object> errorResponse = createErrorResponse(
            HttpStatus.BAD_REQUEST.value(),
            "Validation Failed",
            "Dữ liệu đầu vào không hợp lệ"
        );
        errorResponse.put("validationErrors", validationErrors);
        
        return new ResponseEntity<>(errorResponse, HttpStatus.BAD_REQUEST);
    }
    
    private Map<String, Object> createErrorResponse(int status, String error, String message) {
        Map<String, Object> errorResponse = new HashMap<>();
        errorResponse.put("timestamp", LocalDateTime.now());
        errorResponse.put("status", status);
        errorResponse.put("error", error);
        errorResponse.put("message", message);
        return errorResponse;
    }
}`}</code></pre>

        <div className="section-divider"></div>

        <h2>⚙️ Cấu hình</h2>

        <h3>📝 application.properties</h3>

        <pre><code>{`# Server Configuration
server.port=8080
server.servlet.context-path=/

# Database Configuration (H2 for demo)
spring.datasource.url=jdbc:h2:mem:studentdb
spring.datasource.driverClassName=org.h2.Driver
spring.datasource.username=sa
spring.datasource.password=password

# H2 Console (for development)
spring.h2.console.enabled=true
spring.h2.console.path=/h2-console

# JPA Configuration
spring.jpa.database-platform=org.hibernate.dialect.H2Dialect
spring.jpa.hibernate.ddl-auto=create-drop
spring.jpa.show-sql=true
spring.jpa.format-sql=true

# Logging
logging.level.com.example.studentapi=DEBUG
logging.level.org.springframework.web=DEBUG

# Validation messages in Vietnamese
spring.messages.basename=messages
spring.messages.encoding=UTF-8

# JSON format
spring.jackson.date-format=yyyy-MM-dd
spring.jackson.time-zone=Asia/Ho_Chi_Minh`}</code></pre>

        <h3>📊 Dữ liệu mẫu - data.sql</h3>

        <pre><code>{`INSERT INTO students (full_name, email, date_of_birth, phone, address, gpa, status) VALUES
('Nguyễn Văn An', 'an.nguyen@email.com', '1998-05-15', '0901234567', 'Hà Nội', 3.8, 'ACTIVE'),
('Trần Thị Bình', 'binh.tran@email.com', '1999-03-20', '0902345678', 'Hồ Chí Minh', 3.9, 'ACTIVE'),
('Lê Minh Cường', 'cuong.le@email.com', '1997-12-10', '0903456789', 'Đà Nẵng', 3.2, 'ACTIVE'),
('Phạm Thu Dung', 'dung.pham@email.com', '2000-08-25', '0904567890', 'Hải Phòng', 3.7, 'ACTIVE'),
('Hoàng Văn Em', 'em.hoang@email.com', '1996-11-05', '0905678901', 'Cần Thơ', 2.8, 'SUSPENDED'),
('Ngô Thị Giang', 'giang.ngo@email.com', '1995-02-14', '0906789012', 'Vũng Tàu', 4.0, 'GRADUATED');`}</code></pre>

        <div className="section-divider"></div>

        <h2>🧪 Test API với cURL/Postman</h2>

        <h3>📋 1. Lấy tất cả sinh viên</h3>

        <pre><code>{`curl -X GET "http://localhost:8080/api/students?page=0&size=5&sort=gpa,desc"`}</code></pre>

        <p><strong>Response:</strong></p>
        <pre><code>{`{
  "students": [
    {
      "id": 6,
      "fullName": "Ngô Thị Giang",
      "email": "giang.ngo@email.com",
      "gpa": 4.0,
      "status": "GRADUATED"
    }
  ],
  "currentPage": 0,
  "totalItems": 6,
  "totalPages": 2,
  "hasNext": true,
  "hasPrevious": false
}`}</code></pre>

        <h3>➕ 2. Tạo sinh viên mới</h3>

        <pre><code>{`curl -X POST "http://localhost:8080/api/students" \\
  -H "Content-Type: application/json" \\
  -d '{
    "fullName": "Vũ Minh Hạnh",
    "email": "hanh.vu@email.com",
    "dateOfBirth": "1999-07-15",
    "phone": "0907890123",
    "address": "Huế",
    "gpa": 3.6
  }'`}</code></pre>

        <h3>🔍 3. Tìm kiếm và thống kê</h3>

        <pre><code>{`# Tìm theo tên
curl -X GET "http://localhost:8080/api/students/search?name=Nguyen"

# Lấy sinh viên xuất sắc
curl -X GET "http://localhost:8080/api/students/excellent"

# Thống kê
curl -X GET "http://localhost:8080/api/students/statistics"`}</code></pre>

        <div className="highlight-box success">
          <h4>📊 Kết quả thống kê:</h4>
          <pre><code>{`{
  "totalStudents": 7,
  "activeStudents": 4,
  "graduatedStudents": 1,
  "excellentStudentsCount": 3
}`}</code></pre>
        </div>

        <div className="section-divider"></div>

        <h2>🚀 Triển khai và Tối ưu</h2>

        <h3>🐳 1. Dockerfile</h3>

        <pre><code>{`FROM openjdk:17-jdk-slim

WORKDIR /app

COPY target/student-api-0.0.1-SNAPSHOT.jar app.jar

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "app.jar"]`}</code></pre>

        <h3>🔧 2. Production Configuration</h3>

        <pre><code>{`# application-prod.properties

# Database
spring.datasource.url=jdbc:mysql://localhost:3306/studentdb
spring.datasource.username=\${DB_USERNAME}
spring.datasource.password=\${DB_PASSWORD}
spring.jpa.hibernate.ddl-auto=validate

# Security
server.error.include-stacktrace=never
management.endpoints.web.exposure.include=health,info

# Performance
spring.jpa.properties.hibernate.jdbc.batch_size=20
spring.jpa.properties.hibernate.order_inserts=true
spring.jpa.properties.hibernate.order_updates=true`}</code></pre>

        <div className="section-divider"></div>

        <h2>🎯 Best Practices</h2>

        <div className="highlight-box success">
          <h4>✅ Naming Conventions</h4>
          <ul>
            <li><strong>Controller</strong>: <code>StudentController</code></li>
            <li><strong>Service</strong>: <code>StudentService</code> / <code>StudentServiceImpl</code></li>
            <li><strong>Repository</strong>: <code>StudentRepository</code></li>
            <li><strong>Entity</strong>: <code>Student</code></li>
          </ul>
        </div>

        <div className="highlight-box">
          <h4>🔐 Security</h4>
          <pre><code>{`// Thêm Spring Security
@EnableWebSecurity
public class SecurityConfig {
    
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http.authorizeHttpRequests(auth -> 
            auth.requestMatchers("/api/public/**").permitAll()
                .anyRequest().authenticated())
            .oauth2ResourceServer(oauth2 -> oauth2.jwt());
        return http.build();
    }
}`}</code></pre>
        </div>

        <div className="highlight-box warning">
          <h4>📊 Logging</h4>
          <pre><code>{`@RestController
public class StudentController {
    
    private static final Logger logger = LoggerFactory.getLogger(StudentController.class);
    
    @PostMapping
    public ResponseEntity<Student> createStudent(@Valid @RequestBody Student student) {
        logger.info("Creating new student: {}", student.getEmail());
        Student savedStudent = studentService.createStudent(student);
        logger.info("Student created successfully with ID: {}", savedStudent.getId());
        return new ResponseEntity<>(savedStudent, HttpStatus.CREATED);
    }
}`}</code></pre>
        </div>

        <div className="section-divider"></div>

        <h2>🎉 Kết luận</h2>

        <p>Bạn đã tạo thành công một <strong>REST API hoàn chỉnh</strong> với Spring Boot bao gồm:</p>

        <div className="highlight-box success">
          <h4>✨ Tính năng chính:</h4>
          <ul>
            <li>✅ <strong>CRUD Operations</strong> đầy đủ</li>
            <li>✅ <strong>Search & Filter</strong> đa dạng</li>
            <li>✅ <strong>Pagination & Sorting</strong></li>
            <li>✅ <strong>Data Validation</strong></li>
            <li>✅ <strong>Exception Handling</strong></li>
            <li>✅ <strong>Statistics & Analytics</strong></li>
          </ul>
        </div>

        <div className="highlight-box">
          <h4>🏗️ Architecture tốt:</h4>
          <ul>
            <li><strong>Layered Architecture</strong>: Controller → Service → Repository</li>
            <li><strong>Separation of Concerns</strong>: Mỗi layer có trách nhiệm riêng</li>
            <li><strong>Dependency Injection</strong>: Loose coupling giữa các component</li>
          </ul>
        </div>

        <blockquote>
          🚀 <strong>Next Steps:</strong>
          <ul>
            <li>Thêm <strong>Authentication & Authorization</strong> với JWT</li>
            <li>Implement <strong>Caching</strong> với Redis</li>
            <li><strong>API Documentation</strong> với Swagger/OpenAPI</li>
            <li><strong>Monitoring</strong> với Micrometer + Prometheus</li>
            <li><strong>Testing</strong> với comprehensive test suite</li>
          </ul>
        </blockquote>

        <p>Chúc bạn thành công trong việc xây dựng API với Spring Boot! 🎯✨</p>
      </div>

      <div className="nav-buttons">
        <Link to="/posts/git-co-ban-cho-lap-trinh-vien-java" className="nav-button prev">
          <FiArrowLeft />
          Bài trước
        </Link>
        <Link to="/posts" className="nav-button">
          Danh sách bài viết
          <FiArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default SpringBootAPIPost;