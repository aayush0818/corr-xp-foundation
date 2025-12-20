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

// Services Preview - Card grid with hover effects
const ServicesPreviewSection = () => {
  const services = [
    {
      icon: Microscope,
      title: 'Corrosion Assessment',
      description: 'Advanced diagnostic techniques for comprehensive damage evaluation and risk analysis.',
    },
    {
      icon: Wrench,
      title: 'Concrete Rehabilitation',
      description: 'Expert restoration of deteriorated structures to ensure long-term structural integrity.',
    },
    {
      icon: Shield,
      title: 'Protective Systems',
      description: 'Specialized coating systems and cathodic protection to prevent future corrosion.',
    },
    {
      icon: Building2,
      title: 'Structural Engineering',
      description: 'In-depth structural analysis to identify vulnerabilities and design solutions.',
    },
    {
      icon: FileCheck,
      title: 'Quality Assurance',
      description: 'Rigorous testing and inspection to ensure compliance with global standards.',
    },
    {
      icon: Users,
      title: 'Technical Consulting',
      description: 'Strategic guidance for maintenance planning and infrastructure management.',
    },
  ];

  return (
    <section className="bg-warm-white-dark section-padding relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 pattern-lines" />
      
      <div className="container-custom relative z-10">
        <AnimatedSection className="max-w-2xl mb-14">
          <span className="font-script text-accent text-lg mb-2 block">Our Expertise</span>
          <h2 className="mb-4 text-charcoal">Comprehensive Solutions</h2>
          <p className="text-charcoal/70 text-lg">
            End-to-end services for corrosion control and concrete rehabilitation 
            across industrial, commercial, and infrastructure sectors.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <AnimatedSection key={service.title} delay={index * 0.1}>
              <div className="group bg-warm-white p-8 h-full border border-border hover:border-primary/30 hover:shadow-custom-lg transition-all duration-400 rounded">
                <div className="w-12 h-12 bg-slate/5 rounded flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-charcoal group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-charcoal/65 leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center mt-12">
          <Button variant="default" size="lg" asChild>
            <Link to="/services">
              View All Services
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
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
      <ProjectsPreviewSection />
      <CTASection />
      <FloatingContact />
    </>
  );
};

export default Index;
