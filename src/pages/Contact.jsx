import { useState } from "react";
import { FiMail, FiPhone, FiMapPin, FiSend, FiUser, FiMessageSquare, FiGithub, FiLinkedin, FiFacebook, FiInstagram, FiCheckCircle, FiClock, FiMessageCircle } from "react-icons/fi";
import { SiTiktok } from "react-icons/si";
import EnhancedMap from "../components/EnhancedMap";
import { personalInfo } from "../data/information";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Vui lòng nhập họ tên';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Vui lòng nhập email';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email không hợp lệ';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Vui lòng nhập nội dung tin nhắn';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Tin nhắn phải có ít nhất 10 ký tự';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Send form data to Formspree
      const response = await fetch('https://formspree.io/f/xovkgyre', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message
        })
      });
      
      if (response.ok) {
        // Reset form
        setFormData({
          name: '',
          email: '',
          message: ''
        });
        
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 5000);
      } else {
        throw new Error('Failed to send message');
      }
      
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Có lỗi xảy ra khi gửi tin nhắn. Vui lòng thử lại sau.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen py-12 relative">
      <div className="max-w-6xl mx-auto px-4 lg:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Liên hệ với tôi
          </h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Hãy kết nối với tôi! Tôi luôn sẵn sàng thảo luận về các dự án mới, 
            cơ hội hợp tác hoặc chỉ đơn giản là trò chuyện về công nghệ.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-center mb-6">
                <FiMessageCircle className="w-6 h-6 text-cyan-400 mr-3" />
                <h2 className="text-xl font-bold text-white">Thông tin liên hệ</h2>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center group">
                  <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-cyan-200 transition-colors group-hover:scale-110 duration-200">
                    <FiMail className="w-5 h-5 text-cyan-600" />
                  </div>
                  <div>
                    <p className="font-medium text-white">Email</p>
                    <a href={`mailto:${personalInfo.social.email}`} className="text-gray-200 hover:text-cyan-400 transition-colors break-all">
                      {personalInfo.social.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center group">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-green-200 transition-colors group-hover:scale-110 duration-200">
                    <FiPhone className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium text-white">Điện thoại</p>
                    <a href={`tel:${personalInfo.phone}`} className="text-gray-200 hover:text-green-400 transition-colors">
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center group">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-purple-200 transition-colors group-hover:scale-110 duration-200">
                    <FiMapPin className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-medium text-white">Địa chỉ</p>
                    <p className="text-gray-200">{personalInfo.address}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h3 className="text-lg font-bold text-white mb-4">Kết nối với tôi</h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {/* GitHub */}
                {personalInfo.social?.github && (
                  <a
                    href={personalInfo.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 bg-gray-100 hover:bg-gray-200 rounded-lg transition-all duration-200 group hover:scale-110 shadow-md hover:shadow-lg"
                    title="GitHub"
                  >
                    <FiGithub className="w-5 h-5 text-gray-700 group-hover:text-gray-900" />
                  </a>
                )}

                {/* LinkedIn */}
                {personalInfo.social?.linkedin && personalInfo.social.linkedin ? (
                  <a
                    href={personalInfo.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 bg-blue-100 hover:bg-blue-200 rounded-lg transition-all duration-200 group hover:scale-110 shadow-md hover:shadow-lg"
                    title="LinkedIn"
                  >
                    <FiLinkedin className="w-5 h-5 text-blue-700 group-hover:text-blue-900" />
                  </a>
                ) : (
                  <a
                    href="https://linkedin.com/in/songuyen24"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 bg-blue-100 hover:bg-blue-200 rounded-lg transition-all duration-200 group hover:scale-110 shadow-md hover:shadow-lg"
                    title="LinkedIn"
                  >
                    <FiLinkedin className="w-5 h-5 text-blue-700 group-hover:text-blue-900" />
                  </a>
                )}

                {/* Facebook */}
                {personalInfo.social?.facebook && personalInfo.social.facebook ? (
                  <a
                    href={personalInfo.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 bg-blue-100 hover:bg-blue-200 rounded-lg transition-all duration-200 group hover:scale-110 shadow-md hover:shadow-lg"
                    title="Facebook"
                  >
                    <FiFacebook className="w-5 h-5 text-blue-700 group-hover:text-blue-900" />
                  </a>
                ) : (
                  <a
                    href="https://facebook.com/songuyen24"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 bg-blue-100 hover:bg-blue-200 rounded-lg transition-all duration-200 group hover:scale-110 shadow-md hover:shadow-lg"
                    title="Facebook"
                  >
                    <FiFacebook className="w-5 h-5 text-blue-700 group-hover:text-blue-900" />
                  </a>
                )}

                {/* Instagram */}
                {personalInfo.social?.instagram && personalInfo.social.instagram ? (
                  <a
                    href={personalInfo.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 bg-pink-100 hover:bg-pink-200 rounded-lg transition-all duration-200 group hover:scale-110 shadow-md hover:shadow-lg"
                    title="Instagram"
                  >
                    <FiInstagram className="w-5 h-5 text-pink-700 group-hover:text-pink-900" />
                  </a>
                ) : (
                  <a
                    href="https://instagram.com/songuyen24"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 bg-pink-100 hover:bg-pink-200 rounded-lg transition-all duration-200 group hover:scale-110 shadow-md hover:shadow-lg"
                    title="Instagram"
                  >
                    <FiInstagram className="w-5 h-5 text-pink-700 group-hover:text-pink-900" />
                  </a>
                )}

                {/* TikTok */}
                <a
                  href="https://tiktok.com/@songuyen24"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 bg-slate-100 hover:bg-slate-200 rounded-lg transition-all duration-200 group hover:scale-110 shadow-md hover:shadow-lg"
                  title="TikTok"
                >
                  <SiTiktok className="w-5 h-5 text-slate-700 group-hover:text-slate-900" />
                </a>
              </div>
              

            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl shadow-lg p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="text-2xl font-bold text-white mb-6">Gửi tin nhắn</h2>
              
              {/* Success Message */}
              {showSuccess && (
                <div className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg flex items-center space-x-3 animate-bounce">
                  <FiCheckCircle className="w-6 h-6 text-green-400 animate-pulse" />
                  <div>
                    <p className="font-medium text-green-300">Tin nhắn đã được gửi thành công!</p>
                    <p className="text-sm text-green-200">Cảm ơn bạn đã liên hệ. Tôi sẽ phản hồi sớm nhất có thể.</p>
                  </div>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-200 mb-2">
                      Họ tên *
                    </label>
                    <div className="relative">
                      <FiUser className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full pl-10 pr-4 py-3 border ${
                          errors.name ? 'border-red-500 bg-red-50/10' : 'border-gray-300'
                        } rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-all duration-200 hover:border-cyan-400 bg-white/5 backdrop-blur-sm`}
                        placeholder="Nhập họ tên của bạn"
                      />
                    </div>
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-400 animate-pulse flex items-center">
                        <span className="w-1 h-1 bg-red-400 rounded-full mr-2"></span>
                        {errors.name}
                      </p>
                    )}
                  </div>
                  
                  {/* Email Input */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-2">
                      Email *
                    </label>
                    <div className="relative">
                      <FiMail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full pl-10 pr-4 py-3 border ${
                          errors.email ? 'border-red-500 bg-red-50/10' : 'border-gray-300'
                        } rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-all duration-200 hover:border-cyan-400 bg-white/5 backdrop-blur-sm`}
                        placeholder="Nhập email của bạn"
                      />
                    </div>
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-400 animate-pulse flex items-center">
                        <span className="w-1 h-1 bg-red-400 rounded-full mr-2"></span>
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Message Input */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-200 mb-2">
                    Nội dung *
                  </label>
                  <div className="relative">
                    <FiMessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full pl-10 pr-4 py-3 border ${
                        errors.message ? 'border-red-500 bg-red-50/10' : 'border-gray-300'
                      } rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-all duration-200 resize-none hover:border-cyan-400 bg-white/5 backdrop-blur-sm`}
                      placeholder="Nhập nội dung tin nhắn của bạn..."
                    />
                  </div>
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-400 animate-pulse flex items-center">
                      <span className="w-1 h-1 bg-red-400 rounded-full mr-2"></span>
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-medium py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2 transform hover:scale-105 disabled:hover:scale-100 shadow-lg hover:shadow-xl"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Đang gửi...</span>
                    </>
                  ) : (
                    <>
                      <FiSend className="w-5 h-5" />
                      <span>Gửi tin nhắn</span>
                    </>
                  )}
                </button>
              </form>
            </div>
        
            {/* Interactive Map */}
            <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-xl shadow-lg p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-center mb-6">
                <FiMapPin className="w-6 h-6 text-cyan-400 mr-3 animate-pulse" />
                <h2 className="text-2xl font-bold text-white">Vị trí và Bản đồ</h2>
              </div>
              <div className="rounded-lg overflow-hidden shadow-inner">
                <EnhancedMap />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}