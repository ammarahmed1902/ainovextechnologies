import { motion } from 'motion/react';
import { Star, Quote, MessageSquare, ThumbsUp, Award, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const reviews = [
  {
    name: "James Carter",
    role: "Chief Executive Officer (CEO)",
    text: "Ainovex Technologyies completely transformed our online presence. Our website is now faster and more professional. We started getting real customer inquiries within weeks.",
    rating: 5,
    date: "March 2026",
    avatar: "M"
  },
  {
    name: "Olivia Bennett",
    role: "Operations Director",
    text: "The team at Ainovex is professional, fast, and easy to communicate with. They understood our requirements quickly and delivered a high-quality product that works perfectly.",
    rating: 5,
    date: "February 2026",
    avatar: "S"
  },
  {
    name: "David Martinez",
    role: "Managing Director",
    text: "The communication was excellent. The team was always available to answer our questions and provide updates. This level of support is rare and highly appreciated.",
    rating: 5,
    date: "January 2026",
    avatar: "J"
  },
  {
    name: "Sophia Mitchell",
    role: "Brand Manager",
    text: "TWorking with Ainovex Tech felt very reliable. They delivered on time and improved our brand visibility across platforms. Very satisfied with the overall experience.",
    rating: 5,
    date: "December 2025",
    avatar: "L"
  },
  {
    name: "Daniel Brooks",
    role: "Chief Technology Officer (CTO)",
    text: "Their development quality is excellent. Everything works smoothly and looks modern. They genuinely care about long-term business success.",
    rating: 5,
    date: "November 2025",
    avatar: "R"
  }
];

const stats = [
  { label: "Client Satisfaction", value: "99%", icon: <ThumbsUp className="w-6 h-6" /> },
  { label: "Projects Delivered", value: "500+", icon: <CheckCircle className="w-6 h-6" /> },
  { label: "Industry Awards", value: "12", icon: <Award className="w-6 h-6" /> },
  { label: "Support Rating", value: "4.9/5", icon: <MessageSquare className="w-6 h-6" /> }
];

export default function Reviews() {
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
            What Our <span className="text-accent">Clients</span> Say
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
          >
            We take pride in the long-term relationships we build with our clients. Their success is the true measure of our impact.
          </motion.p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-32">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 bg-navy-50 rounded-3xl text-center border border-navy-100"
            >
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-accent mx-auto mb-4 shadow-sm">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-navy-950 mb-1">{stat.value}</div>
              <div className="text-slate-500 text-sm font-medium uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-10 bg-white rounded-[2.5rem] border border-slate-100 shadow-xl hover:shadow-2xl transition-all relative group"
            >
              <Quote className="w-12 h-12 text-accent/10 absolute top-8 right-8 group-hover:text-accent/20 transition-colors" />
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, starIdx) => (
                  <Star key={starIdx} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-slate-600 text-lg italic mb-10 leading-relaxed">
                "{review.text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-navy-950 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  {review.avatar}
                </div>
                <div>
                  <h4 className="font-bold text-navy-950">{review.name}</h4>
                  <p className="text-slate-500 text-sm">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <section className="bg-navy-950 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(45,212,191,0.1),transparent)]" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
              Ready to be our next success story?
            </h2>
            <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
              Let&apos;s create measurable results for your brand with digital solutions built to
              perform, scale, and impress.
            </p>
            <Link
              to="/contact"
              className="inline-flex bg-accent hover:bg-accent-hover text-navy-950 px-10 py-5 rounded-2xl font-bold transition-all transform hover:scale-105"
            >
              Get Started Today
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
