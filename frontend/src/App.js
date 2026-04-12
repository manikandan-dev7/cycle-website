import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import TrustBar from './components/TrustBar';
import BrandsMarquee from './components/BrandsMarquee';
import ShowroomSection from './components/ShowroomSection';
import CategoriesSection from './components/CategoriesSection';
import CycleShowcase from './components/CycleShowcase';
import RentalsSection from './components/RentalsSection';
import BuyersGuide from './components/BuyersGuide';
import NewsSection from './components/NewsSection';
import GallerySection from './components/GallerySection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';
import CursorGlow from './components/CursorGlow';

function App() {
  return (
    <div className="App overflow-x-hidden">
      <CursorGlow />
      <Navbar />
      <main>
        <HeroSection />
        <TrustBar />
        <BrandsMarquee />
        <ShowroomSection />
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
