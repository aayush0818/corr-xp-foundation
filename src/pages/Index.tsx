import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import AnimatedSection from '@/components/ui/AnimatedSection';
import CountUpNumber from '@/components/ui/CountUpNumber';
import ScrollIndicator from '@/components/ui/ScrollIndicator';
import FloatingContact from '@/components/ui/FloatingContact';
import { ArrowRight, Shield, Wrench, Microscope, Building2, FileCheck, Users, Award, CheckCircle2 } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import mumbaiCoastalRoad from '@/assets/mumbai-coastal-road.jpg';
import workFiberWrapping from '@/assets/work-fiber-wrapping-1.jpg';
import workColumnWrapping from '@/assets/work-column-wrapping-1.jpg';
import workBeamWrapping from '@/assets/work-beam-wrapping-2.jpg';
import workFloorCoating from '@/assets/work-floor-coating-1.jpg';
import teamPhoto from '@/assets/team-photo-1.jpg';
import workSurfacePrep from '@/assets/work-surface-prep-1.jpg';
import logo from '@/assets/logo.png';

// Hero Section - Full bleed with real imagery
const HeroSection = () => <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* Background Image */}
    <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
    backgroundImage: `url(${workColumnWrapping})`
  }} />
    {/* Overlay */}
    <div className="absolute inset-0 hero-overlay" />
    
    {/* Content */}
    <div className="container-custom relative z-10 pt-16 lg:pt-20">
      <div className="max-w-4xl">
        {/* Mobile Logo - Large and Centered */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.6 }}
          className="lg:hidden flex justify-center mb-8"
        >
          <img 
            src={logo} 
            alt="CORR XP Logo" 
            className="h-28 w-auto"
          />
        </motion.div>

        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.2
      }}>
          <span className="font-script text-primary text-xl md:text-2xl mb-4 block">
            Corrosion • Concrete • Strategist
          </span>
        </motion.div>
        
        <motion.h1 initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.4
      }} className="text-warm-white text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1] text-shadow-lg">
          Restoring Strength.{' '}
          <span className="text-primary">Reinforcing Trust.</span>
        </motion.h1>
        
        <motion.p initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.6
      }} className="text-lg md:text-xl text-warm-white/85 mb-10 max-w-2xl leading-relaxed">
          Specialized structural repair, rehabilitation, protection, and retrofitting contractor. 
          Advanced solutions for concrete and steel structures using proven repair systems.
        </motion.p>
        
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.8
      }} className="flex flex-wrap gap-4">
          <Link to="/contact">
            <Button variant="hero" size="lg">
              <span>Get Free Consultation</span>
              <ArrowRight size={18} className="ml-2" />
            </Button>
          </Link>
          <Link to="/projects">
            <Button variant="heroOutline" size="lg">
              <span>Explore Our Work</span>
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>

    <ScrollIndicator />
  </section>;

