import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { ArrowLeft, MapPin, Calendar, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import SEOHead from '@/components/seo/SEOHead';
import { SITE_URL } from '@/lib/seo';

import nerulTemple1 from '@/assets/nerul-temple-1.png';
import nerulTemple2 from '@/assets/nerul-temple-2.png';
import nerulTemple3 from '@/assets/nerul-temple-3.png';
import nerulTemple4 from '@/assets/nerul-temple-4.png';
import nerulTemple5 from '@/assets/nerul-temple-5.png';
import nerulTemple6 from '@/assets/nerul-temple-6.png';

const galleryImages = [
  { src: nerulTemple1, alt: 'Nerul Temple building exterior view' },
  { src: nerulTemple2, alt: 'Nerul Temple building facade close-up' },
  { src: nerulTemple3, alt: 'Temple deity statues painting work' },
  { src: nerulTemple4, alt: 'Temple sculpture restoration' },
  { src: nerulTemple5, alt: 'Workers painting temple gopuram' },
  { src: nerulTemple6, alt: 'Completed temple statue painting' },
];

const ProjectNerulTemple = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedImage(index);
  const closeLightbox = () => setSelectedImage(null);
  
  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length);
    }
  };
  
  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  return (
    <>
      <SEOHead
        title="Nerul Temple Project | Temple Painting & Restoration Work"
        description="Temple restoration and painting works at Nerul including detailed statue painting, gopuram finishing, and structural work."
        path="/projects/nerul-temple"
        keywords="temple painting, temple restoration, nerul temple, statue painting, gopuram painting"
        breadcrumbs={[
          { name: 'Home', url: SITE_URL },
          { name: 'Projects', url: `${SITE_URL}/projects` },
          { name: 'Nerul Temple Project', url: `${SITE_URL}/projects/nerul-temple` },
        ]}
      />

      {/* Hero Section */}
      <section className="relative bg-slate overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-dark via-slate to-slate" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute inset-0 pattern-dots opacity-30" />
        </div>
        
        <div className="container-custom relative z-10 pt-32 pb-16 lg:pt-40 lg:pb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link 
              to="/projects" 
              className="inline-flex items-center gap-2 text-warm-white/70 hover:text-primary transition-colors mb-6"
            >
              <ArrowLeft size={18} />
              <span>Back to Projects</span>
            </Link>
            
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-primary text-primary-foreground text-sm font-medium rounded">
                Painting
              </span>
              <span className="flex items-center gap-1 text-warm-white/60 text-sm">
                <MapPin size={14} />
                Nerul, Maharashtra
              </span>
              <span className="flex items-center gap-1 text-warm-white/60 text-sm">
                <Calendar size={14} />
                2024
              </span>
            </div>
            
            <h1 className="text-warm-white text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Nerul Temple{' '}
              <span className="text-primary">Project</span>
            </h1>
            
            <p className="text-lg text-warm-white/80 max-w-2xl leading-relaxed">
              Temple restoration and painting works including detailed statue painting, 
              gopuram finishing, and complete structural exterior finishing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="bg-warm-white section-padding">
        <div className="container-custom">
          <AnimatedSection className="mb-10">
            <h2 className="text-charcoal text-2xl lg:text-3xl font-bold mb-2">Project Gallery</h2>
            <p className="text-charcoal/60">Click on any image to view in full size</p>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <AnimatedSection key={index} delay={index * 0.05}>
                <div 
                  className="relative aspect-[4/3] rounded overflow-hidden cursor-pointer group"
                  onClick={() => openLightbox(index)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/30 transition-colors duration-300 flex items-center justify-center">
                    <span className="text-warm-white opacity-0 group-hover:opacity-100 transition-opacity font-medium">
                      View
                    </span>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="bg-warm-white-dark section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            <AnimatedSection>
              <h3 className="text-charcoal text-xl font-bold mb-4">Project Overview</h3>
              <p className="text-charcoal/70 leading-relaxed mb-4">
                This comprehensive temple restoration project involved detailed painting and 
                finishing work on the temple structure, including the iconic gopuram and 
                intricate deity statues.
              </p>
              <p className="text-charcoal/70 leading-relaxed">
                Our team carefully restored and painted each statue with traditional colors 
                while ensuring the structural integrity of the building's exterior was 
                properly finished and protected.
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={0.1}>
              <h3 className="text-charcoal text-xl font-bold mb-4">Services Provided</h3>
              <ul className="space-y-3">
                {[
                  'Temple exterior painting and finishing',
                  'Deity statue restoration and painting',
                  'Gopuram painting with traditional colors',
                  'Structural surface preparation',
                  'Protective coating application',
                  'Scaffolding and access systems',
                ].map((service) => (
                  <li key={service} className="flex items-start gap-3 text-charcoal/70">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    {service}
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary section-padding-sm">
        <div className="container-custom text-center">
          <AnimatedSection>
            <h2 className="text-primary-foreground text-3xl font-bold mb-4">
              Have a Similar Project?
            </h2>
            <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
              Let's discuss how we can help with your temple or heritage structure restoration needs.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-warm-white text-primary font-semibold hover:bg-warm-white/90">
                  <span>Get in Touch</span>
                </Button>
              </Link>
              <Link to="/projects">
                <Button variant="heroOutline" size="lg" className="border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground/10">
                  <span>View More Projects</span>
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-charcoal/95 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button 
              className="absolute top-4 right-4 text-warm-white/70 hover:text-warm-white p-2"
              onClick={closeLightbox}
            >
              <X size={32} />
            </button>
            
            <button 
              className="absolute left-4 top-1/2 -translate-y-1/2 text-warm-white/70 hover:text-warm-white p-2"
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
            >
              <ChevronLeft size={40} />
            </button>
            
            <button 
              className="absolute right-4 top-1/2 -translate-y-1/2 text-warm-white/70 hover:text-warm-white p-2"
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
            >
              <ChevronRight size={40} />
            </button>
            
            <motion.img
              key={selectedImage}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              src={galleryImages[selectedImage].src}
              alt={galleryImages[selectedImage].alt}
              className="max-w-full max-h-[85vh] object-contain rounded"
              onClick={(e) => e.stopPropagation()}
            />
            
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-warm-white/70 text-sm">
              {selectedImage + 1} / {galleryImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectNerulTemple;
