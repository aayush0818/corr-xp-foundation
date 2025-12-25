import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import AnimatedSection from '@/components/ui/AnimatedSection';
import {
  ArrowRight,
  Wrench,
  Shield,
  Building2,
  Layers,
  CheckCircle2,
  Factory,
  Home,
  Landmark,
  Zap,
  GraduationCap,
  Construction,
} from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

const services = [
  {
    icon: Wrench,
    title: 'Structural Repair & Rehabilitation',
    description: 'Repair and rehabilitation of distressed structural members such as beams, columns, slabs, and foundations to restore structural safety and serviceability.',
    features: [
      'Beam & column repair',
      'Slab rehabilitation',
      'Foundation strengthening',
      'Structural safety restoration',
    ],
  },
  {
    icon: Construction,
    title: 'Concrete Repair & Protection',
    description: 'Concrete patch repair, micro-concreting, crack injection, grouting, and protective coating systems to prevent further deterioration.',
    features: [
      'Patch repair & micro-concreting',
      'Crack injection & grouting',
      'Protective coating systems',
      'Deterioration prevention',
    ],
  },
  {
    icon: Shield,
    title: 'Corrosion Control',
    description: 'Treatment of corroded reinforcement and application of anti-corrosion systems to enhance durability and extend service life.',
    features: [
      'Reinforcement treatment',
      'Anti-corrosion systems',
      'Durability enhancement',
      'Service life extension',
    ],
  },
  {
    icon: Layers,
    title: 'Steel Coating & Protection',
    description: 'Protective coating solutions for steel structures including surface preparation, anti-corrosive coatings, and industrial steel protection.',
    features: [
      'Abrasive blasting & surface prep',
      'Anti-corrosive coating systems',
      'Self-healing epoxy & PU coatings',
      'Zinc-rich coatings (ISO guidelines)',
    ],
  },
  {
    icon: Building2,
    title: 'Fiber Wrapping (FRP Strengthening)',
    description: 'Strengthening of RCC structures using Fiber Reinforced Polymer (FRP) systems to improve load-carrying capacity, stiffness, and ductility.',
    features: [
      'Load capacity improvement',
      'Stiffness enhancement',
      'Ductility improvement',
      'RCC structure strengthening',
    ],
  },
  {
    icon: Landmark,
    title: 'Structural Retrofitting',
    description: 'Advanced retrofitting using high-performance Carbon Fiber (CFRP), Glass Fiber (GFRP), and Aramid Fiber (AFRP) wrapping systems.',
    features: [
      'Seismic performance upgrade',
      'Column & beam strengthening',
      'Shear wall reinforcement',
      'Load capacity enhancement',
    ],
  },
];

const retrofittingBenefits = [
  'Enhance load capacity of existing structures',
  'Improve seismic performance',
  'Strengthen columns, beams, slabs, and shear walls',
  'Upgrade structures for change in usage or design loads',
  'Extend service life without adding significant dead load',
];

const industries = [
  { icon: Home, name: 'Residential & Commercial', description: 'Buildings' },
  { icon: Factory, name: 'Industrial Facilities', description: 'Manufacturing & Processing' },
  { icon: Construction, name: 'Infrastructure', description: 'Bridges & Roads' },
  { icon: Zap, name: 'Power Plants', description: 'Utilities & Energy' },
  { icon: GraduationCap, name: 'Institutional', description: 'Education & Healthcare' },
];

const ServicesPage = () => {
  return (
    <>
      <Helmet>
        <title>Our Services | CORR XP India - Structural Repair, Protection & Retrofitting</title>
        <meta
          name="description"
          content="CORR XP India offers structural repair, concrete protection, corrosion control, steel coating, FRP strengthening, and structural retrofitting services."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-slate overflow-hidden">
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
                <span className="text-primary text-sm font-medium">Our Services</span>
              </div>
              
              <h1 className="text-warm-white text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Structural Repair,{' '}
                <span className="text-primary">Protection & Retrofitting</span>
              </h1>
              
              <p className="text-lg text-warm-white/80 max-w-2xl leading-relaxed">
                Advanced solutions for concrete and steel structures. We focus on improving 
                strength, durability, and performance of existing assets using proven repair 
                systems and modern strengthening technologies.
              </p>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-warm-white/10"
          >
            <div>
              <div className="text-3xl font-bold text-primary">6</div>
              <div className="text-warm-white/60 text-sm">Core Services</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">5</div>
              <div className="text-warm-white/60 text-sm">Industries Served</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">In-house</div>
              <div className="text-warm-white/60 text-sm">Design of Repairs</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-warm-white section-padding">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <span className="font-script text-accent text-lg mb-2 block">What We Do</span>
            <h2 className="text-charcoal mb-4">Comprehensive Engineering Solutions</h2>
            <p className="text-charcoal/70 max-w-2xl mx-auto">
              From structural repair to advanced fiber wrapping, we deliver proven solutions 
              with in-house design capabilities including structural stability analysis.
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
        </div>
      </section>

      {/* Retrofitting Benefits */}
      <section className="bg-warm-white-dark section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <span className="font-script text-accent text-lg mb-2 block">Advanced Solutions</span>
              <h2 className="text-charcoal mb-6">Carbon / Glass / Aramid Fiber Systems</h2>
              <p className="text-charcoal/70 mb-8 leading-relaxed">
                Our high-performance fiber wrapping and laminate upgrade systems provide 
                advanced structural retrofitting without adding significant dead load to 
                your structures.
              </p>
              <div className="space-y-4">
                {retrofittingBenefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-charcoal/80">{benefit}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="bg-slate p-8 rounded">
                <h3 className="text-warm-white text-xl font-bold mb-4">Fiber Systems We Use</h3>
                <div className="space-y-4">
                  <div className="bg-slate-light/30 p-4 rounded border border-warm-white/10">
                    <div className="text-primary font-bold mb-1">CFRP</div>
                    <div className="text-warm-white/70 text-sm">Carbon Fiber Reinforced Polymer</div>
                  </div>
                  <div className="bg-slate-light/30 p-4 rounded border border-warm-white/10">
                    <div className="text-primary font-bold mb-1">GFRP</div>
                    <div className="text-warm-white/70 text-sm">Glass Fiber Reinforced Polymer</div>
                  </div>
                  <div className="bg-slate-light/30 p-4 rounded border border-warm-white/10">
                    <div className="text-primary font-bold mb-1">AFRP</div>
                    <div className="text-warm-white/70 text-sm">Aramid Fiber Reinforced Polymer</div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="bg-slate section-padding">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <span className="font-script text-primary text-lg mb-2 block">Sectors We Serve</span>
            <h2 className="text-warm-white mb-4">Industries We Protect</h2>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {industries.map((industry, index) => (
              <AnimatedSection key={industry.name} delay={index * 0.1}>
                <div className="bg-slate-light/30 backdrop-blur-sm border border-warm-white/10 p-6 rounded text-center hover:bg-slate-light/50 transition-all duration-300 group">
                  <div className="w-12 h-12 bg-primary/10 rounded flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors">
                    <industry.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-warm-white font-semibold text-sm mb-1">{industry.name}</h3>
                  <p className="text-warm-white/50 text-xs">{industry.description}</p>
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
                Need Structural Solutions?
              </h2>
              <p className="text-primary-foreground/80">
                Get in touch for a consultation and customized repair design.
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