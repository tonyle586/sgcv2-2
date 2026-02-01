import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';
import { useAppContext } from '../App';
import { CONTENT } from '../constants';

const Contact: React.FC = () => {
  const { language } = useAppContext();
  const t = CONTENT[language];
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Pre-fill message based on service selection
  const [defaultMessage, setDefaultMessage] = useState('');

  useEffect(() => {
    const service = searchParams.get('service');
    if (service) {
      setDefaultMessage(language === 'vn' 
        ? `Tôi muốn nhận tư vấn về dịch vụ: ${service}` 
        : `I am interested in the service: ${service}`);
    }
  }, [searchParams, language]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const scriptURL = 'https://script.google.com/macros/s/AKfycbyb-6gGi6hVKoLJzmD4IA6zvNThWtzfRpMnpg5JatsyZDkZ7l42U-nlcBCEP6xd0A9tGg/exec';
    const form = e.currentTarget;
    const formData = new FormData(form);

    fetch(scriptURL, { method: 'POST', body: formData })
      .then(response => {
        // Google Apps Script usually returns a redirect or simple 200.
        // We assume success if fetch completes without network error.
        navigate('/thank-you');
      })
      .catch(error => {
        alert('Lỗi: ' + error.message);
        setIsSubmitting(false);
      });
  };

  return (
    <div className="min-h-screen py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{t.contact.title}</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">{t.contact.subtitle}</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info & Map */}
          <div className="space-y-8">
            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-3">
                  <Phone size={20} />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Hotline & Zalo</h3>
                <div className="flex flex-col gap-1">
                    <a href="tel:0833246247" className="text-gray-600 dark:text-gray-400 text-sm hover:text-brand-600 transition-colors">Tel: 0833 246 247</a>
                    <a href="https://zalo.me/0913732102" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 text-sm hover:text-brand-600 transition-colors">Zalo: 0913 732 102</a>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-3">
                  <Mail size={20} />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Email & Web</h3>
                <div className="flex flex-col gap-1">
                     <a href="mailto:info@sgc.vn" className="text-gray-600 dark:text-gray-400 text-sm hover:text-brand-600 transition-colors">info@sgc.vn</a>
                     <a href="http://www.SGC.vn" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 text-sm hover:text-brand-600 transition-colors">www.SGC.vn</a>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-white dark:bg-gray-800 p-2 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 h-80 relative overflow-hidden group">
               {/* Visual Placeholder for Google Maps to avoid API key errors */}
               <div className="w-full h-full bg-gray-200 dark:bg-gray-700 rounded-lg flex flex-col items-center justify-center relative">
                  <div className="absolute inset-0 opacity-20 dark:opacity-10 bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/ec/Ho_Chi_Minh_City_Map.jpg')] bg-cover bg-center"></div>
                  <MapPin className="text-red-500 mb-2 drop-shadow-md z-10" size={40} fill="currentColor" />
                  <p className="font-semibold text-gray-700 dark:text-gray-200 z-10">{t.contact.office}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 z-10">Ho Chi Minh City, Vietnam</p>
               </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">{t.contact.formTitle}</h2>
            
            <form id="my-landing-form" onSubmit={handleSubmit} className="space-y-6">
              <input type="hidden" name="page_url" defaultValue={window.location.href} />
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {t.common.name} <span className="text-red-500">*</span>
                </label>
                <input 
                  type="text" 
                  name="Full Name"
                  required
                  placeholder={language === 'vn' ? "Họ tên" : "Full Name"}
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-brand-500 outline-none transition-all dark:text-white"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t.common.email} <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="email"
                    name="Email" 
                    required
                    placeholder="Email"
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-brand-500 outline-none transition-all dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t.common.phone}
                  </label>
                  <input 
                    type="tel" 
                    name="Phone Number"
                    placeholder={language === 'vn' ? "Số điện thoại" : "Phone Number"}
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-brand-500 outline-none transition-all dark:text-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {t.common.message} <span className="text-red-500">*</span>
                </label>
                <textarea 
                  name="How can we help?"
                  required
                  rows={4}
                  defaultValue={defaultMessage}
                  placeholder={language === 'vn' ? "Nội Dung Cần Tư Vấn" : "How can we help?"}
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-brand-500 outline-none transition-all dark:text-white resize-none"
                ></textarea>
              </div>

              <button 
                type="submit" 
                id="submitBtn"
                disabled={isSubmitting}
                className="w-full py-4 rounded-lg bg-brand-600 hover:bg-brand-700 text-white font-bold text-lg shadow-lg shadow-brand-500/30 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin" size={24} />
                    {language === 'vn' ? 'Đang xử lý...' : 'Processing...'}
                  </>
                ) : (
                  <>
                    {language === 'vn' ? 'Gửi Ngay' : 'Send Now'}
                    <Send size={20} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;