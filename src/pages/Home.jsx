import React from 'react';
import { Link } from 'react-router-dom';
import { posts } from '../data/posts';
import { FiCode, FiBookOpen, FiArrowRight, FiCalendar, FiClock, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const Home = () => {
  const latestPosts = posts.slice(0, 3);
  const skills = [
    { name: 'Java', level: 90, color: 'from-orange-400 to-red-500' },
    { name: 'Spring Boot', level: 85, color: 'from-green-400 to-blue-500' },
    { name: 'React', level: 88, color: 'from-blue-400 to-purple-500' },
    { name: 'JavaScript', level: 90, color: 'from-yellow-400 to-orange-500' },
    { name: 'Git', level: 85, color: 'from-pink-400 to-red-500' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="py-12 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-cyan-100 text-cyan-700 rounded-full text-sm font-medium mb-4">
                  👋 Chào mừng đến với blog của tôi
                </span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight">
                Xin chào, tôi là{' '}
                <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                  Nguyễn Phúc Sơn
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Java Developer đam mê công nghệ, chia sẻ kiến thức lập trình và 
                xây dựng những sản phẩm có giá trị.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  to="/posts"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-700 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  <FiBookOpen className="mr-2 w-5 h-5" />
                  Đọc bài viết
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center px-6 py-3 border-2 border-gray-300 text-gray-700 font-medium rounded-lg hover:border-cyan-600 hover:text-cyan-600 transition-colors duration-200"
                >
                  Tìm hiểu thêm
                  <FiArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>

              {/* Social Links */}
              <div className="mt-8 flex justify-center lg:justify-start space-x-4">
                <a href="#" className="p-3 bg-white rounded-lg shadow-md hover:shadow-lg hover:text-cyan-600 transition-all">
                  <FiGithub className="w-5 h-5" />
                </a>
                <a href="#" className="p-3 bg-white rounded-lg shadow-md hover:shadow-lg hover:text-cyan-600 transition-all">
                  <FiLinkedin className="w-5 h-5" />
                </a>
                <a href="#" className="p-3 bg-white rounded-lg shadow-md hover:shadow-lg hover:text-cyan-600 transition-all">
                  <FiMail className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center shadow-2xl overflow-hidden border-4 border-white">
                  <img 
                    src="/images/avatar.jpg" 
                    alt="S" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center text-2xl animate-bounce shadow-lg">
                  ☕
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 lg:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Kỹ năng chính</h2>
            <p className="text-gray-600">Những công nghệ tôi thường xuyên sử dụng</p>
          </div>

          <div className="space-y-6">
            {skills.map((skill, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="font-semibold text-gray-800">{skill.name}</span>
                  <span className="text-gray-600">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className={`h-3 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Posts Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 lg:px-6">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Bài viết mới nhất</h2>
              <p className="text-gray-600">Chia sẻ kiến thức và kinh nghiệm lập trình</p>
            </div>
            <Link
              to="/posts"
              className="hidden sm:inline-flex items-center text-cyan-600 hover:text-cyan-700 font-medium"
            >
              Xem tất cả
              <FiArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestPosts.map((post) => (
              <article 
                key={post.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                    <div className="flex items-center text-gray-400 text-sm">
                      <FiCalendar className="w-3 h-3 mr-1" />
                      {new Date(post.date).toLocaleDateString('vi-VN')}
                    </div>
                  </div>
                  
                  <Link to={`/posts/${post.slug}`} className="group">
                    <h3 className="text-lg font-bold text-gray-800 mb-3 group-hover:text-cyan-600 transition-colors leading-tight">
                      {post.title}
                    </h3>
                  </Link>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-500 text-xs">
                      <FiClock className="w-3 h-3 mr-1" />
                      {post.readTime}
                    </div>
                    
                    <Link
                      to={`/posts/${post.slug}`}
                      className="text-cyan-600 hover:text-cyan-700 text-sm font-medium flex items-center group"
                    >
                      Đọc thêm
                      <FiArrowRight className="ml-1 w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-8 sm:hidden">
            <Link
              to="/posts"
              className="inline-flex items-center px-6 py-3 bg-cyan-600 text-white font-medium rounded-lg hover:bg-cyan-700 transition-colors"
            >
              Xem tất cả bài viết
              <FiArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-cyan-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 lg:px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Bắt đầu hành trình học Java cùng tôi</h2>
          <p className="text-lg mb-8 text-cyan-100">
            Theo dõi blog để cập nhật những kiến thức mới nhất về Java và Spring Boot
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/posts"
              className="inline-flex items-center px-6 py-3 bg-white text-cyan-600 font-medium rounded-lg hover:bg-gray-100 transition-colors"
            >
              <FiBookOpen className="mr-2 w-5 h-5" />
              Khám phá bài viết
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-cyan-600 transition-colors"
            >
              <FiMail className="mr-2 w-5 h-5" />
              Liên hệ với tôi
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
