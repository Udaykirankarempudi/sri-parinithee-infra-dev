import {
  MapPin,
  Phone,
  Mail,
  Clock,
} from 'lucide-react';
import { FacebookIcon, InstagramIcon, YoutubeIcon, LinkedinIcon } from '../components/common/SocialIcons';
import { PageHero } from '../components/common/PageHero';
import { Container } from '../components/common/Container';
import { SectionHeading } from '../components/common/SectionHeading';
import { EnquiryForm } from '../components/forms/EnquiryForm';
import { COMPANY_INFO } from '../data/company';

export const Contact: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Page Title Banner */}
      <PageHero
        title="Contact Us"
        eyebrow="COMMUNICATION & VISITS"
        subtitle="Get in touch with our team for project inquiries, site appointments, or property investment guidance."
        breadcrumbs={[{ label: 'Contact Us' }]}
        backgroundImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80"
      />

      {/* Section 1: Get In Touch (Info & Map) */}
      <section className="py-16 md:py-20 bg-white">
        <Container>
          <SectionHeading
            eyebrow="REACH OUT DIRECTLY"
            title="Get In Touch"
            subtitle="Visit our corporate headquarters in Visakhapatnam or connect through phone and email."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch max-w-6xl mx-auto">
            {/* Left Column: Office Details (5 cols) */}
            <div className="lg:col-span-5 bg-offwhite rounded-[4px] border border-border-light p-6 sm:p-8 flex flex-col justify-between shadow-2xs">
              <div className="space-y-6">
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold block mb-1">
                    HEAD OFFICE
                  </span>
                  <h3 className="font-serif text-xl font-medium text-forest">
                    Corporate Office
                  </h3>
                </div>

                {/* Details List */}
                <div className="space-y-4 text-xs sm:text-sm text-text-muted">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-gold-pale border border-gold/30 text-gold flex items-center justify-center shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="text-forest block text-xs uppercase tracking-wider mb-0.5">Address</strong>
                      <span className="leading-relaxed">{COMPANY_INFO.contact.fullAddress}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-gold-pale border border-gold/30 text-gold flex items-center justify-center shrink-0 mt-0.5">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="text-forest block text-xs uppercase tracking-wider mb-0.5">Phone Numbers</strong>
                      <div className="space-y-0.5">
                        <a href={`tel:${COMPANY_INFO.contact.phones[0]}`} className="block hover:text-gold transition-colors font-medium text-forest">
                          {COMPANY_INFO.contact.phones[0]}
                        </a>
                        <a href={`tel:${COMPANY_INFO.contact.phones[1]}`} className="block hover:text-gold transition-colors">
                          {COMPANY_INFO.contact.phones[1]}
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-gold-pale border border-gold/30 text-gold flex items-center justify-center shrink-0 mt-0.5">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="text-forest block text-xs uppercase tracking-wider mb-0.5">Email Inquiries</strong>
                      <a href={`mailto:${COMPANY_INFO.contact.email}`} className="hover:text-gold transition-colors font-medium text-forest">
                        {COMPANY_INFO.contact.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-gold-pale border border-gold/30 text-gold flex items-center justify-center shrink-0 mt-0.5">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="text-forest block text-xs uppercase tracking-wider mb-0.5">Working Hours</strong>
                      <p>{COMPANY_INFO.contact.hours}</p>
                      <p className="text-[11px] text-text-muted/80">{COMPANY_INFO.contact.sundayHours}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media Strip */}
              <div className="pt-6 mt-6 border-t border-border-light flex items-center gap-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-forest">Follow Us:</span>
                <div className="flex items-center space-x-2">
                  <a
                    href={COMPANY_INFO.socials.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="w-8 h-8 rounded-full bg-white border border-border-light text-forest hover:text-gold hover:border-gold flex items-center justify-center transition-colors"
                  >
                    <FacebookIcon className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={COMPANY_INFO.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="w-8 h-8 rounded-full bg-white border border-border-light text-forest hover:text-gold hover:border-gold flex items-center justify-center transition-colors"
                  >
                    <InstagramIcon className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={COMPANY_INFO.socials.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube"
                    className="w-8 h-8 rounded-full bg-white border border-border-light text-forest hover:text-gold hover:border-gold flex items-center justify-center transition-colors"
                  >
                    <YoutubeIcon className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={COMPANY_INFO.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="w-8 h-8 rounded-full bg-white border border-border-light text-forest hover:text-gold hover:border-gold flex items-center justify-center transition-colors"
                  >
                    <LinkedinIcon className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Google Maps Embed (7 cols) */}
            <div className="lg:col-span-7 bg-white rounded-[4px] border border-border-light overflow-hidden shadow-xs flex flex-col">
              <div className="p-3.5 bg-forest text-white flex items-center justify-between text-xs font-medium">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-gold" />
                  Sri Parinithee Corporate Office Map
                </span>
                <a
                  href={COMPANY_INFO.contact.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold-light hover:underline text-[11px]"
                >
                  View Large Map ↗
                </a>
              </div>
              <div className="relative flex-1 min-h-[360px] bg-slate-100">
                <iframe
                  title="Corporate Office Map Location"
                  className="w-full h-full min-h-[360px] border-0"
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(COMPANY_INFO.contact.fullAddress)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Section 2: Send Us a Message (Form & Image) */}
      <section className="py-16 md:py-24 bg-offwhite border-t border-border-light">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center max-w-6xl mx-auto">
            {/* Left Form (7 cols) */}
            <div className="lg:col-span-7 bg-white rounded-[4px] border border-border-light p-6 sm:p-10 shadow-sm">
              <div className="mb-6">
                <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold mb-1 block">
                  ONLINE ENQUIRY
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-normal text-forest">
                  Send Us a Message
                </h2>
                <p className="text-xs sm:text-sm text-text-muted mt-2">
                  Have a question about plot dimensions, pricing, or RERA approvals? Fill out the form below.
                </p>
              </div>

              <EnquiryForm />
            </div>

            {/* Right Architectural Image (5 cols) */}
            <div className="lg:col-span-5">
              <div className="relative rounded-[4px] overflow-hidden shadow-xl border border-border-light group">
                <img
                  src="/assets/images/entrance-arch.jpg"
                  alt="Sri Parinithee Gated Entrance"
                  className="w-full h-[400px] sm:h-[480px] object-cover group-hover:scale-103 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 bg-forest-dark/95 backdrop-blur-xs p-4 rounded-[3px] border border-gold/40">
                  <span className="text-[10px] uppercase font-semibold text-gold tracking-widest block">
                    SRI PARINITHEE
                  </span>
                  <p className="font-serif text-white font-medium text-sm sm:text-base leading-snug">
                    Visit our project sites with our dedicated property advisory team.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};
