import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import AnimatedSection from '@/components/ui/AnimatedSection';
import CountUpNumber from '@/components/ui/CountUpNumber';
import { ArrowRight, Shield, Wrench, Microscope, Building2, FileCheck, Users } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

// Hero Section
const HeroSection = () => (
  <section className="relative min-h-screen flex items-center bg-slate pt-20">
    <div className="absolute inset-0 bg-gradient-to-br from-slate-dark via-slate to-slate-light opacity-90" />
    <div className="container-custom relative z-10">
      <div className="max-w-3xl">
        <AnimatedSection delay={0.1}>
          <span className="inline-block px-4 py-2 bg-warm-white/10 text-primary text-sm font-medium rounded-full mb-6">
            Corrosion Concrete Strategist
          </span>
        </AnimatedSection>
        <AnimatedSection delay={0.2}>
          <h1 className="text-warm-white mb-6 text-balance">
            Protecting Infrastructure,{' '}
            <span className="text-primary">Preserving Legacy</span>
          </h1>
        </AnimatedSection>
        <AnimatedSection delay={0.3}>
          <p className="text-xl text-warm-white/80 mb-8 max-w-2xl leading-relaxed">
            CORR XP delivers innovative corrosion protection and concrete rehabilitation 
            solutions that extend the life of critical infrastructure across industries.
          </p>
        </AnimatedSection>
        <AnimatedSection delay={0.4}>
          <div className="flex flex-wrap gap-4">
            <Button variant="hero" asChild>
              <Link to="/contact">
                Contact Us
                <ArrowRight size={18} />
              </Link>
            </Button>
            <Button variant="heroOutline" asChild>
              <Link to="/about">Download Brochure</Link>
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

// Stats Section
const StatsSection = () => {
  const stats = [
    { value: 25, suffix: '+', label: 'Years Experience' },
    { value: 500, suffix: '+', label: 'Projects Completed' },
    { value: 150, suffix: '+', label: 'Expert Engineers' },
    { value: 98, suffix: '%', label: 'Client Satisfaction' },
  ];

  return (
    <section className="bg-warm-white py-16">
      <div className="container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <AnimatedSection key={stat.label} delay={index * 0.1} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                <CountUpNumber end={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-charcoal/70 font-medium">{stat.label}</p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

// Services Preview
const ServicesPreviewSection = () => {
  const services = [
    {
      icon: Microscope,
      title: 'Corrosion Assessment',
      description: 'Comprehensive evaluation and analysis of corrosion damage using advanced diagnostic techniques.',
    },
    {
      icon: Wrench,
      title: 'Concrete Repair',
      description: 'Expert restoration of deteriorated concrete structures to ensure structural integrity.',
    },
    {
      icon: Shield,
      title: 'Protective Coatings',
      description: 'Application of specialized coatings to prevent future corrosion and extend asset life.',
    },
    {
      icon: Building2,
      title: 'Structural Analysis',
      description: 'In-depth structural evaluations to identify vulnerabilities and recommend solutions.',
    },
    {
      icon: FileCheck,
      title: 'Quality Assurance',
      description: 'Rigorous testing and inspection services to ensure compliance with industry standards.',
    },
    {
      icon: Users,
      title: 'Consulting Services',
      description: 'Strategic guidance for infrastructure maintenance, planning, and risk management.',
    },
  ];

  return (
    <section className="bg-warm-white-dark section-padding">
      <div className="container-custom">
        <AnimatedSection className="text-center mb-12">
          <span className="text-primary font-medium mb-2 block">What We Do</span>
          <h2 className="mb-4">Our Core Services</h2>
          <p className="text-charcoal/70 max-w-2xl mx-auto">
            Delivering comprehensive solutions for corrosion control and concrete rehabilitation 
            across industrial, commercial, and public infrastructure sectors.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <AnimatedSection key={service.title} delay={index * 0.1}>
              <div className="bg-warm-white p-8 rounded-lg card-hover h-full border border-border">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-charcoal/70 leading-relaxed">{service.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center mt-12">
          <Button variant="default" size="lg" asChild>
            <Link to="/services">
              View All Services
              <ArrowRight size={18} />
            </Link>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
};

// About Snapshot
const AboutSnapshotSection = () => (
  <section className="bg-slate section-padding">
    <div className="container-custom">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <AnimatedSection direction="right">
          <span className="text-primary font-medium mb-2 block">About CORR XP</span>
          <h2 className="text-warm-white mb-6">
            Engineering Excellence Since 1999
          </h2>
          <p className="text-warm-white/80 mb-6 leading-relaxed">
            For over two decades, CORR XP has been at the forefront of corrosion engineering 
            and concrete technology. Our team of expert engineers and scientists combine 
            cutting-edge research with practical field experience to deliver solutions that 
            stand the test of time.
          </p>
          <p className="text-warm-white/70 mb-8 leading-relaxed">
            We partner with clients across industries — from oil & gas to transportation 
            infrastructure — providing tailored strategies that minimize downtime, reduce 
            costs, and extend asset lifecycles.
          </p>
          <Button variant="hero" asChild>
            <Link to="/about">
              Learn More About Us
              <ArrowRight size={18} />
            </Link>
          </Button>
        </AnimatedSection>

        <AnimatedSection direction="left" delay={0.2}>
          <div className="relative">
            <div className="aspect-[4/3] bg-slate-light rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80"
                alt="Engineering team at work"
                className="w-full h-full object-cover opacity-80"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-primary p-6 rounded-lg shadow-custom-xl">
              <div className="text-3xl font-bold text-primary-foreground">25+</div>
              <div className="text-primary-foreground/80 text-sm">Years of Excellence</div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

// Projects Preview
const ProjectsPreviewSection = () => {
  const projects = [
    {
      id: 1,
      title: 'Harbor Bridge Restoration',
      category: 'Infrastructure',
      image: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 2,
      title: 'Industrial Tank Coating',
      category: 'Oil & Gas',
      image: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 3,
      title: 'Parking Structure Repair',
      category: 'Commercial',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80',
    },
  ];

  return (
    <section className="bg-warm-white section-padding">
      <div className="container-custom">
        <AnimatedSection className="text-center mb-12">
          <span className="text-primary font-medium mb-2 block">Our Work</span>
          <h2 className="mb-4">Featured Projects</h2>
          <p className="text-charcoal/70 max-w-2xl mx-auto">
            Explore our portfolio of successful corrosion protection and concrete 
            rehabilitation projects across diverse industries.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <AnimatedSection key={project.id} delay={index * 0.15} direction="up">
              <Link to={`/projects/${project.id}`} className="block group">
                <div className="relative overflow-hidden rounded-lg aspect-[4/3] mb-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-slate-dark/40 group-hover:bg-slate-dark/20 transition-colors duration-300" />
                </div>
                <span className="text-accent text-sm font-medium">{project.category}</span>
                <h3 className="text-xl font-semibold mt-1 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
              </Link>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center mt-12">
          <Button variant="default" size="lg" asChild>
            <Link to="/projects">
              View All Projects
              <ArrowRight size={18} />
            </Link>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
};

// CTA Section
const CTASection = () => (
  <section className="bg-primary section-padding">
    <div className="container-custom text-center">
      <AnimatedSection>
        <h2 className="text-primary-foreground mb-4">
          Ready to Protect Your Infrastructure?
        </h2>
        <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
          Contact our team of experts to discuss your corrosion protection and 
          concrete rehabilitation needs. We're here to help.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            variant="heroOutline"
            className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            asChild
          >
            <Link to="/contact">Get Started Today</Link>
          </Button>
        </div>
      </AnimatedSection>
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
        <meta name="keywords" content="corrosion protection, concrete repair, infrastructure, structural engineering, protective coatings" />
      </Helmet>

      <HeroSection />
      <StatsSection />
      <ServicesPreviewSection />
      <AboutSnapshotSection />
      <ProjectsPreviewSection />
      <CTASection />
    </>
  );
};

export default Index;
