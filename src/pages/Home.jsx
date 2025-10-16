import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { posts } from '../data/posts';
import { projects } from '../data/projects';
import { FiBookOpen, FiArrowRight, FiCalendar, FiGithub } from 'react-icons/fi';
import { FaJava, FaReact, FaJs, FaGitAlt, FaDocker, FaDatabase, FaCode, FaNodeJs, FaFigma } from 'react-icons/fa';
import { SiSpring, SiTailwindcss, SiCanva, SiFirebase } from 'react-icons/si';
import { ShinyText, LogoLoop, Aurora } from '../components/reactbits';

const Home = () => {
  const navigate = useNavigate();
  const latestPosts = posts.slice(0, 3);

  return (
    <>
      {/* Aurora Background - Fixed toàn màn hình */}
      <div className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none">
        <Aurora 
          colorStops={['#1e3a8a', '#0891b2', '#7c3aed']}
          amplitude={0.8}
          blend={0.6}
          speed={0.5}
        />
      </div>
      
      {/* Main Content */}
      <div className="min-h-screen relative z-10">
        {/* Hero Section */}
        <section className="pt-8 pb-32 lg:pt-12 lg:pb-40 min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto px-4 lg:px-6 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-cyan-100 text-cyan-700 rounded-full text-sm font-medium mb-4">
                  👋 Chào mừng đến với blog của tôi
                </span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Xin chào, tôi là{' '}
                <ShinyText 
                  text="Nguyễn Phúc Sơn"
                  className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent font-bold"
                  speed={2}
                />
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Java Developer đam mê công nghệ, chia sẻ kiến thức lập trình và 
                xây dựng những sản phẩm có giá trị.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="/cv/NguyenPhucSon_CV.pdf"
                  download="NguyenPhucSon_CV.pdf"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-700 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  <FiBookOpen className="mr-2 w-5 h-5" />
                  Tải CV
                </a>
                <Link
                  to="/about"
                  className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-cyan-600 transition-colors duration-200"
                >
                  Tìm hiểu thêm
                  <FiArrowRight className="ml-2 w-5 h-5" />
                </Link>
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

      {/* About Me Section */}
      <section className="pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20">
            <div className="grid md:grid-cols-3 gap-12 items-start">
              {/* Left Column - Main Content */}
              <div className="md:col-span-2">
                <h2 className="text-3xl font-bold text-white mb-4">
                  <ShinyText 
                    text="Về tôi"
                    className="text-white font-bold"
                    speed={3}
                  />
                </h2>
                
                <p className="text-lg text-gray-200 mb-6 leading-relaxed">
                  Tôi là một Java Developer với niềm đam mê mãnh liệt về công nghệ và lập trình. 
                  Với hơn 3 năm kinh nghiệm trong việc phát triển ứng dụng web và mobile, 
                  tôi luôn tìm tòi và học hỏi những công nghệ mới nhất để tạo ra những sản phẩm chất lượng.
                </p>
                
                <p className="text-lg text-gray-200 mb-8 leading-relaxed">
                  Tôi tin rằng công nghệ không chỉ là công cụ mà còn là cầu nối để tạo ra những giải pháp 
                  thông minh và hiệu quả. Từ việc xây dựng API backend với Spring Boot đến phát triển 
                  giao diện người dùng tương tác với React, tôi luôn cố gắng mang đến trải nghiệm tốt nhất 
                  cho người dùng cuối. Ngoài lập trình, tôi còn có niềm đam mê chia sẻ kiến thức thông qua 
                  blog cá nhân và tham gia vào cộng đồng developer Việt Nam.
                </p>
                
                {/* Statistics */}
                <div className="grid grid-cols-3 gap-6 mb-8">
                  <div className="text-center">
                    <h4 className="text-3xl font-bold text-white mb-1">
                      x<span className="text-cyan-400">+</span>
                    </h4>
                    <p className="text-gray-300 font-medium text-sm">Dự án hoàn thành</p>
                  </div>
                  <div className="text-center">
                    <h4 className="text-3xl font-bold text-white mb-1">
                      x<span className="text-cyan-400">+</span>
                    </h4>
                    <p className="text-gray-300 text-sm">Năm kinh nghiệm</p>
                  </div>
                  <div className="text-center">
                    <h4 className="text-3xl font-bold text-white mb-1">
                      3.30<span className="text-purple-400">/4.00</span>
                    </h4>
                    <p className="text-gray-300 text-sm">GPA</p>
                  </div>
                </div>

                <p className="text-lg text-gray-400 text-sm italic">
                  Working with heart, creating with mind.
                </p>
              </div>
              
              {/* Right Column - Avatar */}
              <div className="flex justify-center md:justify-end">
                <div className="relative">
                  <div className="w-64 h-80 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/20 overflow-hidden">
                    <img 
                      src="/images/avatar.jpg" 
                      alt="Nguyễn Phúc Sơn" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack LogoLoop Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 lg:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              <ShinyText 
                text="Công nghệ tôi sử dụng"
                className="text-white font-bold"
                speed={5}
              />
            </h2>
            <p className="text-gray-200">Các công nghệ và công cụ tôi thường xuyên làm việc</p>
          </div>

          <LogoLoop
            logos={[
              {
                node: <FaJava className="text-3xl text-orange-600" />,
                title: "Java"
              },
              {
                node: <SiSpring className="text-3xl text-green-600" />,
                title: "Spring Boot"  
              },
              {
                node: <FaReact className="text-3xl text-blue-600" />,
                title: "React"
              },
              {
                node: <FaJs className="text-3xl text-yellow-500" />,
                title: "JavaScript"
              },
              {
                node: <SiTailwindcss className="text-3xl text-cyan-500" />,
                title: "Tailwind CSS"
              },
              {
                node: <FaGitAlt className="text-3xl text-orange-500" />,
                title: "Git"
              },
              {
                node: <FaDocker className="text-3xl text-blue-700" />,
                title: "Docker"
              },
              {
                node: <FaDatabase className="text-3xl text-blue-800" />,
                title: "MySQL"
              },
              {
                node: <SiCanva className="text-3xl text-purple-600" />,
                title: "Canva"
              },
              {
                node: <FaFigma className="text-3xl text-pink-500" />,
                title: "Figma"
              },
              {
                node: <SiFirebase className="text-3xl text-yellow-600" />,
                title: "Firebase"
              },
              {
                node: <FaNodeJs className="text-3xl text-green-700" />,
                title: "Node.js"
              },
              {
                node: <FaCode className="text-3xl text-purple-700" />,
                title: "ASP.NET Core"
              }
            ]}
            speed={60}
            logoHeight={40}
            gap={48}
            pauseOnHover={true}
            scaleOnHover={true}
            fadeOut={false}
            ariaLabel="Technologies I use"
          />
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 lg:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              <ShinyText 
                text="Dự án của tôi"
                className="text-white font-bold"
                speed={4}
              />
            </h2>
            <p className="text-gray-200">Một số dự án nổi bật tôi đã thực hiện</p>
          </div>

          <div className="flex justify-center gap-6">
            {projects.filter(project => project.featured).slice(0, 3).map((project) => {
              return (
                <div key={project.id} className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 hover:bg-white/15 transition-all duration-300 group flex-1 max-w-xs">
                  <div className="mb-4">
                    <div className="w-full h-48 overflow-hidden mb-4">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="px-6">
                      <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                      <p className="text-gray-300 text-sm mb-4">
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
                    <div className="flex gap-2 pb-6">
                      <a href={project.githubLink} className="text-cyan-400 hover:text-cyan-300 transition-colors">
                        <FiGithub className="w-5 h-5" />
                      </a>
                      <a href={project.liveLink} className="text-cyan-400 hover:text-cyan-300 transition-colors">
                        <FiArrowRight className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/projects_posts"
              className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-medium rounded-lg hover:bg-white/20 transition-all duration-200"
            >
              Xem tất cả dự án
              <FiArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Posts Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 lg:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              <ShinyText 
                text="Bài viết mới nhất"
                className="text-white font-bold"
                speed={4}
              />
            </h2>
            <p className="text-gray-200">Chia sẻ kiến thức và kinh nghiệm lập trình</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestPosts.map((post) => (
              <article 
                key={post.id}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group cursor-pointer h-full"
                onClick={() => navigate(post.path)}
              >
                <div className="mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <FiBookOpen className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2 py-1 bg-cyan-500/20 text-cyan-300 rounded text-xs font-medium">
                      {post.category}
                    </span>
                    <div className="flex items-center text-gray-400 text-xs">
                      <FiCalendar className="w-3 h-3 mr-1" />
                      {new Date(post.date).toLocaleDateString('vi-VN')}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4">
                    {post.excerpt}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">{post.readTime}</span>
                  <span className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-xs">Blog</span>
                </div>
              </article>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/projects_posts"
              className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-medium rounded-lg hover:bg-white/20 transition-all duration-200"
            >
              Xem tất cả bài viết
              <FiArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
      </div>
    </>
  );
};

export default Home;
