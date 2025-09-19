import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WhySection from './components/WhySection';
import HowSection from './components/HowSection';
import WhatSection from './components/WhatSection';
import MissionVisionValues from './components/MissionVisionValues';
import './styles/industrial.css';

function App() {
  return (
    <div className="min-h-screen bg-technical-black">
      <Header />
      <Hero />
      <WhySection />
      <HowSection />
      <WhatSection />
      <MissionVisionValues />
    </div>
  );
}

export default App;
