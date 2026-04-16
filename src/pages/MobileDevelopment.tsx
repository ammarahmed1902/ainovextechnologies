import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { Smartphone, Tablet, Cpu, Layout, ArrowRight, CheckCircle2, MessageSquare, Map, Settings, CheckCircle, Headset, Briefcase, Plus, Minus, Zap, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const subServices = [
  {
    title: "iOS App Development",
    icon: <Smartphone className="w-10 h-10" />,
    desc: "We build premium iOS applications using Swift and SwiftUI, ensuring high performance, security, and a seamless user experience tailored for the Apple ecosystem.",
    features: ["Swift & SwiftUI", "Apple Design Guidelines", "App Store Compliance", "Performance Optimization"],
    color: "bg-blue-500/10 text-blue-600"
  },
  {
    title: "Android App Development",
    icon: <Smartphone className="w-10 h-10" />,
    desc: "Custom Android applications built with Kotlin and Java. We focus on scalability, compatibility across multiple devices, and smooth integration with Google services.",
    features: ["Kotlin & Java", "Material Design", "Multi-device Support", "Google Play Optimization"],
    color: "bg-green-500/10 text-green-600"
  },
  {
    title: "Cross-Platform Development",
    icon: <Cpu className="w-10 h-10" />,
    desc: "Build once, run everywhere. We use React Native and Flutter to deliver high-quality mobile apps for both iOS and Android with a single codebase, saving time and cost.",
    features: ["React Native", "Flutter", "Code Reusability", "Native-like Performance"],
    color: "bg-purple-500/10 text-purple-600"
  },
  {
    title: "UI/UX Design for Mobile",
    icon: <Layout className="w-10 h-10" />,
    desc: "Intuitive and engaging mobile interfaces. We focus on user behavior, accessibility, and modern aesthetics to ensure your app is both beautiful and easy to use.",
    features: ["User Research", "Wireframing & Prototyping", "Interactive Design", "Accessibility Standards"],
    color: "bg-orange-500/10 text-orange-600"
  }
];

const faqs = [
  {
    question: "Do you develop for both iOS and Android?",
    answer: "Yes, we specialize in native development for both platforms as well as cross-platform solutions like React Native and Flutter."
  },
  {
    question: "How long does it take to build a mobile app?",
    answer: "A typical mobile app development project takes between 3 to 6 months, depending on features, complexity, and design requirements."
  },
  {
    question: "Will my app be submitted to the App Store and Google Play?",
    answer: "Absolutely. We handle the entire submission process, ensuring your app meets all guidelines and is successfully published on both stores."
  },
  {
    question: "Can you update an existing mobile app?",
    answer: "Yes, we can help with redesigns, adding new features, performance optimization, and general maintenance for existing applications."
  }
];

export default function MobileDevelopment() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"]
  });
  const scrollX = useTransform(scrollYProgress, [0, 1], [-500, 200]);

  const industries = [
    { title: "Healthcare", desc: "Patient management and wellness tracking apps." },
    { title: "E-commerce", desc: "Shopping platforms with secure payment integrations." },
    { title: "Real Estate", desc: "Property listing and virtual tour applications." },
    { title: "Education", desc: "E-learning and student management systems." }
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
            Mobile Development
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-display font-bold text-navy-950 mb-8"
          >
            Advanced <span className="text-accent">Mobile Development</span> Services to Build Powerful Apps
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
          >
            We design and develop high-performance mobile applications that combine modern aesthetics with seamless functionality. From concept to App Store delivery, we build apps that scale.
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
            <h2 className="text-4xl font-display font-bold text-navy-950 mb-6">Our Development Process</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              A detailed and collaborative approach to bringing your mobile vision to life.
            </p>
          </div>

          <div className="relative max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {[
                { step: "1", title: "Discovery", desc: "Character Counter is a 100% free online character count calculator that's simple to use. Sometimes users", icon: <MessageSquare /> },
                { step: "2", title: "Strategy", desc: "Defining architecture and roadmap.", icon: <Map /> },
                { step: "3", title: "Development", desc: "Building the application features.", icon: <Settings /> },
                { step: "4", title: "Testing", desc: "Quality assurance and optimization.", icon: <CheckCircle /> },
                { step: "5", title: "Deployment", desc: "Launching to App Stores.", icon: <Zap /> }
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

        {/* Industries Section */}
        <div ref={scrollRef} className="mb-32 overflow-hidden">
          <h2 className="text-4xl font-display font-bold text-navy-950 mb-12">Industries We Serve</h2>
          <motion.div style={{ x: scrollX }} className="flex gap-8">
            {[...industries, ...industries].map((ind, i) => (
              <div key={i} className="min-w-[300px] p-8 bg-navy-950 text-white rounded-[2rem]">
                <h3 className="text-2xl font-bold mb-4">{ind.title}</h3>
                <p className="text-slate-400">{ind.desc}</p>
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
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Have a Mobile App Idea?</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg mb-12">
              Let's turn your vision into a high-performance mobile reality.
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
