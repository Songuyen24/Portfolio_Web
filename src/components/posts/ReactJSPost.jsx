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
            <span>5 phút đọc</span>
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

        <p>Components là building blocks của React - functions trả về JSX để render UI.</p>

        <pre><code>{`const Welcome = ({ name }) => {
  return <h1>Hello, {name}!</h1>;
};`}</code></pre>

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

        <h2>🎯 React Hooks</h2>

        <h3>⚡ useState & useEffect</h3>

        <pre><code>{`const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = \`Count: \${count}\`;
  }, [count]);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
};`}</code></pre>

        <div className="section-divider"></div>

        <h2>🛠️ State Management</h2>

        <h3>🏪 Context API</h3>

        <pre><code>{`const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Usage
const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return <button onClick={() => setTheme('dark')}>Toggle</button>;
};`}</code></pre>

        <div className="section-divider"></div>

        <h2>🌐 React Router</h2>

        <pre><code>{`import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

const App = () => (
  <BrowserRouter>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/users/:id" element={<UserProfile />} />
    </Routes>
  </BrowserRouter>
);`}</code></pre>

        <div className="section-divider"></div>

        <h2>🚀 React Ecosystem & Tools</h2>

        <table>
          <thead>
            <tr>
              <th>Category</th>
              <th>Popular Libraries</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>State Management</strong></td>
              <td>Redux Toolkit, Zustand, Recoil</td>
            </tr>
            <tr>
              <td><strong>Styling</strong></td>
              <td>Styled Components, Tailwind CSS</td>
            </tr>
            <tr>
              <td><strong>UI Libraries</strong></td>
              <td>Material-UI, Ant Design</td>
            </tr>
            <tr>
              <td><strong>Forms</strong></td>
              <td>React Hook Form, Formik</td>
            </tr>
            <tr>
              <td><strong>Data Fetching</strong></td>
              <td>React Query, SWR</td>
            </tr>
          </tbody>
        </table>

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