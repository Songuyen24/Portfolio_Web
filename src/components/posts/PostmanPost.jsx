import React from 'react';
import { Link } from 'react-router-dom';
import { FiCalendar, FiClock, FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import '../../assets/styles/BlogPost.css';

const PostmanPost = () => {
  return (
    <div className="blog-post">
      <div className="blog-header">
        <h1 className="blog-title">
          🚀 Giới thiệu Postman – Công cụ kiểm thử API cho lập trình viên backend
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
            <span>📂 Tools & API</span>
          </div>
        </div>
        
        <p className="blog-excerpt">
          Postman là công cụ không thể thiếu cho các lập trình viên backend, giúp gửi request, test API và kiểm tra phản hồi một cách trực quan và hiệu quả
        </p>
        
        <div className="blog-tags">
          <span className="tag">Postman</span>
          <span className="tag">API Testing</span>
          <span className="tag">Backend</span>
          <span className="tag">HTTP</span>
          <span className="tag">REST API</span>
        </div>
      </div>

      <div className="blog-content">
        <h2>🎯 Postman là gì?</h2>
        
        <p>
          <strong>Postman</strong> là một platform collaboration cho API development. Nó đơn giản hóa từng bước trong 
          vòng đời phát triển API và streamline collaboration để bạn có thể tạo ra API tốt hơn nhanh hơn.
        </p>

        <div className="highlight-box success">
          <h4>✨ Tại sao Postman quan trọng?</h4>
          <ul>
            <li><strong>Dễ sử dụng</strong>: Giao diện trực quan, không cần code</li>
            <li><strong>Mạnh mẽ</strong>: Hỗ trợ đầy đủ các HTTP methods và authentication</li>
            <li><strong>Collaboration</strong>: Chia sẻ collection với team dễ dàng</li>
            <li><strong>Automation</strong>: Tạo test suite và CI/CD integration</li>
          </ul>
        </div>

        <h2>📦 Cài đặt Postman</h2>

        <p>Download từ: <a href="https://www.postman.com/downloads/" target="_blank" rel="noopener noreferrer">postman.com/downloads</a> hoặc dùng <a href="https://web.postman.co" target="_blank" rel="noopener noreferrer">Web Version</a></p>

        <pre><code>{`# Windows: choco install postman
# macOS: brew install --cask postman
# Ubuntu: sudo snap install postman`}</code></pre>

        <div className="section-divider"></div>

        <h2>🚀 Gửi Request đầu tiên</h2>

        <p><strong>Các bước:</strong> New → HTTP Request → Nhập URL → Chọn Method → Send</p>

        <pre><code>{`Method: GET
URL: https://jsonplaceholder.typicode.com/posts/1

Response: {"userId": 1, "id": 1, "title": "..."}`}</code></pre>

        <div className="section-divider"></div>

        <h2>🛠️ Các tính năng chính</h2>

        <h3>📝 Request Components</h3>
        <ul>
          <li><strong>Method</strong>: GET, POST, PUT, DELETE</li>
          <li><strong>URL</strong>: Endpoint API</li>
          <li><strong>Headers</strong>: Content-Type, Authorization</li>
          <li><strong>Body</strong>: JSON, form-data</li>
        </ul>

        <h3>🔐 Authentication</h3>

        <pre><code>{`Bearer Token: Authorization: Bearer <token>
Basic Auth: Authorization: Basic <base64>
API Key: X-API-Key: <key>`}</code></pre>

        <div className="section-divider"></div>

        <h2>📁 Collections & Environment</h2>

        <p><strong>Collections:</strong> Nhóm requests theo feature/module</p>

        <pre><code>{`E-commerce API
├── Authentication (Login, Register)
├── Users (Profile, Update, Delete)
├── Products (List, Create, Update)
└── Orders (Create, History, Cancel)`}</code></pre>

        <p><strong>Environment Variables:</strong> Quản lý URLs và keys cho Dev/Prod</p>

        <pre><code>{`// Development
{"baseUrl": "http://localhost:8080", "apiKey": "dev-key"}

// Sử dụng: {{baseUrl}}/api/users`}</code></pre>

        <div className="section-divider"></div>

        <h2>🧪 Testing & Automation</h2>

        <h3>✅ Test Scripts</h3>

        <pre><code>{`// Kiểm tra status code
pm.test("Status is 200", () => {
    pm.response.to.have.status(200);
});

// Kiểm tra response time
pm.test("Fast response", () => {
    pm.expect(pm.response.responseTime).to.be.below(500);
});

// Validate data
pm.test("Has required fields", () => {
    const res = pm.response.json();
    pm.expect(res).to.have.property('id');
});`}</code></pre>

        <h3>🔄 Newman CLI</h3>

        <pre><code>{`# Chạy collection từ terminal
npm install -g newman
newman run collection.json -e environment.json`}</code></pre>
      </div>

      <div className="nav-buttons">
        <Link to="/posts/xay-dung-rest-api-voi-spring-boot" className="nav-button prev">
          <FiArrowLeft />
          Bài trước
        </Link>
        <Link to="/posts/intellij-idea-ide-manh-me-cho-java-developer" className="nav-button">
          Bài tiếp theo
          <FiArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default PostmanPost;