import { useState } from 'react';
import { Button } from '@/components/ui/button';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { Mail, Phone, MapPin, Clock, Send, Building2, CheckCircle2, MessageSquare } from 'lucide-react';
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

    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: 'Message Sent!',
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
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
    { icon: Mail, label: 'Email', value: 'corrxp@gmail.com', href: 'mailto:corrxp@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+91 99 88 2525 31', href: 'tel:+919988252531' },
    { icon: MapPin, label: 'Address', value: 'Kharghar, Navi Mumbai', href: null },
    { icon: Clock, label: 'Hours', value: 'Mon - Sat: 9AM - 6PM', href: null },
  ];

  const services = [
    'Structural Repair & Rehabilitation',
    'Concrete Repair & Protection',
    'Corrosion Control Solutions',
    'Steel Coating & Protection',
    'Fiber Wrapping (FRP)',
    'Structural Retrofitting',
    'Corrosion Assessment & Testing',
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
          content="Contact CORR XP for corrosion protection and concrete rehabilitation services. Get a free consultation."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-slate overflow-hidden">
        {/* Abstract background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-dark via-slate to-slate" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute top-1/4 left-0 w-64 h-64 bg-accent/5 rounded-full blur-2xl" />
          <div className="absolute inset-0 pattern-dots opacity-30" />
        </div>
        
        <div className="container-custom relative z-10 pt-32 pb-16 lg:pt-40 lg:pb-20">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
                <MessageSquare className="w-4 h-4 text-primary" />
                <span className="text-primary text-sm font-medium">Get in Touch</span>
              </div>
              
              <h1 className="text-warm-white text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Let's Discuss{' '}
                <span className="text-primary">Your Project</span>
              </h1>
              
              <p className="text-lg text-warm-white/80 max-w-2xl leading-relaxed">
                Whether you need a consultation, quote, or have questions about our services, 
                our team of experts is ready to help.
              </p>
            </motion.div>
          </div>

          {/* Contact info row */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-warm-white/10"
          >
            {contactInfo.map((info) => (
              <div key={info.label} className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded flex items-center justify-center flex-shrink-0">
                  <info.icon className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-warm-white/60 text-xs">{info.label}</p>
                  {info.href ? (
                    <a href={info.href} className="text-warm-white text-sm font-medium hover:text-primary transition-colors">
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-warm-white text-sm font-medium">{info.value}</p>
                  )}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="bg-warm-white section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Contact Form */}
            <AnimatedSection className="lg:col-span-2">
              <div className="bg-warm-white p-6 md:p-8 rounded shadow-custom-lg border border-border">
                <div className="mb-6">
                  <h2 className="text-xl md:text-2xl font-bold text-charcoal mb-1">Send Us a Message</h2>
                  <p className="text-charcoal/60 text-sm">We'll get back to you within 24 hours.</p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2.5 rounded border border-border bg-warm-white text-charcoal placeholder:text-charcoal/40 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2.5 rounded border border-border bg-warm-white text-charcoal placeholder:text-charcoal/40 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
                        placeholder="you@email.com"
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-charcoal mb-1.5">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded border border-border bg-warm-white text-charcoal placeholder:text-charcoal/40 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-charcoal mb-1.5">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded border border-border bg-warm-white text-charcoal placeholder:text-charcoal/40 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
                        placeholder="Your company"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-charcoal mb-1.5">
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded border border-border bg-warm-white text-charcoal focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-1.5">
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-2.5 rounded border border-border bg-warm-white text-charcoal placeholder:text-charcoal/40 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none text-sm"
                      placeholder="Tell us about your project..."
                    />
                  </div>
                  <Button variant="hero" type="submit" disabled={isSubmitting} size="lg">
                    {isSubmitting ? 'Sending...' : (
                      <>
                        Send Message
                        <Send size={16} className="ml-2" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </AnimatedSection>

            {/* Sidebar */}
            <AnimatedSection delay={0.2}>
              <div className="space-y-6">
                {/* Why Contact Us */}
                <div className="bg-slate p-6 rounded">
                  <h3 className="text-lg font-bold text-warm-white mb-4">Why Contact Us?</h3>
                  <div className="space-y-3">
                    {reasons.map((reason) => (
                      <div key={reason} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-warm-white/80 text-sm">{reason}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Office Info */}
                <div className="bg-warm-white-dark p-6 rounded border border-border">
                  <div className="flex items-center gap-2 mb-4">
                    <Building2 className="w-5 h-5 text-primary" />
                    <h3 className="text-lg font-bold text-charcoal">Office</h3>
                  </div>
                  <address className="not-italic text-charcoal/70 text-sm space-y-1">
                    <p className="font-medium text-charcoal">Corrxp India Services</p>
                    <p>A-1201, Chaturbhuj CHS</p>
                    <p>Shilp Chowk, Sec 21</p>
                    <p>Kharghar 410210</p>
                    <p>MH, India</p>
                  </address>
                </div>

                {/* Map */}
                <div className="aspect-[4/3] rounded overflow-hidden border border-border">
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