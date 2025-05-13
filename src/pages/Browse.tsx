import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, MapPin, Calendar, Users, LogOut, Filter, X } from 'lucide-react';
import { format } from 'date-fns';

const mockEvents = [
  {
    id: 1,
    title: "Taylor Swift Concert",
    category: "Music",
    date: new Date(2025, 5, 15),
    location: "Madison Square Garden",
    attendees: 15,
    maxAttendees: 20,
    image: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg",
    description: "Looking for Swifties to hang out with before and during the concert! We'll meet up early to grab food and drinks.",
    price: "$150-300",
    organizer: "Live Nation"
  },
  {
    id: 2,
    title: "Local Art Gallery Opening",
    category: "Art",
    date: new Date(2025, 5, 20),
    location: "Downtown Art Gallery",
    attendees: 8,
    maxAttendees: 12,
    image: "https://images.pexels.com/photos/1674049/pexels-photo-1674049.jpeg",
    description: "First-time gallery visitor looking for art enthusiasts to explore and discuss the exhibitions with.",
    price: "Free",
    organizer: "City Arts Council"
  },
  {
    id: 3,
    title: "NBA Finals Game",
    category: "Sports",
    date: new Date(2025, 6, 1),
    location: "Barclays Center",
    attendees: 12,
    maxAttendees: 15,
    image: "https://images.pexels.com/photos/945471/pexels-photo-945471.jpeg",
    description: "Got extra tickets in my section! Looking for basketball fans to join our group.",
    price: "$200-400",
    organizer: "NBA"
  }
];

const categories = ["All", "Music", "Art", "Sports", "Food", "Tech", "Outdoor"];

const Browse: React.FC = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showFilters, setShowFilters] = useState(false);
  
  const filteredEvents = mockEvents.filter(event => {
    const matchesSearch = 
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'All' || event.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-8">
              <h1 className="text-2xl font-bold text-purple-600">EventBuddy</h1>
              <div className="relative flex items-center">
                <input
                  type="text"
                  placeholder="Search events..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent w-64"
                />
                <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="ml-2 p-2 hover:bg-gray-100 rounded-full"
                >
                  <Filter size={20} className="text-gray-600" />
                </button>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <img
                  src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
                  alt="Profile"
                  className="w-8 h-8 rounded-full"
                />
                <span className="font-medium">Sarah</span>
              </div>
              <button className="text-gray-600 hover:text-gray-800">
                <LogOut size={20} />
              </button>
            </div>
          </div>
          
          {/* Filters */}
          {showFilters && (
            <div className="mt-4 py-4 border-t border-gray-100">
              <div className="flex items-center space-x-4">
                <span className="text-sm font-medium text-gray-600">Categories:</span>
                <div className="flex flex-wrap gap-2">
                  {categories.map(category => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                        selectedCategory === category
                          ? 'bg-purple-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map(event => (
            <div key={event.id} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="h-48 overflow-hidden relative group">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-2 right-2 bg-white/90 px-3 py-1 rounded-full text-sm font-medium text-purple-600">
                  {event.price}
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-900">{event.title}</h3>
                  <span className="text-sm font-medium text-purple-600 bg-purple-50 px-2 py-1 rounded-full">
                    {event.category}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{event.description}</p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-500">
                    <Calendar size={18} className="mr-2" />
                    <span>{format(event.date, 'MMM d, yyyy')}</span>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <MapPin size={18} className="mr-2" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <Users size={18} className="mr-2" />
                    <span>{event.attendees}/{event.maxAttendees} people joined</span>
                  </div>
                </div>
                <button
                  onClick={() => navigate(`/event/${event.id}/chat`)}
                  className="w-full bg-purple-600 text-white py-2 rounded-lg font-medium hover:bg-purple-700 transition-colors"
                >
                  Join Group
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Browse;