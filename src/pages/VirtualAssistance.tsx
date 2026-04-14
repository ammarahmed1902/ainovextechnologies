import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { Briefcase, Calendar, Mail, FileText, ArrowRight, CheckCircle2, MessageSquare, Map, Settings, CheckCircle, Headset, Plus, Minus, Zap, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const subServices = [
  {
    title: "Administrative Support",
    icon: <Briefcase className="w-10 h-10" />,
    desc: "We handle essential daily tasks including data entry, email management, and document preparation, allowing you to focus on high-level business strategy.",
    features: ["Email & Inbox Management", "Data Entry & Processing", "Document Formatting", "Online Research"],
    color: "bg-blue-500/10 text-blue-600"
  },
  {
    title: "Scheduling & Calendar Management",
    icon: <Calendar className="w-10 h-10" />,
    desc: "Efficiently managing your time with strategic calendar planning, meeting coordination, and travel arrangements to ensure a smooth, organized daily schedule.",
    features: ["Appointment Scheduling", "Meeting Coordination", "Travel Planning", "Reminder Systems"],
    color: "bg-purple-500/10 text-purple-600"
  },
  {
    title: "Customer Support & Communication",
    icon: <Headset className="w-10 h-10" />,
    desc: "Maintaining professional communication with your clients through phone, email, and chat. We ensure timely responses and quality support for your audience.",
    features: ["Email Response Handling", "Live Chat Support", "Client Inquiry Management", "Customer Follow-ups"],
    color: "bg-green-500/10 text-green-600"
  },
  {
    title: "Project & Task Coordination",
    icon: <Settings className="w-10 h-10" />,
    desc: "Keeping your projects on track by managing timelines, coordinating with team members, and ensuring all tasks are completed with accuracy and punctuality.",
    features: ["Workflow Management", "Team Coordination", "Deadline Tracking", "Status Reporting"],
    color: "bg-orange-500/10 text-orange-600"
  }
];

const faqs = [
  {
    question: "What tasks can a Virtual Assistant handle?",
    answer: "Our VAs can handle administrative work, scheduling, customer support, data entry, research, and project coordination among other digital tasks."
  },
  {
    question: "Do I get a dedicated Virtual Assistant?",
    answer: "Yes, we assign a dedicated assistant to your project to ensure they understand your specific business needs, tone, and workflow."
  },
  {
    question: "How do we communicate with the VA?",
    answer: "Communication can be handled via Slack, email, Zoom, or any project management tool you prefer (Trello, Asana, etc.)."
  },
  {
    question: "What are the working hours for the VA?",
    answer: "We offer flexible scheduling, including full-time, part-time, and project-based support tailored to your time zone requirements."
  }
];

export default function VirtualAssistance() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"]
  });
  const scrollX = useTransform(scrollYProgress, [0, 1], [-500, 200]);

  const benefits = [
    { title: "Cost Efficiency", desc: "Reduce overhead costs associated with full-time on-site employees." },
    { title: "Increased Productivity", desc: "Focus on core business growth while we handle the routine tasks." },
    { title: "24/7 Availability", desc: "Global support options ensuring your business stays active round the clock." },
    { title: "Scalability", desc: "Easily adjust support hours as your business needs evolve." }
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
            Virtual Assistance
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-display font-bold text-navy-950 mb-8"
          >
            Boost Your <span className="text-accent">Efficiency</span> With Expert Support
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
          >
            Ainovex Technologies provides professional virtual assistance to help you stay organized, save time, and focus on growing your business. We handle the operations so you can focus on the vision.
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
            <h2 className="text-4xl font-display font-bold text-navy-950 mb-6">How We Work</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              A simple, structured process to integrate expert support into your workflow.
            </p>
          </div>

          <div className="relative max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {[
                { step: "1", title: "Assessment", desc: "Understanding tasks and requirements.", icon: <MessageSquare /> },
                { step: "2", title: "Matching", desc: "Selecting the best VA for your needs.", icon: <Map /> },
                { step: "3", title: "Onboarding", desc: "Setting up tools and communication.", icon: <Settings /> },
                { step: "4", title: "Execution", desc: "Managing daily tasks and support.", icon: <Clock /> },
                { step: "5", title: "Review", desc: "Regular feedback and quality checks.", icon: <CheckCircle /> }
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

        {/* Benefits Section */}
        <div ref={scrollRef} className="mb-32 overflow-hidden">
          <h2 className="text-4xl font-display font-bold text-navy-950 mb-12">Core Benefits</h2>
          <motion.div style={{ x: scrollX }} className="flex gap-8">
            {[...benefits, ...benefits].map((benefit, i) => (
              <div key={i} className="min-w-[300px] p-8 bg-navy-950 text-white rounded-[2rem]">
                <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
                <p className="text-slate-400">{benefit.desc}</p>
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
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Need Professional Support?</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg mb-12">
              Get a dedicated virtual assistant and take your productivity to the next level.
            </p>
            <Link to="/contact" className="inline-flex items-center bg-accent hover:bg-accent-hover text-navy-950 px-10 py-5 rounded-2xl font-bold transition-all transform hover:scale-105 gap-2">
              Hire an Assistant <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
