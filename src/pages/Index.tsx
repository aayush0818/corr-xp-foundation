import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import AnimatedSection from '@/components/ui/AnimatedSection';
import CountUpNumber from '@/components/ui/CountUpNumber';
import ScrollIndicator from '@/components/ui/ScrollIndicator';
import FloatingContact from '@/components/ui/FloatingContact';
import { ArrowRight, Shield, Wrench, Microscope, Building2, FileCheck, Users, Award, CheckCircle2 } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import mumbaiCoastalRoad from '@/assets/mumbai-coastal-road.jpg';

// Hero Section - Full bleed with real imagery
const HeroSection = () => <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* Background Image */}
    <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
    backgroundImage: 'url(https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1920&q=80)'
  }} />
    {/* Overlay */}
    <div className="absolute inset-0 hero-overlay" />
    
    {/* Content */}
    <div className="container-custom relative z-10 pt-20">
      <div className="max-w-4xl">
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
            Excellence in Engineering
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
          Protecting Infrastructure,{' '}
          <span className="text-primary">Building Legacy</span>
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
          India's leading specialists in corrosion engineering and concrete rehabilitation. 
          25+ years of protecting critical infrastructure across industries.
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
          <Button variant="hero" size="lg" asChild>
            <Link to="/contact">
              Get Free Consultation
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </Button>
          <Button variant="heroOutline" size="lg" asChild>
            <Link to="/projects">Explore Our Work</Link>
          </Button>
        </motion.div>
      </div>
    </div>

    <ScrollIndicator />
  </section>;

