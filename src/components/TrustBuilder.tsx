import { motion, useInView, useSpring, useTransform } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { Trophy, Users, TrendingUp } from 'lucide-react';
import { cn } from '@/src/lib/utils';

function AnimatedCounter({ value, duration = 2 }: { value: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
        setCount(Math.floor(progress * value));
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, value, duration]);

  return <span ref={ref}>{count}</span>;
}

export function TrustBuilder() {
  const cards = [
    {
      label: "Success Rate",
      value: 98,
      suffix: "%",
      desc: "Our alumni consistently secure admissions into top-tier universities.",
      index: "01 —"
    },
    {
      label: "Parent Rating",
      value: 4.9,
      suffix: "/5",
      desc: "A testament to our hyper-personalized approach and academic rigor.",
      index: "02 —"
    },
    {
      label: "Established",
      value: 2012,
      suffix: "",
      desc: "Over a decade of refining the perfect educational framework.",
      index: "03 —"
    }
  ];

  return (
    <section className="py-16 md:py-32 bg-white px-6 md:px-12 border-y border-art-black" id="results">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex flex-col group"
            >
              <span className="art-label opacity-40 mb-2 md:mb-4 block">{card.index}</span>
              <h3 className="text-2xl md:text-4xl font-serif italic mb-3 md:mb-6">{card.label}</h3>
              <div className="text-5xl md:text-8xl font-black tracking-tighter mb-4 md:mb-8 group-hover:text-art-red transition-colors">
                <AnimatedCounter value={card.value} />{card.suffix}
              </div>
              <p className="text-sm font-light leading-relaxed text-gray-500 max-w-xs">
                {card.desc}
              </p>
              <div className="mt-4 md:mt-8 h-px bg-art-black w-12 group-hover:w-full transition-all duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
