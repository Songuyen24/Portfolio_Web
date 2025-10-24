import { Link } from "react-router-dom";
import { posts } from "../data/posts";
import { projects } from "../data/projects";
import { FiClock, FiCalendar, FiTag, FiFolder, FiArrowRight, FiGithub, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useState } from "react";

export default function Posts() {
  const sortedPosts = [...posts].sort((a, b) => new Date(b.date) - new Date(a.date));
  // Tìm bài viết nổi bật (featured post) hoặc lấy bài mới nhất
  const featuredPost = posts.find(post => post.featured) || sortedPosts[0];
  
  // Carousel state cho projects
  const [currentIndex, setCurrentIndex] = useState(0);
  const featuredProjects = projects.filter(project => project.featured);
  const projectsPerPage = 3;
  const maxIndex = Math.max(0, featuredProjects.length - projectsPerPage);
  
  // State cho GitHub popup
  const [showGithubPopup, setShowGithubPopup] = useState(null);

  const handlePrevious = () => {
    setCurrentIndex(prev => {
      if (prev === 0) {
        // Khi ở đầu, quay về cuối
        return maxIndex;
      }
      return prev - 1;
    });
  };

  const handleNext = () => {
    setCurrentIndex(prev => {
      if (prev >= maxIndex) {
        // Khi ở cuối, quay về đầu
        return 0;
      }
      return prev + 1;
    });
  };

  return (
    <div className="min-h-screen py-12 relative">
      <div className="max-w-6xl mx-auto px-4 lg:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Dự án & Blog
          </h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Khám phá các dự án thực tế và chia sẻ kiến thức về lập trình Java, Spring Boot, công nghệ web
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <div className="bg-cyan-500/20 text-cyan-300 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-cyan-500/30">
              {projects.filter(p => p.featured).length} dự án
            </div>
            <div className="bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-purple-500/30">
              {posts.length} bài viết
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-white flex items-center">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mr-3">
                <FiFolder className="w-4 h-4 text-white" />
              </div>
              Dự án của tôi
            </h2>
            
            {/* Navigation Arrows */}
            {featuredProjects.length > projectsPerPage && (
              <div className="flex gap-2">
                <button
                  onClick={handlePrevious}
                  className="p-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-200"
                  aria-label="Previous projects"
                >
                  <FiChevronLeft className="w-5 h-5 text-white" />
                </button>
                <button
                  onClick={handleNext}
                  className="p-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-200"
                  aria-label="Next projects"
                >
                  <FiChevronRight className="w-5 h-5 text-white" />
                </button>
              </div>
            )}
          </div>

          <div className="relative overflow-hidden">
            <div 
              className="grid transition-transform duration-500 ease-in-out"
              style={{ 
                gridTemplateColumns: `repeat(${featuredProjects.length}, calc((100% - 4rem) / ${projectsPerPage}))`,
                gap: '2rem',
                transform: `translateX(calc(${currentIndex} * (-1 * ( (100% - 4rem) / ${projectsPerPage} + 2rem ))))`
              }}>
              {featuredProjects.map((project) => (
                <div 
                  key={project.id} 
                  className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 hover:bg-white/15 transition-all duration-300 group"
                >
                  <div className="mb-4">
                    <div className="w-full h-48 overflow-hidden mb-4">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="px-6">
                      <h3 className="text-xl font-semibold text-white mb-2 min-h-[3.5rem] leading-tight">{project.title}</h3>
                      <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                        {project.description}
                      </p>
                    </div>
                  </div>
                  <div className="px-6">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, index) => {
                        const techColors = {
                          'React': 'bg-blue-500/20 text-blue-300',
                          'ReactJS': 'bg-blue-500/20 text-blue-300',
                          'Spring Boot': 'bg-green-500/20 text-green-300',
                          'MySQL': 'bg-blue-500/20 text-blue-300',
                          'PostgreSQL': 'bg-blue-600/20 text-blue-400',
                          'Redis': 'bg-red-500/20 text-red-300',
                          'WebSocket': 'bg-purple-500/20 text-purple-300',
                          'Flutter': 'bg-sky-500/20 text-sky-300',
                          'Firebase': 'bg-yellow-500/20 text-yellow-300',
                          'Node.js': 'bg-green-600/20 text-green-400',
                          'MongoDB': 'bg-green-700/20 text-green-400',
                          'Java': 'bg-orange-600/20 text-orange-300',
                          'JavaScript': 'bg-yellow-400/20 text-yellow-200',
                          'TypeScript': 'bg-blue-600/20 text-blue-400',
                          'Python': 'bg-yellow-600/20 text-yellow-300',
                          'Docker': 'bg-blue-700/20 text-blue-400',
                          'Azure': 'bg-blue-600/20 text-blue-400',
                          'Tailwind CSS': 'bg-cyan-500/20 text-cyan-300',
                          'Bootstrap': 'bg-purple-600/20 text-purple-300',
                          'Next.js': 'bg-gray-800/20 text-gray-300',
                          'PHP': 'bg-purple-700/20 text-purple-300',
                          'C#': 'bg-purple-600/20 text-purple-300',
                          '.NET': 'bg-purple-600/20 text-purple-300',
                          'ASP.NET Core': 'bg-purple-600/20 text-purple-300',
                          'Dart': 'bg-blue-700/20 text-blue-400',
                          'REST API': 'bg-blue-500/20 text-blue-300',
                          'JWT': 'bg-purple-500/20 text-purple-300',
                          'OAuth': 'bg-blue-500/20 text-blue-300',
                          'Git': 'bg-orange-500/20 text-orange-300',
                          'GitHub': 'bg-gray-800/20 text-gray-300',
                          'GitLab': 'bg-orange-600/20 text-orange-300',
                          'Figma': 'bg-pink-500/20 text-pink-300',
                        };
                        return (
                          <span key={index} className={`px-2 py-1 ${techColors[tech] || 'bg-gray-500/20 text-gray-300'} rounded text-xs`}>
                            {tech}
                          </span>
                        );
                      })}
                    </div>
                    <div className="flex gap-2 pb-6 relative">
                      {/* GitHub Link(s) */}
                      {Array.isArray(project.githubLink) ? (
                        <div className="relative">
                          <button 
                            onClick={() => setShowGithubPopup(showGithubPopup === project.id ? null : project.id)}
                            className="text-cyan-400 hover:text-cyan-300 transition-colors"
                          >
                            <FiGithub className="w-5 h-5" />
                          </button>
                          
                          {showGithubPopup === project.id && (
                            <>
                              <div 
                                className="fixed inset-0 z-40" 
                                onClick={() => setShowGithubPopup(null)}
                              />
                              <div className="absolute bottom-full left-0 mb-2 bg-gray-900/95 backdrop-blur-sm border border-white/20 rounded-lg shadow-xl p-3 min-w-[200px] z-50">
                                <div className="flex flex-col gap-2">
                                  {project.githubLink.map((link, idx) => (
                                    <a
                                      key={idx}
                                      href={link}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="flex items-center gap-2 px-3 py-2 bg-white/10 hover:bg-white/20 rounded text-cyan-400 hover:text-cyan-300 transition-colors text-sm"
                                      onClick={() => setShowGithubPopup(null)}
                                    >
                                      <FiGithub className="w-4 h-4" />
                                      <span>Repository {idx + 1}</span>
                                    </a>
                                  ))}
                                </div>
                              </div>
                            </>
                          )}
                        </div>
                      ) : (
                        <a 
                          href={project.githubLink} 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-cyan-400 hover:text-cyan-300 transition-colors"
                        >
                          <FiGithub className="w-5 h-5" />
                        </a>
                      )}
                      
                      <a href={project.liveLink} className="text-cyan-400 hover:text-cyan-300 transition-colors">
                        <FiArrowRight className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Post */}
        {featuredPost && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mr-3">
                <FiTag className="w-4 h-4 text-white" />
              </div>
              Bài viết nổi bật
            </h2>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 hover:bg-white/15 transition-all duration-300 group">
              <div className="p-8">
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm font-medium flex items-center">
                    <FiFolder className="w-3 h-3 mr-1" />
                    {featuredPost.category}
                  </span>
                  <div className="flex items-center text-gray-300 text-sm">
                    <FiCalendar className="w-4 h-4 mr-1" />
                    {new Date(featuredPost.date).toLocaleDateString('vi-VN')}
                  </div>
                  <div className="flex items-center text-gray-300 text-sm">
                    <FiClock className="w-4 h-4 mr-1" />
                    {featuredPost.readTime}
                  </div>
                </div>
                
                <Link to={featuredPost.path} className="group">
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                    {featuredPost.title}
                  </h3>
                </Link>
                
                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {featuredPost.tags?.map((tag, index) => (
                    <span 
                      key={index}
                      className="px-2 py-1 bg-gray-500/20 text-gray-300 rounded text-sm"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                
                <Link
                  to={featuredPost.path}
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group transition-colors"
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
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mr-3">
              <FiFolder className="w-4 h-4 text-white" />
            </div>
            Tất cả bài viết
          </h2>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {sortedPosts.map((post, index) => (
              <article 
                key={post.id}
                className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 hover:bg-white/15 transition-all duration-300 group"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                    <div className="flex items-center text-gray-300 text-sm">
                      <FiCalendar className="w-3 h-3 mr-1" />
                      {new Date(post.date).toLocaleDateString('vi-VN')}
                    </div>
                  </div>
                  
                  <Link to={post.path} className="group">
                    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors leading-tight">
                      {post.title}
                    </h3>
                  </Link>
                  
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-400 text-xs">
                      <FiClock className="w-3 h-3 mr-1" />
                      {post.readTime}
                    </div>
                    
                    <Link
                      to={post.path}
                      className="text-cyan-400 hover:text-cyan-300 text-sm font-medium flex items-center group transition-colors"
                    >
                      Xem thêm
                      <FiArrowRight className="ml-1 w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                  
                  {post.tags && (
                    <div className="flex flex-wrap gap-1 mt-4 pt-4 border-t border-white/20">
                      {post.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span 
                          key={tagIndex}
                          className="px-2 py-1 bg-gray-500/20 text-gray-300 rounded text-xs"
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
      </div>
    </div>
  );
}
