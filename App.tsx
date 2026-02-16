import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import GetStarted from './components/GetStarted';
import WhatsAppButton from './components/WhatsAppButton';
import NotFound from './components/NotFound';
import Testimonials from './components/Testimonials';

import ApplyPage from './components/ApplyPage';

type Page = 'home' | 'privacy' | 'terms' | 'bookings' | 'apply' | '404';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>(() => {
    const path = window.location.pathname.replace(/^\//, '');
    if (!path || path === 'home') return 'home';
    if (path === 'bookings') return 'bookings';
    if (path === 'privacy') return 'privacy';
    if (path === 'terms') return 'terms';
    if (path === 'apply') return 'apply';
    return '404';
  });

  useEffect(() => {
    const titles: Record<Page, string> = {
      home: 'Adyber Agency - Transform Your Digital Presence',
      bookings: 'Bookings - Adyber Agency',
      privacy: 'Privacy Policy - Adyber Agency',
      terms: 'Terms of Service - Adyber Agency',
      apply: 'Work With Us - Adyber Agency',
      '404': 'Page Not Found - Adyber Agency'
    };
    document.title = titles[currentPage];
  }, [currentPage]);

  const [preSelectedPackage, setPreSelectedPackage] = useState<string | null>(null);

  const navigateTo = (page: string, sectionId?: string, packageName?: string) => {
    const isPageChange = currentPage !== page;
    setCurrentPage(page as Page);

    if (packageName) {
      setPreSelectedPackage(packageName);
    }

    // Update URL without reloading
    const newPath = page === 'home' ? '/' : `/${page}`;
    window.history.pushState({}, '', newPath);

    if (page === 'home' || page === 'bookings') {
      if (sectionId) {
        // If changing pages, wait for render before scrolling
        if (isPageChange) {
          setTimeout(() => {
            const element = document.getElementById(sectionId);
            element?.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        } else {
          // If already on home, scroll immediately
          const element = document.getElementById(sectionId);
          element?.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className="bg-black min-h-screen text-white font-sans selection:bg-white selection:text-black flex flex-col">
      <Header onNavigate={navigateTo} />

      <main className="flex-grow">
        {currentPage === 'home' && (
          <>
            <Hero onNavigate={navigateTo} />
            <Services />
            <Gallery />
            <Pricing onNavigate={navigateTo} />
            <About />
            <Testimonials />
            <FAQ />
          </>
        )}
        {currentPage === 'bookings' && <GetStarted preSelectedPackage={preSelectedPackage} />}
        {currentPage === 'privacy' && <PrivacyPolicy />}
        {currentPage === 'terms' && <TermsOfService />}
        {currentPage === 'apply' && <ApplyPage />}
        {currentPage === '404' && <NotFound onNavigate={navigateTo} />}
      </main>

      <Footer onNavigate={navigateTo} />
      <WhatsAppButton />
    </div>
  );
}

export default App;