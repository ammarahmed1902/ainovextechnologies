import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageSquare, ShieldCheck, Globe } from 'lucide-react';
import PageHeader from '../components/PageHeader';

export default function Contact() {
  return (
    <div className="pb-24">
      <PageHeader 
        title="Let's Build the Future Together"
        description="Ready to transform your enterprise? Our team of experts is here to help you navigate the complexities of modern technology."
        badge="Contact Us"
      />

      <div className="max-w-7xl mx-auto px-6 mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-2xl bg-accent/10 text-accent flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-navy-950 mb-1">Email Us</h4>
                  <p className="text-slate-600">solutions@ainovex-tech.com</p>
                  <p className="text-slate-600">support@ainovex-tech.com</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-2xl bg-accent/10 text-accent flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-navy-950 mb-1">Call Us</h4>
                  <p className="text-slate-600">+1 (888) AINOVEX-HQ</p>
                  <p className="text-slate-600">+44 20 7946 0123</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-2xl bg-accent/10 text-accent flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-navy-950 mb-1">Global Headquarters</h4>
                  <p className="text-slate-600">One World Trade Center, Suite 85</p>
                  <p className="text-slate-600">New York, NY 10007, USA</p>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-navy-950 text-white">
              <h4 className="font-bold mb-6 flex items-center gap-2">
                <ShieldCheck className="text-accent w-5 h-5" /> Trust & Compliance
              </h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <Globe className="w-4 h-4" /> GDPR Compliant
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <ShieldCheck className="w-4 h-4" /> SOC2 Type II
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <MessageSquare className="w-4 h-4" /> 24/7 Support
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <ShieldCheck className="w-4 h-4" /> ISO 27001
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-10 rounded-[2.5rem] shadow-2xl border border-slate-100"
          >
            <h3 className="text-2xl font-bold text-navy-950 mb-8">Send a Message</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Work Email</label>
                  <input 
                    type="email" 
                    placeholder="john@company.com"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Company</label>
                  <input 
                    type="text" 
                    placeholder="Enterprise Inc."
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Subject</label>
                  <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-accent transition-colors">
                    <option>Cloud Infrastructure</option>
                    <option>AI & Machine Learning</option>
                    <option>Cybersecurity</option>
                    <option>Other Solutions</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">Message</label>
                <textarea 
                  rows={5}
                  placeholder="Tell us about your project goals..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-accent transition-colors resize-none"
                ></textarea>
              </div>

              <button className="w-full bg-navy-950 text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-navy-800 transition-all group">
                Send Inquiry <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
              
              <p className="text-center text-xs text-slate-400 mt-6">
                By submitting this form, you agree to our <a href="#" className="underline">Privacy Policy</a> and <a href="#" className="underline">Terms of Service</a>.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
