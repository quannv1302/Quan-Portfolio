import { Project, Skill, ProjectCategory } from './types';
import {
  Layout,
  Truck,
  BookOpen,
  Briefcase,
  Monitor,
  PenTool,
  Figma,
  Users
} from 'lucide-react';

export const SKILLS: Skill[] = [
  { name: "Figma", level: 95 },
  { name: "Adobe Photoshop", level: 85 },
  { name: "Adobe illustrator", level: 80 },
  { name: "Wireframing", level: 90 },
  { name: "Prototyping", level: 92 },
  { name: "Design System", level: 88 },
  { name: "HTML/CSS Basic", level: 70 },
  { name: "AI Prompting", level: 90 },
];

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "LogiTrack - Hệ thống vận tải",
    category: "Logistics",
    thumbnail: "https://picsum.photos/id/20/800/600",
    shortDescription: "Nền tảng quản lý đội xe và tối ưu hóa lộ trình giao hàng thời gian thực.",
    fullDescription: "LogiTrack là một giải pháp SaaS toàn diện giúp các doanh nghiệp vận tải quản lý đội xe của họ. Dự án tập trung vào việc hiển thị bản đồ trực quan, bảng điều khiển (dashboard) phức tạp nhưng dễ hiểu để theo dõi trạng thái đơn hàng. Tôi chịu trách nhiệm chính về UX Research và UI Design cho cả Web App và Mobile App tài xế.",
    technologies: ["Figma", "Auto Layout", "Google Maps Style"],
    screens: [
      "https://picsum.photos/id/119/800/600",
      "https://picsum.photos/id/160/800/600",
      "https://picsum.photos/id/180/800/600"
    ],
    date: "01/2023 - 06/2023",
    client: "LogiVina Corp"
  },
  {
    id: "2",
    title: "EduLearn LMS",
    category: "Giáo dục",
    thumbnail: "https://picsum.photos/id/24/800/600",
    shortDescription: "Hệ thống quản lý học tập trực tuyến dành cho các trường trung học.",
    fullDescription: "EduLearn tập trung vào trải nghiệm học tập gamification để tăng sự hứng thú cho học sinh. Giao diện được thiết kế tươi sáng, thân thiện và dễ điều hướng. Các tính năng bao gồm lớp học ảo, nộp bài tập, và theo dõi tiến độ học tập.",
    technologies: ["Adobe XD", "User Flow", "Wireframing"],
    screens: [
      "https://picsum.photos/id/201/800/600",
      "https://picsum.photos/id/219/800/600",
      "https://picsum.photos/id/250/800/600"
    ],
    date: "08/2023 - 12/2023",
    client: "EduTech Solutions"
  },
  {
    id: "3",
    title: "GreenLife Landing Page",
    category: "Landing page",
    thumbnail: "https://picsum.photos/id/28/800/600",
    shortDescription: "Trang giới thiệu sản phẩm organic với tỷ lệ chuyển đổi cao.",
    fullDescription: "Thiết kế Landing page cho chiến dịch ra mắt dòng sản phẩm mới của GreenLife. Mục tiêu là kể câu chuyện thương hiệu thông qua hình ảnh chất lượng cao và typography hiện đại, dẫn dắt người dùng đến hành động mua hàng.",
    technologies: ["Figma", "Landing Page Design", "Typography"],
    screens: [
      "https://picsum.photos/id/301/800/600",
      "https://picsum.photos/id/319/800/600"
    ],
    date: "01/2024 - 02/2024",
    client: "GreenLife Vietnam"
  },
  {
    id: "4",
    title: "HRM Pro - Quản lý nhân sự",
    category: "Quản lý công ty",
    thumbnail: "https://picsum.photos/id/48/800/600",
    shortDescription: "Phần mềm quản lý nhân sự, chấm công và tính lương tự động.",
    fullDescription: "HRM Pro giải quyết bài toán phức tạp về quản lý dữ liệu nhân sự lớn. Thách thức lớn nhất là thiết kế các bảng dữ liệu (data tables) phức tạp sao cho dễ nhìn và dễ thao tác trên nhiều kích thước màn hình.",
    technologies: ["Figma", "Design System", "Component Library"],
    screens: [
      "https://picsum.photos/id/401/800/600",
      "https://picsum.photos/id/415/800/600"
    ],
    date: "03/2022 - 09/2022",
    client: "TechCorp"
  },
  {
    id: "5",
    title: "ShipFast Dashboard",
    category: "Logistics",
    thumbnail: "https://picsum.photos/id/56/800/600",
    shortDescription: "Bảng điều khiển theo dõi đơn hàng quốc tế.",
    fullDescription: "Dự án redesign lại hệ thống tracking cũ kỹ. Tập trung vào việc visualize dữ liệu (Data Visualization) giúp các manager đưa ra quyết định nhanh chóng.",
    technologies: ["Sketch", "Data Viz", "Dashboard UI"],
    screens: [
      "https://picsum.photos/id/510/800/600",
      "https://picsum.photos/id/512/800/600"
    ],
    date: "10/2022 - 12/2022",
    client: "FastShip Intl"
  },
  {
    id: "6",
    title: "English Kids App",
    category: "Giáo dục",
    thumbnail: "https://picsum.photos/id/60/800/600",
    shortDescription: "Ứng dụng học tiếng Anh cho trẻ em 3-6 tuổi.",
    fullDescription: "Ứng dụng mobile với nhiều màu sắc, nhân vật hoạt hình và tương tác chạm vuốt đơn giản phù hợp với trẻ nhỏ. UX được tối ưu cho người dùng không biết đọc.",
    technologies: ["Figma", "Mobile Design", "Illustration"],
    screens: [
      "https://picsum.photos/id/600/800/600",
      "https://picsum.photos/id/611/800/600"
    ],
    date: "05/2023 - 07/2023",
    client: "Kids Edu"
  }
];

export const CATEGORIES: ('Tất cả' | ProjectCategory)[] = [
  'Tất cả',
  'Logistics',
  'Giáo dục',
  'Landing page',
  'Quản lý công ty'
];