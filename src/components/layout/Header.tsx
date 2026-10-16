import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, ChevronDown } from 'lucide-react';
import { Logo } from './Logo';
import { Button } from '../common/Button';
import { MobileNavigation } from './MobileNavigation';
import { NAV_ITEMS } from '../../data/navigation';
import { PROJECTS } from '../../data/projects';
import { useModal } from '../../context/ModalContext';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [projectsDropdownOpen, setProjectsDropdownOpen] = useState(false);
  const location = useLocation();
  const { openEnquiry } = useModal();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on route change
  useEffect(() => {
    setProjectsDropdownOpen(false);
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full bg-white transition-all duration-300 ${
          isScrolled
            ? 'shadow-md border-b border-border-light py-2.5'
            : 'border-b border-border-light/80 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-12 sm:h-14">
            {/* Logo */}
            <div className="shrink-0">
              <Logo size="md" />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {NAV_ITEMS.map((item) => {
                if (item.hasDropdown) {
                  return (
                    <div
                      key={item.name}
                      className="relative group"
                      onMouseEnter={() => setProjectsDropdownOpen(true)}
                      onMouseLeave={() => setProjectsDropdownOpen(false)}
                    >
                      <NavLink
                        to={item.path}
                        className={({ isActive }) =>
                          `relative px-3.5 py-2 text-xs xl:text-sm font-medium tracking-wide transition-colors flex items-center gap-1 ${
                            isActive
                              ? 'text-gold font-semibold after:content-[""] after:absolute after:bottom-0 after:left-3.5 after:right-3.5 after:h-0.5 after:bg-gold'
                              : 'text-text-main hover:text-gold'
                          }`
                        }
                      >
                        {item.name}
                        <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180" />
                      </NavLink>

                      {/* Dropdown Menu */}
                      <div
                        className={`absolute top-full left-0 w-60 bg-white rounded-[3px] shadow-xl border border-border-light py-2 transition-all duration-200 ${
                          projectsDropdownOpen
                            ? 'opacity-100 visible translate-y-0'
                            : 'opacity-0 invisible translate-y-1'
                        }`}
                      >
                        <div className="px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-text-muted border-b border-border-light mb-1">
                          Our Developments
                        </div>
                        {PROJECTS.map((project) => (
                          <NavLink
                            key={project.slug}
                            to={`/projects/${project.slug}`}
                            className={({ isActive }) =>
                              `block px-4 py-2 text-xs font-medium transition-colors ${
                                isActive
                                  ? 'bg-gold-pale text-gold font-semibold'
                                  : 'text-forest hover:bg-gold-pale/50 hover:text-gold'
                              }`
                            }
                          >
                            <div className="flex items-center justify-between">
                              <span>{project.name}</span>
                              <span className="text-[10px] text-text-muted bg-offwhite px-1.5 py-0.5 rounded">
                                {project.status}
                              </span>
                            </div>
                            <span className="text-[10px] text-text-muted block mt-0.5">
                              {project.location}
                            </span>
                          </NavLink>
                        ))}
                        <div className="border-t border-border-light mt-1 pt-1">
                          <NavLink
                            to="/projects"
                            className="block px-4 py-1.5 text-[11px] font-semibold text-gold hover:underline"
                          >
                            View All Projects →
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  );
                }

                return (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    end={item.path === '/'}
                    className={({ isActive }) =>
                      `relative px-3.5 py-2 text-xs xl:text-sm font-medium tracking-wide transition-colors ${
                        isActive
                          ? 'text-gold font-semibold after:content-[""] after:absolute after:bottom-0 after:left-3.5 after:right-3.5 after:h-0.5 after:bg-gold'
                          : 'text-text-main hover:text-gold'
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                );
              })}
            </nav>

            {/* Right Action: Enquire Now button */}
            <div className="hidden lg:flex items-center gap-3">
              <Button
                variant="gold"
                size="sm"
                onClick={() => openEnquiry()}
              >
                Enquire Now
              </Button>
            </div>

            {/* Mobile Hamburger Menu Toggle */}
            <div className="flex lg:hidden items-center gap-2">
              <Button
                variant="gold"
                size="sm"
                onClick={() => openEnquiry()}
                className="text-xs px-3 py-1.5"
              >
                Enquire
              </Button>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open mobile navigation menu"
                className="p-2 text-forest hover:text-gold rounded transition-colors focus:outline-none focus:ring-2 focus:ring-gold"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileNavigation isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
};

