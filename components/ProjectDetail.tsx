import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { PROJECTS } from '../constants';
import { ArrowLeft, Calendar, User, Tag, Layers, X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const project = PROJECTS.find(p => p.id === id);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // Navigation handlers
  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (!selectedImage || !project) return;
    const currentIndex = project.screens.indexOf(selectedImage);
    const nextIndex = (currentIndex + 1) % project.screens.length;
    setSelectedImage(project.screens[nextIndex]);
  };

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (!selectedImage || !project) return;
    const currentIndex = project.screens.indexOf(selectedImage);
    const prevIndex = (currentIndex - 1 + project.screens.length) % project.screens.length;
    setSelectedImage(project.screens[prevIndex]);
  };

  // Handle keyboard navigation
  useEffect(() => {
    if (!selectedImage) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedImage(null);
      } else if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, project]);

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
    <>
      <div className="bg-white min-h-screen pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Fixed Mobile Header */}
          <div className="fixed top-0 left-0 w-full bg-white z-40 shadow-sm px-4 py-3 flex items-center md:hidden transition-transform">
            <button
              onClick={() => navigate('/')}
              className="group flex items-center text-slate-500 hover:text-indigo-600 transition-colors"
            >
              <div className="p-2 rounded-full bg-slate-100 group-hover:bg-indigo-50 mr-3 transition-colors">
                <ArrowLeft className="w-5 h-5" />
              </div>
              <span className="font-bold text-slate-700 text-lg">Quay lại danh sách</span>
            </button>
          </div>

          {/* Back Button (Desktop) */}
          <button
            onClick={() => navigate('/')}
            className="group hidden md:flex items-center text-slate-500 hover:text-indigo-600 mb-8 transition-colors"
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
              {/* <span className="text-slate-400 text-sm">ID: #{project.id}</span> */}
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">{project.title}</h1>
            <p className="text-xl text-slate-600 leading-relaxed max-w-4xl">
              {project.shortDescription}
            </p>
          </div>

          {/* Meta Data Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-y border-slate-100 mb-12">
            {/* <div>
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
            </div> */}
            <div className="col-span-2 md:col-span-2">
              <div className="flex items-center text-slate-400 mb-2 text-sm font-medium">
                <Layers className="w-4 h-4 mr-2" /> Công nghệ / Tools sử dụng
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
                  {project.roles.map(role => (
                    <li key={role} className="">
                      {role}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-2 space-y-8">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Màn hình nổi bật</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.screens.map((screen, index) => (
                  <div
                    key={index}
                    className="group relative rounded-2xl overflow-hidden shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300 cursor-zoom-in"
                    onClick={() => setSelectedImage(screen)}
                  >
                    <img
                      src={screen}
                      alt={`${project.title} screen ${index + 1}`}
                      className="w-full h-auto object-cover"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 bg-white/90 p-3 rounded-full text-indigo-600 shadow-lg transform scale-75 group-hover:scale-100 transition-all duration-300">
                        <ZoomIn size={24} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          {/* Close Button */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 z-10 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-all"
            aria-label="Close preview"
          >
            <X size={32} />
          </button>

          {/* Previous Button */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all group"
            aria-label="Previous image"
          >
            <ChevronLeft size={32} className="group-active:-translate-x-1 transition-transform" />
          </button>

          <img
            src={selectedImage}
            alt="Full view"
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image itself
          />

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all group"
            aria-label="Next image"
          >
            <ChevronRight size={32} className="group-active:translate-x-1 transition-transform" />
          </button>
        </div>
      )}
    </>
  );
};

export default ProjectDetail;