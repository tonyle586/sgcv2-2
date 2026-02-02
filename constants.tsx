import { Translation, ServiceItem, ProjectItem } from './types';
import { 
  Globe, Server, Mail, Layout, Code, Shield, Wrench, 
  Bot, Cpu, QrCode, Smartphone, FileSpreadsheet, 
  Video, Lightbulb 
} from 'lucide-react';

export const CONTENT: Record<string, Translation> = {
  vn: {
    nav: {
      home: "Trang Chủ",
      about: "Về SGC",
      services: "Dịch Vụ",
      portfolio: "Dự Án",
      contact: "Liên Hệ",
    },
    common: {
      getStarted: "Bắt Đầu Ngay",
      learnMore: "Tìm Hiểu Thêm",
      contactUs: "Liên Hệ Tư Vấn",
      viewProject: "Xem Chi Tiết",
      sendMessage: "Gửi Tin Nhắn",
      name: "Họ và Tên",
      email: "Email Doanh Nghiệp",
      phone: "Số Điện Thoại",
      message: "Nội Dung Cần Tư Vấn",
      sending: "Đang gửi...",
      copyright: "Bản quyền thuộc về SGC - Reliable Since 2001.",
      language: "Ngôn ngữ",
      theme: "Giao diện",
    },
    home: {
      heroTitle: "Giải Pháp Công Nghệ & AI",
      heroSubtitle: "Đột Phá Cho Doanh Nghiệp Tương Lai",
      heroDescription: "SGC cung cấp hệ sinh thái dịch vụ số toàn diện: Từ WordPress chuyên nghiệp đến Trí tuệ nhân tạo (AI) tiên tiến và Tự động hóa quy trình.",
      whyChooseUs: "Tại Sao Chọn SGC?",
      whyChooseUsDesc: "Chúng tôi kết hợp công nghệ lõi vững chắc với tư duy đổi mới sáng tạo.",
    },
    about: {
      title: "Về SGC - Reliable Since 2001",
      subtitle: "Đối Tác Tin Cậy Trên Hành Trình Chuyển Đổi Số",
      missionTitle: "Sứ Mệnh",
      missionDesc: "Phổ cập công nghệ cao, đặc biệt là AI và Automation, giúp doanh nghiệp SME Việt Nam tối ưu vận hành và bứt phá doanh thu.",
      visionTitle: "Tầm Nhìn 2030",
      visionDesc: "Trở thành Top 10 đơn vị cung cấp giải pháp Value-Added Services và AI ứng dụng cho các SME tại TpHCM.",
      techEdgeTitle: "Lợi Thế Công Nghệ",
      techEdgeDesc: "Hạ tầng Cloud mạnh mẽ, đội ngũ kỹ sư >10 năm kinh nghiệm và quy trình bảo mật chuẩn quốc tế.",
    },
    services: {
      title: "Hệ Sinh Thái Dịch Vụ",
      subtitle: "Giải pháp toàn diện từ hạ tầng đến ứng dụng thông minh",
      categories: {
        domain: "Tên miền & Hạ tầng",
        wordpress: "WordPress & Web App",
        ai: "Giải pháp AI & Chatbot",
        qr: "Dịch vụ QR Code",
        automation: "Tự động hóa Form",
        other: "Dịch vụ khác",
      },
    },
    portfolio: {
      title: "Dự Án Tiêu Biểu",
      subtitle: "Kết quả thực tế từ những giải pháp chúng tôi cung cấp",
    },
    contact: {
      title: "Liên Hệ Với SGC",
      subtitle: "Sẵn sàng lắng nghe và giải quyết bài toán của bạn",
      office: "Văn phòng TP.HCM",
      formTitle: "Gửi Yêu Cầu Tư Vấn",
    },
    thankYou: {
      title: "Cảm Ơn Bạn!",
      message: "Chúng tôi đã nhận được thông tin. Đội ngũ tư vấn SGC sẽ liên hệ lại trong vòng 24h làm việc.",
      backHome: "Quay Về Trang Chủ",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About Us",
      services: "Services",
      portfolio: "Portfolio",
      contact: "Contact",
    },
    common: {
      getStarted: "Get Started",
      learnMore: "Learn More",
      contactUs: "Contact Us",
      viewProject: "View Project",
      sendMessage: "Send Message",
      name: "Full Name",
      email: "Business Email",
      phone: "Phone Number",
      message: "How can we help?",
      sending: "Sending...",
      copyright: "All rights reserved by SGC - Reliable Since 2001.",
      language: "Language",
      theme: "Theme",
    },
    home: {
      heroTitle: "AI & Tech Solutions",
      heroSubtitle: "Powering the Next Gen Enterprise",
      heroDescription: "SGC delivers a comprehensive digital ecosystem: From professional WordPress development to advanced AI and Process Automation.",
      whyChooseUs: "Why Choose SGC?",
      whyChooseUsDesc: "We combine solid core technology with innovative thinking.",
    },
    about: {
      title: "About SGC - Reliable Since 2001",
      subtitle: "Your Trusted Partner in Digital Transformation",
      missionTitle: "Our Mission",
      missionDesc: "Democratizing high-tech, especially AI and Automation, to help SME businesses in Vietnam optimize operations and boost revenue.",
      visionTitle: "Vision 2030",
      visionDesc: "To become a Top 10 provider of Value-Added Services and Applied AI solutions for SMEs in Ho Chi Minh City.",
      techEdgeTitle: "Technological Edge",
      techEdgeDesc: "Robust Cloud infrastructure, engineers with 10+ years of experience, and international security standards.",
    },
    services: {
      title: "Our Services",
      subtitle: "Comprehensive solutions from infrastructure to intelligent applications",
      categories: {
        domain: "Domain & Infrastructure",
        wordpress: "WordPress & Web Apps",
        ai: "AI Solutions & Chatbots",
        qr: "QR Code Services",
        automation: "Form Automation",
        other: "Other Services",
      },
    },
    portfolio: {
      title: "Featured Projects",
      subtitle: "Real results from the solutions we provide",
    },
    contact: {
      title: "Contact SGC",
      subtitle: "Ready to listen and solve your business challenges",
      office: "Ho Chi Minh City Office",
      formTitle: "Request a Consultation",
    },
    thankYou: {
      title: "Thank You!",
      message: "We have received your information. The SGC team will contact you within 24 working hours.",
      backHome: "Back to Home",
    },
  },
};

