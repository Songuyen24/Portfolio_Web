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
            <span>15 phút đọc</span>
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
    // Thuộc tính (Attributes/Fields)
    private String name;
    private int age;
    private String studentId;
    
    // Constructor
    public Student(String name, int age, String studentId) {
        this.name = name;
        this.age = age;
        this.studentId = studentId;
    }
    
    // Phương thức (Methods)
    public void study() {
        System.out.println(name + " đang học bài");
    }
    
    public void takeExam() {
        System.out.println(name + " đang làm bài thi");
    }
    
    // Getter và Setter
    public String getName() {
        return name;
    }
    
    public void setName(String name) {
        this.name = name;
    }
}`}</code></pre>

        <h3>🔹 Object (Đối tượng)</h3>
        <p><strong>Object</strong> là một thể hiện cụ thể của class.</p>

        <pre><code>{`public class Main {
    public static void main(String[] args) {
        // Tạo đối tượng từ class Student
        Student student1 = new Student("Nguyễn Văn A", 20, "SV001");
        Student student2 = new Student("Trần Thị B", 19, "SV002");
        
        // Sử dụng các phương thức
        student1.study();    // Nguyễn Văn A đang học bài
        student2.takeExam(); // Trần Thị B đang làm bài thi
        
        // Truy cập thuộc tính thông qua getter
        System.out.println("Tên sinh viên 1: " + student1.getName());
    }
}`}</code></pre>

        <div className="section-divider"></div>

        <h2>🎭 4 Tính chất cốt lõi của OOP</h2>

        <h3>1️⃣ Encapsulation (Đóng gói)</h3>

        <p>
          <strong>Encapsulation</strong> che giấu dữ liệu bên trong class và chỉ cho phép truy cập 
          thông qua các phương thức public.
        </p>

        <pre><code>{`public class BankAccount {
    // Private - chỉ truy cập được trong class
    private String accountNumber;
    private double balance;
    
    // Constructor
    public BankAccount(String accountNumber, double initialBalance) {
        this.accountNumber = accountNumber;
        this.balance = initialBalance;
    }
    
    // Public methods - interface để tương tác
    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
            System.out.println("Nạp " + amount + "đ thành công");
        } else {
            System.out.println("Số tiền không hợp lệ");
        }
    }
    
    public boolean withdraw(double amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            System.out.println("Rút " + amount + "đ thành công");
            return true;
        }
        System.out.println("Không đủ số dư hoặc số tiền không hợp lệ");
        return false;
    }
    
    // Getter methods
    public double getBalance() {
        return balance;
    }
    
    public String getAccountNumber() {
        return accountNumber;
    }
}`}</code></pre>

        <div className="highlight-box success">
          <strong>🎯 Lợi ích của Encapsulation:</strong>
          <ul>
            <li>✅ Bảo vệ dữ liệu khỏi truy cập trái phép</li>
            <li>✅ Kiểm soát cách dữ liệu được thay đổi</li>
            <li>✅ Dễ dàng thay đổi implementation</li>
          </ul>
        </div>

        <h3>2️⃣ Inheritance (Kế thừa)</h3>

        <p><strong>Inheritance</strong> cho phép class con kế thừa thuộc tính và phương thức từ class cha.</p>

        <pre><code>{`// Class cha (Parent/Super class)
public class Animal {
    protected String name;
    protected int age;
    
    public Animal(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    public void eat() {
        System.out.println(name + " đang ăn");
    }
    
    public void sleep() {
        System.out.println(name + " đang ngủ");
    }
    
    public void makeSound() {
        System.out.println("Động vật kêu...");
    }
}

// Class con (Child/Sub class)
public class Dog extends Animal {
    private String breed;
    
    public Dog(String name, int age, String breed) {
        super(name, age); // Gọi constructor của class cha
        this.breed = breed;
    }
    
    // Override phương thức của class cha
    @Override
    public void makeSound() {
        System.out.println(name + " sủa: Gâu gâu!");
    }
    
    // Phương thức riêng của Dog
    public void wagTail() {
        System.out.println(name + " vẫy đuôi");
    }
}

public class Cat extends Animal {
    public Cat(String name, int age) {
        super(name, age);
    }
    
