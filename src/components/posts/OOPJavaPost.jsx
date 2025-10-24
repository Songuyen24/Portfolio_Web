import React from 'react';
import { Link } from 'react-router-dom';
import { FiCalendar, FiClock, FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import '../../assets/styles/BlogPost.css';

const OOPJavaPost = () => {
  return (
    <div className="blog-post">
      <div className="blog-header">
        <h1 className="blog-title">
          🏗️ Lập trình hướng đối tượng (OOP) trong Java
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
            <span>📂 Java Cơ Bản</span>
          </div>
        </div>
        
        <p className="blog-excerpt">
          Tìm hiểu chi tiết về lập trình hướng đối tượng trong Java với 4 tính chất cốt lõi và ví dụ thực tế
        </p>
        
        <div className="blog-tags">
          <span className="tag">Java</span>
          <span className="tag">OOP</span>
          <span className="tag">Class</span>
          <span className="tag">Object</span>
        </div>
      </div>

      <div className="blog-content">
        <h2>🎯 Giới thiệu về OOP</h2>
        
        <p>
          <strong>Lập trình hướng đối tượng (Object-Oriented Programming - OOP)</strong> là một paradigm 
          lập trình mạnh mẽ, giúp tổ chức code một cách logic và dễ bảo trì.
        </p>

        <p>Java là ngôn ngữ <strong>OOP thuần túy</strong> - mọi thứ đều là đối tượng (trừ primitive types).</p>

        <blockquote>
          💡 <strong>Tại sao OOP quan trọng?</strong>
          <ul>
            <li>Code dễ hiểu và bảo trì</li>
            <li>Tái sử dụng code hiệu quả</li>
            <li>Mô phỏng thế giới thực tốt hơn</li>
            <li>Dễ mở rộng và phát triển</li>
          </ul>
        </blockquote>

        <div className="section-divider"></div>

        <h2>🏗️ Khái niệm cơ bản</h2>

        <h3>🔹 Class (Lớp)</h3>
        <p><strong>Class</strong> là một bản thiết kế (blueprint) định nghĩa thuộc tính và hành vi của đối tượng.</p>

        <pre><code>{`public class Student {
    private String name;
    private int age;
    
    public Student(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    public void study() {
        System.out.println(name + " đang học bài");
    }
}`}</code></pre>

        <h3>🔹 Object (Đối tượng)</h3>
        <p><strong>Object</strong> là một thể hiện cụ thể của class.</p>

        <pre><code>{`Student student1 = new Student("Nguyễn Văn A", 20);
student1.study(); // Nguyễn Văn A đang học bài`}</code></pre>

        <div className="section-divider"></div>

        <h2>🎭 4 Tính chất cốt lõi của OOP</h2>

        <h3>1️⃣ Encapsulation (Đóng gói)</h3>

        <p><strong>Encapsulation</strong> che giấu dữ liệu và chỉ cho phép truy cập qua methods.</p>

        <pre><code>{`public class BankAccount {
    private double balance; // Private - bảo vệ dữ liệu
    
    public void deposit(double amount) {
        if (amount > 0) balance += amount;
    }
    
    public double getBalance() {
        return balance;
    }
}`}</code></pre>

        <h3>2️⃣ Inheritance (Kế thừa)</h3>

        <p><strong>Inheritance</strong> cho phép class con kế thừa từ class cha.</p>

        <pre><code>{`public class Animal {
    protected String name;
    
    public void eat() {
        System.out.println(name + " đang ăn");
    }
}

public class Dog extends Animal {
    @Override
    public void eat() {
        System.out.println(name + " ăn xương");
    }
    
    public void bark() {
        System.out.println("Gâu gâu!");
    }
}`}</code></pre>

        <h3>3️⃣ Polymorphism (Đa hình)</h3>

        <p><strong>Polymorphism</strong> cho phép một đối tượng có nhiều hình thái.</p>

        <pre><code>{`Shape[] shapes = {
    new Circle(5.0),
    new Rectangle(4.0, 6.0)
};

for (Shape shape : shapes) {
    shape.draw(); // Mỗi shape vẽ theo cách riêng
}`}</code></pre>

        <h3>4️⃣ Abstraction (Trừu tượng)</h3>

        <p><strong>Abstraction</strong> ẩn chi tiết implementation.</p>

        <pre><code>{`// Abstract Class
public abstract class Vehicle {
    public abstract void startEngine();
}

// Interface
public interface Drawable {
    void draw();
    void setColor(String color);
}

public class Car extends Vehicle implements Drawable {
    @Override
    public void startEngine() {
        System.out.println("Khởi động động cơ");
    }
    
    @Override
    public void draw() {
        System.out.println("Vẽ xe");
    }
    
    @Override
    public void setColor(String color) {
        // Implementation
    }
}`}</code></pre>

        <div className="section-divider"></div>

        <h2> Best Practices</h2>

        <h3>🔹 Nguyên tắc SOLID</h3>
        <ul>
          <li><strong>S - Single Responsibility</strong>: Một class một nhiệm vụ</li>
          <li><strong>O - Open/Closed</strong>: Mở để mở rộng, đóng để sửa đổi</li>
          <li><strong>L - Liskov Substitution</strong>: Class con thay thế được class cha</li>
          <li><strong>I - Interface Segregation</strong>: Chia interface nhỏ</li>
          <li><strong>D - Dependency Inversion</strong>: Phụ thuộc vào abstraction</li>
        </ul>

        <div className="section-divider"></div>

        <h2>🎉 Kết luận</h2>

        <p>OOP là nền tảng quan trọng trong Java, giúp:</p>
        
        <ul>
          <li>📝 <strong>Tổ chức code</strong> một cách logic và rõ ràng</li>
          <li>🔄 <strong>Tái sử dụng</strong> code hiệu quả</li>
          <li>🛠️ <strong>Bảo trì</strong> và mở rộng dễ dàng</li>
          <li>👥 <strong>Làm việc nhóm</strong> hiệu quả hơn</li>
        </ul>

        <blockquote>
          💻 <strong>Tip</strong>: Bắt đầu với các project nhỏ như quản lý sinh viên, thư viện sách, 
          hoặc game đơn giản để áp dụng 4 tính chất OOP.
        </blockquote>

        <p>Hãy thực hành nhiều với các ví dụ thực tế để thành thạo OOP trong Java! 🚀</p>
      </div>

      <div className="nav-buttons">
        <Link to="/posts/java-la-gi-gioi-thieu-ngon-ngu-lap-trinh" className="nav-button prev">
          <FiArrowLeft />
          Bài trước
        </Link>
        <Link to="/posts/git-co-ban-cho-lap-trinh-vien-java" className="nav-button">
          Bài tiếp theo
          <FiArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default OOPJavaPost;