// Stats Section - Horizontal with dividers
const StatsSection = () => {
  const stats = [{
    value: 9,
    suffix: '+',
    label: 'Years of Experience',
    icon: Award
  }, {
    value: 25,
    suffix: '+',
    label: 'Projects Delivered',
    icon: Building2
  }, {
    value: 6,
    suffix: '',
    label: 'Structural Engineers On-boarded',
    icon: Users
  }, {
    value: 98,
    suffix: '%',
    label: 'Client Retention',
    icon: CheckCircle2
  }];
  return <section className="relative bg-slate py-16 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 pattern-dots opacity-50" />
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
          {stats.map((stat, index) => <AnimatedSection key={stat.label} delay={index * 0.1} className="stat-divider text-center lg:px-8">
              <stat.icon className="w-8 h-8 text-primary mx-auto mb-3 opacity-80" />
              <div className="text-4xl md:text-5xl font-bold text-warm-white mb-2 tracking-tight">
                <CountUpNumber end={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-warm-white/60 font-medium text-sm uppercase tracking-wide">
                {stat.label}
              </p>
            </AnimatedSection>)}
        </div>
      </div>
    </section>;
};

// About Snapshot - Asymmetric layout with overlapping elements
const AboutSnapshotSection = () => <section className="bg-warm-white section-padding overflow-hidden">
    <div className="container-custom">
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Image Column - with offset */}
        <AnimatedSection direction="left" className="lg:col-span-6 order-2 lg:order-1">
          <div className="relative">
            {/* Main Image */}
            <div className="relative aspect-[4/5] rounded overflow-hidden shadow-custom-xl">
              <img alt="Structural repair and retrofitting work" className="w-full h-full object-cover" src={workFiberWrapping} />
            </div>
            
            {/* Floating accent card */}
            <div className="absolute -bottom-8 right-0 lg:-right-8 bg-primary p-6 rounded shadow-custom-xl max-w-[200px]">
              <div className="text-4xl font-bold text-primary-foreground mb-1">MSME</div>
              <div className="text-primary-foreground/80 text-sm">Registered Contractor</div>
            </div>
            
            {/* Decorative line */}
            <div className="absolute left-0 lg:-left-6 top-1/4 w-1 h-32 bg-primary hidden lg:block" />
          </div>
        </AnimatedSection>

        {/* Content Column */}
        <AnimatedSection direction="right" className="lg:col-span-6 order-1 lg:order-2">
          <span className="font-script text-accent text-lg mb-2 block">Who We Are</span>
          <h2 className="mb-6 text-charcoal">
            Specialized Structural{' '}
            <span className="text-primary">Repair Contractors</span>
          </h2>
          
          <div className="space-y-4 text-charcoal/75 mb-8">
            <p className="text-lg leading-relaxed">
              CORR XP India is a specialized structural repair, rehabilitation, protection, 
              and retrofitting contractor, providing advanced solutions for concrete and 
              steel structures.
            </p>
            <p className="leading-relaxed">
              We focus on improving strength, durability, and performance of existing assets 
              using proven repair systems and modern strengthening technologies including 
              Polymer Modified Mortar repairs, Epoxy Grouting, Micro concrete Jacketing, 
              New Reinforcement Encasing, Retrofitting with Fiber wrapping etc. We also 
              provide Waterproofing Services for Building Terraces/Decks etc.
            </p>
          </div>

          {/* Key points */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            {['MSME Registered', 'GST Registered', 'In-house Design', 'Pan-India Service'].map(item => <div key={item} className="flex items-center gap-2 text-charcoal/80">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm font-medium">{item}</span>
              </div>)}
          </div>
          
          <Link to="/about">
            <Button variant="default" size="lg">
              <span>Learn Our Story</span>
              <ArrowRight size={18} className="ml-2" />
            </Button>
          </Link>
        </AnimatedSection>
      </div>
    </div>
  </section>;

// Services Preview - Clean grid layout with numbered list
const ServicesPreviewSection = () => {
  const services = [
    {
      title: 'Structural Repair & Rehabilitation',
      description: 'Repair and rehabilitation of distressed beams, columns, slabs, and foundations to restore structural safety.',
      features: ['Beam & column repair', 'Slab rehabilitation', 'Foundation strengthening'],
    },
    {
      title: 'Concrete Repair & Protection',
      description: 'Patch repair, micro-concreting, crack injection, grouting, and protective coating systems.',
      features: ['Crack injection', 'Micro-concreting', 'Protective coatings'],
    },
    {
      title: 'Fiber Wrapping (FRP)',
      description: 'Strengthening of RCC structures using Fiber Reinforced Polymer systems for improved load capacity.',
      features: ['Carbon fiber (CFRP)', 'Glass fiber (GFRP)', 'Aramid fiber (AFRP)'],
    },
    {
      title: 'Structural Retrofitting',
      description: 'Advanced retrofitting solutions using high-performance fiber wrapping and laminate systems.',
      features: ['Seismic upgrades', 'Load enhancement', 'Shear wall reinforcement'],
    },
    {
      title: 'Corrosion Control',
      description: 'Treatment of corroded reinforcement and anti-corrosion systems to extend service life.',
      features: ['Corrosion assessment', 'ASTM testing', 'NACE certified'],
    },
    {
      title: 'Waterproofing Terraces',
      description: 'Comprehensive waterproofing solutions for building terraces, decks, and roof surfaces.',
      features: ['Terrace waterproofing', 'Deck protection', 'Long-lasting sealing'],
    },
  ];

  return (
    <section className="bg-slate py-24 lg:py-32">
      <div className="container-custom">
        {/* Header Row */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 mb-16">
          <AnimatedSection>
            <h2 className="text-warm-white text-4xl lg:text-5xl font-bold leading-tight">
              Engineering Solutions<br />
              <span className="text-primary">That Last</span>
            </h2>
          </AnimatedSection>
          
          <AnimatedSection delay={0.1} className="flex flex-col justify-end">
            <p className="text-warm-white/70 text-lg leading-relaxed mb-6">
              From structural repairs to advanced fiber wrapping, we deliver comprehensive 
              solutions backed by NACE certification and ASTM testing standards.
            </p>
            <Link to="/services">
              <Button variant="hero" size="lg">
                <span>View All Services</span>
                <ArrowRight size={18} className="ml-2" />
              </Button>
            </Link>
          </AnimatedSection>
        </div>

        {/* Services Grid - 2 columns */}
        <div className="grid md:grid-cols-2 gap-px bg-warm-white/10 rounded-xl overflow-hidden">
          {services.map((service, index) => (
            <AnimatedSection 
              key={service.title} 
              delay={index * 0.05}
            >
              <div className="bg-slate p-8 lg:p-10 h-full group hover:bg-slate-light/50 transition-colors duration-300">
                {/* Number */}
                <div className="flex items-start justify-between mb-6">
                  <span className="text-5xl lg:text-6xl font-black text-primary/20 group-hover:text-primary/40 transition-colors">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <ArrowRight 
                    size={24} 
                    className="text-warm-white/20 group-hover:text-primary group-hover:translate-x-1 transition-all mt-2" 
                  />
                </div>
                
                {/* Content */}
                <h3 className="text-warm-white text-xl lg:text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-warm-white/60 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                
                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature) => (
                    <span 
                      key={feature}
                      className="px-3 py-1 text-xs font-medium bg-warm-white/5 text-warm-white/70 rounded-full border border-warm-white/10"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Bottom Stats Row */}
        <AnimatedSection delay={0.3} className="mt-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: '25+', label: 'Projects Completed' },
              { value: 'NACE', label: 'Certified Testing' },
              { value: 'ASTM', label: 'Standards Compliant' },
              { value: 'MSME', label: 'Registered' },
            ].map((stat) => (
              <div key={stat.label} className="text-center lg:text-left">
                <div className="text-3xl lg:text-4xl font-black text-primary">{stat.value}</div>
                <div className="text-warm-white/50 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

// Vision Section - Replacing Clients/Testimonials
const VisionSection = () => {
  const visionPoints = [
    {
      title: 'Strong & Professional',
      description: 'To be India\'s most trusted partner in structural repairs and retrofitting — extending the life, safety and sustainability of every structure we touch.',
    },
    {
      title: 'Growth & Innovation Focused',
      description: 'To lead the transformation of India\'s built infrastructure through innovative repair technologies, sustainable strengthening solutions and uncompromising structural integrity.',
    },
    {
      title: 'Customer-Value Driven',
      description: 'To create long-lasting, safe and resilient structures by delivering reliable, engineered repair and rehabilitation solutions that customers can trust for decades.',
    },
    {
      title: 'Mission-With-Purpose',
      description: 'To safeguard structures, protect investments and enhance the longevity of India\'s infrastructure through excellence in structural repairs and retrofitting.',
    },
  ];

  return (
    <section className="relative bg-warm-white overflow-hidden py-20 lg:py-28">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(90deg, hsl(var(--charcoal)) 0px, hsl(var(--charcoal)) 1px, transparent 1px, transparent 100px)',
        }} />
      </div>

      <div className="container-custom relative z-10">
        <AnimatedSection className="text-center mb-16">
          <span className="font-script text-accent text-xl mb-2 block">Our Vision</span>
          <h2 className="text-charcoal text-3xl lg:text-5xl font-bold mb-4">
            Building India's <span className="text-primary">Structural Future</span>
          </h2>
          <p className="text-charcoal/60 max-w-2xl mx-auto">
            Committed to excellence, innovation, and sustainability in every project we undertake
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {visionPoints.map((point, index) => (
            <AnimatedSection key={point.title} delay={index * 0.1}>
              <div className="bg-white p-8 rounded-xl shadow-lg border border-border/30 h-full hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary text-xl font-bold">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-charcoal mb-3">{point.title}</h3>
                    <p className="text-charcoal/70 leading-relaxed">{point.description}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Trust Badges */}
        <AnimatedSection delay={0.4} className="mt-16">
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { icon: Shield, label: 'MSME Registered' },
              { icon: Award, label: 'NACE Certified' },
              { icon: CheckCircle2, label: 'GST Registered' },
              { icon: FileCheck, label: 'ASTM Compliant' },
            ].map((item) => (
              <div 
                key={item.label}
                className="flex items-center gap-2 px-4 py-2 bg-slate/5 rounded-full border border-border/50"
              >
                <item.icon size={16} className="text-primary" />
                <span className="text-charcoal/70 text-sm font-medium">{item.label}</span>
              </div>
            ))}
          </div>
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
    image: mumbaiCoastalRoad,
    description: 'Comprehensive corrosion protection system for 10km coastal infrastructure.'
  };
  const projects = [{
    id: 2,
    title: 'Refinery Tank Rehabilitation',
    category: 'Oil & Gas',
    image: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=600&q=80'
  }, {
    id: 3,
    title: 'Multi-Level Parking Repair',
    category: 'Commercial',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80'
  }];
  return <section className="bg-slate section-padding">
      <div className="container-custom">
        <AnimatedSection className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <span className="font-script text-primary text-lg mb-2 block">Our Portfolio</span>
            <h2 className="text-warm-white">Featured Projects</h2>
          </div>
          <Link to="/projects">
            <Button variant="heroOutline">
              <span>View All Projects</span>
              <ArrowRight size={16} className="ml-2" />
            </Button>
          </Link>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Featured Project */}
          <AnimatedSection direction="left" className="lg:row-span-2">
            <Link to="/projects" className="block h-full group">
              <div className="relative h-full min-h-[400px] lg:min-h-full overflow-hidden rounded img-zoom">
                <img src={featuredProject.image} alt={featuredProject.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
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
          {projects.map((project, index) => <AnimatedSection key={project.id} direction="right" delay={index * 0.15}>
              <Link to="/projects" className="block group">
                <div className="relative h-[200px] overflow-hidden rounded img-zoom">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
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
            </AnimatedSection>)}
        </div>
      </div>
    </section>;
};

// CTA Section - Minimal and bold
const CTASection = () => <section className="bg-primary section-padding-sm relative overflow-hidden">
    {/* Decorative pattern */}
    <div className="absolute inset-0 opacity-10 overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-warm-white rounded-full blur-3xl hidden lg:block" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent rounded-full blur-3xl hidden lg:block" />
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
          <Link to="/contact">
            <Button size="lg" className="bg-warm-white text-primary font-semibold hover:bg-warm-white/90">
              <span>Request a Quote</span>
              <ArrowRight size={18} className="ml-2" />
            </Button>
          </Link>
          <Link to="/services">
            <Button variant="heroOutline" size="lg" className="border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground/10">
              <span>Our Services</span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  </section>;
const Index = () => {
  return <>
      <Helmet>
        <title>CORR XP | Corrosion Protection & Concrete Rehabilitation Experts</title>
        <meta name="description" content="CORR XP delivers innovative corrosion protection and concrete rehabilitation solutions that extend the life of critical infrastructure. 9+ years of engineering excellence." />
        <meta name="keywords" content="corrosion protection, concrete repair, infrastructure, structural engineering, protective coatings, India" />
      </Helmet>

      <HeroSection />
      <StatsSection />
      <AboutSnapshotSection />
      <ServicesPreviewSection />
      <VisionSection />
      <ProjectsPreviewSection />
      <CTASection />
      <FloatingContact />
    </>;
};
export default Index;