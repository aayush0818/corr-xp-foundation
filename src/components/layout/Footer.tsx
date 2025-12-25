import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowRight, Linkedin, Twitter, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import logo from '@/assets/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    setEmail('');
  };

  return (
    <footer className="bg-slate-dark text-warm-white">
      {/* Newsletter Section */}
      <div className="border-b border-warm-white/10">
        <div className="container-custom section-padding-sm">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
              <p className="text-warm-white/60">Get the latest insights on corrosion engineering and industry news.</p>
            </div>
            <form onSubmit={handleNewsletterSubmit} className="flex w-full lg:w-auto gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 lg:w-80 px-4 py-3 bg-warm-white/5 border border-warm-white/10 rounded text-warm-white placeholder:text-warm-white/40 focus:outline-none focus:border-primary transition-colors"
                required
              />
              <Button type="submit" variant="hero">
                Subscribe
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Company Info */}
          <div className="lg:col-span-4">
            <Link to="/" className="inline-block mb-6">
              <img src={logo} alt="CORR XP Logo" className="h-14" />
            </Link>
            <p className="text-warm-white/60 mb-6 leading-relaxed">
              Specialized structural repair, rehabilitation, protection, and retrofitting 
              contractor providing advanced solutions for concrete and steel structures.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href="mailto:corrxp@gmail.com"
                className="flex items-center gap-3 text-warm-white/60 hover:text-primary transition-colors"
              >
                <Mail size={16} className="flex-shrink-0" />
                <span>corrxp@gmail.com</span>
              </a>
              <a
                href="tel:+919900387360"
                className="flex items-center gap-3 text-warm-white/60 hover:text-primary transition-colors"
              >
                <Phone size={16} className="flex-shrink-0" />
                <span>+91 9900387360</span>
              </a>
              <div className="flex items-start gap-3 text-warm-white/60">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>A-1201, Chaturbhuj CHS, Shilp Chowk,<br />Khargar, Sec 21, Navi Mumbai 410210</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              <a 
                href="#" 
                className="w-10 h-10 bg-warm-white/5 hover:bg-primary rounded flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-warm-white/5 hover:bg-primary rounded flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-warm-white/5 hover:bg-primary rounded flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold mb-6 uppercase tracking-wider text-warm-white/80">Company</h4>
            <nav className="flex flex-col gap-3">
              <Link to="/" className="text-warm-white/60 hover:text-primary transition-colors text-sm">
                Home
              </Link>
              <Link to="/about" className="text-warm-white/60 hover:text-primary transition-colors text-sm">
                About Us
              </Link>
              <Link to="/services" className="text-warm-white/60 hover:text-primary transition-colors text-sm">
                What We Do
              </Link>
              <Link to="/projects" className="text-warm-white/60 hover:text-primary transition-colors text-sm">
                Projects
              </Link>
              <Link to="/news" className="text-warm-white/60 hover:text-primary transition-colors text-sm">
                News & Media
              </Link>
              <Link to="/contact" className="text-warm-white/60 hover:text-primary transition-colors text-sm">
                Contact
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-semibold mb-6 uppercase tracking-wider text-warm-white/80">Services</h4>
            <nav className="flex flex-col gap-3">
              <Link to="/services" className="text-warm-white/60 hover:text-primary transition-colors text-sm">
                Corrosion Assessment
              </Link>
              <Link to="/services" className="text-warm-white/60 hover:text-primary transition-colors text-sm">
                Concrete Rehabilitation
              </Link>
              <Link to="/services" className="text-warm-white/60 hover:text-primary transition-colors text-sm">
                Protective Coatings
              </Link>
              <Link to="/services" className="text-warm-white/60 hover:text-primary transition-colors text-sm">
                Structural Analysis
              </Link>
              <Link to="/services" className="text-warm-white/60 hover:text-primary transition-colors text-sm">
                Quality Assurance
              </Link>
              <Link to="/services" className="text-warm-white/60 hover:text-primary transition-colors text-sm">
                Technical Consulting
              </Link>
            </nav>
          </div>

          {/* Certifications & Partners */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-semibold mb-6 uppercase tracking-wider text-warm-white/80">Certifications</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-warm-white/60">
                <div className="w-12 h-12 bg-warm-white/5 rounded flex items-center justify-center text-xs font-bold">
                  ISO
                </div>
                <div>
                  <div className="text-warm-white text-sm font-medium">ISO 9001:2015</div>
                  <div className="text-xs">Quality Management</div>
                </div>
              </div>
              <div className="flex items-center gap-3 text-warm-white/60">
                <div className="w-12 h-12 bg-warm-white/5 rounded flex items-center justify-center text-xs font-bold">
                  ISO
                </div>
                <div>
                  <div className="text-warm-white text-sm font-medium">ISO 14001:2015</div>
                  <div className="text-xs">Environmental Management</div>
                </div>
              </div>
              <div className="flex items-center gap-3 text-warm-white/60">
                <div className="w-12 h-12 bg-warm-white/5 rounded flex items-center justify-center text-xs font-bold">
                  NACE
                </div>
                <div>
                  <div className="text-warm-white text-sm font-medium">NACE Certified</div>
                  <div className="text-xs">Corrosion Specialists</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-warm-white/10">
        <div className="container-custom py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-warm-white/40 text-sm">
            © {currentYear} CORR XP. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link to="/about" className="text-warm-white/40 hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/about" className="text-warm-white/40 hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link to="/about" className="text-warm-white/40 hover:text-primary transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;