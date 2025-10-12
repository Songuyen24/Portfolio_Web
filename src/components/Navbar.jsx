import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { FiMenu, FiX, FiHome, FiEdit3, FiUser, FiMail } from "react-icons/fi";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems = [
    { path: '/', label: 'Trang chủ', icon: FiHome },
    { path: '/posts', label: 'Bài viết', icon: FiEdit3 },
    { path: '/about', label: 'Giới thiệu', icon: FiUser },
    { path: '/contact', label: 'Liên hệ', icon: FiMail },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100' 
        : 'bg-white shadow-md'
    }`}>
      <div className="max-w-6xl mx-auto px-4 lg:px-6">
        <div className="flex justify-between items-center py-3 lg:py-4">
          {/* Logo */}
          <Link 
            to="/" 
            className="text-xl lg:text-2xl font-bold text-cyan-600 hover:text-cyan-700 transition-colors duration-200 flex items-center space-x-2"
          >
            <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-sm lg:text-base">
              NS
            </div>
            <span className="hidden sm:block">Nguyễn Sơn</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3 lg:px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center space-x-2 ${
                    isActive(item.path)
                      ? 'bg-cyan-50 text-cyan-600 shadow-sm'
                      : 'text-gray-700 hover:text-cyan-600 hover:bg-gray-50'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <FiX className="w-6 h-6 text-gray-700" />
            ) : (
              <FiMenu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'max-h-96 pb-4' : 'max-h-0'
        }`}>
          <div className="space-y-2 pt-2 border-t border-gray-100">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                    isActive(item.path)
                      ? 'bg-cyan-50 text-cyan-600 border-l-4 border-cyan-600'
                      : 'text-gray-700 hover:text-cyan-600 hover:bg-gray-50'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
