import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import AnimatedSection from '@/components/ui/AnimatedSection';
import {
  ArrowRight,
  Microscope,
  Wrench,
  Shield,
  Building2,
  FileCheck,
  Users,
  Factory,
  Droplets,
  HardHat,
  Gauge,
  Layers,
  CheckCircle2,
} from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

const services = [
  {
    icon: Microscope,
    title: 'Corrosion Assessment',
    description: 'Comprehensive evaluation using advanced diagnostic techniques including electrochemical testing and ultrasonic thickness measurements.',
    features: ['Non-destructive testing', 'Half-cell potential surveys', 'Chloride analysis', 'Carbonation testing'],
  },
  {
    icon: Wrench,
    title: 'Concrete Repair & Restoration',
    description: 'Expert restoration of deteriorated concrete using proven repair techniques and high-performance materials.',
    features: ['Crack injection', 'Spall repair', 'Structural strengthening', 'Post-tensioning'],
  },
  {
    icon: Shield,
    title: 'Protective Coatings',
    description: 'Application of specialized coatings and linings to prevent corrosion and extend service life.',
    features: ['Epoxy systems', 'Polyurethane linings', 'Cathodic protection', 'Galvanic systems'],
  },
  {
    icon: Building2,
    title: 'Structural Analysis',
    description: 'In-depth structural evaluations using advanced modeling to identify vulnerabilities.',
    features: ['Load capacity analysis', 'Finite element modeling', 'Seismic assessment', 'Fatigue analysis'],
  },
  {
    icon: FileCheck,
    title: 'Quality Assurance',
    description: 'Rigorous testing and inspection services ensuring compliance with industry standards.',
    features: ['Material testing', 'Coating inspection', 'Weld examination', 'Documentation'],
  },
  {
    icon: Users,
    title: 'Consulting Services',
    description: 'Strategic guidance on maintenance planning, risk management, and lifecycle optimization.',
    features: ['Asset management', 'Maintenance strategies', 'Budget optimization', 'Risk assessment'],
  },
];

const industries = [
  { icon: Factory, name: 'Oil & Gas', projects: '150+' },
  { icon: Droplets, name: 'Water & Wastewater', projects: '80+' },
  { icon: Building2, name: 'Commercial', projects: '200+' },
  { icon: HardHat, name: 'Transportation', projects: '120+' },
  { icon: Gauge, name: 'Power Generation', projects: '60+' },
  { icon: Layers, name: 'Marine & Ports', projects: '40+' },
];

const ServicesPage = () => {
  return (
    <>
      <Helmet>
        <title>Our Services | CORR XP - Corrosion Protection & Concrete Repair</title>
        <meta
          name="description"
          content="Explore CORR XP's comprehensive services including corrosion assessment, concrete repair, protective coatings, structural analysis, and expert consulting."
        />
      </Helmet>

      {/* Hero Section - Clean gradient design */}
      <section className="relative bg-slate overflow-hidden">
        {/* Abstract background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-dark via-slate to-slate-light/20" />
          <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute inset-0 pattern-lines opacity-40" />
        </div>
        
        <div className="container-custom relative z-10 pt-32 pb-20 lg:pt-40 lg:pb-28">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
                <Wrench className="w-4 h-4 text-primary" />
                <span className="text-primary text-sm font-medium">Our Expertise</span>
              </div>
              
              <h1 className="text-warm-white text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Comprehensive{' '}
                <span className="text-primary">Engineering Solutions</span>
              </h1>
              
              <p className="text-lg text-warm-white/80 max-w-2xl leading-relaxed">
                From assessment to implementation, we provide end-to-end services that protect 
                your assets and extend their service life by decades.
              </p>
            </motion.div>
          </div>

          {/* Service count indicator */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex gap-8 mt-12 pt-8 border-t border-warm-white/10"
          >
            <div>
              <div className="text-3xl font-bold text-primary">6</div>
              <div className="text-warm-white/60 text-sm">Core Services</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">6</div>
              <div className="text-warm-white/60 text-sm">Industries Served</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">25+</div>
              <div className="text-warm-white/60 text-sm">Years Experience</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-warm-white section-padding">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <span className="font-script text-accent text-lg mb-2 block">What We Do</span>
            <h2 className="text-charcoal mb-4">End-to-End Engineering Solutions</h2>
            <p className="text-charcoal/70 max-w-2xl mx-auto">
              Every service is backed by 25+ years of hands-on experience and cutting-edge technology.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <AnimatedSection key={service.title} delay={index * 0.1}>
                <div className="bg-warm-white border border-border p-6 rounded hover:shadow-custom-lg transition-all duration-300 h-full group">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <service.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <div>
                      <span className="text-xs font-mono text-muted-foreground">0{index + 1}</span>
                      <h3 className="text-charcoal text-lg font-semibold">{service.title}</h3>
                    </div>
                  </div>
                  
                  <p className="text-charcoal/70 text-sm mb-4 leading-relaxed">{service.description}</p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-charcoal/80">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.3} className="text-center mt-12">
            <Link to="/contact">
              <Button variant="default" size="lg">
                <span>Get a Quote</span>
                <ArrowRight size={18} className="ml-2" />
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Industries Section */}
      <section className="bg-slate section-padding">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <span className="font-script text-primary text-lg mb-2 block">Sectors We Serve</span>
            <h2 className="text-warm-white mb-4">Industries We Protect</h2>
            <p className="text-warm-white/70 max-w-2xl mx-auto">
              Tailored solutions for each industry's unique challenges.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
            {industries.map((industry, index) => (
              <AnimatedSection key={industry.name} delay={index * 0.1}>
                <div className="bg-slate-light/30 backdrop-blur-sm border border-warm-white/10 p-6 rounded text-center hover:bg-slate-light/50 transition-all duration-300 group">
                  <div className="w-14 h-14 bg-primary/10 rounded flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <industry.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-warm-white font-semibold mb-1">{industry.name}</h3>
                  <p className="text-primary font-bold text-xl">{industry.projects}</p>
                  <p className="text-warm-white/50 text-xs">Projects</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary section-padding-sm">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h2 className="text-primary-foreground text-3xl font-bold mb-2">
                Need a Customized Solution?
              </h2>
              <p className="text-primary-foreground/80">
                Our team of experts is ready to discuss your requirements.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-warm-white text-primary font-semibold hover:bg-warm-white/90">
                  <span>Request Consultation</span>
                  <ArrowRight size={18} className="ml-2" />
                </Button>
              </Link>
              <Link to="/projects">
                <Button variant="heroOutline" size="lg" className="border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground/10">
                  <span>View Our Work</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;