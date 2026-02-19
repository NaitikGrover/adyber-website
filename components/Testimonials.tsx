import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
    {
        name: 'Nandini Bhardwaj',
        content: 'We worked with Adyber for our website and overall digital presence, and the results were solid. Communication was clear, deadlines were met, and everything was delivered exactly as discussed❤️',
        rating: 5,
        image: '/images/testimonials/nandini.png'
    },
    {
        name: 'Avishi Kukreti',
        content: 'The most professional agency we\'ve worked with. They don\'t just design; they understand the psychology of growth. Our ROI has never been better.',
        rating: 5,
        image: '/images/testimonials/avishi.png'
    },
    {
        name: 'Shaurya Singh',
        content: 'Their web development team is incredible. They built a site that is not only beautiful but converts like crazy. Absolutely worth every penny.',
        rating: 5,
        image: '/images/testimonials/shaurya.png'
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

                            <div className="flex items-center gap-4 mb-6">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-12 h-12 rounded-full object-cover border-2 border-brand-lime/20"
                                />
                                <div>
                                    <h4 className="text-white font-semibold text-sm">{testimonial.name}</h4>
                                    <div className="flex gap-1 mt-1">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <Star key={i} size={14} className="fill-brand-lime text-brand-lime" />
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <p className="text-gray-300 leading-relaxed italic">
                                "{testimonial.content}"
                            </p>
                        </div>
                    ))}
                </div>
                <div className="mt-16 text-center">
                    <a
                        href="https://g.page/r/CVR02ZML1rRQEAI/review"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-brand-lime text-black text-sm font-bold hover:bg-white hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_0_20px_rgba(163,230,53,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] group"
                    >
                        Review us on Google
                        <Star className="w-4 h-4 fill-black group-hover:fill-black transition-colors" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
