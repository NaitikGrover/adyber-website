import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from './Button';

interface HeroProps {
  onNavigate: (page: string, sectionId?: string, packageName?: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section id="home" className="relative pt-36 pb-16 sm:pt-40 sm:pb-24 lg:pt-48 lg:pb-32 overflow-hidden bg-black text-left">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[350px] h-[300px] sm:w-[600px] sm:h-[400px] lg:w-[1000px] lg:h-[600px] bg-brand-lime/10 rounded-full blur-[60px] sm:blur-[100px] -z-10 pointer-events-none opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">

        {/* New Offer Badge */}
        <div
          onClick={() => onNavigate('bookings', undefined, 'Content Creation - Pro - ₹4,999')}
          className="inline-flex items-center gap-2 p-1 pr-4 rounded-full bg-white/5 border border-white/10 mb-8 sm:mb-10 animate-fade-in-up hover:border-brand-lime/50 transition-colors cursor-pointer group max-w-full"
        >
          <span className="bg-brand-lime text-black text-[10px] sm:text-xs font-bold px-2 py-0.5 rounded-full uppercase tracking-wider flex-shrink-0">
            New Offer
          </span>
          <span className="text-xs sm:text-sm text-gray-300 group-hover:text-brand-lime transition-colors flex items-center gap-1 truncate">
            Launch for ₹4,999 <ArrowRight size={14} className="flex-shrink-0" />
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tighter text-white mb-6 sm:mb-8 leading-[1.1] sm:leading-[1.1]">
          Turn your Instagram into a <br className="hidden sm:block" />
          <span className="italic text-gray-200">real brand.</span>
        </h1>

        {/* Description */}
        <p className="text-gray-400 text-base sm:text-lg lg:text-xl max-w-2xl mb-8 sm:mb-12 leading-relaxed px-2">
          Stop posting randomly. We build data-driven content strategies, design stunning visuals, and manage your growth so you can focus on running your business.
        </p>

        {/* CTA */}
        <div className="mb-12 sm:mb-20 w-full sm:w-auto px-4 sm:px-0">
          <Button
            variant="glow"
            className="w-full sm:w-auto h-12 sm:h-14 px-8 sm:px-10 text-base sm:text-lg"
            onClick={() => onNavigate('bookings')}
          >
            Get Started
          </Button>
        </div>

        {/* Hero Image Visual */}
        <div className="relative w-full max-w-6xl mx-auto px-2 sm:px-0">
          {/* Glass Container */}
          <div className="relative rounded-xl sm:rounded-2xl border border-white/10 bg-zinc-900/40 backdrop-blur-xl overflow-hidden h-[250px] sm:h-[400px] md:h-[600px] shadow-2xl">
            {/* Content Image */}
            <div className="absolute inset-0">
              <img
                src="/images/hero/gp.png"
                alt="Digital Growth Dashboard"
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
            </div>
          </div>

          {/* Glow effect behind container */}
          <div className="absolute -inset-4 bg-brand-lime/20 blur-2xl sm:blur-3xl -z-10 rounded-[3rem] opacity-20" />
        </div>

      </div>
    </section>
  );
};

export default Hero;