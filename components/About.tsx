import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { Button } from './Button';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-24 bg-zinc-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-4 bg-gradient-to-r from-white/20 to-gray-500/20 rounded-xl blur-lg opacity-30" />
            <div className="relative rounded-xl border border-white/10 shadow-2xl w-full h-[250px] sm:h-[400px] lg:h-[600px] overflow-hidden">
              <img
                src="/images/hero/gp.png"
                alt="Digital Strategy Dashboard"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 tracking-tight leading-tight">
              We Don't Just Post. <br />
              We <span className="text-gray-400 underline decoration-1 underline-offset-4">Build Authorities.</span>
            </h2>
            <p className="text-gray-400 mb-8 leading-relaxed text-base sm:text-lg">
              Headquartered in Dehradun, Uttarakhand, Adyber was founded by Naitik Grover and Rishi Kapoor to help small businesses and startups stop posting into the void. We provide transparent, data-backed Instagram strategies that turn followers into customers. No fluff, just engagement and growth.
            </p>

            <ul className="space-y-4 mb-10">
              {[
                'Dedicated content managers',
                'Real-time engagement tracking',
                'Custom aesthetic tailored to your niche',
                'Consistent posting schedule'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-white mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300 text-sm sm:text-base">{item}</span>
                </li>
              ))}
            </ul>

            <Button variant="outline" className="w-full sm:w-auto h-12">Learn More About Us</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;