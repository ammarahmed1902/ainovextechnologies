import { motion } from 'motion/react';
import AnimatedBackground from './AnimatedBackground';

interface PageHeaderProps {
  title: string;
  description: string;
  badge?: string;
}

export default function PageHeader({ title, description, badge }: PageHeaderProps) {
  return (
    <section className="relative pt-40 pb-24 bg-navy-950 overflow-hidden">
      <AnimatedBackground />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {badge && (
              <div className="inline-block px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold tracking-widest uppercase mb-6">
                {badge}
              </div>
            )}
            <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              {title}
            </h1>
            <p className="text-slate-400 text-xl leading-relaxed">
              {description}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
