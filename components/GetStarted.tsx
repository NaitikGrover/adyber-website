import React, { useState, useRef, useEffect } from 'react';
import { Button } from './Button';
import { ChevronDown, Mail, Phone, ArrowRight, Loader2, Check } from 'lucide-react';

const packages = [
  {
    category: 'Content Creation',
    options: [
      { tier: 'Starter', price: '$99' },
      { tier: 'Pro', price: '$180' },
      { tier: 'Enterprise', price: 'Custom' }
    ]
  },
  {
    category: 'Website Development',
    options: [
      { tier: 'Starter', price: '$149' },
      { tier: 'Pro', price: '$499' },
      { tier: 'Enterprise', price: 'Custom' }
    ]
  },
  {
    category: 'Digital Marketing',
    options: [
      { tier: 'Starter', price: '$199' },
      { tier: 'Pro', price: '$499' },
      { tier: 'Enterprise', price: 'Custom' }
    ]
  }
];

interface GetStartedProps {
  preSelectedPackage?: string | null;
}

const GetStarted: React.FC<GetStartedProps> = ({ preSelectedPackage }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    instagram: '',
    package: preSelectedPackage || 'Content Creation - Pro - $180',
    message: ''
  });

  useEffect(() => {
    if (preSelectedPackage) {
      setFormData(prev => ({ ...prev, package: preSelectedPackage }));
    }
  }, [preSelectedPackage]);

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const selectPackage = (category: string, tier: string, price: string) => {
    setFormData(prev => ({ ...prev, package: `${category} - ${tier} - ${price}` }));
    setIsDropdownOpen(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch("https://formsubmit.co/ajax/Team@adyber.com", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          _subject: `New Application: ${formData.name} (${formData.package} Plan)`,
          _template: "table"
        })
      });

      if (response.ok) {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          instagram: '',
          package: 'Content Creation - Pro - $180',
          message: ''
        });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-black pt-24 sm:pt-32 pb-16 sm:pb-20 relative overflow-hidden flex items-center">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[10%] w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-brand-lime/5 rounded-full blur-[80px] sm:blur-[120px]" />
        <div className="absolute bottom-[10%] right-[5%] w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] bg-blue-500/5 rounded-full blur-[80px] sm:blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-start">

          {/* Left Column */}
          <div className="flex flex-col justify-center h-full pt-4 sm:pt-10 mb-8 lg:mb-0 text-left">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tighter text-white mb-4 sm:mb-6 leading-tight">
              Ready to <span className="text-brand-lime">explode</span> your growth?
            </h1>
            <p className="text-base sm:text-xl text-gray-400 mb-8 sm:mb-10 max-w-lg leading-relaxed text-left">
              Join hundreds of brands that have transformed their digital presence with Adyber. Let's build something iconic together.
            </p>

            <div className="space-y-6 sm:space-y-8 mb-10 sm:mb-12">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center flex-shrink-0 text-brand-lime text-sm sm:text-base">
                  <span className="font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-base sm:text-lg mb-1">Fill the form</h3>
                  <p className="text-gray-500 text-sm">Tell us about your business and goals.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center flex-shrink-0 text-brand-lime text-sm sm:text-base">
                  <span className="font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-base sm:text-lg mb-1">Strategy Call</h3>
                  <p className="text-gray-500 text-sm">We'll hop on a quick call to audit your current presence.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center flex-shrink-0 text-brand-lime text-sm sm:text-base">
                  <span className="font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-base sm:text-lg mb-1">Launch</h3>
                  <p className="text-gray-500 text-sm">We execute the strategy and watch the numbers climb.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 text-sm text-gray-400 border-t border-white/10 pt-6 sm:pt-8">
              <a href="mailto:Team@adyber.com" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail size={16} /> Team@adyber.com
              </a>
              <a href="tel:+918439607077" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone size={16} /> +91 8439607077
              </a>
            </div>
          </div>

          {/* Right Column: The Form */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-lime/10 to-transparent blur-2xl -z-10 rounded-3xl transform rotate-1" />

            <div className="bg-zinc-900/80 backdrop-blur-xl border border-white/10 rounded-2xl sm:rounded-3xl p-5 sm:p-10 shadow-2xl">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-5 sm:mb-6">Application Form</h2>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div className="space-y-1.5">
                    <label className="text-[10px] sm:text-xs font-semibold text-gray-400 uppercase tracking-wider ml-1">Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-2.5 sm:py-3 text-sm text-white focus:outline-none focus:border-brand-lime focus:ring-1 focus:ring-brand-lime transition-all placeholder:text-gray-700"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] sm:text-xs font-semibold text-gray-400 uppercase tracking-wider ml-1">Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-2.5 sm:py-3 text-sm text-white focus:outline-none focus:border-brand-lime focus:ring-1 focus:ring-brand-lime transition-all placeholder:text-gray-700"
                      placeholder="name@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div className="space-y-1.5">
                    <label className="text-[10px] sm:text-xs font-semibold text-gray-400 uppercase tracking-wider ml-1">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-2.5 sm:py-3 text-sm text-white focus:outline-none focus:border-brand-lime focus:ring-1 focus:ring-brand-lime transition-all placeholder:text-gray-700"
                      placeholder="+91 00000 00000"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] sm:text-xs font-semibold text-gray-400 uppercase tracking-wider ml-1">Instagram</label>
                    <input
                      type="text"
                      name="instagram"
                      value={formData.instagram}
                      onChange={handleChange}
                      className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-2.5 sm:py-3 text-sm text-white focus:outline-none focus:border-brand-lime focus:ring-1 focus:ring-brand-lime transition-all placeholder:text-gray-700"
                      placeholder="@username"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] sm:text-xs font-semibold text-gray-400 uppercase tracking-wider ml-1">Select Package</label>
                  <div className="relative" ref={dropdownRef}>
                    <button
                      type="button"
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className={`w-full bg-zinc-900/50 backdrop-blur-md border rounded-xl px-4 py-2.5 sm:py-3 text-sm text-white flex justify-between items-center transition-all duration-300 ${isDropdownOpen ? 'border-brand-lime shadow-glow' : 'border-white/10 hover:border-white/20'
                        }`}
                    >
                      <span className={formData.package ? 'text-white' : 'text-gray-500'}>
                        {formData.package || 'Select a package'}
                      </span>
                      <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-500 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {isDropdownOpen && (
                      <div className="absolute top-[calc(100%+8px)] left-0 right-0 bg-neutral-900/90 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-50 max-h-[320px] overflow-y-auto no-scrollbar animate-in fade-in zoom-in-95 duration-200 origin-top">
                        {packages.map((group, idx) => (
                          <div key={idx} className="p-1.5 first:pt-2 last:pb-2">
                            <div className="px-3 py-2 text-[10px] font-bold text-brand-lime/70 uppercase tracking-[0.2em] mb-1">
                              {group.category}
                            </div>
                            <div className="space-y-0.5">
                              {group.options.map((opt) => {
                                const fullPackageName = `${group.category} - ${opt.tier} - ${opt.price}`;
                                return (
                                  <button
                                    key={fullPackageName}
                                    type="button"
                                    onClick={() => selectPackage(group.category, opt.tier, opt.price)}
                                    className={`w-full text-left px-3 py-2.5 rounded-lg text-sm flex items-center justify-between group transition-all duration-200 ${formData.package === fullPackageName
                                      ? 'bg-brand-lime/20 text-brand-lime shadow-[inset_0_0_12px_rgba(204,255,0,0.1)]'
                                      : 'text-gray-400 hover:bg-white/5 hover:text-white'
                                      }`}
                                  >
                                    <div className="flex flex-col">
                                      <span className="font-semibold text-xs text-gray-300 group-hover:text-white transition-colors">{group.category}</span>
                                      <span className={`text-[11px] font-bold ${formData.package === fullPackageName ? 'text-brand-lime' : 'text-gray-500 group-hover:text-gray-400'}`}>
                                        {opt.tier} {opt.price !== 'Custom' ? `(${opt.price})` : '- Custom'}
                                      </span>
                                    </div>
                                    {formData.package === fullPackageName && (
                                      <div className="w-5 h-5 rounded-full bg-brand-lime/10 border border-brand-lime/20 flex items-center justify-center animate-in zoom-in duration-300">
                                        <Check size={12} strokeWidth={3} />
                                      </div>
                                    )}
                                  </button>
                                );
                              })}
                            </div>
                            {idx < packages.length - 1 && (
                              <div className="mx-3 mt-1.5 h-px bg-white/5" />
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] sm:text-xs font-semibold text-gray-400 uppercase tracking-wider ml-1">Project Details</label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-2.5 sm:py-3 text-sm text-white focus:outline-none focus:border-brand-lime focus:ring-1 focus:ring-brand-lime transition-all resize-none placeholder:text-gray-700"
                    placeholder="Tell us a bit about your brand..."
                  />
                </div>

                <Button
                  variant="glow"
                  fullWidth
                  type="submit"
                  className="h-12 sm:h-14 text-sm sm:text-base mt-2"
                  disabled={status === 'submitting'}
                >
                  {status === 'submitting' ? (
                    <span className="flex items-center gap-2">
                      <Loader2 className="animate-spin" size={18} /> Sending...
                    </span>
                  ) : status === 'success' ? (
                    <span className="flex items-center gap-2">
                      Application Sent!
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      Submit Application <ArrowRight size={18} />
                    </span>
                  )}
                </Button>

                {status === 'success' && (
                  <p className="text-center text-xs sm:text-sm text-brand-lime mt-2 font-medium">
                    Thanks! We'll be in touch shortly.
                  </p>
                )}

                {status === 'error' && (
                  <p className="text-center text-xs sm:text-sm text-red-500 mt-2">
                    Something went wrong. Please try again.
                  </p>
                )}

                <p className="text-center text-[10px] sm:text-xs text-gray-500 mt-4">
                  By submitting, you agree to our Terms of Service.
                </p>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default GetStarted;