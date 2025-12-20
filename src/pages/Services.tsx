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
  Search,
} from 'lucide-react';
import { Helmet } from 'react-helmet-async';

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
  },
];

const industries = [
  { icon: Factory, name: 'Oil & Gas' },
  { icon: Droplets, name: 'Water & Wastewater' },
  { icon: Building2, name: 'Commercial Buildings' },
  { icon: HardHat, name: 'Transportation' },
  { icon: Gauge, name: 'Power Generation' },
  { icon: Layers, name: 'Marine & Ports' },
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

      {/* Hero Section */}
      <section className="bg-slate pt-32 pb-20">
        <div className="container-custom">
          <AnimatedSection>
            <span className="text-primary font-medium mb-2 block">What We Do</span>
            <h1 className="text-warm-white mb-6 max-w-3xl">
              Comprehensive Solutions for Infrastructure Protection
            </h1>
            <p className="text-xl text-warm-white/80 max-w-2xl">
              From assessment to implementation, we provide end-to-end services that protect 
              your assets and extend their service life.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-warm-white section-padding">
        <div className="container-custom">
          <div className="space-y-16">
            {services.map((service, index) => (
              <AnimatedSection key={service.title} delay={0.1}>
                <div
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                      <service.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-semibold mb-4">{service.title}</h2>
                    <p className="text-charcoal/70 mb-6 leading-relaxed">{service.description}</p>
                    <ul className="space-y-3">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full" />
                          <span className="text-charcoal/80">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="aspect-[4/3] bg-warm-white-dark rounded-lg overflow-hidden">
                      <img
                        src={`https://images.unsplash.com/photo-${
                          index === 0
                            ? '1581094794329-c8112a89af12'
                            : index === 1
                            ? '1504307651254-35680f356dfd'
                            : index === 2
                            ? '1590846128108-9e5f300b5920'
                            : index === 3
                            ? '1486406146926-c627a92ad1ab'
                            : index === 4
                            ? '1454165804606-c3d57bc86b40'
                            : '1552664730-d307ca884978'
                        }?auto=format&fit=crop&w=800&q=80`}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="bg-slate section-padding">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-warm-white mb-4">Industries We Serve</h2>
            <p className="text-warm-white/70 max-w-2xl mx-auto">
              Our expertise spans across multiple sectors, delivering tailored solutions 
              for each industry's unique challenges.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industry, index) => (
              <AnimatedSection key={industry.name} delay={index * 0.1}>
                <div className="bg-slate-light/50 p-6 rounded-lg text-center hover:bg-slate-light transition-colors">
                  <industry.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                  <span className="text-warm-white font-medium">{industry.name}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary section-padding">
        <div className="container-custom text-center">
          <AnimatedSection>
            <h2 className="text-primary-foreground mb-4">
              Need a Customized Solution?
            </h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
              Our team of experts is ready to discuss your specific requirements and 
              develop a tailored approach for your project.
            </p>
            <Button
              variant="heroOutline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              asChild
            >
              <Link to="/contact">
                Request a Consultation
                <ArrowRight size={18} />
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
