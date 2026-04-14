import { motion } from 'motion/react';
import { ExternalLink, Quote, TrendingUp, Users, Globe } from 'lucide-react';
import PageHeader from '../components/PageHeader';

export default function CaseStudies() {
  const projects = [
    {
      client: "AeroDynamics Corp",
      title: "Next-Gen Fleet Management",
      desc: "Revolutionizing global logistics with a real-time AI-driven cloud platform that optimized fuel consumption by 18% across 5,000 aircraft.",
      image: "https://images.unsplash.com/photo-1559297434-fae8a1916a79?auto=format&fit=crop&q=80&w=800&h=500",
      stats: [
        { label: "Efficiency Gain", value: "18%", icon: <TrendingUp className="w-4 h-4" /> },
        { label: "Active Users", value: "50k+", icon: <Users className="w-4 h-4" /> }
      ],
      testimonial: {
        text: "Ainovex Technologies transformed our operations. Their platform isn't just software; it's a competitive advantage.",
        author: "James Wilson, CTO"
      }
    },
    {
      client: "FinSafe International",
      title: "Zero-Trust Security Overhaul",
      desc: "Implementing a comprehensive cybersecurity framework for a global banking leader, protecting $200B+ in assets from sophisticated threats.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800&h=500",
      stats: [
        { label: "Security Score", value: "99.9", icon: <TrendingUp className="w-4 h-4" /> },
        { label: "Global Nodes", value: "120", icon: <Globe className="w-4 h-4" /> }
      ],
      testimonial: {
        text: "The most robust security implementation we've ever seen. Ainovex Technologies is in a league of their own.",
        author: "Sarah Miller, CISO"
      }
    },
    {
      client: "EcoEnergy Systems",
      title: "Predictive Grid Maintenance",
      desc: "Leveraging machine learning to predict power grid failures before they occur, reducing downtime by 40% for 12M households.",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800&h=500",
      stats: [
        { label: "Downtime Reduced", value: "40%", icon: <TrendingUp className="w-4 h-4" /> },
        { label: "Households", value: "12M", icon: <Users className="w-4 h-4" /> }
      ],
      testimonial: {
        text: "Their AI models are incredibly accurate. We've saved millions in emergency repair costs.",
        author: "Robert Chen, Director of Ops"
      }
    }
  ];

  return (
    <div className="pb-24">
      <PageHeader
        title="Proven Impact"
        description="We don't just build software; we deliver measurable business results. Explore how we've helped global leaders transform their industries."
        badge="Case Studies"
      />

      <div className="max-w-7xl mx-auto px-6 mt-24">
        <div className="space-y-32">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-16 items-center`}
            >
              <div className="lg:w-1/2 relative group">
                <div className="absolute -inset-4 bg-accent/10 rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative overflow-hidden rounded-[2rem] shadow-2xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              <div className="lg:w-1/2">
                <div className="inline-block px-4 py-1.5 rounded-full bg-slate-100 text-navy-950 text-xs font-bold tracking-widest uppercase mb-6">
                  {project.client}
                </div>
                <h2 className="font-display text-4xl font-bold text-navy-950 mb-6">{project.title}</h2>
                <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                  {project.desc}
                </p>

                <div className="grid grid-cols-2 gap-6 mb-10">
                  {project.stats.map((stat, sIdx) => (
                    <div key={sIdx} className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                      <div className="text-accent mb-2">{stat.icon}</div>
                      <div className="text-3xl font-bold text-navy-950 mb-1">{stat.value}</div>
                      <div className="text-xs text-slate-500 uppercase tracking-widest font-bold">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <div className="p-8 rounded-2xl bg-navy-950 text-white relative">
                  <Quote className="absolute top-4 right-4 w-8 h-8 text-accent/20" />
                  <p className="italic text-slate-300 mb-4 relative z-10">"{project.testimonial.text}"</p>
                  <div className="font-bold text-accent">{project.testimonial.author}</div>
                </div>

                <button className="mt-10 flex items-center gap-2 text-navy-950 font-bold hover:text-accent transition-colors">
                  Read Full Case Study <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Client Logos */}
        <section className="mt-32 pt-20 border-t border-slate-200">
          <div className="text-center mb-12">
            <span className="text-slate-400 text-sm font-bold uppercase tracking-[0.3em]">Trusted by Global Leaders</span>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-30 grayscale">
            <div className="font-display font-bold text-3xl">AEROCORP</div>
            <div className="font-display font-bold text-3xl">FINSAFE</div>
            <div className="font-display font-bold text-3xl">ECOGRID</div>
            <div className="font-display font-bold text-3xl">GLOBALTECH</div>
            <div className="font-display font-bold text-3xl">AINOVEX+</div>
          </div>
        </section>
      </div>
    </div>
  );
}
