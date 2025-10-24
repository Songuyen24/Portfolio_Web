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
            <span>8 phút đọc</span>
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

        <pre><code>{`// Gợi ý thông minh theo context
List<String> names = new ArrayList<>();
names.a|  // → suggests add(), addAll()...

// Chain completion & Postfix
"hello".substring(0, 2).toUpperCase()|
names.for|  // → transforms to for-each loop`}</code></pre>

        <h3>🔧 Powerful Refactoring</h3>

        <ul>
          <li><strong>Rename</strong> (Shift + F6): Đổi tên an toàn</li>
          <li><strong>Extract Method</strong> (Ctrl + Alt + M): Tách code thành method</li>
          <li><strong>Extract Variable</strong> (Ctrl + Alt + V): Tạo biến từ expression</li>
          <li><strong>Move</strong> (F6): Di chuyển class/method</li>
        </ul>

        <h3>🐛 Advanced Debugging</h3>

        <ul>
          <li><strong>Conditional Breakpoints</strong>: user.getAge() &gt; 18</li>
          <li><strong>Expression Evaluation</strong>: Alt + F8 để test expressions</li>
          <li><strong>Drop Frame</strong>: Navigate execution backward</li>
        </ul>

        <div className="section-divider"></div>

        <h2>🌱 Framework Integration</h2>

        <h3>🍃 Spring Boot Support</h3>

        <ul>
          <li><strong>Spring Initializr</strong>: Tạo project từ IDE</li>
          <li><strong>Auto-completion</strong>: Properties, YAML config</li>
          <li><strong>Bean Navigation</strong>: Jump to definitions</li>
          <li><strong>HTTP Client</strong>: Test REST endpoints ngay trong IDE</li>
          <li><strong>Database Tools</strong>: Connect và query database</li>
        </ul>

        <pre><code>{`// application.yml với auto-completion
server:
  port: 8080
spring:
  datasource:
    url: jdbc:h2:mem:testdb
  jpa:
    hibernate:
      ddl-auto: create-drop

// Navigate dependencies
@Autowired
private UserService userService;  // Ctrl+Click to implementation`}</code></pre>

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

        <ul>
          <li><strong>Double Shift</strong>: Search Everywhere</li>
          <li><strong>Ctrl + N</strong>: Go to Class</li>
          <li><strong>Ctrl + Shift + N</strong>: Go to File</li>
          <li><strong>Ctrl + E</strong>: Recent Files</li>
          <li><strong>Alt + Enter</strong>: Quick Fix</li>
          <li><strong>Alt + Insert</strong>: Generate Code</li>
        </ul>

        <h3>🔍 Live Templates</h3>

        <pre><code>{`main + Tab  →  public static void main(String[] args) { }
sout + Tab  →  System.out.println();
psvm + Tab  →  public static void main(String[] args) { }
iter + Tab  →  for (Object o : collection) { }`}</code></pre>

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