import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import AnimatedSection from '@/components/ui/AnimatedSection';
import CountUpNumber from '@/components/ui/CountUpNumber';
import { ArrowRight, Target, Eye, Award, Users, CheckCircle } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const AboutPage = () => {
  const values = [
    {
      icon: Target,
      title: 'Precision Engineering',
      description: 'We approach every project with meticulous attention to detail and scientific rigor.',
    },
    {
      icon: Eye,
      title: 'Innovation First',
      description: 'Constantly evolving our methods and technologies to deliver superior solutions.',
    },
    {
      icon: Award,
      title: 'Quality Commitment',
      description: 'Unwavering dedication to excellence in every aspect of our work.',
    },
    {
      icon: Users,
      title: 'Client Partnership',
      description: 'Building lasting relationships through trust, transparency, and collaboration.',
    },
  ];

  const milestones = [
    { year: '1999', event: 'Founded in New York with a vision to revolutionize corrosion engineering' },
    { year: '2005', event: 'Expanded operations to cover the entire East Coast' },
    { year: '2010', event: 'Launched proprietary assessment technology platform' },
    { year: '2015', event: 'Achieved ISO 9001:2015 certification for quality management' },
    { year: '2020', event: 'Completed 500th major infrastructure project' },
    { year: '2024', event: 'Expanded international operations to 12 countries' },
  ];

  return (
    <>
      <Helmet>
        <title>About CORR XP | Our Story & Mission</title>
        <meta
          name="description"
          content="Learn about CORR XP's 25+ year journey in corrosion protection and concrete rehabilitation. Meet our expert team and discover our commitment to engineering excellence."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-slate pt-32 pb-20">
        <div className="container-custom">
          <AnimatedSection>
            <span className="text-primary font-medium mb-2 block">About Us</span>
            <h1 className="text-warm-white mb-6 max-w-3xl">
              Engineering Solutions That Stand the Test of Time
            </h1>
            <p className="text-xl text-warm-white/80 max-w-2xl">
              For over 25 years, CORR XP has been the trusted partner for organizations 
              seeking to protect and preserve their critical infrastructure.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Story Section */}
      <section className="bg-warm-white section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <h2 className="mb-6">Our Story</h2>
              <p className="text-charcoal/80 mb-4 leading-relaxed">
                CORR XP was founded in 1999 by a team of visionary engineers who recognized 
                the critical need for specialized corrosion protection and concrete rehabilitation 
                services. What began as a small consultancy has grown into an industry-leading 
                firm serving clients across multiple continents.
              </p>
              <p className="text-charcoal/80 mb-4 leading-relaxed">
                Our journey has been defined by a relentless pursuit of excellence and innovation. 
                We've invested heavily in research and development, proprietary technologies, and 
                the continuous education of our team members.
              </p>
              <p className="text-charcoal/80 leading-relaxed">
                Today, CORR XP stands as a testament to what's possible when expertise meets 
                dedication. We're proud to have contributed to the longevity of countless 
                structures — from iconic bridges to critical industrial facilities.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80"
                  alt="Engineering team collaboration"
                  className="w-full rounded-lg shadow-custom-lg"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-slate section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <AnimatedSection>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                <CountUpNumber end={25} suffix="+" />
              </div>
              <p className="text-warm-white/70">Years Experience</p>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                <CountUpNumber end={500} suffix="+" />
              </div>
              <p className="text-warm-white/70">Projects Completed</p>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                <CountUpNumber end={12} />
              </div>
              <p className="text-warm-white/70">Countries Served</p>
            </AnimatedSection>
            <AnimatedSection delay={0.3}>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                <CountUpNumber end={150} suffix="+" />
              </div>
              <p className="text-warm-white/70">Expert Engineers</p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-warm-white section-padding">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <h2 className="mb-4">Our Core Values</h2>
            <p className="text-charcoal/70 max-w-2xl mx-auto">
              The principles that guide every decision we make and every project we undertake.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <AnimatedSection key={value.title} delay={index * 0.1}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-charcoal/70">{value.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="bg-warm-white-dark section-padding">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <h2 className="mb-4">Our Journey</h2>
            <p className="text-charcoal/70 max-w-2xl mx-auto">
              Key milestones in our path to becoming industry leaders.
            </p>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <AnimatedSection key={milestone.year} delay={index * 0.1}>
                <div className="flex gap-6 mb-8 last:mb-0">
                  <div className="flex-shrink-0 w-20 text-right">
                    <span className="text-primary font-bold text-lg">{milestone.year}</span>
                  </div>
                  <div className="relative flex-1 pl-6 border-l-2 border-primary/20 pb-8 last:pb-0">
                    <div className="absolute -left-[9px] top-1 w-4 h-4 bg-primary rounded-full" />
                    <p className="text-charcoal/80">{milestone.event}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate section-padding">
        <div className="container-custom text-center">
          <AnimatedSection>
            <h2 className="text-warm-white mb-4">Join Us on Our Mission</h2>
            <p className="text-warm-white/80 max-w-2xl mx-auto mb-8">
              Whether you need our expertise for your next project or want to be part of our team, 
              we'd love to hear from you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero" asChild>
                <Link to="/contact">
                  Start a Project
                  <ArrowRight size={18} />
                </Link>
              </Button>
              <Button variant="heroOutline" asChild>
                <Link to="/projects">View Our Work</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