export const SERVICES_LIST = (lang: 'vn' | 'en'): ServiceItem[] => {
  const isVN = lang === 'vn';
  return [
    {
      id: 'infra',
      title: isVN ? 'Tên miền & Hạ tầng' : 'Domain & Infrastructure',
      description: isVN ? 'Đăng ký tên miền .vn, Web Hosting tốc độ cao, Email Doanh nghiệp.' : '.vn Domain registration, High-speed Web Hosting, Business Email.',
      iconName: 'Server',
      features: isVN 
        ? ['Tên miền .vn định danh thương hiệu', 'Cloud Hosting SSD/NVMe', 'Email Business (Google/cPanel)']
        : ['.vn Brand Identity Domains', 'SSD/NVMe Cloud Hosting', 'Business Email (Google/cPanel)'],
    },
    {
      id: 'wordpress',
      title: isVN ? 'WordPress & Phát triển' : 'WordPress & Development',
      description: isVN ? 'Thiết kế Website/Landing Page chuẩn SEO, tích hợp AI.' : 'SEO-standard Website/Landing Page design, AI integrated.',
      iconName: 'Layout',
      features: isVN
        ? ['Thiết kế UI/UX hiện đại', 'Web App chuyên sâu', 'Bảo mật & Bảo trì định kỳ']
        : ['Modern UI/UX Design', 'Advanced Web Apps', 'Security & Maintenance'],
    },
    {
      id: 'ai',
      title: isVN ? 'Giải pháp AI' : 'AI Solutions',
      description: isVN ? 'Chatbot thông minh, Trợ lý ảo AI riêng cho CEO.' : 'Smart Chatbots, Private AI Assistants for CEOs.',
      iconName: 'Bot',
      features: isVN
        ? ['AI Chatbot CSKH 24/7', 'Private AI Assistant', 'Phân tích dữ liệu tự động']
        : ['24/7 AI Customer Support', 'Private AI Assistant', 'Automated Data Analysis'],
    },
    {
      id: 'qr',
      title: isVN ? 'Dịch vụ QR Code' : 'QR Code Services',
      description: isVN ? 'Tạo QR tùy chỉnh, quản lý chiến dịch Marketing qua QR.' : 'Custom QR generation, QR Marketing campaign management.',
      iconName: 'QrCode',
      features: isVN
        ? ['QR Code nhận diện thương hiệu', 'Smart QR chuyển hướng động', 'Thống kê lượt quét']
        : ['Branded QR Codes', 'Dynamic Smart QR', 'Scan Analytics'],
    },
    {
      id: 'automation',
      title: isVN ? 'Tự động hóa Form' : 'Form Automation',
      description: isVN ? 'Xây dựng biểu mẫu đa năng, thu thập và xử lý dữ liệu.' : 'Versatile form building, data collection and processing.',
      iconName: 'FileSpreadsheet',
      features: isVN
        ? ['Biểu mẫu khảo sát/đăng ký', 'Tự động hóa Google Sheets/CRM', 'Thông báo Real-time']
        : ['Survey/Registration Forms', 'Google Sheets/CRM Automation', 'Real-time Notifications'],
    },
    {
      id: 'other',
      title: isVN ? 'Dịch vụ khác' : 'Other Services',
      description: isVN ? 'Media Production, Tư vấn giải pháp số.' : 'Media Production, Digital Solution Consulting.',
      iconName: 'Lightbulb',
      features: isVN
        ? ['Sản xuất Media/Video', 'Tư vấn chuyển đổi số', 'Đào tạo nội bộ']
        : ['Media/Video Production', 'Digital Transformation Consulting', 'Internal Training'],
    },
  ];
};

export const PROJECTS = (lang: 'vn' | 'en'): ProjectItem[] => {
  const isVN = lang === 'vn';
  return [
    {
      id: 'p1',
      title: 'E-commerce AI Integration',
      category: isVN ? 'Thương mại điện tử' : 'E-commerce',
      description: isVN ? 'Tích hợp gợi ý sản phẩm bằng AI giúp tăng 30% doanh thu.' : 'Integrated AI product recommendations boosting revenue by 30%.',
      image: 'https://picsum.photos/seed/tech1/600/400',
      result: isVN ? '+30% Doanh thu' : '+30% Revenue',
    },
    {
      id: 'p2',
      title: 'Smart Logistics QR',
      category: 'Logistics',
      description: isVN ? 'Hệ thống QR Code quản lý kho vận thời gian thực.' : 'Real-time warehouse management QR Code system.',
      image: 'https://picsum.photos/seed/tech2/600/400',
      result: isVN ? 'Giảm 50% lỗi vận hành' : '-50% Ops Errors',
    },
    {
      id: 'p3',
      title: 'EduTech Platform',
      category: 'Education',
      description: isVN ? 'Nền tảng học trực tuyến trên hạ tầng Cloud hiệu năng cao.' : 'Online learning platform on high-performance Cloud infrastructure.',
      image: 'https://picsum.photos/seed/tech3/600/400',
      result: isVN ? '100k+ Học viên' : '100k+ Students',
    },
  ];
};