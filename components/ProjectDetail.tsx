import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { PROJECTS } from '../constants';
import { ArrowLeft, Calendar, User, Tag, Layers } from 'lucide-react';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = PROJECTS.find(p => p.id === id);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Không tìm thấy dự án</h2>
          <button 
            onClick={() => navigate('/')}
            className="text-indigo-600 hover:underline font-medium"
          >
            Quay lại trang chủ
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Button */}
        <button 
          onClick={() => navigate('/')}
          className="group flex items-center text-slate-500 hover:text-indigo-600 mb-8 transition-colors"
        >
          <div className="p-2 rounded-full bg-slate-100 group-hover:bg-indigo-50 mr-3 transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </div>
          <span className="font-medium">Quay lại danh sách</span>
        </button>

        {/* Header */}
        <div className="mb-12">
          <div className="flex flex-wrap items-center gap-4 mb-4">
             <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-lg text-sm font-semibold">
                {project.category}
             </span>
             <span className="text-slate-400 text-sm">ID: #{project.id}</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">{project.title}</h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            {project.shortDescription}
          </p>
        </div>

        {/* Meta Data Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-y border-slate-100 mb-12">
          <div>
            <div className="flex items-center text-slate-400 mb-2 text-sm font-medium">
              <Calendar className="w-4 h-4 mr-2" /> Thời gian
            </div>
            <div className="text-slate-900 font-semibold">{project.date}</div>
          </div>
          <div>
            <div className="flex items-center text-slate-400 mb-2 text-sm font-medium">
              <User className="w-4 h-4 mr-2" /> Khách hàng
            </div>
            <div className="text-slate-900 font-semibold">{project.client}</div>
          </div>
          <div className="col-span-2 md:col-span-2">
            <div className="flex items-center text-slate-400 mb-2 text-sm font-medium">
              <Layers className="w-4 h-4 mr-2" /> Công nghệ / Tools
            </div>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map(tech => (
                <span key={tech} className="text-slate-900 font-semibold bg-slate-50 px-2 py-0.5 rounded border border-slate-100 text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Mô tả chi tiết</h3>
              <p className="text-slate-600 leading-relaxed whitespace-pre-line">
                {project.fullDescription}
              </p>
            </div>
            
            <div className="bg-indigo-50 p-6 rounded-2xl">
              <h4 className="text-indigo-900 font-bold mb-2">Vai trò của tôi</h4>
              <ul className="list-disc list-inside text-indigo-800/80 space-y-1 text-sm">
                <li>Phân tích yêu cầu người dùng</li>
                <li>Xây dựng Wireframe & User Flow</li>
                <li>Thiết kế UI High-fidelity</li>
                <li>Tạo Prototype tương tác</li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-8">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Màn hình nổi bật</h3>
            <div className="space-y-8">
              {project.screens.map((screen, index) => (
                <div key={index} className="group relative rounded-2xl overflow-hidden shadow-lg border border-slate-100">
                  <img 
                    src={screen} 
                    alt={`${project.title} screen ${index + 1}`}
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-2xl pointer-events-none"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProjectDetail;