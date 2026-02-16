import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FAQItem } from '../types';

const faqData: FAQItem[] = [
  {
    question: "How quickly can we see results?",
    answer: "Typically, our clients start seeing initial traction within the first 30 days. However, significant ROI usually compounds around months 3-4 as our data models optimize your campaigns.",
  },
  {
    question: "Do you offer custom packages?",
    answer: "Absolutely. While we have standard tiers, 60% of our clients are on custom plans tailored to their specific industry needs and budget constraints.",
  },
  {
    question: "What industries do you specialize in?",
    answer: "We have deep expertise in SaaS, E-commerce, and FinTech. However, our fundamental growth frameworks apply effectively to most B2B and B2C sectors.",
  },
  {
    question: "Is there a long-term contract?",
    answer: "We believe in earning your business every month. Our standard contracts are month-to-month with a 30-day cancellation notice, giving you flexibility and peace of mind.",
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-black border-t border-white/5">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">Common Questions</h2>
        </div>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div 
              key={index} 
              className="border border-white/10 rounded-lg bg-zinc-900/20 overflow-hidden transition-all duration-200 hover:border-brand-lime/30"
            >
              <button
                className="w-full px-5 py-4 sm:px-6 sm:py-5 flex items-center justify-between text-left focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className={`text-base sm:text-lg font-medium transition-colors pr-4 ${openIndex === index ? 'text-brand-lime' : 'text-gray-300 hover:text-brand-lime'}`}>
                  {item.question}
                </span>
                <span className={`flex-shrink-0 transition-colors ${openIndex === index ? 'text-brand-lime' : 'text-white/50'}`}>
                  {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </span>
              </button>
              
              <div 
                className={`px-5 sm:px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-60 pb-5 sm:pb-6 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;