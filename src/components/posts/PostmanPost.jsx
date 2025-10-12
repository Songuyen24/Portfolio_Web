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
            <span>15 phút đọc</span>
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

        <h3>💻 Desktop App (Khuyến nghị)</h3>

        <p>Download từ trang chủ: <a href="https://www.postman.com/downloads/" target="_blank" rel="noopener noreferrer">postman.com/downloads</a></p>

        <pre><code>{`# Windows (Chocolatey)
choco install postman

# macOS (Homebrew)
brew install --cask postman

# Ubuntu/Debian
sudo snap install postman`}</code></pre>

        <h3>🌐 Web Version</h3>
        <p>Truy cập: <a href="https://web.postman.co" target="_blank" rel="noopener noreferrer">web.postman.co</a></p>

        <div className="section-divider"></div>

        <h2>🚀 Gửi Request đầu tiên</h2>

        <h3>1️⃣ Tạo Request mới</h3>

        <div className="highlight-box">
          <h4>📝 Các bước thực hiện:</h4>
          <ol>
            <li>Mở Postman → Click <strong>"New"</strong></li>
            <li>Chọn <strong>"HTTP Request"</strong></li>
            <li>Nhập URL API muốn test</li>
            <li>Chọn HTTP Method (GET, POST, PUT, DELETE...)</li>
            <li>Click <strong>"Send"</strong></li>
          </ol>
        </div>

        <h3>2️⃣ Ví dụ thực tế</h3>

        <p><strong>Test API công khai:</strong></p>

        <pre><code>{`Method: GET
URL: https://jsonplaceholder.typicode.com/posts/1

Response:
{
  "userId": 1,
  "id": 1,
  "title": "sunt aut facere repellat provident...",
  "body": "quia et suscipit\\nsuscipit recusandae..."
}`}</code></pre>

        <div className="section-divider"></div>

        <h2>🛠️ Các tính năng chính</h2>

        <h3>📝 Request Builder</h3>

        <table>
          <thead>
            <tr>
              <th>Thành phần</th>
              <th>Mô tả</th>
              <th>Ví dụ</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Method</strong></td>
              <td>HTTP verb</td>
              <td>GET, POST, PUT, DELETE</td>
            </tr>
            <tr>
              <td><strong>URL</strong></td>
              <td>Endpoint API</td>
              <td>https://api.example.com/users</td>
            </tr>
            <tr>
              <td><strong>Headers</strong></td>
              <td>Metadata request</td>
              <td>Content-Type, Authorization</td>
            </tr>
            <tr>
              <td><strong>Body</strong></td>
              <td>Dữ liệu gửi đi</td>
              <td>JSON, form-data, raw</td>
            </tr>
          </tbody>
        </table>

        <h3>🔐 Authentication</h3>

        <pre><code>{`// Bearer Token
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

// Basic Auth
Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=

// API Key
X-API-Key: your-api-key-here

// OAuth 2.0
Postman hỗ trợ flow tự động`}</code></pre>

        <h3>📊 Response Viewer</h3>

        <div className="highlight-box success">
          <h4>📈 Thông tin Response:</h4>
          <ul>
            <li><strong>Status Code</strong>: 200, 404, 500...</li>
            <li><strong>Response Time</strong>: Đo performance</li>
            <li><strong>Size</strong>: Kích thước response</li>
            <li><strong>Headers</strong>: Response headers</li>
            <li><strong>Body</strong>: JSON, HTML, XML...</li>
          </ul>
        </div>

        <div className="section-divider"></div>

        <h2>📁 Collections & Organization</h2>

        <h3>🗂️ Tạo Collection</h3>

        <pre><code>{`Collection: E-commerce API
├── 🔐 Authentication
│   ├── Login
│   └── Register
├── 👤 Users
│   ├── Get User Profile
│   ├── Update Profile  
│   └── Delete Account
├── 🛒 Products
│   ├── List Products
│   ├── Get Product Details
│   ├── Create Product
│   └── Update Product
└── 📦 Orders
    ├── Create Order
    ├── Get Order History
    └── Cancel Order`}</code></pre>

        <h3>🌐 Environment Variables</h3>

        <pre><code>{`// Development Environment
{
  "baseUrl": "http://localhost:8080",
  "apiKey": "dev-api-key-123",
  "userId": "user-dev-456"
}

// Production Environment  
{
  "baseUrl": "https://api.mycompany.com",
  "apiKey": "prod-api-key-xyz",
  "userId": "user-prod-789"
}

// Sử dụng trong request
URL: {{baseUrl}}/api/users/{{userId}}
Headers: X-API-Key: {{apiKey}}`}</code></pre>

        <div className="section-divider"></div>

        <h2>🧪 Testing & Automation</h2>

        <h3>✅ Pre-request Scripts</h3>

        <pre><code>{`// Tự động set timestamp
pm.globals.set("timestamp", Date.now());

// Tạo random data
const randomEmail = pm.variables.replaceIn("{{$randomEmail}}");
pm.environment.set("userEmail", randomEmail);

// Tính hash signature
const crypto = require('crypto-js');
const signature = crypto.HmacSHA256(requestBody, secretKey);
pm.environment.set("signature", signature);`}</code></pre>

        <h3>🔍 Test Scripts</h3>

        <pre><code>{`// Kiểm tra status code
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

// Kiểm tra response time
pm.test("Response time is less than 500ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(500);
});

// Kiểm tra JSON structure
pm.test("Response has required fields", function () {
    const response = pm.response.json();
    pm.expect(response).to.have.property('id');
    pm.expect(response).to.have.property('name');
    pm.expect(response).to.have.property('email');
});

// Lưu data để dùng cho request khác
pm.test("Save user ID", function () {
    const response = pm.response.json();
    pm.environment.set("userId", response.id);
});`}</code></pre>

        <div className="section-divider"></div>

        <h2>⚡ Tips & Best Practices</h2>

        <div className="highlight-box warning">
          <h4>🎯 Workflow hiệu quả:</h4>
          
          <h5>📋 1. Tổ chức Collection</h5>
          <ul>
            <li>Nhóm theo feature/module</li>
            <li>Đặt tên rõ ràng, có thứ tự</li>
            <li>Sử dụng folder nested</li>
            <li>Thêm documentation cho mỗi request</li>
          </ul>

          <h5>🔧 2. Environment Setup</h5>
          <ul>
            <li>Tách biệt Dev/Staging/Prod</li>
            <li>Không hardcode sensitive data</li>
            <li>Sử dụng variables cho base URLs</li>
            <li>Store tokens securely</li>
          </ul>

          <h5>🧪 3. Testing Strategy</h5>
          <ul>
            <li>Test happy path và edge cases</li>
            <li>Validate response structure</li>
            <li>Check performance benchmarks</li>
            <li>Automate với Newman CLI</li>
          </ul>
        </div>

        <h3>🔄 Newman CLI - Postman trên Terminal</h3>

        <pre><code>{`# Cài đặt Newman
npm install -g newman

# Chạy collection
newman run collection.json -e environment.json

# Xuất report
newman run collection.json --reporters cli,html --reporter-html-export report.html

# CI/CD Integration
newman run collection.json --bail --reporters cli,junit --reporter-junit-export results.xml`}</code></pre>

        <div className="section-divider"></div>

        <h2>🚀 Advanced Features</h2>

        <h3>📊 Mock Servers</h3>

        <pre><code>{`// Tạo mock response cho development
{
  "id": "{{$randomUUID}}",
  "name": "{{$randomFullName}}",
  "email": "{{$randomEmail}}",
  "created_at": "{{$isoTimestamp}}"
}

// Sử dụng trong team
Mock URL: https://mock-server-id.mock.pstmn.io`}</code></pre>

        <h3>📈 Monitoring</h3>

        <div className="highlight-box">
          <h4>🔔 Postman Monitors:</h4>
          <ul>
            <li><strong>Scheduled runs</strong>: Chạy collection định kỳ</li>
            <li><strong>Uptime monitoring</strong>: Theo dõi API availability</li>
            <li><strong>Performance tracking</strong>: Monitor response time</li>
            <li><strong>Alerts</strong>: Thông báo khi có lỗi</li>
          </ul>
        </div>

        <div className="section-divider"></div>

        <h2>🎉 Kết luận</h2>

        <p>
          <strong>Postman</strong> không chỉ là công cụ test API đơn giản mà là một 
          <strong>platform hoàn chỉnh</strong> cho API development lifecycle.
        </p>

        <blockquote>
          🚀 <strong>Next Steps:</strong>
          <ul>
            <li>Tạo collection cho dự án của bạn</li>
            <li>Setup environments cho các môi trường khác nhau</li>
            <li>Viết tests tự động để đảm bảo API quality</li>
            <li>Integrate với CI/CD pipeline</li>
            <li>Explore Postman API và automation features</li>
          </ul>
        </blockquote>

        <p>
          Với Postman, việc phát triển và test API trở nên dễ dàng và chuyên nghiệp hơn rất nhiều! 🎯✨
        </p>
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