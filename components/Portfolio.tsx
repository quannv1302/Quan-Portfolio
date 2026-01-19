import React, { useState } from 'react';
import { PROJECTS, CATEGORIES } from '../constants';
import { ProjectCategory } from '../types';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Layers, Search } from 'lucide-react';
import LazyImage from './LazyImage';

const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'Tất cả' | ProjectCategory>('Tất cả');
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const filteredProjects = PROJECTS.filter(project => {
    const matchesCategory = activeCategory === 'Tất cả' || project.category === activeCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.technologies.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const handleProjectClick = (id: string) => {
    navigate(`/project/${id}`);
  };

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-4">
          <h2 className="text-indigo-600 font-semibold tracking-wide uppercase text-sm mb-2">Portfolio</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900">Danh sách các dự án đã thực hiện</h3>
          <p className="mt-2 text-slate-600 max-w-2xl mx-auto">
            Dưới đây là một số dự án tiêu biểu tôi đã thực hiện trong suốt gần 4 năm qua với các lĩnh vực khác nhau, từ Logistics, Giáo dục đến Quản lý doanh nghiệp.
          </p>
        </div>

        {/* Search Bar */}
        <div className="flex justify-center mb-8">
          <div className="relative w-full max-w-2xl">
            <input
              type="text"
              placeholder="Tìm kiếm dự án..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-full border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 bg-white text-slate-700 shadow-sm"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === category
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => handleProjectClick(project.id)}
              className="group bg-white border border-slate-100 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col h-full transform hover:-translate-y-1"
            >
              {/* Thumbnail */}
              <div className="relative aspect-video overflow-hidden bg-slate-200">
                <LazyImage
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  containerClassName="w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="text-white font-medium flex items-center">
                    Xem chi tiết <ArrowRight className="ml-2 w-4 h-4" />
                  </span>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-lg text-xs font-semibold text-indigo-600 shadow-sm">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                <h4 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">
                  {project.title}
                </h4>
                <p className="text-slate-600 text-sm line-clamp-3 mb-4 flex-1">
                  {project.shortDescription}
                </p>
                <div className="flex items-center text-slate-400 text-xs mt-auto pt-4 border-t border-slate-100">
                  <Layers className="w-4 h-4 mr-1" />
                  {project.technologies.slice(0, 2).join(', ')}
                  {project.technologies.length > 2 && ` +${project.technologies.length - 2}`}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20 text-slate-500">
            Không tìm thấy dự án nào trong danh mục này.
          </div>
        )}

      </div>
    </section>
  );
};

export default Portfolio;