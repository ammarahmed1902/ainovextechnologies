import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { Search, Megaphone, Mail, MousePointerClick, ArrowRight, CheckCircle2, PenTool, TrendingUp, MessageSquare, Map, Settings, CheckCircle, Headset, Target, Activity, Briefcase, Plus, Minus } from 'lucide-react';
import { Link } from 'react-router-dom';

const marketingServices = [
  {
    title: "Search Engine Optimization (SEO)",
    icon: <Search className="w-10 h-10" />,
    desc: "Achieve higher rankings and drive organic traffic that converts. Our SEO strategies are built on deep keyword research, technical optimization, and high-quality content creation tailored to your industry.",
    features: ["On-Page & Off-Page SEO", "Technical SEO Audits", "Local SEO Optimization", "Keyword & Competitor Research"],
    color: "bg-blue-500/10 text-blue-600"
  },
  {
    title: "Social Media Marketing",
    icon: <Megaphone className="w-10 h-10" />,
    desc: "Build a loyal community and amplify your brand's voice. We create tailored social media strategies that engage your audience, boost brand awareness, and increase meaningful interactions across all platforms.",
    features: ["Platform-specific Strategies", "Community Management", "Content Creation & Curation", "Social Media Analytics"],
    color: "bg-purple-500/10 text-purple-600"
  },
  {
    title: "Pay-Per-Click (PPC) Advertising",
    icon: <MousePointerClick className="w-10 h-10" />,
    desc: "Maximize your ROI with targeted ad campaigns. We design, launch, and optimize paid ads on Google, Meta, and LinkedIn to ensure your brand reaches high-intent buyers exactly when they are looking for you.",
    features: ["Google Ads & Retargeting", "Social Media Ads (Meta, LinkedIn)", "A/B Testing & Optimization", "Conversion Rate Optimization"],
    color: "bg-green-500/10 text-green-600"
  },
  {
    title: "Email Marketing",
    icon: <Mail className="w-10 h-10" />,
    desc: "Turn leads into loyal customers with personalized, automated email journeys. We craft compelling email campaigns that nurture your audience, keep them informed, and drive consistent sales.",
    features: ["Automated Drip Campaigns", "Newsletter Management", "Audience Segmentation", "Performance Tracking"],
    color: "bg-orange-500/10 text-orange-600"
  },
  {
    title: "Content Marketing & Strategy",
    icon: <PenTool className="w-10 h-10" />,
    desc: "Engage your audience with high-quality, valuable content. We develop and distribute articles, videos, and graphics that establish your brand as an authority and drive profitable customer action.",
    features: ["Blog & Article Writing", "Video Marketing", "Infographics & Visuals", "Distribution Strategy"],
    color: "bg-teal-500/10 text-teal-600"
  },
  {
    title: "Conversion Rate Optimization (CRO)",
    icon: <TrendingUp className="w-10 h-10" />,
    desc: "Maximize the value of your existing traffic. We analyze user behavior and implement data-driven changes to your website or landing pages to significantly increase the percentage of visitors who convert.",
    features: ["A/B & Multivariate Testing", "User Behavior Analytics", "Landing Page Optimization", "Funnel Analysis"],
    color: "bg-rose-500/10 text-rose-600"
  }
];

const faqs = [
  {
    question: "How long does it take to see results from digital marketing?",
    answer: "Results usually start appearing within a few weeks, but significant growth typically takes 2–3 months, depending on strategy and goals."
  },
  {
    question: "Do you provide regular reports and performance updates?",
    answer: "Yes, we provide clear and regular reports so you can track performance, progress, and campaign effectiveness at every stage."
  },
  {
    question: "How much does your digital marketing service cost?",
    answer: "Pricing depends on your business needs, goals, and campaign scope. We offer flexible plans tailored to different budgets."
  },
  {
    question: "What makes your digital marketing service different?",
    answer: "We focus on data-driven strategies, personalized planning, and real business outcomes instead of generic or short-term marketing tactics."
  },
  {
    question: "How do I get started with your digital marketing service?",
    answer: "Simply reach out to us with your requirements, and our team will guide you through a quick onboarding and strategy setup process."
  }
];

