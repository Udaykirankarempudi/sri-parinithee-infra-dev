import React from 'react';
import { Layers, Ruler, Grid, Maximize, Award, ShieldAlert } from 'lucide-react';
import { Container } from '../common/Container';
import { Project } from '../../types';

interface ProjectOverviewProps {
  project: Project;
}

export const ProjectOverview: React.FC<ProjectOverviewProps> = ({ project }) => {
  const specs = [
    { label: 'Project Type', value: project.category, icon: Layers },
    { label: 'Total Area', value: project.totalArea, icon: Ruler },
    { label: 'Total Plots', value: `${project.totalPlots} Plots`, icon: Grid },
    { label: 'Plot Sizes', value: project.plotSizes, icon: Maximize },
    { label: 'Project Status', value: project.status, icon: Award },
    { label: 'RERA Registration', value: project.reraNumber, icon: ShieldAlert },
  ];

  return (
    <section id="overview" className="py-14 sm:py-20 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Description & Specifications (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold mb-2 block">
                DEVELOPMENT BRIEF
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-normal text-forest leading-tight">
                Project Overview
              </h2>
            </div>

            <div className="space-y-3.5 text-xs sm:text-sm text-text-muted leading-relaxed">
              {project.longDescription.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            {/* Specifications Grid */}
            <div className="pt-2">
              <h3 className="font-serif text-base sm:text-lg font-medium text-forest mb-4">
                Key Specifications
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {specs.map((spec, idx) => {
                  const Icon = spec.icon;
                  return (
                    <div
                      key={idx}
                      className="p-3.5 rounded-[3px] bg-offwhite border border-border-light flex items-center gap-3"
                    >
                      <div className="w-9 h-9 rounded-full bg-gold-pale text-gold border border-gold/30 flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4 stroke-[1.8]" />
                      </div>
                      <div>
                        <span className="text-[11px] text-text-muted block leading-none mb-1">
                          {spec.label}
                        </span>
                        <span className="text-xs sm:text-sm font-semibold text-forest">
                          {spec.value}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* RERA / Legal Disclaimer Note */}
              <p className="text-[11px] text-text-muted/80 mt-3 italic">
                * Note: Project specifications, measurements, and registration details are illustrative project representations subject to ongoing municipal and official verification.
              </p>
            </div>
          </div>

          {/* Right Column: Architectural Photography (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-[4px] overflow-hidden shadow-xl border border-border-light group">
              <img
                src={project.coverImage}
                alt={`${project.name} Layout Photography`}
                className="w-full h-[380px] sm:h-[460px] object-cover object-center group-hover:scale-103 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/80 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-xs p-3.5 rounded-[3px] border border-border-light">
                <span className="text-[10px] uppercase font-semibold text-gold tracking-widest block">
                  PHYSICAL PROGRESS
                </span>
                <span className="text-xs sm:text-sm font-medium text-forest">
                  Avenue plantation &amp; blacktop road network
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

