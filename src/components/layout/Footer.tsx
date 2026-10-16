import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Heart } from 'lucide-react';
import { FacebookIcon, InstagramIcon, YoutubeIcon, LinkedinIcon } from '../common/SocialIcons';
import { Logo } from './Logo';
import { Container } from '../common/Container';
import { COMPANY_INFO } from '../../data/company';
import { PROJECTS } from '../../data/projects';
import { QUICK_LINKS } from '../../data/navigation';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-forest-dark text-white border-t border-forest-light">
      {/* Main Footer Content */}
      <div className="py-14 lg:py-16">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
            {/* Column 1: Brand Info (5 cols) */}
            <div className="lg:col-span-5 space-y-5">
              <Logo variant="dark" size="md" />
              <p className="text-sm text-white/75 leading-relaxed max-w-sm">
                Developing sustainable plotted communities with planned modern infrastructure, wide blacktop roads, clear titles, and lush green open spaces for a better tomorrow.
              </p>

              {/* Social Media Links */}
              <div className="flex items-center space-x-3 pt-2">
                <a
                  href={COMPANY_INFO.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-9 h-9 rounded-full bg-forest border border-forest-light/60 flex items-center justify-center text-white/80 hover:text-gold hover:border-gold transition-colors"
                >
                  <FacebookIcon className="w-4 h-4" />
                </a>
                <a
                  href={COMPANY_INFO.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-9 h-9 rounded-full bg-forest border border-forest-light/60 flex items-center justify-center text-white/80 hover:text-gold hover:border-gold transition-colors"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
                <a
                  href={COMPANY_INFO.socials.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="w-9 h-9 rounded-full bg-forest border border-forest-light/60 flex items-center justify-center text-white/80 hover:text-gold hover:border-gold transition-colors"
                >
                  <YoutubeIcon className="w-4 h-4" />
                </a>
                <a
                  href={COMPANY_INFO.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-9 h-9 rounded-full bg-forest border border-forest-light/60 flex items-center justify-center text-white/80 hover:text-gold hover:border-gold transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Column 2: Quick Links (2 cols) */}
            <div className="lg:col-span-2 space-y-4">
              <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-light">
                Quick Links
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm text-white/70">
                {QUICK_LINKS.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="hover:text-gold transition-colors inline-block py-0.5"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Our Projects (2 cols) */}
            <div className="lg:col-span-2 space-y-4">
              <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-light">
                Our Projects
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm text-white/70">
                {PROJECTS.map((project) => (
                  <li key={project.slug}>
                    <Link
                      to={`/projects/${project.slug}`}
                      className="hover:text-gold transition-colors inline-block py-0.5"
                    >
                      {project.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    to="/projects"
                    className="text-gold-light hover:underline font-medium inline-block py-0.5"
                  >
                    All Developments →
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4: Contact Us (3 cols) */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-light">
                Contact Us
              </h4>
              <div className="space-y-3 text-xs sm:text-sm text-white/70">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                  <span className="leading-snug">{COMPANY_INFO.contact.fullAddress}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-gold shrink-0" />
                  <a href={`tel:${COMPANY_INFO.contact.phones[0]}`} className="hover:text-gold transition-colors">
                    {COMPANY_INFO.contact.phones[0]}
                  </a>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-gold shrink-0" />
                  <a href={`mailto:${COMPANY_INFO.contact.email}`} className="hover:text-gold transition-colors">
                    {COMPANY_INFO.contact.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Bottom Copyright Strip */}
      <div className="border-t border-forest-light/60 py-5 bg-[#031713] text-xs text-white/60">
        <Container>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
            <div>
              © 2024 {COMPANY_INFO.name}. All Rights Reserved.
            </div>
            <div className="flex items-center gap-1.5 text-white/50">
              <span>Designed with</span>
              <Heart className="w-3.5 h-3.5 text-gold fill-gold" />
              <span>for a Better Tomorrow</span>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
};
