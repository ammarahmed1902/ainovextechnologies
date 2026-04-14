import { motion } from 'motion/react';
import { Briefcase, MapPin, Clock, ArrowRight, Users, Zap, Globe, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { jobs } from '../data/jobs';

const values = [
  { icon: <Users className="w-6 h-6" />, title: "Collaborative Culture", desc: "We believe the best ideas come from diverse perspectives working together." },
  { icon: <Zap className="w-6 h-6" />, title: "Innovation First", desc: "We push the boundaries of what's possible with AI and cloud technology." },
  { icon: <Globe className="w-6 h-6" />, title: "Remote-First", desc: "Work from anywhere in the world with our flexible remote work policy." },
  { icon: <Heart className="w-6 h-6" />, title: "Employee Wellbeing", desc: "Comprehensive health benefits, mental health support, and generous PTO." }
];

export default function Careers() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-display font-bold text-navy-950 mb-6"
          >
            Join the <span className="text-accent">Future</span> of Tech
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600 max-w-2xl mx-auto"
          >
            Help us build the next generation of enterprise solutions. We're looking for passionate individuals to join our global team.
          </motion.p>
        </div>

        {/* Values Section */}
        <section className="mb-32">
          <div className="grid md:grid-cols-4 gap-8">
            {values.map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center text-accent mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-navy-950 mb-3">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Job Listings */}
        <section className="mb-32">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-display font-bold text-navy-950 mb-4">Open Positions</h2>
              <p className="text-slate-600">Find your next challenge at Ainovex Technologies.</p>
            </div>
            <div className="hidden md:block">
              <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">
                {jobs.length} Opportunities
              </span>
            </div>
          </div>

          <div className="space-y-6">
            {jobs.map((job, idx) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-2xl hover:border-accent/30 transition-all"
              >
                <Link
                  to={`/careers/${job.id}`}
                  className="block p-8 rounded-3xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="flex-grow">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="px-3 py-1 bg-accent/10 text-accent text-xs font-bold rounded-full uppercase tracking-wider">
                          {job.department}
                        </span>
                        <span className="text-slate-400 text-sm flex items-center gap-1">
                          <Clock className="w-4 h-4" /> {job.type}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-navy-950 mb-2 group-hover:text-accent transition-colors">
                        {job.title}
                      </h3>
                      <p className="text-slate-600 mb-4 max-w-2xl">{job.description}</p>
                      <div className="flex items-center gap-4 text-slate-500 text-sm">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" /> {job.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Briefcase className="w-4 h-4" /> {job.department}
                        </span>
                      </div>
                    </div>
                    <div className="flex-shrink-0">
                      <span className="w-full md:w-auto bg-navy-950 text-white px-8 py-4 rounded-2xl font-bold inline-flex items-center justify-center gap-2 group-hover:bg-accent group-hover:text-navy-950 transition-all">
                        Apply Now <ArrowRight className="w-5 h-5" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-navy-950 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(45,212,191,0.1),transparent)]" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
              Don't see a perfect fit?
            </h2>
            <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
              We're always looking for talented people. Send us your resume and we'll keep you in mind for future openings.
            </p>
            <button className="bg-accent hover:bg-accent-hover text-navy-950 px-10 py-5 rounded-2xl font-bold transition-all transform hover:scale-105">
              General Application
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
