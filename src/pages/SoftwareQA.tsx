import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { ShieldCheck, Bug, Activity, Terminal, ArrowRight, CheckCircle2, MessageSquare, Map, Settings, CheckCircle, Plus, Minus, Zap, Search, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const subServices = [
  {
    title: "Manual Testing",
    icon: <Bug className="w-10 h-10" />,
    desc: "Detailed exploratory, usability, and regression testing performed by expert QA engineers to find bugs that automated tools might miss.",
    features: ["Functional Testing", "Usability Testing", "Regression Testing", "User Acceptance Testing"],
    color: "bg-blue-500/10 text-blue-600"
  },
  {
    title: "Automated Testing",
    icon: <Terminal className="w-10 h-10" />,
    desc: "We build robust automated test suites that speed up the QA process and ensure continuous quality throughout the development lifecycle.",
    features: ["UI Automation", "API Testing", "CI/CD Integration", "Unit & Integration Tests"],
    color: "bg-purple-500/10 text-purple-600"
  },
  {
    title: "Performance & Stress Testing",
    icon: <Activity className="w-10 h-10" />,
    desc: "Ensuring your application can handle heavy loads and remains responsive under pressure. We identify bottlenecks before your users do.",
    features: ["Load Testing", "Scalability Testing", "Stress Testing", "Endurance Testing"],
    color: "bg-green-500/10 text-green-600"
  },
  {
    title: "Security Testing",
    icon: <Shield className="w-10 h-10" />,
    desc: "Protecting your brand and user data by identifying vulnerabilities, ensuring data privacy, and validating compliance with security standards.",
    features: ["Vulnerability Scanning", "Penetration Testing", "Security Audits", "Data Privacy Validation"],
    color: "bg-orange-500/10 text-orange-600"
  }
];

const faqs = [
  {
    question: "Why is Software QA important?",
    answer: "QA ensures your product is reliable, secure, and user-friendly, preventing costly bugs and protecting your brand reputation after launch."
  },
  {
    question: "Do you offer both manual and automated testing?",
    answer: "Yes, we combine both for maximum coverage. Manual testing for usability and automation for repetitive regression tasks."
  },
  {
    question: "When should QA start in the development process?",
    answer: "We believe in 'shifting left'—meaning QA should start as early as the requirements phase to prevent bugs before they are even coded."
  },
  {
    question: "Can you test existing applications?",
    answer: "Absolutely. We can perform full audits and regression testing on legacy or existing products to ensure they meet modern quality standards."
  }
];

export default function SoftwareQA() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"]
  });
  const scrollX = useTransform(scrollYProgress, [0, 1], [-500, 200]);

  const qualityStandards = [
    { title: "Zero Critical Bugs", desc: "Our goal is a bug-free experience for your core features." },
    { title: "High Security", desc: "Rigorous testing to ensure data protection and privacy." },
    { title: "Optimal Speed", desc: "Performance testing for lightning-fast interactions." },
    { title: "User Satisfaction", desc: "Focus on UI/UX quality for a smooth user journey." }
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
            Software Quality Assurance
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-display font-bold text-navy-950 mb-8"
          >
            Deliver <span className="text-accent">Bug-Free</span> Excellence
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
          >
            Ainovex Technologies ensures your software performs flawlessly, stays secure, and delivers a superior user experience with our rigorous QA testing.
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
            <h2 className="text-4xl font-display font-bold text-navy-950 mb-6">Our QA Lifecycle</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              A comprehensive approach to maintaining the highest quality standards.
            </p>
          </div>

          <div className="relative max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {[
                { step: "1", title: "Plan", desc: "Defining test scope and strategy.", icon: <MessageSquare /> },
                { step: "2", title: "Design", desc: "Creating test cases and scripts.", icon: <Settings /> },
                { step: "3", title: "Execute", desc: "Running manual and auto tests.", icon: <Terminal /> },
                { step: "4", title: "Report", desc: "Tracking and reporting issues.", icon: <Search /> },
                { step: "5", title: "Verify", desc: "Validating fixes and regression.", icon: <Zap /> }
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

        {/* Quality Standards Section */}
        <div ref={scrollRef} className="mb-32 overflow-hidden">
          <h2 className="text-4xl font-display font-bold text-navy-950 mb-12">Our Quality Standards</h2>
          <motion.div style={{ x: scrollX }} className="flex gap-8">
            {[...qualityStandards, ...qualityStandards].map((std, i) => (
              <div key={i} className="min-w-[300px] p-8 bg-navy-950 text-white rounded-[2rem]">
                <h3 className="text-2xl font-bold mb-4">{std.title}</h3>
                <p className="text-slate-400">{std.desc}</p>
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
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Is Your Software Ready for Launch?</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg mb-12">
              Let's ensure your product meets the highest standards of quality and performance.
            </p>
            <Link to="/contact" className="inline-flex items-center bg-accent hover:bg-accent-hover text-navy-950 px-10 py-5 rounded-2xl font-bold transition-all transform hover:scale-105 gap-2">
              Start Quality Audit <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
