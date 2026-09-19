import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import WhyRusticWisdom from './components/WhyRusticWisdom/WhyRusticWisdom';
import Services from './components/Services/Services';
import HowItWorks from './components/HowItWorks/HowItWorks';
import Results from './components/Results/Results';
import Credentials from './components/Credentials/Credentials';
import Testimonials from './components/Testimonials/Testimonials';
import VideoTestimonials from './components/VideoTestimonials/VideoTestimonials';
import VideoSection from './components/VideoSection/VideoSection';
import SocialMedia from './components/SocialMedia/SocialMedia';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp/FloatingWhatsApp';
import './App.css';

function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <main className="main-content">
        <Hero />
        <About />
        <WhyRusticWisdom />
        <Services />
        <HowItWorks />
        <Results />
        <Credentials />
        <Testimonials />
        <VideoTestimonials />
        <VideoSection />
        <SocialMedia />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
