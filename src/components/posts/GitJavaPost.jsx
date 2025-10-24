import React from 'react';
import { Link } from 'react-router-dom';
import { FiCalendar, FiClock, FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import '../../assets/styles/BlogPost.css';

const GitJavaPost = () => {
  return (
    <div className="blog-post">
      <div className="blog-header">
        <h1 className="blog-title">
           Git cơ bản cho lập trình viên Java - Hướng dẫn từ A-Z
        </h1>
        
        <div className="blog-meta">
          <div className="meta-item">
            <FiCalendar />
            <span>13 tháng 10, 2025</span>
          </div>
          <div className="meta-item">
            <FiClock />
            <span>5 phút đọc</span>
          </div>
          <div className="meta-item">
            <span>📂 Git & Tools</span>
          </div>
        </div>
        
        <p className="blog-excerpt">
          Hướng dẫn Git từ cơ bản đến nâng cao dành riêng cho developer Java, bao gồm tích hợp với IDE và best practices
        </p>
        
        <div className="blog-tags">
          <span className="tag">Git</span>
          <span className="tag">Version Control</span>
          <span className="tag">Java</span>
          <span className="tag">IDE</span>
          <span className="tag">IntelliJ IDEA</span>
        </div>
      </div>

      <div className="blog-content">
        <h2>🎯 Tại sao lập trình viên Java cần Git?</h2>
        
        <p>
          <strong>Git</strong> là hệ thống quản lý phiên bản (Version Control System) không thể thiếu 
          trong công việc lập trình. Đối với <strong>Java developer</strong>, Git còn quan trọng hơn vì:
        </p>

        <ul>
          <li>🏢 <strong>Enterprise projects</strong>: Dự án Java thường có quy mô lớn, nhiều người tham gia</li>
          <li>📦 <strong>Maven/Gradle</strong>: Quản lý dependencies và build artifacts</li>
          <li>🔧 <strong>IDE Integration</strong>: IntelliJ IDEA, Eclipse hỗ trợ Git native</li>
          <li>🚀 <strong>CI/CD</strong>: Jenkins, GitHub Actions cho Java projects</li>
          <li>👥 <strong>Team collaboration</strong>: Code review, pair programming</li>
        </ul>

        <blockquote>
          💡 <strong>Thống kê</strong>: 95% các dự án Java sử dụng Git làm version control chính.
        </blockquote>

        <div className="section-divider"></div>

        <h2>🛠️ Setup Git cho Java Development</h2>

        <h3>Cài đặt Git</h3>

        <pre><code>{`# Windows
choco install git
# hoặc: winget install Git.Git

# macOS
brew install git

# Linux (Ubuntu/Debian)
sudo apt update && sudo apt install git`}</code></pre>

        <h3>Cấu hình cơ bản</h3>

        <pre><code>{`# Thiết lập thông tin
git config --global user.name "Nguyễn Văn A"
git config --global user.email "nguyenvana@company.com"

# Default branch
git config --global init.defaultBranch main`}</code></pre>

        <h3>.gitignore cho Java</h3>

        <pre><code>{`# Compiled files
*.class
*.jar
*.war

# IDE files
.idea/
*.iml
.vscode/

# Build
target/
build/

# Logs
*.log`}</code></pre>

        <div className="section-divider"></div>

        <h2>📁 Khởi tạo Java Project với Git</h2>

        <pre><code>{`# Tạo và khởi tạo project
mkdir student-management-system
cd student-management-system
git init

# Tạo .gitignore
echo "target/
*.class
.idea/
*.iml" > .gitignore

# First commit
git add .
git commit -m "feat: initialize Java Maven project"`}</code></pre>

        <div className="section-divider"></div>

        <h2>🔄 Git Workflow cho Java Developer</h2>

        <h3>Feature Development</h3>

        <pre><code>{`# 1. Tạo feature branch
git checkout -b feature/user-authentication

# 2. Develop và commit
git add src/main/java/com/example/auth/
git commit -m "feat(auth): implement User entity and repository"

# 3. Push feature
git push origin feature/user-authentication

# 4. Merge và cleanup
git checkout main
git pull origin main
git branch -d feature/user-authentication`}</code></pre>

        <h3>Hotfix Workflow</h3>

        <pre><code>{`git checkout -b hotfix/fix-null-pointer
# ... fix bug ...
git commit -m "fix: resolve NullPointerException in getUserById"
git push origin hotfix/fix-null-pointer`}</code></pre>

        <div className="section-divider"></div>

        <h2>🎓 Git Commands thiết yếu</h2>

        <h3>Cơ bản</h3>

        <pre><code>{`# Status và history
git status
git log --oneline --graph

# Staging và commit
git add src/main/java/**/*.java
git commit -m "feat(user): implement user registration"

# Branch management
git branch                      # List branches
git checkout -b feature/new     # Create branch
git branch -d feature-name      # Delete branch

# Undo
git reset HEAD file.java        # Unstage
git checkout -- file.java       # Discard changes
git reset --soft HEAD~1         # Undo commit (keep changes)`}</code></pre>

        <div className="section-divider"></div>

        <h2>🔧 Tích hợp Git với Java IDEs</h2>

        <h3>IntelliJ IDEA</h3>

        <div className="highlight-box">
          <strong>Shortcuts:</strong>
          <ul>
            <li><code>Ctrl+K</code>: Commit window</li>
            <li><code>Ctrl+Shift+K</code>: Push</li>
            <li><code>Alt+9</code>: Git tool window</li>
            <li>Right-click → Git → Annotate (git blame)</li>
          </ul>
        </div>

        <h3>Eclipse</h3>
        <ul>
          <li><strong>Team → Share Project → Git</strong></li>
          <li><strong>Team → Commit/Push</strong></li>
        </ul>

        <div className="section-divider"></div>

        <h2>📝 Conventional Commits cho Java</h2>

        <h3>Format</h3>

        <pre><code>{`<type>[scope]: <description>

[optional body]`}</code></pre>

        <h3>Examples</h3>

        <pre><code>{`# Features
git commit -m "feat(auth): add JWT authentication"

# Bug fixes  
git commit -m "fix(service): resolve NPE in UserService"

# Refactoring
git commit -m "refactor(model): extract BaseEntity"

# Tests
git commit -m "test(service): add UserService unit tests"

# Build
git commit -m "build: upgrade Spring Boot to 3.1.0"`}</code></pre>

        <div className="section-divider"></div>

        <h2>🚀 Advanced Git Techniques</h2>

        <h3>Git Tags</h3>

        <pre><code>{`# Tag release version
git tag -a v1.0.0 -m "Release version 1.0.0"
git push origin v1.0.0

# List tags
git tag -l

# Checkout version
git checkout v1.0.0`}</code></pre>

        <div className="section-divider"></div>

        <h2>🔐 Git Security Best Practices</h2>

        <div className="highlight-box warning">
          <h4>⚠️ .gitignore hoàn chỉnh</h4>
          
          <pre><code>{`# Build
target/
*.jar
*.war

# IDE
.idea/
*.iml

# Sensitive
application-prod.properties
*.key
.env

# Logs
*.log`}</code></pre>
        </div>

        <h3>SSH Keys</h3>

        <pre><code>{`# Tạo SSH key
ssh-keygen -t ed25519 -C "your.email@company.com"

# Add to ssh-agent
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519

# Copy public key
cat ~/.ssh/id_ed25519.pub`}</code></pre>

        <div className="section-divider"></div>

        <h2>🎉 Kết luận</h2>

        <p>Git là công cụ không thể thiếu cho Java Developer hiện đại. Với việc nắm vững:</p>

        <div className="highlight-box success">
          <ul>
            <li>🛠️ <strong>Setup và cấu hình</strong> phù hợp với Java projects</li>
            <li>🔄 <strong>Workflow</strong> chuyên nghiệp cho team development</li>
            <li>🎯 <strong>IDE integration</strong> để tăng productivity</li>
            <li>📝 <strong>Conventional commits</strong> cho code documentation</li>
            <li>🔐 <strong>Security practices</strong> để bảo vệ source code</li>
          </ul>
        </div>

        <blockquote>
          💡 <strong>Tip cuối</strong>: Hãy thực hành Git hàng ngày với các dự án nhỏ để thành thạo. 
          Git không chỉ là công cụ mà là kỹ năng cốt lõi của mọi developer!
        </blockquote>

        <p>Chúc bạn thành công với Git và Java development! 🚀</p>
      </div>

      <div className="nav-buttons">
        <Link to="/posts/lap-trinh-huong-doi-tuong-oop-java" className="nav-button prev">
          <FiArrowLeft />
          Bài trước
        </Link>
        <Link to="/posts/xay-dung-rest-api-voi-spring-boot" className="nav-button">
          Bài tiếp theo
          <FiArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default GitJavaPost;