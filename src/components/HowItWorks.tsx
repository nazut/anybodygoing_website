import React from 'react';
import { Calendar, Users, Map, MessageCircle } from 'lucide-react';

const steps = [
  {
    icon: <Calendar size={32} className="text-teal-500" />,
    title: "Find an Event",
    description: "Choose from events you're already planning to attend or discover new ones in your area.",
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
            Finding new friends at events is simple with EventBuddy
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

        <div className="mt-16 bg-purple-50 rounded-2xl p-8 shadow-sm">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">See the Experience</h3>
              <p className="text-gray-600 mb-6">
                Watch how easy it is to connect with others and make your event experience more enjoyable.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3">
                    <span className="text-green-500 text-lg">✓</span>
                  </div>
                  <p className="text-gray-700">No more attending events alone if you don't want to</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3">
                    <span className="text-green-500 text-lg">✓</span>
                  </div>
                  <p className="text-gray-700">Connect with people who share your interests</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3">
                    <span className="text-green-500 text-lg">✓</span>
                  </div>
                  <p className="text-gray-700">Create your own event gatherings or join existing ones</p>
                </div>
              </div>
            </div>
            <div className="md:order-2 bg-white p-3 rounded-xl shadow-md relative">
              <div className="aspect-video rounded-lg bg-gray-200 overflow-hidden group relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-purple-600 flex items-center justify-center mx-auto mb-2 cursor-pointer hover:bg-purple-700 transition-colors">
                      <div className="ml-1 w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent"></div>
                    </div>
                    <p className="text-gray-800 font-medium">Demo Video</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;