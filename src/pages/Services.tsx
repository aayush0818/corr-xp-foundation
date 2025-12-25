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
    description:
      'Comprehensive evaluation of corrosion damage using advanced diagnostic techniques including electrochemical testing, ultrasonic thickness measurements, and visual inspections.',
    features: [
      'Non-destructive testing (NDT)',
      'Half-cell potential surveys',
      'Chloride content analysis',
      'Carbonation depth testing',
    ],
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80',
  },
  {
    icon: Wrench,
    title: 'Concrete Repair & Restoration',
    description:
      'Expert restoration of deteriorated concrete structures using proven repair techniques and high-performance materials to ensure long-term structural integrity.',
    features: [
      'Crack injection and sealing',
      'Spall repair and patching',
      'Structural strengthening',
      'Post-tensioning systems',
    ],
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
  },
  {
    icon: Shield,
    title: 'Protective Coatings',
    description:
      'Application of specialized coatings and linings to prevent corrosion and extend the service life of steel and concrete structures.',
    features: [
      'Epoxy coating systems',
      'Polyurethane linings',
      'Cathodic protection',
      'Galvanic systems',
    ],
    image: 'https://images.unsplash.com/photo-1590846128108-9e5f300b5920?auto=format&fit=crop&w=800&q=80',
  },
  {
    icon: Building2,
    title: 'Structural Analysis',
    description:
      'In-depth structural evaluations using advanced modeling and analysis techniques to identify vulnerabilities and recommend appropriate solutions.',
    features: [
      'Load capacity analysis',
      'Finite element modeling',
      'Seismic assessment',
      'Fatigue analysis',
    ],
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
  },
  {
    icon: FileCheck,
    title: 'Quality Assurance & Testing',
    description:
      'Rigorous testing and inspection services to ensure compliance with industry standards and project specifications.',
    features: [
      'Material testing',
      'Coating inspection',
      'Weld examination',
      'Documentation & reporting',
    ],
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
  },
  {
    icon: Users,
    title: 'Consulting Services',
    description:
      'Strategic guidance for infrastructure owners on maintenance planning, risk management, and lifecycle cost optimization.',
    features: [
      'Asset management planning',
      'Maintenance strategies',
      'Budget optimization',
      'Risk assessment',
    ],
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80',
  },
];

const industries = [
  { icon: Factory, name: 'Oil & Gas', projects: '150+' },
  { icon: Droplets, name: 'Water & Wastewater', projects: '80+' },
  { icon: Building2, name: 'Commercial Buildings', projects: '200+' },
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

      {/* Hero Section with Background */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1920&q=80)',
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
              What We Do
            </span>
            <h1 className="text-warm-white text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Comprehensive Solutions for{' '}
              <span className="text-primary">Infrastructure Protection</span>
            </h1>
            <p className="text-xl text-warm-white/85 max-w-2xl leading-relaxed">
              From assessment to implementation, we provide end-to-end services that protect 
              your assets and extend their service life by decades.
            </p>
          </motion.div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-warm-white to-transparent" />
      </section>

      {/* Services Grid */}
      <section className="bg-warm-white section-padding">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <span className="font-script text-accent text-lg mb-2 block">Our Expertise</span>
            <h2 className="text-charcoal mb-4">End-to-End Engineering Solutions</h2>
            <p className="text-charcoal/70 max-w-2xl mx-auto">
              Every service is backed by 25+ years of hands-on experience and cutting-edge technology.
            </p>
          </AnimatedSection>

          <div className="space-y-24">
            {services.map((service, index) => (
              <AnimatedSection key={service.title} delay={0.1}>
                <div
                  className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-primary/10 rounded flex items-center justify-center">
                        <service.icon className="w-8 h-8 text-primary" />
                      </div>
                      <span className="text-sm font-mono text-muted-foreground">0{index + 1}</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">{service.title}</h2>
                    <p className="text-charcoal/70 mb-8 leading-relaxed text-lg">{service.description}</p>
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                          <span className="text-charcoal/80 font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link to="/contact">
                      <Button variant="default" size="lg">
                        <span>Get a Quote</span>
                        <ArrowRight size={18} className="ml-2" />
                      </Button>
                    </Link>
                  </div>
                  <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="relative">
                      <div className="aspect-[4/3] rounded overflow-hidden shadow-custom-xl">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      {/* Decorative accent */}
                      <div className={`absolute -bottom-4 ${index % 2 === 0 ? '-right-4' : '-left-4'} w-24 h-24 bg-primary/10 rounded -z-10 hidden lg:block`} />
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="bg-slate section-padding relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-30" />
        
        <div className="container-custom relative z-10">
          <AnimatedSection className="text-center mb-16">
            <span className="font-script text-primary text-lg mb-2 block">Sectors We Serve</span>
            <h2 className="text-warm-white mb-4">Industries We Protect</h2>
            <p className="text-warm-white/70 max-w-2xl mx-auto">
              Our expertise spans across multiple sectors, delivering tailored solutions 
              for each industry's unique challenges.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <AnimatedSection key={industry.name} delay={index * 0.1}>
                <div className="bg-slate-light/30 backdrop-blur-sm border border-warm-white/10 p-8 rounded text-center hover:bg-slate-light/50 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-primary/10 rounded flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <industry.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-warm-white font-semibold text-lg mb-2">{industry.name}</h3>
                  <p className="text-primary font-bold text-2xl">{industry.projects}</p>
                  <p className="text-warm-white/50 text-sm">Projects</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary section-padding-sm relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-warm-white rounded-full blur-3xl hidden lg:block" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent rounded-full blur-3xl hidden lg:block" />
        </div>

        <div className="container-custom relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <AnimatedSection className="text-center lg:text-left">
              <h2 className="text-primary-foreground text-3xl md:text-4xl font-bold mb-2">
                Need a Customized Solution?
              </h2>
              <p className="text-primary-foreground/80 text-lg">
                Our team of experts is ready to discuss your specific requirements.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.2} className="flex flex-wrap gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-warm-white text-primary font-semibold hover:bg-warm-white/90">
                  <span>Request a Consultation</span>
                  <ArrowRight size={18} className="ml-2" />
                </Button>
              </Link>
              <Link to="/projects">
                <Button variant="heroOutline" size="lg" className="border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground/10">
                  <span>View Our Work</span>
                </Button>
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
