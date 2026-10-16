import React, { useState } from 'react';
import { Play } from 'lucide-react';
import { Container } from '../common/Container';
import { Button } from '../common/Button';
import { StatCard } from '../common/StatCard';
import { VideoModal } from '../common/VideoModal';
import { COMPANY_INFO } from '../../data/company';
import { useModal } from '../../context/ModalContext';

export const HeroSection: React.FC = () => {
  const { openSiteVisit } = useModal();
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <>
      <section className="relative bg-forest overflow-hidden text-white">
        {/* Full-width Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/images/hero-bg.jpg"
            alt="Sri Parinithee Plotted Development Aerial View"
            fetchPriority="high"
            className="w-full h-full object-cover object-center filter brightness-90"
          />
          {/* Elegant forest green overlay allowing layout details to be visible while ensuring high text contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-forest-dark/92 via-forest/80 to-forest/55" />
          {/* Subtle architectural dot pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(#C89A42_1px,transparent_1px)] [background-size:28px_28px] opacity-10" />
        </div>

        {/* Hero Content */}
        <Container className="relative z-10 pt-16 pb-20 md:pt-24 md:pb-28 min-h-[480px] lg:min-h-[540px] flex flex-col justify-center">
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-forest-light/70 border border-gold/40 text-gold-light text-[10px] sm:text-xs font-semibold uppercase tracking-wider sm:tracking-[0.22em] mb-5 max-w-full">
              <span className="truncate sm:whitespace-normal">{COMPANY_INFO.tagline}</span>
            </div>

            {/* Main Heading */}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.15] mb-5">
              Developing Places.<br />
              <span className="text-gold-light">Building Possibilities.</span>
            </h1>

            {/* Supporting Subtitle */}
            <p className="text-base sm:text-lg text-white/85 leading-relaxed font-light mb-8 max-w-2xl">
              {COMPANY_INFO.heroSubheading}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-5">
              <Button
                to="/projects"
                variant="gold"
                size="lg"
              >
                Explore Projects
              </Button>

              <Button
                variant="outline-white"
                size="lg"
                onClick={() => openSiteVisit()}
              >
                Book a Site Visit
              </Button>

              {/* Circular Video Play Button */}
              <button
                type="button"
                onClick={() => setVideoOpen(true)}
                className="inline-flex items-center gap-3 text-white hover:text-gold transition-colors group focus:outline-none py-2 px-1"
                aria-label="Watch our overview video"
              >
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/15 border border-white/40 flex items-center justify-center group-hover:bg-gold group-hover:border-gold transition-all duration-300 shadow-md">
                  <Play className="w-4 h-4 fill-white ml-0.5 text-white" />
                </div>
                <span className="text-xs sm:text-sm font-medium tracking-wide">
                  Watch Our Video
                </span>
              </button>
            </div>
          </div>
        </Container>
      </section>

      {/* Statistics Strip immediately below hero */}
      <section className="bg-white border-b border-border-light shadow-xs relative z-20">
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0">
            {COMPANY_INFO.stats.map((stat, idx) => (
              <StatCard
                key={idx}
                value={stat.value}
                label={stat.label}
                iconName={stat.icon}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* Video Modal */}
      <VideoModal isOpen={videoOpen} onClose={() => setVideoOpen(false)} />
    </>
  );
};
