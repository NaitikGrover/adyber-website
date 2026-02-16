import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
    {
        name: 'Sarah Chen',
        role: 'CEO, Bloom Media',
        content: 'Adyber transformed our social presence completely. Our engagement grew by 300% in just two months. Their artistic vision is unmatched in the industry.',
        rating: 5,
        initials: 'SC'
    },
    {
        name: 'Marcus Thorne',
        role: 'Founder, Urban Edge',
        content: 'The most professional agency we\'ve worked with. They don\'t just design; they understand the psychology of growth. Our ROI has never been better.',
        rating: 5,
        initials: 'MT'
    },
    {
        name: 'Elena Rodriguez',
        role: 'Director, Aura Wellness',
        content: 'Their web development team is incredible. They built a site that is not only beautiful but converts like crazy. Absolutely worth every penny.',
        rating: 5,
        initials: 'ER'
    }
];

const Testimonials: React.FC = () => {
    return (
        <section id="testimonials" className="py-24 bg-black relative overflow-hidden">
            {/* Background accents */}
            <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-brand-lime/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 left-0 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">Client Success Stories</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-base">
                        Don't just take our word for it. Hear from the brands we've helped scale.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="group relative p-8 rounded-2xl bg-zinc-900/40 border border-white/10 hover:border-brand-lime/30 transition-all duration-300 backdrop-blur-sm animate-fadeInUp opacity-0"
                            style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'forwards' }}
                        >
                            <Quote className="absolute top-6 right-8 w-8 h-8 text-white/5 group-hover:text-brand-lime/10 transition-colors" />

                            <div className="flex gap-1 mb-6">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} size={16} className="fill-brand-lime text-brand-lime" />
                                ))}
                            </div>

                            <p className="text-gray-300 mb-8 leading-relaxed italic">
                                "{testimonial.content}"
                            </p>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-lime to-brand-lime/50 flex items-center justify-center text-black font-bold text-sm">
                                    {testimonial.initials}
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold text-sm">{testimonial.name}</h4>
                                    <p className="text-gray-500 text-xs">{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
