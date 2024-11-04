import React from 'react';
import HeaderSection from '../components/HeaderSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import GallerySection from '../components/GallerySection';
import ContactSection from '../components/ContactSection';

function Home() {
  return (
    <div className="min-h-screen">
      <HeaderSection />
      <AboutSection />
      <ServicesSection />
      <GallerySection />
      <ContactSection />
    </div>
  );
}

export default Home;