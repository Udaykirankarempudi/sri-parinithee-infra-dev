import React from 'react';
import { Target, Eye, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { PageHero } from '../components/common/PageHero';
import { Container } from '../components/common/Container';
import { SectionHeading } from '../components/common/SectionHeading';
import { FinalCta } from '../components/home/FinalCta';
import { COMPANY_INFO } from '../data/company';

export const About: React.FC = () => {
  const valueIcons = {
    'Our Mission': Target,
    'Our Vision': Eye,
    'Our Values': ShieldCheck,
  };

  return (
    <div className="flex flex-col">
      {/* Page Hero Banner */}
      <PageHero
        title="About Us"
        eyebrow="COMPANY PROFILE"
        subtitle="Creating well-planned, legally approved residential communities with modern amenities and excellent connectivity."
        breadcrumbs={[{ label: 'About Us' }]}
        backgroundImage="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=80"
      />

      {/* Our Journey Section */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Narrative (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold mb-2 block">
                  FOUNDATION &amp; PHILOSOPHY
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-normal text-forest leading-tight">
                  Our Journey
                </h2>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-text-muted leading-relaxed">
                <p>
                  Sri Parinithee Infra Developers Pvt. Ltd. was incorporated with a decisive commitment: to transform plotted residential developments into secure, appreciating, and beautifully engineered living communities across Andhra Pradesh.
                </p>
                <p>
                  Observing the market need for reliable land titles, transparent documentation, and genuine municipal layout approvals, we set out to build communities that place homeowner security first. From our initial land acquisitions to layout design, every parcel of land undergoes rigorous scrutiny by leading legal advocates and civil engineering experts.
                </p>
                <p>
                  Over the years, we have brought over 100 acres of prime land under development across Visakhapatnam, Anakapalle, and Bheemunipatnam. Each layout is engineered with broad blacktop roads, underground storm water drainage, continuous street illumination, avenue trees, and vibrant children’s parks.
                </p>
              </div>

              {/* Company Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 border-t border-border-light">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-forest">
                  <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                  <span>Transparent Marketable Titles</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-forest">
                  <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                  <span>VMRDA / AP RERA Approved Layouts</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-forest">
                  <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                  <span>Modern Underground Utilities</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-forest">
                  <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                  <span>500+ Satisfied Property Owners</span>
                </div>
              </div>
            </div>

            {/* Right Architectural Visual (5 cols) */}
            <div className="lg:col-span-5">
              <div className="relative rounded-[4px] overflow-hidden shadow-xl border border-border-light group">
                <img
                  src="/assets/images/our-journey.jpg"
                  alt="Sri Parinithee Corporate & Community Development"
                  className="w-full h-[380px] sm:h-[450px] object-cover transition-transform duration-500 group-hover:scale-103"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/80 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-xs p-4 rounded-[3px] border border-border-light">
                  <span className="text-[10px] uppercase font-semibold text-gold tracking-widest block">
                    SRI PARINITHEE RESIDENTIAL LAYOUT
                  </span>
                  <span className="font-serif text-xs sm:text-sm font-medium text-forest">
                    Thoughtfully planned infrastructure with gated security
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 3 Value Cards Section */}
      <section className="py-16 md:py-24 bg-offwhite border-t border-border-light">
        <Container>
          <SectionHeading
            eyebrow="GUIDING PRINCIPLES"
            title="Mission, Vision & Values"
            subtitle="The fundamental core values steering every decision, layout approval, and customer interaction."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {COMPANY_INFO.values.map((v) => {
              const Icon = valueIcons[v.title as keyof typeof valueIcons] || ShieldCheck;

              return (
                <div
                  key={v.title}
                  className="bg-white rounded-[4px] border border-border-light hover:border-gold/60 p-8 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center group"
                >
                  {/* Circular Gold Icon */}
                  <div className="w-16 h-16 rounded-full bg-gold-pale border border-gold/40 text-gold flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-gold group-hover:text-white transition-all duration-300">
                    <Icon className="w-7 h-7 stroke-[1.8]" />
                  </div>

                  <h3 className="font-serif text-xl font-medium text-forest mb-3">
                    {v.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-text-muted leading-relaxed font-light">
                    {v.description}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Company Philosophy Band */}
      <section className="py-16 bg-forest text-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-light mb-3 block">
              OUR COMMITMENT TO TRANSPARENCY
            </span>
            <blockquote className="font-serif text-xl sm:text-2xl md:text-3xl font-light italic leading-relaxed text-white mb-6">
              "We measure our success not simply by acreage acquired, but by the trust and peace of mind instilled in every family who lays the foundation of their future in our developments."
            </blockquote>
            <p className="text-xs uppercase tracking-widest text-gold">
              Sri Parinithee Board of Directors
            </p>
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <FinalCta />
    </div>
  );
};
