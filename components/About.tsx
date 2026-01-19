import React from 'react';
import { SKILLS } from '../constants';
import { Calendar, Mail, MapPin, Briefcase, BriefcaseBusinessIcon, FolderArchiveIcon, FolderDotIcon, FolderOpenDotIcon } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="pt-32 pb-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <span className="inline-block px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 font-medium text-sm mb-4">
                UI/UX Designer
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                Xin chào, tôi là <br />
                <span className="text-indigo-600">Nguyễn Văn Quân</span>
              </h1>
              <p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-lg">
                Tôi là một UI/UX Designer đam mê tạo ra những trải nghiệm kỹ thuật số trực quan, hấp dẫn và lấy người dùng làm trung tâm. Với 3 năm kinh nghiệm, tôi biến những ý tưởng phức tạp thành các thiết kế đơn giản và hiệu quả.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3 text-slate-700">
                <Calendar className="w-5 h-5 text-indigo-500" />
                <span>13/03/2000</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-700">
                <MapPin className="w-5 h-5 text-indigo-500" />
                <span>Hà Nội, Việt Nam</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-700">
                <Briefcase className="w-5 h-5 text-indigo-500" />
                <span>3+ năm kinh nghiệm</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-700">
                <Mail className="w-5 h-5 text-indigo-500" />
                <span>quannv1302@gmail.com</span>
              </div>
            </div>

            <div className="pt-4">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Kỹ năng chính</h3>
              <div className="flex flex-wrap gap-2">
                {SKILLS.map((skill) => (
                  <span
                    key={skill.name}
                    className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-slate-700 text-sm font-medium shadow-sm hover:border-indigo-300 hover:text-indigo-600 transition-colors"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-indigo-600 rounded-3xl rotate-3 opacity-10"></div>
            <img
              src="https://picsum.photos/id/64/800/1000"
              alt="Portrait of Minh"
              className="relative rounded-3xl shadow-2xl w-full h-[600px] object-cover object-center"
            />

            {/* Floating Card Experience */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl max-w-xs hidden md:block">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-indigo-100 rounded-full text-indigo-600">
                  <FolderOpenDotIcon size={24} />
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-900">40+</p>
                  <p className="text-slate-500 text-sm">Dự án hoàn thành</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;