import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Globe, FileText, Link as LinkIcon, Image, Video, Smartphone, 
  UserSquare, Calendar, Utensils, CalendarCheck, MessageSquare, 
  Ticket, Music, Wifi, Building, LayoutTemplate, CreditCard, 
  Euro, Dog, QrCode, ArrowRight
} from 'lucide-react';
import { useAppContext } from '../App';
import { CONTENT } from '../constants';

const ServiceDetailQR: React.FC = () => {
  const { language } = useAppContext();
  const t = CONTENT[language];
  const isVN = language === 'vn';

  const qrTypes = [
    {
      icon: <Globe size={24} />,
      title: "Website URL QR Code",
      descVN: "Mã QR dẫn người dùng trực tiếp đến trang web, tăng tiện lợi và nhanh chóng truy cập nội dung online.",
      descEN: "Directs users to a website URL instantly, enhancing convenience and online content accessibility."
    },
    {
      icon: <FileText size={24} />,
      title: "PDF QR Code",
      descVN: "Cho phép chia sẻ tài liệu PDF dễ dàng qua mã QR, thuận tiện trong việc truyền tải thông tin.",
      descEN: "Allows easy sharing of PDF documents via QR code, simplifying information distribution."
    },
    {
      icon: <LinkIcon size={24} />,
      title: "Multi-Link QR Code",
      descVN: "Mã QR chứa nhiều liên kết, giúp người dùng chọn lựa trang mong muốn khi quét.",
      descEN: "A single QR code containing multiple links, letting users choose their destination."
    },
    {
      icon: <Image size={24} />,
      title: "Image Gallery QR Code",
      descVN: "Truy cập nhanh bộ sưu tập hình ảnh qua mã QR, lý tưởng cho quảng bá sản phẩm hoặc sự kiện.",
      descEN: "Quick access to image galleries, ideal for product showcases or event photos."
    },
    {
      icon: <Video size={24} />,
      title: "Video QR Code",
      descVN: "Mã QR dẫn đến video, hỗ trợ truyền tải nội dung đa phương tiện sinh động và hấp dẫn.",
      descEN: "Links directly to video content, supporting engaging multimedia experiences."
    },
    {
      icon: <Smartphone size={24} />,
      title: "App Download QR Code",
      descVN: "Giúp người dùng tải ứng dụng nhanh chóng qua liên kết trực tiếp trên mã QR.",
      descEN: "Directs users to app stores for quick and easy application downloads."
    },
    {
      icon: <UserSquare size={24} />,
      title: "vCard Plus QR Code",
      descVN: "Chia sẻ thông tin danh thiếp điện tử, giúp kết nối và lưu trữ thông tin liên lạc dễ dàng.",
      descEN: "Shares digital business cards (vCard), making networking and saving contacts effortless."
    },
    {
      icon: <Calendar size={24} />,
      title: "Event QR Code",
      descVN: "Quản lý và quảng bá sự kiện, giúp người dùng nhận thông tin chi tiết nhanh qua mã QR.",
      descEN: "Manages and promotes events, providing attendees with quick access to details."
    },
    {
      icon: <Utensils size={24} />,
      title: "Menu QR Code",
      descVN: "Truy cập thực đơn nhà hàng trực tuyến, đảm bảo an toàn và tiện lợi cho khách hàng.",
      descEN: "Digital restaurant menus for safe, contactless, and convenient ordering."
    },
    {
      icon: <CalendarCheck size={24} />,
      title: "Booking QR Code",
      descVN: "Hỗ trợ đặt chỗ nhanh chóng cho dịch vụ hoặc sự kiện qua mã QR tiện lợi.",
      descEN: "Facilitates quick booking and reservations for services or events."
    },
    {
      icon: <MessageSquare size={24} />,
      title: "Feedback QR Code",
      descVN: "Thu thập ý kiến phản hồi khách hàng dễ dàng, giúp cải thiện chất lượng dịch vụ.",
      descEN: "Easily collects customer feedback to help improve service quality."
    },
    {
      icon: <Ticket size={24} />,
      title: "Coupon QR Code",
      descVN: "Cung cấp mã khuyến mãi hoặc ưu đãi đặc biệt, thu hút khách hàng sử dụng sản phẩm/dịch vụ.",
      descEN: "Delivers promo codes and special offers to attract and retain customers."
    },
    {
      icon: <Music size={24} />,
      title: "Audio QR Code",
      descVN: "Mã QR phát âm thanh hoặc nhạc, thích hợp cho quảng cáo hoặc trải nghiệm đa giác quan.",
      descEN: "Plays audio or music upon scanning, great for marketing or immersive experiences."
    },
    {
      icon: <Wifi size={24} />,
      title: "WiFi QR Code",
      descVN: "Chia sẻ thông tin mạng WiFi nhanh chóng mà không cần nhập mật khẩu thủ công.",
      descEN: "Instantly connects users to WiFi networks without manual password entry."
    },
    {
      icon: <Building size={24} />,
      title: "Business Page QR Code",
      descVN: "Dẫn người dùng đến trang doanh nghiệp để tìm hiểu thông tin và dịch vụ nhanh chóng.",
      descEN: "Directs users to a dedicated business landing page for quick information."
    },
    {
      icon: <LayoutTemplate size={24} />,
      title: "Landing Page QR Code",
      descVN: "Tạo điểm đến hấp dẫn cho chiến dịch marketing qua mã QR dẫn đến trang đích riêng biệt.",
      descEN: "Creates an attractive entry point for marketing campaigns via custom landing pages."
    },
    {
      icon: <Euro size={24} />,
      title: "EPC Payment QR Code",
      descVN: "Hỗ trợ thanh toán điện tử chuẩn châu Âu, tiện lợi và bảo mật cao khi quét mã.",
      descEN: "Supports European standard electronic payments (EPC) securely and conveniently."
    },
    {
      icon: <CreditCard size={24} />,
      title: "PayNow QR Code",
      descVN: "Mã QR dành cho thanh toán nhanh tại Singapore, đơn giản và an toàn cho người dùng.",
      descEN: "Facilitates quick, simple, and secure payments via PayNow (Singapore)."
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-4 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://vncdn.io.vn/img/sgc/banner_qrcode.jpg" 
            alt="QR Code Services Background" 
            className="w-full h-full object-cover"
          />
          {/* Overlay to ensure text readability */}
          <div className="absolute inset-0 bg-gray-900/85 backdrop-blur-[2px]"></div>
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center justify-center p-3 bg-brand-600/20 backdrop-blur-md border border-brand-500/30 rounded-xl text-brand-300 mb-6">
            <QrCode size={48} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
            {isVN ? 'Dịch Vụ QR Code Toàn Diện' : 'Comprehensive QR Code Services'}
          </h1>
          <p className="text-xl text-brand-100 max-w-2xl mx-auto mb-10 drop-shadow-md">
            {isVN 
              ? 'Giải pháp kết nối vật lý và kỹ thuật số mạnh mẽ nhất cho doanh nghiệp của bạn.' 
              : 'The most powerful solution connecting the physical and digital worlds for your business.'}
          </p>
          <Link 
            to="/contact?service=QR%20Code" 
            className="px-8 py-3 bg-brand-600 text-white rounded-lg font-bold hover:bg-brand-700 transition-colors shadow-lg shadow-brand-600/30"
          >
            {t.common.contactUs}
          </Link>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Pet ID Special Section */}
          <div className="mb-20 bg-white dark:bg-gray-800 rounded-3xl p-8 md:p-12 shadow-xl border border-brand-100 dark:border-brand-900/30 flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1">
              <div className="inline-block px-4 py-1 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 font-semibold text-sm mb-4">
                {isVN ? 'Sản phẩm nổi bật' : 'Featured Product'}
              </div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                <Dog className="text-brand-600" size={32} />
                Pet ID QR Codes
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                {isVN 
                  ? "QR code cho thú cưng giúp lưu trữ thông tin liên lạc, hồ sơ y tế và hỗ trợ tìm kiếm khi thất lạc thông qua tính năng quét mã, gọi điện hoặc nhắn tin nhanh."
                  : "Pet QR codes store contact info and medical records, aiding in lost pet recovery via quick scanning, calling, or messaging features."}
              </p>
              <ul className="space-y-2 mb-8">
                {[
                  isVN ? 'Lưu trữ hồ sơ y tế' : 'Store Medical Records',
                  isVN ? 'Định vị khi thất lạc' : 'Lost & Found Location',
                  isVN ? 'Liên hệ chủ nhân 1 chạm' : 'One-tap Owner Contact'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                     <div className="w-1.5 h-1.5 rounded-full bg-brand-500"></div>
                     {item}
                  </li>
                ))}
              </ul>
              <Link to="/contact?service=Pet%20ID%20QR" className="text-brand-600 dark:text-brand-400 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                {isVN ? 'Đăng ký ngay' : 'Register Now'} <ArrowRight size={20} />
              </Link>
            </div>
            <div className="flex-1 w-full flex justify-center">
               <div className="w-full max-w-sm aspect-square bg-gradient-to-br from-brand-100 to-indigo-100 dark:from-gray-700 dark:to-gray-800 rounded-2xl flex items-center justify-center relative shadow-inner">
                  <div className="absolute inset-0 flex items-center justify-center opacity-10">
                    <Dog size={200} />
                  </div>
                  <QrCode size={150} className="text-gray-900 dark:text-white relative z-10" />
               </div>
            </div>
          </div>

          {/* 19 Types Grid */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              {isVN ? '19 Loại QR Code Chuyên Dụng' : '19 Specialized QR Code Types'}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {isVN 
                ? 'Đáp ứng mọi nhu cầu Marketing và Vận hành của doanh nghiệp.' 
                : 'Meeting all Marketing and Operational needs of your business.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {qrTypes.map((qr, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all hover:-translate-y-1 hover:border-brand-400 dark:hover:border-brand-500">
                <div className="w-12 h-12 bg-brand-50 dark:bg-brand-900/30 rounded-lg flex items-center justify-center text-brand-600 dark:text-brand-400 mb-4">
                  {qr.icon}
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">{qr.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {isVN ? qr.descVN : qr.descEN}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center bg-brand-50 dark:bg-brand-900/10 rounded-2xl p-10 border border-brand-100 dark:border-brand-800">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {isVN ? 'Bạn chưa tìm thấy loại QR phù hợp?' : 'Haven\'t found the right QR code?'}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              {isVN 
                ? 'Chúng tôi có thể tùy chỉnh giải pháp QR Code theo yêu cầu riêng của doanh nghiệp bạn.' 
                : 'We can customize QR Code solutions according to your business\'s specific requirements.'}
            </p>
            <Link 
              to="/contact?service=Custom%20QR" 
              className="inline-flex px-8 py-3 bg-brand-600 text-white rounded-lg font-semibold hover:bg-brand-700 transition-colors"
            >
              {t.common.contactUs}
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
};

export default ServiceDetailQR;