import { useState } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
import { Hero } from './components/Hero';
import { TrustBuilder } from './components/TrustBuilder';
import { FacultyAndToppers } from './components/FacultyAndToppers';
import { AcademicRegistry } from './components/AcademicRegistry';
import { WhyNST } from './components/WhyNST';
import { Testimonials, UrgencySection } from './components/TrustClosure';
import { Contact, Footer } from './components/ContactFooter';
import { ParticleBackground } from './components/ui/ParticleBackground';
import { MessageCircle, Phone, Menu, X } from 'lucide-react';

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { label: 'Why NST', href: '#why-nst' },
    { label: 'Faculty & Toppers', href: '#faculty-toppers' },
    { label: 'Results', href: '#results' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 px-4 md:px-12 py-3 md:py-6 bg-white/90 backdrop-blur-md border-b border-art-black"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 md:gap-12">
        <a href="#" className="text-2xl md:text-3xl font-black italic uppercase tracking-tighter text-art-black select-none">
          NST.
        </a>
        
        <div className="hidden md:flex flex-1 h-[0.5px] bg-art-black opacity-20"></div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-12">
          {menuItems.map((item) => (
            <a 
              key={item.label} 
              href={item.href} 
              className="art-label text-[10px] hover-strike"
            >
              {item.label}
            </a>
          ))}
          <a href="#contact" className="art-button px-6 h-10 flex items-center justify-center text-[10px]">Enroll</a>
        </div>

        {/* Mobile menu trigger */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden art-border w-10 h-10 flex items-center justify-center hover:bg-neutral-100 transition-colors"
          aria-label={mobileMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {mobileMenuOpen ? <X className="w-5 h-5 text-art-black" /> : <Menu className="w-5 h-5 text-art-black" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-white border-t border-art-black mt-3 -mx-4"
          >
            <div className="px-6 py-6 flex flex-col gap-6">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="art-label text-sm tracking-widest text-art-black block py-2 border-b border-neutral-100 hover:text-art-red transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <a 
                href="#contact" 
                onClick={() => setMobileMenuOpen(false)}
                className="art-button w-full h-12 flex items-center justify-center text-[11px] mt-2"
              >
                Enroll Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

function GlobalFAB() {
  return (
    <div className="fixed bottom-8 right-8 z-[60] flex flex-col gap-2">
      <motion.a 
        href="https://wa.me/919130114477"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ x: -10 }}
        className="h-14 px-6 bg-art-black text-white flex items-center gap-3 shadow-2xl border border-white/20 art-label text-[10px]"
      >
        <MessageCircle className="w-4 h-4 text-emerald-500" />
        WhatsApp
      </motion.a>
      <motion.a 
        href="tel:+919130114477"
        whileHover={{ x: -10 }}
        className="h-14 px-6 bg-art-red text-white flex items-center gap-3 shadow-2xl art-label text-[10px]"
      >
        <Phone className="w-4 h-4" />
        Call Direct
      </motion.a>
    </div>
  );
}

export default function App() {
  const [isRegistryOpen, setIsRegistryOpen] = useState(false);
  const [registryTab, setRegistryTab] = useState('all');

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const handleOpenRegistry = (tab?: string) => {
    setRegistryTab(tab || 'all');
    setIsRegistryOpen(true);
  };

  return (
    <main className="relative selection:bg-art-red selection:text-white">
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-art-red z-[100] origin-left"
        style={{ scaleX }}
      />
      
      <Navbar />
      <GlobalFAB />

      <div>
        <Hero />
        <TrustBuilder />
        <FacultyAndToppers onOpenRegistry={handleOpenRegistry} />
        <WhyNST />
        <Testimonials />
        <UrgencySection />
        <Contact />
        <Footer />
      </div>

      <AcademicRegistry 
        isOpen={isRegistryOpen} 
        onClose={() => setIsRegistryOpen(false)} 
        initialTab={registryTab} 
      />
    </main>
  );
}
