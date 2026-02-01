import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Zap } from 'lucide-react';
import { useAppContext } from '../App';
import { CONTENT, SERVICES_LIST } from '../constants';

const Home: React.FC = () => {
  const { language } = useAppContext();
  const t = CONTENT[language];
  const services = SERVICES_LIST(language).slice(0, 4); // Show top 4 services

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-24 lg:pt-32 lg:pb-40">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://vncdn.io.vn/img/sgc/banner-sgcv2.jpg" 
            alt="SGC Technology Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-white/90 dark:bg-gray-950/85 backdrop-blur-[2px]"></div>
          <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-500/10 blur-[100px] rounded-full transform translate-x-1/2 -translate-y-1/4"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-full bg-indigo-500/10 blur-[100px] rounded-full transform -translate-x-1/2 translate-y-1/4"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50/80 dark:bg-brand-900/30 border border-brand-200 dark:border-brand-700/50 text-brand-600 dark:text-brand-300 text-xs font-semibold tracking-wide uppercase mb-6 animate-fade-in-up backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></span>
            Tech For Future
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
            {t.home.heroTitle} <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-indigo-600 dark:from-brand-400 dark:to-indigo-400">
              {t.home.heroSubtitle}
            </span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed">
            {t.home.heroDescription}
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/contact" 
              className="px-8 py-3.5 rounded-lg bg-brand-600 hover:bg-brand-700 text-white font-semibold transition-all shadow-lg shadow-brand-600/25 flex items-center justify-center gap-2"
            >
              {t.common.getStarted}
              <ArrowRight size={20} />
            </Link>
            <Link 
              to="/services" 
              className="px-8 py-3.5 rounded-lg bg-white/80 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors backdrop-blur-sm"
            >
              {t.common.learnMore}
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid Preview */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900/50 border-y border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{t.services.title}</h2>
            <p className="text-gray-600 dark:text-gray-400">{t.services.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-xl hover:scale-105 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-lg bg-brand-50 dark:bg-brand-900/30 flex items-center justify-center text-brand-600 dark:text-brand-400 mb-6 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                  <Zap size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{service.description}</p>
                <Link to="/services" className="text-brand-600 dark:text-brand-400 text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                  {t.common.learnMore} <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-brand-600 to-purple-600 rounded-2xl opacity-20 blur-lg"></div>
              <img 
                src="https://picsum.photos/seed/tech_office/800/600" 
                alt="SGC Office" 
                className="relative rounded-2xl shadow-2xl w-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                {t.home.whyChooseUs}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                {t.home.whyChooseUsDesc}
              </p>
              
              <div className="space-y-4">
                {[
                  'Tối ưu hóa SEO & Hiệu suất / Optimized Performance',
                  'Bảo mật dữ liệu tuyệt đối / High Security',
                  'Hỗ trợ kỹ thuật 24/7 / 24/7 Tech Support',
                  'Công nghệ AI tiên tiến / Advanced AI Tech'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle className="text-green-500 shrink-0" size={20} />
                    <span className="text-gray-700 dark:text-gray-300 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;