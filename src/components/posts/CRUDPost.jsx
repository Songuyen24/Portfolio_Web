import React from 'react';
import { Link } from 'react-router-dom';
import { FiCalendar, FiClock, FiArrowLeft } from 'react-icons/fi';
import '../../assets/styles/BlogPost.css';

const CRUDPost = () => {
  return (
    <div className="blog-post">
      <div className="blog-header">
        <h1 className="blog-title">
          🔄 CRUD Operations – Tạo, Sửa, Đọc, Xóa dữ liệu trong ứng dụng web
        </h1>
        
        <div className="blog-meta">
          <div className="meta-item">
            <FiCalendar />
            <span>3 tháng 11, 2025</span>
          </div>
          <div className="meta-item">
            <FiClock />
            <span>5 phút đọc</span>
          </div>
          <div className="meta-item">
            <span>📂 Backend & API Development</span>
          </div>
        </div>
        
        <p className="blog-excerpt">
          Hiểu rõ về CRUD operations - 4 thao tác cơ bản với dữ liệu, cách implement với REST API, SQL và NoSQL databases
        </p>
        
        <div className="blog-tags">
          <span className="tag">CRUD</span>
          <span className="tag">REST API</span>
          <span className="tag">Database</span>
          <span className="tag">HTTP Methods</span>
          <span className="tag">Backend</span>
        </div>
      </div>

      <div className="blog-content">
        <h2>🔄 CRUD là gì?</h2>
        
        <p>
          <strong>CRUD</strong> là viết tắt của 4 thao tác cơ bản với dữ liệu trong bất kỳ hệ thống nào:
        </p>

        <div className="highlight-box success">
          <h4>🎯 4 Operations cơ bản:</h4>
          <ul>
            <li>📝 <strong>CREATE</strong>: Tạo mới dữ liệu</li>
            <li>👁️ <strong>READ</strong>: Đọc/Truy vấn dữ liệu</li>
            <li>✏️ <strong>UPDATE</strong>: Cập nhật dữ liệu hiện có</li>
            <li>🗑️ <strong>DELETE</strong>: Xóa dữ liệu</li>
          </ul>
        </div>

        <blockquote>
          💡 <strong>CRUD is everywhere!</strong>: Từ simple forms đến complex applications, 
          mọi tương tác với dữ liệu đều xoay quanh 4 operations này.
        </blockquote>

        <table>
          <thead>
            <tr>
              <th>CRUD Operation</th>
              <th>HTTP Method</th>
              <th>SQL Command</th>
              <th>MongoDB Method</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>CREATE</strong></td>
              <td>POST</td>
              <td>INSERT</td>
              <td>insertOne(), insertMany()</td>
            </tr>
            <tr>
              <td><strong>READ</strong></td>
              <td>GET</td>
              <td>SELECT</td>
              <td>find(), findOne()</td>
            </tr>
            <tr>
              <td><strong>UPDATE</strong></td>
              <td>PUT/PATCH</td>
              <td>UPDATE</td>
              <td>updateOne(), updateMany()</td>
            </tr>
            <tr>
              <td><strong>DELETE</strong></td>
              <td>DELETE</td>
              <td>DELETE</td>
              <td>deleteOne(), deleteMany()</td>
            </tr>
          </tbody>
        </table>

        <div className="section-divider"></div>

        <h2>🌐 REST API Design for CRUD</h2>

        <h3>🛠️ RESTful Endpoints</h3>

        <table>
          <thead>
            <tr>
              <th>Operation</th>
              <th>HTTP Method</th>
              <th>Endpoint</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Create</strong></td>
              <td>POST</td>
              <td>/api/users</td>
              <td>Tạo user mới</td>
            </tr>
            <tr>
              <td><strong>Read All</strong></td>
              <td>GET</td>
              <td>/api/users</td>
              <td>Lấy danh sách users</td>
            </tr>
            <tr>
              <td><strong>Read One</strong></td>
              <td>GET</td>
              <td>/api/users/:id</td>
              <td>Lấy user theo ID</td>
            </tr>
            <tr>
              <td><strong>Update</strong></td>
              <td>PUT/PATCH</td>
              <td>/api/users/:id</td>
              <td>Cập nhật user</td>
            </tr>
            <tr>
              <td><strong>Delete</strong></td>
              <td>DELETE</td>
              <td>/api/users/:id</td>
              <td>Xóa user</td>
            </tr>
          </tbody>
        </table>

        <div className="highlight-box warning">
          <h4>📋 HTTP Status Codes cho CRUD:</h4>
          <ul>
            <li><strong>200 OK</strong>: Successful GET, PUT, PATCH</li>
            <li><strong>201 Created</strong>: Successful POST</li>
            <li><strong>204 No Content</strong>: Successful DELETE</li>
            <li><strong>400 Bad Request</strong>: Invalid data</li>
            <li><strong>404 Not Found</strong>: Resource không tồn tại</li>
            <li><strong>409 Conflict</strong>: Duplicate data</li>
            <li><strong>500 Internal Server Error</strong>: Server error</li>
          </ul>
        </div>

        <div className="section-divider"></div>

        <h2>🚀 Node.js + Express CRUD Implementation</h2>

        <h3>📦 Setup</h3>

        <pre><code>{`npm install express mongoose cors dotenv express-validator
npm install -D nodemon`}</code></pre>

        <h3>📋 User Model</h3>

        <pre><code>{`const userSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, minlength: 6 },
  age: { type: Number, min: 13, max: 120 },
  role: { type: String, enum: ['user', 'admin'], default: 'user' }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);`}</code></pre>

        <div className="section-divider"></div>

        <h2>🎯 CRUD Routes Implementation</h2>

        <h3>📝 CREATE</h3>

        <pre><code>{`router.post('/', async (req, res) => {
  const { name, email, password } = req.body;
  
  // Check if user exists
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(409).json({ message: 'Email already exists' });
  }
  
  const user = new User({ name, email, password });
  await user.save();
  
  res.status(201).json({ success: true, data: user });
});`}</code></pre>

        <h3>👁️ READ</h3>

        <pre><code>{`// Get all with pagination
router.get('/', async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  
  const users = await User.find()
    .skip((page - 1) * limit)
    .limit(limit);
  
  res.json({ success: true, data: users });
});

// Get by ID
router.get('/:id', async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) return res.status(404).json({ message: 'Not found' });
  res.json({ success: true, data: user });
});`}</code></pre>

        <h3>✏️ UPDATE</h3>

        <pre><code>{`router.put('/:id', async (req, res) => {
  const user = await User.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true, runValidators: true }
  );
  
  if (!user) return res.status(404).json({ message: 'Not found' });
  res.json({ success: true, data: user });
});`}</code></pre>

        <h3>🗑️ DELETE</h3>

        <pre><code>{`router.delete('/:id', async (req, res) => {
  const user = await User.findByIdAndDelete(req.params.id);
  if (!user) return res.status(404).json({ message: 'Not found' });
  res.status(204).send();
});`}</code></pre>

        <div className="section-divider"></div>

        <h2>🎨 Frontend CRUD with React</h2>

        <pre><code>{`import { useState, useEffect } from 'react';

function UserManager() {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({ name: '', email: '', age: '' });
  const [editingId, setEditingId] = useState(null);

  // READ
  useEffect(() => {
    fetch('http://localhost:5000/api/users')
      .then(res => res.json())
      .then(data => setUsers(data.data));
  }, []);

  // CREATE
  const handleCreate = async () => {
    const res = await fetch('http://localhost:5000/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    const newUser = await res.json();
    setUsers([...users, newUser.data]);
    setFormData({ name: '', email: '', age: '' });
  };

  // UPDATE
  const handleUpdate = async (id) => {
    const res = await fetch(\`http://localhost:5000/api/users/\${id}\`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    const updated = await res.json();
    setUsers(users.map(u => u._id === id ? updated.data : u));
    setEditingId(null);
  };

  // DELETE
  const handleDelete = async (id) => {
    await fetch(\`http://localhost:5000/api/users/\${id}\`, { method: 'DELETE' });
    setUsers(users.filter(u => u._id !== id));
  };

  return (
    <div>
      {/* Form and table UI */}
    </div>
  );
}`}</code></pre>

        <div className="section-divider"></div>

        <h2>🗃️ Database-Specific CRUD</h2>

        <h3>🐬 MySQL</h3>

        <pre><code>{`-- CREATE
INSERT INTO users (name, email, age) VALUES ('John', 'john@example.com', 30);

-- READ
SELECT * FROM users WHERE age >= 25 ORDER BY created_at DESC LIMIT 10;

-- UPDATE
UPDATE users SET name = 'John Updated', age = 31 WHERE id = 1;

-- DELETE
DELETE FROM users WHERE id = 1;`}</code></pre>

        <h3>🍃 MongoDB</h3>

        <pre><code>{`// CREATE
db.users.insertOne({ name: "John", email: "john@example.com", age: 30 });

// READ
db.users.find({ age: { $gte: 25 } }).sort({ createdAt: -1 }).limit(10);

// UPDATE
db.users.updateOne(
  { email: "john@example.com" },
  { $set: { age: 31 }, $push: { tags: "senior" } }
);

// DELETE
db.users.deleteOne({ email: "test@example.com" });`}</code></pre>

        <div className="section-divider"></div>

        <h2>🔒 CRUD Security Best Practices</h2>

        <div className="highlight-box warning">
          <h4>🛡️ Security Checklist:</h4>
          
          <h5>🔐 Authentication & Authorization</h5>
          <ul>
            <li>Implement proper <strong>authentication</strong> (JWT, sessions)</li>
            <li>Use <strong>role-based access control</strong> (RBAC)</li>
            <li>Validate <strong>user permissions</strong> for each operation</li>
            <li>Implement <strong>rate limiting</strong> để prevent abuse</li>
          </ul>

          <h5>🛡️ Input Validation</h5>
          <ul>
            <li><strong>Validate all inputs</strong> on both client and server</li>
            <li>Use <strong>parameterized queries</strong> để prevent SQL injection</li>
            <li><strong>Sanitize data</strong> before storing</li>
            <li>Implement <strong>schema validation</strong></li>
          </ul>

          <h5>🔍 Audit & Logging</h5>
          <ul>
            <li>Log all <strong>CRUD operations</strong></li>
            <li>Track <strong>who did what when</strong></li>
            <li>Implement <strong>soft deletes</strong> cho important data</li>
            <li>Regular <strong>database backups</strong></li>
          </ul>
        </div>

        <div className="section-divider"></div>

        <h2>🎉 Kết luận</h2>

        <p>
          <strong>CRUD operations</strong> là foundation của mọi ứng dụng web. 
          Hiểu rõ và implement chúng một cách <strong>hiệu quả, an toàn và scalable</strong> 
          là key để xây dựng applications thành công.
        </p>

        <div className="highlight-box success">
          <h4>🎯 Key Takeaways:</h4>
          <ul>
            <li>🏗️ <strong>RESTful Design</strong>: Follow HTTP methods và status codes</li>
            <li>🔍 <strong>Validation</strong>: Validate inputs ở cả client và server</li>
            <li>🔒 <strong>Security First</strong>: Authentication, authorization, audit logging</li>
            <li>⚡ <strong>Performance</strong>: Indexing, pagination, caching</li>
            <li>🛡️ <strong>Error Handling</strong>: Comprehensive error handling và user feedback</li>
            <li>📱 <strong>User Experience</strong>: Loading states, confirmation dialogs</li>
            <li>🧪 <strong>Testing</strong>: Unit tests, integration tests for CRUD operations</li>
          </ul>
        </div>

        <blockquote>
          🔄 <strong>CRUD Evolution:</strong>
          <p>
            Modern applications often extend basic CRUD với advanced features:
          </p>
          <ul>
            <li>📊 <strong>Bulk Operations</strong>: Create/update/delete multiple records</li>
            <li>🔍 <strong>Advanced Search</strong>: Full-text search, filtering, sorting</li>
            <li>📈 <strong>Real-time Updates</strong>: WebSockets, Server-Sent Events</li>
            <li>🗂️ <strong>File Management</strong>: Upload, resize, cloud storage</li>
            <li>🔄 <strong>Versioning</strong>: Track changes và history</li>
            <li>🌐 <strong>Offline Support</strong>: Sync when connection restored</li>
          </ul>
        </blockquote>

        <p>
          Master CRUD operations và bạn đã có foundation vững chắc để build 
          bất kỳ web application nào! 🚀💪
        </p>
      </div>

      <div className="nav-buttons">
        <Link to="/posts/co-so-du-lieu-sql-va-nosql" className="nav-button prev">
          <FiArrowLeft />
          Bài trước
        </Link>
      </div>
    </div>
  );
};

export default CRUDPost;