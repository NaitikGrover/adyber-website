import React from 'react';
import { FeaturesSectionWithHoverEffects } from './ui/feature-section-with-hover-effects';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-16 sm:py-24 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">Our Services</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base">
            Everything you need to scale your business, all under one roof.
          </p>
        </div>

        <FeaturesSectionWithHoverEffects />
      </div>
    </section>
  );
};

export default Services;