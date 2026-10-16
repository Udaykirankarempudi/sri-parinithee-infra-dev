import React from 'react';
import { NavLink } from 'react-router-dom';
import { X, ChevronRight, Phone, Mail, MapPin } from 'lucide-react';
import { NAV_ITEMS } from '../../data/navigation';
import { PROJECTS } from '../../data/projects';
import { COMPANY_INFO } from '../../data/company';
import { Logo } from './Logo';
import { Button } from '../common/Button';
import { useModal } from '../../context/ModalContext';

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileNavigation: React.FC<MobileNavigationProps> = ({ isOpen, onClose }) => {
  const { openEnquiry } = useModal();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity" 
        onClick={onClose} 
      />

      {/* Drawer */}
      <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-white shadow-2xl flex flex-col z-50 animate-in slide-in-from-right duration-300">
        {/* Drawer Header */}
        <div className="p-4 flex items-center justify-between border-b border-border-light bg-offwhite">
          <Logo size="sm" />
          <button
            onClick={onClose}
            aria-label="Close Navigation Menu"
            className="p-2 text-forest hover:text-gold rounded-full hover:bg-gold-pale transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Links */}
        <div className="flex-1 overflow-y-auto px-4 py-6 space-y-2">
          {NAV_ITEMS.map((item) => (
            <div key={item.path}>
              <NavLink
                to={item.path}
                onClick={onClose}
                className={({ isActive }) =>
                  `flex items-center justify-between py-2.5 px-3 rounded text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-gold bg-gold-pale/60 font-semibold'
                      : 'text-forest hover:text-gold hover:bg-gold-pale/30'
                  }`
                }
              >
                <span>{item.name}</span>
                <ChevronRight className="w-4 h-4 text-text-muted/50" />
              </NavLink>

              {/* Sub-projects list under Projects */}
              {item.name === 'Projects' && (
                <div className="ml-4 pl-3 my-1 border-l-2 border-gold/30 space-y-1">
                  {PROJECTS.map((p) => (
                    <NavLink
                      key={p.slug}
                      to={`/projects/${p.slug}`}
                      onClick={onClose}
                      className={({ isActive }) =>
                        `block py-1.5 px-2 text-xs rounded transition-colors ${
                          isActive
                            ? 'text-gold font-medium bg-gold-pale/40'
                            : 'text-text-muted hover:text-forest'
                        }`
                      }
                    >
                      {p.name}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Quick Contact Info */}
          <div className="pt-6 mt-6 border-t border-border-light space-y-3 text-xs text-text-muted">
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-gold shrink-0" />
              <span>{COMPANY_INFO.contact.phones[0]}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-gold shrink-0" />
              <span>{COMPANY_INFO.contact.email}</span>
            </div>
            <div className="flex items-start gap-2">
              <MapPin className="w-3.5 h-3.5 text-gold shrink-0 mt-0.5" />
              <span>MVP Colony, Visakhapatnam, AP</span>
            </div>
          </div>
        </div>

        {/* Drawer Footer CTA */}
        <div className="p-4 border-t border-border-light bg-offwhite">
          <Button
            variant="gold"
            fullWidth
            onClick={() => {
              onClose();
              openEnquiry();
            }}
          >
            Enquire Now
          </Button>
        </div>
      </div>
    </div>
  );
};

