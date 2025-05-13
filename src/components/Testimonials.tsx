import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Marketing Professional",
    quote: "I used to skip events because none of my friends were interested. Now I've made great connections with people who enjoy the same things I do!",
    avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Software Developer",
    quote: "As someone who moved to a new city, this platform has been invaluable for meeting people at local events. It's so much easier than trying to make friends from scratch.",
    avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    rating: 5
  },
  {
    id: 3,
    name: "Aisha Patel",
    role: "Graduate Student",
    quote: "I connected with three people at a concert last month, and we've since become good friends. We're already planning our next event meetup!",
    avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    rating: 4
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Users Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real stories from people who've made meaningful connections
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex">
                  {Array.from({ length: testimonial.rating }).map((_, idx) => (
                    <Star key={idx} size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              <blockquote className="text-gray-700 italic">"{testimonial.quote}"</blockquote>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-purple-700 rounded-2xl p-8 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-[20%] right-[10%] w-64 h-64 bg-purple-500 rounded-full mix-blend-overlay filter blur-3xl opacity-50"></div>
            <div className="absolute bottom-[10%] left-[10%] w-48 h-48 bg-blue-500 rounded-full mix-blend-overlay filter blur-3xl opacity-50"></div>
          </div>
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to experience events differently?</h3>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Join thousands of people making meaningful connections at events they love.
            </p>
            <a 
              href="#signup" 
              className="inline-block bg-white text-purple-700 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors shadow-md"
            >
              Get Started For Free
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;