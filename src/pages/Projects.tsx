import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { ArrowRight, MapPin, Calendar, ExternalLink, FolderOpen } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import terraceWaterproofing from '@/assets/project-terrace-waterproofing.png';
import paintingWorks from '@/assets/project-painting-works.png';
import nerulTemple from '@/assets/nerul-temple-5.png';
import SEOHead from '@/components/seo/SEOHead';
import { SITE_URL } from '@/lib/seo';

const categories = ['All', 'Waterproofing', 'Painting'];

const projectsData = [
  {
    id: 1,
    title: 'Terrace Waterproofing',
    category: 'Waterproofing',
    location: 'Maharashtra',
    year: '2024',
    description: 'Complete waterproofing solution for building terrace with specialized coating application.',
    image: terraceWaterproofing,
    featured: true,
  },
  {
    id: 2,
    title: 'Painting Works',
    category: 'Painting',
    location: 'Maharashtra',
    year: '2024',
    description: 'Large-scale painting and coating works for infrastructure project.',
    image: paintingWorks,
    featured: true,
  },
  {
    id: 3,
    title: 'Nerul Temple Project',
    category: 'Painting',
    location: 'Nerul, Maharashtra',
    year: '2024',
    description: 'Temple restoration and painting works including detailed statue painting and structural finishing.',
    image: nerulTemple,
    featured: true,
  },
];

const ProjectsPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects =
    activeCategory === 'All'
      ? projectsData
      : projectsData.filter((project) => project.category === activeCategory);

  return (
    <>
      <SEOHead
        title="Our Projects | Portfolio of Structural Repair & Retrofitting Work"
        description="Explore CORR XP's portfolio of 25+ successful structural repair, FRP strengthening, and retrofitting projects across Maharashtra and India."
        path="/projects"
        keywords="structural repair projects, FRP strengthening portfolio, fiber wrapping projects, concrete repair work, infrastructure protection India"
        breadcrumbs={[
          { name: 'Home', url: SITE_URL },
          { name: 'Projects', url: `${SITE_URL}/projects` },
        ]}
      />

      {/* Hero Section */}
      <section className="relative bg-slate overflow-hidden">
        {/* Abstract background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-dark via-slate to-slate" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-primary/5 to-transparent" />
          <div className="absolute inset-0 pattern-dots opacity-30" />
        </div>
        
        <div className="container-custom relative z-10 pt-32 pb-20 lg:pt-40 lg:pb-28">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
                <FolderOpen className="w-4 h-4 text-primary" />
                <span className="text-primary text-sm font-medium">Our Portfolio</span>
              </div>
              
              <h1 className="text-warm-white text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Projects That{' '}
                <span className="text-primary">Define Excellence</span>
              </h1>
              
              <p className="text-lg text-warm-white/80 max-w-2xl leading-relaxed">
                25+ successful projects across India. Each one a testament to our commitment 
                to engineering excellence and client satisfaction.
              </p>
            </motion.div>
          </div>

          {/* Stats row */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-warm-white/10"
          >
            {[
              { value: '25+', label: 'Projects' },
              { value: '9+', label: 'Years Experience' },
              { value: '6', label: 'Structural Engineers' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-bold text-primary">{stat.value}</div>
                <div className="text-warm-white/60 text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Filter & Projects */}
      <section className="bg-warm-white section-padding">
        <div className="container-custom">
          {/* Category Filter */}
          <AnimatedSection className="mb-10">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-5 py-2.5 rounded text-sm font-medium transition-all duration-300 ${
                    activeCategory === category
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-warm-white-dark text-charcoal hover:bg-muted border border-border'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </AnimatedSection>

          {/* Projects Grid */}
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredProjects.map((project, index) => (
                <AnimatedSection key={project.id} delay={index * 0.05}>
                  <div className="bg-warm-white rounded overflow-hidden border border-border hover:shadow-custom-lg transition-all duration-300 group h-full">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-dark/60 via-transparent to-transparent" />
                      <div className="absolute top-3 left-3">
                        <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded">
                          {project.category}
                        </span>
                      </div>
                      <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-9 h-9 bg-warm-white rounded-full flex items-center justify-center">
                          <ExternalLink size={16} className="text-charcoal" />
                        </div>
                      </div>
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-2 text-xs text-charcoal/60 mb-2">
                        <span className="flex items-center gap-1">
                          <MapPin size={12} />
                          {project.location}
                        </span>
                        <span>•</span>
                        <span>{project.year}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-charcoal group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate section-padding-sm">
        <div className="container-custom text-center">
          <AnimatedSection>
            <h2 className="text-warm-white text-3xl font-bold mb-4">Have a Similar Project?</h2>
            <p className="text-warm-white/70 max-w-xl mx-auto mb-8">
              Let's discuss how we can apply our expertise to your infrastructure protection needs.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact">
                <Button variant="hero" size="lg">
                  <span>Start Your Project</span>
                  <ArrowRight size={18} className="ml-2" />
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="heroOutline" size="lg">
                  <span>Explore Services</span>
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default ProjectsPage;