import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import PostDetail from "./pages/PostDetail";
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

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 text-gray-800">
        <Navbar />
        <main className="pt-16 lg:pt-20">
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<Posts />} />
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
          {/* Catch-all for post routes - redirect to posts list */}
          <Route path="/posts/:slug" element={<PostDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
