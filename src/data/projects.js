export const projects = [
  {
    id: 0,
    title: "Portfolio website",
    description: "Website portfolio cá nhân được xây dựng bằng React và Spring Boot, với giao diện hiện đại và tích hợp Aurora background.",
    image: `${process.env.PUBLIC_URL}/images/project_shots/portfolio.png`,
    technologies: ["React","JavaScript"],
    githubLink: "https://github.com/Songuyen24/Portfolio_Web",
    liveLink: "#",
    category: "Web Development",
    featured: true,
    icon: "FiBookOpen",
    gradient: "from-cyan-500 to-blue-500"
  },
  {
    id: 2,
    title: "Lynk - Chat Application",
    description: "Ứng dụng chat thời gian thực được xây dựng bằng Flutter và Firebase, với tính năng nhắn tin, gọi điện và thông báo.",
    image: `${process.env.PUBLIC_URL}/images/project_shots/temp.jpg`,
    technologies: ["Flutter", "Firebase"],
    githubLink: "https://github.com/Songuyen24/Lynk.git",
    liveLink: "#",
    category: "Mobile Development",
    featured: true,
    icon: "FiMail",
    gradient: "from-purple-500 to-pink-500"
  },
];
