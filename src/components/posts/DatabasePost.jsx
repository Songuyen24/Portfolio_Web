import React from 'react';
import { Link } from 'react-router-dom';
import { FiCalendar, FiClock, FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import '../../assets/styles/BlogPost.css';

const DatabasePost = () => {
  return (
    <div className="blog-post">
      <div className="blog-header">
        <h1 className="blog-title">
          🗄️ Cơ sở dữ liệu – So sánh SQL vs NoSQL và cách lựa chọn phù hợp
        </h1>
        
        <div className="blog-meta">
          <div className="meta-item">
            <FiCalendar />
            <span>27 tháng 10, 2025</span>
          </div>
          <div className="meta-item">
            <FiClock />
            <span>5 phút đọc</span>
          </div>
          <div className="meta-item">
            <span>📂 Database & Backend</span>
          </div>
        </div>
        
        <p className="blog-excerpt">
          Hiểu rõ sự khác biệt giữa SQL và NoSQL databases, ưu nhược điểm của từng loại và cách chọn database phù hợp với dự án của bạn
        </p>
        
        <div className="blog-tags">
          <span className="tag">Database</span>
          <span className="tag">SQL</span>
          <span className="tag">NoSQL</span>
          <span className="tag">MongoDB</span>
          <span className="tag">MySQL</span>
        </div>
      </div>

      <div className="blog-content">
        <h2>🗄️ Giới thiệu về Database</h2>
        
        <p>
          <strong>Database (Cơ sở dữ liệu)</strong> là hệ thống lưu trữ và quản lý dữ liệu một cách có tổ chức, 
          cho phép truy cập, quản lý và cập nhật dữ liệu một cách hiệu quả và an toàn.
        </p>

        <blockquote>
          🎯 <strong>Database là trái tim của mọi ứng dụng</strong>: Không có database, 
          ứng dụng chỉ là một shell rỗng không thể lưu trữ và xử lý thông tin.
        </blockquote>

        <div className="highlight-box success">
          <h4>🌟 Tại sao Database quan trọng?</h4>
          <ul>
            <li>💾 <strong>Data Persistence</strong>: Lưu trữ dữ liệu lâu dài</li>
            <li>🔍 <strong>Data Retrieval</strong>: Truy vấn nhanh và chính xác</li>
            <li>🔒 <strong>Data Security</strong>: Bảo mật và kiểm soát truy cập</li>
            <li>🤝 <strong>Concurrent Access</strong>: Nhiều người dùng cùng lúc</li>
            <li>🔄 <strong>Data Integrity</strong>: Đảm bảo tính toàn vẹn</li>
            <li>📈 <strong>Scalability</strong>: Mở rộng theo nhu cầu</li>
          </ul>
        </div>

        <div className="section-divider"></div>

        <h2>📊 SQL Databases (Relational)</h2>

        <p>
          SQL databases sử dụng cấu trúc bảng (table) với các hàng (rows) và cột (columns) 
          có mối quan hệ chặt chẽ với nhau.
        </p>

        <div className="highlight-box">
          <h4>🏆 Popular SQL Databases:</h4>
          
          <ul>
            <li>🐬 <strong>MySQL</strong>: Open source, web apps, e-commerce</li>
            <li>🐘 <strong>PostgreSQL</strong>: Advanced features, JSON support, analytics</li>
            <li>📈 <strong>SQL Server</strong>: Enterprise, Windows ecosystem</li>
          </ul>
        </div>

        <h3>💻 SQL Syntax Example</h3>

        <pre><code>{`-- Create table
CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE,
    age INT
);

-- Insert data
INSERT INTO users (name, email, age) VALUES 
('John Doe', 'john@example.com', 30);

-- Query with joins
SELECT u.name, o.product_name, o.price
FROM users u
INNER JOIN orders o ON u.id = o.user_id
WHERE u.age >= 25;

-- Aggregate
SELECT name, COUNT(*) as total_orders
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
GROUP BY u.name;`}</code></pre>

        <div className="section-divider"></div>

        <h2>📱 NoSQL Databases (Non-Relational)</h2>

        <p>
          NoSQL databases được thiết kế cho dữ liệu lớn, phân tán và linh hoạt về cấu trúc.
        </p>

        <div className="highlight-box warning">
          <h4>🗂️ 4 Types NoSQL:</h4>

          <ul>
            <li>📄 <strong>Document</strong>: MongoDB, CouchDB (JSON-like docs)</li>
            <li>🔑 <strong>Key-Value</strong>: Redis, DynamoDB (fast, simple)</li>
            <li>📊 <strong>Column-Family</strong>: Cassandra (time-series, analytics)</li>
            <li>🕸️ <strong>Graph</strong>: Neo4j (relationships, social networks)</li>
          </ul>
        </div>

        <h3>🍃 MongoDB Example</h3>

        <pre><code>{`// Document structure
{
  "_id": ObjectId("..."),
  "name": "John Doe",
  "email": "john@example.com", 
  "age": 30,
  "address": {
    "city": "New York",
    "zipCode": "10001"
  },
  "hobbies": ["reading", "gaming"]
}

// CRUD Operations
// Insert
db.users.insertOne({
  name: "Jane Smith",
  email: "jane@example.com",
  age: 25
});

// Find
db.users.find({ age: { $gte: 25 } });
db.users.find({ hobbies: "reading" });

// Update
db.users.updateOne(
  { email: "john@example.com" },
  { $set: { age: 31 }, $push: { hobbies: "traveling" } }
);

// Delete
db.users.deleteOne({ email: "test@example.com" });`}</code></pre>

        <div className="section-divider"></div>

        <h2>⚖️ SQL vs NoSQL</h2>

        <table>
          <thead>
            <tr>
              <th>Aspect</th>
              <th>SQL</th>
              <th>NoSQL</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Schema</strong></td>
              <td>Fixed, predefined</td>
              <td>Dynamic, flexible</td>
            </tr>
            <tr>
              <td><strong>Scaling</strong></td>
              <td>Vertical (scale up)</td>
              <td>Horizontal (scale out)</td>
            </tr>
            <tr>
              <td><strong>ACID</strong></td>
              <td>Full support</td>
              <td>Limited (BASE model)</td>
            </tr>
            <tr>
              <td><strong>Queries</strong></td>
              <td>Rich SQL, joins</td>
              <td>Limited capabilities</td>
            </tr>
            <tr>
              <td><strong>Use Cases</strong></td>
              <td>Banking, analytics</td>
              <td>Real-time, big data</td>
            </tr>
          </tbody>
        </table>

        <div className="section-divider"></div>

        <h2>🎯 Khi nào dùng SQL vs NoSQL?</h2>

        <div className="highlight-box success">
          <h4>🗄️ Chọn SQL khi:</h4>
          <ul>
            <li>💰 <strong>Financial Apps</strong>: Banking, payments (cần ACID)</li>
            <li>📊 <strong>Complex Reporting</strong>: Analytics, BI</li>
            <li>🔗 <strong>Relational Data</strong>: Nhiều relationships</li>
            <li>📋 <strong>Fixed Schema</strong>: Cấu trúc ổn định</li>
          </ul>
        </div>

        <div className="highlight-box warning">
          <h4>🍃 Chọn NoSQL khi:</h4>
          <ul>
            <li>📱 <strong>Real-time Apps</strong>: Chat, gaming, IoT</li>
            <li>📈 <strong>Big Data</strong>: Hàng tỷ records</li>
            <li>🌐 <strong>Distributed Systems</strong>: Multi-region</li>
            <li>🔄 <strong>Rapid Development</strong>: Agile, thay đổi nhanh</li>
          </ul>
        </div>

        <div className="section-divider"></div>

        <h2>🎉 Kết luận</h2>

        <p>
          Việc lựa chọn giữa <strong>SQL và NoSQL</strong> không phải là cuộc chiến 
          "hoặc này hoặc kia" mà là sự <strong>lựa chọn đúng tool cho đúng job</strong>.
        </p>

        <div className="highlight-box success">
          <h4>🎯 Key Takeaways:</h4>
          <ul>
            <li>🤔 <strong>Analyze Requirements</strong>: Data structure, scale, consistency needs</li>
            <li>🏗️ <strong>Consider Architecture</strong>: Monolith vs microservices</li>
            <li>👥 <strong>Team Expertise</strong>: Existing knowledge và learning curve</li>
            <li>💰 <strong>Budget & Resources</strong>: Licensing, hosting, maintenance costs</li>
            <li>🔮 <strong>Future Growth</strong>: Scalability và evolution requirements</li>
            <li>🔧 <strong>Hybrid Approach</strong>: Sử dụng cả SQL và NoSQL cho different use cases</li>
          </ul>
        </div>

        <blockquote>
          🗄️ <strong>Modern Database Strategy:</strong>
          <p>
            Nhiều ứng dụng hiện đại sử dụng <strong>"polyglot persistence"</strong> - 
            combining multiple database technologies để tận dụng strengths của từng loại:
          </p>
          <ul>
            <li>🐬 <strong>MySQL</strong> cho transactional data</li>
            <li>🍃 <strong>MongoDB</strong> cho content management</li>
            <li>🔥 <strong>Redis</strong> cho caching và sessions</li>
            <li>📊 <strong>Elasticsearch</strong> cho search và analytics</li>
          </ul>
        </blockquote>

        <p>
          Remember: <strong>Database choice impacts your entire application</strong>. 
          Take time để research, prototype, và test trước khi commit! 🎯🚀
        </p>
      </div>

      <div className="nav-buttons">
        <Link to="/posts/reactjs-thu-vien-xay-dung-giao-dien-hien-dai" className="nav-button prev">
          <FiArrowLeft />
          Bài trước
        </Link>
        <Link to="/posts/crud-operations-tao-sua-doc-xoa-du-lieu" className="nav-button">
          Bài tiếp theo
          <FiArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default DatabasePost;