import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
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

  const handleNav = (id: string) => {
    setIsOpen(false);
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
    { name: 'Giới thiệu', id: 'about' },
    { name: 'Danh sách dự án', id: 'portfolio' },
    { name: 'Liên hệ', id: 'contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div
            className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent cursor-pointer"
            onClick={() => handleNav('top')}
          >
            Quân Portfolio
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNav(link.id)}
                className="text-slate-600 hover:text-indigo-600 font-medium transition-colors"
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-slate-100">
          <div className="flex flex-col px-4 py-4 space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNav(link.id)}
                className="text-left text-slate-600 hover:text-indigo-600 font-medium py-2"
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;