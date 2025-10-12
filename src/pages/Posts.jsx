import { Link } from "react-router-dom";
import { posts } from "../data/posts";
import { FiClock, FiCalendar, FiTag, FiFolder, FiArrowRight } from "react-icons/fi";

export default function Posts() {
  const sortedPosts = [...posts].sort((a, b) => new Date(b.date) - new Date(a.date));
  // Tìm bài viết nổi bật (featured post) hoặc lấy bài mới nhất
  const featuredPost = posts.find(post => post.featured) || sortedPosts[0];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-12">
      <div className="max-w-6xl mx-auto px-4 lg:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Blog & Bài viết
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Chia sẻ kiến thức về lập trình Java, Spring Boot, công nghệ web và những kinh nghiệm thực tế
          </p>
          <div className="mt-6 flex justify-center">
            <div className="bg-cyan-100 text-cyan-700 px-4 py-2 rounded-full text-sm font-medium">
              {posts.length} bài viết
            </div>
          </div>
        </div>

        {/* Featured Post */}
        {featuredPost && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mr-3">
                <FiTag className="w-4 h-4 text-white" />
              </div>
              Bài viết nổi bật
            </h2>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-8">
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <span className="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm font-medium flex items-center">
                    <FiFolder className="w-3 h-3 mr-1" />
                    {featuredPost.category}
                  </span>
                  <div className="flex items-center text-gray-500 text-sm">
                    <FiCalendar className="w-4 h-4 mr-1" />
                    {new Date(featuredPost.date).toLocaleDateString('vi-VN')}
                  </div>
                  <div className="flex items-center text-gray-500 text-sm">
                    <FiClock className="w-4 h-4 mr-1" />
                    {featuredPost.readTime}
                  </div>
                </div>
                
                <Link 
                  to={`/posts/${featuredPost.slug}`}
                  className="group"
                >
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4 group-hover:text-cyan-600 transition-colors">
                    {featuredPost.title}
                  </h3>
                </Link>
                
                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {featuredPost.tags?.map((tag, index) => (
                    <span 
                      key={index}
                      className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-sm"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                
                <Link
                  to={`/posts/${featuredPost.slug}`}
                  className="inline-flex items-center text-cyan-600 hover:text-cyan-700 font-medium group"
                >
                  Đọc bài viết
                  <FiArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* All Posts */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-8 flex items-center">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mr-3">
              <FiFolder className="w-4 h-4 text-white" />
            </div>
            Tất cả bài viết
          </h2>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {sortedPosts.map((post, index) => (
              <article 
                key={post.id}
                className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                  index === 0 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                    <div className="flex items-center text-gray-400 text-sm">
                      <FiCalendar className="w-3 h-3 mr-1" />
                      {new Date(post.date).toLocaleDateString('vi-VN')}
                    </div>
                  </div>
                  
                  <Link 
                    to={`/posts/${post.slug}`}
                    className="group"
                  >
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
                      Xem thêm
                      <FiArrowRight className="ml-1 w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                  
                  {post.tags && (
                    <div className="flex flex-wrap gap-1 mt-4 pt-4 border-t border-gray-100">
                      {post.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span 
                          key={tagIndex}
                          className="px-2 py-1 bg-gray-50 text-gray-500 rounded text-xs"
                        >
                          #{tag}
                        </span>
                      ))}
                      {post.tags.length > 3 && (
                        <span className="px-2 py-1 text-gray-400 text-xs">
                          +{post.tags.length - 3}
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Categories Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Danh mục bài viết</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[...new Set(posts.map(post => post.category))].map((category, index) => {
              const count = posts.filter(post => post.category === category).length;
              return (
                <div
                  key={index}
                  className="bg-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="text-center">
                    <div className="font-semibold text-gray-800">{category}</div>
                    <div className="text-sm text-gray-500">{count} bài viết</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
