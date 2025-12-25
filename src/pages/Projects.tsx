import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { ArrowRight, MapPin, Calendar, ExternalLink } from 'lucide-react';
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
    description: 'Structural concrete repair and waterproofing for a 6-level parking structure serving 2000+ vehicles.',
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
    description: 'Concrete facade repair and protective coating application for a 40-story office building.',
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

  const featuredProject = projectsData.find(p => p.featured);

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
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1920&q=80)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        
        <div className="container-custom relative z-10 pt-32 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="font-script text-primary text-xl md:text-2xl mb-4 block">
              Our Portfolio
            </span>
            <h1 className="text-warm-white text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Projects That{' '}
              <span className="text-primary">Define Excellence</span>
            </h1>
            <p className="text-xl text-warm-white/85 max-w-2xl leading-relaxed">
              500+ successful projects across India. Each one a testament to our commitment 
              to engineering excellence and client satisfaction.
            </p>
          </motion.div>
        </div>

        {/* Stats bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-slate/95 backdrop-blur-sm">
          <div className="container-custom py-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: '₹500+ Cr', label: 'Project Value' },
                { value: '500+', label: 'Projects Completed' },
                { value: '25+', label: 'States Covered' },
                { value: '98%', label: 'Client Satisfaction' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</div>
                  <div className="text-warm-white/60 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Project */}
      {featuredProject && (
        <section className="bg-warm-white section-padding">
          <div className="container-custom">
            <AnimatedSection className="mb-8">
              <span className="font-script text-accent text-lg">Featured Project</span>
            </AnimatedSection>
            
            <AnimatedSection>
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="relative">
                  <div className="aspect-[16/10] rounded overflow-hidden shadow-custom-xl">
                    <img
                      src={featuredProject.image}
                      alt={featuredProject.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded">
                      {featuredProject.category}
                    </span>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-4 text-charcoal/60 mb-4">
                    <span className="flex items-center gap-1">
                      <MapPin size={16} />
                      {featuredProject.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar size={16} />
                      {featuredProject.year}
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
                    {featuredProject.title}
                  </h2>
                  <p className="text-charcoal/70 text-lg mb-6 leading-relaxed">
                    {featuredProject.description}
                  </p>
                  <div className="flex items-center gap-8 mb-8">
                    <div>
                      <div className="text-3xl font-bold text-primary">{featuredProject.value}</div>
                      <div className="text-charcoal/60 text-sm">Project Value</div>
                    </div>
                  </div>
                  <Link to="/contact">
                    <Button variant="default" size="lg">
                      <span>Discuss Your Project</span>
                      <ArrowRight size={18} className="ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      )}

      {/* Filter & Projects */}
      <section className="bg-warm-white-dark section-padding">
        <div className="container-custom">
          {/* Category Filter */}
          <AnimatedSection className="mb-12">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-3 rounded text-sm font-semibold transition-all duration-300 ${
                    activeCategory === category
                      ? 'bg-primary text-primary-foreground shadow-custom-sm'
                      : 'bg-warm-white text-charcoal hover:bg-muted border border-border'
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
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <AnimatedSection key={project.id} delay={index * 0.05}>
                  <div className="bg-warm-white rounded overflow-hidden shadow-custom-sm hover:shadow-custom-xl transition-all duration-500 group border border-border h-full">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded">
                          {project.category}
                        </span>
                      </div>
                      <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-10 h-10 bg-warm-white rounded-full flex items-center justify-center">
                          <ExternalLink size={18} className="text-charcoal" />
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 text-sm text-charcoal/60 mb-3">
                        <span className="flex items-center gap-1">
                          <MapPin size={14} />
                          {project.location}
                        </span>
                        <span>•</span>
                        <span>{project.year}</span>
                      </div>
                      <h3 className="text-xl font-bold text-charcoal mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-charcoal/70 text-sm line-clamp-2 mb-4">
                        {project.description}
                      </p>
                      <div className="pt-4 border-t border-border">
                        <span className="text-primary font-bold text-lg">{project.value}</span>
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
      <section className="bg-slate section-padding relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-30" />
        
        <div className="container-custom relative z-10 text-center">
          <AnimatedSection>
            <span className="font-script text-primary text-lg mb-2 block">Start Your Project</span>
            <h2 className="text-warm-white mb-4">Have a Similar Project in Mind?</h2>
            <p className="text-warm-white/80 max-w-2xl mx-auto mb-8 text-lg">
              Let's discuss how we can apply our expertise to your infrastructure 
              protection needs and deliver measurable results.
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
