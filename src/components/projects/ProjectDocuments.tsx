import React, { useState } from 'react';
import { FileText, Download, ExternalLink, ShieldCheck, X } from 'lucide-react';
import { Container } from '../common/Container';
import { SectionHeading } from '../common/SectionHeading';
import { Project, ProjectDocument } from '../../types';

interface ProjectDocumentsProps {
  project: Project;
}

export const ProjectDocuments: React.FC<ProjectDocumentsProps> = ({ project }) => {
  const [selectedDoc, setSelectedDoc] = useState<ProjectDocument | null>(null);

  return (
    <>
      <section id="approvals" className="py-14 sm:py-20 bg-offwhite border-t border-border-light">
        <Container>
          <SectionHeading
            eyebrow="LEGAL DILIGENCE"
            title="Approvals & Documents"
            subtitle="Complete legal transparency with verifiable layout sanctions, RERA compliance, and clear title documentation."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
            {project.documents.map((doc) => (
              <div
                key={doc.id}
                className="bg-white rounded-[4px] border border-border-light hover:border-gold/60 p-5 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-[4px] bg-gold-pale border border-gold/30 text-gold flex items-center justify-center mb-4 group-hover:bg-gold group-hover:text-white transition-colors">
                    <FileText className="w-6 h-6 stroke-[1.8]" />
                  </div>

                  <span className="text-[10px] uppercase font-semibold text-gold tracking-wider block mb-1">
                    {doc.category}
                  </span>

                  <h3 className="font-serif text-base font-semibold text-forest mb-2 leading-snug">
                    {doc.title}
                  </h3>

                  <p className="text-xs text-text-muted leading-relaxed mb-4">
                    {doc.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-border-light/70 flex items-center justify-between">
                  <span className="text-[11px] text-text-muted/80">
                    {doc.fileSize || 'PDF Document'}
                  </span>

                  <button
                    type="button"
                    onClick={() => setSelectedDoc(doc)}
                    className="text-xs font-semibold text-gold hover:text-forest flex items-center gap-1 cursor-pointer transition-colors"
                  >
                    <span>View Document</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-text-muted mt-8 max-w-xl mx-auto">
            * Complete certified copy sets of title deeds, link documents, encumbrance certificates, and town planning approvals are readily inspectable at our corporate office upon request.
          </p>
        </Container>
      </section>

      {/* Document Preview Modal */}
      {selectedDoc && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4"
          onClick={() => setSelectedDoc(null)}
        >
          <div
            className="relative w-full max-w-lg bg-white rounded-[4px] shadow-2xl p-6 border border-border-light animate-in fade-in zoom-in-95"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-4 border-b border-border-light pb-3">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-gold" />
                <h3 className="font-serif text-lg font-semibold text-forest">
                  {selectedDoc.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedDoc(null)}
                className="p-1 rounded-full text-text-muted hover:text-forest hover:bg-offwhite"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="bg-offwhite border border-border-light rounded p-4 mb-4 text-xs text-text-muted space-y-2">
              <p>
                <strong className="text-forest">Category:</strong> {selectedDoc.category}
              </p>
              <p>
                <strong className="text-forest">Project:</strong> {project.name} ({project.location})
              </p>
              <p>
                <strong className="text-forest">Verification:</strong> 100% Marketable Legal Title &amp; Authority Sanctioned
              </p>
              <p className="text-[11px] italic pt-1 text-gold">
                Illustrative preview certificate. Physical copies and registered deeds are provided to customers during site consultation and agreement finalization.
              </p>
            </div>

            <div className="flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setSelectedDoc(null)}
                className="px-4 py-2 border border-border-light text-forest text-xs font-medium rounded hover:bg-offwhite"
              >
                Close Preview
              </button>
              <button
                type="button"
                onClick={() => {
                  alert(`Downloading ${selectedDoc.title} informational brochure...`);
                  setSelectedDoc(null);
                }}
                className="px-4 py-2 bg-gold hover:bg-gold-hover text-white text-xs font-medium rounded flex items-center gap-1.5 shadow-sm"
              >
                <Download className="w-3.5 h-3.5" />
                Download Spec Sheet
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

