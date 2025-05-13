import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className={`font-bold text-2xl ${isScrolled ? 'text-purple-700' : 'text-white'}`}>
              EventBuddy
            </span>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="#how-it-works" 
              className={`font-medium hover:text-purple-500 transition-colors ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              How It Works
            </a>
            <a 
              href="#events" 
              className={`font-medium hover:text-purple-500 transition-colors ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Events
            </a>
            <a 
              href="#signup" 
              className="bg-purple-700 text-white px-6 py-2 rounded-full font-medium 
                         hover:bg-purple-800 transition-colors shadow-md"
            >
              Sign Up
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 focus:outline-none ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-white rounded-lg shadow-xl p-4 absolute left-4 right-4 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <a 
                href="#how-it-works" 
                className="font-medium text-gray-700 hover:text-purple-500 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                How It Works
              </a>
              <a 
                href="#events" 
                className="font-medium text-gray-700 hover:text-purple-500 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Events
              </a>
              <a 
                href="#signup" 
                className="bg-purple-700 text-white px-6 py-3 rounded-full font-medium 
                           hover:bg-purple-800 transition-colors shadow-md text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign Up
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;