import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { useModal } from '../../context/ModalContext';
import { EnquiryForm } from '../forms/EnquiryForm';

export const EnquiryModal: React.FC = () => {
  const { isEnquiryOpen, isSiteVisitOpen, selectedProject, closeEnquiry, closeSiteVisit } = useModal();

  const isOpen = isEnquiryOpen || isSiteVisitOpen;
  const isSiteVisit = isSiteVisitOpen;
  const onClose = isSiteVisit ? closeSiteVisit : closeEnquiry;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isOpen && e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-lg bg-white rounded-[4px] shadow-2xl border border-border-light my-8 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Modal Header */}
        <div className="bg-forest px-6 py-5 text-white flex items-center justify-between border-b border-forest-light">
          <div>
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold-light">
              {isSiteVisit ? 'SCHEDULE A VISIT' : 'GET IN TOUCH'}
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-normal text-white">
              {isSiteVisit ? 'Book a Site Visit' : `Enquire About ${selectedProject}`}
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-1.5 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          <EnquiryForm defaultProject={selectedProject} isModal onSuccess={onClose} />
        </div>
      </div>
    </div>
  );
};

