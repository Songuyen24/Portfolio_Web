import React from 'react';
import { Link } from 'react-router-dom';
import { FiCalendar, FiClock, FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import '../../assets/styles/BlogPost.css';

const JavaIntroPost = () => {
  return (
    <div className="blog-post">
      <div className="blog-header">
        <h1 className="blog-title">
          ☕ Java là gì? Vì sao nó vẫn phổ biến sau hơn 25 năm?
        </h1>
        
        <div className="blog-meta">
          <div className="meta-item">
            <FiCalendar />
            <span>10 tháng 10, 2025</span>
          </div>
          <div className="meta-item">
            <FiClock />
            <span>8 phút đọc</span>
          </div>
          <div className="meta-item">
            <span>📂 Java Cơ Bản</span>
          </div>
        </div>
        
        <p className="blog-excerpt">
          Java là một ngôn ngữ lập trình bậc cao, ra đời vào năm 1995. 
          Java nổi tiếng với khẩu hiệu "Write Once, Run Anywhere" – Viết một lần, chạy mọi nơi.
        </p>
        
        <div className="blog-tags">
          <span className="tag">Java</span>
          <span className="tag">Lập trình</span>
          <span className="tag">OOP</span>
        </div>
      </div>

      <div className="blog-content">
        <h2>🎯 Giới thiệu</h2>
        
        <p>
          <strong>Java</strong> là một ngôn ngữ lập trình bậc cao, ra đời vào năm <strong>1995</strong> bởi 
          <strong> James Gosling</strong> tại Sun Microsystems (nay thuộc Oracle). Java nổi tiếng với khẩu hiệu 
          <strong>"Write Once, Run Anywhere"</strong> – <em>Viết một lần, chạy mọi nơi</em>.
        </p>

        <blockquote>
          💡 <strong>Mục tiêu của Java</strong> là cho phép phần mềm chạy được trên nhiều hệ điều hành 
          khác nhau mà không cần chỉnh sửa mã nguồn.
        </blockquote>

        <div className="section-divider"></div>

        <h2>🧩 Vì sao Java vẫn phổ biến sau hơn 25 năm?</h2>

        <h3>1️⃣ Độc lập nền tảng</h3>
        <p>
          Java không chạy trực tiếp trên hệ điều hành mà chạy thông qua <strong>JVM (Java Virtual Machine)</strong>. 
          Nhờ đó, chương trình Java có thể chạy trên <strong>Windows, Linux, macOS</strong> mà không cần biên dịch lại.
        </p>

        <pre><code>{`javac Hello.java   # Biên dịch thành file bytecode (.class)
java Hello         # Chạy chương trình qua JVM`}</code></pre>

        <h3>2️⃣ Hướng đối tượng mạnh mẽ</h3>
        <p>Java là ngôn ngữ lập trình hướng đối tượng (OOP) thuần túy với 4 tính chất cốt lõi:</p>
        <ul>
          <li><strong>Đóng gói (Encapsulation)</strong>: Che giấu dữ liệu bên trong class</li>
          <li><strong>Kế thừa (Inheritance)</strong>: Class con có thể kế thừa từ class cha</li>
          <li><strong>Đa hình (Polymorphism)</strong>: Một phương thức có thể có nhiều hình thái khác nhau</li>
          <li><strong>Trừu tượng (Abstraction)</strong>: Ẩn đi các chi tiết phức tạp, chỉ hiển thị những gì cần thiết</li>
        </ul>

        <pre><code>{`// Ví dụ về OOP trong Java
public class Animal {
    protected String name;
    
    public void makeSound() {
        System.out.println("Động vật kêu...");
    }
}

public class Dog extends Animal {
    @Override
    public void makeSound() {
        System.out.println("Gâu gâu!");
    }
}`}</code></pre>

        <h3>3️⃣ An toàn và bảo mật cao</h3>
        <p>Java được thiết kế với nhiều tính năng bảo mật:</p>
        <ul>
          <li><strong>Quản lý bộ nhớ tự động</strong>: Garbage Collector tự động thu hồi bộ nhớ</li>
          <li><strong>Không có con trỏ</strong>: Tránh các lỗi truy cập bộ nhớ không hợp lệ</li>
          <li><strong>Kiểm tra lỗi compile-time</strong>: Phát hiện lỗi ngay khi biên dịch</li>
          <li><strong>Sandbox Security Model</strong>: Kiểm soát quyền truy cập của ứng dụng</li>
        </ul>

        <h3>4️⃣ Hiệu suất cao và tối ưu</h3>
        <ul>
          <li><strong>JIT Compiler</strong>: Biên dịch bytecode thành mã máy tại runtime</li>
          <li><strong>Multithreading</strong>: Hỗ trợ lập trình đa luồng mạnh mẽ</li>
          <li><strong>Optimization</strong>: JVM liên tục tối ưu hóa performance</li>
          <li><strong>Scalability</strong>: Dễ dàng mở rộng quy mô ứng dụng</li>
        </ul>

        <h3>5️⃣ Cộng đồng và thư viện phong phú</h3>
        <ul>
          <li><strong>Open Source</strong>: Miễn phí và mã nguồn mở</li>
          <li><strong>Thư viện khổng lồ</strong>: Hàng triệu thư viện có sẵn trên Maven Central</li>
          <li><strong>Cộng đồng lớn</strong>: Hơn 9 triệu lập trình viên Java trên toàn thế giới</li>
          <li><strong>Tài liệu phong phú</strong>: Oracle documentation, tutorials, forums</li>
        </ul>

        <div className="section-divider"></div>

        <h2>🚀 Java được sử dụng ở đâu?</h2>

        <h3>💼 Enterprise Applications</h3>
        <ul>
          <li><strong>Ngân hàng</strong>: JPMorgan Chase, Goldman Sachs</li>
          <li><strong>E-commerce</strong>: Amazon, eBay, LinkedIn</li>
          <li><strong>Fintech</strong>: PayPal, Square</li>
        </ul>

        <h3>📱 Mobile Development</h3>
        <ul>
          <li><strong>Android</strong>: 100% ứng dụng Android có thể viết bằng Java</li>
          <li><strong>Cross-platform</strong>: LibGDX, Codename One</li>
        </ul>

        <h3>🌐 Web Development</h3>
        <ul>
          <li><strong>Backend</strong>: Spring Boot, Spring MVC</li>
          <li><strong>Microservices</strong>: Spring Cloud, Apache Kafka</li>
          <li><strong>API</strong>: RESTful services, GraphQL</li>
        </ul>

        <h3>📊 Big Data & Analytics</h3>
        <ul>
          <li><strong>Apache Hadoop</strong>: Xử lý dữ liệu lớn</li>
          <li><strong>Apache Spark</strong>: Analytics real-time</li>
          <li><strong>Elasticsearch</strong>: Search engine</li>
        </ul>

        <div className="section-divider"></div>

        <h2>💻 Ví dụ chương trình Java đầu tiên</h2>

        <pre><code>{`public class HelloJava {
    public static void main(String[] args) {
        System.out.println("Chào mừng đến với thế giới Java!");
        
        // Khai báo biến
        String name = "Lập trình viên";
        int age = 25;
        
        // In ra thông tin
        System.out.println("Tên: " + name);
        System.out.println("Tuổi: " + age);
        
        // Sử dụng điều kiện
        if (age >= 18) {
            System.out.println("Bạn đã đủ tuổi học lập trình Java!");
        }
    }
}`}</code></pre>

        <div className="highlight-box success">
          <strong>🎯 Kết quả chạy:</strong><br/>
          Chào mừng đến với thế giới Java!<br/>
          Tên: Lập trình viên<br/>
          Tuổi: 25<br/>
          Bạn đã đủ tuổi học lập trình Java!
        </div>

        <div className="section-divider"></div>

        <h2>🎯 Tại sao nên học Java?</h2>

        <div className="highlight-box">
          <h4>✅ Ưu điểm</h4>
          <ul>
            <li><strong>Dễ học</strong>: Cú pháp đơn giản, gần gũi với ngôn ngữ tự nhiên</li>
            <li><strong>Việc làm nhiều</strong>: Top 3 ngôn ngữ có nhu cầu tuyển dụng cao nhất</li>
            <li><strong>Lương cao</strong>: Lương Java Developer trung bình 800 - 3000 USD/tháng</li>
            <li><strong>Ổn định</strong>: Không lo ngại về việc ngôn ngữ bị "chết"</li>
            <li><strong>Nền tảng vững</strong>: Kiến thức Java là nền tảng cho Android, Spring, Big Data</li>
          </ul>
        </div>

        <div className="highlight-box warning">
          <h4>⚠️ Nhược điểm</h4>
          <ul>
            <li><strong>Verbose</strong>: Code dài dòng hơn Python, JavaScript</li>
            <li><strong>Tốc độ phát triển</strong>: Chậm hơn so với các ngôn ngữ dynamic</li>
            <li><strong>Memory usage</strong>: Tiêu tốn nhiều RAM hơn C/C++</li>
          </ul>
        </div>

        <div className="section-divider"></div>

        <h2>🔗 Roadmap học Java</h2>

        <h3>📚 Giai đoạn 1: Java Core (2-3 tháng)</h3>
        <ol>
          <li><strong>Cơ bản</strong>: Biến, kiểu dữ liệu, toán tử</li>
          <li><strong>Điều khiển</strong>: if/else, switch, loops</li>
          <li><strong>OOP</strong>: Class, Object, Inheritance, Polymorphism</li>
          <li><strong>Exception Handling</strong>: Try/catch, custom exceptions</li>
          <li><strong>Collections</strong>: ArrayList, HashMap, Set</li>
        </ol>

        <h3>🌐 Giai đoạn 2: Advanced Java (3-4 tháng)</h3>
        <ol>
          <li><strong>Multithreading</strong>: Thread, Synchronization</li>
          <li><strong>I/O</strong>: File handling, Streams</li>
          <li><strong>Networking</strong>: Socket programming</li>
          <li><strong>Database</strong>: JDBC, Connection pooling</li>
          <li><strong>Design Patterns</strong>: Singleton, Factory, Observer</li>
        </ol>

        <h3>🏗️ Giai đoạn 3: Framework (4-6 tháng)</h3>
        <ol>
          <li><strong>Spring Framework</strong>: IoC, DI, AOP</li>
          <li><strong>Spring Boot</strong>: Auto-configuration, Starter</li>
          <li><strong>Spring MVC</strong>: RESTful APIs</li>
          <li><strong>JPA/Hibernate</strong>: ORM, Database mapping</li>
          <li><strong>Testing</strong>: JUnit, Mockito</li>
        </ol>

        <div className="section-divider"></div>

        <h2>🎉 Kết luận</h2>

        <p>
          Java đã và đang chứng minh sự bền vững của mình qua hơn <strong>28 năm phát triển</strong>. 
          Với <strong>Write Once, Run Anywhere</strong>, tính bảo mật cao, hiệu suất tốt và cộng đồng mạnh mẽ, 
          Java vẫn là lựa chọn hàng đầu cho:
        </p>

        <ul>
          <li>🏢 <strong>Enterprise applications</strong></li>
          <li>📱 <strong>Mobile development</strong> (Android)</li>
          <li>🌐 <strong>Web backend services</strong></li>
          <li>📊 <strong>Big Data processing</strong></li>
        </ul>

        <blockquote>
          💼 <strong>Thống kê</strong>: Theo TIOBE Index 2025, Java vẫn nằm trong <strong>Top 3</strong> ngôn ngữ 
          lập trình phổ biến nhất thế giới, với hơn <strong>9 tỷ thiết bị</strong> chạy Java.
        </blockquote>

        <div className="highlight-box success">
          <p><strong>Bạn đã sẵn sàng bắt đầu hành trình với Java chưa?</strong> ☕✨</p>
        </div>
      </div>

      <div className="nav-buttons">
        <Link to="/posts" className="nav-button prev">
          <FiArrowLeft />
          Quay lại danh sách
        </Link>
        <Link to="/posts/lap-trinh-huong-doi-tuong-oop-java" className="nav-button">
          Bài tiếp theo
          <FiArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default JavaIntroPost;