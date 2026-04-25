import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { Smartphone, Tablet, Cpu, Layout, ArrowRight, CheckCircle2, MessageSquare, Map, Settings, CheckCircle, Headset, Briefcase, Plus, Minus, Zap, ShieldCheck, Wrench, Plug, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

const subServices = [
  {
    title: "Custom Mobile App Development",
    icon: <Smartphone className="w-10 h-10" />,
    desc: "We create custom mobile applications tailored to your unique business needs, ensuring smooth functionality, user-friendly design, and high performance across platforms to support long-term growth and success.",
    features: ["Feature Planning", "UI Customization", "Platform Compatibility", "App Performance"],
    color: "bg-blue-500/10 text-blue-600"
  },
  {
    title: "UI/UX Mobile Design",
    icon: <Layout className="w-10 h-10" />,
    desc: "We design intuitive mobile interfaces that enhance user experience, improve usability, and keep users engaged. Our approach focuses on clarity, smooth navigation, and visually appealing layouts overall.",
    features: ["App Prototype Design", "Mobile Usability Testing", "Touch Interaction Design", "Design System Consistency"],
    color: "bg-purple-500/10 text-purple-600"
  },
  {
    title: "App Maintenance & Support",
    icon: <Wrench className="w-10 h-10" />,
    desc: "We provide continuous app maintenance and support to ensure smooth performance, security, and stability. Regular updates, issue fixes, and enhancements keep your mobile application reliable and optimized.",
    features: ["Version Upgrade Handling", "Crash Log Monitoring", "Feature Enhancement Updates", "Compatibility Testing Checks"],
    color: "bg-orange-500/10 text-orange-600"
  },
  {
    title: "API Integration Services",
    icon: <Plug className="w-10 h-10" />,
    desc: "We integrate APIs into mobile apps to improve functionality, enable smooth data sharing, and boost performance. This helps apps connect easily with third-party systems and services for better efficiency.",
    features: ["Payment Gateway Setup", "Social Login Integration", "Cloud Service Sync", "Real-Time Data Exchange"],
    color: "bg-teal-500/10 text-teal-600"
  },
  {
    title: "App Testing & Quality Assurance",
    icon: <Activity className="w-10 h-10" />,
    desc: "We ensure your mobile app performs flawlessly through rigorous testing and quality checks, identifying bugs, improving stability, and delivering a smooth, secure, and user-friendly experience across devices.",
    features: ["Device Compatibility Testing", "UI Consistency Review", "Load Performance Check", "Crash Monitoring Setup"],
    color: "bg-red-500/10 text-red-600"
  },
  {
    title: "Cross-Platform Development",
    icon: <Cpu className="w-10 h-10" />,
    desc: "We build cross-platform mobile applications that run smoothly on both Android and iOS, ensuring faster development, consistent performance, and wider audience reach with a single powerful codebase solution.",
    features: ["Unified UI Experience", "Seamless Device Compatibility", "Easy Feature Updates", "Maintenance Efficiency"],
    color: "bg-indigo-500/10 text-indigo-600"
  }
];

const devTools = [
  { name: "React Native", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg" },
  { name: "Swift", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swift/swift-original.svg" },
  { name: "Kotlin", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg" },
  { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
  { name: "Dart", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg" },
  { name: "Android Studio", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/androidstudio/androidstudio-original.svg" },
  { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg" },
  { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" }
];

const faqs = [
  {
    question: "Do you offer hybrid or cross-platform app development?",
    answer: "Yes, we develop both hybrid and cross-platform apps to ensure wider reach, faster development, and cost-effective solutions."
  },
  {
    question: "How do you ensure app security and data protection?",
    answer: "We follow strict security standards, encryption methods, and best coding practices to keep your app and user data fully protected."
  },
  {
    question: "Do you provide regular updates during the development process?",
    answer: "Yes, we share consistent progress updates so you stay informed at every stage of your mobile app development."
  },
  {
    question: "How do I get started with your mobile development service?",
    answer: "Simply contact us with your idea, and our team will guide you through consultation, planning, and project kickoff."
  },
  {
    question: "How much does mobile app development cost?",
    answer: "The cost depends on your app features, complexity, and platform requirements. We offer flexible pricing based on your needs."
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
    { title: "Technology & Startups", desc: "We build scalable apps for startups with fast performance and UX focus." },
    { title: "E-commerce & Retail", desc: "Our apps improve shopping with smooth UX, secure payments, and sales." },
    { title: "Healthcare & Wellness", desc: "We create secure healthcare apps for bookings, info, and patient care." },
    { title: "Education & E-Learning", desc: "Our apps support learning, courses, and student engagement platforms." },
    { title: "Logistics & Transportation", desc: "We streamline logistics apps for tracking, scheduling, and operations." }
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
            Build <span className="text-accent">Mobile Apps</span>That Drive Business Growth
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
          >
            We design and develop mobile apps with user-focused features, smooth performance, and scalable architecture. Each solution is crafted to meet business goals and deliver long-term value.
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
              We apply structured planning to ensure successful project output.
            </p>
          </div>

          <div className="relative max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {[
                { step: "1", title: "Planning", desc: "Our process defines app goals, features, and structure to build a clear mobile development roadmap.", icon: <MessageSquare /> },
                { step: "2", title: "Design", desc: "UI/UX designs are created to ensure smooth navigation, attractive visuals, and strong user engagement.", icon: <Map /> },
                { step: "3", title: "Development", desc: "Clean and scalable code is built to ensure fast performance and seamless mobile app functionality.", icon: <Settings /> },
                { step: "4", title: "Testing", desc: "Every feature is tested to remove bugs and ensure security, stability, and smooth user experience.", icon: <CheckCircle /> },
                { step: "5", title: "Launch", desc: "The app is deployed successfully with performance checks and made ready for real user interaction.", icon: <Zap /> }
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

        {/* Technologies Section */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-navy-950 mb-6">Technologies We Use</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              We leverage the latest and most reliable tools in the industry to build premium mobile applications.
            </p>
          </div>

          <div className="overflow-hidden whitespace-nowrap py-4 w-full flex">
            <motion.div
              className="flex gap-16 min-w-max items-center"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
            >
              {[...devTools, ...devTools].map((tool, i) => (
                <div key={i} className="w-40 h-40 bg-white border border-slate-100 shadow-sm rounded-full flex flex-col items-center justify-center p-6 hover:shadow-md transition-shadow gap-3 cursor-pointer flex-shrink-0">
                  <img
                    src={tool.icon}
                    alt={tool.name}
                    className="w-14 h-14 object-contain"
                  />
                  <span className="text-sm font-bold text-navy-950 text-center whitespace-normal leading-tight">{tool.name}</span>
                </div>
              ))}
            </motion.div>
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
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Looking to grow your business with powerful Mobile ?</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg mb-12">
              Let’s turn your idea into a powerful, user-friendly mobile application that delivers seamless performance and drives real business growth.
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
