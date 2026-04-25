import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { Database, MousePointerClick, Mail, TrendingUp, ArrowRight, CheckCircle2, MessageSquare, Map, Settings, CheckCircle, Plus, Minus, Zap, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const subServices = [
  {
    title: "Funnel Strategy & Planning",
    icon: <Target className="w-10 h-10" />,
    desc: "We design strategic sales funnels that guide prospects through every stage, from awareness to conversion, ensuring higher engagement, better targeting, and increased revenue through optimized planning.",
    features: ["Audience Segmentation", "Funnel Mapping", "Conversion Path Design", "VOffer Positioning"],
    color: "bg-blue-500/10 text-blue-600"
  },
  {
    title: "Landing Page Design",
    icon: <Mail className="w-10 h-10" />,
    desc: "We design high-converting landing pages that capture attention, guide user behavior, and turn visitors into leads through persuasive layouts, clear messaging, and optimized user experience strategies.",
    features: ["Conversion Focus Design", "CTA Optimization", "Mobile Responsive Layout", "A/B Testing Setup"],
    color: "bg-purple-500/10 text-purple-600"
  },
  {
    title: "Lead Capture Systems",
    icon: <TrendingUp className="w-10 h-10" />,
    desc: "We build powerful lead capture systems that attract, engage, and collect potential customer data through optimized forms, landing pages, and smart funnels designed to increase conversion opportunities.",
    features: ["Data Validation Checks", "Lead Source Tracking", "Form Abandonment Reduction", "CRM Integration Setup"],
    color: "bg-green-500/10 text-green-600"
  },
  {
    title: "Email Automation Funnels",
    icon: <MousePointerClick className="w-10 h-10" />,
    desc: "We design intelligent email automation funnels that nurture leads, build trust, and guide prospects through each stage of the buying journey using personalized, timely, and behavior-driven email sequences.",
    features: ["Segmentation Setup", "Drip Campaign Creation", "Conversion Tracking", "List Cleaning & Management"],
    color: "bg-orange-500/10 text-orange-600"
  },
  {
    title: "Conversion Optimization",
    icon: <TrendingUp className="w-10 h-10" />,
    desc: "We improve each stage of the sales funnel to convert more visitors into customers. By enhancing user journey, messaging, and engagement points, we help boost conversions and overall revenue efficiency.",
    features: ["A/B Testing Setup", "Checkout Flow Optimization", "CTA Performance Analysis", "Conversion Heatmaps Tracking"],
    color: "bg-green-500/10 text-green-600"
  },
  {
    title: "Funnel Analytics & Tracking",
    icon: <TrendingUp className="w-10 h-10" />,
    desc: "We analyze every stage of your sales funnel using advanced tracking tools to understand user behavior, improve conversions, and identify drop-off points for better performance and higher revenue growth.",
    features: ["Stage Performance Mapping", "Click Path Analysis", "Engagement Depth Tracking", "Revenue Attribution Review"],
    color: "bg-purple-500/10 text-purple-600"
  }
];

const faqs = [
  {
    question: "Do you create custom sales funnels?",
    answer: "Yes, we build fully custom sales funnels based on your business goals, audience, and offer strategy."
  },
  {
    question: "How long does it take to build a sales funnel?",
    answer: "It usually takes 1–3 weeks, depending on complexity, pages, and automation requirements."
  },
  {
    question: "Do you provide ongoing funnel optimization?",
    answer: "Yes, we continuously optimize funnels to improve performance and increase conversion rates."
  },
  {
    question: "Do you include upsell and downsell strategies?",
    answer: "Yes, we design upsell and downsell flows to maximize revenue from each customer."
  },
  {
    question: "How often should a sales funnel be updated?",
    answer: "We recommend reviewing and updating funnels every few months based on performance data and market changes."
  }
];

export default function SalesFunnel() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"]
  });
  const scrollX = useTransform(scrollYProgress, [0, 1], [-500, 200]);

  const components = [
    { title: "SaaS & Technology", desc: "We build funnels that drive SaaS leads and boost trial conversions fast." },
    { title: "E-Commerce & Retail", desc: "Our funnels convert visitors into buyers with upsells and checkout flow." },
    { title: "Coaching & Consulting", desc: "We help coaches attract clients using webinars, leads, and automation." },
    { title: "Real Estate", desc: "We capture property leads using landing pages and automated follow-ups." },
    { title: "Digital Marketing Agencies", desc: "Our funnels help agencies generate leads and scale client acquisition." }
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
            Sales Funnel Development
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-display font-bold text-navy-950 mb-8"
          >
            High-Converting <span className="text-accent">Sales Funnels </span>For Fast Growth
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
          >
            We design and optimize sales funnels that guide users step by step, improve engagement, and turn traffic into customers through strategic planning, testing, and ongoing performance improvements.
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
            <h2 className="text-4xl font-display font-bold text-navy-950 mb-6">Our Workflow: From Idea to Impact</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Clear steps guide us in achieving fast and accurate results.
            </p>
          </div>

          <div className="relative max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {[
                { step: "1", title: "Research", desc: "We study audience behavior, market trends, and competitors to identify strong funnel opportunities.", icon: <Map /> },
                { step: "2", title: "Strategy", desc: "Our planning defines funnel stages, customer journey, and conversion-focused growth pathways.", icon: <Database /> },
                { step: "3", title: "Design", desc: "We design a funnel structure with optimized pages and a smooth user experience flow for conversions.", icon: <Settings /> },
                { step: "4", title: "Execution", desc: "Campaigns run across platforms, guiding users through each funnel stage smoothly and effectively.", icon: <Zap /> },
                { step: "5", title: "Optimization", desc: "Performance is tracked and improved continuously to increase conversions and maximize revenue growth.", icon: <CheckCircle /> }
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

        {/* Components Section */}
        <div ref={scrollRef} className="mb-32 overflow-hidden">
          <h2 className="text-4xl font-display font-bold text-navy-950 mb-12">Industries We’ve Worked With</h2>
          <motion.div style={{ x: scrollX }} className="flex gap-8">
            {[...components, ...components].map((comp, i) => (
              <div key={i} className="min-w-[300px] p-8 bg-navy-950 text-white rounded-[2rem]">
                <h3 className="text-2xl font-bold mb-4">{comp.title}</h3>
                <p className="text-slate-400">{comp.desc}</p>
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
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Getting traffic but not converting it into customers?</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg mb-12">
              Let’s build a powerful sales funnel that guides your visitors step-by-step and converts them into paying clients with ease and strategy.
            </p>
            <Link to="/contact" className="inline-flex items-center bg-accent hover:bg-accent-hover text-navy-950 px-10 py-5 rounded-2xl font-bold transition-all transform hover:scale-105 gap-2">
              Build My Funnel <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
