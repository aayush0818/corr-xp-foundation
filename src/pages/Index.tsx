import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import AnimatedSection from '@/components/ui/AnimatedSection';
import CountUpNumber from '@/components/ui/CountUpNumber';
import ScrollIndicator from '@/components/ui/ScrollIndicator';
import FloatingContact from '@/components/ui/FloatingContact';
import { ArrowRight, Shield, Wrench, Microscope, Building2, FileCheck, Users, Award, CheckCircle2 } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

// Hero Section - Full bleed with real imagery
const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* Background Image */}
    <div 
      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1920&q=80)'
      }}
    />
    {/* Overlay */}
    <div className="absolute inset-0 hero-overlay" />
    
    {/* Content */}
    <div className="container-custom relative z-10 pt-20">
      <div className="max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="font-script text-primary text-xl md:text-2xl mb-4 block">
            Excellence in Engineering
          </span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-warm-white text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1] text-shadow-lg"
        >
          Protecting Infrastructure,{' '}
          <span className="text-primary">Building Legacy</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-warm-white/85 mb-10 max-w-2xl leading-relaxed"
        >
          India's leading specialists in corrosion engineering and concrete rehabilitation. 
          25+ years of protecting critical infrastructure across industries.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-wrap gap-4"
        >
          <Button variant="hero" size="lg" asChild>
            <Link to="/contact">
              Get Free Consultation
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </Button>
          <Button 
            variant="heroOutline" 
            size="lg" 
            asChild
          >
            <Link to="/projects">Explore Our Work</Link>
          </Button>
        </motion.div>
      </div>
    </div>

    <ScrollIndicator />
  </section>
);

