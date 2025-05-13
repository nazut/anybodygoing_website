export interface Event {
  id: number;
  title: string;
  category: string;
  date: string;
  location: string;
  attendees: number;
  looking: number;
  image: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  avatar: string;
  rating: number;
}

export interface Category {
  id: string;
  name: string;
  icon: React.ReactNode;
  color: string;
}