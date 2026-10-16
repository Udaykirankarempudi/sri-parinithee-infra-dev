import React, { useState, useEffect } from 'react';
import { Container } from '../common/Container';

export const ProjectNav: React.FC = () => {
  const [activeSection, setActiveSection] = useState('overview');

  const navItems = [
    { id: 'overview', label: 'Project Overview' },
    { id: 'master-plan', label: 'Master Plan' },
    { id: 'amenities', label: 'Amenities' },
    { id: 'location', label: 'Location & Connectivity' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'approvals', label: 'Approvals & Documents' },
    { id: 'enquiry', label: 'Enquiry' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (let i = navItems.length - 1; i >= 0; i--) {
        const el = document.getElementById(navItems[i].id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="sticky top-[70px] z-30 bg-white border-b border-border-light shadow-xs py-2 hidden sm:block">
      <Container>
        <div className="flex items-center space-x-1 lg:space-x-4 overflow-x-auto no-scrollbar py-1 text-xs font-medium">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`px-3 py-1.5 rounded-[3px] whitespace-nowrap transition-colors cursor-pointer ${
                  isActive
                    ? 'bg-forest text-white font-semibold'
                    : 'text-text-muted hover:text-forest hover:bg-gold-pale/60'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </Container>
    </div>
  );
};

