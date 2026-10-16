import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Container } from '../common/Container';
import { Button } from '../common/Button';
import { COMPANY_INFO } from '../../data/company';

export const AboutPreview: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-offwhite">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Copy & Actions (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.22em] text-gold mb-2 block">
                INFRA DEVELOPERS PVT. LTD.
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-normal text-forest leading-tight">
                About Sri Parinithee
              </h2>
            </div>

            <p className="text-base sm:text-lg text-forest/90 font-normal leading-relaxed">
              {COMPANY_INFO.aboutIntro}
            </p>

            <p className="text-sm sm:text-base text-text-muted leading-relaxed">
              We specialize in master-planned plotted communities in premier growth zones across Andhra Pradesh. Every layout is developed with utmost legal rigor, 100% clear titles, expansive green spaces, blacktop roads, underground utilities, and thoughtful urban amenities designed for sustainable living and solid appreciation.
            </p>

            {/* Core Pillars Bullet Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-forest">
                <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                <span>100% VMRDA / RERA Approved</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-forest">
                <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                <span>Clear Marketable Titles</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-forest">
                <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                <span>Modern Infrastructure &amp; Amenities</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-forest">
                <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                <span>Prompt Registration &amp; Handover</span>
              </div>
            </div>

            {/* Button */}
            <div className="pt-2">
              <Button
                to="/about"
                variant="gold"
                size="md"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Know More About Us
              </Button>
            </div>
          </div>

          {/* Right Column: Architectural Entrance Visual (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-[4px] overflow-hidden shadow-xl border border-border-light group">
              <img
                src="/assets/images/entrance-arch.jpg"
                alt="Sri Parinithee Gated Community Grand Entrance"
                className="w-full h-auto aspect-[16/10] object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </div>

            {/* Decorative background border accent */}
            <div className="hidden sm:block absolute -bottom-3 -right-3 w-full h-full border border-gold/40 rounded-[4px] -z-10" />
          </div>
        </div>
      </Container>
    </section>
  );
};

