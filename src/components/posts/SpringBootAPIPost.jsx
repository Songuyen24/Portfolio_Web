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
            <span>5 phút đọc</span>
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

        <p>Truy cập <a href="https://start.spring.io" target="_blank" rel="noopener noreferrer">start.spring.io</a> và chọn:</p>

        <pre><code>{`Project: Maven | Language: Java | Spring Boot: 3.2.0
Dependencies: Spring Web, Spring Data JPA, H2 Database, Validation`}</code></pre>

        <div className="section-divider"></div>

        <h2>🏗️ Xây dựng API</h2>

        <h3>📋 1. Model - Student Entity</h3>

        <pre><code>{`@Entity
@Table(name = "students")
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @NotBlank(message = "Tên không được để trống")
    private String fullName;
    
    @Email(message = "Email không đúng định dạng")
    private String email;
    
    @Past(message = "Ngày sinh phải là quá khứ")
    private LocalDate dateOfBirth;
    
    @Min(0) @Max(4)
    private Double gpa;
    
    // Getters, Setters...
}`}</code></pre>

        <h3>🗃️ 2. Repository</h3>

        <pre><code>{`@Repository
public interface StudentRepository extends JpaRepository<Student, Long> {
    List<Student> findByStatus(StudentStatus status);
    Page<Student> findByFullNameContainingIgnoreCase(String name, Pageable pageable);
    
    @Query("SELECT s FROM Student s WHERE s.gpa >= :minGpa")
    List<Student> findExcellentStudents(@Param("minGpa") double minGpa);
}`}</code></pre>

        <h3>🔧 3. Service</h3>

        <pre><code>{`@Service
public class StudentServiceImpl implements StudentService {
    @Autowired
    private StudentRepository studentRepository;
    
    public Student getStudentById(Long id) {
        return studentRepository.findById(id)
            .orElseThrow(() -> new ResourceNotFoundException("Không tìm thấy ID: " + id));
    }
    
    public Student createStudent(Student student) {
        if (studentRepository.existsByEmail(student.getEmail())) {
            throw new IllegalArgumentException("Email đã tồn tại");
        }
        return studentRepository.save(student);
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
}`}</code></pre>

        <h3>⚠️ 5. Exception Handling</h3>

        <pre><code>{`@RestControllerAdvice
public class GlobalExceptionHandler {
    
    @ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity<Map<String, Object>> handleResourceNotFound(ResourceNotFoundException ex) {
        Map<String, Object> error = Map.of(
            "timestamp", LocalDateTime.now(),
            "status", 404,
            "message", ex.getMessage()
        );
        return new ResponseEntity<>(error, HttpStatus.NOT_FOUND);
    }
    
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<Map<String, Object>> handleValidation(MethodArgumentNotValidException ex) {
        Map<String, String> errors = new HashMap<>();
        ex.getBindingResult().getAllErrors().forEach(error -> {
            errors.put(((FieldError) error).getField(), error.getDefaultMessage());
        });
        return new ResponseEntity<>(Map.of("validationErrors", errors), HttpStatus.BAD_REQUEST);
    }
}`}</code></pre>

        <div className="section-divider"></div>

        <h2>⚙️ Cấu hình</h2>

        <pre><code>{`# application.properties
server.port=8080

# H2 Database
spring.datasource.url=jdbc:h2:mem:studentdb
spring.h2.console.enabled=true

# JPA
spring.jpa.show-sql=true
spring.jpa.hibernate.ddl-auto=create-drop`}</code></pre>

        <div className="section-divider"></div>

        <h2>🧪 Test API</h2>

        <pre><code>{`# GET all students
curl "http://localhost:8080/api/students?page=0&size=5"

# GET by ID
curl "http://localhost:8080/api/students/1"

# POST - Create
curl -X POST "http://localhost:8080/api/students" \\
  -H "Content-Type: application/json" \\
  -d '{"fullName":"Nguyễn Văn A","email":"a@email.com","dateOfBirth":"1999-01-01","gpa":3.5}'

# PUT - Update
curl -X PUT "http://localhost:8080/api/students/1" \\
  -H "Content-Type: application/json" \\
  -d '{"fullName":"Updated Name","gpa":3.8}'

# DELETE
curl -X DELETE "http://localhost:8080/api/students/1"`}</code></pre>

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