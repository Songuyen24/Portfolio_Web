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
            <span>18 phút đọc</span>
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

        <h3>🏗️ Đặc điểm SQL Databases</h3>

        <p>
          SQL databases sử dụng cấu trúc bảng (table) với các hàng (rows) và cột (columns) 
          có mối quan hệ chặt chẽ với nhau.
        </p>

        <table>
          <thead>
            <tr>
              <th>Đặc điểm</th>
              <th>Mô tả</th>
              <th>Ví dụ</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>ACID Properties</strong></td>
              <td>Atomicity, Consistency, Isolation, Durability</td>
              <td>Transaction rollback</td>
            </tr>
            <tr>
              <td><strong>Schema-based</strong></td>
              <td>Cấu trúc bảng cố định</td>
              <td>Table với columns định nghĩa sẵn</td>
            </tr>
            <tr>
              <td><strong>SQL Language</strong></td>
              <td>Structured Query Language</td>
              <td>SELECT, INSERT, UPDATE, DELETE</td>
            </tr>
            <tr>
              <td><strong>Relationships</strong></td>
              <td>Foreign keys, joins</td>
              <td>One-to-many, Many-to-many</td>
            </tr>
            <tr>
              <td><strong>Vertical Scaling</strong></td>
              <td>Scale up (more powerful hardware)</td>
              <td>Tăng CPU, RAM, SSD</td>
            </tr>
          </tbody>
        </table>

        <h3>🔥 Popular SQL Databases</h3>

        <div className="highlight-box">
          <h4>🏆 Top SQL Databases:</h4>
          
          <h5>🐬 MySQL</h5>
          <ul>
            <li><strong>Open Source</strong>, miễn phí</li>
            <li><strong>Performance cao</strong>, reliable</li>
            <li><strong>Wide adoption</strong>: WordPress, Facebook</li>
            <li><strong>Use cases</strong>: Web apps, e-commerce</li>
          </ul>

          <h5>🐘 PostgreSQL</h5>
          <ul>
            <li><strong>Advanced features</strong>: JSON support, full-text search</li>
            <li><strong>ACID compliant</strong>, extensible</li>
            <li><strong>Complex queries</strong>, stored procedures</li>
            <li><strong>Use cases</strong>: Data analytics, GIS applications</li>
          </ul>

          <h5>📈 Microsoft SQL Server</h5>
          <ul>
            <li><strong>Enterprise-grade</strong>, Windows ecosystem</li>
            <li><strong>Business Intelligence</strong> tools</li>
            <li><strong>Integration</strong> với .NET</li>
            <li><strong>Use cases</strong>: Enterprise applications</li>
          </ul>
        </div>

        <h3>💻 SQL Syntax Examples</h3>

        <pre><code>{`-- Tạo database và table
CREATE DATABASE ecommerce;

CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    age INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE orders (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    product_name VARCHAR(200),
    quantity INT,
    price DECIMAL(10, 2),
    order_date DATE,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Insert data
INSERT INTO users (name, email, age) VALUES 
('John Doe', 'john@example.com', 30),
('Jane Smith', 'jane@example.com', 25),
('Bob Wilson', 'bob@example.com', 35);

INSERT INTO orders (user_id, product_name, quantity, price, order_date) VALUES
(1, 'Laptop Dell', 1, 15000000, '2024-01-15'),
(1, 'Mouse Logitech', 2, 500000, '2024-01-16'),
(2, 'iPhone 15', 1, 25000000, '2024-01-17');

-- Complex queries
-- Join tables
SELECT 
    u.name,
    u.email,
    o.product_name,
    o.quantity,
    o.price,
    (o.quantity * o.price) as total_amount
FROM users u
INNER JOIN orders o ON u.id = o.user_id
WHERE u.age >= 25
ORDER BY o.order_date DESC;

-- Aggregate functions
SELECT 
    u.name,
    COUNT(o.id) as total_orders,
    SUM(o.quantity * o.price) as total_spent
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
GROUP BY u.id, u.name
HAVING COUNT(o.id) > 0;

-- Subqueries
SELECT name, email 
FROM users 
WHERE id IN (
    SELECT DISTINCT user_id 
    FROM orders 
    WHERE price > 1000000
);

-- Window functions (PostgreSQL)
SELECT 
    name,
    email,
    age,
    RANK() OVER (ORDER BY age DESC) as age_rank,
    AVG(age) OVER () as avg_age
FROM users;`}</code></pre>

        <div className="section-divider"></div>

        <h2>📱 NoSQL Databases (Non-Relational)</h2>

        <h3>🌟 Đặc điểm NoSQL Databases</h3>

        <p>
          NoSQL databases được thiết kế để xử lý dữ liệu lớn, phân tán và có tính linh hoạt cao 
          trong cấu trúc dữ liệu.
        </p>

        <table>
          <thead>
            <tr>
              <th>Đặc điểm</th>
              <th>Mô tả</th>
              <th>Benefit</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Schema-free</strong></td>
              <td>Không cần định nghĩa cấu trúc trước</td>
              <td>🔄 Flexibility</td>
            </tr>
            <tr>
              <td><strong>Horizontal Scaling</strong></td>
              <td>Scale out (more servers)</td>
              <td>📈 Better scalability</td>
            </tr>
            <tr>
              <td><strong>High Performance</strong></td>
              <td>Optimized for specific use cases</td>
              <td>⚡ Speed</td>
            </tr>
            <tr>
              <td><strong>Big Data</strong></td>
              <td>Handle large volumes of data</td>
              <td>📊 Volume handling</td>
            </tr>
            <tr>
              <td><strong>Eventually Consistent</strong></td>
              <td>CAP theorem trade-offs</td>
              <td>🌐 Distributed systems</td>
            </tr>
          </tbody>
        </table>

        <h3>📁 Types of NoSQL Databases</h3>

        <div className="highlight-box warning">
          <h4>🗂️ 4 Main Types:</h4>

          <h5>📄 1. Document Databases</h5>
          <ul>
            <li><strong>Structure</strong>: JSON-like documents</li>
            <li><strong>Examples</strong>: MongoDB, CouchDB</li>
            <li><strong>Use cases</strong>: Web apps, content management</li>
            <li><strong>Pros</strong>: Flexible schema, easy to scale</li>
          </ul>

          <h5>🔑 2. Key-Value Stores</h5>
          <ul>
            <li><strong>Structure</strong>: Simple key-value pairs</li>
            <li><strong>Examples</strong>: Redis, DynamoDB</li>
            <li><strong>Use cases</strong>: Caching, session storage</li>
            <li><strong>Pros</strong>: Extremely fast, simple</li>
          </ul>

          <h5>📊 3. Column-Family</h5>
          <ul>
            <li><strong>Structure</strong>: Column-oriented</li>
            <li><strong>Examples</strong>: Cassandra, HBase</li>
            <li><strong>Use cases</strong>: Time-series data, analytics</li>
            <li><strong>Pros</strong>: Compression, analytical queries</li>
          </ul>

          <h5>🕸️ 4. Graph Databases</h5>
          <ul>
            <li><strong>Structure</strong>: Nodes và relationships</li>
            <li><strong>Examples</strong>: Neo4j, Amazon Neptune</li>
            <li><strong>Use cases</strong>: Social networks, recommendations</li>
            <li><strong>Pros</strong>: Complex relationships, traversals</li>
          </ul>
        </div>

        <h3>🍃 MongoDB Examples</h3>

        <pre><code>{`// MongoDB Document structure
// Collection: users
{
  "_id": ObjectId("507f1f77bcf86cd799439011"),
  "name": "John Doe",
  "email": "john@example.com", 
  "age": 30,
  "address": {
    "street": "123 Main St",
    "city": "New York",
    "zipCode": "10001"
  },
  "hobbies": ["reading", "gaming", "cooking"],
  "orders": [
    {
      "orderId": "ORD001",
      "productName": "Laptop Dell",
      "quantity": 1,
      "price": 15000000,
      "orderDate": ISODate("2024-01-15")
    }
  ],
  "preferences": {
    "theme": "dark",
    "language": "vi",
    "notifications": {
      "email": true,
      "sms": false
    }
  },
  "createdAt": ISODate("2024-01-01"),
  "updatedAt": ISODate("2024-01-15")
}

// Basic MongoDB Operations

// Insert documents
db.users.insertOne({
  name: "Jane Smith",
  email: "jane@example.com",
  age: 25,
  hobbies: ["traveling", "photography"]
});

db.users.insertMany([
  { name: "Bob Wilson", email: "bob@example.com", age: 35 },
  { name: "Alice Johnson", email: "alice@example.com", age: 28 }
]);

// Find documents
// Find all users
db.users.find();

// Find with conditions
db.users.find({ age: { $gte: 25 } });
db.users.find({ hobbies: "reading" });
db.users.find({ "address.city": "New York" });

// Find with projection
db.users.find(
  { age: { $gte: 25 } }, 
  { name: 1, email: 1, _id: 0 }
);

// Advanced queries
db.users.find({
  $and: [
    { age: { $gte: 25 } },
    { hobbies: { $in: ["reading", "gaming"] } }
  ]
});

// Aggregation Pipeline
db.users.aggregate([
  { $match: { age: { $gte: 25 } } },
  { $group: { 
      _id: null, 
      avgAge: { $avg: "$age" },
      totalUsers: { $sum: 1 }
    }
  }
]);

// Update documents
db.users.updateOne(
  { email: "john@example.com" },
  { 
    $set: { age: 31 },
    $push: { hobbies: "traveling" }
  }
);

// Delete documents
db.users.deleteOne({ email: "test@example.com" });
db.users.deleteMany({ age: { $lt: 18 } });`}</code></pre>

        <div className="section-divider"></div>

        <h2>⚖️ SQL vs NoSQL Comparison</h2>

        <table>
          <thead>
            <tr>
              <th>Aspect</th>
              <th>SQL</th>
              <th>NoSQL</th>
              <th>Winner</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Schema</strong></td>
              <td>Fixed schema, predefined</td>
              <td>Dynamic schema, flexible</td>
              <td>🤝 Depends on use case</td>
            </tr>
            <tr>
              <td><strong>Scaling</strong></td>
              <td>Vertical (scale up)</td>
              <td>Horizontal (scale out)</td>
              <td>🏆 NoSQL</td>
            </tr>
            <tr>
              <td><strong>ACID Compliance</strong></td>
              <td>Full ACID support</td>
              <td>Limited ACID (BASE model)</td>
              <td>🏆 SQL</td>
            </tr>
            <tr>
              <td><strong>Complex Queries</strong></td>
              <td>Rich SQL syntax, joins</td>
              <td>Limited query capabilities</td>
              <td>🏆 SQL</td>
            </tr>
            <tr>
              <td><strong>Performance</strong></td>
              <td>Good for complex queries</td>
              <td>Excellent for simple queries</td>
              <td>🤝 Depends on use case</td>
            </tr>
            <tr>
              <td><strong>Data Integrity</strong></td>
              <td>Strong consistency</td>
              <td>Eventual consistency</td>
              <td>🏆 SQL</td>
            </tr>
            <tr>
              <td><strong>Development Speed</strong></td>
              <td>Slower initial development</td>
              <td>Rapid prototyping</td>
              <td>🏆 NoSQL</td>
            </tr>
            <tr>
              <td><strong>Learning Curve</strong></td>
              <td>Standard SQL</td>
              <td>Varies by database</td>
              <td>🏆 SQL</td>
            </tr>
          </tbody>
        </table>

        <div className="section-divider"></div>

        <h2>🎯 Khi nào sử dụng SQL vs NoSQL?</h2>

        <div className="highlight-box success">
          <h4>🗄️ Chọn SQL Database khi:</h4>
          <ul>
            <li>💰 <strong>Financial Applications</strong>: Banking, payments (cần ACID)</li>
            <li>📊 <strong>Complex Reporting</strong>: Business intelligence, analytics</li>
            <li>🔗 <strong>Relational Data</strong>: Nhiều mối quan hệ giữa entities</li>
            <li>📋 <strong>Fixed Schema</strong>: Cấu trúc dữ liệu ổn định</li>
            <li>🎯 <strong>ACID Requirements</strong>: Cần consistency tuyệt đối</li>
            <li>👥 <strong>Small to Medium Scale</strong>: Đến hàng triệu records</li>
          </ul>
        </div>

        <div className="highlight-box warning">
          <h4>🍃 Chọn NoSQL Database khi:</h4>
          <ul>
            <li>📱 <strong>Real-time Applications</strong>: Chat, gaming, IoT</li>
            <li>📈 <strong>Big Data</strong>: Hàng tỷ records, petabytes data</li>
            <li>🌐 <strong>Distributed Systems</strong>: Multi-region, cloud-native</li>
            <li>🔄 <strong>Rapid Development</strong>: Agile, changing requirements</li>
            <li>📄 <strong>Unstructured Data</strong>: JSON, XML, multimedia</li>
            <li>⚡ <strong>High Performance</strong>: Low latency requirements</li>
          </ul>
        </div>

        <h3>🏢 Use Cases by Industry</h3>

        <table>
          <thead>
            <tr>
              <th>Industry</th>
              <th>Recommended</th>
              <th>Examples</th>
              <th>Reason</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>E-commerce</strong></td>
              <td>SQL + NoSQL</td>
              <td>MySQL + Redis</td>
              <td>Orders (SQL), Catalog + Caching (NoSQL)</td>
            </tr>
            <tr>
              <td><strong>Social Media</strong></td>
              <td>NoSQL</td>
              <td>MongoDB, Cassandra</td>
              <td>User posts, feeds, high volume</td>
            </tr>
            <tr>
              <td><strong>Banking</strong></td>
              <td>SQL</td>
              <td>PostgreSQL, Oracle</td>
              <td>ACID compliance, transactions</td>
            </tr>
            <tr>
              <td><strong>Gaming</strong></td>
              <td>NoSQL</td>
              <td>MongoDB, Redis</td>
              <td>Player stats, real-time updates</td>
            </tr>
            <tr>
              <td><strong>Analytics</strong></td>
              <td>SQL</td>
              <td>PostgreSQL, BigQuery</td>
              <td>Complex queries, reporting</td>
            </tr>
            <tr>
              <td><strong>IoT</strong></td>
              <td>NoSQL</td>
              <td>InfluxDB, MongoDB</td>
              <td>Time-series data, high throughput</td>
            </tr>
          </tbody>
        </table>

        <div className="section-divider"></div>

        <h2>🏗️ Database Design Best Practices</h2>

        <h3>🎨 SQL Database Design</h3>

        <pre><code>{`-- Normalization principles
-- 1NF: Atomic values, no repeating groups
-- 2NF: No partial dependencies
-- 3NF: No transitive dependencies

-- Good design example
CREATE TABLE customers (
    customer_id INT PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    email VARCHAR(100) UNIQUE,
    phone VARCHAR(20)
);

CREATE TABLE addresses (
    address_id INT PRIMARY KEY,
    customer_id INT,
    address_type ENUM('billing', 'shipping'),
    street_address VARCHAR(255),
    city VARCHAR(100),
    state VARCHAR(50),
    zip_code VARCHAR(10),
    country VARCHAR(50),
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
);

-- Indexes for performance
CREATE INDEX idx_customer_email ON customers(email);
CREATE INDEX idx_address_customer ON addresses(customer_id);
CREATE INDEX idx_order_date ON orders(order_date);

-- Constraints for data integrity
ALTER TABLE orders 
ADD CONSTRAINT chk_order_total 
CHECK (total_amount > 0);

ALTER TABLE products 
ADD CONSTRAINT chk_stock_quantity 
CHECK (stock_quantity >= 0);`}</code></pre>

        <h3>📄 NoSQL Document Design</h3>

        <pre><code>{`// MongoDB Schema Design Patterns

// 1. Embedding (One-to-Few relationship)
{
  "_id": ObjectId("..."),
  "title": "Learn MongoDB",
  "content": "MongoDB is a document database...",
  "author": {
    "name": "John Doe",
    "email": "john@example.com"
  },
  "tags": ["database", "nosql", "mongodb"],
  "comments": [
    {
      "author": "Jane Smith",
      "content": "Great article!",
      "date": ISODate("2024-01-15")
    }
  ]
}

// 2. Referencing (One-to-Many relationship)
// Users collection
{
  "_id": ObjectId("user123"),
  "name": "John Doe",
  "email": "john@example.com"
}

// Posts collection
{
  "_id": ObjectId("post456"),
  "title": "My First Post",
  "content": "This is my first blog post",
  "author_id": ObjectId("user123"), // Reference
  "created_at": ISODate("2024-01-15")
}

// 3. Hybrid approach (One-to-Squillions)
// Store frequently accessed data together
{
  "_id": ObjectId("order789"),
  "customer": {
    "id": ObjectId("customer123"),
    "name": "John Doe", // Denormalized for performance
    "email": "john@example.com"
  },
  "items": [
    {
      "product_id": ObjectId("product456"),
      "name": "Laptop", // Denormalized
      "quantity": 1,
      "price": 1000
    }
  ],
  "total": 1000,
  "status": "pending"
}`}</code></pre>

        <div className="section-divider"></div>

        <h2>🚀 Performance Optimization</h2>

        <h3>⚡ SQL Optimization</h3>

        <pre><code>{`-- Index optimization
EXPLAIN SELECT * FROM orders 
WHERE customer_id = 123 
AND order_date >= '2024-01-01';

-- Query optimization
-- Bad: Full table scan
SELECT * FROM users WHERE YEAR(created_at) = 2024;

-- Good: Use index
SELECT * FROM users 
WHERE created_at >= '2024-01-01' 
AND created_at < '2025-01-01';

-- Pagination
-- Bad: Large OFFSET
SELECT * FROM posts ORDER BY id LIMIT 1000 OFFSET 50000;

-- Good: Cursor-based pagination
SELECT * FROM posts 
WHERE id > 50000 
ORDER BY id 
LIMIT 1000;

-- Connection pooling configuration
-- MySQL
max_connections = 200
innodb_buffer_pool_size = 2G
query_cache_size = 256M`}</code></pre>

        <h3>🍃 MongoDB Optimization</h3>

        <pre><code>{`// Index creation
db.users.createIndex({ email: 1 }); // Single field
db.orders.createIndex({ customer_id: 1, order_date: -1 }); // Compound
db.products.createIndex({ name: "text" }); // Text search

// Query optimization
// Use projection to limit returned fields
db.users.find({ age: { $gte: 25 } }, { name: 1, email: 1 });

// Use aggregation pipeline efficiently
db.orders.aggregate([
  { $match: { status: "completed" } }, // Filter first
  { $group: { 
      _id: "$customer_id", 
      total: { $sum: "$amount" } 
    }
  },
  { $sort: { total: -1 } },
  { $limit: 10 }
]);

// Connection pooling
const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient(uri, {
  maxPoolSize: 100,
  minPoolSize: 10,
  maxIdleTimeMS: 30000,
  serverSelectionTimeoutMS: 5000
});`}</code></pre>

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