import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { useAppContext } from '../App';
import { CONTENT, PROJECTS } from '../constants';

const Portfolio: React.FC = () => {
  const { language } = useAppContext();
  const t = CONTENT[language];
  const projects = PROJECTS(language);

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{t.portfolio.title}</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">{t.portfolio.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <div key={project.id} className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300">
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-brand-900/20 group-hover:bg-brand-900/0 transition-colors z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 z-20">
                  <span className="px-3 py-1 bg-white/90 dark:bg-black/80 backdrop-blur-sm text-xs font-bold uppercase tracking-wide text-brand-600 dark:text-brand-400 rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 flex items-center justify-between">
                  {project.title}
                  <ArrowUpRight className="text-gray-400 group-hover:text-brand-600 transition-colors" size={20} />
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="pt-4 border-t border-gray-100 dark:border-gray-700 flex items-center justify-between">
                  <span className="text-sm font-semibold text-green-600 dark:text-green-400">
                    {project.result}
                  </span>
                  <Link to="/contact" className="text-sm font-medium text-brand-600 dark:text-brand-400 hover:underline">
                    {t.common.viewProject}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
