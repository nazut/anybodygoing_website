import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import EventShowcase from '../components/EventShowcase';
import Testimonials from '../components/Testimonials';
import SignupForm from '../components/SignupForm';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <EventShowcase />
        <Testimonials />
        <SignupForm />
      </main>
      <Footer />
    </div>
  );
};

export default Home;