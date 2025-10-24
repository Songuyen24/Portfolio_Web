import { FiUser, FiMapPin, FiMail, FiPhone, FiGithub, FiLinkedin, FiCalendar, FiBook, FiBookOpen, FiUserCheck, FiAward } from "react-icons/fi";
import { FaJava, FaReact, FaJs, FaHtml5, FaCss3Alt, FaGitAlt, FaDocker, FaDatabase, FaCode, FaNodeJs, FaFigma, FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa';
import { SiSpring, SiTailwindcss, SiCanva, SiFirebase, SiMysql, SiPostman, SiIntellijidea, SiVite, SiBootstrap, SiGmail } from 'react-icons/si';
import { personalInfo } from "../data/information";
import { certificates } from "../data/certificates";
import { BsFilePerson } from "react-icons/bs";

export default function About() {
  return (
    <div className="min-h-screen py-12 relative">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Giới thiệu về tôi
          </h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            {personalInfo.bio.short}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Personal Info - Left Side (25%) */}
          <div className="lg:w-[25%] w-full">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl shadow-lg p-8 border border-white/20 sticky top-8">
              <div className="flex items-center mb-6">
                <FiUser className="w-6 h-6 text-cyan-600 mr-3" />
                <h2 className="text-2xl font-bold text-white">Thông tin cá nhân</h2>
              </div>
              
              {/* Avatar */}
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <img
                    src={personalInfo.avatar}
                    alt={personalInfo.name}
                    className="w-32 h-32 rounded-full object-cover border-4 border-cyan-100 shadow-lg"
                  />
                  <div className="absolute bottom-0 right-0 w-8 h-8 bg-green-500 rounded-full border-4 border-white flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>

              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-white mb-2">{personalInfo.name}</h3>
                <p className="text-cyan-300 font-medium">{personalInfo.title}</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center">
                  <FiCalendar className="w-5 h-5 text-gray-500 mr-3" />
                  <span className="text-gray-200">{personalInfo.date}</span>
                </div>
                <div className="flex items-center">
                  <FiMapPin className="w-5 h-5 text-gray-500 mr-3" />
                  <span className="text-gray-200">{personalInfo.address}</span>
                </div>
                <div className="flex items-center">
                  <FiPhone className="w-5 h-5 text-gray-400 mr-3" />
                  <span className="text-gray-200">{personalInfo.phone}</span>
                </div>
              </div>

              {/* Bio Section */}
              <div className="mt-6 pt-6 border-t border-white/20">
                <h3 className="text-lg font-semibold text-white mb-4">Về tôi</h3>
                <div className="text-gray-300 text-sm space-y-2">
                  {personalInfo.bio.long.map((paragraph, index) => (
                    <p key={index} className="leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-white/20">
                <h3 className="text-lg font-semibold text-white mb-4">Kết nối với tôi</h3>
                <div className="flex justify-center flex-wrap gap-3">
                  {/* GitHub */}
                  <a 
                    href={personalInfo.social.github || "#"} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-gray-800 hover:text-white transition-all duration-200 border border-white/20 group"
                    title="GitHub"
                  >
                    <FiGithub className="w-5 h-5 text-gray-300 group-hover:text-white" />
                  </a>
                  
                  {/* LinkedIn */}
                  <a 
                    href={personalInfo.social.linkedin || "#"} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-200 border border-white/20 group"
                    title="LinkedIn"
                  >
                    <FiLinkedin className="w-5 h-5 text-gray-300 group-hover:text-white" />
                  </a>
                  
                  {/* Gmail */}
                  <a 
                    href={`mailto:${personalInfo.social.email}`} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-red-600 hover:text-white transition-all duration-200 border border-white/20 group"
                    title="Gmail"
                  >
                    <SiGmail className="w-5 h-5 text-gray-300 group-hover:text-white" />
                  </a>
                  
                  {/* Facebook */}
                  <a 
                    href={personalInfo.social.facebook || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-blue-700 hover:text-white transition-all duration-200 border border-white/20 group"
                    title="Facebook"
                  >
                    <FaFacebookF className="w-5 h-5 text-gray-300 group-hover:text-white" />
                  </a>
                  
                  {/* Instagram */}
                  <a 
                    href={personalInfo.social.instagram || "#"} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:text-white transition-all duration-200 border border-white/20 group"
                    title="Instagram"
                  >
                    <FaInstagram className="w-5 h-5 text-gray-300 group-hover:text-white" />
                  </a>
                  
                  {/* TikTok */}
                  <a 
                    href={personalInfo.social.tiktok || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-black hover:text-white transition-all duration-200 border border-white/20 group"
                    title="TikTok"
                  >
                    <FaTiktok className="w-5 h-5 text-gray-300 group-hover:text-white" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content - Right Side (75%) */}
          <div className="lg:w-[75%] w-full space-y-8">
            {/* Skills & Experience */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl shadow-lg p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-6">Kỹ năng & Công nghệ</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-200 mb-3">Frontend Development</h3>
                  <div className="flex flex-wrap gap-3">
                    <div className="flex items-center gap-2 px-3 py-2 bg-cyan-500/20 text-cyan-300 rounded-lg">
                      <FaReact className="w-5 h-5 text-blue-500" />
                      <span className="text-sm font-medium">React</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-2 bg-cyan-500/20 text-cyan-300 rounded-lg">
                      <FaJs className="w-5 h-5 text-yellow-500" />
                      <span className="text-sm font-medium">JavaScript</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-2 bg-cyan-500/20 text-cyan-300 rounded-lg">
                      <SiTailwindcss className="w-5 h-5 text-cyan-500" />
                      <span className="text-sm font-medium">Tailwind CSS</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-2 bg-cyan-500/20 text-cyan-300 rounded-lg">
                      <SiBootstrap className="w-5 h-5 text-purple-600" />
                      <span className="text-sm font-medium">Bootstrap</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-200 mb-3">Backend Development</h3>
                  <div className="flex flex-wrap gap-3">
                    <div className="flex items-center gap-2 px-3 py-2 bg-green-500/20 text-green-300 rounded-lg">
                      <FaJava className="w-5 h-5 text-orange-600" />
                      <span className="text-sm font-medium">Java</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-2 bg-green-500/20 text-green-300 rounded-lg">
                      <SiSpring className="w-5 h-5 text-green-600" />
                      <span className="text-sm font-medium">Spring Boot</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-2 bg-green-500/20 text-green-300 rounded-lg">
                      <FaNodeJs className="w-5 h-5 text-green-700" />
                      <span className="text-sm font-medium">Node.js</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-2 bg-green-500/20 text-green-300 rounded-lg">
                      <FaCode className="w-5 h-5 text-purple-700" />
                      <span className="text-sm font-medium">ASP.NET Core</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-2 bg-green-500/20 text-green-300 rounded-lg">
                      <SiMysql className="w-5 h-5 text-blue-600" />
                      <span className="text-sm font-medium">MySQL</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-2 bg-green-500/20 text-green-300 rounded-lg">
                      <SiFirebase className="w-5 h-5 text-yellow-600" />
                      <span className="text-sm font-medium">Firebase</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-200 mb-3">Tools & Others</h3>
                  <div className="flex flex-wrap gap-3">
                    <div className="flex items-center gap-2 px-3 py-2 bg-purple-500/20 text-purple-300 rounded-lg">
                      <FaGitAlt className="w-5 h-5 text-orange-500" />
                      <span className="text-sm font-medium">Git</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-2 bg-purple-500/20 text-purple-300 rounded-lg">
                      <FaDocker className="w-5 h-5 text-blue-700" />
                      <span className="text-sm font-medium">Docker</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-2 bg-purple-500/20 text-purple-300 rounded-lg">
                      <SiPostman className="w-5 h-5 text-orange-600" />
                      <span className="text-sm font-medium">Postman</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-2 bg-purple-500/20 text-purple-300 rounded-lg">
                      <SiIntellijidea className="w-5 h-5 text-red-600" />
                      <span className="text-sm font-medium">IntelliJ IDEA</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-2 bg-purple-500/20 text-purple-300 rounded-lg">
                      <FaFigma className="w-5 h-5 text-pink-500" />
                      <span className="text-sm font-medium">Figma</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-2 bg-purple-500/20 text-purple-300 rounded-lg">
                      <SiCanva className="w-5 h-5 text-purple-600" />
                      <span className="text-sm font-medium">Canva</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-2 bg-purple-500/20 text-purple-300 rounded-lg">
                      <SiVite className="w-5 h-5 text-purple-500" />
                      <span className="text-sm font-medium">Vite</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Education Section */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl shadow-lg p-8 border border-white/20">
              <div className="flex items-center mb-6">
                <FiBookOpen className="text-2xl font-bold text-white flex items-center" />
                <h2 className="text-2xl font-bold text-white flex items-center ml-2">
                  Học vấn
                </h2>
              </div>
              
              <div className="space-y-6">
                <div className={`flex items-start ${`${process.env.PUBLIC_URL}/images/hutech.png` ? "gap-4" : ""} pl-6`}>
                  {`${process.env.PUBLIC_URL}/images/hutech.png` && (
                    <img
                      src={`${process.env.PUBLIC_URL}/images/hutech.png`}
                      alt="Hutech Logo"
                      className="w-16 h-16 rounded-lg object-cover border border-cyan-500/30 bg-white/10 p-2"
                    />
                  )}
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h3 className="text-lg font-semibold text-white">Cử nhân Công nghệ thông tin</h3>
                      <span className="text-sm text-cyan-300 bg-cyan-500/20 px-2 py-1 rounded mt-1 sm:mt-0 self-start">2022-2026</span>
                    </div>
                    <p className="text-cyan-300 font-medium mb-1">Trường Đại học Công nghệ Thông tin - Hutech</p>
                    <p className="text-gray-300 text-sm mb-2">Chuyên ngành: Kỹ thuật phần mềm</p>
                    <p className="text-gray-300 text-sm">GPA: 3.30/4.00</p>
                  </div>
                </div>
                
              </div>
            </div>

            {/* Certificates Section */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl shadow-lg p-8 border border-white/20">
              <div className="flex items-center mb-6">
                <FiAward className="text-2xl font-bold text-white flex items-center" />
                <h2 className="text-2xl font-bold text-white flex items-center ml-2">
                  Chứng chỉ
                </h2>
              </div>
              
              <div className="space-y-6">
                {certificates.map((certificate) => (
                  <div key={certificate.id} className={`flex items-start ${certificate.image ? "gap-4" : ""} pl-6`}>
                    {certificate.image && (
                      <img
                        src={certificate.image}
                        alt={`${certificate.title} Certificate`}
                        className="w-16 h-16 rounded-lg object-cover border border-purple-500/30 bg-white/10 p-2"
                      />
                    )}
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                        <h3 className="text-lg font-semibold text-white">{certificate.title}</h3>
                        <span className="text-sm text-purple-300 bg-purple-500/20 px-2 py-1 rounded mt-1 sm:mt-0 self-start">
                          {certificate.date}
                        </span>
                      </div>
                      <p className="text-purple-300 font-medium mb-1">{certificate.issuer}</p>
                      {certificate.verified && (
                        <div className="flex items-center gap-2 mb-2">
                          <FiUserCheck className="w-4 h-4 text-green-400" />
                          <span className="text-green-400 text-sm">Đã xác thực</span>
                        </div>
                      )}
                      {certificate.credlyUrl && (
                        <a 
                          href={certificate.credlyUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm transition-colors"
                        >
                          <FiBookOpen className="w-4 h-4" />
                          Xem chứng chỉ
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience Section */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl shadow-lg p-8 border border-white/20">
              <div className="flex items-center mb-6">
                <FiUserCheck className="text-2xl font-bold text-white flex items-center" />
                <h2 className="text-2xl font-bold text-white flex items-center ml-2">
                  Kinh nghiệm
                </h2>
              </div>
              
              <div className="space-y-6">
                {personalInfo.experiences.map((experience) => (
                  <div key={experience.id} className={`flex items-start ${experience.logo ? "gap-4" : ""} pl-6`}>
                    {experience.logo && (
                      <img
                        src={experience.logo}
                        alt={`${experience.company} Logo`}
                        className={`w-16 h-16 rounded-lg object-cover border border-${experience.color}-500/30 bg-white/10 p-2`}
                      />
                    )}
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                        <h3 className="text-lg font-semibold text-white">{experience.position}</h3>
                        <span className={`text-sm text-${experience.color}-300 bg-${experience.color}-500/20 px-2 py-1 rounded mt-1 sm:mt-0 self-start`}>
                          {experience.duration}
                        </span>
                      </div>
                      <p className={`text-${experience.color}-300 font-medium mb-2`}>{experience.company}</p>
                      <ul className="text-gray-300 text-sm space-y-1">
                        {experience.responsibilities.map((responsibility, index) => (
                          <li key={index}>• {responsibility}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}