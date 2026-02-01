import React from 'react';
import { Target, Eye, ShieldCheck, Users } from 'lucide-react';
import { useAppContext } from '../App';
import { CONTENT } from '../constants';
import YoutubeEmbed from '../components/YoutubeEmbed';

const About: React.FC = () => {
  const { language } = useAppContext();
  const t = CONTENT[language];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="relative py-32 md:py-48 flex items-center justify-center overflow-hidden">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://vncdn.io.vn/img/sgc/banner_sgcv2-2.jpg" 
            alt="About SGC Technology" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-900/70 backdrop-blur-sm"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            {t.about.title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 font-medium max-w-2xl mx-auto leading-relaxed">
            {t.about.subtitle}
          </p>
        </div>
      </section>

      {/* Video Introduction Section */}
      <section className="py-12 bg-white dark:bg-gray-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <YoutubeEmbed videoId="fkpZRbCqFWI" />
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Mission */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500/5 rounded-bl-full"></div>
            <div className="w-12 h-12 bg-brand-100 dark:bg-brand-900/40 rounded-lg flex items-center justify-center text-brand-600 dark:text-brand-400 mb-6">
              <Target size={24} />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{t.about.missionTitle}</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {t.about.missionDesc}
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-bl-full"></div>
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/40 rounded-lg flex items-center justify-center text-purple-600 dark:text-purple-400 mb-6">
              <Eye size={24} />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{t.about.visionTitle}</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {t.about.visionDesc}
            </p>
          </div>
        </div>
      </section>

      {/* Tech Edge */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{t.about.techEdgeTitle}</h2>
                <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">{t.about.techEdgeDesc}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center p-6">
                    <div className="mx-auto w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4">
                        <ShieldCheck size={32} />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Security First</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                        Bảo mật nhiều lớp, tuân thủ tiêu chuẩn quốc tế (ISO/IEC 27001).
                    </p>
                </div>
                <div className="text-center p-6">
                    <div className="mx-auto w-16 h-16 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-4">
                        <Users size={32} />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Expert Team</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                        Đội ngũ kỹ sư, chuyên gia AI có trên 10 năm kinh nghiệm thực chiến.
                    </p>
                </div>
                 <div className="text-center p-6">
                    <div className="mx-auto w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-green-600 dark:text-green-400 mb-4">
                        <Target size={32} />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Result Oriented</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                        Tập trung vào hiệu quả kinh doanh thực tế (ROI) cho khách hàng.
                    </p>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default About;