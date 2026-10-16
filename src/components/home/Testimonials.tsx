import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Container } from '../common/Container';
import { SectionHeading } from '../common/SectionHeading';
import { TESTIMONIALS } from '../../data/testimonials';

export const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  return (
    <section className="py-16 md:py-24 bg-white relative">
      <Container>
        <SectionHeading
          eyebrow="TESTIMONIALS"
          title="What Our Customers Say"
          subtitle="Genuine experiences from plot owners and property investors who built their dreams with Sri Parinithee."
        />

        {/* Carousel / Multi-card Display */}
        <div className="relative max-w-5xl mx-auto">
          {/* Desktop 3-Card Grid */}
          <div className="hidden md:grid md:grid-cols-3 gap-6 lg:gap-8">
            {TESTIMONIALS.map((t, idx) => (
              <div
                key={t.id}
                className={`bg-offwhite rounded-[4px] border transition-all duration-300 p-6 flex flex-col justify-between ${
                  idx === activeIndex
                    ? 'border-gold shadow-md'
                    : 'border-border-light hover:border-gold/50 shadow-xs'
                }`}
              >
                <div>
                  {/* Gold Quote Mark */}
                  <div className="text-gold mb-3">
                    <Quote className="w-7 h-7 rotate-180 opacity-80" />
                  </div>

                  <p className="text-xs sm:text-sm text-text-main leading-relaxed italic mb-6">
                    "{t.quote}"
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-border-light/70">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover border border-gold/40 shrink-0"
                    loading="lazy"
                  />
                  <div>
                    <h4 className="font-serif text-sm font-semibold text-forest leading-tight">
                      {t.name}
                    </h4>
                    <span className="text-[11px] text-text-muted block">
                      {t.location} • {t.project}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Single Card Carousel */}
          <div className="md:hidden">
            <div className="bg-offwhite rounded-[4px] border border-gold p-6 flex flex-col justify-between shadow-md min-h-[220px]">
              <div>
                <div className="text-gold mb-3">
                  <Quote className="w-7 h-7 rotate-180 opacity-80" />
                </div>
                <p className="text-sm text-text-main leading-relaxed italic mb-6">
                  "{TESTIMONIALS[activeIndex].quote}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-border-light/70">
                <img
                  src={TESTIMONIALS[activeIndex].avatar}
                  alt={TESTIMONIALS[activeIndex].name}
                  className="w-10 h-10 rounded-full object-cover border border-gold/40 shrink-0"
                />
                <div>
                  <h4 className="font-serif text-sm font-semibold text-forest leading-tight">
                    {TESTIMONIALS[activeIndex].name}
                  </h4>
                  <span className="text-[11px] text-text-muted block">
                    {TESTIMONIALS[activeIndex].location} • {TESTIMONIALS[activeIndex].project}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Controls and Pagination Indicators */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={handlePrev}
              aria-label="Previous testimonial"
              className="p-2 rounded-full border border-border-light bg-white hover:border-gold hover:text-gold text-forest transition-colors shadow-xs"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Dot indicators */}
            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  aria-label={`Go to testimonial ${idx + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === activeIndex
                      ? 'w-6 bg-gold'
                      : 'w-2 bg-border-light hover:bg-gold/50'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              aria-label="Next testimonial"
              className="p-2 rounded-full border border-border-light bg-white hover:border-gold hover:text-gold text-forest transition-colors shadow-xs"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

