import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Aurora } from "./components/reactbits";
import { personalInfo } from './data/information';
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Projects_Posts from "./pages/Projects_Posts";
import About from "./pages/About";
import Contact from "./pages/Contact";
import {
  JavaIntroPost,
  OOPJavaPost,
  GitJavaPost,
  SpringBootAPIPost,
  PostmanPost,
  IntelliJIDEAPost,
  ReactJSPost,
  DatabasePost,
  CRUDPost
} from "./components/posts";

// Navbar Component
const Navbar = () => {
  return (
    <nav className="relative w-full bg-white/10 backdrop-blur-sm border-b border-white/20 z-50">
      <div className="max-w-6xl mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-xl font-bold text-white">
              Nguyễn Phúc Sơn
            </span>
          </div>
          
          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-white hover:text-cyan-300 transition-colors font-medium">
              Trang chủ
            </a>
            <a href="/about" className="text-white hover:text-cyan-300 transition-colors font-medium">
              Giới thiệu
            </a>
            <a href="/projects_posts" className="text-white hover:text-cyan-300 transition-colors font-medium">
              Dự án
            </a>
            <a href="/contact" className="text-white hover:text-cyan-300 transition-colors font-medium">
              Liên hệ
            </a>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-white hover:text-cyan-300 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

function App() {

  return (
    <Router>
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        {/* Global Aurora Background */}
        <div className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none">
          <Aurora 
            colorStops={['#1e3a8a', '#0891b2', '#7c3aed']}
            amplitude={0.8}
            blend={0.6}
            speed={0.5}
          />
        </div>
        <div className="relative z-10">
          <ScrollToTop />
          <Navbar />
          <main>
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects_posts" element={<Projects_Posts />} />
          {/* Individual post routes */}
          <Route path="/posts/java-la-gi-gioi-thieu-ngon-ngu-lap-trinh" element={<JavaIntroPost />} />
          <Route path="/posts/lap-trinh-huong-doi-tuong-oop-java" element={<OOPJavaPost />} />
          <Route path="/posts/git-co-ban-cho-lap-trinh-vien-java" element={<GitJavaPost />} />
          <Route path="/posts/xay-dung-rest-api-voi-spring-boot" element={<SpringBootAPIPost />} />
          <Route path="/posts/gioi-thieu-postman-cong-cu-kiem-thu-api" element={<PostmanPost />} />
          <Route path="/posts/intellij-idea-ide-manh-me-cho-java" element={<IntelliJIDEAPost />} />
          <Route path="/posts/reactjs-thu-vien-xay-dung-giao-dien-hien-dai" element={<ReactJSPost />} />
          <Route path="/posts/co-so-du-lieu-sql-va-nosql" element={<DatabasePost />} />
          <Route path="/posts/crud-operations-tao-sua-doc-xoa-du-lieu" element={<CRUDPost />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