// Stats Section - Horizontal with dividers
const StatsSection = () => {
  const stats = [
    { value: 25, suffix: '+', label: 'Years of Excellence', icon: Award },
    { value: 500, suffix: '+', label: 'Projects Delivered', icon: Building2 },
    { value: 150, suffix: '+', label: 'Expert Engineers', icon: Users },
    { value: 98, suffix: '%', label: 'Client Retention', icon: CheckCircle2 },
  ];

  return (
    <section className="relative bg-slate py-16 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 pattern-dots opacity-50" />
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
          {stats.map((stat, index) => (
            <AnimatedSection 
              key={stat.label} 
              delay={index * 0.1} 
              className="stat-divider text-center lg:px-8"
            >
              <stat.icon className="w-8 h-8 text-primary mx-auto mb-3 opacity-80" />
              <div className="text-4xl md:text-5xl font-bold text-warm-white mb-2 tracking-tight">
                <CountUpNumber end={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-warm-white/60 font-medium text-sm uppercase tracking-wide">
                {stat.label}
              </p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

// About Snapshot - Asymmetric layout with overlapping elements
const AboutSnapshotSection = () => (
  <section className="bg-warm-white section-padding overflow-hidden">
    <div className="container-custom">
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Image Column - with offset */}
        <AnimatedSection direction="left" className="lg:col-span-6 order-2 lg:order-1">
          <div className="relative">
            {/* Main Image */}
            <div className="relative aspect-[4/5] rounded overflow-hidden shadow-custom-xl">
              <img
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80"
                alt="Engineering team inspecting infrastructure"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating accent card */}
            <div className="absolute -bottom-8 -right-8 bg-primary p-6 rounded shadow-custom-xl max-w-[200px]">
              <div className="text-4xl font-bold text-primary-foreground mb-1">25+</div>
              <div className="text-primary-foreground/80 text-sm">Years Building Trust</div>
            </div>
            
            {/* Decorative line */}
            <div className="absolute -left-6 top-1/4 w-1 h-32 bg-primary hidden lg:block" />
          </div>
        </AnimatedSection>

        {/* Content Column */}
        <AnimatedSection direction="right" className="lg:col-span-6 order-1 lg:order-2">
          <span className="font-script text-accent text-lg mb-2 block">Who We Are</span>
          <h2 className="mb-6 text-charcoal">
            Engineering Excellence,{' '}
            <span className="text-primary">Proven Results</span>
          </h2>
          
          <div className="space-y-4 text-charcoal/75 mb-8">
            <p className="text-lg leading-relaxed">
              CORR XP has been at the forefront of corrosion engineering and concrete 
              rehabilitation in India for over two decades. We combine cutting-edge 
              technology with deep expertise to protect critical infrastructure.
            </p>
            <p className="leading-relaxed">
              From oil refineries to transportation networks, our solutions extend 
              asset lifecycles, minimize downtime, and deliver measurable ROI. We don't 
              just fix problems — we engineer lasting solutions.
            </p>
          </div>

          {/* Key points */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            {['ISO Certified', 'Pan-India Presence', 'Expert Team', 'Proven Methods'].map((item) => (
              <div key={item} className="flex items-center gap-2 text-charcoal/80">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>
          
          <Button variant="default" size="lg" asChild>
            <Link to="/about">
              Learn Our Story
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </Button>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

// Services Preview - Tabbed/Interactive approach with real imagery
const ServicesPreviewSection = () => {
  const services = [
    {
      title: 'Corrosion Assessment',
      subtitle: 'Diagnostic Excellence',
      description: 'We deploy advanced non-destructive testing methods including half-cell potential mapping, concrete resistivity testing, and chloride profiling to assess the extent of corrosion damage.',
      image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=800&q=80',
      features: ['NDT Testing', 'Chloride Analysis', 'Cover Meter Survey'],
    },
    {
      title: 'Concrete Rehabilitation',
      subtitle: 'Structural Restoration',
      description: 'From micro-silica repairs to complete structural strengthening with CFRP, we restore deteriorated concrete to exceed original specifications.',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80',
      features: ['Patch Repairs', 'Carbon Fiber Wrap', 'Grouting Works'],
    },
    {
      title: 'Protective Coatings',
      subtitle: 'Long-term Defense',
      description: 'Specialized high-build epoxy, polyurethane, and cementitious coating systems designed to withstand aggressive industrial environments.',
      image: 'https://images.unsplash.com/photo-1590496793929-36417d3117de?auto=format&fit=crop&w=800&q=80',
      features: ['Epoxy Systems', 'Anti-Carbonation', 'Waterproofing'],
    },
  ];

  return (
    <section className="bg-slate section-padding relative overflow-hidden">
      <div className="container-custom relative z-10">
        <AnimatedSection className="mb-16">
          <span className="font-script text-primary text-lg mb-2 block">What We Do</span>
          <h2 className="text-warm-white mb-4">Engineering Solutions That Last</h2>
          <p className="text-warm-white/60 text-lg max-w-2xl">
            Three decades of specialized expertise in protecting India's most critical assets.
          </p>
        </AnimatedSection>

        {/* Services - Alternating layout */}
        <div className="space-y-20">
          {services.map((service, index) => (
            <AnimatedSection 
              key={service.title} 
              direction={index % 2 === 0 ? 'left' : 'right'}
              delay={0.1}
            >
              <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Image */}
                <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="relative aspect-[4/3] overflow-hidden rounded">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-slate-dark/40 to-transparent" />
                  </div>
                  {/* Number indicator */}
                  <div className="absolute -bottom-6 -right-4 lg:-right-8">
                    <span className="text-8xl lg:text-9xl font-bold text-primary/20">
                      0{index + 1}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <span className="text-primary text-sm font-medium uppercase tracking-wider mb-2 block">
                    {service.subtitle}
                  </span>
                  <h3 className="text-3xl font-bold text-warm-white mb-4">
                    {service.title}
                  </h3>
                  <p className="text-warm-white/70 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  
                  {/* Feature tags */}
                  <div className="flex flex-wrap gap-3 mb-6">
                    {service.features.map((feature) => (
                      <span 
                        key={feature}
                        className="px-4 py-2 bg-warm-white/5 border border-warm-white/10 text-warm-white/80 text-sm rounded"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <Link 
                    to="/services" 
                    className="inline-flex items-center text-primary font-medium hover:gap-3 gap-2 transition-all duration-300 group"
                  >
                    Learn More
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center mt-20">
          <Button variant="hero" size="lg" asChild>
            <Link to="/services">
              Explore All Services
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
};

// Clients Section - Logo strip with subtle animation
const ClientsSection = () => {
  const clients = [
    { name: 'ONGC', sector: 'Oil & Gas' },
    { name: 'L&T', sector: 'Infrastructure' },
    { name: 'IOCL', sector: 'Petroleum' },
    { name: 'NTPC', sector: 'Power' },
    { name: 'NHAI', sector: 'Highways' },
    { name: 'Reliance', sector: 'Industrial' },
    { name: 'Tata Steel', sector: 'Manufacturing' },
    { name: 'Adani Ports', sector: 'Ports' },
  ];

  return (
    <section className="bg-warm-white py-16 border-y border-border">
      <div className="container-custom">
        <AnimatedSection className="text-center mb-12">
          <span className="text-charcoal/50 text-sm font-medium uppercase tracking-wider">
            Trusted by Industry Leaders
          </span>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8">
          {clients.map((client, index) => (
            <AnimatedSection key={client.name} delay={index * 0.05}>
              <div className="flex flex-col items-center justify-center p-4 group">
                <div className="w-16 h-16 bg-slate/5 rounded-full flex items-center justify-center mb-3 group-hover:bg-primary/10 transition-colors">
                  <span className="text-charcoal font-bold text-lg">{client.name.charAt(0)}</span>
                </div>
                <span className="text-charcoal font-semibold text-sm text-center">{client.name}</span>
                <span className="text-charcoal/40 text-xs mt-0.5">{client.sector}</span>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

// Testimonials Section - Clean quote style
const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "CORR XP's team delivered exceptional results on our refinery rehabilitation project. Their technical expertise and professionalism set them apart from any contractor we've worked with.",
      author: 'Rajesh Kumar',
      position: 'Chief Engineer',
      company: 'ONGC',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80',
    },
    {
      quote: "The corrosion protection system they designed for our coastal infrastructure has exceeded all performance benchmarks. Five years on, we're seeing zero degradation.",
      author: 'Priya Sharma',
      position: 'Project Director',
      company: 'L&T Infrastructure',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
    },
    {
      quote: "What impressed us most was their systematic approach to problem-solving. They don't just treat symptoms — they identify root causes and engineer permanent solutions.",
      author: 'Vikram Mehta',
      position: 'VP Operations',
      company: 'Tata Steel',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    },
  ];

  return (
    <section className="bg-warm-white-dark section-padding relative overflow-hidden">
      {/* Decorative quote mark */}
      <div className="absolute top-20 left-10 opacity-[0.03]">
        <svg className="w-64 h-64" viewBox="0 0 100 100" fill="currentColor">
          <path d="M30 10C13.4 10 0 23.4 0 40s13.4 30 30 30c0 11-9 20-20 20v10c16.6 0 30-13.4 30-30V40c0-16.6-13.4-30-30-30zm60 0c-16.6 0-30 13.4-30 30s13.4 30 30 30c0 11-9 20-20 20v10c16.6 0 30-13.4 30-30V40c0-16.6-13.4-30-30-30z"/>
        </svg>
      </div>

      <div className="container-custom relative z-10">
        <AnimatedSection className="text-center mb-16">
          <span className="font-script text-accent text-lg mb-2 block">Client Testimonials</span>
          <h2 className="text-charcoal">What Our Clients Say</h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection key={testimonial.author} delay={index * 0.15}>
              <div className="bg-warm-white p-8 rounded border border-border h-full flex flex-col">
                {/* Quote */}
                <blockquote className="text-charcoal/75 leading-relaxed mb-8 flex-grow">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4 pt-6 border-t border-border">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-charcoal">{testimonial.author}</div>
                    <div className="text-sm text-charcoal/50">
                      {testimonial.position}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
};

// Projects Preview - Featured layout
const ProjectsPreviewSection = () => {
  const featuredProject = {
    id: 1,
    title: 'Mumbai Coastal Road Protection',
    category: 'Infrastructure',
    location: 'Maharashtra',
    image: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&w=1200&q=80',
    description: 'Comprehensive corrosion protection system for 10km coastal infrastructure.',
  };

  const projects = [
    {
      id: 2,
      title: 'Refinery Tank Rehabilitation',
      category: 'Oil & Gas',
      image: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 3,
      title: 'Multi-Level Parking Repair',
      category: 'Commercial',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80',
    },
  ];

  return (
    <section className="bg-slate section-padding">
      <div className="container-custom">
        <AnimatedSection className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <span className="font-script text-primary text-lg mb-2 block">Our Portfolio</span>
            <h2 className="text-warm-white">Featured Projects</h2>
          </div>
          <Button variant="heroOutline" asChild>
            <Link to="/projects">
              View All Projects
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </Button>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Featured Project */}
          <AnimatedSection direction="left" className="lg:row-span-2">
            <Link to={`/projects/${featuredProject.id}`} className="block group h-full">
              <div className="relative h-full min-h-[400px] lg:min-h-full overflow-hidden rounded img-zoom">
                <img
                  src={featuredProject.image}
                  alt={featuredProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-dark/90 via-slate-dark/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded mb-3">
                    {featuredProject.category}
                  </span>
                  <h3 className="text-2xl font-bold text-warm-white mb-2 group-hover:text-primary transition-colors">
                    {featuredProject.title}
                  </h3>
                  <p className="text-warm-white/70 text-sm mb-1">{featuredProject.location}</p>
                  <p className="text-warm-white/60 text-sm">{featuredProject.description}</p>
                </div>
              </div>
            </Link>
          </AnimatedSection>

          {/* Other Projects */}
          {projects.map((project, index) => (
            <AnimatedSection key={project.id} direction="right" delay={index * 0.15}>
              <Link to={`/projects/${project.id}`} className="block group">
                <div className="relative h-[200px] overflow-hidden rounded img-zoom">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-dark/80 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="text-primary text-xs font-medium uppercase tracking-wide">
                      {project.category}
                    </span>
                    <h3 className="text-lg font-semibold text-warm-white mt-1 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

// CTA Section - Minimal and bold
const CTASection = () => (
  <section className="bg-primary section-padding-sm relative overflow-hidden">
    {/* Decorative pattern */}
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-0 right-0 w-96 h-96 bg-warm-white rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent rounded-full blur-3xl" />
    </div>
    
    <div className="container-custom relative z-10">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="text-center lg:text-left">
          <h2 className="text-primary-foreground text-3xl md:text-4xl font-bold mb-2">
            Ready to Protect Your Assets?
          </h2>
          <p className="text-primary-foreground/80 text-lg">
            Get a free consultation with our engineering experts today.
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          <Button
            size="lg"
            className="bg-warm-white text-primary hover:bg-warm-white/90 font-semibold"
            asChild
          >
            <Link to="/contact">
              Request a Quote
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </Button>
          <Button
            variant="heroOutline"
            size="lg"
            className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
            asChild
          >
            <Link to="/services">Our Services</Link>
          </Button>
        </div>
      </div>
    </div>
  </section>
);

const Index = () => {
  return (
    <>
      <Helmet>
        <title>CORR XP | Corrosion Protection & Concrete Rehabilitation Experts</title>
        <meta
          name="description"
          content="CORR XP delivers innovative corrosion protection and concrete rehabilitation solutions that extend the life of critical infrastructure. 25+ years of engineering excellence."
        />
        <meta name="keywords" content="corrosion protection, concrete repair, infrastructure, structural engineering, protective coatings, India" />
      </Helmet>

      <HeroSection />
      <StatsSection />
      <AboutSnapshotSection />
      <ServicesPreviewSection />
      <ClientsSection />
      <ProjectsPreviewSection />
      <TestimonialsSection />
      <CTASection />
      <FloatingContact />
    </>
  );
};

export default Index;
