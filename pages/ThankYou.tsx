import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import { useAppContext } from '../App';
import { CONTENT } from '../constants';

const ThankYou: React.FC = () => {
  const { language } = useAppContext();
  const t = CONTENT[language];

  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-white dark:bg-gray-950 px-4">
      <div className="text-center max-w-lg p-8 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-xl">
        <div className="mx-auto w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-green-600 dark:text-green-500 mb-6 animate-bounce">
          <CheckCircle size={48} />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          {t.thankYou.title}
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          {t.thankYou.message}
        </p>
        <Link 
          to="/" 
          className="inline-flex px-8 py-3 bg-brand-600 text-white rounded-lg font-semibold hover:bg-brand-700 transition-colors"
        >
          {t.thankYou.backHome}
        </Link>
      </div>
    </div>
  );
};

export default ThankYou;
