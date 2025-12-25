import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import AnimatedSection from '@/components/ui/AnimatedSection';
import CountUpNumber from '@/components/ui/CountUpNumber';
import { ArrowRight, Award, Users, Target, CheckCircle2, Shield, Lightbulb, Heart, Building2 } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

const values = [
  {
    icon: Shield,
    title: 'Integrity',
    description: 'Highest ethical standards in all our work with honest assessments.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Continuously advancing methods and technologies for complex challenges.',
  },
  {
    icon: Target,
    title: 'Excellence',
    description: 'Exceptional quality in every project, exceeding industry standards.',
  },
  {
    icon: Heart,
    title: 'Client Focus',
    description: 'Building lasting partnerships through dedicated, tailored service.',
  },
];

const milestones = [
  { year: '1999', title: 'Company Founded', description: 'Started with a vision to protect India\'s infrastructure' },
  { year: '2005', title: 'ISO Certification', description: 'Achieved ISO 9001 quality management certification' },
  { year: '2010', title: 'National Expansion', description: 'Expanded operations across all major Indian states' },
  { year: '2015', title: 'NACE Partnership', description: 'Became NACE certified corrosion specialists' },
  { year: '2020', title: '500+ Projects', description: 'Milestone of 500+ successful project completions' },
  { year: '2024', title: 'Industry Leader', description: 'Recognized as India\'s premier corrosion engineering firm' },
];

const AboutPage = () => {
  const stats = [
    { value: 25, suffix: '+', label: 'Years Experience' },
    { value: 500, suffix: '+', label: 'Projects Completed' },
    { value: 150, suffix: '+', label: 'Expert Engineers' },
    { value: 98, suffix: '%', label: 'Client Satisfaction' },
  ];

  return (
    <>
      <Helmet>
        <title>About Us | CORR XP - 25+ Years of Engineering Excellence</title>
        <meta
          name="description"
          content="Learn about CORR XP's journey as India's leading corrosion protection and concrete rehabilitation specialists. 25+ years of protecting critical infrastructure."
        />
      </Helmet>

      {/* Hero Section - Clean gradient with content focus */}
      <section className="relative bg-slate overflow-hidden">
        {/* Abstract background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-2xl" />
          <div className="absolute inset-0 pattern-dots opacity-30" />
        </div>
        
        <div className="container-custom relative z-10 pt-32 pb-24 lg:pt-40 lg:pb-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
                <Building2 className="w-4 h-4 text-primary" />
                <span className="text-primary text-sm font-medium">Since 1999</span>
              </div>
              
              <h1 className="text-warm-white text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                25+ Years of{' '}
                <span className="text-primary">Engineering Excellence</span>
              </h1>
              
              <p className="text-lg text-warm-white/80 mb-8 max-w-xl leading-relaxed">
                From a small team with a big vision to India's premier corrosion engineering 
                specialists. Our journey is built on expertise, innovation, and unwavering 
                commitment to protecting critical infrastructure.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link to="/contact">
                  <Button variant="hero" size="lg">
                    <span>Work With Us</span>
                    <ArrowRight size={18} className="ml-2" />
                  </Button>
                </Link>
                <Link to="/projects">
                  <Button variant="heroOutline" size="lg">
                    <span>View Projects</span>
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Right - Stats grid */}
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

      {/* Story Section */}
      <section className="bg-warm-white section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <div className="relative">
                <div className="aspect-[4/5] rounded overflow-hidden shadow-custom-xl">
                  <img
                    src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80"
                    alt="CORR XP Team at work"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-primary p-6 rounded shadow-custom-xl max-w-[180px] hidden md:block">
                  <div className="text-3xl font-bold text-primary-foreground">1999</div>
                  <div className="text-primary-foreground/80 text-sm">Year Founded</div>
                </div>
                <div className="absolute left-0 top-1/4 w-1 h-24 bg-primary hidden lg:block -translate-x-6" />
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <span className="font-script text-accent text-lg mb-2 block">Who We Are</span>
              <h2 className="text-charcoal mb-6">
                Building Trust Through{' '}
                <span className="text-primary">Excellence</span>
              </h2>
              <div className="space-y-4 text-charcoal/75">
                <p className="text-lg leading-relaxed">
                  Founded in 1999, CORR XP has grown from a small consulting firm into 
                  India's most trusted name in corrosion engineering and concrete rehabilitation.
                </p>
                <p className="leading-relaxed">
                  Our journey began with a simple yet powerful vision: to protect India's 
                  critical infrastructure from the silent threat of corrosion. Today, we've 
                  completed over 500 projects across industries.
                </p>
                <p className="leading-relaxed">
                  What sets us apart is our unwavering commitment to scientific rigor, 
                  innovative solutions, and client partnership.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-3 mt-8">
                {['ISO 9001 Certified', 'NACE Specialists', 'Pan-India Presence', '24/7 Support'].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm font-medium text-charcoal/80">{item}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-warm-white-dark section-padding">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <span className="font-script text-accent text-lg mb-2 block">Our Foundation</span>
            <h2 className="text-charcoal mb-4">Core Values</h2>
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

      {/* Timeline Section */}
      <section className="bg-slate section-padding">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <span className="font-script text-primary text-lg mb-2 block">Our Journey</span>
            <h2 className="text-warm-white mb-4">Key Milestones</h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {milestones.map((milestone, index) => (
              <AnimatedSection key={milestone.year} delay={index * 0.1}>
                <div className="bg-slate-light/30 backdrop-blur-sm border border-warm-white/10 p-6 rounded hover:bg-slate-light/50 transition-colors">
                  <span className="text-primary font-bold text-2xl">{milestone.year}</span>
                  <h3 className="text-warm-white font-semibold text-lg mt-2 mb-2">{milestone.title}</h3>
                  <p className="text-warm-white/60 text-sm">{milestone.description}</p>
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
                Ready to Work With Us?
              </h2>
              <p className="text-primary-foreground/80">
                Let's discuss how we can protect your infrastructure.
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