import React from 'react';
import { Link } from 'react-router-dom';
import { FiCalendar, FiClock, FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import '../../assets/styles/BlogPost.css';

const GitJavaPost = () => {
  return (
    <div className="blog-post">
      <div className="blog-header">
        <h1 className="blog-title">
          🔧 Git cơ bản cho lập trình viên Java - Hướng dẫn từ A-Z
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

        <h3>1️⃣ Cài đặt Git</h3>

        <h4>Windows:</h4>
        <pre><code>{`# Tải từ https://git-scm.com/download/win
# Hoặc dùng Chocolatey
choco install git

# Hoặc dùng Winget
winget install Git.Git`}</code></pre>

        <h4>macOS:</h4>
        <pre><code>{`# Dùng Homebrew
brew install git

# Hoặc Xcode Command Line Tools
xcode-select --install`}</code></pre>

        <h4>Linux (Ubuntu/Debian):</h4>
        <pre><code>{`sudo apt update
sudo apt install git`}</code></pre>

        <h3>2️⃣ Cấu hình cơ bản</h3>

        <pre><code>{`# Thiết lập thông tin cá nhân
git config --global user.name "Nguyễn Văn A"
git config --global user.email "nguyenvana@company.com"

# Editor mặc định (cho commit message)
git config --global core.editor "code --wait"  # VS Code
git config --global core.editor "idea --wait"  # IntelliJ IDEA

# Thiết lập line ending (quan trọng cho team đa platform)
git config --global core.autocrlf true   # Windows
git config --global core.autocrlf input  # macOS/Linux

# Thiết lập default branch
git config --global init.defaultBranch main`}</code></pre>

        <h3>3️⃣ Cấu hình cho Java Projects</h3>

        <pre><code>{`# Thiết lập .gitignore global cho Java
git config --global core.excludesfile ~/.gitignore_global`}</code></pre>

        <p><strong>Tạo file <code>~/.gitignore_global</code>:</strong></p>

        <pre><code>{`# Compiled class files
*.class

# Log files
*.log

# Package Files
*.jar
*.war
*.nar
*.ear
*.zip
*.tar.gz
*.rar

# Virtual machine crash logs
hs_err_pid*

# IDE files
.idea/
*.iml
.vscode/
.settings/
.project
.classpath

# OS generated files
.DS_Store
.DS_Store?
._*
.Spotlight-V100
.Trashes
ehthumbs.db
Thumbs.db`}</code></pre>

        <div className="section-divider"></div>

        <h2>📁 Khởi tạo Java Project với Git</h2>

        <h3>🚀 Tạo project mới</h3>

        <pre><code>{`# Tạo thư mục project
mkdir student-management-system
cd student-management-system

# Khởi tạo Git repository
git init

# Tạo cấu trúc Maven project
mkdir -p src/main/java/com/example/student
mkdir -p src/main/resources
mkdir -p src/test/java/com/example/student
mkdir -p src/test/resources

# Tạo .gitignore cho Java/Maven
echo "target/
*.class
*.log
.idea/
*.iml" > .gitignore`}</code></pre>

        <h3>📝 Tạo pom.xml cơ bản</h3>

        <pre><code>{`<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 
         http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>
    
    <groupId>com.example</groupId>
    <artifactId>student-management</artifactId>
    <version>1.0.0</version>
    <packaging>jar</packaging>
    
    <properties>
        <maven.compiler.source>17</maven.compiler.source>
        <maven.compiler.target>17</maven.compiler.target>
        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
    </properties>
    
    <dependencies>
        <dependency>
            <groupId>org.junit.jupiter</groupId>
            <artifactId>junit-jupiter</artifactId>
            <version>5.9.2</version>
            <scope>test</scope>
        </dependency>
    </dependencies>
</project>`}</code></pre>

        <h3>🎯 First commit</h3>

        <pre><code>{`# Thêm tất cả files vào staging area
git add .

# Tạo commit đầu tiên
git commit -m "feat: initialize Java Maven project

- Add basic Maven project structure
- Configure .gitignore for Java
- Add initial pom.xml with Java 17"`}</code></pre>

        <div className="section-divider"></div>

        <h2>🔄 Git Workflow cho Java Developer</h2>

        <h3>📋 1. Feature Development Workflow</h3>

        <pre><code>{`# 1. Cập nhật main branch
git checkout main
git pull origin main

# 2. Tạo feature branch
git checkout -b feature/user-authentication
git push -u origin feature/user-authentication

# 3. Phát triển feature
# ... code Java classes ...

# 4. Add và commit theo từng logical unit
git add src/main/java/com/example/auth/
git commit -m "feat(auth): implement User entity and UserRepository

- Add User JPA entity with validation
- Create UserRepository with custom queries
- Add unit tests for repository layer"

# 5. Commit tiếp theo
git add src/main/java/com/example/auth/service/
git commit -m "feat(auth): implement authentication service

- Add UserService with business logic
- Implement password encryption with BCrypt
- Add service layer unit tests"

# 6. Push feature branch
git push origin feature/user-authentication`}</code></pre>

        <h3>🔀 2. Code Review và Merge</h3>

        <pre><code>{`# Tạo Pull Request trên GitHub/GitLab
# Sau khi review, merge vào main

# Cleanup sau merge
git checkout main
git pull origin main
git branch -d feature/user-authentication  # Delete local branch
git push origin --delete feature/user-authentication  # Delete remote branch`}</code></pre>

        <h3>🐛 3. Hotfix Workflow</h3>

        <pre><code>{`# Tạo hotfix từ main
git checkout main
git pull origin main
git checkout -b hotfix/fix-null-pointer-exception

# Fix bug
# ... sửa code ...

git add src/main/java/com/example/service/UserService.java
git commit -m "fix: resolve NullPointerException in getUserById

- Add null check before accessing user properties
- Add unit test for null scenario
- Fixes issue #123"

# Push và tạo PR khẩn cấp
git push origin hotfix/fix-null-pointer-exception`}</code></pre>

        <div className="section-divider"></div>

        <h2>🎓 Git Commands thiết yếu cho Java Developer</h2>

        <h3>📊 1. Status và History</h3>

        <pre><code>{`# Kiểm tra trạng thái files
git status

# Xem lịch sử commit (format đẹp)
git log --oneline --graph --decorate --all

# Xem thay đổi chưa commit
git diff

# Xem thay đổi của file cụ thể
git diff src/main/java/com/example/User.java

# Xem thay đổi giữa 2 commits
git diff HEAD~1 HEAD`}</code></pre>

        <h3>🔄 2. Staging và Committing</h3>

        <pre><code>{`# Add files theo pattern
git add src/main/java/**/*.java        # Tất cả Java files
git add src/test/                      # Toàn bộ test folder
git add pom.xml                        # Maven POM file
git add *.properties                   # Configuration files

# Add interactive (chọn từng phần)
git add -i

# Commit với message chi tiết
git commit -m "feat(user): implement user registration

- Add User entity with JPA annotations
- Implement UserController with validation
- Add integration tests for registration endpoint
- Update API documentation

Closes #45"`}</code></pre>

        <h3>🌿 3. Branch Management</h3>

        <pre><code>{`# Liệt kê branches
git branch                    # Local branches
git branch -r                # Remote branches  
git branch -a                # All branches

# Tạo và switch branch
git checkout -b feature/api-improvement
git switch -c feature/new-endpoint        # Git 2.23+

# Rename branch
git branch -m old-name new-name

# Delete branch
git branch -d feature-branch             # Safe delete
git branch -D feature-branch             # Force delete`}</code></pre>

        <h3>🔙 4. Undo Operations</h3>

        <pre><code>{`# Unstage files
git reset HEAD src/main/java/User.java

# Discard changes in working directory
git checkout -- src/main/java/User.java
git restore src/main/java/User.java     # Git 2.23+

# Undo last commit (keep changes)
git reset --soft HEAD~1

# Undo last commit (discard changes)
git reset --hard HEAD~1

# Revert commit (tạo commit mới để undo)
git revert HEAD`}</code></pre>

        <div className="section-divider"></div>

        <h2>🔧 Tích hợp Git với Java IDEs</h2>

        <h3>🎯 IntelliJ IDEA</h3>

        <h4>Setup:</h4>
        <ol>
          <li><strong>File → Settings → Version Control → Git</strong></li>
          <li>Thiết lập path đến Git executable</li>
          <li>Enable "Use credential helper"</li>
        </ol>

        <h4>Workflow trong IDEA:</h4>
        <ul>
          <li><strong>Commit window</strong>: <code>Ctrl+K</code> (Windows/Linux) hoặc <code>Cmd+K</code> (Mac)</li>
          <li><strong>Push</strong>: <code>Ctrl+Shift+K</code></li>
          <li><strong>Git tool window</strong>: <code>Alt+9</code></li>
          <li><strong>Compare with branch</strong>: Right-click → Git → Compare with Branch</li>
        </ul>

        <div className="highlight-box">
          <strong>🔥 Useful IDEA Git features:</strong>
          <ul>
            <li><strong>Annotate</strong>: Right-click → Git → Annotate (git blame)</li>
            <li><strong>Local History</strong>: Backup ngay cả khi chưa commit</li>
            <li><strong>Shelf</strong>: Tạm lưu changes mà không commit</li>
            <li><strong>Cherry-pick</strong>: Áp dụng commit từ branch khác</li>
          </ul>
        </div>

        <h3>🌙 Eclipse</h3>

        <h4>EGit Plugin (có sẵn):</h4>
        <ul>
          <li><strong>Window → Perspective → Git</strong></li>
          <li><strong>Team → Share Project → Git</strong></li>
          <li><strong>Team → Commit</strong> để commit</li>
          <li><strong>Team → Push</strong> để push</li>
        </ul>

        <div className="section-divider"></div>

        <h2>📝 Conventional Commits cho Java Projects</h2>

        <h3>🎯 Format chuẩn</h3>

        <pre><code>{`<type>[optional scope]: <description>

[optional body]

[optional footer(s)]`}</code></pre>

        <h3>🏷️ Types phổ biến cho Java:</h3>

        <pre><code>{`# Features
git commit -m "feat(auth): add JWT authentication mechanism"
git commit -m "feat(api): implement user CRUD endpoints"

# Bug fixes  
git commit -m "fix(service): resolve NPE in UserService.findById()"
git commit -m "fix(config): correct database connection pool settings"

# Refactoring
git commit -m "refactor(model): extract common fields to BaseEntity"
git commit -m "refactor(controller): simplify error handling logic"

# Documentation
git commit -m "docs: add API documentation for user endpoints"
git commit -m "docs(readme): update setup instructions"

# Tests
git commit -m "test(service): add unit tests for UserService"
git commit -m "test(integration): add API integration tests"

# Build/Dependencies
git commit -m "build: upgrade Spring Boot to 3.1.0"
git commit -m "build(maven): add Lombok dependency"

# Configuration
git commit -m "config: add production database configuration"
git commit -m "config(docker): update Dockerfile for Java 17"`}</code></pre>

        <h3>📋 Commit message examples:</h3>

        <pre><code>{`# Ví dụ commit hoàn chỉnh
git commit -m "feat(user): implement user profile management

- Add UserProfile entity with JPA mapping
- Create ProfileController with CRUD operations  
- Implement ProfileService with business validation
- Add comprehensive unit and integration tests
- Update API documentation with new endpoints

Resolves: #142
Breaking change: UserDTO now includes profileId field"`}</code></pre>

        <div className="section-divider"></div>

        <h2>🚀 Advanced Git Techniques for Java</h2>

        <h3>🔀 1. Git Flow cho Java Projects</h3>

        <pre><code>{`# Initialize git flow
git flow init

# Start new feature
git flow feature start user-registration

# ... develop feature ...

# Finish feature (merge vào develop)
git flow feature finish user-registration

# Start release
git flow release start v1.2.0

# ... prepare release (update version, etc) ...

# Finish release (merge vào main và develop)
git flow release finish v1.2.0

# Hotfix
git flow hotfix start critical-bug-fix
git flow hotfix finish critical-bug-fix`}</code></pre>

        <h3>🏷️ 2. Semantic Versioning với Git Tags</h3>

        <pre><code>{`# Tag release version
git tag -a v1.0.0 -m "Release version 1.0.0

Features:
- User authentication system
- RESTful API with Spring Boot
- MySQL database integration
- Unit test coverage 85%"

# Push tags
git push origin v1.0.0
git push origin --tags

# List tags
git tag -l

# Checkout specific version
git checkout v1.0.0`}</code></pre>

        <div className="section-divider"></div>

        <h2>🔐 Git Security Best Practices</h2>

        <div className="highlight-box warning">
          <h4>⚠️ 1. Tránh commit sensitive data</h4>
          
          <p><strong>Tạo <code>.gitignore</code> hoàn chỉnh:</strong></p>
          <pre><code>{`# Build artifacts
target/
build/
*.jar
*.war
*.ear

# IDE files
.idea/
*.iml
.vscode/
.eclipse/

# Sensitive configuration
application-prod.properties
application-secrets.properties
*.key
*.pem
*.p12

# Environment files
.env
.env.local
.env.production

# Database
*.db
*.sqlite

# Logs
logs/
*.log

# OS files
.DS_Store
Thumbs.db`}</code></pre>
        </div>

        <h3>🔑 2. Sử dụng Git Credentials Manager</h3>

        <pre><code>{`# Windows
git config --global credential.helper manager-core

# macOS
git config --global credential.helper osxkeychain

# Linux
git config --global credential.helper cache --timeout=3600`}</code></pre>

        <h3>🔒 3. SSH Keys cho GitHub/GitLab</h3>

        <pre><code>{`# Tạo SSH key
ssh-keygen -t ed25519 -C "your.email@company.com"

# Add SSH key to ssh-agent
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519

# Copy public key để add vào GitHub
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