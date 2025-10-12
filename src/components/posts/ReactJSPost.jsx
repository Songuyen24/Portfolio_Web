import React from 'react';
import { Link } from 'react-router-dom';
import { FiCalendar, FiClock, FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import '../../assets/styles/BlogPost.css';

const ReactJSPost = () => {
  return (
    <div className="blog-post">
      <div className="blog-header">
        <h1 className="blog-title">
          ⚛️ ReactJS – Thư viện JavaScript hiện đại cho xây dựng giao diện người dùng
        </h1>
        
        <div className="blog-meta">
          <div className="meta-item">
            <FiCalendar />
            <span>20 tháng 10, 2025</span>
          </div>
          <div className="meta-item">
            <FiClock />
            <span>25 phút đọc</span>
          </div>
          <div className="meta-item">
            <span>📂 Frontend & JavaScript</span>
          </div>
        </div>
        
        <p className="blog-excerpt">
          ReactJS là thư viện JavaScript mạnh mẽ được phát triển bởi Facebook, giúp xây dựng giao diện người dùng tương tác với component-based architecture và virtual DOM
        </p>
        
        <div className="blog-tags">
          <span className="tag">ReactJS</span>
          <span className="tag">JavaScript</span>
          <span className="tag">Frontend</span>
          <span className="tag">Component</span>
          <span className="tag">Virtual DOM</span>
        </div>
      </div>

      <div className="blog-content">
        <h2>🚀 Giới thiệu ReactJS</h2>
        
        <p>
          <strong>ReactJS</strong> (hay React) là một thư viện JavaScript mã nguồn mở được phát triển bởi 
          <strong>Facebook (Meta)</strong> vào năm 2013, chuyên dùng để xây dựng giao diện người dùng, 
          đặc biệt là các ứng dụng web single-page applications (SPA).
        </p>

        <blockquote>
          ⚛️ <strong>Slogan của React</strong>: "A JavaScript library for building user interfaces" - 
          Thư viện JavaScript để xây dựng giao diện người dùng.
        </blockquote>

        <div className="highlight-box success">
          <h4>🌟 Tại sao chọn ReactJS?</h4>
          <ul>
            <li>🧩 <strong>Component-Based</strong>: Tái sử dụng code hiệu quả</li>
            <li>⚡ <strong>Virtual DOM</strong>: Performance tối ưu</li>
            <li>🔄 <strong>Unidirectional Data Flow</strong>: Dễ debug và maintain</li>
            <li>🛠️ <strong>Rich Ecosystem</strong>: Hàng nghìn libraries và tools</li>
            <li>👥 <strong>Strong Community</strong>: Support từ Facebook và community</li>
            <li>📱 <strong>React Native</strong>: Develop mobile apps</li>
          </ul>
        </div>

        <h2>🏗️ Kiến trúc và Core Concepts</h2>

        <h3>🧩 Components</h3>

        <p>
          Components là building blocks của React. Mỗi component là một function hoặc class 
          trả về JSX để render UI.
        </p>

        <pre><code>{`// Functional Component (Recommended)
import React from 'react';

const Welcome = ({ name }) => {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>Welcome to React</p>
    </div>
  );
};

export default Welcome;

// Class Component (Legacy)
import React, { Component } from 'react';

class Welcome extends Component {
  render() {
    return (
      <div>
        <h1>Hello, {this.props.name}!</h1>
        <p>Welcome to React</p>
      </div>
    );
  }
}

export default Welcome;`}</code></pre>

        <h3>⚡ Virtual DOM</h3>

        <table>
          <thead>
            <tr>
              <th>Real DOM</th>
              <th>Virtual DOM</th>
              <th>Benefit</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Slow manipulation</td>
              <td>Fast in-memory operations</td>
              <td>⚡ Better Performance</td>
            </tr>
            <tr>
              <td>Direct updates</td>
              <td>Batch updates</td>
              <td>🔄 Efficient Reconciliation</td>
            </tr>
            <tr>
              <td>Expensive re-rendering</td>
              <td>Minimal necessary updates</td>
              <td>💰 Cost Optimization</td>
            </tr>
            <tr>
              <td>Browser API dependency</td>
              <td>Pure JavaScript objects</td>
              <td>🧪 Easier Testing</td>
            </tr>
          </tbody>
        </table>

        <div className="section-divider"></div>

        <h2>🎯 React Hooks - Modern React Development</h2>

        <h3>⚡ useState Hook</h3>

        <pre><code>{`import React, { useState } from 'react';

const Counter = () => {
  // Declare state variable
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  const [user, setUser] = useState({ name: '', age: 0 });

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
      
      <input 
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
    </div>
  );
};`}</code></pre>

        <h3>🔄 useEffect Hook</h3>

        <pre><code>{`import React, { useState, useEffect } from 'react';

const UserProfile = ({ userId }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Effect with dependency array
  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        const response = await fetch(\`/api/users/\${userId}\`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch user');
        }
        
        const userData = await response.json();
        setUser(userData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (userId) {
      fetchUser();
    }
  }, [userId]); // Dependency array

  // Cleanup effect
  useEffect(() => {
    const timer = setInterval(() => {
      console.log('Timer tick');
    }, 1000);

    return () => {
      clearInterval(timer); // Cleanup
    };
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!user) return <div>No user found</div>;

  return (
    <div>
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Age: {user.age}</p>
    </div>
  );
};`}</code></pre>

        <h3>🎯 Custom Hooks</h3>

        <pre><code>{`// Custom Hook: useLocalStorage
import { useState, useEffect } from 'react';

const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue];
};

// Usage
const Settings = () => {
  const [theme, setTheme] = useLocalStorage('theme', 'light');
  const [language, setLanguage] = useLocalStorage('language', 'en');

  return (
    <div>
      <select value={theme} onChange={(e) => setTheme(e.target.value)}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
      
      <select value={language} onChange={(e) => setLanguage(e.target.value)}>
        <option value="en">English</option>
        <option value="vi">Vietnamese</option>
      </select>
    </div>
  );
};`}</code></pre>

        <div className="section-divider"></div>

        <h2>🛠️ State Management</h2>

        <h3>🏪 Context API</h3>

        <pre><code>{`// Create Context
import React, { createContext, useContext, useReducer } from 'react';

const AppContext = createContext();

// Reducer
const appReducer = (state, action) => {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.payload };
    case 'SET_THEME':
      return { ...state, theme: action.payload };
    case 'LOGOUT':
      return { ...state, user: null };
    default:
      return state;
  }
};

// Provider Component
export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, {
    user: null,
    theme: 'light',
    isAuthenticated: false
  });

  const login = (userData) => {
    dispatch({ type: 'SET_USER', payload: userData });
  };

  const logout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  const toggleTheme = () => {
    const newTheme = state.theme === 'light' ? 'dark' : 'light';
    dispatch({ type: 'SET_THEME', payload: newTheme });
  };

  const value = {
    ...state,
    login,
    logout,
    toggleTheme
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

// Custom hook to use context
export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
};

// Usage in component
const Header = () => {
  const { user, theme, logout, toggleTheme } = useApp();

  return (
    <header className={\`header \${theme}\`}>
      <h1>My App</h1>
      {user ? (
        <div>
          <span>Welcome, {user.name}!</span>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <button>Login</button>
      )}
      <button onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} mode
      </button>
    </header>
  );
};`}</code></pre>

        <h3>🔄 Redux Toolkit (External Library)</h3>

        <pre><code>{`// install: npm install @reduxjs/toolkit react-redux

// store.js
import { configureStore, createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    data: null,
    isLoading: false,
    error: null
  },
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setUser: (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    }
  }
});

export const { setLoading, setUser, setError } = userSlice.actions;

export const store = configureStore({
  reducer: {
    user: userSlice.reducer
  }
});

// App.js
import { Provider } from 'react-redux';
import { store } from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Main />
      </div>
    </Provider>
  );
}`}</code></pre>

        <div className="section-divider"></div>

        <h2>🌐 React Router - Navigation</h2>

        <pre><code>{`// install: npm install react-router-dom

import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
  useParams,
  useNavigate,
  useLocation
} from 'react-router-dom';

// Components
const Home = () => <h1>Home Page</h1>;
const About = () => <h1>About Page</h1>;
const Contact = () => <h1>Contact Page</h1>;

const UserProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  return (
    <div>
      <h1>User Profile: {id}</h1>
      <button onClick={() => navigate('/users')}>Back to Users</button>
    </div>
  );
};

const NotFound = () => (
  <div>
    <h1>404 - Page Not Found</h1>
    <Link to="/">Go Home</Link>
  </div>
);

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const isAuthenticated = false; // Your auth logic here
  
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

// Main App with routing
const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/users/123">User 123</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/users/:id" element={<UserProfile />} />
        
        {/* Protected routes */}
        <Route 
          path="/dashboard" 
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } 
        />
        
        {/* Nested routes */}
        <Route path="/users" element={<Users />}>
          <Route index element={<UserList />} />
          <Route path=":id" element={<UserDetail />} />
          <Route path="create" element={<CreateUser />} />
        </Route>
        
        {/* Catch all - 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};`}</code></pre>

        <div className="section-divider"></div>

        <h2>🎨 Styling in React</h2>

        <h3>🎭 CSS Modules</h3>

        <pre><code>{`/* Button.module.css */
.button {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s ease;
}

.primary {
  background-color: #007bff;
  color: white;
}

.primary:hover {
  background-color: #0056b3;
}

.secondary {
  background-color: #6c757d;
  color: white;
}

.large {
  padding: 15px 30px;
  font-size: 18px;
}

/* Button.jsx */
import React from 'react';
import styles from './Button.module.css';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'medium',
  onClick 
}) => {
  const buttonClasses = [
    styles.button,
    styles[variant],
    size === 'large' ? styles.large : ''
  ].filter(Boolean).join(' ');

  return (
    <button className={buttonClasses} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;`}</code></pre>

        <h3>💅 Styled Components</h3>

        <pre><code>{`// install: npm install styled-components

import styled, { css } from 'styled-components';

// Basic styled component
const Button = styled.button\`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s ease;
  
  \${props => props.primary && css\`
    background-color: #007bff;
    color: white;
    
    &:hover {
      background-color: #0056b3;
    }
  \`}
  
  \${props => props.secondary && css\`
    background-color: #6c757d;
    color: white;
  \`}
  
  \${props => props.large && css\`
    padding: 15px 30px;
    font-size: 18px;
  \`}
\`;

// Extended styling
const IconButton = styled(Button)\`
  display: flex;
  align-items: center;
  gap: 8px;
\`;

// Usage
const App = () => {
  return (
    <div>
      <Button primary>Primary Button</Button>
      <Button secondary large>Large Secondary</Button>
      <IconButton primary>
        <FiCheck />
        Save Changes
      </IconButton>
    </div>
  );
};`}</code></pre>

        <div className="section-divider"></div>

        <h2>⚡ Performance Optimization</h2>

        <h3>🚀 React.memo</h3>

        <pre><code>{`import React, { memo, useState, useCallback, useMemo } from 'react';

// Expensive component that should not re-render unnecessarily
const ExpensiveList = memo(({ items, onItemClick }) => {
  console.log('ExpensiveList re-rendered');
  
  return (
    <ul>
      {items.map(item => (
        <li key={item.id} onClick={() => onItemClick(item.id)}>
          {item.name} - {item.description}
        </li>
      ))}
    </ul>
  );
});

// Custom equality function
const UserCard = memo(({ user, onEdit }) => {
  return (
    <div className="user-card">
      <h3>{user.name}</h3>
      <p>{user.email}</p>
      <button onClick={() => onEdit(user.id)}>Edit</button>
    </div>
  );
}, (prevProps, nextProps) => {
  // Custom comparison
  return (
    prevProps.user.id === nextProps.user.id &&
    prevProps.user.name === nextProps.user.name &&
    prevProps.user.email === nextProps.user.email
  );
});`}</code></pre>

        <h3>🎯 useCallback & useMemo</h3>

        <pre><code>{`const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // useCallback - memoize function
  const addTodo = useCallback((text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false
    };
    setTodos(prev => [...prev, newTodo]);
  }, []);

  const toggleTodo = useCallback((id) => {
    setTodos(prev => 
      prev.map(todo => 
        todo.id === id 
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  }, []);

  // useMemo - memoize expensive computation
  const filteredTodos = useMemo(() => {
    let result = todos;
    
    // Apply search filter
    if (searchTerm) {
      result = result.filter(todo => 
        todo.text.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Apply status filter
    switch (filter) {
      case 'completed':
        return result.filter(todo => todo.completed);
      case 'active':
        return result.filter(todo => !todo.completed);
      default:
        return result;
    }
  }, [todos, filter, searchTerm]);

  const todoStats = useMemo(() => {
    return {
      total: todos.length,
      completed: todos.filter(t => t.completed).length,
      active: todos.filter(t => !t.completed).length
    };
  }, [todos]);

  return (
    <div>
      <TodoInput onAdd={addTodo} />
      <TodoFilters filter={filter} onFilterChange={setFilter} />
      <SearchInput value={searchTerm} onChange={setSearchTerm} />
      <TodoList todos={filteredTodos} onToggle={toggleTodo} />
      <TodoStats stats={todoStats} />
    </div>
  );
};`}</code></pre>

        <div className="highlight-box warning">
          <h4>⚡ Performance Best Practices:</h4>
          <ul>
            <li>🎯 <strong>Use React.memo</strong> cho components nhận props ít thay đổi</li>
            <li>🔄 <strong>useCallback</strong> cho functions được pass xuống children</li>
            <li>💾 <strong>useMemo</strong> cho expensive computations</li>
            <li>🌊 <strong>Code Splitting</strong> với React.lazy và Suspense</li>
            <li>📦 <strong>Bundle Analysis</strong> để optimize chunk sizes</li>
            <li>🖼️ <strong>Image Optimization</strong> với lazy loading</li>
          </ul>
        </div>

        <div className="section-divider"></div>

        <h2>🧪 Testing React Applications</h2>

        <h3>🃏 Jest + React Testing Library</h3>

        <pre><code>{`// install: npm install --save-dev @testing-library/react @testing-library/jest-dom

// Button.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from './Button';

describe('Button Component', () => {
  test('renders button with text', () => {
    render(<Button>Click me</Button>);
    const buttonElement = screen.getByText(/click me/i);
    expect(buttonElement).toBeInTheDocument();
  });

  test('calls onClick handler when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    
    const buttonElement = screen.getByText(/click me/i);
    fireEvent.click(buttonElement);
    
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('applies correct CSS classes', () => {
    render(<Button primary large>Test</Button>);
    const buttonElement = screen.getByText(/test/i);
    
    expect(buttonElement).toHaveClass('button', 'primary', 'large');
  });
});

// Counter.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

describe('Counter Component', () => {
  test('starts with initial count', () => {
    render(<Counter initialCount={5} />);
    expect(screen.getByText(/count: 5/i)).toBeInTheDocument();
  });

  test('increments count when plus button clicked', () => {
    render(<Counter initialCount={0} />);
    
    const incrementButton = screen.getByText('+');
    fireEvent.click(incrementButton);
    
    expect(screen.getByText(/count: 1/i)).toBeInTheDocument();
  });

  test('decrements count when minus button clicked', () => {
    render(<Counter initialCount={5} />);
    
    const decrementButton = screen.getByText('-');
    fireEvent.click(decrementButton);
    
    expect(screen.getByText(/count: 4/i)).toBeInTheDocument();
  });
});`}</code></pre>

        <div className="section-divider"></div>

        <h2>🚀 React Ecosystem & Tools</h2>

        <table>
          <thead>
            <tr>
              <th>Category</th>
              <th>Popular Libraries</th>
              <th>Use Case</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>State Management</strong></td>
              <td>Redux Toolkit, Zustand, Recoil</td>
              <td>Global state management</td>
            </tr>
            <tr>
              <td><strong>Styling</strong></td>
              <td>Styled Components, Emotion, Tailwind CSS</td>
              <td>Component styling</td>
            </tr>
            <tr>
              <td><strong>UI Libraries</strong></td>
              <td>Material-UI, Ant Design, Chakra UI</td>
              <td>Pre-built components</td>
            </tr>
            <tr>
              <td><strong>Forms</strong></td>
              <td>React Hook Form, Formik</td>
              <td>Form handling & validation</td>
            </tr>
            <tr>
              <td><strong>Animation</strong></td>
              <td>Framer Motion, React Transition Group</td>
              <td>Animations & transitions</td>
            </tr>
            <tr>
              <td><strong>Data Fetching</strong></td>
              <td>React Query, SWR, Apollo Client</td>
              <td>API integration & caching</td>
            </tr>
            <tr>
              <td><strong>Testing</strong></td>
              <td>Jest, React Testing Library, Cypress</td>
              <td>Unit & integration testing</td>
            </tr>
            <tr>
              <td><strong>Development</strong></td>
              <td>Storybook, React DevTools</td>
              <td>Component documentation & debugging</td>
            </tr>
          </tbody>
        </table>

        <div className="section-divider"></div>

        <h2>📱 React Native - Mobile Development</h2>

        <pre><code>{`// React Native components
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Alert
} from 'react-native';

const MobileApp = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  const showAlert = () => {
    Alert.alert(
      'Hello!',
      \`Count is \${count}, Text is "\${text}"\`,
      [{ text: 'OK', onPress: () => console.log('OK pressed') }]
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.title}>React Native Demo</Text>
        
        <View style={styles.counter}>
          <TouchableOpacity 
            style={styles.button} 
            onPress={() => setCount(count - 1)}
          >
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
          
          <Text style={styles.countText}>{count}</Text>
          
          <TouchableOpacity 
            style={styles.button} 
            onPress={() => setCount(count + 1)}
          >
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>

        <TextInput
          style={styles.input}
          value={text}
          onChangeText={setText}
          placeholder="Enter text..."
          placeholderTextColor="#999"
        />

        <TouchableOpacity style={styles.primaryButton} onPress={showAlert}>
          <Text style={styles.primaryButtonText}>Show Alert</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  section: {
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  counter: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007bff',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  countText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    marginHorizontal: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 8,
    fontSize: 16,
    width: '100%',
    marginBottom: 20,
  },
  primaryButton: {
    backgroundColor: '#28a745',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 8,
  },
  primaryButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default MobileApp;`}</code></pre>

        <div className="section-divider"></div>

        <h2>🎉 Kết luận</h2>

        <p>
          <strong>ReactJS</strong> đã trở thành một trong những công nghệ frontend hàng đầu, 
          với <strong>ecosystem phong phú</strong> và <strong>community mạnh mẽ</strong>.
        </p>

        <div className="highlight-box success">
          <h4>🏆 Những điểm mạnh của React:</h4>
          <ul>
            <li>🧩 <strong>Component-Based Architecture</strong>: Modular và reusable</li>
            <li>⚡ <strong>Performance</strong>: Virtual DOM và optimization techniques</li>
            <li>🔄 <strong>Unidirectional Data Flow</strong>: Predictable state management</li>
            <li>🛠️ <strong>Developer Experience</strong>: Great tooling và debugging</li>
            <li>📱 <strong>Cross-Platform</strong>: Web (React) + Mobile (React Native)</li>
            <li>👥 <strong>Industry Adoption</strong>: Được sử dụng rộng rãi</li>
          </ul>
        </div>

        <blockquote>
          ⚛️ <strong>React Learning Path:</strong>
          <ol>
            <li>📚 <strong>JavaScript Fundamentals</strong>: ES6+, Promises, Async/Await</li>
            <li>🧩 <strong>React Basics</strong>: Components, Props, State</li>
            <li>🎣 <strong>Hooks</strong>: useState, useEffect, custom hooks</li>
            <li>🛣️ <strong>Routing</strong>: React Router</li>
            <li>🏪 <strong>State Management</strong>: Context API, Redux</li>
            <li>🎨 <strong>Styling</strong>: CSS-in-JS, styled-components</li>
            <li>🧪 <strong>Testing</strong>: Jest, React Testing Library</li>
            <li>⚡ <strong>Performance</strong>: Optimization techniques</li>
            <li>🚀 <strong>Deployment</strong>: Build process, hosting</li>
          </ol>
        </blockquote>

        <p>
          React không chỉ là một thư viện mà là một <strong>way of thinking</strong> về cách xây dựng 
          user interfaces hiện đại và maintainable! 🚀✨
        </p>
      </div>

      <div className="nav-buttons">
        <Link to="/posts/intellij-idea-ide-manh-me-cho-java" className="nav-button prev">
          <FiArrowLeft />
          Bài trước
        </Link>
        <Link to="/posts/co-so-du-lieu-sql-va-nosql" className="nav-button">
          Bài tiếp theo
          <FiArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default ReactJSPost;