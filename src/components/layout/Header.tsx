import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, Download, ChevronRight, Facebook, Twitter, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '@/assets/logo.png';

const leftNavItems = [
  { name: 'Home', path: '/' },
  { name: 'Who We Are', path: '/about' },
  { name: 'What We Do', path: '/services' },
];

const rightNavItems = [
  { name: 'Projects', path: '/projects' },
  { name: 'Contact Us', path: '/contact' },
];

const allNavItems = [...leftNavItems, ...rightNavItems];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      {/* Desktop Header */}
      <header
        className={`hidden lg:block fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-warm-white shadow-custom-lg'
            : 'bg-slate backdrop-blur-sm'
        }`}
      >
        {/* Top Row: Contact | Logo | CTAs + Social - Hidden when scrolled */}
        <div className={`overflow-hidden transition-all duration-300 ${isScrolled ? 'max-h-0 opacity-0' : 'max-h-20 opacity-100'}`}>
          <div className="border-b border-warm-white/10">
            <div className="container-custom">
              <div className="flex items-center justify-between py-3">
                {/* Left: Contact Info */}
                <div className="flex items-center gap-6">
                  <a href="tel:+919988252531" className="flex items-center gap-2 text-warm-white/70 hover:text-primary transition-colors text-sm">
                    <Phone size={14} />
                    <span>+91 99 88 2525 31</span>
                  </a>
                  <a href="mailto:corrxp@gmail.com" className="flex items-center gap-2 text-warm-white/70 hover:text-primary transition-colors text-sm">
                    <Mail size={14} />
                    <span>corrxp@gmail.com</span>
                  </a>
                </div>

                {/* Right: CTAs + Social */}
                <div className="flex items-center gap-4">
                  <Link to="/contact">
                    <Button variant="ghost" size="sm" className="text-warm-white/80 hover:text-warm-white hover:bg-warm-white/10 text-sm">
                      <span>Inquire Now</span>
                    </Button>
                  </Link>
                  <a 
                    href="/brochure.pdf" 
                    className="flex items-center gap-2 text-primary hover:text-rust-light transition-colors font-medium text-sm bg-primary/10 px-4 py-2 rounded"
                  >
                    <Download size={14} />
                    <span>Download Brochure</span>
                  </a>
                  <div className="flex items-center gap-1 ml-2 pl-4 border-l border-warm-white/20">
                    <span className="text-warm-white/50 text-xs mr-2">Follow us:</span>
                    <a href="#" className="p-1.5 text-warm-white/60 hover:text-primary transition-colors">
                      <Facebook size={16} />
                    </a>
                    <a href="#" className="p-1.5 text-warm-white/60 hover:text-primary transition-colors">
                      <Twitter size={16} />
                    </a>
                    <a href="#" className="p-1.5 text-warm-white/60 hover:text-primary transition-colors">
                      <Linkedin size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Nav Row: Split Navigation with Centered Logo */}
        <div className={`transition-all duration-300 ${isScrolled ? 'border-b border-slate/10' : ''}`}>
          <div className="container-custom">
            <div className={`flex items-center justify-center transition-all duration-300 ${isScrolled ? 'py-2' : 'py-3'}`}>
              {/* Left Navigation */}
              <nav className="flex items-center">
                {leftNavItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`px-6 py-2 text-sm font-medium uppercase tracking-wider relative group ${
                      location.pathname === item.path
                        ? 'text-primary'
                        : isScrolled 
                          ? 'text-slate-dark/80 hover:text-slate-dark'
                          : 'text-warm-white/80 hover:text-warm-white'
                    }`}
                  >
                    {item.name}
                    <span
                      className={`absolute bottom-0 left-6 right-6 h-0.5 bg-primary transform origin-left transition-transform duration-300 ${
                        location.pathname === item.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                      }`}
                    />
                  </Link>
                ))}
              </nav>

              {/* Center: Logo */}
              <Link to="/" className="mx-8 flex items-center">
                <img 
                  src={logo} 
                  alt="CORR XP Logo" 
                  className={`transition-all duration-300 ${isScrolled ? 'h-16' : 'h-24'}`}
                />
              </Link>

              {/* Right Navigation */}
              <nav className="flex items-center">
                {rightNavItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`px-6 py-2 text-sm font-medium uppercase tracking-wider relative group ${
                      location.pathname === item.path
                        ? 'text-primary'
                        : isScrolled 
                          ? 'text-slate-dark/80 hover:text-slate-dark'
                          : 'text-warm-white/80 hover:text-warm-white'
                    }`}
                  >
                    {item.name}
                    <span
                      className={`absolute bottom-0 left-6 right-6 h-0.5 bg-primary transform origin-left transition-transform duration-300 ${
                        location.pathname === item.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                      }`}
                    />
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Header - Completely Separate */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-slate shadow-custom-md">
        <div className="container-custom flex items-center justify-between py-3">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src={logo} 
              alt="CORR XP Logo" 
              className="h-10"
            />
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="p-2 rounded-md transition-colors text-warm-white hover:bg-warm-white/10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-slate-dark border-t border-warm-white/10"
            >
              <nav className="container-custom py-6 flex flex-col gap-1">
                {allNavItems.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      to={item.path}
                      className={`flex items-center justify-between px-4 py-3 text-base font-medium rounded-md transition-colors ${
                        location.pathname === item.path
                          ? 'text-primary bg-warm-white/5'
                          : 'text-warm-white/80 hover:text-warm-white hover:bg-warm-white/5'
                      }`}
                    >
                      {item.name}
                      <ChevronRight size={16} className="opacity-50" />
                    </Link>
                  </motion.div>
                ))}
                
                {/* Mobile contact info */}
                <div className="mt-4 pt-4 border-t border-warm-white/10 space-y-3">
                  <a 
                    href="tel:+919900387360" 
                    className="flex items-center gap-3 px-4 py-2 text-warm-white/70 hover:text-primary transition-colors"
                  >
                    <Phone size={16} />
                    <span>+91 9900387360</span>
                  </a>
                  <a 
                    href="mailto:corrxp@gmail.com" 
                    className="flex items-center gap-3 px-4 py-2 text-warm-white/70 hover:text-primary transition-colors"
                  >
                    <Mail size={16} />
                    <span>corrxp@gmail.com</span>
                  </a>
                </div>

                {/* Social Links */}
                <div className="mt-4 pt-4 border-t border-warm-white/10 flex items-center gap-4 px-4">
                  <span className="text-warm-white/50 text-sm">Follow us:</span>
                  <a href="#" className="p-2 text-warm-white/60 hover:text-primary transition-colors">
                    <Facebook size={20} />
                  </a>
                  <a href="#" className="p-2 text-warm-white/60 hover:text-primary transition-colors">
                    <Twitter size={20} />
                  </a>
                  <a href="#" className="p-2 text-warm-white/60 hover:text-primary transition-colors">
                    <Linkedin size={20} />
                  </a>
                </div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: allNavItems.length * 0.05 }}
                  className="mt-4 pt-4 border-t border-warm-white/10"
                >
                  <Link to="/contact">
                    <Button variant="hero" className="w-full">
                      <span>Get a Free Quote</span>
                      <ChevronRight size={16} className="ml-1" />
                    </Button>
                  </Link>
                </motion.div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Header;