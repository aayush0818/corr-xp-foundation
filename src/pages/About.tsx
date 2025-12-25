import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import AnimatedSection from '@/components/ui/AnimatedSection';
import CountUpNumber from '@/components/ui/CountUpNumber';
import { ArrowRight, CheckCircle2, Shield, Wrench, Target, Building2, Layers, Construction } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import teamPhoto from '@/assets/team-photo-1.jpg';
import workFiberWrapping from '@/assets/work-fiber-wrapping-1.jpg';

const coreServices = [
  'Structural repair & rehabilitation',
  'Concrete repair and protection',
  'Corrosion control solutions',
  'Steel coating and protection services',
  'Fiber wrapping (FRP strengthening)',
  'Structural retrofitting using Carbon / Glass / Aramid fiber systems',
  'In-house Design of Repairs (Structural Stability Included)',
];

const values = [
  {
    icon: Shield,
    title: 'Quality Assurance',
    description: 'Proven repair systems and adherence to ISO guidelines in all our work.',
  },
  {
    icon: Wrench,
    title: 'Technical Expertise',
    description: 'In-house design capabilities including structural stability analysis.',
  },
  {
    icon: Target,
    title: 'Precision',
    description: 'Focused on improving strength, durability, and performance of structures.',
  },
  {
    icon: Layers,
    title: 'Modern Technology',
    description: 'Advanced fiber systems including CFRP, GFRP, and AFRP solutions.',
  },
];

const industries = [
  'Residential & commercial buildings',
  'Industrial facilities',
  'Infrastructure & bridges',
  'Power plants & utilities',
  'Institutional structures',
];

const AboutPage = () => {
  const stats = [
    { value: 500, suffix: '+', label: 'Projects Completed' },
    { value: 100, suffix: '+', label: 'Structures Retrofitted' },
    { value: 5, suffix: '', label: 'Industries Served' },
    { value: 6, suffix: '', label: 'Core Services' },
  ];

  return (
    <>
      <Helmet>
        <title>About Us | CORR XP India - Structural Repair & Retrofitting Specialists</title>
        <meta
          name="description"
          content="CORR XP India is a specialized structural repair, rehabilitation, protection, and retrofitting contractor providing advanced solutions for concrete and steel structures."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-slate overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-2xl" />
          <div className="absolute inset-0 pattern-dots opacity-30" />
        </div>
        
        <div className="container-custom relative z-10 pt-32 pb-24 lg:pt-40 lg:pb-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
                <Building2 className="w-4 h-4 text-primary" />
                <span className="text-primary text-sm font-medium">MSME & GST Registered</span>
              </div>
              
              <h1 className="text-warm-white text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Structural Repair{' '}
                <span className="text-primary">Specialists</span>
              </h1>
              
              <p className="text-lg text-warm-white/80 mb-8 max-w-xl leading-relaxed">
                CORR XP India is a specialized structural repair, rehabilitation, protection, 
                and retrofitting contractor, providing advanced solutions for concrete and 
                steel structures.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link to="/contact">
                  <Button variant="hero" size="lg">
                    <span>Work With Us</span>
                    <ArrowRight size={18} className="ml-2" />
                  </Button>
                </Link>
                <Link to="/services">
                  <Button variant="heroOutline" size="lg">
                    <span>Our Services</span>
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className={`p-6 lg:p-8 rounded ${
                    index === 0 ? 'bg-primary text-primary-foreground' : 'bg-slate-light/50 backdrop-blur-sm border border-warm-white/10'
                  }`}
                >
                  <div className={`text-3xl lg:text-4xl font-bold mb-1 ${index === 0 ? '' : 'text-primary'}`}>
                    <CountUpNumber end={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className={`text-sm font-medium ${index === 0 ? 'text-primary-foreground/80' : 'text-warm-white/60'}`}>
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="bg-warm-white section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <div className="relative">
                <div className="aspect-[4/5] rounded overflow-hidden shadow-custom-xl">
                  <img
                    src={workFiberWrapping}
                    alt="Fiber wrapping work in progress"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-primary p-6 rounded shadow-custom-xl max-w-[200px] hidden md:block">
                  <div className="text-2xl font-bold text-primary-foreground">In-house</div>
                  <div className="text-primary-foreground/80 text-sm">Design of Repairs</div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <span className="font-script text-accent text-lg mb-2 block">What We Do</span>
              <h2 className="text-charcoal mb-6">
                Our Key{' '}
                <span className="text-primary">Services</span>
              </h2>
              <p className="text-charcoal/75 mb-8 leading-relaxed">
                We focus on improving strength, durability, and performance of existing assets 
                using proven repair systems and modern strengthening technologies.
              </p>
              
              <div className="space-y-3">
                {coreServices.map((service) => (
                  <div key={service} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-charcoal/80">{service}</span>
                  </div>
                ))}
              </div>

              <Link to="/services" className="inline-block mt-8">
                <Button variant="default" size="lg">
                  <span>View All Services</span>
                  <ArrowRight size={18} className="ml-2" />
                </Button>
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-warm-white-dark section-padding">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <span className="font-script text-accent text-lg mb-2 block">Our Approach</span>
            <h2 className="text-charcoal mb-4">Why Choose Us</h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <AnimatedSection key={value.title} delay={index * 0.1}>
                <div className="bg-warm-white p-6 rounded border border-border hover:shadow-custom-lg transition-all duration-300 h-full group">
                  <div className="w-12 h-12 bg-primary/10 rounded flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-charcoal text-lg font-semibold mb-2">{value.title}</h3>
                  <p className="text-charcoal/60 text-sm leading-relaxed">{value.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="bg-slate section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <span className="font-script text-primary text-lg mb-2 block">Sectors We Serve</span>
              <h2 className="text-warm-white mb-6">Industries We Protect</h2>
              <p className="text-warm-white/70 mb-8 leading-relaxed">
                Our expertise spans across multiple sectors, delivering tailored structural 
                repair and retrofitting solutions for each industry's unique challenges.
              </p>
              <div className="space-y-4">
                {industries.map((industry) => (
                  <div key={industry} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-warm-white/80">{industry}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <div className="bg-slate-light/30 backdrop-blur-sm border border-warm-white/10 p-8 rounded">
                <h3 className="text-warm-white text-xl font-bold mb-6">Business Registration</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-4 bg-slate-light/30 rounded border border-warm-white/10">
                    <Construction className="w-6 h-6 text-primary" />
                    <div>
                      <div className="text-warm-white font-semibold">MSME Registered</div>
                      <div className="text-warm-white/60 text-sm">Micro, Small & Medium Enterprises</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-slate-light/30 rounded border border-warm-white/10">
                    <Building2 className="w-6 h-6 text-primary" />
                    <div>
                      <div className="text-warm-white font-semibold">GST Registered</div>
                      <div className="text-warm-white/60 text-sm">Proprietorship Firm</div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
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
                Let's discuss your repair, protection, or retrofitting requirements.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-warm-white text-primary font-semibold hover:bg-warm-white/90">
                  <span>Get in Touch</span>
                  <ArrowRight size={18} className="ml-2" />
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="heroOutline" size="lg" className="border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground/10">
                  <span>View Services</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;