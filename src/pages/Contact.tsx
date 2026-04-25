import { ChangeEvent, FormEvent, useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageSquare, ShieldCheck, Globe } from 'lucide-react';
import PageHeader from '../components/PageHeader';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    subject: 'Cloud Infrastructure',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
    if (status !== 'idle') {
      setStatus('idle');
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('loading');

    try {
      await new Promise((resolve) => window.setTimeout(resolve, 900));
      setStatus('success');
      setFormData({
        fullName: '',
        email: '',
        company: '',
        subject: 'Cloud Infrastructure',
        message: ''
      });
    } catch {
      setStatus('error');
    }
  };

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
                  <p className="text-slate-600">
                    <a href="mailto:solutions@ainovex-tech.com" className="hover:text-accent transition-colors">
                      solutions@ainovex-tech.com
                    </a>
                  </p>
                  <p className="text-slate-600">
                    <a href="mailto:support@ainovex-tech.com" className="hover:text-accent transition-colors">
                      support@ainovex-tech.com
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-2xl bg-accent/10 text-accent flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-navy-950 mb-1">Call Us</h4>
                  <p className="text-slate-600">
                    <a href="tel:+1888246683947" className="hover:text-accent transition-colors">
                      +1 (888) AINOVEX-HQ
                    </a>
                  </p>
                  <p className="text-slate-600">
                    <a href="tel:+442079460123" className="hover:text-accent transition-colors">
                      +44 20 7946 0123
                    </a>
                  </p>
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
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="fullName" className="text-sm font-bold text-slate-700 ml-1">
                    Full Name *
                  </label>
                  <input 
                    id="fullName"
                    name="fullName"
                    type="text" 
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-bold text-slate-700 ml-1">
                    Work Email *
                  </label>
                  <input 
                    id="email"
                    name="email"
                    type="email" 
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@company.com"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-bold text-slate-700 ml-1">
                    Company *
                  </label>
                  <input 
                    id="company"
                    name="company"
                    type="text" 
                    required
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Enterprise Inc."
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-bold text-slate-700 ml-1">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-accent transition-colors"
                  >
                    <option>Cloud Infrastructure</option>
                    <option>AI & Machine Learning</option>
                    <option>Cybersecurity</option>
                    <option>Other Solutions</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-bold text-slate-700 ml-1">
                  Message *
                </label>
                <textarea 
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project goals..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-accent transition-colors resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                aria-busy={status === 'loading'}
                className="w-full bg-navy-950 text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-navy-800 transition-all group disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? 'Sending...' : 'Send Inquiry'}{' '}
                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>

              {status === 'success' ? (
                <p role="alert" className="text-accent text-sm font-medium">
                  Message sent! We&apos;ll get back to you within 24 hours.
                </p>
              ) : null}

              {status === 'error' ? (
                <p role="alert" className="text-red-600 text-sm font-medium">
                  Something went wrong. Please try again or email us directly.
                </p>
              ) : null}
              
              <p className="text-center text-xs text-slate-400 mt-6">
                By submitting this form, you agree to our <a href="/contact" className="underline">Privacy Policy</a> and <a href="/contact" className="underline">Terms of Service</a>.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
