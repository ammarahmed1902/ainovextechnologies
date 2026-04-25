import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Layout, Code, Globe, Database, ArrowRight, CheckCircle2, MessageSquare, Map, Settings, CheckCircle, Plus, Minus, Zap, Laptop, ShieldCheck, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const subServices = [
  {
    title: "Custom Website Development",
    icon: <Code className="w-10 h-10" />,
    desc: "We build fully customized websites tailored to your business goals, ensuring a unique design, strong functionality, and seamless user experience that supports growth, performance, and brand identity online.",
    features: ["UI/UX Design", "Responsive Layouts", "CMS Integration", "Performance Optimization"],
    color: "bg-blue-500/10 text-blue-600"
  },
  {
    title: "Frontend Development",
    icon: <Laptop className="w-10 h-10" />,
    desc: "We create responsive and visually engaging frontend experiences that ensure smooth navigation, fast performance, and user-friendly interfaces, improving interaction, usability, and overall website impact.",
    features: ["Responsive Design", "UI Performance Optimization", "Cross-Browser Compatibility", "Interactive UI Elements"],
    color: "bg-purple-500/10 text-purple-600"
  },
  {
    title: "Backend Development",
    icon: <Globe className="w-10 h-10" />,
    desc: "We build powerful backend systems that ensure smooth functionality, secure data handling, and high performance. Our focus is on creating scalable server-side architecture for reliable web applications.",
    features: ["API Development", "Database Management", "Server Optimization", "Security Implementation"],
    color: "bg-green-500/10 text-green-600"
  },
  {
    title: "E-Commerce Development",
    icon: <Database className="w-10 h-10" />,
    desc: "We build powerful e-commerce solutions for seamless online selling, secure transactions, and smooth user experience. Our focus is on scalable stores that drive sales and improve customer satisfaction.",
    features: ["User Journey Mapping", "Sales Performance Insights", "Conversion Behavior Analysis", "Revenue Tracking Reports"],
    color: "bg-orange-500/10 text-orange-600"
  },
  {
    title: "CMS Development",
    icon: <Zap className="w-10 h-10" />,
    desc: "We build flexible CMS solutions that allow easy content management, faster updates, and full control over your website. Our systems ensure scalability, performance, and a user-friendly editing experience.",
    features: ["Content Editing", "Plugin Integration", "Theme Customization", "User Role Setup"],
    color: "bg-orange-500/10 text-orange-600"
  },
  {
    title: "Website Maintenance & Support",
    icon: <Target className="w-10 h-10" />,
    desc: "We provide ongoing website maintenance to keep it fast, secure, and up to date. Issues are fixed quickly, while performance, stability, and user experience are continuously improved for better results.",
    features: ["Traffic Source Insights", "User Journey Mapping", "Conversion Drop Analysis", "Revenue Tracking Metrics"],
    color: "bg-orange-500/10 text-orange-600"
  }
];

const faqs = [
  {
    question: "How long does it take to develop a custom website?",
    answer: "Timelines vary depending on complexity. A standard corporate site takes 4-8 weeks, while complex web applications can take 3-6 months."
  },
  {
    question: "Do you provide ongoing maintenance?",
    answer: "Yes, we offer maintenance packages to ensure your website stays secure, updated, and performs at its best long after launch."
  },
  {
    question: "Will my website be mobile-friendly?",
    answer: "Absolutely. Every website we build is fully responsive, looking and performing perfectly on desktops, tablets, and smartphones."
  },
  {
    question: "Can you help with website security?",
    answer: "Security is a priority. We implement SSL, secure hosting, regular updates, and best coding practices to protect your data."
  }
];

export default function WebDevelopment() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"]
  });
  const scrollX = useTransform(scrollYProgress, [0, 1], [-500, 200]);

  const technologies = [
    { title: "Frontend", desc: "React, Next.js, TypeScript, Tailwind CSS." },
    { title: "Backend", desc: "Node.js, Python, PostgreSQL, MongoDB." },
    { title: "Cloud", desc: "AWS, Google Cloud, Vercel, Docker." },
    { title: "Security", desc: "SSL, OAuth, Data Encryption, Firewalls." }
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
            Web Development
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-display font-bold text-navy-950 mb-8"
          >
            Professional <span className="text-accent">Web Development</span> for Business Growth
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
          >
            We build scalable web solutions focused on performance, user experience, and functionality. Our process ensures clean design, smooth development, and results-driven websites for business growth.
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
              A step-by-step approach helps us deliver strong final outcomes.
            </p>
          </div>

          <div className="relative max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {[
                { step: "1", title: "Planning", desc: "Our team defines project goals, structure, and features to ensure a clear development roadmap.", icon: <MessageSquare /> },
                { step: "2", title: "Design", desc: "User-focused layouts and visuals are created to deliver an engaging and modern website experience.", icon: <Map /> },
                { step: "3", title: "Development", desc: "Clean and scalable code is built to ensure functionality, speed, and smooth website performance.", icon: <Settings /> },
                { step: "4", title: " Testing", desc: "Every feature is tested to remove bugs and ensure security, responsiveness, and stability overall.", icon: <ShieldCheck /> },
                { step: "5", title: "Launch", desc: "The final website is deployed with performance checks, fully optimized and ready for live users.", icon: <Zap /> }
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

        {/* Technology Stack Section */}
        <div ref={scrollRef} className="mb-32 overflow-hidden">
          <h2 className="text-4xl font-display font-bold text-navy-950 mb-12">Our Technology Stack</h2>
          <motion.div style={{ x: scrollX }} className="flex gap-8">
            {[...technologies, ...technologies].map((tech, i) => (
              <div key={i} className="min-w-[300px] p-8 bg-navy-950 text-white rounded-[2rem]">
                <h3 className="text-2xl font-bold mb-4">{tech.title}</h3>
                <p className="text-slate-400">{tech.desc}</p>
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
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Ready to Build Your Digital Presence?</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg mb-12">
              Let's create a website that performs as good as it looks.
            </p>
            <Link to="/contact" className="inline-flex items-center bg-accent hover:bg-accent-hover text-navy-950 px-10 py-5 rounded-2xl font-bold transition-all transform hover:scale-105 gap-2">
              Start Your Project <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
