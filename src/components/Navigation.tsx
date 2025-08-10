import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Plane, Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Destinations', path: '/destinations' },
    { name: 'Blog', path: '/blog' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={`relative z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-xl shadow-2xl border-b border-white/20' 
        : 'bg-black/50 backdrop-blur-lg border-b border-white/10'
    }`}>
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link 
            to="/" 
            className={`flex items-center space-x-3 group transition-all duration-300`}
          >
            <div className="relative">
              <Plane className={`h-8 w-8 transform transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110 ${
                isScrolled ? 'text-blue-600' : 'text-white'
              }`} />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300 transform scale-150"></div>
            </div>
            <span className={`text-2xl font-bold tracking-tight transition-colors duration-300 ${
              isScrolled 
                ? 'bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent' 
                : 'text-white'
            }`}>
              Ashraf Alam
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 group ${
                  isScrolled 
                    ? 'text-slate-700 hover:text-blue-600' 
                    : 'text-white/90 hover:text-white'
                } ${
                  isActive(item.path) 
                    ? isScrolled 
                      ? 'text-blue-600' 
                      : 'text-white font-semibold' 
                    : ''
                }`}
              >
                <span className="relative z-10">{item.name}</span>
                
                {/* Hover background */}
                <div className={`absolute inset-0 rounded-lg transition-all duration-300 opacity-0 group-hover:opacity-100 ${
                  isScrolled 
                    ? 'bg-blue-50' 
                    : 'bg-white/10'
                }`}></div>
                
                {/* Active/Hover underline */}
                <div className={`absolute bottom-0 left-1/2 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300 ${
                  isActive(item.path) 
                    ? 'w-full -translate-x-1/2' 
                    : 'w-0 group-hover:w-full group-hover:-translate-x-1/2'
                }`}></div>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className={`md:hidden transition-all duration-300 ${
              isScrolled 
                ? 'text-slate-700 hover:text-blue-600 hover:bg-blue-50' 
                : 'text-white hover:text-white hover:bg-white/10'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="relative">
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 transform transition-transform duration-300 rotate-90" />
              ) : (
                <Menu className="h-6 w-6 transform transition-transform duration-300" />
              )}
            </div>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className={`pb-6 pt-2 space-y-2 ${
            isScrolled 
              ? 'bg-white/95 backdrop-blur-xl' 
              : 'bg-black/70 backdrop-blur-lg'
          }`}>
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block px-4 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${
                  isScrolled 
                    ? 'text-slate-700 hover:text-blue-600 hover:bg-blue-50' 
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                } ${
                  isActive(item.path) 
                    ? isScrolled 
                      ? 'text-blue-600 bg-blue-50 font-semibold' 
                      : 'text-white bg-white/10 font-semibold' 
                    : ''
                }`}
                style={{
                  animationDelay: `${index * 50}ms`,
                  animation: isMobileMenuOpen ? 'slideInLeft 0.3s ease-out forwards' : 'none'
                }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;