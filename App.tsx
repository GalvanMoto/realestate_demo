import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PropertyGrid from './components/PropertyGrid';
import AboutUs from './components/AboutUs';
import Showcase from './components/Showcase';
import ChatWidget from './components/ChatWidget';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900 overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <PropertyGrid />
        <AboutUs />
        <Showcase />
      </main>
      
      <Footer />

      <ChatWidget />
    </div>
  );
};

export default App;