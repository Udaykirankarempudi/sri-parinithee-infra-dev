import React, { useState } from 'react';
import { ZoomIn, Eye } from 'lucide-react';
import { Container } from '../common/Container';
import { SectionHeading } from '../common/SectionHeading';
import { Lightbox } from '../common/Lightbox';
import { Project, GalleryItem } from '../../types';

interface ProjectGalleryProps {
  project: Project;
}

export const ProjectGallery: React.FC<ProjectGalleryProps> = ({ project }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const categories = ['All', 'Site Photos', 'Development', 'Aerial View', 'Amenities'];

  const filteredImages = project.gallery.filter((item) => {
    if (selectedCategory === 'All') return true;
    return item.category === selectedCategory;
  });

  const openLightboxAt = (item: GalleryItem) => {
    const idx = filteredImages.findIndex((img) => img.id === item.id);
    setCurrentImageIndex(idx >= 0 ? idx : 0);
    setLightboxOpen(true);
  };

  return (
    <section id="gallery" className="py-14 sm:py-20 bg-white">
      <Container>
        <SectionHeading
          eyebrow="ON-SITE VISUALS"
          title="Project Gallery"
          subtitle="Explore high-resolution site photographs, development progress, and landscape features."
        />

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {categories.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`px-3.5 py-1.5 rounded-[3px] text-xs font-medium transition-colors cursor-pointer ${
                  isActive
                    ? 'bg-forest text-white shadow-xs'
                    : 'bg-offwhite text-forest border border-border-light hover:border-gold hover:text-gold'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Responsive Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredImages.slice(0, 8).map((item) => (
            <div
              key={item.id}
              onClick={() => openLightboxAt(item)}
              className="group relative aspect-[4/3] rounded-[4px] overflow-hidden bg-forest-dark border border-border-light cursor-pointer shadow-xs hover:shadow-lg transition-all duration-300"
            >
              <img
                src={item.url}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                <span className="text-[10px] uppercase font-semibold text-gold-light tracking-wider">
                  {item.category}
                </span>
                <span className="font-serif text-white text-xs sm:text-sm font-medium leading-snug">
                  {item.title}
                </span>
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-forest/80 backdrop-blur-xs flex items-center justify-center text-white">
                  <ZoomIn className="w-4 h-4 text-gold" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer info & view all trigger */}
        <div className="flex items-center justify-between pt-8 text-xs text-text-muted border-t border-border-light/80 mt-8">
          <span>
            Showing {filteredImages.length} images of {project.name}
          </span>
          <button
            type="button"
            onClick={() => {
              setCurrentImageIndex(0);
              setLightboxOpen(true);
            }}
            className="text-gold font-semibold hover:underline flex items-center gap-1 cursor-pointer"
          >
            <Eye className="w-4 h-4" /> View Fullscreen Gallery →
          </button>
        </div>

        {/* Lightbox for Gallery */}
        <Lightbox
          isOpen={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
          images={filteredImages.map((img) => ({ url: img.url, title: img.title }))}
          currentIndex={currentImageIndex}
          onIndexChange={(newIdx) => setCurrentImageIndex(newIdx)}
        />
      </Container>
    </section>
  );
};

