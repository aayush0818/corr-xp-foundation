import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-dark text-warm-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <span className="text-2xl font-bold tracking-tight">
                CORR <span className="text-primary">XP</span>
              </span>
            </Link>
            <p className="text-warm-white/70 mb-6 max-w-md leading-relaxed">
              Corrosion Concrete Strategist — delivering innovative solutions for 
              infrastructure protection and rehabilitation across industries.
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:info@corrxp.com"
                className="flex items-center gap-3 text-warm-white/70 hover:text-primary transition-colors"
              >
                <Mail size={18} />
                <span>info@corrxp.com</span>
              </a>
              <a
                href="tel:+1234567890"
                className="flex items-center gap-3 text-warm-white/70 hover:text-primary transition-colors"
              >
                <Phone size={18} />
                <span>+1 (234) 567-890</span>
              </a>
              <div className="flex items-start gap-3 text-warm-white/70">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span>123 Engineering Drive, Suite 100<br />New York, NY 10001</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-warm-white">Quick Links</h4>
            <nav className="flex flex-col gap-3">
              <Link to="/" className="text-warm-white/70 hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-warm-white/70 hover:text-primary transition-colors">
                About Us
              </Link>
              <Link to="/services" className="text-warm-white/70 hover:text-primary transition-colors">
                What We Do
              </Link>
              <Link to="/projects" className="text-warm-white/70 hover:text-primary transition-colors">
                Projects
              </Link>
              <Link to="/news" className="text-warm-white/70 hover:text-primary transition-colors">
                News & Media
              </Link>
              <Link to="/contact" className="text-warm-white/70 hover:text-primary transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-warm-white">Services</h4>
            <nav className="flex flex-col gap-3">
              <Link to="/services" className="text-warm-white/70 hover:text-primary transition-colors">
                Corrosion Assessment
              </Link>
              <Link to="/services" className="text-warm-white/70 hover:text-primary transition-colors">
                Concrete Repair
              </Link>
              <Link to="/services" className="text-warm-white/70 hover:text-primary transition-colors">
                Protective Coatings
              </Link>
              <Link to="/services" className="text-warm-white/70 hover:text-primary transition-colors">
                Structural Analysis
              </Link>
              <Link to="/services" className="text-warm-white/70 hover:text-primary transition-colors">
                Consulting
              </Link>
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-warm-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-warm-white/50 text-sm">
            © {currentYear} CORR XP. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link to="/privacy" className="text-warm-white/50 hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-warm-white/50 hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
