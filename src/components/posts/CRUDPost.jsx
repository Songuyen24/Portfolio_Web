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
            <span>22 phút đọc</span>
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

        <h3>📦 Project Setup</h3>

        <pre><code>{`// package.json
{
  "name": "crud-api",
  "version": "1.0.0",
  "description": "CRUD API with Express and MongoDB",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js",
    "test": "jest"
  },
  "dependencies": {
    "express": "^4.18.2",
    "mongoose": "^7.6.0",
    "cors": "^2.8.5",
    "dotenv": "^16.3.1",
    "bcryptjs": "^2.4.3",
    "jsonwebtoken": "^9.0.2",
    "express-validator": "^7.0.1"
  },
  "devDependencies": {
    "nodemon": "^3.0.1",
    "jest": "^29.7.0",
    "supertest": "^6.3.3"
  }
}

// Install dependencies
npm install express mongoose cors dotenv bcryptjs jsonwebtoken express-validator
npm install -D nodemon jest supertest`}</code></pre>

        <h3>🏗️ Server Setup</h3>

        <pre><code>{`// server.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Database connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/crud_app', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ Connected to MongoDB'))
.catch(err => console.error('❌ MongoDB connection error:', err));

// Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/posts', require('./routes/posts'));

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: 'Something went wrong!',
    error: process.env.NODE_ENV === 'development' ? err.message : {}
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found'
  });
});

app.listen(PORT, () => {
  console.log(\`🚀 Server running on port \${PORT}\`);
});

module.exports = app;`}</code></pre>

        <h3>📋 User Model (Mongoose)</h3>

        <pre><code>{`// models/User.js
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    minlength: [2, 'Name must be at least 2 characters'],
    maxlength: [50, 'Name cannot exceed 50 characters']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
    trim: true,
    match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Please enter a valid email']
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: [6, 'Password must be at least 6 characters'],
    select: false // Don't include password in query results by default
  },
  age: {
    type: Number,
    min: [13, 'Age must be at least 13'],
    max: [120, 'Age cannot exceed 120']
  },
  avatar: {
    type: String,
    default: 'https://via.placeholder.com/200x200?text=User'
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
  },
  isActive: {
    type: Boolean,
    default: true
  },
  lastLogin: {
    type: Date
  }
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Virtual field
userSchema.virtual('fullProfile').get(function() {
  return {
    id: this._id,
    name: this.name,
    email: this.email,
    age: this.age,
    avatar: this.avatar,
    role: this.role
  };
});

// Hash password before saving
userSchema.pre('save', async function(next) {
  // Only hash if password is modified
  if (!this.isModified('password')) return next();
  
  try {
    // Hash password with salt rounds of 12
    this.password = await bcrypt.hash(this.password, 12);
    next();
  } catch (error) {
    next(error);
  }
});

// Instance method to check password
userSchema.methods.comparePassword = async function(candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

// Static method to find active users
userSchema.statics.findActiveUsers = function() {
  return this.find({ isActive: true });
};

module.exports = mongoose.model('User', userSchema);`}</code></pre>

        <div className="section-divider"></div>

        <h2>🎯 Complete CRUD Routes Implementation</h2>

        <h3>📝 CREATE - User Registration</h3>

        <pre><code>{`// routes/users.js
const express = require('express');
const { body, validationResult } = require('express-validator');
const User = require('../models/User');
const router = express.Router();

// CREATE - Register new user
router.post('/', [
  body('name')
    .trim()
    .isLength({ min: 2, max: 50 })
    .withMessage('Name must be between 2-50 characters'),
  body('email')
    .isEmail()
    .normalizeEmail()
    .withMessage('Please enter a valid email'),
  body('password')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters'),
  body('age')
    .optional()
    .isInt({ min: 13, max: 120 })
    .withMessage('Age must be between 13-120')
], async (req, res) => {
  try {
    // Check validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation errors',
        errors: errors.array()
      });
    }

    const { name, email, password, age, avatar } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: 'User with this email already exists'
      });
    }

    // Create new user
    const user = new User({
      name,
      email,
      password,
      age,
      avatar
    });

    await user.save();

    // Return user without password
    const { password: _, ...userResponse } = user.toObject();

    res.status(201).json({
      success: true,
      message: 'User created successfully',
      data: userResponse
    });

  } catch (error) {
    console.error('Create user error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to create user',
      error: error.message
    });
  }
});`}</code></pre>

        <h3>👁️ READ - Get Users</h3>

        <pre><code>{`// READ - Get all users with pagination
router.get('/', async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;
    
    // Build query
    let query = { isActive: true };
    
    // Search functionality
    if (req.query.search) {
      query.$or = [
        { name: { $regex: req.query.search, $options: 'i' } },
        { email: { $regex: req.query.search, $options: 'i' } }
      ];
    }
    
    // Age filter
    if (req.query.minAge || req.query.maxAge) {
      query.age = {};
      if (req.query.minAge) query.age.$gte = parseInt(req.query.minAge);
      if (req.query.maxAge) query.age.$lte = parseInt(req.query.maxAge);
    }

    // Role filter
    if (req.query.role) {
      query.role = req.query.role;
    }

    // Sort options
    let sortBy = {};
    if (req.query.sortBy) {
      const parts = req.query.sortBy.split(':');
      sortBy[parts[0]] = parts[1] === 'desc' ? -1 : 1;
    } else {
      sortBy.createdAt = -1; // Default: newest first
    }

    // Execute query
    const users = await User.find(query)
      .sort(sortBy)
      .skip(skip)
      .limit(limit)
      .select('-password'); // Exclude password

    const total = await User.countDocuments(query);

    res.json({
      success: true,
      data: users,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit),
        hasNext: page * limit < total,
        hasPrev: page > 1
      }
    });

  } catch (error) {
    console.error('Get users error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch users',
      error: error.message
    });
  }
});

// READ - Get single user by ID
router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select('-password');
    
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }

    res.json({
      success: true,
      data: user
    });

  } catch (error) {
    console.error('Get user error:', error);
    
    // Handle invalid ObjectId
    if (error.name === 'CastError') {
      return res.status(400).json({
        success: false,
        message: 'Invalid user ID format'
      });
    }

    res.status(500).json({
      success: false,
      message: 'Failed to fetch user',
      error: error.message
    });
  }
});`}</code></pre>

        <h3>✏️ UPDATE - Modify User</h3>

        <pre><code>{`// UPDATE - Update user (full update with PUT)
router.put('/:id', [
  body('name')
    .optional()
    .trim()
    .isLength({ min: 2, max: 50 })
    .withMessage('Name must be between 2-50 characters'),
  body('email')
    .optional()
    .isEmail()
    .normalizeEmail()
    .withMessage('Please enter a valid email'),
  body('age')
    .optional()
    .isInt({ min: 13, max: 120 })
    .withMessage('Age must be between 13-120')
], async (req, res) => {
  try {
    // Check validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation errors',
        errors: errors.array()
      });
    }

    const { name, email, age, avatar, role } = req.body;

    // Check if user exists
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }

    // Check email uniqueness if email is being updated
    if (email && email !== user.email) {
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(409).json({
          success: false,
          message: 'Email already exists'
        });
      }
    }

    // Update fields
    const updateData = {};
    if (name !== undefined) updateData.name = name;
    if (email !== undefined) updateData.email = email;
    if (age !== undefined) updateData.age = age;
    if (avatar !== undefined) updateData.avatar = avatar;
    if (role !== undefined) updateData.role = role;

    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      updateData,
      { 
        new: true,           // Return updated document
        runValidators: true, // Run schema validators
        select: '-password' // Exclude password
      }
    );

    res.json({
      success: true,
      message: 'User updated successfully',
      data: updatedUser
    });

  } catch (error) {
    console.error('Update user error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to update user',
      error: error.message
    });
  }
});

// PATCH - Partial update
router.patch('/:id', async (req, res) => {
  try {
    const updates = req.body;
    const allowedUpdates = ['name', 'age', 'avatar', 'isActive'];
    const actualUpdates = {};

    // Filter allowed updates
    Object.keys(updates).forEach(key => {
      if (allowedUpdates.includes(key)) {
        actualUpdates[key] = updates[key];
      }
    });

    if (Object.keys(actualUpdates).length === 0) {
      return res.status(400).json({
        success: false,
        message: 'No valid fields to update'
      });
    }

    const user = await User.findByIdAndUpdate(
      req.params.id,
      actualUpdates,
      { 
        new: true,
        runValidators: true,
        select: '-password'
      }
    );

    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }

    res.json({
      success: true,
      message: 'User updated successfully',
      data: user,
      updatedFields: Object.keys(actualUpdates)
    });

  } catch (error) {
    console.error('Patch user error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to update user',
      error: error.message
    });
  }
});`}</code></pre>

        <h3>🗑️ DELETE - Remove User</h3>

        <pre><code>{`// DELETE - Remove user (hard delete)
router.delete('/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }

    res.status(204).json({
      success: true,
      message: 'User deleted successfully'
    });

  } catch (error) {
    console.error('Delete user error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to delete user',
      error: error.message
    });
  }
});

// Soft delete - set isActive to false
router.delete('/:id/soft', async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.id,
      { isActive: false },
      { new: true, select: '-password' }
    );

    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }

    res.json({
      success: true,
      message: 'User deactivated successfully',
      data: user
    });

  } catch (error) {
    console.error('Soft delete user error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to deactivate user',
      error: error.message
    });
  }
});

// Bulk operations
router.delete('/', async (req, res) => {
  try {
    const { ids } = req.body;

    if (!ids || !Array.isArray(ids) || ids.length === 0) {
      return res.status(400).json({
        success: false,
        message: 'Please provide an array of user IDs'
      });
    }

    const result = await User.deleteMany({ 
      _id: { $in: ids } 
    });

    res.json({
      success: true,
      message: \`\${result.deletedCount} users deleted successfully\`,
      deletedCount: result.deletedCount
    });

  } catch (error) {
    console.error('Bulk delete error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to delete users',
      error: error.message
    });
  }
});

module.exports = router;`}</code></pre>

        <div className="section-divider"></div>

        <h2>🎨 Frontend CRUD with React</h2>

        <h3>🛠️ API Service Layer</h3>

        <pre><code>{`// services/apiService.js
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

class ApiService {
  async request(endpoint, options = {}) {
    const url = \`\${API_BASE_URL}\${endpoint}\`;
    
    const config = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers
      },
      ...options
    };

    try {
      const response = await fetch(url, config);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || \`HTTP error! status: \${response.status}\`);
      }

      return data;
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  }

  // Users CRUD operations
  async getUsers(params = {}) {
    const query = new URLSearchParams(params).toString();
    return this.request(\`/users?\${query}\`);
  }

  async getUserById(id) {
    return this.request(\`/users/\${id}\`);
  }

  async createUser(userData) {
    return this.request('/users', {
      method: 'POST',
      body: JSON.stringify(userData)
    });
  }

  async updateUser(id, userData) {
    return this.request(\`/users/\${id}\`, {
      method: 'PUT',
      body: JSON.stringify(userData)
    });
  }

  async patchUser(id, userData) {
    return this.request(\`/users/\${id}\`, {
      method: 'PATCH',
      body: JSON.stringify(userData)
    });
  }

  async deleteUser(id) {
    return this.request(\`/users/\${id}\`, {
      method: 'DELETE'
    });
  }

  async bulkDeleteUsers(ids) {
    return this.request('/users', {
      method: 'DELETE',
      body: JSON.stringify({ ids })
    });
  }
}

export default new ApiService();`}</code></pre>

        <h3>🎯 React CRUD Component</h3>

        <pre><code>{`// components/UserManager.jsx
import React, { useState, useEffect } from 'react';
import apiService from '../services/apiService';

const UserManager = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10,
    total: 0,
    pages: 0
  });

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    avatar: ''
  });

  // Fetch users
  const fetchUsers = async (page = 1, search = '') => {
    try {
      setLoading(true);
      setError(null);

      const params = {
        page,
        limit: pagination.limit,
        ...(search && { search })
      };

      const response = await apiService.getUsers(params);
      
      setUsers(response.data);
      setPagination(response.pagination);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Create user
  const handleCreateUser = async (e) => {
    e.preventDefault();
    
    try {
      setLoading(true);
      await apiService.createUser(formData);
      
      // Reset form and close modal
      setFormData({ name: '', email: '', age: '', avatar: '' });
      setIsModalOpen(false);
      
      // Refresh users list
      await fetchUsers();
      
      alert('User created successfully!');
    } catch (err) {
      alert('Failed to create user: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  // Update user
  const handleUpdateUser = async (e) => {
    e.preventDefault();
    
    try {
      setLoading(true);
      await apiService.updateUser(editingUser.id, formData);
      
      // Reset form and close modal
      setFormData({ name: '', email: '', age: '', avatar: '' });
      setEditingUser(null);
      setIsModalOpen(false);
      
      // Refresh users list
      await fetchUsers(pagination.page);
      
      alert('User updated successfully!');
    } catch (err) {
      alert('Failed to update user: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  // Delete user
  const handleDeleteUser = async (userId) => {
    if (!window.confirm('Are you sure you want to delete this user?')) {
      return;
    }

    try {
      setLoading(true);
      await apiService.deleteUser(userId);
      
      // Refresh users list
      await fetchUsers(pagination.page);
      
      alert('User deleted successfully!');
    } catch (err) {
      alert('Failed to delete user: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  // Open modal for editing
  const handleEditUser = (user) => {
    setEditingUser(user);
    setFormData({
      name: user.name,
      email: user.email,
      age: user.age,
      avatar: user.avatar || ''
    });
    setIsModalOpen(true);
  };

  // Open modal for creating
  const handleCreateNew = () => {
    setEditingUser(null);
    setFormData({ name: '', email: '', age: '', avatar: '' });
    setIsModalOpen(true);
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Load users on component mount
  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading && users.length === 0) {
    return <div className="text-center p-8">Loading users...</div>;
  }

  if (error && users.length === 0) {
    return (
      <div className="text-center p-8 text-red-600">
        Error: {error}
        <button 
          onClick={() => fetchUsers()} 
          className="ml-4 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">User Management</h1>
        <button
          onClick={handleCreateNew}
          className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
        >
          Add New User
        </button>
      </div>

      {/* Users Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Age
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Role
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {users.map((user) => (
              <tr key={user._id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <img
                      className="h-10 w-10 rounded-full object-cover mr-3"
                      src={user.avatar || 'https://via.placeholder.com/40'}
                      alt={user.name}
                    />
                    <div className="text-sm font-medium text-gray-900">
                      {user.name}
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {user.email}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {user.age || 'N/A'}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={\`px-2 inline-flex text-xs leading-5 font-semibold rounded-full \${
                    user.role === 'admin' 
                      ? 'bg-red-100 text-red-800' 
                      : 'bg-green-100 text-green-800'
                  }\`}>
                    {user.role}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button
                    onClick={() => handleEditUser(user)}
                    className="text-indigo-600 hover:text-indigo-900 mr-3"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteUser(user._id)}
                    className="text-red-600 hover:text-red-900"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-6">
        <div className="text-sm text-gray-700">
          Showing {((pagination.page - 1) * pagination.limit) + 1} to{' '}
          {Math.min(pagination.page * pagination.limit, pagination.total)} of{' '}
          {pagination.total} results
        </div>
        <div className="flex space-x-2">
          <button
            onClick={() => fetchUsers(pagination.page - 1)}
            disabled={!pagination.hasPrev}
            className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50"
          >
            Previous
          </button>
          <span className="px-3 py-1">
            Page {pagination.page} of {pagination.pages}
          </span>
          <button
            onClick={() => fetchUsers(pagination.page + 1)}
            disabled={!pagination.hasNext}
            className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg w-96">
            <h2 className="text-xl font-bold mb-4">
              {editingUser ? 'Edit User' : 'Create New User'}
            </h2>
            <form onSubmit={editingUser ? handleUpdateUser : handleCreateUser}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Age</label>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleInputChange}
                  min="13"
                  max="120"
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Avatar URL</label>
                <input
                  type="url"
                  name="avatar"
                  value={formData.avatar}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
                />
              </div>
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 bg-gray-300 rounded-md"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="px-4 py-2 bg-blue-500 text-white rounded-md disabled:opacity-50"
                >
                  {loading ? 'Saving...' : (editingUser ? 'Update' : 'Create')}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserManager;`}</code></pre>

        <div className="section-divider"></div>

        <h2>🗃️ Database-Specific CRUD</h2>

        <h3>🐬 MySQL CRUD Operations</h3>

        <pre><code>{`-- MySQL CRUD Examples

-- CREATE
INSERT INTO users (name, email, age, created_at) 
VALUES 
  ('John Doe', 'john@example.com', 30, NOW()),
  ('Jane Smith', 'jane@example.com', 25, NOW()),
  ('Bob Wilson', 'bob@example.com', 35, NOW());

-- INSERT with ON DUPLICATE KEY UPDATE
INSERT INTO users (email, name, age) 
VALUES ('john@example.com', 'John Doe Updated', 31)
ON DUPLICATE KEY UPDATE 
  name = VALUES(name),
  age = VALUES(age),
  updated_at = NOW();

-- READ - Basic SELECT
SELECT * FROM users WHERE age >= 25;

-- READ with JOINs
SELECT 
  u.id,
  u.name,
  u.email,
  COUNT(o.id) as total_orders,
  SUM(o.amount) as total_spent
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
WHERE u.created_at >= '2024-01-01'
GROUP BY u.id, u.name, u.email
HAVING COUNT(o.id) > 0
ORDER BY total_spent DESC
LIMIT 10;

-- READ with Pagination
SELECT * FROM users 
ORDER BY created_at DESC 
LIMIT 10 OFFSET 0; -- Page 1

SELECT * FROM users 
ORDER BY created_at DESC 
LIMIT 10 OFFSET 10; -- Page 2

-- UPDATE - Single record
UPDATE users 
SET 
  name = 'John Doe Updated',
  age = 31,
  updated_at = NOW()
WHERE id = 1;

-- UPDATE - Multiple records with conditions
UPDATE users 
SET status = 'inactive' 
WHERE last_login < DATE_SUB(NOW(), INTERVAL 1 YEAR);

-- UPDATE with JOINs
UPDATE users u
JOIN (
  SELECT user_id, COUNT(*) as order_count
  FROM orders 
  GROUP BY user_id
) o ON u.id = o.user_id
SET u.order_count = o.order_count;

-- DELETE - Soft delete
UPDATE users 
SET deleted_at = NOW(), status = 'deleted' 
WHERE id = 1;

-- DELETE - Hard delete
DELETE FROM users WHERE id = 1;

-- DELETE with conditions
DELETE FROM users 
WHERE created_at < DATE_SUB(NOW(), INTERVAL 2 YEAR)
AND status = 'inactive';

-- Bulk operations
-- Bulk insert
INSERT INTO users (name, email, age) VALUES
  ('User 1', 'user1@example.com', 25),
  ('User 2', 'user2@example.com', 30),
  ('User 3', 'user3@example.com', 28);

-- Bulk update using CASE
UPDATE users 
SET age = CASE 
  WHEN id = 1 THEN 26
  WHEN id = 2 THEN 31
  WHEN id = 3 THEN 29
  ELSE age
END
WHERE id IN (1, 2, 3);`}</code></pre>

        <h3>🍃 MongoDB CRUD Operations</h3>

        <pre><code>{`// MongoDB CRUD Examples

// CREATE
db.users.insertOne({
  name: "John Doe",
  email: "john@example.com",
  age: 30,
  profile: {
    bio: "Software Developer",
    location: "San Francisco"
  },
  tags: ["developer", "javascript", "mongodb"],
  createdAt: new Date()
});

// Bulk insert
db.users.insertMany([
  {
    name: "Jane Smith",
    email: "jane@example.com",
    age: 25,
    tags: ["designer", "ui/ux"]
  },
  {
    name: "Bob Wilson", 
    email: "bob@example.com",
    age: 35,
    tags: ["manager", "leadership"]
  }
]);

// READ
// Find all
db.users.find();

// Find with conditions
db.users.find({ 
  age: { $gte: 25 }, 
  tags: { $in: ["developer", "designer"] } 
});

// Find with projection
db.users.find(
  { age: { $gte: 25 } },
  { name: 1, email: 1, _id: 0 }
);

// Find one
db.users.findOne({ email: "john@example.com" });

// Complex queries
db.users.find({
  $and: [
    { age: { $gte: 20, $lte: 40 } },
    { tags: { $elemMatch: { $in: ["developer", "designer"] } } },
    { "profile.location": { $regex: /san/i } }
  ]
}).sort({ createdAt: -1 }).limit(10);

// Aggregation pipeline
db.users.aggregate([
  // Match active users
  { $match: { status: "active" } },
  
  // Add computed fields
  { $addFields: { 
      fullName: { $concat: ["$firstName", " ", "$lastName"] },
      tagCount: { $size: "$tags" }
    }
  },
  
  // Group by age range
  { $group: {
      _id: { 
        ageRange: { 
          $switch: {
            branches: [
              { case: { $lt: ["$age", 25] }, then: "18-24" },
              { case: { $lt: ["$age", 35] }, then: "25-34" },
              { case: { $lt: ["$age", 45] }, then: "35-44" }
            ],
            default: "45+"
          }
        }
      },
      count: { $sum: 1 },
      avgAge: { $avg: "$age" },
      users: { $push: { name: "$name", email: "$email" } }
    }
  },
  
  // Sort by count
  { $sort: { count: -1 } }
]);

// UPDATE
// Update one document
db.users.updateOne(
  { email: "john@example.com" },
  { 
    $set: { 
      age: 31,
      "profile.bio": "Senior Software Developer",
      lastModified: new Date()
    },
    $push: { tags: "senior" },
    $inc: { loginCount: 1 }
  }
);

// Update many documents
db.users.updateMany(
  { createdAt: { $lt: new Date("2023-01-01") } },
  { 
    $set: { isLegacyUser: true },
    $unset: { temporaryField: "" }
  }
);

// Upsert (update or insert)
db.users.updateOne(
  { email: "newuser@example.com" },
  { 
    $set: {
      name: "New User",
      age: 25,
      createdAt: new Date()
    }
  },
  { upsert: true }
);

// Array operations
// Add to array
db.users.updateOne(
  { _id: ObjectId("...") },
  { $push: { tags: { $each: ["react", "nodejs"] } } }
);

// Remove from array
db.users.updateOne(
  { _id: ObjectId("...") },
  { $pull: { tags: "beginner" } }
);

// Update array element
db.users.updateOne(
  { _id: ObjectId("..."), "orders.status": "pending" },
  { $set: { "orders.$.status": "confirmed" } }
);

// DELETE
// Delete one document
db.users.deleteOne({ email: "test@example.com" });

// Delete many documents
db.users.deleteMany({ 
  createdAt: { $lt: new Date("2022-01-01") },
  status: "inactive"
});

// Soft delete (mark as deleted)
db.users.updateMany(
  { lastLogin: { $lt: new Date("2023-01-01") } },
  { 
    $set: { 
      isDeleted: true, 
      deletedAt: new Date() 
    } 
  }
);

// Find and modify
db.users.findOneAndUpdate(
  { email: "john@example.com" },
  { $inc: { loginCount: 1 }, $set: { lastLogin: new Date() } },
  { returnDocument: "after" }
);

db.users.findOneAndDelete({ status: "pending", createdAt: { $lt: new Date(Date.now() - 24*60*60*1000) } });`}</code></pre>

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

        <pre><code>{`// Security middleware example
const jwt = require('jsonwebtoken');
const rateLimit = require('express-rate-limit');

// Rate limiting
const createUserLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // 5 requests per window
  message: 'Too many accounts created, try again later'
});

// Authentication middleware
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ 
      success: false, 
      message: 'Access token required' 
    });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ 
        success: false, 
        message: 'Invalid or expired token' 
      });
    }
    req.user = user;
    next();
  });
};

// Authorization middleware
const requireRole = (roles) => {
  return (req, res, next) => {
    if (!req.user || !roles.includes(req.user.role)) {
      return res.status(403).json({
        success: false,
        message: 'Insufficient permissions'
      });
    }
    next();
  };
};

// Audit logging middleware
const auditLog = (action) => {
  return (req, res, next) => {
    res.on('finish', () => {
      console.log({
        timestamp: new Date(),
        userId: req.user?.id,
        action,
        method: req.method,
        url: req.url,
        ip: req.ip,
        userAgent: req.get('User-Agent'),
        statusCode: res.statusCode
      });
    });
    next();
  };
};

// Usage
app.use('/api/users', authenticateToken);
app.post('/api/users', createUserLimiter, requireRole(['admin']), auditLog('CREATE_USER'), createUser);
app.delete('/api/users/:id', requireRole(['admin']), auditLog('DELETE_USER'), deleteUser);`}</code></pre>

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