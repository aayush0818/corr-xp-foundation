import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { ArrowRight, MapPin, Calendar, ExternalLink, FolderOpen } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';

const categories = ['All', 'Infrastructure', 'Oil & Gas', 'Commercial', 'Marine', 'Industrial'];

const projectsData = [
  {
    id: 1,
    title: 'Harbor Bridge Restoration',
    category: 'Infrastructure',
    location: 'Mumbai, Maharashtra',
    year: '2024',
    value: '₹45 Cr',
    description: 'Complete corrosion assessment and protective coating application for a historic harbor bridge spanning 2.5km.',
    image: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&w=800&q=80',
    featured: true,
  },
  {
    id: 2,
    title: 'Refinery Tank Coating',
    category: 'Oil & Gas',
    location: 'Jamnagar, Gujarat',
    year: '2024',
    value: '₹28 Cr',
    description: 'Internal and external coating systems for 12 petroleum storage tanks with 50,000 KL capacity.',
    image: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=800&q=80',
    featured: true,
  },
  {
    id: 3,
    title: 'Multi-Story Parking Repair',
    category: 'Commercial',
    location: 'Bangalore, Karnataka',
    year: '2023',
    value: '₹12 Cr',
    description: 'Structural concrete repair and waterproofing for a 6-level parking structure.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    featured: false,
  },
  {
    id: 4,
    title: 'Port Terminal Protection',
    category: 'Marine',
    location: 'Kochi, Kerala',
    year: '2023',
    value: '₹35 Cr',
    description: 'Cathodic protection system installation for marine terminal structures including 8 berths.',
    image: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=800&q=80',
    featured: true,
  },
  {
    id: 5,
    title: 'Power Plant Assessment',
    category: 'Industrial',
    location: 'Vizag, Andhra Pradesh',
    year: '2023',
    value: '₹8 Cr',
    description: 'Comprehensive corrosion evaluation of cooling tower structures and chimney rehabilitation.',
    image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=800&q=80',
    featured: false,
  },
  {
    id: 6,
    title: 'Highway Overpass Repair',
    category: 'Infrastructure',
    location: 'Delhi NCR',
    year: '2022',
    value: '₹52 Cr',
    description: 'Structural rehabilitation and expansion joint replacement for 15 highway overpasses.',
    image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=800&q=80',
    featured: false,
  },
  {
    id: 7,
    title: 'Pipeline Coating Project',
    category: 'Oil & Gas',
    location: 'Barmer, Rajasthan',
    year: '2022',
    value: '₹22 Cr',
    description: 'External pipeline coating and cathodic protection for 120km natural gas transmission lines.',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&q=80',
    featured: false,
  },
  {
    id: 8,
    title: 'Office Tower Facade',
    category: 'Commercial',
    location: 'Pune, Maharashtra',
    year: '2022',
    value: '₹18 Cr',
    description: 'Concrete facade repair and protective coating for a 40-story office building.',
    image: 'https://images.unsplash.com/photo-1464082354059-27db6ce50048?auto=format&fit=crop&w=800&q=80',
    featured: false,
  },
  {
    id: 9,
    title: 'Marina Dock Restoration',
    category: 'Marine',
    location: 'Goa',
    year: '2021',
    value: '₹15 Cr',
    description: 'Complete rehabilitation of floating dock structures including 24 pile repairs.',
    image: 'https://images.unsplash.com/photo-1527015175922-36a306cf0e20?auto=format&fit=crop&w=800&q=80',
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
                500+ successful projects across India. Each one a testament to our commitment 
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
              { value: '₹500+ Cr', label: 'Project Value' },
              { value: '500+', label: 'Projects' },
              { value: '25+', label: 'States' },
              { value: '98%', label: 'Satisfaction' },
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
                      <h3 className="text-lg font-semibold text-charcoal mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-charcoal/70 text-sm line-clamp-2 mb-4">
                        {project.description}
                      </p>
                      <div className="pt-3 border-t border-border">
                        <span className="text-primary font-bold">{project.value}</span>
                      </div>
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