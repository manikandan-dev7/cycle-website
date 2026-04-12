import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import TrustBar from './components/TrustBar';
import ShowroomSection from './components/ShowroomSection';
import ScrollAnimationSection from './components/ScrollAnimationSection';
import CategoriesSection from './components/CategoriesSection';
import CycleShowcase from './components/CycleShowcase';
import RentalsSection from './components/RentalsSection';
import BuyersGuide from './components/BuyersGuide';
import NewsSection from './components/NewsSection';
import GallerySection from './components/GallerySection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';

function App() {
  return (
    <div className="App overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <TrustBar />
        <ShowroomSection />
        <ScrollAnimationSection />
        <CategoriesSection />
        <CycleShowcase />
        <RentalsSection />
        <BuyersGuide />
        <NewsSection />
        <GallerySection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}

export default App;
