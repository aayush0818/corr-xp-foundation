import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, Download, ChevronRight, Facebook, Twitter, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

const leftNavItems = [
  { name: 'Home', path: '/' },
  { name: 'Who We Are', path: '/about' },
  { name: 'What We Do', path: '/services' },
];

const rightNavItems = [
  { name: 'Projects', path: '/projects' },
  { name: 'News & Media', path: '/news' },
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
      {/* Two-Row Header Structure */}
      <header
        className={`fixed lg:sticky top-0 left-0 right-0 z-50 transition-all duration-400 ${
          isScrolled
            ? 'bg-slate-dark backdrop-blur-md shadow-custom-lg'
            : 'bg-slate backdrop-blur-sm'
        }`}
      >
        {/* Top Row: Contact | Logo | CTAs + Social */}
        <div className="hidden lg:block border-b border-warm-white/10">
          <div className="container-custom">
            <div className="flex items-center justify-between py-3">
              {/* Left: Contact Info */}
              <div className="flex items-center gap-6">
                <a href="tel:+1234567890" className="flex items-center gap-2 text-warm-white/70 hover:text-primary transition-colors text-sm">
                  <Phone size={14} />
                  <span>022-2580 1080</span>
                </a>
                <a href="mailto:info@corrxp.com" className="flex items-center gap-2 text-warm-white/70 hover:text-primary transition-colors text-sm">
                  <Mail size={14} />
                  <span>info@corrxp.com</span>
                </a>
              </div>

              {/* Center: Logo */}
              <Link to="/" className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2 group">
                <div className="flex flex-col items-center">
                  <div className="flex items-baseline">
                    <span className="text-2xl font-bold text-warm-white tracking-tight">
                      CORR
                    </span>
                    <span className="text-2xl font-bold text-primary ml-1">XP</span>
                  </div>
                  <span className="text-[10px] text-warm-white/50 tracking-widest uppercase">Engineering Solutions</span>
                </div>
              </Link>

              {/* Right: CTAs + Social */}
              <div className="flex items-center gap-4">
                <Button variant="ghost" size="sm" className="text-warm-white/80 hover:text-warm-white hover:bg-warm-white/10 text-sm" asChild>
                  <Link to="/contact">Inquire Now</Link>
                </Button>
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

        {/* Bottom Row: Split Navigation */}
        <div className="hidden lg:block">
          <div className="container-custom">
            <div className="flex items-center justify-center py-2">
              {/* Left Navigation */}
              <nav className="flex items-center">
                {leftNavItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`px-6 py-3 text-sm font-medium uppercase tracking-wider transition-all duration-300 relative group ${
                      location.pathname === item.path
                        ? 'text-primary'
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

              {/* Center Spacer for Logo alignment */}
              <div className="w-48" />

              {/* Right Navigation */}
              <nav className="flex items-center">
                {rightNavItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`px-6 py-3 text-sm font-medium uppercase tracking-wider transition-all duration-300 relative group ${
                      location.pathname === item.path
                        ? 'text-primary'
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

        {/* Mobile Header */}
        <div className="lg:hidden">
          <div className="container-custom flex items-center justify-between py-3">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <div className="flex items-baseline">
                <span className="text-xl font-bold text-warm-white tracking-tight">
                  CORR
                </span>
                <span className="text-xl font-bold text-primary ml-1">XP</span>
              </div>
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="text-warm-white p-2 hover:bg-warm-white/10 rounded-md transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-slate-dark/98 backdrop-blur-md border-t border-warm-white/10"
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
                    href="tel:+1234567890" 
                    className="flex items-center gap-3 px-4 py-2 text-warm-white/70 hover:text-primary transition-colors"
                  >
                    <Phone size={16} />
                    <span>022-2580 1080</span>
                  </a>
                  <a 
                    href="mailto:info@corrxp.com" 
                    className="flex items-center gap-3 px-4 py-2 text-warm-white/70 hover:text-primary transition-colors"
                  >
                    <Mail size={16} />
                    <span>info@corrxp.com</span>
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
                  <Button variant="hero" className="w-full" asChild>
                    <Link to="/contact">
                      Get a Free Quote
                      <ChevronRight size={16} className="ml-1" />
                    </Link>
                  </Button>
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