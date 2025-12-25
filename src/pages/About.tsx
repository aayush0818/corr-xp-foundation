import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import AnimatedSection from '@/components/ui/AnimatedSection';
import CountUpNumber from '@/components/ui/CountUpNumber';
import { ArrowRight, Award, Users, Target, CheckCircle2, Shield, Lightbulb, Heart } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

const values = [
  {
    icon: Shield,
    title: 'Integrity',
    description: 'We maintain the highest ethical standards in all our work, delivering honest assessments and transparent recommendations.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Continuously advancing our methods and technologies to provide cutting-edge solutions for complex infrastructure challenges.',
  },
  {
    icon: Target,
    title: 'Excellence',
    description: 'Committed to delivering exceptional quality in every project, exceeding industry standards and client expectations.',
  },
  {
    icon: Heart,
    title: 'Client Focus',
    description: 'Building lasting partnerships through dedicated service, understanding unique needs, and delivering tailored solutions.',
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

const team = [
  {
    name: 'Dr. Rajesh Kumar',
    role: 'Founder & CEO',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    description: '30+ years in structural engineering',
  },
  {
    name: 'Priya Sharma',
    role: 'Chief Technical Officer',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    description: 'NACE-certified corrosion specialist',
  },
  {
    name: 'Amit Patel',
    role: 'Director of Operations',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80',
    description: 'Expert in project management',
  },
  {
    name: 'Dr. Meera Iyer',
    role: 'Head of R&D',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
    description: 'PhD in Materials Science',
  },
];

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About Us | CORR XP - 25+ Years of Engineering Excellence</title>
        <meta
          name="description"
          content="Learn about CORR XP's journey as India's leading corrosion protection and concrete rehabilitation specialists. 25+ years of protecting critical infrastructure."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1920&q=80)',
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
              Our Story
            </span>
            <h1 className="text-warm-white text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              25+ Years of{' '}
              <span className="text-primary">Engineering Excellence</span>
            </h1>
            <p className="text-xl text-warm-white/85 max-w-2xl leading-relaxed">
              From a small team with a big vision to India's premier corrosion engineering 
              specialists, our journey is built on expertise, innovation, and unwavering 
              commitment to protecting critical infrastructure.
            </p>
          </motion.div>
        </div>

        {/* Floating stats */}
        <div className="absolute bottom-0 left-0 right-0 translate-y-1/2 z-20 hidden md:block">
          <div className="container-custom">
            <div className="bg-warm-white rounded shadow-custom-xl p-8 grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: 25, suffix: '+', label: 'Years Experience' },
                { value: 500, suffix: '+', label: 'Projects Completed' },
                { value: 150, suffix: '+', label: 'Expert Engineers' },
                { value: 98, suffix: '%', label: 'Client Satisfaction' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
                    <CountUpNumber end={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-charcoal/60 text-sm font-medium">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Stats */}
      <section className="bg-slate py-12 md:hidden">
        <div className="container-custom">
          <div className="grid grid-cols-2 gap-6">
            {[
              { value: 25, suffix: '+', label: 'Years Experience' },
              { value: 500, suffix: '+', label: 'Projects Completed' },
              { value: 150, suffix: '+', label: 'Expert Engineers' },
              { value: 98, suffix: '%', label: 'Client Satisfaction' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">
                  <CountUpNumber end={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-warm-white/60 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="bg-warm-white section-padding md:pt-40">
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
                <div className="absolute -bottom-8 -right-8 bg-primary p-8 rounded shadow-custom-xl max-w-[220px] hidden md:block">
                  <div className="text-4xl font-bold text-primary-foreground mb-2">1999</div>
                  <div className="text-primary-foreground/80 text-sm">Year Founded</div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <span className="font-script text-accent text-lg mb-2 block">Who We Are</span>
              <h2 className="text-charcoal mb-6">
                Building Trust Through{' '}
                <span className="text-primary">Engineering Excellence</span>
              </h2>
              <div className="space-y-4 text-charcoal/75">
                <p className="text-lg leading-relaxed">
                  Founded in 1999, CORR XP has grown from a small consulting firm into 
                  India's most trusted name in corrosion engineering and concrete rehabilitation.
                </p>
                <p className="leading-relaxed">
                  Our journey began with a simple yet powerful vision: to protect India's 
                  critical infrastructure from the silent threat of corrosion. Today, we've 
                  completed over 500 projects across industries, from oil refineries to 
                  transportation networks.
                </p>
                <p className="leading-relaxed">
                  What sets us apart is our unwavering commitment to scientific rigor, 
                  innovative solutions, and client partnership. We don't just fix problems — 
                  we engineer lasting solutions that extend asset lifecycles and deliver 
                  measurable ROI.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mt-8">
                {['ISO 9001 Certified', 'NACE Specialists', 'Pan-India Presence', '24/7 Support'].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm font-medium text-charcoal/80">{item}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-slate section-padding">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <span className="font-script text-primary text-lg mb-2 block">Our Foundation</span>
            <h2 className="text-warm-white mb-4">Core Values That Guide Us</h2>
            <p className="text-warm-white/70 max-w-2xl mx-auto">
              These principles define who we are and how we approach every project and partnership.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <AnimatedSection key={value.title} delay={index * 0.1}>
                <div className="bg-slate-light/50 p-8 rounded h-full group hover:bg-slate-light transition-colors duration-300">
                  <div className="w-14 h-14 bg-primary/10 rounded flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <value.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-warm-white text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-warm-white/60 text-sm leading-relaxed">{value.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="bg-warm-white section-padding">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <span className="font-script text-accent text-lg mb-2 block">Our Journey</span>
            <h2 className="text-charcoal mb-4">Milestones That Define Us</h2>
          </AnimatedSection>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border hidden lg:block" />

            <div className="space-y-12 lg:space-y-0">
              {milestones.map((milestone, index) => (
                <AnimatedSection
                  key={milestone.year}
                  delay={index * 0.1}
                  className={`lg:flex lg:items-center lg:mb-12 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} lg:gap-8`}
                >
                  <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:text-right lg:pr-12' : 'lg:pl-12'}`}>
                    <div className="bg-warm-white-dark p-6 rounded shadow-custom-sm">
                      <span className="text-3xl font-bold text-primary">{milestone.year}</span>
                      <h3 className="text-xl font-semibold text-charcoal mt-2 mb-2">{milestone.title}</h3>
                      <p className="text-charcoal/60">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="hidden lg:flex items-center justify-center w-4 h-4 bg-primary rounded-full relative z-10" />
                  <div className="lg:w-1/2" />
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-warm-white-dark section-padding">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <span className="font-script text-accent text-lg mb-2 block">Our People</span>
            <h2 className="text-charcoal mb-4">Leadership Team</h2>
            <p className="text-charcoal/70 max-w-2xl mx-auto">
              Meet the experienced professionals who guide our vision and ensure excellence in every project.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <AnimatedSection key={member.name} delay={index * 0.1}>
                <div className="bg-warm-white rounded overflow-hidden shadow-custom-sm hover:shadow-custom-lg transition-shadow duration-300 group">
                  <div className="aspect-[4/5] overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-charcoal">{member.name}</h3>
                    <p className="text-primary font-medium text-sm mb-2">{member.role}</p>
                    <p className="text-charcoal/60 text-sm">{member.description}</p>
                  </div>
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
            <div className="text-center lg:text-left">
              <h2 className="text-primary-foreground text-3xl md:text-4xl font-bold mb-2">
                Ready to Work With Us?
              </h2>
              <p className="text-primary-foreground/80 text-lg">
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
