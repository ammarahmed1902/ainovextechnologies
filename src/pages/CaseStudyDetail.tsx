import { motion } from 'motion/react';
import { ArrowLeft, CheckCircle2, Globe, TrendingUp, Users } from 'lucide-react';
import { Link, Navigate, useParams } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import { caseStudies } from '../data/caseStudies';

export default function CaseStudyDetail() {
  const { slug } = useParams();
  const study = caseStudies.find((entry) => entry.slug === slug);

  if (!study) {
    return <Navigate to="/case-studies" replace />;
  }

  return (
    <div className="pb-24">
      <PageHeader
        title={study.title}
        description={study.description}
        badge={study.client}
      />

      <article className="max-w-7xl mx-auto px-6 -mt-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/90 px-5 py-3 text-sm font-semibold text-slate-600 shadow-sm backdrop-blur-sm transition-colors hover:text-accent"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to case studies
          </Link>
        </motion.div>

        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-stretch mb-10"
        >
          <div className="rounded-[2rem] overflow-hidden shadow-2xl min-h-[320px]">
            <img
              src={study.image}
              alt={study.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="rounded-[2rem] bg-white border border-slate-100 shadow-sm p-8 md:p-10 flex flex-col justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-accent mb-3">
                Project Overview
              </p>
              <h2 className="font-display text-3xl font-bold text-navy-950 mb-4">
                Results That Moved the Business
              </h2>
              <p className="text-slate-600 leading-relaxed">
                {study.challenge}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 mt-8">
              {study.stats.map((stat) => {
                const icon =
                  stat.label === 'Global Nodes' ? (
                    <Globe className="w-5 h-5" />
                  ) : stat.label === 'Active Users' || stat.label === 'Households' ? (
                    <Users className="w-5 h-5" />
                  ) : (
                    <TrendingUp className="w-5 h-5" />
                  );

                return (
                  <div key={stat.label} className="rounded-[1.5rem] bg-slate-50 border border-slate-100 p-5">
                    <div className="text-accent mb-3">{icon}</div>
                    <div className="text-3xl font-bold text-navy-950 mb-1">{stat.value}</div>
                    <div className="text-xs uppercase tracking-[0.28em] text-slate-500 font-bold">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] mb-10"
        >
          <div className="rounded-[2rem] bg-white border border-slate-100 shadow-sm p-8 md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-accent mb-3">What We Delivered</p>
            <h3 className="font-display text-3xl font-bold text-navy-950 mb-6">
              A practical, measurable transformation plan
            </h3>
            <ul className="space-y-5">
              {study.solution.map((item) => (
                <li key={item} className="flex gap-3 text-slate-700 leading-relaxed">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[2rem] bg-navy-950 text-white p-8 md:p-10 shadow-xl flex flex-col justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-accent mb-3">Client Feedback</p>
              <blockquote className="font-display text-2xl leading-relaxed text-white">
                "{study.testimonial.text}"
              </blockquote>
            </div>
            <p className="mt-8 text-accent font-bold">{study.testimonial.author}</p>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="rounded-[2rem] bg-white border border-slate-100 shadow-sm p-8 md:p-10"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-accent mb-3">Business Outcomes</p>
          <h3 className="font-display text-3xl font-bold text-navy-950 mb-6">
            The impact after launch
          </h3>
          <div className="grid gap-5 md:grid-cols-3">
            {study.outcomes.map((item) => (
              <div key={item} className="rounded-[1.5rem] bg-slate-50 border border-slate-100 p-6">
                <CheckCircle2 className="w-5 h-5 text-accent mb-4" />
                <p className="text-slate-700 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </motion.section>
      </article>
    </div>
  );
}
