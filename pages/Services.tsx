import React from 'react';
import { 
  Server, Layout, Bot, QrCode, FileSpreadsheet, Lightbulb, Check, ArrowRight
} from 'lucide-react';
import { useAppContext } from '../App';
import { CONTENT, SERVICES_LIST } from '../constants';
import { Link } from 'react-router-dom';
import YoutubeEmbed from '../components/YoutubeEmbed';

const iconMap: Record<string, React.ReactNode> = {
  'Server': <Server size={32} />,
  'Layout': <Layout size={32} />,
  'Bot': <Bot size={32} />,
  'QrCode': <QrCode size={32} />,
  'FileSpreadsheet': <FileSpreadsheet size={32} />,
  'Lightbulb': <Lightbulb size={32} />,
};

const Services: React.FC = () => {
  const { language } = useAppContext();
  const t = CONTENT[language];
  const services = SERVICES_LIST(language);

  const getButtonConfig = (serviceId: string, serviceTitle: string) => {
    if (serviceId === 'qr') {
      return {
        link: '/services/qr-code',
        text: language === 'vn' ? 'Xem Chi Tiết' : 'View Details',
        isDetail: true
      };
    }
    return {
      link: `/contact?service=${encodeURIComponent(serviceTitle)}`,
      text: t.common.contactUs,
      isDetail: false
    };
  };

  return (
    <div className="min-h-screen pb-20">
      <section className="bg-brand-600 dark:bg-brand-900 pt-20 pb-24 px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t.services.title}</h1>
          <p className="text-xl text-brand-100 mb-10">{t.services.subtitle}</p>
          
          <div className="mx-auto max-w-3xl shadow-2xl rounded-2xl overflow-hidden border border-brand-400/30 bg-black">
            <YoutubeEmbed videoId="_RyMJAsqK1Y" />
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const btnConfig = getButtonConfig(service.id, service.title);
            
            return (
              <div key={service.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col">
                <div className="p-8 flex-grow">
                  <div className="w-14 h-14 bg-brand-50 dark:bg-brand-900/30 rounded-2xl flex items-center justify-center text-brand-600 dark:text-brand-400 mb-6">
                    {iconMap[service.iconName]}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3 text-sm text-gray-700 dark:text-gray-300">
                        <Check className="text-green-500 shrink-0 mt-0.5" size={16} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-6 bg-gray-50 dark:bg-gray-900/50 border-t border-gray-100 dark:border-gray-700">
                  <Link 
                    to={btnConfig.link} 
                    className={`block w-full text-center py-2.5 rounded-lg border transition-all font-semibold flex items-center justify-center gap-2 ${
                      btnConfig.isDetail 
                        ? 'bg-brand-600 text-white border-brand-600 hover:bg-brand-700 shadow-lg shadow-brand-500/20' 
                        : 'border-brand-600 text-brand-600 dark:text-brand-400 dark:border-brand-500 hover:bg-brand-600 hover:text-white dark:hover:bg-brand-500'
                    }`}
                  >
                    {btnConfig.text}
                    {btnConfig.isDetail && <ArrowRight size={18} />}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      
      {/* Call to action */}
      <section className="max-w-4xl mx-auto px-4 mt-24 text-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            {language === 'vn' ? 'Bạn cần giải pháp tùy chỉnh?' : 'Need a custom solution?'}
        </h2>
        <Link to="/contact" className="inline-block px-8 py-3 bg-brand-600 text-white rounded-lg font-semibold hover:bg-brand-700 transition-colors">
            {t.common.contactUs}
        </Link>
      </section>
    </div>
  );
};

export default Services;