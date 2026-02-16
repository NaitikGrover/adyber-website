import React, { useState, useRef, useEffect } from 'react';
import { Check } from 'lucide-react';
import { Button } from './Button';
import { PricingTier } from '../types';

interface PricingProps {
  onNavigate: (page: string) => void;
}

const tiersByService: Record<string, PricingTier[]> = {
  web: [
    {
      name: 'Starter',
      price: '₹7,999',
      originalPrice: '₹14,999',
      features: [
        'Single Page Design',
        'Responsive Layout',
        'Basic SEO Setup',
        'Contact Form',
        '1 Month Support',
        'SSL Certificate'
      ],
      recommended: false,
    },
    {
      name: 'Pro',
      price: '₹17,999',
      originalPrice: '₹29,999',
      recommended: true,
      features: [
        'Up to 5 Pages',
        'Custom UI/UX Design',
        'CMS Integration',
        'Advanced SEO',
        'Speed Optimization',
        '3 Months Support'
      ],
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      recommended: false,
      features: [
        'E-commerce Solutions',
        'Custom Web Applications',
        'API Integrations',
        'Dedicated Developer',
        '24/7 Priority Support',
        'Unlimited Maintenance'
      ],
    }
  ],
  content: [
    {
      name: 'Starter',
      price: '₹2,999',
      originalPrice: '₹4,999',
      features: [
        '20+ Branded Posts',
        '2 Reels',
        'Daily Posting',
        'Clean Instagram Layout',
        'Caption + Hashtags',
        'Profile Setup'
      ],
      recommended: false,
    },
    {
      name: 'Pro',
      price: '₹4,999',
      originalPrice: '₹9,999',
      recommended: true,
      features: [
        '30+ Posts',
        '6 Reels',
        'Custom Brand Colors',
        'Better Grid Layout',
        'Growth-focused Captions',
        'Engagement Strategy'
      ],
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      recommended: false,
      features: [
        'Daily Content Posting',
        'Unlimited Reels Production',
        'Dedicated Account Manager',
        'Advanced Analytics & Reporting',
        'Influencer Collaboration',
        '24/7 Priority Support'
      ],
    }
  ],
  marketing: [
    {
      name: 'Starter',
      price: '₹9,999',
      originalPrice: '₹14,999',
      features: [
        'Google Ads Setup',
        'Keyword Research',
        'Basic Monthly Audit',
        'Lead Generation',
        'Weekly Reports',
        'Email Support'
      ],
      recommended: false,
    },
    {
      name: 'Pro',
      price: '₹19,999',
      originalPrice: '₹29,999',
      recommended: true,
      features: [
        'Meta Ads Management',
        'Conversion Funnels',
        'Competitor Analysis',
        'Retargeting Campaigns',
        'Detailed Analytics',
        'Priority Support'
      ],
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      recommended: false,
      features: [
        'Full Digital Strategy',
        'Marketing Automation',
        'Omni-channel Presence',
        'Influencer Marketing',
        'Dedicated Growth Lead',
        'ROI-focused Scaling'
      ],
    }
  ]
};

const services = [
  { id: 'content', label: 'Content Creation' },
  { id: 'web', label: 'Website Development' },
  { id: 'marketing', label: 'Digital Marketing' }
];

