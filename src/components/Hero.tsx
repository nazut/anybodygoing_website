import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-purple-800 via-purple-700 to-blue-700">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[10%] right-[15%] w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-[20%] left-[15%] w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[10%] right-[25%] w-80 h-80 bg-teal-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 animate-fade-in">
              Never Attend Events <br /><span className="text-teal-300">Alone</span> Again
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-xl animate-fade-in animation-delay-300">
              Find like-minded people at events you're already planning to attend. Make connections, share experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-in animation-delay-600">
              <a 
                href="#signup" 
                className="bg-white text-purple-700 px-8 py-3 rounded-full font-medium text-lg hover:bg-gray-100 transition-colors shadow-lg flex items-center justify-center"
              >
                Get Started
                <ArrowRight size={18} className="ml-2" />
              </a>
              <a 
                href="#how-it-works" 
                className="bg-transparent text-white border-2 border-white px-8 py-3 rounded-full font-medium text-lg hover:bg-white/10 transition-colors"
              >
                How It Works
              </a>
            </div>
          </div>
          <div className="md:w-1/2 animate-fade-in animation-delay-900">
            <div className="relative">
              <div className="relative mx-auto w-full max-w-md">
                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden transform rotate-2 hover:rotate-0 transition-transform duration-500">
                  <div className="p-5 bg-purple-100">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="bg-purple-50 p-4 rounded-lg mb-4">
                      <h3 className="font-bold text-purple-800 mb-1">Tonight's Jazz Concert</h3>
                      <p className="text-sm text-gray-600">Looking for 2-3 people to enjoy the show with!</p>
                    </div>
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-blue-200 rounded-full mr-3"></div>
                      <div>
                        <p className="font-medium text-gray-800">Alex Thompson</p>
                        <p className="text-xs text-gray-500">Music lover, first-timer to jazz</p>
                      </div>
                    </div>
                    <button className="w-full bg-purple-600 text-white py-2 rounded-lg font-medium hover:bg-purple-700 transition-colors">
                      Connect
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
          <path fill="#ffffff" fillOpacity="1" d="M0,128L48,144C96,160,192,192,288,186.7C384,181,480,139,576,117.3C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;