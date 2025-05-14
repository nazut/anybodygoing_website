import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Send, Users, Calendar, MapPin, Link2, Share2, X } from 'lucide-react';
import { format } from 'date-fns';

interface Message {
  id: number;
  userId: number;
  userName: string;
  userAvatar: string;
  content: string;
  timestamp: Date;
}

const mockEvent = {
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
  organizer: "Live Nation",
  meetupLocation: "Starbucks on 34th St",
  meetupTime: "5:00 PM"
};

const mockMessages: Message[] = [
  {
    id: 1,
    userId: 1,
    userName: "Alex",
    userAvatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
    content: "Hey everyone! Super excited about the event. Anyone want to meet up beforehand for coffee?",
    timestamp: new Date(2025, 5, 14, 9, 30)
  },
  {
    id: 2,
    userId: 2,
    userName: "Maria",
    userAvatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    content: "Coffee sounds great! I know a nice place nearby.",
    timestamp: new Date(2025, 5, 14, 9, 35)
  },
  {
    id: 3,
    userId: 3,
    userName: "James",
    userAvatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    content: "Count me in! What time were you thinking?",
    timestamp: new Date(2025, 5, 14, 9, 40)
  }
];

const EventChat: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [newMessage, setNewMessage] = useState('');
  const [messages, setMessages] = useState(mockMessages);
  const [showEventDetails, setShowEventDetails] = useState(true);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    const message: Message = {
      id: messages.length + 1,
      userId: 4,
      userName: "Sarah",
      userAvatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
      content: newMessage,
      timestamp: new Date()
    };

    setMessages([...messages, message]);
    setNewMessage('');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => navigate('/browse')}
                className="text-gray-600 hover:text-gray-800"
              >
                <ArrowLeft size={24} />
              </button>
              <div>
                <h1 className="text-xl font-bold text-gray-900">{mockEvent.title}</h1>
                <p className="text-sm text-gray-500">
                  {format(mockEvent.date, 'MMMM d, yyyy')} • {mockEvent.location}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-gray-600 hover:text-gray-800">
                <Share2 size={20} />
              </button>
              <div className="flex items-center space-x-2 text-gray-600">
                <Users size={20} />
                <span>{mockEvent.attendees} members</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Event Details */}
      {showEventDetails && (
        <div className="bg-white border-b">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-start space-x-4">
              <img
                src={mockEvent.image}
                alt={mockEvent.title}
                className="w-24 h-24 rounded-lg object-cover"
              />
              <div className="flex-1">
                <div className="flex justify-between">
                  <div>
                    <h2 className="font-medium text-gray-900">Event Details</h2>
                    <div className="mt-2 space-y-1 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Calendar size={16} className="mr-2" />
                        <span>{format(mockEvent.date, 'MMMM d, yyyy')} at {mockEvent.meetupTime}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin size={16} className="mr-2" />
                        <span>Meeting at: {mockEvent.meetupLocation}</span>
                      </div>
                      <div className="flex items-center">
                        <Link2 size={16} className="mr-2" />
                        <span>Organized by {mockEvent.organizer}</span>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => setShowEventDetails(false)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-4">
        <div className="container mx-auto max-w-4xl space-y-4">
          {messages.map(message => (
            <div key={message.id} className="flex items-start space-x-3">
              <img
                src={message.userAvatar}
                alt={message.userName}
                className="w-10 h-10 rounded-full"
              />
              <div className="flex-1">
                <div className="flex items-baseline space-x-2">
                  <span className="font-medium text-gray-900">{message.userName}</span>
                  <span className="text-sm text-gray-500">
                    {format(message.timestamp, 'h:mm a')}
                  </span>
                </div>
                <p className="text-gray-700 mt-1">{message.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Message Input */}
      <div className="bg-white border-t">
        <div className="container mx-auto max-w-4xl px-4 py-4">
          <form onSubmit={handleSendMessage} className="flex space-x-4">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
            <button
              type="submit"
              className="bg-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-purple-700 transition-colors"
            >
              <Send size={20} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EventChat;