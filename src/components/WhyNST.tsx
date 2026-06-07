import { motion } from 'motion/react';
import { Check, ShieldCheck, Heart, Users, Target, Zap, Clock } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export function WhyNST() {
  const pillars = [
    {
      title: "Individual Counseling",
      desc: "Tailored to suit specific academic profiles with direct parent communication.",
      tag: "PERSONALIZED"
    },
    {
      title: "Four Prelims System",
      desc: "Comprehensive exam simulation with moderator paper checks to build confidence.",
      tag: "RIGOROUS"
    },
    {
      title: "Concept-First Prep",
      desc: "Strong foundational building in Physics, Maths, Biology & Chemistry for NEET/JEE.",
      tag: "COMPETITIVE"
    },
    {
      title: "Weekly Topic Tests",
      desc: "Continuous evaluation ensures concepts are completely mastered step-by-step.",
      tag: "CONTINUOUS"
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-white border-b border-art-black" id="why-nst">
      <div className="container mx-auto px-6">
        
        {/* Compact editorial header */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-12 border-b border-art-black pb-6">
          <div className="max-w-xl">
            <span className="art-label text-art-red mb-2 block font-bold">Why Parents Choose NST</span>
            <h2 className="text-3xl md:text-5xl font-serif italic tracking-tighter text-art-black">
              Our Core Pillars.
            </h2>
          </div>
          <p className="art-label opacity-40 max-w-xs md:text-right mt-4 lg:mt-0 text-[10px] tracking-widest">
            AESTHETIC / STRUCTURED / INSPIRED
          </p>
        </div>

        {/* Dynamic, space-saving bento list */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="border border-art-black/10 p-6 hover:bg-neutral-50 hover:border-art-black transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="px-2 py-0.5 border border-art-black/10 text-neutral-500 text-[8px] tracking-wider art-label font-bold bg-neutral-100 uppercase">
                    {pillar.tag}
                  </span>
                  <span className="text-[10px] font-mono text-neutral-300 font-bold">0{i + 1}</span>
                </div>
                
                <h3 className="text-base font-serif italic font-bold text-art-black mb-2">
                  {pillar.title}
                </h3>
                
                <p className="text-xs text-neutral-500 leading-relaxed font-sans font-light">
                  {pillar.desc}
                </p>
              </div>

              <div className="mt-6 pt-2 border-t border-dotted border-neutral-100 flex items-center gap-1.5 text-art-red">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span className="text-[8px] art-label font-black tracking-widest">NST STANDARDS</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
