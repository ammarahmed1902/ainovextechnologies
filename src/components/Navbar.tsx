import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import Logo from './Logo';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Reviews', path: '/reviews' },
    { name: 'Team', path: '/team' },
    { name: 'Blog', path: '/blog' },
    { name: 'Careers', path: '/careers' },
  ];

  return (
    <nav
      aria-label="Primary navigation"
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-navy-950/90 backdrop-blur-md py-4 shadow-lg' : 'bg-navy-950/90 py-6'}`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="group">
          <Logo
            className="w-10 h-10 group-hover:scale-110 transition-transform"
            showText={true}
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-accent ${location.pathname === link.path ? 'text-accent' : 'text-slate-300'}`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="bg-accent hover:bg-accent-hover text-navy-950 px-6 py-2.5 rounded-full text-sm font-bold transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-accent/20 border border-accent/50 hover:border-accent"
          >
            Schedule a Call
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 w-full bg-navy-900 border-t border-navy-800 p-6 flex flex-col gap-4 shadow-2xl"
        >
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`text-lg font-medium ${location.pathname === link.path ? 'text-accent' : 'text-slate-300'}`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="bg-accent text-navy-950 text-center py-3.5 rounded-xl font-bold shadow-lg shadow-accent/10"
          >
            Schedule a Call
          </Link>
        </motion.div>
      )}
    </nav>
  );
}
