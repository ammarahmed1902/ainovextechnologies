import { motion } from 'motion/react';
import { ExternalLink, Globe, TrendingUp, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import { caseStudies } from '../data/caseStudies';

export default function CaseStudies() {
  return (
    <div className="pb-24">
      <PageHeader
        title="Proven Impact"
        description="We don't just build software; we deliver measurable business results. Explore how we've helped global leaders transform their industries."
        badge="Case Studies"
      />

      <div className="max-w-7xl mx-auto px-6 mt-24">
        <div className="space-y-32">
          {caseStudies.map((project, idx) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
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
                <p className="text-slate-600 text-lg mb-8 leading-relaxed">{project.description}</p>

                <div className="grid grid-cols-2 gap-6 mb-10">
                  {project.stats.map((stat) => {
                    const icon =
                      stat.label === 'Global Nodes' ? (
                        <Globe className="w-4 h-4" />
                      ) : stat.label === 'Active Users' || stat.label === 'Households' ? (
                        <Users className="w-4 h-4" />
                      ) : (
                        <TrendingUp className="w-4 h-4" />
                      );

                    return (
                      <div key={stat.label} className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                        <div className="text-accent mb-2">{icon}</div>
                        <div className="text-3xl font-bold text-navy-950 mb-1">{stat.value}</div>
                        <div className="text-xs text-slate-500 uppercase tracking-widest font-bold">
                          {stat.label}
                        </div>
                      </div>
                    );
                  })}
                </div>

                <Link
                  to={`/case-studies/${project.slug}`}
                  className="mt-2 inline-flex items-center gap-2 text-navy-950 font-bold hover:text-accent transition-colors"
                >
                  Read Full Case Study <ExternalLink className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <section className="mt-32 pt-20 border-t border-slate-200">
          <div className="text-center mb-12">
            <span className="text-slate-400 text-sm font-bold uppercase tracking-[0.3em]">
              Trusted by Global Leaders
            </span>
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
