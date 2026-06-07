import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight, Clock, AlertTriangle, Zap, ShieldCheck } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { MagneticButton } from './ui/MagneticButton';

const testimonials = [
  {
    text: "The strong academic foundation built during my early years at NST enabled me to confidently navigate 12th Science Boards and score 97/100 in Maths. The level of personal attention is absolutely pristine.",
    name: "Vaishnavi Dubhele",
    meta: "12th Board: 82.50% / Maths: 97/100",
    improvement: "Saraswati Vidyalaya, Vasind"
  },
  {
    text: "Scoring 590 in NEET and 93%ile in JEE Main was a direct testament to the rigorous testing and conceptual clarity provided by Nikhil Sir. Weekly doubt reviews made all the difference.",
    name: "Monish R. Patil",
    meta: "NEET: 590 / JEE Main: 93%ile",
    improvement: "3rd In College / G.P. Khanivali"
  },
  {
    text: "I received continuous personal counselling and constant guidance from day one. Scoring 98/100 in Science and 95.00% overall was made possible by NST's systematic prelims.",
    name: "Parth Kathole",
    meta: "10th Board Topper: 95.00% / Science: 98/100",
    improvement: "New Ideal School, Vasind"
  },
  {
    text: "NST teaches how to think, not just memorize. Scoring 98 in Maths and 98 in English as state toppers gave me incredible confidence for my future.",
    name: "Bhavik Sapat",
    meta: "10th Board Topper: 94.80% / English: 98 & Maths: 98",
    improvement: "Saraswati Vidyalaya, Vasind"
  }
];

export function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-16 md:py-24 bg-art-bg border-y border-art-black px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col items-center text-center">
          <span className="art-label text-art-red mb-4 md:mb-8 block font-bold">Voice of Experience (Alumni)</span>
          
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="mb-8 md:mb-12"
            >
              <h3 className="text-xl sm:text-2xl md:text-[40px] font-serif italic leading-tight text-art-black mb-8 max-w-4xl mx-auto">
                "{testimonials[active].text}"
              </h3>
              
              <div className="flex flex-col items-center">
                <div className="art-label mb-1 text-art-black font-bold text-xs">{testimonials[active].name}</div>
                <div className="text-[10px] tracking-wider uppercase text-art-red font-mono font-bold">{testimonials[active].meta}</div>
                <div className="mt-4 px-4 py-1.5 border border-art-black bg-white text-[8px] art-label">
                  School: {testimonials[active].improvement}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex gap-4">
            <button 
              onClick={() => setActive((a) => (a === 0 ? testimonials.length - 1 : a - 1))}
              className="w-10 h-10 border border-art-black flex items-center justify-center hover:bg-art-black hover:text-white transition-colors"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={() => setActive((a) => (a === testimonials.length - 1 ? 0 : a + 1))}
              className="w-10 h-10 border border-art-black flex items-center justify-center hover:bg-art-black hover:text-white transition-colors"
              aria-label="Next Testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export function UrgencySection() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="bg-art-black text-white py-10 overflow-hidden border-b border-art-black">
      {/* Redesigned minimal personalized experience strip (much less distracting, quiet visual luxury) */}
      <div className="h-10 bg-neutral-900 flex items-center border-y border-white/5 overflow-hidden whitespace-nowrap mb-12">
        <div className="flex gap-16 art-label text-[9px] font-bold tracking-[0.5em] px-10 animate-marquee items-center text-white/40">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex gap-16 items-center">
              <span>Hyper-Personalized Setup</span>
              <span>*</span>
              <span>Validated Transcripts</span>
              <span>*</span>
              <span>Admissions Open 2026</span>
              <span>*</span>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 py-10 text-center">
        <span className="art-label text-art-red mb-4 block font-bold">Limited Strategic Enrolment / Autumn Term</span>
        <h2 className="text-3xl sm:text-5xl md:text-[64px] font-serif font-black tracking-tighter leading-none mb-10 text-white">Secure Your Success.</h2>

        <div className="max-w-2xl mx-auto mb-10 border border-art-red p-6 bg-art-red/5">
           <div className="art-label text-art-red mb-3 font-semibold">Status: Limited Batches</div>
           <h3 className="text-xl md:text-3xl font-serif italic mb-4 leading-snug">Only 12 Seats Remaining.</h3>
           <div className="h-0.5 bg-white/10 w-full mb-3">
              <motion.div 
                className="h-full bg-art-red"
                initial={{ width: 0 }}
                whileInView={{ width: '60%' }}
                transition={{ duration: 1.5 }}
              />
           </div>
           <p className="art-label opacity-40 text-[9px]">18/30 Strategic Profiles Selected across Vasind.</p>
        </div>

        <button 
          onClick={scrollToContact}
          className="art-button bg-white text-art-black hover:bg-art-red hover:text-white px-10 h-14 text-xs tracking-wider w-full sm:w-auto font-bold transition-all"
        >
          Secure Placement Now
        </button>
      </div>
    </section>
  );
}
