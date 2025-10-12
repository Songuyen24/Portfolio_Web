import { FiUser, FiMapPin, FiMail, FiPhone, FiGithub, FiLinkedin } from "react-icons/fi";
import { personalInfo } from "../data/information";

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
            {personalInfo.bio.short}
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
              <h3 className="text-xl font-bold text-gray-800 mb-2">{personalInfo.name}</h3>
              <p className="text-cyan-600 font-medium">{personalInfo.title}</p>
              <p className="text-gray-500 text-sm mt-1">{personalInfo.experience}</p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <FiMapPin className="w-5 h-5 text-gray-500 mr-3" />
                <span className="text-gray-700">{personalInfo.contact.address}</span>
              </div>
              <div className="flex items-center">
                <FiMail className="w-5 h-5 text-gray-500 mr-3" />
                <span className="text-gray-700">{personalInfo.contact.email}</span>
              </div>
              <div className="flex items-center">
                <FiPhone className="w-5 h-5 text-gray-500 mr-3" />
                <span className="text-gray-700">{personalInfo.contact.phone}</span>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Kết nối với tôi</h3>
              <div className="flex justify-center space-x-4">
                {personalInfo.social.github && (
                  <a 
                    href={personalInfo.social.github} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-100 rounded-lg hover:bg-gray-800 hover:text-white transition-colors group"
                    title="GitHub"
                  >
                    <FiGithub className="w-5 h-5" />
                  </a>
                )}
                {personalInfo.social.linkedin && (
                  <a 
                    href={personalInfo.social.linkedin} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-100 rounded-lg hover:bg-blue-600 hover:text-white transition-colors group"
                    title="LinkedIn"
                  >
                    <FiLinkedin className="w-5 h-5" />
                  </a>
                )}
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
                  {personalInfo.skills.frontend.map((skill) => (
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
                  {personalInfo.skills.backend.map((skill) => (
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
                  {personalInfo.skills.tools.map((skill) => (
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
            {personalInfo.bio.long.map((paragraph, index) => (
              <p key={index} className={index < personalInfo.bio.long.length - 1 ? "mb-4" : ""}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}