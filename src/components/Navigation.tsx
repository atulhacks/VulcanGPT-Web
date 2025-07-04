import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Cpu, Github, ShoppingCart } from 'lucide-react';

export const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/features', label: 'Features' },
    { path: '/documentation', label: 'Documentation' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/95 backdrop-blur-md border-b border-gray-800' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <Cpu className="w-8 h-8 text-red-500 group-hover:animate-pulse" />
            <span className="text-xl font-bold">
              <span className="text-red-500">Vulcan</span>
              <span className="text-white">GPT</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  location.pathname === item.path
                    ? 'text-red-500'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {item.label}
                {location.pathname === item.path && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-500 rounded-full"></div>
                )}
              </Link>
            ))}
            
            <Link
              to="/checkout"
              className="flex items-center space-x-2 bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg transition-colors duration-200"
            >
              <ShoppingCart className="w-4 h-4" />
              <span>Buy Now</span>
            </Link>
            
            <a
              href="https://github.com/atulhacks/VulcanGPT"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 border border-gray-600 hover:border-red-500 px-4 py-2 rounded-lg transition-colors duration-200"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors duration-200"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-black/95 backdrop-blur-md border-b border-gray-800">
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 text-base font-medium rounded-lg transition-colors duration-200 ${
                    location.pathname === item.path
                      ? 'text-red-500 bg-red-500/10'
                      : 'text-gray-300 hover:text-white hover:bg-gray-800'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              
              <Link
                to="/checkout"
                className="flex items-center space-x-2 bg-red-600 hover:bg-red-700 px-3 py-2 rounded-lg transition-colors duration-200 mt-4"
                onClick={() => setIsOpen(false)}
              >
                <ShoppingCart className="w-4 h-4" />
                <span>Buy Now</span>
              </Link>
              
              <a
                href="https://github.com/atulhacks/VulcanGPT"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 border border-gray-600 hover:border-red-500 px-3 py-2 rounded-lg transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};