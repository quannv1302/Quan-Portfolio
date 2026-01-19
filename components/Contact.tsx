import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Dribbble, Github, Facebook } from 'lucide-react';
import { FaBehance } from "react-icons/fa";


const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header Content */}
        <div className="text-center mb-16">
          <h2 className="text-indigo-400 font-semibold tracking-wide uppercase text-sm mb-2">Liên hệ</h2>
          <h3 className="text-3xl md:text-5xl font-bold mb-6">Thông tin liên hệ của tôi</h3>
          <p className="text-slate-300 text-lg leading-relaxed max-w-2xl mx-auto">
            Tôi luôn sẵn sàng cho các dự án mới. Nếu bạn có ý tưởng thú vị hoặc muốn cải thiện trải nghiệm người dùng cho sản phẩm của mình, đừng ngần ngại liên hệ.
          </p>
        </div>

        {/* Contact Methods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Email */}
          <a
            href="mailto:quannv1302@gmail.com"
            className="group flex flex-col items-center p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 hover:border-indigo-500/50 transition-all duration-300"
          >
            <div className="p-4 bg-indigo-600/20 rounded-full text-indigo-400 mb-4 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
              <Mail className="w-8 h-8" />
            </div>
            <h4 className="text-lg font-semibold mb-2">Email</h4>
            <span className="text-slate-300 group-hover:text-white transition-colors text-center">
              quannv1302@gmail.com
            </span>
          </a>

          {/* Phone */}
          <a
            href="tel:0977290289"
            className="group flex flex-col items-center p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 hover:border-indigo-500/50 transition-all duration-300"
          >
            <div className="p-4 bg-purple-600/20 rounded-full text-purple-400 mb-4 group-hover:bg-purple-600 group-hover:text-white transition-colors">
              <Phone className="w-8 h-8" />
            </div>
            <h4 className="text-lg font-semibold mb-2">Điện thoại</h4>
            <span className="text-slate-300 group-hover:text-white transition-colors text-center">
              0977290289
            </span>
          </a>

          {/* Address */}
          <div className="group flex flex-col items-center p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 hover:border-indigo-500/50 transition-all duration-300">
            <div className="p-4 bg-pink-600/20 rounded-full text-pink-400 mb-4 group-hover:bg-pink-600 group-hover:text-white transition-colors">
              <MapPin className="w-8 h-8" />
            </div>
            <h4 className="text-lg font-semibold mb-2">Địa chỉ</h4>
            <span className="text-slate-300 group-hover:text-white transition-colors text-center">
              Cầu Giấy, Hà Nội, Việt Nam
            </span>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex flex-col items-center">
          <h4 className="text-sm font-semibold text-slate-400 uppercase mb-6 tracking-wider">Kết nối trên mạng xã hội</h4>
          <div className="flex space-x-6">
            <a
              href="#"
              className="p-4 bg-white/5 rounded-full hover:bg-[#0077b5] hover:text-white text-slate-400 transition-all duration-300 transform hover:-translate-y-1"
              aria-label="LinkedIn"
            >
              <Facebook className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="p-4 bg-white/5 rounded-full hover:bg-[#ea4c89] hover:text-white text-slate-400 transition-all duration-300 transform hover:-translate-y-1"
              aria-label="Dribbble"
            >
              <Dribbble className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="p-4 bg-white/5 rounded-full hover:bg-[#333] hover:text-white text-slate-400 transition-all duration-300 transform hover:-translate-y-1"
              aria-label="GitHub"
            >
              <FaBehance size={24} />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;