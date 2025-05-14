import React, { useState } from 'react';
import { Music, Users, Star, Calendar, MapPin, Film, BookOpen, Coffee, Utensils, Gamepad2, Globe } from 'lucide-react';
import { createClient } from '@supabase/supabase-js';

// Create a single supabase client for the browser
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

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
  {
    id: 'movies',
    name: 'Movies & Films',
    icon: <Film size={20} className="mr-2" />,
    color: 'bg-red-100 text-red-800'
  },
  {
    id: 'books',
    name: 'Book Events',
    icon: <BookOpen size={20} className="mr-2" />,
    color: 'bg-yellow-100 text-yellow-800'
  },
  {
    id: 'food',
    name: 'Food & Drink',
    icon: <Utensils size={20} className="mr-2" />,
    color: 'bg-orange-100 text-orange-800'
  },
  {
    id: 'gaming',
    name: 'Gaming Events',
    icon: <Gamepad2 size={20} className="mr-2" />,
    color: 'bg-indigo-100 text-indigo-800'
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
  },
  {
    id: 5,
    title: "Indie Film Festival",
    category: "movies",
    date: "Sun, Sep 17",
    location: "Downtown Cinema",
    attendees: 15,
    looking: 7,
    image: "https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 6,
    title: "Book Club Meetup",
    category: "books",
    date: "Tue, Sep 19",
    location: "City Library",
    attendees: 8,
    looking: 3,
    image: "https://images.pexels.com/photos/5834/nature-grass-leaf-green.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 7,
    title: "Food Truck Festival",
    category: "food",
    date: "Sat, Sep 23",
    location: "Riverfront Park",
    attendees: 20,
    looking: 8,
    image: "https://images.pexels.com/photos/1264937/pexels-photo-1264937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 8,
    title: "Video Game Tournament",
    category: "gaming",
    date: "Mon, Sep 18",
    location: "Gaming Lounge",
    attendees: 18,
    looking: 6,
    image: "https://images.pexels.com/photos/159393/gamepad-video-game-controller-game-controller-controller-159393.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 9,
    title: "Symphony Orchestra",
    category: "concerts",
    date: "Thu, Sep 28",
    location: "Concert Hall",
    attendees: 14,
    looking: 4,
    image: "https://images.pexels.com/photos/462510/pexels-photo-462510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 10,
    title: "Soccer Match Viewing",
    category: "sports",
    date: "Sat, Sep 30",
    location: "Sports Bar & Grill",
    attendees: 22,
    looking: 10,
    image: "https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 11,
    title: "Street Art Tour",
    category: "art",
    date: "Sun, Sep 24",
    location: "Urban District",
    attendees: 10,
    looking: 5,
    image: "https://images.pexels.com/photos/2119706/pexels-photo-2119706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 12,
    title: "Community Garden Day",
    category: "local",
    date: "Sat, Sep 23",
    location: "Greenwood Gardens",
    attendees: 12,
    looking: 7,
    image: "https://images.pexels.com/photos/9269242/pexels-photo-9269242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

const EventShowcase: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [isAddingEvent, setIsAddingEvent] = useState(false);
  const [newEvent, setNewEvent] = useState({
    title: '',
    category: '',
    date: '',
    location: '',
    description: '',
    email: ''
  });
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [showAll, setShowAll] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewEvent(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newEvent.title || !newEvent.category || !newEvent.date || !newEvent.location || !newEvent.email) {
      setSubmitStatus('error');
      setErrorMessage('Please fill out all required fields');
      return;
    }

    setSubmitStatus('loading');
    
    try {
      // Insert the event into a Supabase table
      const { error: eventError } = await supabase
        .from('event_submissions')
        .insert([newEvent]);

      if (eventError) throw eventError;
      
      // Also add the email to the waitlist
      const { error: waitlistError } = await supabase
        .from('waitlist')
        .insert([{ 
          email: newEvent.email,
          subscribed_to_updates: true
        }]);

      if (waitlistError) throw waitlistError;
      
      setSubmitStatus('success');
      
      // Reset form after a delay
      setTimeout(() => {
        setNewEvent({
          title: '',
          category: '',
          date: '',
          location: '',
          description: '',
          email: ''
        });
        setIsAddingEvent(false);
        setSubmitStatus('idle');
      }, 3000);
    } catch (error) {
      console.error('Error submitting event:', error);
      setSubmitStatus('error');
      setErrorMessage('An error occurred. Please try again.');
    }
  };
  
  const filteredEvents = activeCategory === 'all' 
    ? events 
    : events.filter(event => event.category === activeCategory);

  // Limit the number of displayed events unless showAll is true
  const displayedEvents = showAll ? filteredEvents : filteredEvents.slice(0, 8);

  return (
    <section id="events" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Discover Events</h2>
            <p className="text-xl text-gray-600 max-w-2xl">
              Browse events where people are looking to connect or list your own event
            </p>
          </div>
          <button
            onClick={() => setIsAddingEvent(true)}
            className="bg-purple-600 text-white px-6 py-3 rounded-full font-medium hover:bg-purple-700 transition-colors shadow-md mx-auto md:mx-0"
          >
            List Your Event
          </button>
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

        {isAddingEvent ? (
          <div className="max-w-2xl mx-auto mb-16 bg-white rounded-xl shadow-md p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900">List Your Event</h3>
              <button 
                onClick={() => setIsAddingEvent(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="title" className="block text-gray-700 font-medium mb-2">
                  Event Title*
                </label>
                <input
                  id="title"
                  name="title"
                  type="text"
                  value={newEvent.title}
                  onChange={handleInputChange}
                  placeholder="e.g., Taylor Swift Concert, Art Gallery Opening"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="category" className="block text-gray-700 font-medium mb-2">
                  Category*
                </label>
                <select
                  id="category"
                  name="category"
                  value={newEvent.category}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  required
                >
                  <option value="">Select a category</option>
                  {categories.map(cat => (
                    <option key={cat.id} value={cat.id}>{cat.name}</option>
                  ))}
                </select>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="date" className="block text-gray-700 font-medium mb-2">
                    Date*
                  </label>
                  <input
                    id="date"
                    name="date"
                    type="date"
                    value={newEvent.date}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="location" className="block text-gray-700 font-medium mb-2">
                    Location*
                  </label>
                  <input
                    id="location"
                    name="location"
                    type="text"
                    value={newEvent.location}
                    onChange={handleInputChange}
                    placeholder="e.g., Madison Square Garden, Local Coffee Shop"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="description" className="block text-gray-700 font-medium mb-2">
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={newEvent.description}
                  onChange={handleInputChange}
                  placeholder="Describe the event and what kind of people you're looking to connect with"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent h-32 resize-none"
                ></textarea>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Your Email*
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={newEvent.email}
                  onChange={handleInputChange}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  required
                />
                <p className="text-sm text-gray-500 mt-1">
                  We'll notify you when our platform launches and your event is live.
                </p>
              </div>
              
              <button
                type="submit"
                disabled={submitStatus === 'loading' || submitStatus === 'success'}
                className={`w-full bg-purple-600 text-white px-6 py-3 rounded-lg font-medium text-lg 
                          hover:bg-purple-700 transition-colors shadow-md flex items-center justify-center
                          ${submitStatus === 'success' ? 'bg-green-600 hover:bg-green-600' : ''}`}
              >
                {submitStatus === 'loading' && (
                  <span className="mr-2 animate-spin">↻</span>
                )}
                {submitStatus === 'idle' && 'Submit Event'}
                {submitStatus === 'loading' && 'Submitting...'}
                {submitStatus === 'error' && 'Try Again'}
                {submitStatus === 'success' && 'Event Submitted!'}
              </button>
              
              {submitStatus === 'error' && (
                <p className="text-red-500 text-sm">{errorMessage}</p>
              )}
              
              {submitStatus === 'success' && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-800 text-center">
                    Thanks for submitting your event! You've been added to our waitlist and we'll notify you when we launch.
                  </p>
                </div>
              )}
            </form>
          </div>
        ) : (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {displayedEvents.map((event) => {
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

            {filteredEvents.length > 8 && (
              <div className="mt-12 text-center">
                <button 
                  onClick={() => setShowAll(!showAll)}
                  className="inline-block bg-purple-600 text-white px-8 py-3 rounded-full font-medium hover:bg-purple-700 transition-colors shadow-md"
                >
                  {showAll ? 'Show Less' : 'Show More Events'}
                </button>
              </div>
            )}
          </>
        )}
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