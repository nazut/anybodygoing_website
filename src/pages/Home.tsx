import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import EventShowcase from '../components/EventShowcase';
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
        <SignupForm title="Get Early Access" description="Join our waitlist to be the first to know when we launch and get early access to our platform." />
      </main>
      <Footer />
    </div>
  );
};

export default Home;