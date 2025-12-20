import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Phone, Mail, X } from 'lucide-react';

const FloatingContact = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col gap-2 mb-2"
          >
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-[#25D366] text-white px-4 py-3 rounded-lg shadow-custom-lg hover:shadow-custom-xl transition-all hover:-translate-y-0.5"
            >
              <MessageCircle size={20} />
              <span className="text-sm font-medium">WhatsApp</span>
            </a>
            <a
              href="tel:+1234567890"
              className="flex items-center gap-3 bg-slate-dark text-warm-white px-4 py-3 rounded-lg shadow-custom-lg hover:shadow-custom-xl transition-all hover:-translate-y-0.5"
            >
              <Phone size={20} />
              <span className="text-sm font-medium">Call Us</span>
            </a>
            <a
              href="mailto:info@corrxp.com"
              className="flex items-center gap-3 bg-primary text-primary-foreground px-4 py-3 rounded-lg shadow-custom-lg hover:shadow-custom-xl transition-all hover:-translate-y-0.5"
            >
              <Mail size={20} />
              <span className="text-sm font-medium">Email</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-custom-xl transition-colors ${
          isOpen 
            ? 'bg-slate-dark text-warm-white' 
            : 'bg-primary text-primary-foreground'
        }`}
        aria-label={isOpen ? 'Close contact options' : 'Open contact options'}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <X size={24} />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <MessageCircle size={24} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
};

export default FloatingContact;