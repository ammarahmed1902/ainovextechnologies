import { motion } from 'motion/react';

interface AnimatedBackgroundProps {
  opacity?: number;
  gridOpacity?: number;
}

export default function AnimatedBackground({ opacity = 1, gridOpacity = 0.03 }: AnimatedBackgroundProps) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ opacity }}>
      {/* Subtle Grid */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(to right, #38bdf8 1px, transparent 1px), linear-gradient(to bottom, #38bdf8 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          opacity: gridOpacity
        }}
      />
      
      {/* Floating Particles/Nodes */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ 
            x: Math.random() * 100 + "%", 
            y: Math.random() * 100 + "%",
            opacity: Math.random() * 0.3 + 0.1,
            scale: Math.random() * 0.5 + 0.5
          }}
          animate={{ 
            x: [
              Math.random() * 100 + "%", 
              Math.random() * 100 + "%", 
              Math.random() * 100 + "%"
            ],
            y: [
              Math.random() * 100 + "%", 
              Math.random() * 100 + "%", 
              Math.random() * 100 + "%"
            ],
          }}
          transition={{ 
            duration: Math.random() * 20 + 20, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute w-2 h-2 bg-accent rounded-full blur-[1px]"
        />
      ))}

      {/* Large Atmospheric Glows */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1],
          x: ['-10%', '10%', '-10%'],
          y: ['-10%', '10%', '-10%'],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/20 rounded-full blur-[120px]"
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.05, 0.1, 0.05],
          x: ['10%', '-10%', '10%'],
          y: ['10%', '-10%', '10%'],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[100px]"
      />
    </div>
  );
}
