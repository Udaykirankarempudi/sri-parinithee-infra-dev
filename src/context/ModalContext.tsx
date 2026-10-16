import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ModalContextType {
  isEnquiryOpen: boolean;
  isSiteVisitOpen: boolean;
  selectedProject: string;
  openEnquiry: (projectName?: string) => void;
  closeEnquiry: () => void;
  openSiteVisit: (projectName?: string) => void;
  closeSiteVisit: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [isSiteVisitOpen, setIsSiteVisitOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState('Green Valley');

  const openEnquiry = (projectName?: string) => {
    if (projectName) setSelectedProject(projectName);
    setIsEnquiryOpen(true);
  };

  const closeEnquiry = () => setIsEnquiryOpen(false);

  const openSiteVisit = (projectName?: string) => {
    if (projectName) setSelectedProject(projectName);
    setIsSiteVisitOpen(true);
  };

  const closeSiteVisit = () => setIsSiteVisitOpen(false);

  return (
    <ModalContext.Provider
      value={{
        isEnquiryOpen,
        isSiteVisitOpen,
        selectedProject,
        openEnquiry,
        closeEnquiry,
        openSiteVisit,
        closeSiteVisit,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};

