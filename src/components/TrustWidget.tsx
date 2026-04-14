import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { Linkedin } from 'lucide-react';

const BrandIcons = {
  Freelancer: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M12.586 2.343L2.343 12.586l1.414 1.414L14 3.757l-1.414-1.414zM18.657 8.414L8.414 18.657l1.414 1.414L20.071 9.828l-1.414-1.414z" />
    </svg>
  ),
  Upwork: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M18.561 3.322c-2.544 0-4.533 1.989-4.533 4.533v4.01h-1.998V7.855c0-2.544-1.989-4.533-4.533-4.533S3 5.311 3 7.855v8.29h2.012V7.855c0-1.393 1.128-2.521 2.521-2.521s2.521 1.128 2.521 2.521v8.29h2.012V11.865h1.998v4.28h2.012v-8.29c0-1.393 1.128-2.521 2.521-2.521s2.521 1.128 2.521 2.521v8.29h2.012V7.855c0-2.544-1.989-4.533-4.533-4.533z" />
    </svg>
  ),
  Trustpilot: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#00b67a]">
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
  ),
  Clutch: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#ff3b30]">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
    </svg>
  )
};

export default function TrustWidget() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Threshold for hero section (assuming hero is roughly 80-100vh)
      setIsScrolled(window.scrollY > window.innerHeight * 0.8);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const icons = [
    { name: 'Freelancer', icon: <BrandIcons.Freelancer />, color: 'hover:text-[#29b6f6]' },
    { name: 'Upwork', icon: <BrandIcons.Upwork />, color: 'hover:text-[#6fda44]' },
    { name: 'Trustpilot', icon: <BrandIcons.Trustpilot />, color: 'hover:text-[#00b67a]' },
    { name: 'LinkedIn', icon: <Linkedin className="w-5 h-5" />, color: 'hover:text-[#0077b5]' },
    { name: 'Clutch', icon: <BrandIcons.Clutch />, color: 'hover:text-[#ff3b30]' },
  ];

  return (
    <motion.div
      layout
      transition={{ 
        type: "spring", 
        stiffness: 200, 
        damping: 25,
        layout: { duration: 0.5 }
      }}
      className={`fixed z-[60] p-2 bg-navy-900/80 backdrop-blur-md border border-white/10 rounded-2xl shadow-2xl flex items-center gap-4
        ${isScrolled 
          ? 'top-1/2 right-6 -translate-y-1/2 flex-col py-6' 
          : 'bottom-10 left-1/2 -translate-x-1/2 flex-row px-6'
        }
      `}
    >
      <AnimatePresence mode="wait">
        {!isScrolled && (
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            className="text-[10px] font-bold text-slate-500 uppercase tracking-widest whitespace-nowrap mr-2"
          >
            Verified On
          </motion.span>
        )}
      </AnimatePresence>

      {icons.map((item) => (
        <motion.a
          key={item.name}
          href="#"
          layout
          whileHover={{ scale: 1.2, y: isScrolled ? 0 : -2, x: isScrolled ? -2 : 0 }}
          className={`text-slate-400 transition-colors ${item.color} p-1.5`}
          title={item.name}
        >
          {item.icon}
        </motion.a>
      ))}

      <AnimatePresence>
        {isScrolled && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute -top-2 -right-2 w-4 h-4 bg-accent rounded-full border-2 border-navy-900"
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
}
