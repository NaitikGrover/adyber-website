import React, { useState } from 'react';
import { Instagram, Linkedin, Mail, Phone, MapPin, ArrowRight, Loader2, Check } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string, sectionId?: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.trim()) return;

    setStatus('loading');

    const formData = new FormData();
    formData.append('email', email.trim());

    try {
      await fetch("https://script.google.com/macros/s/AKfycbws01Ff_-azwsLL0D8w7zKB-UoRYXIpxKtjyiSzlzk/exec", {
        method: "POST",
        body: formData,
        mode: "no-cors",
      });

      setStatus('success');
      setEmail('');
      setTimeout(() => setStatus('idle'), 3000);
    } catch (error) {
      console.error('Subscription error:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-10 sm:pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 mb-16">
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <button
              onClick={() => onNavigate('home')}
              className="text-2xl font-bold tracking-tighter text-white block mb-6 transition-colors text-left"
            >
              Adyber<span className="text-brand-lime">.</span>
            </button>
            <p className="text-gray-400 text-sm mb-6 max-w-sm">
              Turning Instagram pages into profitable brands with precision and style.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com/adyber.in" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-lime transition-colors p-2 -ml-2" aria-label="Follow Adyber on Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://www.linkedin.com/company/adyber" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-lime transition-colors p-2" aria-label="Follow Adyber on LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-brand-lime" />
                <a href="mailto:Team@adyber.com" className="hover:text-brand-lime transition-colors break-all">Team@adyber.com</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-brand-lime" />
                <a href="tel:+918439607077" className="hover:text-brand-lime transition-colors">+91 8439607077</a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} className="text-brand-lime" />
                <span className="text-gray-400">Dehradun, Uttarakhand, IN</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li>
                <button onClick={() => onNavigate('home', 'about')} className="hover:text-brand-lime transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('home', 'pricing')} className="hover:text-brand-lime transition-colors">
                  Pricing
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('home', 'services')} className="hover:text-brand-lime transition-colors">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('home', 'testimonials')} className="hover:text-brand-lime transition-colors">
                  Testimonials
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('home', 'faq')} className="hover:text-brand-lime transition-colors">
                  FAQ
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Opportunities</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li>
                <button onClick={() => onNavigate('apply')} className="hover:text-brand-lime transition-colors">
                  Work With Us
                </button>
              </li>
            </ul>
          </div>

          <div className="sm:col-span-2 lg:col-span-1">
            <h4 className="text-white font-semibold mb-6">Stay Updated</h4>
            <p className="text-gray-400 text-sm mb-4">Subscribe to get free Instagram growth tips.</p>
            <form onSubmit={handleSubscribe} className="relative max-w-sm">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={status === 'loading' || status === 'success'}
                required
                className="w-full bg-zinc-900 border border-white/10 rounded-full py-3 pl-5 pr-14 text-sm text-white focus:outline-none focus:border-brand-lime focus:ring-1 focus:ring-brand-lime transition-all disabled:opacity-50 h-12"
              />
              <button
                type="submit"
                disabled={status === 'loading' || status === 'success'}
                className={`absolute right-1 top-1 bottom-1 aspect-square rounded-full flex items-center justify-center transition-all duration-300 ${status === 'success'
                  ? 'bg-brand-lime text-black'
                  : 'bg-white text-black hover:bg-brand-lime'
                  }`}
                aria-label="Subscribe"
              >
                {status === 'loading' ? (
                  <Loader2 size={16} className="animate-spin" />
                ) : status === 'success' ? (
                  <Check size={16} />
                ) : (
                  <ArrowRight size={16} />
                )}
              </button>
            </form>
            {status === 'success' && (
              <p className="text-brand-lime text-xs mt-2 ml-2 animate-pulse">Successfully subscribed!</p>
            )}
            {status === 'error' && (
              <p className="text-red-500 text-xs mt-2 ml-2">Something went wrong. Try again.</p>
            )}
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Adyber Agency. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <button onClick={() => onNavigate('privacy')} className="hover:text-brand-lime transition-colors">
              Privacy Policy
            </button>
            <button onClick={() => onNavigate('terms')} className="hover:text-brand-lime transition-colors">
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;