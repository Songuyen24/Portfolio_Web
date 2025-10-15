# 🌟 Portfolio Web - Nguyễn Phúc Sơn

Một trang web portfolio cá nhân hiện đại được xây dựng bằng React.js, thể hiện kỹ năng, dự án và blog cá nhân của tôi với thiết kế đẹp mắt và trải nghiệm người dùng tuyệt vời.

## ✨ Tính năng chính

- 🎨 **Thiết kế hiện đại**: Giao diện đẹp mắt với Glass Morphism và Aurora background
- 📱 **Responsive Design**: Tối ưu cho mọi thiết bị từ mobile đến desktop
- ⚡ **Performance cao**: Được tối ưu hóa cho tốc độ tải nhanh
- 🌙 **Dark Theme**: Chủ đề tối sang trọng với màu sắc gradient
- 🎭 **Animations**: Hiệu ứng chuyển động mượt mà với React components
- 📖 **Blog System**: Hệ thống blog tích hợp để chia sẻ kiến thức
- 🚀 **Projects Showcase**: Trưng bày các dự án nổi bật với chi tiết đầy đủ
- 📧 **Contact Form**: Form liên hệ với validation và feedback

## 🛠️ Công nghệ sử dụng

### Frontend
- **React.js** - Thư viện JavaScript cho UI
- **React Router** - Routing cho single page application
- **Tailwind CSS** - Framework CSS utility-first
- **React Icons** - Thư viện icon phong phú

### Styling & UI
- **Glass Morphism** - Hiệu ứng kính mờ hiện đại
- **Aurora Background** - Nền động gradient đẹp mắt
- **ShinyText** - Component text với hiệu ứng bóng
- **LogoLoop** - Carousel logo công nghệ tự động

### Deployment & Tools
- **Git** - Version control
- **VS Code** - Code editor
- **PostCSS** - CSS processing
- **npm** - Package manager

## 🚀 Cài đặt và chạy dự án

### Yêu cầu hệ thống
- Node.js (phiên bản 14 trở lên)
- npm hoặc yarn
- Git

### Bước 1: Clone repository
```bash
git clone https://github.com/Songuyen24/Portfolio_Web.git
cd Portfolio_Web
```

### Bước 2: Cài đặt dependencies
```bash
npm install
```

### Bước 3: Chạy development server
```bash
npm start
```

Ứng dụng sẽ chạy tại `http://localhost:3000`

### Bước 4: Build cho production
```bash
npm run build
```

## 📁 Cấu trúc dự án

```
porfolio_web/
├── public/
│   ├── images/           # Hình ảnh tĩnh
│   ├── index.html        # HTML template
│   └── manifest.json     # Web app manifest
├── src/
│   ├── assets/
│   │   ├── images/       # Hình ảnh assets
│   │   └── styles/       # CSS files
│   ├── components/
│   │   ├── EnhancedMap.jsx
│   │   ├── Footer.jsx
│   │   ├── MapComponent.jsx
│   │   ├── Navbar.jsx
│   │   ├── reactbits/    # Custom UI components
│   │   └── posts/        # Blog post components
│   ├── data/
│   │   ├── information.js  # Thông tin cá nhân
│   │   ├── posts.js       # Dữ liệu bài viết
│   │   └── projects.js    # Dữ liệu dự án
│   ├── pages/
│   │   ├── About.jsx      # Trang giới thiệu
│   │   ├── Contact.jsx    # Trang liên hệ
│   │   ├── Home.jsx       # Trang chủ
│   │   ├── PostDetail.jsx # Chi tiết bài viết
│   │   └── Posts.jsx      # Danh sách bài viết
│   ├── App.js            # Main App component
│   └── index.js          # Entry point
├── package.json          # Dependencies và scripts
└── tailwind.config.js    # Cấu hình Tailwind CSS
```

## 🎯 Các trang chính

### 🏠 Trang chủ (Home)
- Hero section với thông tin cá nhân
- Giới thiệu bản thân
- Showcase công nghệ sử dụng
- Dự án nổi bật (top 3)
- Bài viết mới nhất

### 👤 Giới thiệu (About)
- Thông tin chi tiết về bản thân
- Kỹ năng và chuyên môn
- Kinh nghiệm làm việc
- Học vấn và chứng chỉ

### 📝 Blog (Posts)
- Danh sách bài viết theo category
- Tìm kiếm và lọc bài viết
- Chi tiết bài viết với syntax highlighting
- Thời gian đọc ước tính

### 🚀 Dự án (Projects)
- Showcase các dự án cá nhân
- Thông tin chi tiết công nghệ
- Link demo và source code
- Hình ảnh và mô tả dự án

### 📧 Liên hệ (Contact)
- Form liên hệ với validation
- Thông tin liên hệ cá nhân
- Liên kết mạng xã hội
- Bản đồ vị trí

## 🎨 Tùy chỉnh

### Thay đổi thông tin cá nhân
Chỉnh sửa file `src/data/information.js`:
```javascript
export const personalInfo = {
  name: "Tên của bạn",
  title: "Chức danh",
  email: "email@example.com",
  // ... các thông tin khác
};
```

### Thêm dự án mới
Chỉnh sửa file `src/data/projects.js`:
```javascript
export const projects = [
  {
    id: 1,
    title: "Tên dự án",
    description: "Mô tả dự án",
    technologies: ["React", "Node.js"],
    // ... thông tin khác
  }
];
```

### Thêm bài viết blog
Chỉnh sửa file `src/data/posts.js` và tạo component tương ứng trong `src/components/posts/`.

## 🌟 Tính năng nổi bật

### Glass Morphism Design
- Thiết kế hiện đại với hiệu ứng kính mờ
- Backdrop blur cho độ sâu và tầng lớp
- Gradient borders và shadows

### Aurora Background
- Nền động với hiệu ứng Aurora
- Màu sắc gradient tùy chỉnh
- Animation mượt mà và thu hút

### Interactive Components
- Hover effects trên các elements
- Smooth transitions
- Loading states và feedback

### SEO Optimized
- Meta tags phù hợp
- Structured data
- Performance optimization

## 📊 Performance

- ⚡ **Lighthouse Score**: 95+
- 🚀 **First Contentful Paint**: < 1.5s
- 📱 **Mobile Friendly**: 100%
- ♿ **Accessibility**: AA compliant

## 🤝 Đóng góp

Mọi đóng góp đều được chào đón! Để đóng góp:

1. Fork repository
2. Tạo feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Tạo Pull Request

## 📄 License

Dự án này được phân phối dưới giấy phép MIT. Xem file `LICENSE` để biết thêm chi tiết.

## 📞 Liên hệ

**Nguyễn Phúc Sơn**
- 📧 Email: [your-email@example.com]
- 🌐 Website: [https://your-portfolio.com]
- 💼 LinkedIn: [linkedin.com/in/your-profile]
- 🐙 GitHub: [github.com/Songuyen24]

---

⭐ **Nếu dự án này hữu ích cho bạn, hãy cho một star nhé!** ⭐

## 🙏 Cảm ơn

Cảm ơn tất cả những ai đã đóng góp và hỗ trợ dự án này!

---

*Được xây dựng với ❤️ bởi Nguyễn Phúc Sơn*