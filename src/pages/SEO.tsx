import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { Zap, Search, Globe, TrendingUp, ArrowRight, CheckCircle2, MessageSquare, Map, Settings, CheckCircle, Plus, Minus, Target, BarChart } from 'lucide-react';
import { Link } from 'react-router-dom';

const subServices = [
  {
    title: "Keyword Research & Strategy",
    icon: <Search className="w-10 h-10" />,
    desc: "Identifying high-value, low-competition keywords that your customers are actually searching for. We build a roadmap to dominate search results.",
    features: ["Deep Keyword Analysis", "Competitor Keyword Mapping", "Search Intent Targeting", "Long-tail Strategy"],
    color: "bg-blue-500/10 text-blue-600"
  },
  {
    title: "On-Page Optimization",
    icon: <Globe className="w-10 h-10" />,
    desc: "Optimizing your website's content and structure to make it clear to search engines what you offer. We ensure every page is built for maximum visibility.",
    features: ["Meta Tag Optimization", "Content Refining", "Internal Linking", "Schema Markup"],
    color: "bg-purple-500/10 text-purple-600"
  },
  {
    title: "Technical SEO Audits",
    icon: <Settings className="w-10 h-10" />,
    desc: "Fixing back-end issues that prevent search engines from crawling your site. We optimize for speed, mobile-friendliness, and clean architecture.",
    features: ["Site Speed Optimization", "Crawl Error Fixing", "XML Sitemaps", "Mobile-First Optimization"],
    color: "bg-green-500/10 text-green-600"
  },
  {
    title: "Link Building & Authority",
    icon: <TrendingUp className="w-10 h-10" />,
    desc: "Building a strong backlink profile that tells search engines your site is a trusted authority. We focus on high-quality, relevant links.",
    features: ["Blogger Outreach", "Guest Posting", "Brand Mentions", "Toxic Link Removal"],
    color: "bg-orange-500/10 text-orange-600"
  }
];

const faqs = [
  {
    question: "How long until I see SEO results?",
    answer: "SEO is a long-term strategy. While technical fixes can show results quickly, significant ranking improvements usually take 3 to 6 months."
  },
  {
    question: "Do you guarantee #1 rankings?",
    answer: "No reputable agency can guarantee #1 rankings as search algorithms change constantly, but we guarantee improved visibility and traffic growth."
  },
  {
    question: "Is Local SEO different from regular SEO?",
    answer: "Yes, Local SEO focuses on optimizing your presence for location-based searches, specifically for 'near me' queries and Google Maps."
  },
  {
    question: "Will you provide regular reports?",
    answer: "Absolutely. We provide detailed monthly reports tracking keyword rankings, organic traffic growth, and conversion metrics."
  }
];

export default function SEO() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"]
  });
  const scrollX = useTransform(scrollYProgress, [0, 1], [-500, 200]);

  const metrics = [
    { title: "Organic Traffic", desc: "Steady growth in visitors from search engines." },
    { title: "Keyword Rankings", desc: "Climbing to the first page for high-intent terms." },
    { title: "Click-Through Rate", desc: "Optimizing titles to get more clicks." },
    { title: "Conversion Rate", desc: "Turning search visitors into customers." }
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent font-bold tracking-widest uppercase mb-6"
          >
            Search Engine Optimization (SEO)
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-display font-bold text-navy-950 mb-8"
          >
            Dominate the <span className="text-accent">Search Results</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
          >
            Stay visible, stay relevant. Ainovex Technologies builds data-driven SEO strategies that increase your authority and drive consistent organic growth.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-32">
          {subServices.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-10 bg-white rounded-[3rem] border border-slate-100 shadow-xl hover:shadow-2xl transition-all flex flex-col"
            >
              <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-8 ${service.color}`}>
                {service.icon}
              </div>
              <h3 className="text-3xl font-bold text-navy-950 mb-4">{service.title}</h3>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed flex-grow">
                {service.desc}
              </p>
              <div className="space-y-4 pt-6 border-t border-slate-100">
                {service.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0" />
                    <span className="text-base font-medium text-navy-900">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process Flow Section */}
        <div className="mb-32">
          <div className="text-center mb-24">
            <h2 className="text-4xl font-display font-bold text-navy-950 mb-6">Our SEO Methodology</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              A transparent, long-term approach to building organic authority.
            </p>
          </div>

          <div className="relative max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {[
                { step: "1", title: "Audit", desc: "Full technical and content review.", icon: <BarChart /> },
                { step: "2", title: "Research", desc: "Identifying target keywords.", icon: <Search /> },
                { step: "3", title: "Optimization", desc: "Fixing on-page and tech issues.", icon: <Settings /> },
                { step: "4", title: "Authority", desc: "Building high-quality backlinks.", icon: <TrendingUp /> },
                { step: "5", title: "Tracking", desc: "Monthly reports and adjustments.", icon: <Target /> }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 bg-slate-50 border border-slate-100 rounded-[2rem] text-center"
                >
                  <div className="w-12 h-12 bg-accent/10 text-accent rounded-full flex items-center justify-center mx-auto mb-6">
                    {item.icon}
                  </div>
                  <h4 className="font-bold text-lg text-navy-950 mb-2">{item.step}. {item.title}</h4>
                  <p className="text-slate-600 text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Metrics Section */}
        <div ref={scrollRef} className="mb-32 overflow-hidden">
          <h2 className="text-4xl font-display font-bold text-navy-950 mb-12">Success Metrics</h2>
          <motion.div style={{ x: scrollX }} className="flex gap-8">
            {[...metrics, ...metrics].map((metric, i) => (
              <div key={i} className="min-w-[300px] p-8 bg-navy-950 text-white rounded-[2rem]">
                <h3 className="text-2xl font-bold mb-4">{metric.title}</h3>
                <p className="text-slate-400">{metric.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* FAQ Section */}
        <div className="mb-32">
          <h2 className="text-4xl font-display font-bold text-navy-950 text-center mb-16">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-slate-100 rounded-2xl overflow-hidden bg-white shadow-sm">
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-bold text-navy-950">{faq.question}</span>
                  {openFaqIndex === i ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </button>
                <AnimatePresence>
                  {openFaqIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-6 pb-6 text-slate-600"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <section className="bg-navy-950 rounded-[4rem] p-12 md:p-20 text-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Ready to Scale Your Organic Traffic?</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg mb-12">
              Let's create an SEO strategy that puts you in front of the right customers.
            </p>
            <Link to="/contact" className="inline-flex items-center bg-accent hover:bg-accent-hover text-navy-950 px-10 py-5 rounded-2xl font-bold transition-all transform hover:scale-105 gap-2">
              Start Free SEO Audit <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
