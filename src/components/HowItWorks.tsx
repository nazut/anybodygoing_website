import React from 'react';
import { Calendar, Users, Map, MessageCircle } from 'lucide-react';

const steps = [
  {
    icon: <Calendar size={32} className="text-teal-500" />,
    title: "Find or List Events",
    description: "Discover events in your area, find ones you're already planning to attend, or list your own events to meet new people.",
    color: "bg-teal-50"
  },
  {
    icon: <Users size={32} className="text-purple-500" />,
    title: "Connect with People",
    description: "Find others attending the same event who want to meet new people.",
    color: "bg-purple-50"
  },
  {
    icon: <MessageCircle size={32} className="text-blue-500" />,
    title: "Chat & Coordinate",
    description: "Message each other to coordinate meetup details before the event.",
    color: "bg-blue-50"
  },
  {
    icon: <Map size={32} className="text-orange-500" />,
    title: "Meet & Enjoy",
    description: "Meet up at the event and enjoy the experience together!",
    color: "bg-orange-50"
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Finding new friends at events is simple with AnybodyGoing
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`p-6 rounded-xl ${step.color} border border-gray-100 shadow-sm transform transition-transform duration-300 hover:-translate-y-2`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-white shadow-sm mb-6 mx-auto">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">{step.title}</h3>
              <p className="text-gray-600 text-center">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;