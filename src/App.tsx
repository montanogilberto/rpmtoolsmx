import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WhySection from './components/WhySection';
import HowSection from './components/HowSection';
import WhatSection from './components/WhatSection';
import MissionVisionValues from './components/MissionVisionValues';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import LogoDemo from './components/LogoDemo';
import './styles/industrial.css';

function App() {
  return (
    <div className="min-h-screen bg-technical-black">
      {/* Header Section */}
      <Header />

      {/* Main Content Sections */}
      <main className="relative w-full main-content">
        <Hero />
        <WhySection />
        <HowSection />
        <WhatSection />
        <MissionVisionValues />
        <ContactForm />
        <Footer />
      </main>
    </div>
  );
}

export default App;