const Pricing: React.FC<PricingProps> = ({ onNavigate }) => {
  const [activeService, setActiveService] = useState('content');
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    const updateIndicator = () => {
      const activeIndex = services.findIndex(s => s.id === activeService);
      const activeButton = tabsRef.current[activeIndex];
      if (activeButton) {
        // Use a small timeout to ensure layout has settled (especially for hidden scrollbars)
        setTimeout(() => {
          setIndicatorStyle({
            left: activeButton.offsetLeft,
            width: activeButton.offsetWidth
          });
        }, 50);
      }
    };

    updateIndicator();
    window.addEventListener('resize', updateIndicator);
    return () => window.removeEventListener('resize', updateIndicator);
  }, [activeService]);

  const activeTiers = tiersByService[activeService];

  return (
    <section id="pricing" className="py-16 sm:py-24 bg-black relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[800px] sm:h-[600px] bg-brand-lime/5 rounded-full blur-[60px] sm:blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">Simple Pricing</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base mb-8">
            Transparent packages designed for businesses ready to grow.
          </p>

          {/* Service Toggle */}
          <div className="flex justify-center mb-8 sm:mb-16 px-2">
            <div className="inline-flex p-1 bg-transparent rounded-full border border-white/10 backdrop-blur-sm relative transition-all duration-300 max-w-[calc(100vw-2rem)] overflow-x-auto no-scrollbar gap-x-1">
              {/* Sliding Border Indicator */}
              <div
                className="absolute top-1 bottom-1 transition-all duration-500 ease-in-out border border-brand-lime rounded-full shadow-[0_0_20px_rgba(204,255,0,0.15)] z-0"
                style={{
                  left: indicatorStyle.left,
                  width: indicatorStyle.width
                }}
              />

              {services.map((service, index) => (
                <button
                  key={service.id}
                  ref={el => tabsRef.current[index] = el}
                  onClick={() => setActiveService(service.id)}
                  className={`relative z-10 px-2 sm:px-10 py-2 sm:py-2.5 text-[10px] sm:text-sm font-medium transition-all duration-500 whitespace-nowrap ${activeService === service.id
                    ? 'text-brand-lime scale-105'
                    : 'text-gray-500 hover:text-white'
                    }`}
                >
                  {service.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto overflow-visible">
          {activeTiers.map((tier, index) => (
            <div
              key={`${activeService}-${index}`}
              className={`relative flex flex-col p-6 sm:p-8 rounded-2xl border transition-all duration-500 group animate-slideInRight opacity-0`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`absolute inset-0 rounded-2xl transition-opacity duration-300 ${tier.recommended
                ? 'bg-zinc-900/40 border-brand-lime/50 shadow-[0_0_40px_-10px_rgba(204,255,0,0.1)]'
                : 'bg-zinc-900/20 border-white/10 group-hover:border-white/30 group-hover:bg-zinc-900/40'
                }`} />

              <div className="relative z-10 flex flex-col h-full">
                {tier.recommended && (
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-brand-lime text-black text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wide shadow-lg whitespace-nowrap">
                    Most Popular
                  </div>
                )}

                <div className="mb-6 sm:mb-8">
                  <h3 className={`text-lg font-medium mb-2 ${tier.recommended ? 'text-brand-lime' : 'text-gray-200'}`}>{tier.name}</h3>

                  <div className="flex flex-col">
                    {tier.originalPrice && (
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-gray-500 line-through text-sm">
                          {tier.originalPrice}
                        </span>
                        <span className="text-brand-lime text-[10px] sm:text-xs font-bold bg-brand-lime/10 px-2 py-0.5 rounded-full">
                          SAVE {Math.round((1 - parseInt(tier.price.replace(/[^\d]/g, '')) / parseInt(tier.originalPrice.replace(/[^\d]/g, ''))) * 100)}%
                        </span>
                      </div>
                    )}
                    <div className="flex items-baseline">
                      <span className="text-3xl sm:text-4xl font-bold text-white">{tier.price}</span>
                      {tier.price !== 'Custom' && <span className="text-gray-500 ml-2 text-sm sm:text-base">
                        {activeService === 'web' ? '/project' : '/month'}
                      </span>}
                    </div>
                  </div>

                  <div className="text-gray-500 text-sm mt-4 min-h-[3rem] sm:min-h-[4rem] flex flex-col gap-1">
                    {tier.name === 'Starter' && (
                      <>
                        <p>For individuals and small businesses.</p>
                        <p className="text-gray-400">Essential features to get you started.</p>
                      </>
                    )}
                    {tier.name === 'Pro' && (
                      <>
                        <p>For growing brands and businesses.</p>
                        <p className="text-gray-400">The perfect balance of features and value.</p>
                      </>
                    )}
                    {tier.name === 'Enterprise' && (
                      <p>For established brands needing scale.</p>
                    )}
                  </div>
                </div>

                <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6 sm:mb-8" />

                <ul className="space-y-4 mb-8 flex-1">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className={`w-5 h-5 mr-3 flex-shrink-0 ${tier.recommended ? 'text-brand-lime' : 'text-gray-500 group-hover:text-gray-300'}`} />
                      <span className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={tier.recommended ? 'glow' : 'outline'}
                  fullWidth
                  onClick={() => {
                    const serviceLabel = services.find(s => s.id === activeService)?.label;
                    const packageName = `${serviceLabel} - ${tier.name} - ${tier.price}`;
                    onNavigate('bookings', undefined, packageName);
                  }}
                  className="text-sm py-4 relative z-20"
                >
                  {tier.name === 'Enterprise' ? 'Contact Sales' : `Choose ${tier.name}`}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;