export default function DigitalMarketing() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"]
  });
  const scrollX = useTransform(scrollYProgress, [0, 1], [-800, 200]);

  const industries = [
    {
      title: "Technology & IT Services",
      desc: "We’ve built scalable digital platforms for fast-growing tech companies, focusing on performance, clean architecture, and seamless user experiences. Our approach supports innovation-driven teams with solutions that adapt as their products and services evolve over time."
    },
    {
      title: "E-Commerce & Retail",
      desc: "In the online retail space, we’ve delivered conversion-focused digital experiences that help brands attract, engage, and retain customers. Our work emphasizes smooth shopping journeys, strong visual presentation, and strategies that directly improve sales performance."
    },
    {
      title: "Healthcare & Wellness",
      desc: "We’ve supported healthcare and wellness providers by creating clear, trustworthy, and easy-to-navigate digital solutions. The focus has always been on improving patient communication, simplifying information access, and building a reliable online presence that enhances credibility."
    },
    {
      title: "Real Estate",
      desc: "For property-focused businesses, we’ve developed engaging platforms designed to present listings effectively and generate quality inquiries. Our experience includes creating structured layouts, impactful visuals, and lead-driven strategies that connect sellers with serious buyers."
    },
    {
      title: "Education & Training",
      desc: "We’ve also worked with educational organizations to improve how they connect with students digitally. Our solutions help streamline course presentation, strengthen online visibility, and create user-friendly systems that support enrollment and engagement growth."
    }
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
            Digital Marketing
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-display font-bold text-navy-950 mb-8"
          >
            Drive <span className="text-accent">Real Growth</span> With Data-Driven Marketing
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
          >
            We don't just increase your visibility; we build strategic digital marketing campaigns that attract the right audience, generate high-quality leads, and convert them into loyal customers.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-32">
          {marketingServices.map((service, i) => (
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
            <h2 className="text-4xl font-display font-bold text-navy-950 mb-6">Our Process Flow</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              A structured and transparent approach from start to finish.
            </p>
          </div>

          <div className="relative max-w-6xl mx-auto">
            {/* Horizontal Connecting Lines (Desktop only) */}
            <div className="absolute top-[20%] left-[16%] right-[16%] h-[2px] border-t-[3px] border-dashed border-emerald-500/30 hidden md:block z-0" />
            <div className="absolute top-[75%] left-[33%] right-[8%] h-[2px] border-t-[3px] border-dashed border-emerald-500/30 hidden md:block z-0" />

            <div className="grid grid-cols-1 md:grid-cols-6 gap-y-8 md:gap-y-20 md:gap-x-6 relative z-10 px-4 md:px-0">
              {/* Row 1 */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="md:col-span-2 md:col-start-1 md:row-start-1 p-8 bg-emerald-50/70 border border-emerald-100 rounded-[2rem] shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
                <MessageSquare className="w-12 h-12 mb-6 text-emerald-600" />
                <h4 className="font-bold text-xl text-navy-950 mb-3">1. DISCUSSION</h4>
                <p className="text-slate-600 text-base leading-relaxed">Understand client needs, objectives, and goals.</p>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="md:col-span-2 md:col-start-3 md:row-start-1 p-8 bg-emerald-50/70 border border-emerald-100 rounded-[2rem] shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
                <Map className="w-12 h-12 mb-6 text-emerald-600" />
                <h4 className="font-bold text-xl text-navy-950 mb-3">2. PLANNING</h4>
                <p className="text-slate-600 text-base leading-relaxed">Strategize the approach, timeline, and resources required.</p>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="md:col-span-2 md:col-start-5 md:row-start-1 p-8 bg-emerald-50/70 border border-emerald-100 rounded-[2rem] shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
                <Settings className="w-12 h-12 mb-6 text-emerald-600" />
                <h4 className="font-bold text-xl text-navy-950 mb-3">3. IMPLEMENTATION</h4>
                <p className="text-slate-600 text-base leading-relaxed">Execute the plan, developing or delivering the solution.</p>
              </motion.div>

              {/* Row 2 */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="md:col-span-2 md:col-start-2 md:row-start-2 p-8 bg-emerald-50/70 border border-emerald-100 rounded-[2rem] shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
                <CheckCircle className="w-12 h-12 mb-6 text-emerald-600" />
                <h4 className="font-bold text-xl text-navy-950 mb-3">4. TESTING</h4>
                <p className="text-slate-600 text-base leading-relaxed">Validate the solution for effectiveness and reliability.</p>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="md:col-span-2 md:col-start-4 md:row-start-2 p-8 bg-emerald-50/70 border border-emerald-100 rounded-[2rem] shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
                <Headset className="w-12 h-12 mb-6 text-emerald-600" />
                <h4 className="font-bold text-xl text-navy-950 mb-3">5. SUPPORT</h4>
                <p className="text-slate-600 text-base leading-relaxed">Provide ongoing assistance, maintenance, and training.</p>
              </motion.div>

              {/* Goal Highlight */}
              <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 }} className="md:col-span-1 md:col-start-6 md:row-start-2 hidden md:flex items-center justify-center relative">
                <div className="absolute -left-12 w-20 h-[3px] border-t-[3px] border-dashed border-emerald-500/30" />
                <div className="w-32 h-32 rounded-full border-[8px] border-emerald-50 flex items-center justify-center relative bg-white shadow-2xl">
                  <div className="w-16 h-16 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full animate-pulse shadow-xl shadow-emerald-200" />
                  {/* Ring animation */}
                  <div className="absolute inset-0 rounded-full border-[3px] border-emerald-400 animate-ping opacity-20" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        {/* Industries Section */}
        <div ref={scrollRef} className="mb-32 relative">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-navy-950 mb-12 text-left tracking-tight">Industries We’ve Worked With</h1>
          <div className="w-[100vw] relative left-1/2 -translate-x-1/2 overflow-hidden py-4">
            <motion.div style={{ x: scrollX }} className="flex gap-6 md:gap-8 px-6 md:px-12 w-max cursor-grab active:cursor-grabbing">
              {industries.map((ind, i) => (
                <div key={i} className="w-[320px] md:w-[450px] p-8 md:p-10 bg-slate-50 border border-slate-200 rounded-[2rem] hover:shadow-xl hover:-translate-y-2 transition-all flex flex-col gap-6">
                  <div className="w-14 h-14 bg-navy-950 text-white rounded-xl flex items-center justify-center">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-navy-950">{ind.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-base text-justify">
                    {ind.desc}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>


        {/* Specialized Technologies (Auto Scrolling) */}
        <div className="mb-32 w-[100vw] relative left-1/2 -translate-x-1/2 py-16 bg-white border-y border-slate-100 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-950 text-center tracking-tight">Specialized Technologies</h2>
          </div>

          <div className="relative w-full flex overflow-hidden">
            {/* Soft edge masking for smooth entry/exit */}
            <div className="absolute inset-y-0 left-0 w-16 md:w-40 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-16 md:w-40 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ ease: "linear", duration: 15, repeat: Infinity }}
              className="flex items-center w-max"
            >
              {/* Duplicate the array twice to ensure seamless infinite scrolling loop without jumps */}
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex items-center">
                  {[
                    { name: "Meta Ads", icon: <TrendingUp className="w-8 h-8 md:w-10 md:h-10 text-blue-600" /> },
                    { name: "Google Ads", icon: <Search className="w-8 h-8 md:w-10 md:h-10 text-red-500" /> },
                    { name: "ActiveCampaign", icon: <Mail className="w-8 h-8 md:w-10 md:h-10 text-cyan-500" /> },
                    { name: "TikTok Ads", icon: <Megaphone className="w-8 h-8 md:w-10 md:h-10 text-black" /> },
                    { name: "Buffer", icon: <Map className="w-8 h-8 md:w-10 md:h-10 text-slate-800" /> },
                    { name: "HubSpot", icon: <Target className="w-8 h-8 md:w-10 md:h-10 text-orange-500" /> },
                    { name: "Semrush", icon: <Activity className="w-8 h-8 md:w-10 md:h-10 text-orange-600" /> }
                  ].map((tech, j) => (
                    <div key={j} className="flex items-center gap-4 px-10 md:px-16 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer">
                      {tech.icon}
                      <span className="font-display font-bold text-2xl md:text-3xl text-slate-400 whitespace-nowrap">{tech.name}</span>
                    </div>
                  ))}
                </div>
              ))}
            </motion.div>
          </div>
        </div>


        {/* FAQ Section */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-navy-950 mb-6">Frequently Asked Questions</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto mb-10">
              Everything you need to know about what we provide and how our process works.
            </p>
          </div>

          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-start">
            {[faqs.slice(0, 3), faqs.slice(3, 5)].map((colFaqs, colIdx) => (
              <div key={colIdx} className="flex flex-col gap-6 md:gap-8">
                {colFaqs.map((faq, localIndex) => {
                  const globalIndex = colIdx === 0 ? localIndex : localIndex + 3;
                  const isOpen = openFaqIndex === globalIndex;
                  return (
                    <div key={globalIndex} className="border border-slate-100 rounded-3xl overflow-hidden bg-white shadow-sm hover:shadow-lg transition-all duration-300">
                      <button
                        onClick={() => setOpenFaqIndex(isOpen ? null : globalIndex)}
                        className="w-full flex items-start justify-between p-6 md:p-8 text-left bg-white transition-colors cursor-pointer group"
                      >
                        <h3 className="font-bold text-xl text-navy-950 pr-4 mt-1 group-hover:text-accent transition-colors duration-300 leading-snug">
                          {faq.question}
                        </h3>
                        <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? "bg-accent/10 text-accent rotate-180" : "bg-slate-50 text-slate-400 group-hover:bg-slate-100"}`}>
                          {isOpen ? <Minus className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
                        </div>
                      </button>
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                          >
                            <div className="p-6 md:p-8 pt-0 text-slate-600 leading-relaxed text-lg pb-8">
                              <div className="w-full h-px bg-slate-50 mb-6"></div>
                              {faq.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <section className="bg-navy-950 rounded-[4rem] p-12 md:p-20 text-center text-white relative overflow-hidden mb-24">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-grid opacity-10" />
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Looking to grow your business with <br /> Digital Marketing?</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg mb-12">
              Let’s turn your brand into a powerful online presence that attracts the right audience and delivers real, measurable results.
            </p>
            <Link to="/contact" className="inline-flex items-center justify-center bg-accent hover:bg-accent-hover text-navy-950 px-10 py-5 rounded-2xl font-bold transition-all transform hover:scale-105 gap-2 text-lg">
              Start Your Campaign <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}
