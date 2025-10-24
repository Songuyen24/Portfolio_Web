export const personalInfo = {
  // Thông tin cơ bản
  name: "Nguyễn Phúc Sơn",
  title: "Full-Stack Developer",
  experience: "x năm kinh nghiệm",
  avatar: `${process.env.PUBLIC_URL}/images/avatar.jpg`,
  date: "27/03/2004",
  phone: "+84 123 456 789",
  address: "Hồ Chí Minh, Việt Nam",

  //Học vấn
  education: {
    school: "Trường Đại học Công nghệ Thông tin - Hutech",
    degree: "Cử nhân Công nghệ thông tin",
    field: "Kỹ thuật phần mềm",
    duration: "2022-2026",
    gpa: "3.30/4.00"
  },
  
  
  // Mạng xã hội
  social: {
    email: "npson2703@gmail.com", 
    github: "https://github.com/Songuyen24",
    linkedin: "https://www.linkedin.com/in/sơn-nguyễn-2a18b225a",
    facebook: "",
    twitter: "",
    tiktok: "",
    instagram: ""
  },
  
  // Giới thiệu
  bio: {
    short: "Xin chào! Tôi là Nguyễn Sơn, một lập trình viên đam mê công nghệ và phát triển web.",
    long: [
      "Lập trình viên full-stack với đam mê tạo ra những trải nghiệm người dùng tuyệt vời thông qua code sạch và thiết kế đẹp.",
      "Chuyên về React, Spring Boot và các công nghệ web hiện đại. Luôn học hỏi và áp dụng công nghệ mới để giải quyết vấn đề một cách sáng tạo."
    ]
  },
  
  // Kỹ năng
  skills: {
    frontend: ['React', 'JavaScript', 'Tailwind CSS', 'Vite'],
    backend: ['Node.js', 'MySQL', 'API Design', 'PostGreSQL', 'Firebase', 'Spring Boot'],
    tools: ['Git', 'Canva', 'Figma', 'Photoshop']
  },

  // Dự án học tập
  experiences: [
    {
      id: 1,
      position: "Lynk - Ứng dụng mạng xã hội",
      company: "Dự án cá nhân",
      duration: "2025",
      logo: "",
      responsibilities: [
        "Phát triển ứng dụng di động với Flutter",
        "Tích hợp Firebase cho authentication và real-time database",
        "Xây dựng tính năng chat, đăng bài và tương tác xã hội",
        "Quản lý state với Provider/Bloc pattern"
      ],
      color: "blue"
    },
    {
      id: 2,
      position: "Portfolio Website",
      company: "Dự án cá nhân",
      duration: "2025",
      logo: "",
      responsibilities: [
        "Xây dựng website portfolio cá nhân với React",
        "Thiết kế giao diện hiện đại với Tailwind CSS",
        "Tối ưu hóa SEO và hiệu suất tải trang",
        "Tích hợp blog và quản lý nội dung"
      ],
      color: "green"
    },
    {
      id: 3,
      position: "Dinenow - Website đặt bàn trực tuyến",
      company: "Dự án nhóm",
      duration: "2024",
      logo: "",
      responsibilities: [
        "Phát triển backend với Spring Boot và PostgreSQL",
        "Xây dựng giao diện người dùng với ReactJS",
        "Tích hợp Redis để tối ưu hiệu suất",
        "Quản lý đặt bàn và thanh toán trực tuyến"
      ],
      color: "orange"
    },
    {
      id: 4,
      position: "Eduquest - Hệ thống kiểm tra trực tuyến",
      company: "Dự án nhóm",
      duration: "2024",
      logo: "",
      responsibilities: [
        "Phát triển ứng dụng di động với Flutter",
        "Xây dựng web admin với ReactJS",
        "Backend API với Spring Boot và Redis",
        "Hệ thống làm bài thi và chấm điểm tự động"
      ],
      color: "yellow"
    }
  ],
};