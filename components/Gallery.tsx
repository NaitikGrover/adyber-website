import React from 'react';

const galleryItems = [
  {
    id: 1,
    image: '/images/gallery/1/1.png',
    title: 'Gourmet Restaurant',
    category: 'Restaurant',
  },
  {
    id: 2,
    image: '/images/gallery/2/2.png',
    title: 'Urban Coffee Shop',
    category: 'Cafe',
  },
  {
    id: 3,
    image: '/images/gallery/3/3.png',
    title: 'Glow Skincare',
    category: 'Beauty',
  },
  {
    id: 4,
    image: '/images/gallery/4/4.png',
    title: 'Elegance Jewellery',
    category: 'Luxury',
  },
  {
    id: 5,
    image: '/images/gallery/5/5.png',
    title: 'The Artisan Cafe',
    category: 'Restaurant',
  },
  {
    id: 6,
    image: '/images/gallery/6/6.png',
    title: 'Dine & Dash',
    category: 'Restaurant',
  },
  {
    id: 7,
    image: '/images/gallery/7/7.png',
    title: 'Fine Dining',
    category: 'Restaurant',
  },
  {
    id: 8,
    image: '/images/gallery/8/8.png',
    title: 'The Food Haven',
    category: 'Restaurant',
  },
  {
    id: 9,
    image: '/images/gallery/9/9.png',
    title: 'Brand Showcase',
    category: 'Miscellaneous',
  },
];

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-16 sm:py-24 bg-black border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">Gallery</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base">
            A curated portfolio of brands we've elevated.
          </p>
        </div>

        {/* Gallery Container */}
        <div className="relative group/container">
          {/* Mobile view: Horizontal Infinite Scroll */}
          <div className="flex md:hidden -mx-4 sm:-mx-6 lg:-mx-8 overflow-hidden">
            <div className="flex animate-scroll hover:[animation-play-state:paused] w-max">
              {[...galleryItems, ...galleryItems].map((item, idx) => (
                <div
                  key={`${item.id}-${idx}`}
                  className="flex-shrink-0 w-[80vw] sm:w-[320px] aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 bg-zinc-900/30 mx-3 relative"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-6">
                    <span className="text-brand-lime text-[10px] font-bold uppercase tracking-wider mb-1">
                      {item.category}
                    </span>
                    <h3 className="text-white text-lg font-bold">
                      {item.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop view: 3x3 Grid Layout */}
          <div className="hidden md:grid grid-cols-3 gap-4">
            {galleryItems.map((item) => (
              <div
                key={item.id}
                className="group relative w-full aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 bg-zinc-900/30"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-100"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-brand-lime text-xs font-bold uppercase tracking-wider mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                    {item.category}
                  </span>
                  <h3 className="text-white text-xl font-bold translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {item.title}
                  </h3>
                </div>

                <div className="absolute inset-0 border-2 border-transparent group-hover:border-brand-lime/50 rounded-2xl transition-colors duration-300 pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Gallery;