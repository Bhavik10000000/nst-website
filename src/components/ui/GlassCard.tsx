import { motion } from 'motion/react';
import { ReactNode } from 'react';
import { cn } from '@/src/lib/utils';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function GlassCard({ children, className, delay = 0 }: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay, ease: [0.4, 0, 0.2, 1] }}
      className={cn(
        "glass p-6 rounded-2xl",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
