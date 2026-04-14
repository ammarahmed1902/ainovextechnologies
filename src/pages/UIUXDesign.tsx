import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { Layout, Palette, MousePointer2, Smartphone, ArrowRight, CheckCircle2, MessageSquare, Map, Settings, CheckCircle, Plus, Minus, Zap, PenTool, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';

const subServices = [
  {
    title: "User Research & Strategy",
    icon: <MessageSquare className="w-10 h-10" />,
    desc: "Understanding your users is our first priority. We use data-driven research, persona building, and journey mapping to ensure every design choice is backed by insight.",
    features: ["User Interviews", "Competitive Analysis", "User Personas", "Strategy Workshops"],
    color: "bg-blue-500/10 text-blue-600"
  },
  {
    title: "Wireframing & Prototyping",
    icon: <Layers className="w-10 h-10" />,
    desc: "We bring your ideas to life with interactive prototypes that allow you to test and refine flows before a single line of code is written.",
    features: ["Low-fidelity Wireframes", "Interactive Prototypes", "User Flow Mapping", "Rapid Iteration"],
    color: "bg-purple-500/10 text-purple-600"
  },
  {
    title: "Visual Interface Design",
    icon: <Palette className="w-10 h-10" />,
    desc: "Crafting modern, visually stunning interfaces that reflect your brand identity. We focus on typography, color theory, and micro-interactions for a premium feel.",
    features: ["Modern UI Design", "Brand Integration", "Micro-animations", "Accessibility Standards"],
    color: "bg-green-500/10 text-green-600"
  },
  {
    title: "Design System Development",
    icon: <Settings className="w-10 h-10" />,
    desc: "Creating scalable, consistent design languages that empower your product to grow seamlessly while maintaining a unified look and feel across all platforms.",
    features: ["Component Libraries", "Style Guides", "Design-to-Code Handoff", "Asset Management"],
    color: "bg-orange-500/10 text-orange-600"
  }
];

const faqs = [
  {
    question: "What is the difference between UI and UX?",
    answer: "UX (User Experience) focuses on the internal experience and how a user interacts with a product, while UI (User Interface) focuses on the visual look and feel."
  },
  {
    question: "How long does a typical redesign take?",
    answer: "A complete product design or redesign project typically takes between 4 to 8 weeks, depending on the number of screens and complexity."
  },
  {
    question: "Do you provide Figma files?",
    answer: "Yes, we provide fully organized Figma source files, including design systems, components, and interactive prototypes."
  },
  {
    question: "Do you design for both mobile and web?",
    answer: "Absolutely. We specialize in responsive design, ensuring your product works perfectly on all screen sizes, from mobile to ultra-wide desktops."
  }
];

export default function UIUXDesign() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"]
  });
  const scrollX = useTransform(scrollYProgress, [0, 1], [-500, 200]);

  const principles = [
    { title: "Clarity", desc: "Design that is easy to understand and navigate." },
    { title: "Consistency", desc: "A unified look across all features and platforms." },
    { title: "Accessibility", desc: "Inclusive design for users of all abilities." },
    { title: "Performance", desc: "Fast, smooth interactions that don't lag." }
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
            UI/UX Design
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-display font-bold text-navy-950 mb-8"
          >
            Crafting <span className="text-accent">User-Centric</span> Digital Experiences
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
          >
            We don't just design interfaces; we build meaningful digital journeys that solve problems and delight users at every touchpoint.
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
            <h2 className="text-4xl font-display font-bold text-navy-950 mb-6">Our Design Process</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              A collaborative, iterative approach focused on empathy and excellence.
            </p>
          </div>

          <div className="relative max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {[
                { step: "1", title: "Research", desc: "Understanding goals and users.", icon: <MessageSquare /> },
                { step: "2", title: "Ideation", desc: "Mapping paths and wireframes.", icon: <PenTool /> },
                { step: "3", title: "Design", desc: "Creating high-fidelity visuals.", icon: <Palette /> },
                { step: "4", title: "Prototype", desc: "Building interactive models.", icon: <Layers /> },
                { step: "5", title: "Testing", desc: "Validating with real users.", icon: <Zap /> }
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

        {/* Principles Section */}
        <div ref={scrollRef} className="mb-32 overflow-hidden">
          <h2 className="text-4xl font-display font-bold text-navy-950 mb-12">Our Design Principles</h2>
          <motion.div style={{ x: scrollX }} className="flex gap-8">
            {[...principles, ...principles].map((princ, i) => (
              <div key={i} className="min-w-[300px] p-8 bg-navy-950 text-white rounded-[2rem]">
                <h3 className="text-2xl font-bold mb-4">{princ.title}</h3>
                <p className="text-slate-400">{princ.desc}</p>
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
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Need an Intuitive Digital Experience?</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg mb-12">
              Let's create a design that solves problems and drives engagement.
            </p>
            <Link to="/contact" className="inline-flex items-center bg-accent hover:bg-accent-hover text-navy-950 px-10 py-5 rounded-2xl font-bold transition-all transform hover:scale-105 gap-2">
              Schedule a Design Consultation <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
