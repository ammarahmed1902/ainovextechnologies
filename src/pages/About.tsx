import { motion } from 'motion/react';
import { Target, Eye, Award, Globe, Shield, Zap } from 'lucide-react';

const values = [
  { icon: <Shield className="w-6 h-6" />, title: "Integrity", desc: "We build trust through transparency and honest communication in every partnership." },
  { icon: <Zap className="w-6 h-6" />, title: "Innovation", desc: "We constantly push boundaries to deliver future-ready solutions that drive growth." },
  { icon: <Target className="w-6 h-6" />, title: "Excellence", desc: "Our commitment to quality ensures every project meets the highest industry standards." }
];

export default function About() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero Section */}
        <div className="text-center mb-24">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-display font-bold text-navy-950 mb-8"
          >
            Our Mission is to <span className="text-accent">Empower</span> Your Vision
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
          >
            Ainovex Technologies was founded on the principle that technology should be a catalyst for growth, not a barrier. We bridge the gap between complex challenges and elegant digital solutions.
          </motion.p>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-12 mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-12 bg-navy-950 text-white rounded-[3rem] relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 blur-3xl rounded-full group-hover:bg-accent/20 transition-all" />
            <Target className="w-12 h-12 text-accent mb-8" />
            <h2 className="text-3xl font-display font-bold mb-6">Our Mission</h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              To deliver innovative, high-quality, and scalable digital solutions that empower businesses to thrive in an ever-evolving technological landscape. We strive to be the most reliable digital partner for enterprises worldwide.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-12 bg-white border border-slate-100 shadow-xl rounded-[3rem] relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-navy-50 blur-3xl rounded-full group-hover:bg-navy-100 transition-all" />
            <Eye className="w-12 h-12 text-navy-950 mb-8" />
            <h2 className="text-3xl font-display font-bold text-navy-950 mb-6">Our Vision</h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              To become a global leader in digital transformation, recognized for our commitment to excellence, creativity, and the long-term success of our clients. We envision a future where every business can harness the full potential of AI and cloud technology.
            </p>
          </motion.div>
        </div>

        {/* Our Story */}
        <section className="mb-32">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="aspect-square rounded-[3rem] overflow-hidden">
                <img 
                  src="https://picsum.photos/seed/office/800/800" 
                  alt="Our Office" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-accent p-10 rounded-3xl shadow-2xl hidden md:block">
                <div className="text-4xl font-bold text-navy-950 mb-1">15+</div>
                <div className="text-navy-900/70 font-bold text-sm uppercase tracking-widest">Years of Innovation</div>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-display font-bold text-navy-950 mb-8">Our Story</h2>
              <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                <p>
                  Founded in 2011, Ainovex Technologies began as a small team of passionate engineers with a single goal: to build software that makes a difference. Over the years, we've grown into a global agency with offices in London, New York, and Singapore.
                </p>
                <p>
                  We've navigated the shifts from mobile-first to AI-first, always staying ahead of the curve to ensure our clients have the most competitive edge. Today, we serve Fortune 500 companies and high-growth startups alike, delivering mission-critical infrastructure that powers millions of transactions daily.
                </p>
                <p>
                  Our journey is defined by the successes of our clients. We don't just deliver code; we deliver value, strategy, and a partnership that lasts long after the final deployment.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24 bg-navy-50 rounded-[4rem] px-12 mb-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-navy-950 mb-4">The Values That Drive Us</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">These core principles guide every decision we make and every line of code we write.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <div key={i} className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all">
                <div className="w-14 h-14 bg-navy-50 rounded-2xl flex items-center justify-center text-navy-950 mb-6">
                  {v.icon}
                </div>
                <h3 className="text-xl font-bold text-navy-950 mb-4">{v.title}</h3>
                <p className="text-slate-600 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Global Presence */}
        <section className="text-center">
          <h2 className="text-4xl font-display font-bold text-navy-950 mb-12">Global Presence</h2>
          <div className="relative h-[400px] bg-navy-900 rounded-[3rem] overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 opacity-20 bg-grid" />
            <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-12 text-white">
              <div>
                <div className="text-3xl font-bold text-accent mb-2">London</div>
                <div className="text-slate-400 text-sm">Headquarters</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-2">New York</div>
                <div className="text-slate-400 text-sm">Design Lab</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-2">Singapore</div>
                <div className="text-slate-400 text-sm">AI Research</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-2">Remote</div>
                <div className="text-slate-400 text-sm">Global Talent</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
