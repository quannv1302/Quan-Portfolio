import React, { useState, useEffect } from 'react';
import { User, Briefcase, FileText, Mail } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (id: string, isPage: boolean = false) => {
    if (isPage) {
      if (id === 'cv') {
        navigate('/cv');
      }
      return;
    }

    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'GIỚI THIỆU', id: 'about', isPage: false, icon: User },
    { name: 'DỰ ÁN', id: 'portfolio', isPage: false, icon: Briefcase },
    { name: 'CV', id: 'cv', isPage: true, icon: FileText },
    { name: 'LIÊN HỆ', id: 'contact', isPage: false, icon: Mail }
  ];

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 hidden md:block ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div
              className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent cursor-pointer"
              onClick={() => handleNav('top')}
            >
              Quân Portfolio
            </div>

            {/* Desktop Menu */}
            <div className="flex space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNav(link.id, link.isPage)}
                  className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t border-slate-200 z-50 pb-safe">
        <div className="flex justify-around items-center h-16">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNav(link.id, link.isPage)}
              className="flex flex-col items-center justify-center w-full h-full space-y-1"
            >
              <link.icon size={20} className="text-slate-600" />
              <span className="text-[10px] font-medium text-slate-600">{link.name}</span>
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;