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
import workFiberWrapping from '@/assets/work-fiber-wrapping-1.jpg';
import workColumnWrapping from '@/assets/work-column-wrapping-1.jpg';
import workBeamWrapping from '@/assets/work-beam-wrapping-2.jpg';
import workFloorCoating from '@/assets/work-floor-coating-1.jpg';
import teamPhoto from '@/assets/team-photo-1.jpg';
import workSurfacePrep from '@/assets/work-surface-prep-1.jpg';
import ongcLogo from '@/assets/clients/ongc.png';
import ltLogo from '@/assets/clients/lt.png';
import nalcoLogo from '@/assets/clients/nalco.png';
import ciplaLogo from '@/assets/clients/cipla.png';
import tataSteelLogo from '@/assets/clients/tata-steel.png';
import ambujaCementLogo from '@/assets/clients/ambuja-cement.png';
import accLogo from '@/assets/clients/acc.png';

// Hero Section - Full bleed with real imagery
const HeroSection = () => <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* Background Image */}
    <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
    backgroundImage: `url(${workColumnWrapping})`
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
              Carbon, Glass, and Aramid fiber systems.
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
      title: 'Steel Coating & Protection',
      description: 'Surface preparation and anti-corrosive coatings per NACE & ASTM guidelines.',
      features: ['Abrasive blasting', 'Epoxy coatings', 'Zinc-rich systems'],
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
              { value: '500+', label: 'Projects Completed' },
              { value: '1M+', label: 'Sq.m Strengthened' },
              { value: 'NACE', label: 'Certified Testing' },
              { value: 'ASTM', label: 'Standards Compliant' },
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

// Clients Section - Infinite marquee with bold design
const ClientsSection = () => {
  const clients = [
    { name: 'ONGC', logo: ongcLogo },
    { name: 'Larsen & Toubro', logo: ltLogo },
    { name: 'NALCO', logo: nalcoLogo },
    { name: 'Cipla', logo: ciplaLogo },
    { name: 'Tata Steel', logo: tataSteelLogo },
    { name: 'Ambuja Cement', logo: ambujaCementLogo },
    { name: 'ACC', logo: accLogo },
  ];

  // Double the array for seamless loop
  const marqueeClients = [...clients, ...clients];

  return (
    <section className="relative bg-warm-white overflow-hidden py-20">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(90deg, hsl(var(--charcoal)) 0px, hsl(var(--charcoal)) 1px, transparent 1px, transparent 100px)',
        }} />
      </div>

      <div className="container-custom relative z-10 mb-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <AnimatedSection>
            <h2 className="text-charcoal text-3xl lg:text-4xl font-bold">
              Trusted by <span className="text-primary">Industry Leaders</span>
            </h2>
          </AnimatedSection>
          
          <div className="flex items-center gap-8">
            {[
              { value: '100+', label: 'Clients' },
              { value: '7+', label: 'Industries' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-black text-primary">{stat.value}</div>
                <div className="text-xs uppercase tracking-wider text-charcoal/50">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Marquee Container */}
      <div className="relative">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-warm-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-warm-white to-transparent z-10" />
        
        {/* First Marquee Row */}
        <div className="flex overflow-hidden mb-4">
          <motion.div
            className="flex gap-6 py-4"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          >
            {marqueeClients.map((client, index) => (
              <div
                key={`row1-${index}`}
                className="flex-shrink-0 w-40 h-28 bg-white rounded-xl shadow-lg border border-border/30 p-4 flex items-center justify-center hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer group"
              >
                <img 
                  src={client.logo} 
                  alt={client.name}
                  className="w-full h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Second Marquee Row (Reverse Direction) */}
        <div className="flex overflow-hidden">
          <motion.div
            className="flex gap-6 py-4"
            animate={{ x: ['-50%', '0%'] }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          >
            {marqueeClients.reverse().map((client, index) => (
              <div
                key={`row2-${index}`}
                className="flex-shrink-0 w-40 h-28 bg-white rounded-xl shadow-lg border border-border/30 p-4 flex items-center justify-center hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer group"
              >
                <img 
                  src={client.logo} 
                  alt={client.name}
                  className="w-full h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="container-custom mt-12">
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
      </div>
    </section>
  );
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
    rating: 5
  }, {
    quote: "The corrosion protection system they designed for our coastal infrastructure has exceeded all performance benchmarks. Five years on, we're seeing zero degradation.",
    author: 'Priya Sharma',
    position: 'Project Director',
    company: 'L&T Infrastructure',
    rating: 5
  }, {
    quote: "What impressed us most was their systematic approach to problem-solving. They don't just treat symptoms — they identify root causes and engineer permanent solutions.",
    author: 'Vikram Mehta',
    position: 'VP Operations',
    company: 'Tata Steel',
    rating: 5
  }, {
    quote: "Their preventive maintenance program has saved us millions in potential repairs. The ROI on their services is undeniable. Highly recommend for any industrial facility.",
    author: 'Anita Desai',
    position: 'Plant Manager',
    company: 'IOCL Refinery',
    rating: 5
  }, {
    quote: "From initial assessment to project completion, CORR XP demonstrated exceptional knowledge and commitment. Our bridge rehabilitation was completed ahead of schedule.",
    author: 'Suresh Patel',
    position: 'Executive Engineer',
    company: 'NHAI',
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
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-y-1/2 hidden lg:block" />
      </div>

      {/* Large quote decoration */}
      <div className="absolute top-20 right-20 opacity-[0.03] hidden lg:block">
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
        <div className="relative max-w-4xl mx-auto px-4">
          {/* Navigation Arrows */}
          <button onClick={goToPrevious} className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 lg:w-12 lg:h-12 lg:-left-16 bg-warm-white/10 hover:bg-primary text-warm-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-warm-white/10" aria-label="Previous testimonial">
            <ArrowRight size={20} className="rotate-180" />
          </button>
          
          <button onClick={goToNext} className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 lg:w-12 lg:h-12 lg:-right-16 bg-warm-white/10 hover:bg-primary text-warm-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-warm-white/10" aria-label="Next testimonial">
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
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary text-xl font-bold">
                    {testimonials[currentIndex].author.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
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