import { FiUser, FiMapPin, FiMail, FiPhone, FiGithub, FiLinkedin } from "react-icons/fi";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-12">
      <div className="max-w-4xl mx-auto px-4 lg:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Giới thiệu về tôi
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Xin chào! Tôi là Nguyễn Sơn, một lập trình viên đam mê công nghệ và phát triển web.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Personal Info */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <FiUser className="w-6 h-6 text-cyan-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-800">Thông tin cá nhân</h2>
            </div>
            
            {/* Avatar */}
            <div className="flex justify-center mb-6">
              <div className="relative">
                <img
                  src="/images/avatar.jpg"
                  alt="Nguyễn Sơn"
                  className="w-32 h-32 rounded-full object-cover border-4 border-cyan-100 shadow-lg"
                />
                <div className="absolute bottom-0 right-0 w-8 h-8 bg-green-500 rounded-full border-4 border-white flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
              </div>
            </div>

            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Nguyễn Sơn</h3>
              <p className="text-cyan-600 font-medium">Full-Stack Developer</p>
              <p className="text-gray-500 text-sm mt-1">3+ năm kinh nghiệm</p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <FiMapPin className="w-5 h-5 text-gray-500 mr-3" />
                <span className="text-gray-700">Hồ Chí Minh, Việt Nam</span>
              </div>
              <div className="flex items-center">
                <FiMail className="w-5 h-5 text-gray-500 mr-3" />
                <span className="text-gray-700">nguyenson@email.com</span>
              </div>
              <div className="flex items-center">
                <FiPhone className="w-5 h-5 text-gray-500 mr-3" />
                <span className="text-gray-700">+84 123 456 789</span>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Kết nối với tôi</h3>
              <div className="flex justify-center space-x-4">
                <a 
                  href="https://github.com/nguyenson" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 rounded-lg hover:bg-gray-800 hover:text-white transition-colors group"
                  title="GitHub"
                >
                  <FiGithub className="w-5 h-5" />
                </a>
                <a 
                  href="https://linkedin.com/in/nguyenson" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 rounded-lg hover:bg-blue-600 hover:text-white transition-colors group"
                  title="LinkedIn"
                >
                  <FiLinkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Skills & Experience */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Kỹ năng & Kinh nghiệm</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-700 mb-3">Frontend Development</h3>
                <div className="flex flex-wrap gap-2">
                  {['React', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'HTML5', 'CSS3'].map((skill) => (
                    <span 
                      key={skill}
                      className="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-700 mb-3">Backend Development</h3>
                <div className="flex flex-wrap gap-2">
                  {['Node.js', 'Express', 'MongoDB', 'MySQL', 'API Design'].map((skill) => (
                    <span 
                      key={skill}
                      className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-700 mb-3">Tools & Others</h3>
                <div className="flex flex-wrap gap-2">
                  {['Git', 'Docker', 'AWS', 'Figma', 'Photoshop'].map((skill) => (
                    <span 
                      key={skill}
                      className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bio */}
        <div className="mt-8 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Về tôi</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              Tôi là một lập trình viên full-stack với hơn 3 năm kinh nghiệm trong việc phát triển 
              các ứng dụng web hiện đại. Tôi có đam mê mạnh mẽ với việc tạo ra những trải nghiệm 
              người dùng tuyệt vời thông qua code sạch và thiết kế đẹp.
            </p>
            <p className="mb-4">
              Chuyên môn của tôi tập trung vào React, Node.js và các công nghệ web hiện đại. 
              Tôi luôn tìm kiếm cơ hội học hỏi và áp dụng những công nghệ mới để giải quyết 
              các vấn đề phức tạp một cách sáng tạo.
            </p>
            <p>
              Ngoài lập trình, tôi thích chia sẻ kiến thức thông qua blog cá nhân và tham gia 
              vào các dự án open source. Mục tiêu của tôi là không ngừng phát triển kỹ năng 
              và đóng góp tích cực cho cộng đồng lập trình viên.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}