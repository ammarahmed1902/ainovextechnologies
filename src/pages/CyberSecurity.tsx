import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { Shield, Lock, Activity, Database, AlertTriangle, Search, Terminal, ArrowRight, CheckCircle2, MessageSquare, Map, Settings, CheckCircle, Headset, HardDrive, Plus, Minus, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

const securityServices = [
  {
    title: "Network Security",
    icon: <Lock className="w-10 h-10" />,
    desc: "We protect your internal networks from unauthorized access and attacks. Our multi-layered defense strategy includes advanced firewalls, VPNs, and secure wireless configuration to keep your data flowing safely.",
    features: ["Intrusion Prevention Systems", "Firewall Management", "Secure VPN Solutions", "Wireless Security Audits"],
    color: "bg-blue-500/10 text-blue-600"
  },
  {
    title: "Vulnerability Assessment",
    icon: <Search className="w-10 h-10" />,
    desc: "Stay ahead of threats with proactive identification of security gaps. We perform deep scans and penetration tests to uncover weaknesses in your infrastructure before malicious actors can find them.",
    features: ["Risk Identification", "Penetration Testing", "Security Audits", "Compliance Checks"],
    color: "bg-purple-500/10 text-purple-600"
  },
  {
    title: "Endpoint Protection",
    icon: <Shield className="w-10 h-10" />,
    desc: "Every device is a potential entry point. We secure your laptops, mobile devices, and servers with advanced antivirus, anti-malware, and device management systems to prevent breaches at the source.",
    features: ["Device Management", "Antivirus & EDR", "Patch Management", "Mobile Security"],
    color: "bg-green-500/10 text-green-600"
  },
  {
    title: "Data Encryption & Privacy",
    icon: <Database className="w-10 h-10" />,
    desc: "Protect your most valuable assets with high-level encryption. We ensure that your sensitive business data and customer information remain inaccessible to unauthorized parties, even in the event of a breach.",
    features: ["AES-256 Encryption", "Data Loss Prevention", "Secure Cloud Storage", "Privacy Compliance"],
    color: "bg-orange-500/10 text-orange-600"
  },
  {
    title: "Incident Response",
    icon: <AlertTriangle className="w-10 h-10" />,
    desc: "In the event of a security incident, speed is everything. Our rapid response team works to contain the threat, minimize damage, and restore your operations as quickly as possible with minimal data loss.",
    features: ["Crisis Management", "Threat Containment", "System Recovery", "Forensic Analysis"],
    color: "bg-rose-500/10 text-rose-600"
  },
  {
    title: "Security Monitoring",
    icon: <Activity className="w-10 h-10" />,
    desc: "Cyber threats never sleep, and neither do we. We provide 24/7 continuous monitoring of your systems to detect anomalies and respond to potential threats in real-time, ensuring constant protection.",
    features: ["24/7 SOC Services", "Log Analysis", "Real-time Alerts", "Threat Intel Integration"],
    color: "bg-teal-500/10 text-teal-600"
  }
];

const faqs = [
  {
    question: "Why does my small business need cybersecurity?",
    answer: "Cybercriminals often target small businesses because they typically have fewer security measures in place. A single breach can be devastating, making proactive protection essential for any size organization."
  },
  {
    question: "What is a vulnerability assessment?",
    answer: "It is a systematic review of security weaknesses in an information system. It evaluates if the system is susceptible to any known vulnerabilities and recommends the best mitigation strategies."
  },
  {
    question: "How do you handle data privacy and compliance?",
    answer: "We strictly follow industry-standard security frameworks and compliance regulations (such as GDPR or HIPAA where applicable) to ensure all data is handled, stored, and protected with the highest integrity."
  },
  {
    question: "Do you offer 24/7 security monitoring services?",
    answer: "Yes, we provide round-the-clock monitoring and support. Our systems and security experts are always active, ensuring any suspicious activity is detected and addressed immediately."
  },
  {
    question: "How often should we perform security audits?",
    answer: "We recommend comprehensive security audits at least once or twice a year, or whenever there are significant changes to your infrastructure or software."
  }
];

export default function CyberSecurity() {
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
      desc: "We deliver advanced security for tech platforms, ensuring that clean architecture is backed by robust defense mechanisms that protect both intellectual property and user data from evolving digital threats."
    },
    {
      title: "Finance & Fintech",
      desc: "In the financial sector, security is non-negotiable. We implement high-level encryption and rigorous access controls to protect sensitive transactions and maintain compliance with strict industry regulations."
    },
    {
      title: "Healthcare & Pharmaceuticals",
      desc: "We help healthcare providers protect patient records and maintain data privacy. Our focus is on building secure online presences that enhance credibility while strictly adhering to privacy standards."
    },
    {
      title: "E-Commerce & Retail",
      desc: "For online retailers, we secure checkout processes and customer databases. Our strategies prevent data theft and build consumer trust, ensuring that smooth shopping journeys are always safe."
    },
    {
      title: "Legal & Professional Services",
      desc: "We protect confidential client information for legal firms and consultants. Our secure document handling and robust communication channels ensure that sensitive data stays within the firm."
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
            Cyber Security
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-display font-bold text-navy-950 mb-8"
          >
            Protect Your Business From <span className="text-accent">Digital Threats</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
          >
            At Ainovex Technologies, we provide reliable cybersecurity solutions to protect your business from evolving threats. We secure systems, detect vulnerabilities, and ensure continuous monitoring to keep your data safe and operations protected.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-32">
          {securityServices.map((service, i) => (
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
            <h2 className="text-4xl font-display font-bold text-navy-950 mb-6">Our Security Process</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              A structured and comprehensive approach to identifying and mitigating risks.
            </p>
          </div>

          <div className="relative max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {[
                { step: "1", title: "Discovery", desc: "Analyze existing infrastructure and identify critical assets.", icon: <MessageSquare /> },
                { step: "2", title: "Assessment", desc: "Deep dive into potential vulnerabilities and threat vectors.", icon: <Search /> },
                { step: "3", title: "Hardening", desc: "Implement defenses, encryption, and protocols to secure systems.", icon: <Settings /> },
                { step: "4", title: "Monitoring", desc: "Establish round-the-clock surveillance and anomaly detection.", icon: <Activity /> },
                { step: "5", title: "Response", desc: "Maintain ready-to-act protocols for any security incidents.", icon: <Terminal /> }
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
        <div ref={scrollRef} className="mb-32 relative">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-navy-950 mb-12 text-left tracking-tight">Industries We Protect</h1>
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

        {/* Specialized Technologies */}
        <div className="mb-32 w-[100vw] relative left-1/2 -translate-x-1/2 py-16 bg-white border-y border-slate-100 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-950 text-center tracking-tight">Specialized Security Stack</h2>
          </div>

          <div className="relative w-full flex overflow-hidden">
            <div className="absolute inset-y-0 left-0 w-16 md:w-40 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-16 md:w-40 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ ease: "linear", duration: 15, repeat: Infinity }}
              className="flex items-center w-max"
            >
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex items-center">
                  {[
                    { name: "CrowdStrike", icon: <Shield className="w-8 h-8 md:w-10 md:h-10 text-red-600" /> },
                    { name: "Fortinet", icon: <Lock className="w-8 h-8 md:w-10 md:h-10 text-blue-800" /> },
                    { name: "Check Point", icon: <CheckCircle className="w-8 h-8 md:w-10 md:h-10 text-blue-600" /> },
                    { name: "Okta", icon: <Settings className="w-8 h-8 md:w-10 md:h-10 text-blue-500" /> },
                    { name: "Palo Alto", icon: <Activity className="w-8 h-8 md:w-10 md:h-10 text-orange-500" /> },
                    { name: "Splunk", icon: <Database className="w-8 h-8 md:w-10 md:h-10 text-black" /> },
                    { name: "Metasploit", icon: <Terminal className="w-8 h-8 md:w-10 md:h-10 text-slate-800" /> }
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
              Answers to common security questions to help you understand your protection.
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
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Is your business fully protected?</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg mb-12">
              Don't wait for a breach to happen. Secure your systems, protect your data, and ensure business continuity with our professional security services.
            </p>
            <Link to="/contact" className="inline-flex items-center justify-center bg-accent hover:bg-accent-hover text-navy-950 px-10 py-5 rounded-2xl font-bold transition-all transform hover:scale-105 gap-2 text-lg">
              Get A Free Security Audit <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
