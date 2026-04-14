import { Linkedin, Twitter, Github, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-slate-400 py-16 border-t border-navy-800">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <Link to="/" className="mb-6 group inline-block">
            <Logo className="w-8 h-8" showText={true} />
          </Link>
          <p className="text-sm leading-relaxed mb-6">
            Empowering global enterprises with cutting-edge software solutions that drive innovation and sustainable growth.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-accent transition-colors"><Linkedin className="w-5 h-5" /></a>
            <a href="#" className="hover:text-accent transition-colors"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="hover:text-accent transition-colors"><Github className="w-5 h-5" /></a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Solutions</h4>
          <ul className="space-y-4 text-sm">
            <li><Link to="/services" className="hover:text-accent transition-colors">Cloud Architecture</Link></li>
            <li><Link to="/services" className="hover:text-accent transition-colors">AI & Machine Learning</Link></li>
            <li><Link to="/services" className="hover:text-accent transition-colors">Cybersecurity</Link></li>
            <li><Link to="/services" className="hover:text-accent transition-colors">Enterprise ERP</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Company</h4>
          <ul className="space-y-4 text-sm">
            <li><Link to="/about" className="hover:text-accent transition-colors">About Us</Link></li>
            <li><Link to="/services" className="hover:text-accent transition-colors">Services</Link></li>
            <li><Link to="/case-studies" className="hover:text-accent transition-colors">Case Studies</Link></li>
            <li><Link to="/reviews" className="hover:text-accent transition-colors">Reviews</Link></li>
            <li><Link to="/team" className="hover:text-accent transition-colors">Our Team</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Resources</h4>
          <ul className="space-y-4 text-sm">
            <li><Link to="/blog" className="hover:text-accent transition-colors">Blog</Link></li>
            <li><Link to="/careers" className="hover:text-accent transition-colors">Careers</Link></li>
            <li><Link to="/pricing" className="hover:text-accent transition-colors">Pricing</Link></li>
            <li><Link to="/contact" className="hover:text-accent transition-colors">Contact Us</Link></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-navy-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
        <p>© 2026 Ainovex Technologies. All rights reserved.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
          <a href="#" className="hover:text-white">Cookie Settings</a>
        </div>
      </div>
    </footer>
  );
}
