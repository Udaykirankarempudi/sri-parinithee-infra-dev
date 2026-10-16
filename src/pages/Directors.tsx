import React, { useState } from 'react';
import { Mail, ArrowRight, X } from 'lucide-react';
import { LinkedinIcon } from '../components/common/SocialIcons';
import { PageHero } from '../components/common/PageHero';
import { Container } from '../components/common/Container';
import { Button } from '../components/common/Button';
import { FinalCta } from '../components/home/FinalCta';
import { DIRECTORS } from '../data/directors';
import { Director } from '../types';

export const Directors: React.FC = () => {
  const [selectedDirector, setSelectedDirector] = useState<Director | null>(null);

  return (
    <div className="flex flex-col">
      {/* Page Hero Banner */}
      <PageHero
        title="Directors"
        eyebrow="LEADERSHIP & GOVERNANCE"
        subtitle="Meet the experienced leadership team guiding Sri Parinithee's strategic vision, engineering excellence, and customer-first ethos."
        breadcrumbs={[{ label: 'Directors' }]}
        backgroundImage="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80"
      />

      {/* Directors Cards Section */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="space-y-12 max-w-5xl mx-auto">
            {DIRECTORS.map((director) => (
              <div
                key={director.id}
                className="bg-offwhite rounded-[4px] border border-border-light overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row group"
              >
                {/* Director Portrait */}
                <div className="md:w-5/12 aspect-[4/3] md:aspect-auto overflow-hidden bg-forest-dark relative shrink-0">
                  <img
                    src={director.image}
                    alt={director.name}
                    className="w-full h-full object-cover object-top filter grayscale contrast-105 group-hover:grayscale-0 group-hover:scale-103 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent md:hidden" />
                </div>

                {/* Director Details */}
                <div className="md:w-7/12 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                        {director.role}
                      </span>
                      <span className="text-[11px] text-text-muted bg-white px-2.5 py-0.5 rounded border border-border-light">
                        {director.experience}
                      </span>
                    </div>

                    <h2 className="font-serif text-2xl sm:text-3xl font-medium text-forest mb-4">
                      {director.name}
                    </h2>

                    <div className="space-y-3 text-xs sm:text-sm text-text-muted leading-relaxed mb-6">
                      {director.fullBio.map((para, i) => (
                        <p key={i}>{para}</p>
                      ))}
                    </div>

                    {director.message && (
                      <div className="p-4 bg-white rounded border-l-2 border-gold text-xs italic text-forest/90 mb-6">
                        "{director.message}"
                      </div>
                    )}
                  </div>

                  {/* Actions & Socials */}
                  <div className="pt-4 border-t border-border-light/80 flex flex-wrap items-center justify-between gap-4">
                    <Button
                      variant="gold"
                      size="sm"
                      onClick={() => setSelectedDirector(director)}
                      icon={<ArrowRight className="w-4 h-4" />}
                    >
                      View Full Profile
                    </Button>

                    <div className="flex items-center space-x-3 text-xs text-text-muted">
                      {director.email && (
                        <a
                          href={`mailto:${director.email}`}
                          className="flex items-center gap-1.5 hover:text-gold transition-colors"
                        >
                          <Mail className="w-3.5 h-3.5 text-gold" />
                          <span>Contact</span>
                        </a>
                      )}
                      {director.linkedin && (
                        <a
                          href={director.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 hover:text-gold transition-colors"
                        >
                          <LinkedinIcon className="w-3.5 h-3.5 text-gold" />
                          <span>LinkedIn</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Leadership Full Profile Modal */}
      {selectedDirector && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4"
          onClick={() => setSelectedDirector(null)}
        >
          <div
            className="relative w-full max-w-2xl bg-white rounded-[4px] shadow-2xl p-6 sm:p-8 border border-border-light max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in-95"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedDirector(null)}
              className="absolute top-4 right-4 p-2 rounded-full text-text-muted hover:text-forest hover:bg-offwhite"
              aria-label="Close profile"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-6 pb-6 border-b border-border-light">
              <img
                src={selectedDirector.image}
                alt={selectedDirector.name}
                className="w-28 h-28 rounded-full object-cover border-2 border-gold shadow-md shrink-0"
              />
              <div className="text-center sm:text-left">
                <span className="text-xs font-semibold uppercase tracking-wider text-gold block">
                  {selectedDirector.role}
                </span>
                <h3 className="font-serif text-2xl font-bold text-forest mb-1">
                  {selectedDirector.name}
                </h3>
                <span className="text-xs text-text-muted block">
                  {selectedDirector.experience}
                </span>
              </div>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-text-muted leading-relaxed mb-6">
              {selectedDirector.fullBio.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            <div className="p-4 bg-offwhite rounded border-l-2 border-gold text-xs italic text-forest">
              "{selectedDirector.message}"
            </div>

            <div className="mt-6 pt-4 border-t border-border-light flex justify-end">
              <Button variant="forest" size="sm" onClick={() => setSelectedDirector(null)}>
                Close Profile
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Final CTA */}
      <FinalCta />
    </div>
  );
};
