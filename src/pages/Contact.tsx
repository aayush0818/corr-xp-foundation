import { useState } from 'react';
import { Button } from '@/components/ui/button';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { Mail, Phone, MapPin, Clock, Send, ArrowRight, Building2, CheckCircle2 } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { useToast } from '@/hooks/use-toast';
import { motion } from 'framer-motion';

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: 'Message Sent Successfully!',
      description: "Thank you for contacting us. Our team will get back to you within 24 hours.",
    });

    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      service: '',
      message: '',
    });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email Us',
      value: 'info@corrxp.com',
      href: 'mailto:info@corrxp.com',
    },
    {
      icon: Phone,
      label: 'Call Us',
      value: '+91 22 1234 5678',
      href: 'tel:+912212345678',
    },
    {
      icon: MapPin,
      label: 'Visit Us',
      value: 'Nariman Point, Mumbai 400021',
      href: null,
    },
    {
      icon: Clock,
      label: 'Working Hours',
      value: 'Mon - Sat: 9:00 AM - 6:00 PM',
      href: null,
    },
  ];

  const services = [
    'Corrosion Assessment',
    'Concrete Repair & Restoration',
    'Protective Coatings',
    'Structural Analysis',
    'Quality Assurance & Testing',
    'Consulting Services',
    'Other',
  ];

  const reasons = [
    'Free initial consultation',
    'Response within 24 hours',
    'Customized solutions',
    'Expert engineering team',
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us | CORR XP - Get in Touch With Our Experts</title>
        <meta
          name="description"
          content="Contact CORR XP for corrosion protection and concrete rehabilitation services. Get a free consultation and discuss your infrastructure protection needs."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80)',
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
              Get in Touch
            </span>
            <h1 className="text-warm-white text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Let's Discuss{' '}
              <span className="text-primary">Your Project</span>
            </h1>
            <p className="text-xl text-warm-white/85 max-w-2xl leading-relaxed">
              Whether you need a consultation, quote, or have questions about our services, 
              our team of experts is ready to help you protect your infrastructure.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Bar */}
      <section className="bg-slate py-8">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <AnimatedSection key={info.label} delay={index * 0.1}>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-warm-white/60 text-sm">{info.label}</p>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-warm-white font-medium hover:text-primary transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-warm-white font-medium">{info.value}</p>
                    )}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="bg-warm-white section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <AnimatedSection className="lg:col-span-2">
              <div className="bg-warm-white p-8 md:p-10 rounded shadow-custom-lg border border-border">
                <div className="mb-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-charcoal mb-2">Send Us a Message</h2>
                  <p className="text-charcoal/60">Fill out the form below and we'll get back to you shortly.</p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-charcoal mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded border border-border bg-warm-white text-charcoal placeholder:text-charcoal/40 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-charcoal mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded border border-border bg-warm-white text-charcoal placeholder:text-charcoal/40 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-charcoal mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded border border-border bg-warm-white text-charcoal placeholder:text-charcoal/40 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-semibold text-charcoal mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded border border-border bg-warm-white text-charcoal placeholder:text-charcoal/40 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder="Your company"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-semibold text-charcoal mb-2">
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded border border-border bg-warm-white text-charcoal focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-charcoal mb-2">
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded border border-border bg-warm-white text-charcoal placeholder:text-charcoal/40 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                      placeholder="Tell us about your project, requirements, or any questions you have..."
                    />
                  </div>
                  <Button variant="hero" type="submit" disabled={isSubmitting} size="lg" className="w-full md:w-auto">
                    {isSubmitting ? (
                      'Sending...'
                    ) : (
                      <>
                        Send Message
                        <Send size={18} className="ml-2" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </AnimatedSection>

            {/* Sidebar */}
            <AnimatedSection delay={0.2}>
              <div className="space-y-8">
                {/* Why Contact Us */}
                <div className="bg-slate p-8 rounded">
                  <h3 className="text-xl font-bold text-warm-white mb-6">Why Contact Us?</h3>
                  <div className="space-y-4">
                    {reasons.map((reason) => (
                      <div key={reason} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-warm-white/80">{reason}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Office Info */}
                <div className="bg-warm-white-dark p-8 rounded border border-border">
                  <div className="flex items-center gap-3 mb-6">
                    <Building2 className="w-6 h-6 text-primary" />
                    <h3 className="text-xl font-bold text-charcoal">Head Office</h3>
                  </div>
                  <address className="not-italic text-charcoal/70 space-y-2 mb-6">
                    <p>CORR XP Engineering Pvt. Ltd.</p>
                    <p>Floor 12, Trade Tower</p>
                    <p>Nariman Point</p>
                    <p>Mumbai, Maharashtra 400021</p>
                    <p>India</p>
                  </address>
                  <a 
                    href="https://maps.google.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
                  >
                    Get Directions
                    <ArrowRight size={16} />
                  </a>
                </div>

                {/* Map */}
                <div className="aspect-[4/3] rounded overflow-hidden shadow-custom-sm">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.2156903538244!2d72.82259!3d18.925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDU1JzMwLjAiTiA3MsKwNDknMjEuMyJF!5e0!3m2!1sen!2sin!4v1677157439054!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="CORR XP Office Location"
                  />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