// Stats Section - Horizontal with dividers
const StatsSection = () => {
  const stats = [{
    value: 25,
    suffix: '+',
    label: 'Years of Excellence',
    icon: Award
  }, {
    value: 500,
    suffix: '+',
    label: 'Projects Delivered',
    icon: Building2
  }, {
    value: 150,
    suffix: '+',
    label: 'Expert Engineers',
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
              <img alt="Engineering team inspecting infrastructure" className="w-full h-full object-cover" src="https://structural-india.com/wp-content/uploads/2023/01/power_plant.jpg" />
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
            {['ISO Certified', 'Pan-India Presence', 'Expert Team', 'Proven Methods'].map(item => <div key={item} className="flex items-center gap-2 text-charcoal/80">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm font-medium">{item}</span>
              </div>)}
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
  </section>;

// Services Preview - Scroll-triggered editorial layout
const ServicesPreviewSection = () => {
  const [activeService, setActiveService] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const services = [{
    title: 'Durability Repairs',
    shortTitle: 'Durability',
    description: 'Comprehensive durability repair solutions including patch repairs, crack injection, and surface protection for extended structural life.',
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=800&q=80',
    stats: {
      value: '500+',
      label: 'Structures Repaired'
    }
  }, {
    title: 'Structural Repairs',
    shortTitle: 'Structural',
    description: 'Complete structural restoration from micro-silica repairs to CFRP strengthening, exceeding original specifications.',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80',
    stats: {
      value: '200K',
      label: 'Sq.m Repaired'
    }
  }, {
    title: 'Structural Strengthening',
    shortTitle: 'Strengthening',
    description: 'Advanced strengthening solutions using carbon fiber, steel plates, and post-tensioning for enhanced load capacity.',
    image: 'https://images.unsplash.com/photo-1590496793929-36417d3117de?auto=format&fit=crop&w=800&q=80',
    stats: {
      value: '1M+',
      label: 'Sq.m Strengthened'
    }
  }, {
    title: 'Seismic Retrofitting',
    shortTitle: 'Seismic',
    description: 'Specialized seismic upgrade solutions to enhance structural resilience against earthquake forces.',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    stats: {
      value: '100+',
      label: 'Buildings Retrofitted'
    }
  }, {
    title: 'Corrosion Mitigation',
    shortTitle: 'Corrosion',
    description: 'State-of-the-art cathodic protection and corrosion control systems for long-term infrastructure preservation.',
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80',
    stats: {
      value: '50+',
      label: 'Systems Installed'
    }
  }];

  // Scroll-triggered service switching
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const sectionHeight = section.offsetHeight;
      const viewportHeight = window.innerHeight;

      // Calculate how far we've scrolled through the section
      // Start switching only after section is 30% into view
      const scrollStart = viewportHeight * 0.7;
      const scrolledIntoSection = scrollStart - rect.top;
      const totalScrollableDistance = sectionHeight - viewportHeight * 0.3;
      const scrollProgress = Math.max(0, Math.min(1, scrolledIntoSection / totalScrollableDistance));

      // Map scroll progress to service index
      const serviceIndex = Math.min(services.length - 1, Math.floor(scrollProgress * services.length));
      if (serviceIndex >= 0 && serviceIndex !== activeService) {
        setActiveService(serviceIndex);
      }
    };
    window.addEventListener('scroll', handleScroll, {
      passive: true
    });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeService, services.length]);
  return <section ref={sectionRef} className="bg-background relative overflow-hidden" style={{
    minHeight: '200vh'
  }}>
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-slate/30 -skew-x-12 origin-top-right" />
      
      <div className="container-custom relative z-10 py-20 lg:py-32">
        {/* Sticky content wrapper */}
        <div className="lg:sticky lg:top-24">
          {/* Header with vertical text */}
          <div className="flex items-start gap-8 mb-16">
            <div className="hidden lg:flex flex-col items-center">
              <div className="w-px h-16 bg-primary" />
              <span className="writing-mode-vertical text-primary text-sm tracking-widest uppercase mt-4 font-medium" style={{
              writingMode: 'vertical-rl',
              transform: 'rotate(180deg)'
            }}>
                Our Expertise
              </span>
            </div>
            
            <AnimatedSection>
              <h2 className="text-foreground text-4xl lg:text-5xl font-bold mb-4">
                What We <span className="text-primary">Do</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-xl">
                Three decades of specialized expertise protecting India's critical infrastructure.
              </p>
            </AnimatedSection>
          </div>

          {/* Interactive Service Grid */}
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-0">
            {/* Left: Service tabs/list */}
            <div className="lg:col-span-4 lg:pr-12">
              <div className="space-y-0 border-l-2 border-border">
                {services.map((service, index) => <button key={service.title} onClick={() => setActiveService(index)} className={`w-full text-left pl-6 py-6 relative transition-all duration-300 group ${activeService === index ? 'border-l-2 border-primary -ml-[2px]' : 'hover:bg-muted/30'}`}>
                    {/* Number */}
                    <span className={`text-sm font-mono mb-1 block transition-colors ${activeService === index ? 'text-primary' : 'text-muted-foreground'}`}>
                      0{index + 1}
                    </span>
                    
                    {/* Title */}
                    <h3 className={`text-xl font-semibold transition-colors ${activeService === index ? 'text-foreground' : 'text-muted-foreground group-hover:text-foreground'}`}>
                      {service.title}
                    </h3>
                    
                    {/* Stat preview */}
                    <div className={`mt-2 transition-all duration-300 ${activeService === index ? 'opacity-100 max-h-20' : 'opacity-0 max-h-0 overflow-hidden'}`}>
                      <span className="text-2xl font-bold text-primary">{service.stats.value}</span>
                      <span className="text-muted-foreground text-sm ml-2">{service.stats.label}</span>
                    </div>
                  </button>)}
              </div>
              
              <div className="mt-8 pl-6">
                <Link to="/services" className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all duration-300">
                  View All Services
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>

            {/* Right: Active service display */}
            <div className="lg:col-span-8 relative">
              <AnimatePresence mode="wait">
                <motion.div key={activeService} initial={{
                opacity: 0,
                x: 20
              }} animate={{
                opacity: 1,
                x: 0
              }} exit={{
                opacity: 0,
                x: -20
              }} transition={{
                duration: 0.4
              }} className="relative">
                  {/* Large image */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img src={services[activeService].image} alt={services[activeService].title} className="w-full h-full object-cover" />
                    {/* Overlay with gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-dark via-slate-dark/20 to-transparent" />
                    
                    {/* Content overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12">
                      <motion.div initial={{
                      opacity: 0,
                      y: 20
                    }} animate={{
                      opacity: 1,
                      y: 0
                    }} transition={{
                      delay: 0.2
                    }}>
                        <p className="text-warm-white/90 text-lg lg:text-xl max-w-lg leading-relaxed">
                          {services[activeService].description}
                        </p>
                        
                        <Link to="/services" className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors">
                          Learn More
                          <ArrowRight size={16} />
                        </Link>
                      </motion.div>
                    </div>
                  </div>

                  {/* Floating stat card */}
                  <motion.div initial={{
                  opacity: 0,
                  scale: 0.9
                }} animate={{
                  opacity: 1,
                  scale: 1
                }} transition={{
                  delay: 0.3
                }} className="absolute -top-4 -right-4 lg:top-8 lg:-right-8 bg-primary text-primary-foreground p-6 lg:p-8">
                    <div className="text-3xl lg:text-4xl font-bold">{services[activeService].stats.value}</div>
                    <div className="text-sm opacity-80">{services[activeService].stats.label}</div>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>;
};

// Clients Section - Professional logo strip with marquee effect
const ClientsSection = () => {
  const clients = [{
    name: 'ONGC',
    abbrev: 'ONGC',
    color: '#E31937'
  }, {
    name: 'Larsen & Toubro',
    abbrev: 'L&T',
    color: '#003B71'
  }, {
    name: 'Indian Oil',
    abbrev: 'IOCL',
    color: '#ED1C24'
  }, {
    name: 'NTPC Limited',
    abbrev: 'NTPC',
    color: '#00529B'
  }, {
    name: 'NHAI',
    abbrev: 'NHAI',
    color: '#006400'
  }, {
    name: 'Reliance Industries',
    abbrev: 'RIL',
    color: '#005BAB'
  }, {
    name: 'Tata Steel',
    abbrev: 'TATA',
    color: '#486AAE'
  }, {
    name: 'Adani Group',
    abbrev: 'ADANI',
    color: '#002F6C'
  }];
  return <section className="bg-warm-white py-20 border-y border-border overflow-hidden">
      <div className="container-custom">
        <AnimatedSection className="text-center mb-14">
          <span className="text-charcoal/40 text-xs font-semibold uppercase tracking-[0.2em]">
            Trusted Partners
          </span>
          <h3 className="text-charcoal mt-2 text-2xl font-bold">Trusted by 100+ Industry Leaders</h3>
        </AnimatedSection>

        {/* Logo Grid - Professional styled logos */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {clients.map((client, index) => <AnimatedSection key={client.name} delay={index * 0.05}>
              <div className="group relative bg-gradient-to-br from-slate/5 to-transparent border border-border/50 rounded-lg p-6 h-24 flex items-center justify-center hover:border-primary/30 hover:shadow-custom-md transition-all duration-300">
                {/* Styled Logo Text */}
                <div className="flex flex-col items-center">
                  <span className="text-2xl font-black tracking-tight transition-transform group-hover:scale-110" style={{
                color: client.color
              }}>
                    {client.abbrev}
                  </span>
                  <span className="text-[10px] text-charcoal/40 font-medium uppercase tracking-wider mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    {client.name}
                  </span>
                </div>
                
                {/* Hover accent */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 group-hover:w-12 transition-all duration-300" style={{
              backgroundColor: client.color
            }} />
              </div>
            </AnimatedSection>)}
        </div>

        {/* Trust indicators */}
        <AnimatedSection delay={0.4} className="mt-12 flex flex-wrap justify-center gap-8 text-center">
          <div className="flex items-center gap-2 text-charcoal/50">
            <Shield size={16} className="text-primary" />
            <span className="text-sm">ISO 9001:2015 Certified</span>
          </div>
          <div className="flex items-center gap-2 text-charcoal/50">
            <Award size={16} className="text-primary" />
            <span className="text-sm">NACE Certified Specialists</span>
          </div>
          <div className="flex items-center gap-2 text-charcoal/50">
            <CheckCircle2 size={16} className="text-primary" />
            <span className="text-sm">Government Approved Contractor</span>
          </div>
        </AnimatedSection>
      </div>
    </section>;
};

// Testimonials Section - Carousel with auto-play
const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = React.useState(true);
  const testimonials = [{
    quote: "CORR XP's team delivered exceptional results on our refinery rehabilitation project. Their technical expertise and professionalism set them apart from any contractor we've worked with.",
    author: 'Rajesh Kumar',
    position: 'Chief Engineer',
    company: 'ONGC',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80',
    rating: 5
  }, {
    quote: "The corrosion protection system they designed for our coastal infrastructure has exceeded all performance benchmarks. Five years on, we're seeing zero degradation.",
    author: 'Priya Sharma',
    position: 'Project Director',
    company: 'L&T Infrastructure',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
    rating: 5
  }, {
    quote: "What impressed us most was their systematic approach to problem-solving. They don't just treat symptoms — they identify root causes and engineer permanent solutions.",
    author: 'Vikram Mehta',
    position: 'VP Operations',
    company: 'Tata Steel',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    rating: 5
  }, {
    quote: "Their preventive maintenance program has saved us millions in potential repairs. The ROI on their services is undeniable. Highly recommend for any industrial facility.",
    author: 'Anita Desai',
    position: 'Plant Manager',
    company: 'IOCL Refinery',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80',
    rating: 5
  }, {
    quote: "From initial assessment to project completion, CORR XP demonstrated exceptional knowledge and commitment. Our bridge rehabilitation was completed ahead of schedule.",
    author: 'Suresh Patel',
    position: 'Executive Engineer',
    company: 'NHAI',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80',
    rating: 5
  }];

  // Auto-play functionality
  React.useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);
  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex(prev => (prev - 1 + testimonials.length) % testimonials.length);
  };
  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex(prev => (prev + 1) % testimonials.length);
  };
  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };
  return <section className="bg-slate section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
      </div>

      {/* Large quote decoration */}
      <div className="absolute top-20 right-20 opacity-[0.03]">
        <svg className="w-80 h-80" viewBox="0 0 100 100" fill="currentColor">
          <path d="M30 10C13.4 10 0 23.4 0 40s13.4 30 30 30c0 11-9 20-20 20v10c16.6 0 30-13.4 30-30V40c0-16.6-13.4-30-30-30zm60 0c-16.6 0-30 13.4-30 30s13.4 30 30 30c0 11-9 20-20 20v10c16.6 0 30-13.4 30-30V40c0-16.6-13.4-30-30-30z" />
        </svg>
      </div>

      <div className="container-custom relative z-10">
        <AnimatedSection className="text-center mb-16">
          <span className="font-script text-primary text-xl mb-2 block">Testimonials</span>
          <h2 className="text-warm-white">Voices of Trust</h2>
          <p className="text-warm-white/60 mt-4 max-w-xl mx-auto">
            Hear from industry leaders who've experienced the CORR XP difference
          </p>
        </AnimatedSection>

        {/* Carousel Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Arrows */}
          <button onClick={goToPrevious} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-16 z-20 w-12 h-12 bg-warm-white/10 hover:bg-primary text-warm-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-warm-white/10" aria-label="Previous testimonial">
            <ArrowRight size={20} className="rotate-180" />
          </button>
          
          <button onClick={goToNext} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-16 z-20 w-12 h-12 bg-warm-white/10 hover:bg-primary text-warm-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-warm-white/10" aria-label="Next testimonial">
            <ArrowRight size={20} />
          </button>

          {/* Testimonial Card */}
          <div className="overflow-hidden">
            <motion.div key={currentIndex} initial={{
            opacity: 0,
            x: 50
          }} animate={{
            opacity: 1,
            x: 0
          }} exit={{
            opacity: 0,
            x: -50
          }} transition={{
            duration: 0.5,
            ease: 'easeOut'
          }} className="bg-warm-white rounded-2xl p-8 md:p-12 shadow-custom-xl">
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => <svg key={i} className="w-5 h-5 text-primary fill-primary" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>)}
              </div>

              {/* Quote */}
              <blockquote className="text-xl md:text-2xl text-charcoal leading-relaxed mb-8 font-medium">
                "{testimonials[currentIndex].quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img src={testimonials[currentIndex].image} alt={testimonials[currentIndex].author} className="w-16 h-16 rounded-full object-cover ring-4 ring-primary/20" />
                <div>
                  <div className="font-bold text-charcoal text-lg">
                    {testimonials[currentIndex].author}
                  </div>
                  <div className="text-charcoal/60">
                    {testimonials[currentIndex].position}
                  </div>
                  <div className="text-primary font-semibold text-sm">
                    {testimonials[currentIndex].company}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => <button key={index} onClick={() => goToSlide(index)} className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex ? 'w-8 bg-primary' : 'w-2 bg-warm-white/30 hover:bg-warm-white/50'}`} aria-label={`Go to testimonial ${index + 1}`} />)}
          </div>

          {/* Auto-play indicator */}
          <div className="flex justify-center mt-4">
            <button onClick={() => setIsAutoPlaying(!isAutoPlaying)} className="text-warm-white/40 hover:text-warm-white/70 text-xs flex items-center gap-2 transition-colors">
              <span className={`w-2 h-2 rounded-full ${isAutoPlaying ? 'bg-primary animate-pulse' : 'bg-warm-white/30'}`} />
              {isAutoPlaying ? 'Auto-playing' : 'Paused'}
            </button>
          </div>
        </div>
      </div>
    </section>;
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
                <img src={featuredProject.image} alt={featuredProject.title} className="w-full h-full object-cover" />
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
              <Link to={`/projects/${project.id}`} className="block group">
                <div className="relative h-[200px] overflow-hidden rounded img-zoom">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
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
          <Button size="lg" className="bg-warm-white text-primary hover:bg-warm-white/90 font-semibold" asChild>
            <Link to="/contact">
              Request a Quote
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </Button>
          <Button variant="heroOutline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
            <Link to="/services">Our Services</Link>
          </Button>
        </div>
      </div>
    </div>
  </section>;
const Index = () => {
  return <>
      <Helmet>
        <title>CORR XP | Corrosion Protection & Concrete Rehabilitation Experts</title>
        <meta name="description" content="CORR XP delivers innovative corrosion protection and concrete rehabilitation solutions that extend the life of critical infrastructure. 25+ years of engineering excellence." />
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
    </>;
};
export default Index;