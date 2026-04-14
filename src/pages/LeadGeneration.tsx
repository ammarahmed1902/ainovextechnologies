import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { Target, Users, Mail, TrendingUp, ArrowRight, CheckCircle2, MessageSquare, Map, Settings, CheckCircle, Plus, Minus, Zap, Search, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const subServices = [
  {
    title: "Targeted Lead Campaigns",
    icon: <Users className="w-10 h-10" />,
    desc: "We build custom audience profiles and run targeted campaigns to attract prospects who are most likely to convert into long-term customers.",
    features: ["Audience Research", "Custom Targeting", "Multichannel Outreach", "Lead Scoring"],
    color: "bg-blue-500/10 text-blue-600"
  },
  {
    title: "SEO-Driven Lead Generation",
    icon: <Search className="w-10 h-10" />,
    desc: "Attracting high-intent buyers through organic search. We optimize your content to rank for the specific terms your ideal leads are using.",
    features: ["Keyword Targeting", "Content Optimization", "Conversion Landing Pages", "Organic Lead Flows"],
    color: "bg-purple-500/10 text-purple-600"
  },
  {
    title: "Social Media Outreach",
    icon: <MessageSquare className="w-10 h-10" />,
    desc: "Leveraging LinkedIn and other platforms to connect directly with decision-makers. We build trust and open doors for your sales team.",
    features: ["LinkedIn Prospecting", "Direct Outreach", "Relationship Building", "Profile Optimization"],
    color: "bg-green-500/10 text-green-600"
  },
  {
    title: "Content Marketing for Leads",
    icon: <TrendingUp className="w-10 h-10" />,
    desc: "Creating high-value assets like whitepapers, case studies, and webinars that encourage prospects to share their details in exchange for value.",
    features: ["Lead Magnets", "Case Study Writing", "Whitepaper Design", "Webinar Funnels"],
    color: "bg-orange-500/10 text-orange-600"
  }
];

const faqs = [
  {
    question: "What is a qualified lead?",
    answer: "A qualified lead is a prospect who matches your ideal customer profile and has shown a clear interest or need for your specific solution."
  },
  {
    question: "How do you ensure lead quality?",
    answer: "We use strict lead scoring and validation processes to ensure your sales team only spends time on prospects with high conversion potential."
  },
  {
    question: "Do you provide the leads in a CRM?",
    answer: "Yes, we can integrate directly with your CRM (HubSpot, Salesforce, etc.) to deliver clean, organized lead data in real-time."
  },
  {
    question: "How long does it take to start getting leads?",
    answer: "Outreach campaigns usually start generating inquiries within the first 1-2 weeks, while SEO lead gen is a more gradual but sustainable growth."
  }
];

export default function LeadGeneration() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"]
  });
  const scrollX = useTransform(scrollYProgress, [0, 1], [-500, 200]);

  const leadTypes = [
    { title: "B2B Leads", desc: "Connecting you with key decision-makers and corporate clients." },
    { title: "High-Intent Leads", desc: "Prospects actively searching for your specific solution." },
    { title: "Cold to Warm", desc: "Nurturing initial interest into sales-ready opportunities." },
    { title: "Global Reach", desc: "Finding leads in specific geographic markets worldwide." }
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
            Lead Generation
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-display font-bold text-navy-950 mb-8"
          >
            Fill Your Pipeline With <span className="text-accent">High-Quality Leads</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
          >
            Ainovex Technologies builds powerful lead generation systems that attract the right audience and convert interest into real business opportunities.
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
            <h2 className="text-4xl font-display font-bold text-navy-950 mb-6">Our Lead Generation Framework</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              A systematic approach to identifying, attracting, and qualifying your future clients.
            </p>
          </div>

          <div className="relative max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {[
                { step: "1", title: "Profiling", desc: "Defining your ideal lead profile.", icon: <Users /> },
                { step: "2", title: "Sourcing", desc: "Identifying leads across platforms.", icon: <Search /> },
                { step: "3", title: "Outreach", desc: "Launching personalized campaigns.", icon: <MessageSquare /> },
                { step: "4", title: "Nurturing", desc: "Building interest and authority.", icon: <TrendingUp /> },
                { step: "5", title: "Delivery", desc: "Sending qualified leads to sales.", icon: <Zap /> }
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

        {/* Lead Types Section */}
        <div ref={scrollRef} className="mb-32 overflow-hidden">
          <h2 className="text-4xl font-display font-bold text-navy-950 mb-12">Lead Types We Deliver</h2>
          <motion.div style={{ x: scrollX }} className="flex gap-8">
            {[...leadTypes, ...leadTypes].map((type, i) => (
              <div key={i} className="min-w-[300px] p-8 bg-navy-950 text-white rounded-[2rem]">
                <h3 className="text-2xl font-bold mb-4">{type.title}</h3>
                <p className="text-slate-400">{type.desc}</p>
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
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Need Consistent Inbound Leads?</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg mb-12">
              Let's build a lead generation system that keeps your sales pipeline full.
            </p>
            <Link to="/contact" className="inline-flex items-center bg-accent hover:bg-accent-hover text-navy-950 px-10 py-5 rounded-2xl font-bold transition-all transform hover:scale-105 gap-2">
              Grow My Pipeline <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
