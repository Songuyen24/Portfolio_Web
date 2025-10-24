export const projects = [
  {
    id: 0,
    title: "Portfolio website",
    description: "Website portfolio cá nhân được xây dựng bằng React và Spring Boot, với giao diện hiện đại và tích hợp Aurora background.",
    image: `${process.env.PUBLIC_URL}/images/project_shots/portfolio.png`,
    technologies: ["React","JavaScript"],
    githubLink: "https://github.com/Songuyen24/Portfolio_Web",
    liveLink: "https://songuyen24.github.io/Portfolio_Web",
    category: "Web Development",
    featured: true,
    icon: "FiBookOpen",
    gradient: "from-cyan-500 to-blue-500"
  },
  {
    id: 2,
    title: "Lynk - Chat Application",
    description: "Ứng dụng chat thời gian thực được xây dựng bằng Flutter và Firebase, với tính năng nhắn tin, gọi điện và thông báo.",
    image: `${process.env.PUBLIC_URL}/images/project_shots/lynk.png`,
    technologies: ["Flutter", "Firebase"],
    githubLink: "https://github.com/Songuyen24/Lynk.git",
    liveLink: "#",
    category: "Mobile Development",
    featured: true,
    icon: "FiMail",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    id: 3,
    title: "Dinenow - Đặt bàn trực tuyến",
    description: "Website đặt bàn nhà hàng trực tuyến với Spring Boot, ReactJS, PostgreSQL và Redis. Hỗ trợ quản lý đặt bàn và thanh toán.",
    image: `${process.env.PUBLIC_URL}/images/project_shots/dinenow.png`,
    technologies: ["Spring Boot", "ReactJS", "PostgreSQL", "Redis"],
    githubLink: ["https://github.com/MinhAnh-IT/DineNow-Backend","https://github.com/chamander2307/DineNow_UI"],
    liveLink: "#",
    category: "Web Development",
    featured: true,
    icon: "FiShoppingCart",
    gradient: "from-orange-500 to-red-500"
  },
  {
    id: 4,
    title: "Eduquest - Hệ thống kiểm tra trực tuyến",
    description: "Hệ thống giáo dục làm bài kiểm tra trực tuyến với Flutter (mobile), ReactJS (admin), Spring Boot và Redis. Chấm điểm tự động.",
    image: `${process.env.PUBLIC_URL}/images/project_shots/eduquest.png`,
    technologies: ["Flutter", "ReactJS", "Spring Boot", "Redis"],
    githubLink: ["https://github.com/MinhAnh-IT/EduQuest_API","https://github.com/MinhAnh-IT/EduQuest_UI","https://github.com/chamander2307/EduQuest_WEB.git"],
    liveLink: "#",
    category: "Full-Stack",
    featured: true,
    icon: "FiBookOpen",
    gradient: "from-yellow-500 to-orange-500"
  },
  
];
