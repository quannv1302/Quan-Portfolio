import React from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Dribbble, Github, Facebook } from 'lucide-react';
import { FaFacebook, FaBehance } from "react-icons/fa";



const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Contact Info */}
          <div>
            <h2 className="text-indigo-400 font-semibold tracking-wide uppercase text-sm mb-2">Liên hệ</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Hãy cùng làm việc với nhau</h3>
            <p className="text-slate-300 mb-10 text-lg leading-relaxed">
              Tôi luôn sẵn sàng cho các dự án mới. Nếu bạn có ý tưởng thú vị hoặc muốn cải thiện trải nghiệm người dùng cho sản phẩm của mình, đừng ngần ngại liên hệ.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-white/10 rounded-lg text-indigo-400">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Email</h4>
                  <a href="mailto:minh.design@example.com" className="text-slate-300 hover:text-white transition-colors">
                    quannv1302@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-white/10 rounded-lg text-indigo-400">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Điện thoại</h4>
                  <a href="tel:+84987654321" className="text-slate-300 hover:text-white transition-colors">
                    0977290289
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-white/10 rounded-lg text-indigo-400">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Địa chỉ</h4>
                  <p className="text-slate-300">
                    Hà Nội, Việt Nam
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h4 className="text-sm font-semibold text-slate-400 uppercase mb-4">Mạng xã hội</h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/quanvanng"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/5 rounded-full hover:bg-indigo-600 transition-colors"
                >
                  <FaFacebook {...({ className: "w-5 h-5" } as any)} />
                </a>
                <a
                  href="https://www.facebook.com/quanvanng"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/5 rounded-full hover:bg-indigo-600 transition-colors"
                >
                  <FaBehance {...({ className: "w-5 h-5" } as any)} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 text-slate-900 shadow-2xl">
            <h3 className="text-2xl font-bold mb-6">Gửi tin nhắn</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Họ tên</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                    placeholder="Nguyễn Văn A"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                    placeholder="email@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">Chủ đề</label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                  placeholder="Tôi muốn thảo luận về dự án..."
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Nội dung</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all resize-none"
                  placeholder="Chi tiết yêu cầu của bạn..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center space-x-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-4 rounded-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Send className="w-5 h-5" />
                <span>Gửi tin nhắn</span>
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;