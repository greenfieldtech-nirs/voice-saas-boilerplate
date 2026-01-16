import React from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { Stats } from '../components/Stats';
import { Pricing } from '../components/Pricing';
import { Testimonials } from '../components/Testimonials';
import { CTA } from '../components/CTA';
import { Footer } from '../components/Footer';
import './LandingPage.css';

export const LandingPage: React.FC = () => {
  return (
    <div className="landing-page">
      <Navbar />
      <Hero />
      <Features />
      <Stats />
      <Pricing />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
};