    @Override
    public void makeSound() {
        System.out.println(name + " kêu: Meo meo!");
    }
    
    public void climb() {
        System.out.println(name + " leo cây");
    }
}`}</code></pre>

        <h3>3️⃣ Polymorphism (Đa hình)</h3>

        <p><strong>Polymorphism</strong> cho phép một đối tượng có thể có nhiều hình thái khác nhau.</p>

        <pre><code>{`public class Shape {
    public double calculateArea() {
        return 0;
    }
    
    public void draw() {
        System.out.println("Vẽ hình");
    }
}

public class Circle extends Shape {
    private double radius;
    
    public Circle(double radius) {
        this.radius = radius;
    }
    
    @Override
    public double calculateArea() {
        return Math.PI * radius * radius;
    }
    
    @Override
    public void draw() {
        System.out.println("Vẽ hình tròn");
    }
}

public class Rectangle extends Shape {
    private double width, height;
    
    public Rectangle(double width, double height) {
        this.width = width;
        this.height = height;
    }
    
    @Override
    public double calculateArea() {
        return width * height;
    }
    
    @Override
    public void draw() {
        System.out.println("Vẽ hình chữ nhật");
    }
}

// Sử dụng Polymorphism
public class ShapeTest {
    public static void main(String[] args) {
        // Tạo mảng các hình
        Shape[] shapes = {
            new Circle(5.0),
            new Rectangle(4.0, 6.0),
            new Triangle(3.0, 4.0)
        };
        
        // Polymorphism in action
        for (Shape shape : shapes) {
            shape.draw();                    // Gọi phương thức tương ứng
            System.out.println("Diện tích: " + shape.calculateArea());
            System.out.println("---");
        }
    }
}`}</code></pre>

        <h3>4️⃣ Abstraction (Trừu tượng)</h3>

        <p><strong>Abstraction</strong> ẩn đi chi tiết implementation và chỉ hiển thị những gì cần thiết.</p>

        <h4>📌 Abstract Class</h4>

        <pre><code>{`public abstract class Vehicle {
    protected String brand;
    protected String model;
    protected int year;
    
    public Vehicle(String brand, String model, int year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    
    // Phương thức abstract - bắt buộc phải override
    public abstract void startEngine();
    public abstract void stopEngine();
    public abstract double calculateFuelConsumption();
    
    // Phương thức thông thường
    public void displayInfo() {
        System.out.println("Xe: " + brand + " " + model + " (" + year + ")");
    }
}

public class Car extends Vehicle {
    private String fuelType;
    
    public Car(String brand, String model, int year, String fuelType) {
        super(brand, model, year);
        this.fuelType = fuelType;
    }
    
    @Override
    public void startEngine() {
        System.out.println("Khởi động động cơ ô tô " + fuelType);
    }
    
    @Override
    public void stopEngine() {
        System.out.println("Tắt động cơ ô tô");
    }
    
    @Override
    public double calculateFuelConsumption() {
        return 8.5; // 8.5L/100km
    }
}`}</code></pre>

        <h4>📌 Interface</h4>

        <pre><code>{`public interface Drawable {
    // Tất cả methods trong interface đều abstract (Java 8+)
    void draw();
    void setColor(String color);
    
    // Default method (Java 8+)
    default void print() {
        System.out.println("In hình");
    }
    
    // Static method (Java 8+)
    static void showInfo() {
        System.out.println("Interface Drawable");
    }
}

public interface Movable {
    void move(int x, int y);
    void rotate(double angle);
}

// Class có thể implement nhiều interface
public class GameCharacter implements Drawable, Movable {
    private String name;
    private String color;
    private int x, y;
    
    public GameCharacter(String name) {
        this.name = name;
        this.color = "white";
        this.x = 0;
        this.y = 0;
    }
    
    @Override
    public void draw() {
        System.out.println("Vẽ nhân vật " + name + " màu " + color);
    }
    
    @Override
    public void setColor(String color) {
        this.color = color;
    }
    
    @Override
    public void move(int x, int y) {
        this.x = x;
        this.y = y;
        System.out.println(name + " di chuyển đến (" + x + ", " + y + ")");
    }
    
    @Override
    public void rotate(double angle) {
        System.out.println(name + " quay " + angle + " độ");
    }
}`}</code></pre>

        <div className="section-divider"></div>

        <h2>🚀 Ví dụ thực tế - Hệ thống quản lý thư viện</h2>

        <pre><code>{`// Abstract class cho tất cả loại sách
public abstract class Book {
    protected String title;
    protected String author;
    protected String isbn;
    protected boolean isAvailable;
    
    public Book(String title, String author, String isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.isAvailable = true;
    }
    
    // Abstract methods
    public abstract double calculateLateFee(int daysLate);
    public abstract int getMaxBorrowDays();
    
    // Concrete methods
    public void borrowBook() {
        if (isAvailable) {
            isAvailable = false;
            System.out.println("Đã mượn: " + title);
        } else {
            System.out.println("Sách đang được mượn");
        }
    }
    
    public void returnBook() {
        isAvailable = true;
        System.out.println("Đã trả: " + title);
    }
}

// Interface cho sách có thể gia hạn
public interface Renewable {
    boolean renew();
    int getRenewCount();
}

// Sách giáo khoa
public class TextBook extends Book implements Renewable {
    private String subject;
    private int renewCount;
    
    public TextBook(String title, String author, String isbn, String subject) {
        super(title, author, isbn);
        this.subject = subject;
        this.renewCount = 0;
    }
    
    @Override
    public double calculateLateFee(int daysLate) {
        return daysLate * 2000; // 2000đ/ngày
    }
    
    @Override
    public int getMaxBorrowDays() {
        return 30; // 30 ngày
    }
    
    @Override
    public boolean renew() {
        if (renewCount < 2) { // Tối đa 2 lần gia hạn
            renewCount++;
            System.out.println("Gia hạn thành công lần thứ " + renewCount);
            return true;
        }
        return false;
    }
    
    @Override
    public int getRenewCount() {
        return renewCount;
    }
}`}</code></pre>

        <div className="section-divider"></div>

        <h2>🎯 Lợi ích của OOP trong Java</h2>

        <div className="highlight-box success">
          <h4>✅ Ưu điểm</h4>
          <ol>
            <li><strong>Tái sử dụng code</strong>: Inheritance và Composition</li>
            <li><strong>Dễ bảo trì</strong>: Encapsulation che giấu implementation</li>
            <li><strong>Mở rộng dễ dàng</strong>: Polymorphism và Interface</li>
            <li><strong>Mô phỏng thực tế</strong>: Gần gũi với thế giới thực</li>
            <li><strong>Team work</strong>: Nhiều người có thể làm việc trên các class khác nhau</li>
          </ol>
        </div>

        <div className="highlight-box warning">
          <h4>⚠️ Nhược điểm</h4>
          <ol>
            <li><strong>Phức tạp</strong>: Cần hiểu sâu về thiết kế</li>
            <li><strong>Performance</strong>: Có thể chậm hơn procedural programming</li>
            <li><strong>Over-engineering</strong>: Dễ thiết kế phức tạp không cần thiết</li>
          </ol>
        </div>

        <div className="section-divider"></div>

        <h2>💡 Best Practices</h2>

        <h3>🔹 Nguyên tắc SOLID</h3>
        <ol>
          <li><strong>S - Single Responsibility</strong>: Một class chỉ có một lý do để thay đổi</li>
          <li><strong>O - Open/Closed</strong>: Mở để mở rộng, đóng để sửa đổi</li>
          <li><strong>L - Liskov Substitution</strong>: Đối tượng của class con có thể thay thế class cha</li>
          <li><strong>I - Interface Segregation</strong>: Chia interface thành các phần nhỏ</li>
          <li><strong>D - Dependency Inversion</strong>: Phụ thuộc vào abstraction, không phải concrete</li>
        </ol>

        <h3>🔹 Design Patterns phổ biến</h3>
        <ul>
          <li><strong>Singleton</strong>: Chỉ có một instance duy nhất</li>
          <li><strong>Factory</strong>: Tạo đối tượng mà không cần biết class cụ thể</li>
          <li><strong>Observer</strong>: Thông báo thay đổi cho nhiều đối tượng</li>
          <li><strong>Strategy</strong>: Thay đổi algorithm tại runtime</li>
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