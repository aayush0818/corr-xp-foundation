import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { ArrowRight, MapPin, Calendar, ExternalLink, FolderOpen } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import workFiberWrapping from '@/assets/work-fiber-wrapping-1.jpg';
import workScaffolding from '@/assets/work-scaffolding-1.jpg';
import workBeamWrapping from '@/assets/work-beam-wrapping-1.jpg';
import workBeamWrapping2 from '@/assets/work-beam-wrapping-2.jpg';
import workColumnWrapping from '@/assets/work-column-wrapping-1.jpg';
import workFloorCoating from '@/assets/work-floor-coating-1.jpg';
import workSurfacePrep from '@/assets/work-surface-prep-1.jpg';

const categories = ['All', 'Fiber Wrapping', 'Structural Repair', 'Coating', 'Infrastructure'];

const projectsData = [
  {
    id: 1,
    title: 'Column & Beam FRP Strengthening',
    category: 'Fiber Wrapping',
    location: 'Maharashtra',
    year: '2024',
    description: 'Complete CFRP wrapping of columns and beams for structural load enhancement in commercial building.',
    image: workFiberWrapping,
    featured: true,
  },
  {
    id: 2,
    title: 'Multi-Level Structure Retrofitting',
    category: 'Structural Repair',
    location: 'Maharashtra',
    year: '2024',
    description: 'Large-scale column fiber wrapping project for multi-story industrial facility.',
    image: workColumnWrapping,
    featured: true,
  },
  {
    id: 3,
    title: 'Beam Strengthening Project',
    category: 'Fiber Wrapping',
    location: 'Maharashtra',
    year: '2024',
    description: 'Carbon fiber wrapping application on RCC beams to improve load capacity.',
    image: workBeamWrapping,
    featured: false,
  },
  {
    id: 4,
    title: 'Structural Beam Reinforcement',
    category: 'Fiber Wrapping',
    location: 'Maharashtra',
    year: '2024',
    description: 'FRP strengthening of multiple beam lines in structural rehabilitation project.',
    image: workBeamWrapping2,
    featured: true,
  },
  {
    id: 5,
    title: 'Industrial Floor Coating',
    category: 'Coating',
    location: 'Maharashtra',
    year: '2024',
    description: 'High-performance epoxy floor coating system for industrial warehouse facility.',
    image: workFloorCoating,
    featured: false,
  },
  {
    id: 6,
    title: 'Column Scaffolding & Repair',
    category: 'Structural Repair',
    location: 'Maharashtra',
    year: '2024',
    description: 'Surface preparation and structural repair work on building columns with specialized scaffolding.',
    image: workScaffolding,
    featured: false,
  },
  {
    id: 7,
    title: 'Concrete Surface Preparation',
    category: 'Structural Repair',
    location: 'Maharashtra',
    year: '2024',
    description: 'Mechanical surface preparation for concrete repair and fiber wrapping installation.',
    image: workSurfacePrep,
    featured: false,
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
      <Helmet>
        <title>Our Projects | CORR XP - Portfolio of Infrastructure Protection Work</title>
        <meta
          name="description"
          content="Explore CORR XP's portfolio of successful corrosion protection and concrete rehabilitation projects across infrastructure, oil & gas, commercial, and marine sectors."
        />
      </Helmet>

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