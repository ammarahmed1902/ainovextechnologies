import { motion } from 'motion/react';
import { ArrowLeft, Briefcase, CheckCircle2, Clock, MapPin } from 'lucide-react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { jobs } from '../data/jobs';

export default function CareerDetail() {
  const { id } = useParams();
  const jobId = Number(id);
  const job = jobs.find((entry) => entry.id === jobId);

  if (!job) {
    return <Navigate to="/careers" replace />;
  }

  return (
    <article className="pt-32 pb-20">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Link
            to="/careers"
            className="inline-flex items-center gap-2 text-slate-500 hover:text-accent transition-colors font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to open positions
          </Link>
        </motion.div>

        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="bg-white rounded-[2rem] border border-slate-100 shadow-sm p-8 md:p-12 mb-8"
        >
          <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent text-xs font-bold rounded-full uppercase tracking-widest mb-5">
            {job.department}
          </span>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-navy-950 mb-6">
            {job.title}
          </h1>
          <p className="text-slate-600 text-lg leading-relaxed mb-8">{job.overview}</p>
          <div className="flex flex-wrap items-center gap-6 text-slate-500 text-sm">
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" /> {job.type}
            </span>
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4" /> {job.location}
            </span>
            <span className="flex items-center gap-2">
              <Briefcase className="w-4 h-4" /> {job.department}
            </span>
          </div>
        </motion.header>

        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid md:grid-cols-2 gap-6 mb-8"
        >
          <div className="bg-white rounded-[2rem] border border-slate-100 shadow-sm p-8">
            <h2 className="text-2xl font-bold text-navy-950 mb-5">Responsibilities</h2>
            <ul className="space-y-4">
              {job.responsibilities.map((item) => (
                <li key={item} className="flex gap-3 text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-[2rem] border border-slate-100 shadow-sm p-8">
            <h2 className="text-2xl font-bold text-navy-950 mb-5">Requirements</h2>
            <ul className="space-y-4">
              {job.requirements.map((item) => (
                <li key={item} className="flex gap-3 text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.section>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="bg-navy-950 rounded-[2rem] p-8 md:p-10 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-3">
            Ready to apply?
          </h3>
          <p className="text-slate-300 mb-7">
            Send your CV and portfolio to our hiring team and mention this role in the subject.
          </p>
          <a
            href={`mailto:careers@ainovex.com?subject=Application%20for%20${encodeURIComponent(job.title)}`}
            className="inline-flex items-center justify-center bg-accent hover:bg-accent-hover text-navy-950 px-8 py-4 rounded-2xl font-bold transition-all"
          >
            Apply for this role
          </a>
        </motion.div>
      </div>
    </article>
  );
}
