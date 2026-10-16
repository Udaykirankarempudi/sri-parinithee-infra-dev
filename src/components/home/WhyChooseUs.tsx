import React from 'react';
import { Compass, Building2, Award, FileText, Users2, LucideIcon } from 'lucide-react';
import { Container } from '../common/Container';
import { COMPANY_INFO } from '../../data/company';

const iconMap: Record<string, LucideIcon> = {
  Compass,
  Building2,
  Award,
  FileText,
  Users2,
};

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-forest text-white relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(#C89A42_1px,transparent_1px)] [background-size:32px_32px] opacity-10" />

      <Container className="relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-normal text-white">
            Why Choose Sri Parinithee?
          </h2>
          <div className="w-16 h-0.5 bg-gold mx-auto mt-4" />
        </div>

        {/* 5 Benefits with gold line icons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-5">
          {COMPANY_INFO.whyChooseUs.map((benefit) => {
            const Icon = iconMap[benefit.icon] || Compass;

            return (
              <div
                key={benefit.id}
                className="bg-forest-light/60 hover:bg-forest-light border border-forest-surface hover:border-gold/40 rounded-[4px] p-6 text-center flex flex-col items-center transition-all duration-300 group"
              >
                {/* Circular gold outlined icon container */}
                <div className="w-16 h-16 rounded-full border border-gold/60 flex items-center justify-center text-gold mb-5 group-hover:scale-110 group-hover:bg-gold/10 transition-all duration-300">
                  <Icon className="w-7 h-7 stroke-[1.5]" />
                </div>

                <h3 className="font-serif text-base sm:text-lg font-medium text-white mb-2 leading-snug">
                  {benefit.title}
                </h3>

                <p className="text-xs text-white/70 leading-relaxed font-light">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

