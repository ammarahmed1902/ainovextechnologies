import { motion } from 'motion/react';
import { Target, Eye, Award, Globe, Shield, Zap } from 'lucide-react';
import ourStoryImage from '../public/assets/img/ourstory.png';

const values = [
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'Integrity First',
    desc: 'We maintain honesty, transparency, and ethics in every project delivery process.'
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Innovation Focus',
    desc: 'We use modern ideas and strategies to deliver unique, impactful digital solutions.'
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: 'Client Priority',
    desc: 'We prioritize client success by understanding needs and exceeding expectations.'
  }
];

const industries = [
  'E-Commerce & Retail',
  'Healthcare & Clinics',
  'Real Estate',
  'Education & E-Learning',
  'Finance & FinTech',
  'Logistics & Transportation',
  'IT & Saas'
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
            Learn About Our <span className="text-accent">Journey</span>and Expertise
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
          >
            At Ainovex Technologies, our journey is built on innovation, growth, and trust. We deliver smart digital solutions combining expertise and strategy to turn ideas into scalable business success.
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
            <h2 className="text-3xl font-display font-bold mb-6">The Mission That Drives Us</h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              We focus on delivering meaningful solutions that create real impact. Our mission is to simplify challenges, bring clarity to ideas, and help businesses grow with confidence through smart and effective strategies.
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
            <h2 className="text-3xl font-display font-bold text-navy-950 mb-6">The Vision That Inspires Us</h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              We envision a future where businesses grow confidently through smart digital strategies and evolving technologies. We focus on creating impact, building lasting partnerships, and helping brands adapt, innovate, and stay ahead in a changing digital world.
            </p>
          </motion.div>
        </div>

        {/* Our Story */}
        <section className="mb-32">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="aspect-square rounded-[3rem] overflow-hidden">
                <img
                  src={ourStoryImage}
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
                  Our journey at Ainovex Technologies began with a simple idea to create digital solutions that truly help businesses grow and adapt in a fast-changing world. From small beginnings, we focused on learning, improving, and delivering real value through every project we handled with dedication and consistency.
                </p>
                <p>
                  Over time, we expanded our reach internationally, working with clients from London, New York, and Singapore. This global exposure helped us understand diverse markets, refine our approach, and build stronger, more adaptable strategies for different industries and business needs.
                </p>
                <p>
                  Today, we are proud to have worked with over 450+ companies worldwide. Each collaboration has shaped our identity, strengthened our expertise, and driven us to continue delivering impactful digital experiences with long-term value and trust.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="relative overflow-hidden py-24 px-6 md:px-10 rounded-[4rem] mb-32 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.12),_transparent_30%),linear-gradient(135deg,_#f8fbff_0%,_#eef5ff_45%,_#ffffff_100%)] border border-white/70 shadow-[0_30px_80px_rgba(15,23,42,0.08)]">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-16 left-12 w-44 h-44 rounded-full bg-accent/10 blur-3xl" />
            <div className="absolute bottom-0 right-10 w-56 h-56 rounded-full bg-navy-200/20 blur-3xl" />
          </div>

          <div className="relative z-10 text-center mb-16 max-w-3xl mx-auto">
            <span className="inline-flex items-center rounded-full border border-accent/20 bg-white/70 px-4 py-2 text-xs font-bold uppercase tracking-[0.3em] text-accent mb-6">
              What We Stand For
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-navy-950 mb-5">
              Our Core Values
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Guided by strong principles, we deliver quality, innovation, and trust in every
              project.
            </p>
          </div>

          <div className="relative z-10 grid gap-8 lg:grid-cols-3">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ delay: i * 0.08 }}
                className="group relative overflow-hidden rounded-[2rem] border border-white/80 bg-white/80 p-8 md:p-10 shadow-[0_18px_45px_rgba(15,23,42,0.08)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_28px_60px_rgba(15,23,42,0.14)]"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent via-sky-400 to-navy-950 opacity-80" />
                <div className="absolute -right-8 -top-8 w-28 h-28 rounded-full bg-accent/10 blur-2xl transition-opacity duration-300 group-hover:opacity-100 opacity-60" />

                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-navy-950 to-slate-800 text-white flex items-center justify-center shadow-lg mb-7">
                    {v.icon}
                  </div>
                  <h3 className="text-2xl font-display font-bold text-navy-950 mb-4">{v.title}</h3>
                  <p className="text-slate-600 text-lg leading-relaxed">{v.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Industries We Serve */}
        <section className="mb-32">
          <div className="rounded-[3rem] border border-slate-100 bg-white shadow-xl overflow-hidden">
            <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
              <div className="bg-navy-950 text-white p-10 md:p-14 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-accent/10 blur-3xl rounded-full" />
                <div className="relative z-10">
                  <span className="inline-flex items-center rounded-full border border-accent/20 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.3em] text-accent mb-6">
                    Industries We Serve
                  </span>
                  <h2 className="text-4xl font-display font-bold mb-6">Industries We Serve</h2>
                  <p className="text-slate-300 text-lg leading-relaxed">
                    At Ainovex Technologies, we provide tailored software and digital marketing
                    solutions that drive real business growth. We understand each industry&apos;s
                    needs and deliver strategies that create measurable impact.
                  </p>
                </div>
              </div>

              <div className="p-10 md:p-14 bg-[linear-gradient(180deg,_#ffffff_0%,_#f8fbff_100%)]">
                <div className="grid sm:grid-cols-2 gap-5">
                  {industries.map((industry, index) => (
                    <div
                      key={industry}
                      className="rounded-[1.75rem] border border-slate-100 bg-white px-6 py-5 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="text-xs font-bold uppercase tracking-[0.3em] text-accent mb-3">
                        {String(index + 1).padStart(2, '0')}
                      </div>
                      <h3 className="text-xl font-bold text-navy-950 leading-snug">{industry}</h3>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Global Presence */}
        <section className="text-center">
          <h2 className="text-4xl font-display font-bold text-navy-950 mb-12">Global Presence</h2>
          <div className="relative h-[400px] bg-navy-900 rounded-[3rem] overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 opacity-20 bg-grid" />
            <div className="relative z-10 max-w-2xl mx-auto px-6 text-white">
              <div className="text-5xl md:text-6xl font-display font-bold text-accent mb-5">Pakistan</div>
              <p className="text-slate-300 text-lg md:text-xl leading-relaxed">
                We are a globally present technology company based in Pakistan, delivering innovative digital solutions, modern web development, and scalable business systems.
              </p>
              <div className="mt-8 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-bold uppercase tracking-[0.3em] text-slate-200">
                Local Expertise. Real Impact.
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
