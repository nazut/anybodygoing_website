import React from 'react';
import { Music, Users, Star, Calendar, MapPin } from 'lucide-react';

const categories = [
  {
    id: 'concerts',
    name: 'Concerts & Shows',
    icon: <Music size={20} className="mr-2" />,
    color: 'bg-pink-100 text-pink-800'
  },
  {
    id: 'sports',
    name: 'Sports Events',
    icon: <Users size={20} className="mr-2" />,
    color: 'bg-blue-100 text-blue-800'
  },
  {
    id: 'art',
    name: 'Art & Culture',
    icon: <Star size={20} className="mr-2" />,
    color: 'bg-purple-100 text-purple-800'
  },
  {
    id: 'local',
    name: 'Local Gatherings',
    icon: <MapPin size={20} className="mr-2" />,
    color: 'bg-green-100 text-green-800'
  },
];

const events = [
  {
    id: 1,
    title: "Jazz in the Park",
    category: "concerts",
    date: "Fri, Sep 15",
    location: "Central Park",
    attendees: 7,
    looking: 3,
    image: "https://images.pexels.com/photos/5935232/pexels-photo-5935232.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 2,
    title: "Local Baseball Game",
    category: "sports",
    date: "Sat, Sep 16",
    location: "City Stadium",
    attendees: 12,
    looking: 5,
    image: "https://images.pexels.com/photos/163452/baseball-stadium-toledo-mud-hens-minor-league-163452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 3,
    title: "Art Gallery Opening",
    category: "art",
    date: "Thu, Sep 21",
    location: "Modern Art Museum",
    attendees: 5,
    looking: 2,
    image: "https://images.pexels.com/photos/1839919/pexels-photo-1839919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 4,
    title: "Brewery Trivia Night",
    category: "local",
    date: "Wed, Sep 20",
    location: "Hoppy Brews",
    attendees: 9,
    looking: 4,
    image: "https://images.pexels.com/photos/274192/pexels-photo-274192.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

const EventShowcase: React.FC = () => {
  const [activeCategory, setActiveCategory] = React.useState<string>('all');
  
  const filteredEvents = activeCategory === 'all' 
    ? events 
    : events.filter(event => event.category === activeCategory);

  return (
    <section id="events" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Discover Events</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Browse events where people are looking to connect and make new friends
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <button
            className={`px-4 py-2 rounded-full font-medium ${
              activeCategory === 'all'
                ? 'bg-purple-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            } transition-colors shadow-sm`}
            onClick={() => setActiveCategory('all')}
          >
            All Events
          </button>
          {categories.map((category) => (
            <button
              key={category.id}
              className={`px-4 py-2 rounded-full font-medium flex items-center ${
                activeCategory === category.id
                  ? 'bg-purple-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              } transition-colors shadow-sm`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.icon}
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredEvents.map((event) => {
            const category = categories.find(cat => cat.id === event.category);
            
            return (
              <div 
                key={event.id}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-bold text-lg text-gray-900">{event.title}</h3>
                    <span className={`text-xs px-2 py-1 rounded-full ${category?.color}`}>
                      {category?.name}
                    </span>
                  </div>
                  <div className="flex items-center text-gray-600 mb-1">
                    <Calendar size={16} className="mr-2" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center text-gray-600 mb-4">
                    <MapPin size={16} className="mr-2" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-gray-500">
                      <span className="font-medium text-purple-600">{event.attendees}</span> attending • 
                      <span className="font-medium text-purple-600"> {event.looking}</span> looking to meet
                    </div>
                    <button className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-purple-600 hover:text-white transition-colors">
                      Connect
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <a 
            href="#signup" 
            className="inline-block bg-purple-600 text-white px-8 py-3 rounded-full font-medium hover:bg-purple-700 transition-colors shadow-md"
          >
            Show More Events
          </a>
        </div>
      </div>

      {/* Wave divider */}
      <div className="mt-16">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
          <path fill="#ffffff" fillOpacity="1" d="M0,192L48,181.3C96,171,192,149,288,149.3C384,149,480,171,576,176C672,181,768,171,864,149.3C960,128,1056,96,1152,90.7C1248,85,1344,107,1392,117.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default EventShowcase;