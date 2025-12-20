import { useState } from 'react';
import { Button } from '@/components/ui/button';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { useToast } from '@/hooks/use-toast';

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
      title: 'Message Sent!',
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });

    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      message: '',
    });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'info@corrxp.com',
      href: 'mailto:info@corrxp.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (234) 567-890',
      href: 'tel:+1234567890',
    },
    {
      icon: MapPin,
      label: 'Address',
      value: '123 Engineering Drive, Suite 100\nNew York, NY 10001',
      href: null,
    },
    {
      icon: Clock,
      label: 'Business Hours',
      value: 'Monday - Friday: 8:00 AM - 6:00 PM',
      href: null,
    },
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
      <section className="bg-slate pt-32 pb-20">
        <div className="container-custom">
          <AnimatedSection>
            <span className="text-primary font-medium mb-2 block">Contact Us</span>
            <h1 className="text-warm-white mb-6 max-w-3xl">
              Let's Discuss Your Project
            </h1>
            <p className="text-xl text-warm-white/80 max-w-2xl">
              Whether you need a consultation, quote, or have questions about our services, 
              our team is ready to help.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="bg-warm-white section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <AnimatedSection className="lg:col-span-2">
              <div className="bg-warm-white p-8 rounded-lg border border-border shadow-custom-sm">
                <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-md border border-border bg-warm-white text-charcoal placeholder:text-charcoal/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-md border border-border bg-warm-white text-charcoal placeholder:text-charcoal/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-charcoal mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-md border border-border bg-warm-white text-charcoal placeholder:text-charcoal/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="+1 (234) 567-890"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-charcoal mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-md border border-border bg-warm-white text-charcoal placeholder:text-charcoal/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Your Company"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-md border border-border bg-warm-white text-charcoal placeholder:text-charcoal/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                      placeholder="Tell us about your project or inquiry..."
                    />
                  </div>
                  <Button variant="hero" type="submit" disabled={isSubmitting} className="w-full md:w-auto">
                    {isSubmitting ? (
                      'Sending...'
                    ) : (
                      <>
                        Send Message
                        <Send size={18} />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </AnimatedSection>

            {/* Contact Info */}
            <AnimatedSection delay={0.2}>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
                  <div className="space-y-6">
                    {contactInfo.map((info) => (
                      <div key={info.label} className="flex gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <info.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm text-charcoal/60 mb-1">{info.label}</p>
                          {info.href ? (
                            <a
                              href={info.href}
                              className="text-charcoal hover:text-primary transition-colors whitespace-pre-line"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-charcoal whitespace-pre-line">{info.value}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Map Placeholder */}
                <div className="aspect-square rounded-lg overflow-hidden bg-warm-white-dark">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.00425878428698!3d40.74076794379132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c1654f3%3A0xc80f9cfce5383d5d!2sGoogle%20New%20York!5e0!3m2!1sen!2sus!4v1677157439054!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: 'grayscale(0.3)' }}
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
