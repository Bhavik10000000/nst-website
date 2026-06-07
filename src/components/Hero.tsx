import { motion } from 'motion/react';
import { MagneticButton } from './ui/MagneticButton';
import { ArrowRight, Star, Users, Award } from 'lucide-react';
import { GlassCard } from './ui/GlassCard';

export function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[85vh] md:min-h-screen flex flex-col pt-24 pb-12 md:pt-32 px-6 md:px-10 overflow-hidden bg-art-bg text-art-black">
      {/* Branding Rails from theme */}
      <div className="absolute left-0 top-0 bottom-0 w-16 border-r border-art-black hidden lg:flex flex-col items-center py-12 justify-between">
        <span className="rotate-180 [writing-mode:vertical-lr] art-label opacity-40">Est. 2012</span>
        <div className="w-2 h-2 rounded-full bg-art-red"></div>
        <span className="[writing-mode:vertical-lr] art-label opacity-40">Vasind / Mumbai</span>
      </div>

      <div className="container relative z-10 mx-auto lg:ml-24 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 md:mb-8"
        >
          <span className="art-label text-art-red mb-2 block">
            The NST Method / 2026 Admissions
          </span>
          <div className="w-12 h-0.5 bg-art-black" />
        </motion.div>

        <h1 className="art-heading-xl mb-6 md:mb-12">
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="block"
          >
            Paving the
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="block italic"
          >
            Path to <span className="text-art-red">Success</span>
          </motion.span>
        </h1>

        <div className="max-w-xl">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="text-base md:text-2xl font-light leading-relaxed mb-6 md:mb-12 border-l-2 md:border-l-4 border-art-red pl-4 md:pl-6"
          >
            NST Tuition is a boutique academic consultancy specializing in hyper-personalized learning frameworks for elite university admissions.
          </motion.p>
          

          <div className="mb-8 md:mb-12 border-t border-art-black/10 pt-4" />

          <div className="flex flex-col sm:flex-row items-center gap-6">
            <button 
              onClick={scrollToContact}
              className="art-button w-full sm:w-auto h-12 md:h-16 px-8 md:px-12 group flex items-center justify-center gap-3"
            >
              Apply Now 
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
            </button>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full border border-art-black flex items-center justify-center">
                <div className="w-2 h-2 bg-art-red rounded-full animate-pulse"></div>
              </div>
              <div className="text-left">
                <div className="art-label text-[8px]">Admissions Open</div>
                <div className="text-xs font-serif italic">Autumn Term 2026</div>
              </div>
            </div>
          </div>
        </div>

        {/* Artistic Floating Element */}
        <motion.div 
          initial={{ opacity: 0, rotate: 0 }}
          animate={{ opacity: 1, rotate: 12 }}
          transition={{ delay: 1.8, duration: 1 }}
          className="absolute bottom-0 right-0 w-64 h-64 border border-art-black hidden xl:flex items-center justify-center p-8 bg-white/50 backdrop-blur"
        >
          <p className="art-label text-center leading-tight">
            "The most intensive <br/> educational shift <br/> of my life."
            <span className="block mt-4 opacity-50 italic text-[8px]">— Daniel K., 2023 Alumni</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
