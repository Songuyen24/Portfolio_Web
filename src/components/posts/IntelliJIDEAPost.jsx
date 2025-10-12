import React from 'react';
import { Link } from 'react-router-dom';
import { FiCalendar, FiClock, FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import '../../assets/styles/BlogPost.css';

const IntelliJIDEAPost = () => {
  return (
    <div className="blog-post">
      <div className="blog-header">
        <h1 className="blog-title">
          💡 IntelliJ IDEA – IDE mạnh mẽ và thông minh dành cho lập trình viên Java
        </h1>
        
        <div className="blog-meta">
          <div className="meta-item">
            <FiCalendar />
            <span>13 tháng 10, 2025</span>
          </div>
          <div className="meta-item">
            <FiClock />
            <span>20 phút đọc</span>
          </div>
          <div className="meta-item">
            <span>📂 Tools & IDE</span>
          </div>
        </div>
        
        <p className="blog-excerpt">
          IntelliJ IDEA là một trong những IDE phổ biến nhất dành cho Java, với nhiều tính năng tự động hoá, gợi ý thông minh và hỗ trợ framework hiện đại như Spring Boot
        </p>
        
        <div className="blog-tags">
          <span className="tag">IntelliJ IDEA</span>
          <span className="tag">IDE</span>
          <span className="tag">Java</span>
          <span className="tag">Spring Boot</span>
          <span className="tag">JetBrains</span>
        </div>
      </div>

      <div className="blog-content">
        <h2>🚀 Giới thiệu IntelliJ IDEA</h2>
        
        <p>
          <strong>IntelliJ IDEA</strong> là Integrated Development Environment (IDE) được phát triển bởi 
          <strong>JetBrains</strong>, được coi là một trong những IDE tốt nhất cho phát triển Java và các ngôn ngữ JVM khác.
        </p>

        <blockquote>
          💡 <strong>Triết lý của IntelliJ IDEA</strong>: "Intelligent coding assistance" - 
          Hỗ trợ lập trình viên thông minh để tăng productivity và giảm bugs.
        </blockquote>

        <div className="highlight-box success">
          <h4>🌟 Tại sao chọn IntelliJ IDEA?</h4>
          <ul>
            <li>🧠 <strong>Smart Code Completion</strong>: Gợi ý thông minh và chính xác</li>
            <li>🔧 <strong>Powerful Refactoring</strong>: Refactor code an toàn</li>
            <li>🐛 <strong>Advanced Debugging</strong>: Debug tools mạnh mẽ</li>
            <li>🌱 <strong>Framework Support</strong>: Spring, Hibernate, Maven, Gradle...</li>
            <li>🔌 <strong>Plugin Ecosystem</strong>: Hàng nghìn plugins</li>
            <li>⚡ <strong>Performance</strong>: Nhanh và ổn định</li>
          </ul>
        </div>

        <h2>📦 Các phiên bản IntelliJ IDEA</h2>

        <table>
          <thead>
            <tr>
              <th>Phiên bản</th>
              <th>Giá</th>
              <th>Tính năng chính</th>
              <th>Phù hợp cho</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Community Edition</strong></td>
              <td>🆓 Miễn phí</td>
              <td>Java, Kotlin, Scala, Maven, Gradle</td>
              <td>Học tập, dự án cá nhân</td>
            </tr>
            <tr>
              <td><strong>Ultimate Edition</strong></td>
              <td>💰 $149/năm</td>
              <td>Full features, Spring, Web, Database</td>
              <td>Dự án commercial, enterprise</td>
            </tr>
            <tr>
              <td><strong>Educational</strong></td>
              <td>🎓 Miễn phí</td>
              <td>Ultimate features cho sinh viên</td>
              <td>Sinh viên, giảng viên</td>
            </tr>
          </tbody>
        </table>

        <div className="section-divider"></div>

        <h2>🛠️ Cài đặt và Setup</h2>

        <h3>💻 Download & Installation</h3>

        <pre><code>{`# Download từ trang chủ
https://www.jetbrains.com/idea/download/

# Windows (Chocolatey)
choco install intellijidea-community
choco install intellijidea-ultimate

# macOS (Homebrew)
brew install --cask intellij-idea-ce
brew install --cask intellij-idea

# Ubuntu (Snap)
sudo snap install intellij-idea-community --classic
sudo snap install intellij-idea-ultimate --classic`}</code></pre>

        <h3>⚙️ First-time Setup</h3>

        <div className="highlight-box">
          <h4>🔧 Cấu hình ban đầu:</h4>
          <ol>
            <li><strong>Import Settings</strong>: Từ IDE cũ hoặc bắt đầu mới</li>
            <li><strong>Choose Theme</strong>: Light, Dark, High Contrast</li>
            <li><strong>Install Plugins</strong>: Essential plugins cho workflow</li>
            <li><strong>Configure JDK</strong>: Set up Java SDK paths</li>
            <li><strong>Keymap</strong>: Chọn keymap scheme (Default, Eclipse, VS Code...)</li>
          </ol>
        </div>

        <div className="section-divider"></div>

        <h2>🎯 Tính năng chính</h2>

        <h3>🧠 Smart Code Completion</h3>

        <pre><code>{`// Type-based completion
List<String> names = new ArrayList<>();
names.a|  // → suggests add(), addAll(), etc.

// Chain completion
"hello".substring(0, 2).toUpperCase()|  // → suggests String methods

// Static member completion
Collections.|  // → suggests all Collections static methods

// Postfix completion
names.for|  // → transforms to for-each loop
if (condition.not|)  // → if (!condition)`}</code></pre>

        <h3>🔧 Powerful Refactoring</h3>

        <table>
          <thead>
            <tr>
              <th>Refactoring</th>
              <th>Shortcut</th>
              <th>Mô tả</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Rename</strong></td>
              <td>Shift + F6</td>
              <td>Đổi tên biến, method, class an toàn</td>
            </tr>
            <tr>
              <td><strong>Extract Method</strong></td>
              <td>Ctrl + Alt + M</td>
              <td>Tách code thành method riêng</td>
            </tr>
            <tr>
              <td><strong>Extract Variable</strong></td>
              <td>Ctrl + Alt + V</td>
              <td>Tạo biến từ expression</td>
            </tr>
            <tr>
              <td><strong>Inline</strong></td>
              <td>Ctrl + Alt + N</td>
              <td>Inline variable/method</td>
            </tr>
            <tr>
              <td><strong>Move</strong></td>
              <td>F6</td>
              <td>Di chuyển class/method</td>
            </tr>
          </tbody>
        </table>

        <h3>🐛 Advanced Debugging</h3>

        <pre><code>{`// Conditional Breakpoints
// Right-click breakpoint → Condition
user.getAge() > 18 && user.isActive()

// Expression Evaluation
// Alt + F8 in debug mode
user.getOrders().stream()
    .filter(order -> order.getStatus() == OrderStatus.PENDING)
    .count()

// Drop Frame & Force Return
// Navigate execution flow backward
// Force method to return specific value`}</code></pre>

        <div className="section-divider"></div>

        <h2>🌱 Framework Integration</h2>

        <h3>🍃 Spring Boot Support</h3>

        <div className="highlight-box success">
          <h4>🚀 Spring Boot Features:</h4>
          <ul>
            <li><strong>Spring Initializr Integration</strong>: Tạo project từ IDE</li>
            <li><strong>Auto-configuration hints</strong>: Gợi ý cấu hình</li>
            <li><strong>Application Properties</strong>: Auto-completion</li>
            <li><strong>Bean Navigation</strong>: Jump to bean definitions</li>
            <li><strong>HTTP Client</strong>: Test REST endpoints</li>
            <li><strong>Database Tools</strong>: Kết nối và query database</li>
          </ul>
        </div>

        <pre><code>{`// application.yml auto-completion
server:
  port: 8080  # IntelliJ suggests available properties
spring:
  datasource:
    url: jdbc:h2:mem:testdb
    driver-class-name: org.h2.Driver  # Auto-complete driver names
  jpa:
    hibernate:
      ddl-auto: create-drop  # Suggests valid values

// Dependency injection navigation
@Autowired
private UserService userService;  // Ctrl+Click → jump to implementation`}</code></pre>

        <h3>🗃️ Database Integration</h3>

        <pre><code>{`-- SQL completion and validation
SELECT u.name, COUNT(o.id) as order_count
FROM users u
LEFT JOIN orders o ON u.id = o.user_id  -- IntelliJ validates joins
WHERE u.created_at > ?  -- Parameter completion
GROUP BY u.name
HAVING COUNT(o.id) > 5;  -- Syntax highlighting`}</code></pre>

        <div className="section-divider"></div>

        <h2>🔌 Essential Plugins</h2>

        <table>
          <thead>
            <tr>
              <th>Plugin</th>
              <th>Chức năng</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Lombok</strong></td>
              <td>Support Lombok annotations</td>
              <td>⭐⭐⭐⭐⭐</td>
            </tr>
            <tr>
              <td><strong>GitToolBox</strong></td>
              <td>Enhanced Git integration</td>
              <td>⭐⭐⭐⭐⭐</td>
            </tr>
            <tr>
              <td><strong>SonarLint</strong></td>
              <td>Code quality analysis</td>
              <td>⭐⭐⭐⭐⭐</td>
            </tr>
            <tr>
              <td><strong>Docker</strong></td>
              <td>Docker container management</td>
              <td>⭐⭐⭐⭐</td>
            </tr>
            <tr>
              <td><strong>REST Client</strong></td>
              <td>Test HTTP APIs trong IDE</td>
              <td>⭐⭐⭐⭐</td>
            </tr>
            <tr>
              <td><strong>Rainbow Brackets</strong></td>
              <td>Colorize matching brackets</td>
              <td>⭐⭐⭐⭐</td>
            </tr>
          </tbody>
        </table>

        <div className="section-divider"></div>

        <h2>⚡ Productivity Tips</h2>

        <h3>⌨️ Essential Shortcuts</h3>

        <table>
          <thead>
            <tr>
              <th>Action</th>
              <th>Windows/Linux</th>
              <th>macOS</th>
              <th>Mô tả</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Search Everywhere</strong></td>
              <td>Double Shift</td>
              <td>Double Shift</td>
              <td>Tìm files, classes, symbols</td>
            </tr>
            <tr>
              <td><strong>Go to Class</strong></td>
              <td>Ctrl + N</td>
              <td>Cmd + O</td>
              <td>Mở class nhanh</td>
            </tr>
            <tr>
              <td><strong>Go to File</strong></td>
              <td>Ctrl + Shift + N</td>
              <td>Cmd + Shift + O</td>
              <td>Mở file nhanh</td>
            </tr>
            <tr>
              <td><strong>Recent Files</strong></td>
              <td>Ctrl + E</td>
              <td>Cmd + E</td>
              <td>Files đã mở gần đây</td>
            </tr>
            <tr>
              <td><strong>Quick Fix</strong></td>
              <td>Alt + Enter</td>
              <td>Option + Enter</td>
              <td>Sửa lỗi tự động</td>
            </tr>
            <tr>
              <td><strong>Generate Code</strong></td>
              <td>Alt + Insert</td>
              <td>Cmd + N</td>
              <td>Generate getter/setter, constructor...</td>
            </tr>
          </tbody>
        </table>

        <h3>🔍 Live Templates</h3>

        <pre><code>{`// Built-in templates
main + Tab  →  public static void main(String[] args) { }
sout + Tab  →  System.out.println();
psvm + Tab  →  public static void main(String[] args) { }
iter + Tab  →  for (Object o : collection) { }

// Custom templates
// Settings → Editor → Live Templates
logger + Tab  →  private static final Logger log = LoggerFactory.getLogger($CLASS$.class);`}</code></pre>

        <div className="highlight-box warning">
          <h4>🎯 Workflow tối ưu:</h4>
          
          <h5>📊 1. Project Organization</h5>
          <ul>
            <li>Sử dụng <strong>Maven/Gradle</strong> cho dependency management</li>
            <li>Configure <strong>Code Style</strong> consistent trong team</li>
            <li>Setup <strong>Inspection Profiles</strong> cho code quality</li>
            <li>Sử dụng <strong>TODO</strong> comments để track tasks</li>
          </ul>

          <h5>⚡ 2. Development Speed</h5>
          <ul>
            <li>Master <strong>keyboard shortcuts</strong></li>
            <li>Customize <strong>toolbars và menus</strong></li>
            <li>Sử dụng <strong>bookmarks</strong> cho navigation</li>
            <li>Setup <strong>external tools</strong> integration</li>
          </ul>

          <h5>🔍 3. Code Quality</h5>
          <ul>
            <li>Enable <strong>code inspections</strong></li>
            <li>Sử dụng <strong>SonarLint</strong> plugin</li>
            <li>Configure <strong>code coverage</strong> tools</li>
            <li>Setup <strong>formatter</strong> và <strong>import optimizer</strong></li>
          </ul>
        </div>

        <div className="section-divider"></div>

        <h2>🚀 Advanced Features</h2>

        <h3>🔬 Profiling & Performance</h3>

        <pre><code>{`// JVM Debugger
// Heap dump analysis
// Memory leak detection
// Thread monitoring

// Performance Profiler (Ultimate)
// CPU profiling
// Memory profiling  
// Allocation tracking`}</code></pre>

        <h3>📊 Code Coverage</h3>

        <pre><code>{`// Run with Coverage
// Ctrl + Shift + F10 → Run with Coverage

// Coverage Results
- Line coverage: 85%
- Branch coverage: 78% 
- Method coverage: 92%

// Export coverage reports
- HTML report
- XML report (for CI/CD)`}</code></pre>

        <h3>🌐 HTTP Client</h3>

        <pre><code>{`### Test REST API directly in IDE

GET http://localhost:8080/api/users
Accept: application/json
Authorization: Bearer {{token}}

###

POST http://localhost:8080/api/users
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com"
}

###

PUT http://localhost:8080/api/users/1
Content-Type: application/json

{
  "name": "Jane Doe",
  "email": "jane@example.com"
}`}</code></pre>

        <div className="section-divider"></div>

        <h2>🎉 Kết luận</h2>

        <p>
          <strong>IntelliJ IDEA</strong> không chỉ là một IDE mà là một 
          <strong>productivity platform</strong> hoàn chỉnh cho Java developers.
        </p>

        <div className="highlight-box success">
          <h4>🏆 Những điểm mạnh:</h4>
          <ul>
            <li>🧠 <strong>Intelligent</strong>: AI-powered coding assistance</li>
            <li>🔧 <strong>Comprehensive</strong>: All-in-one development environment</li>
            <li>🚀 <strong>Efficient</strong>: Boost productivity significantly</li>
            <li>🌱 <strong>Extensible</strong>: Rich plugin ecosystem</li>
            <li>🏢 <strong>Enterprise-ready</strong>: Professional tools and integrations</li>
          </ul>
        </div>

        <blockquote>
          💡 <strong>Recommendation:</strong>
          <ul>
            <li>Bắt đầu với <strong>Community Edition</strong> để học</li>
            <li>Upgrade lên <strong>Ultimate</strong> cho dự án thực tế</li>
            <li>Đầu tư thời gian học <strong>keyboard shortcuts</strong></li>
            <li>Explore <strong>plugins</strong> phù hợp với workflow</li>
            <li>Tận dụng <strong>refactoring tools</strong> để improve code quality</li>
          </ul>
        </blockquote>

        <p>
          Với IntelliJ IDEA, bạn không chỉ viết code mà còn <strong>craft quality software</strong>! 🎯✨
        </p>
      </div>

      <div className="nav-buttons">
        <Link to="/posts/gioi-thieu-postman-cong-cu-kiem-thu-api" className="nav-button prev">
          <FiArrowLeft />
          Bài trước
        </Link>
        <Link to="/posts/reactjs-thu-vien-xay-dung-giao-dien-hien-dai" className="nav-button">
          Bài tiếp theo
          <FiArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default IntelliJIDEAPost;