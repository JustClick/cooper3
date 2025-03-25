import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Brands from './components/Brands';
import Marketplaces from './components/Marketplaces';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import CookiePolicy from './components/CookiePolicy';

function App() {
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
  const [showTermsOfService, setShowTermsOfService] = useState(false);
  const [showCookiePolicy, setShowCookiePolicy] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <section id="about">
        <About />
      </section>
      <section id="brands">
        <Brands />
      </section>
      <section id="marketplaces">
        <Marketplaces />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer 
        onPrivacyClick={() => setShowPrivacyPolicy(true)}
        onTermsClick={() => setShowTermsOfService(true)}
        onCookieClick={() => setShowCookiePolicy(true)}
      />

      {showPrivacyPolicy && (
        <PrivacyPolicy onClose={() => setShowPrivacyPolicy(false)} />
      )}
      {showTermsOfService && (
        <TermsOfService onClose={() => setShowTermsOfService(false)} />
      )}
      {showCookiePolicy && (
        <CookiePolicy onClose={() => setShowCookiePolicy(false)} />
      )}
    </div>
  );
}

export default App;