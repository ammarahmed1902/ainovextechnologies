import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { Briefcase, Calendar, Mail, FileText, ArrowRight, CheckCircle2, MessageSquare, Map, Settings, CheckCircle, Headset, Plus, Minus, Zap, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const subServices = [
  {
    title: "Administrative Support",
    icon: <Briefcase className="w-10 h-10" />,
    desc: "We manage key administrative tasks to keep your business organized and efficient. By handling daily operations, communication, and scheduling, we ensure accuracy, smooth workflow, and stress-free support.",
    features: ["Email Management", "Calendar Scheduling", "Document Handling", "Task Coordination"],
    color: "bg-blue-500/10 text-blue-600"
  },
  {
    title: "Data Entry & Management",
    icon: <Calendar className="w-10 h-10" />,
    desc: "We manage accurate data entry and structured organization to keep business information updated, easily accessible, and well-maintained, ensuring smooth operations and reliable record-keeping efficiency.",
    features: ["Data Cleaning", "Spreadsheet Management", "Record Updating", "Database Organization"],
    color: "bg-purple-500/10 text-purple-600"
  },
  {
    title: "Customer Support & Assistance",
    icon: <Headset className="w-10 h-10" />,
    desc: "We provide professional customer support assistance to handle queries, resolve issues, and ensure smooth communication, improving client satisfaction, response time, and overall service experience quality.",
    features: ["Live Chat Support", "Email Response Handling", "Ticket Resolution Tracking", "Customer Query Management"],
    color: "bg-green-500/10 text-green-600"
  },
  {
    title: "Social Media Assistance",
    icon: <Settings className="w-10 h-10" />,
    desc: "We manage social media assistance by handling posting, engagement, and scheduling tasks to maintain a consistent online presence, improve audience interaction, and support brand visibility and growth online.",
    features: ["Profile Setup Support", "Trend Research Updates", "Influencer Coordination", "Platform Analytics Review"],
    color: "bg-orange-500/10 text-orange-600"
  },
  {
    title: "Research & Reporting Tasks",
    icon: <Settings className="w-10 h-10" />,
    desc: "We conduct in-depth online research and deliver structured reports that support smarter decisions. Our focus is accuracy, clarity, and actionable insights that improve efficiency and save valuable time.",
    features: ["Market Trend Analysis", "Data Collection Tasks", "Competitor Research Reports", "Insight Documentation"],
    color: "bg-orange-500/10 text-orange-600"
  },
  {
    title: "Calendar & Inbox Management",
    icon: <Settings className="w-10 h-10" />,
    desc: "We manage calendars and inboxes efficiently to ensure organized scheduling, timely responses, and smooth communication, helping businesses stay productive, focused, and well-coordinated throughout the day.",
    features: ["Appointment Coordination", "Follow-up Management", "Priority Email Handling", "Task Reminders Setup"],
    color: "bg-orange-500/10 text-orange-600"
  }
];

const FAQs = [
  {
    question: "Do you provide full-time or part-time assistance?",
    answer: "Yes, we offer both full-time and part-time support based on your workload and business needs."
  },
  {
    question: "Can I hire a virtual assistant for specific tasks only?",
    answer: "Yes, you can hire a virtual assistant for specific tasks or projects as per your requirements."
  },
  {
    question: "Do you work in different time zones?",
    answer: "Yes, we work across different time zones to ensure smooth communication and task completion."
  },
  {
    question: "How quickly can I get started with a virtual assistant?",
    answer: "You can get started within a short time after sharing your requirements and finalizing the plan."
  },
  {
    question: "How much does virtual assistance cost?",
    answer: "Pricing depends on task complexity and hours required. We offer flexible plans based on your needs."
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
    { title: "E-Commerce & Retail", desc: "We manage orders, support customers, and keep store operations organized." },
    { title: "Real Estate", desc: "Our support handles listings, schedules, and smooth client communication." },
    { title: "Healthcare & Clinics", desc: "Global support options ensuring your business stays active round the clock." },
    { title: "Digital Marketing Agencies", desc: "We manage appointments, data, and communication for smooth operations." },
    { title: "Startups & Small Businesses", desc: "We support daily tasks, research, and workflows to boost productivity." }
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
            Your Trusted <span className="text-accent">Virtual Assistance</span> Supporter
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
          >
            We provide reliable virtual assistance to manage daily tasks, streamline operations, and support business growth through organized workflows, clear communication, and efficient task handling systems.
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
            <h2 className="text-4xl font-display font-bold text-navy-950 mb-6">From Idea to Impact</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Our process transforms ideas into structured and strong outcomes
            </p>
          </div>

          <div className="relative max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {[
                { step: "1", title: "Planning", desc: "Service tasks are identified, priorities set, and workflows structured for smooth virtual assistance.", icon: <MessageSquare /> },
                { step: "2", title: "Organization", desc: "Calendars, emails, and tasks are arranged systematically to maintain daily productivity and focus.", icon: <Map /> },
                { step: "3", title: "Execution", desc: "Daily tasks are handled efficiently with timely responses, updates, and professional coordination.", icon: <Settings /> },
                { step: "4", title: "Communication", desc: "Clear and consistent communication ensures smooth collaboration and accurate task understanding.", icon: <Clock /> },
                { step: "5", title: "Monitoring", desc: "Work progress is tracked regularly to maintain quality, accuracy, and timely completion of tasks.", icon: <CheckCircle /> }
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
          <h2 className="text-4xl font-display font-bold text-navy-950 mb-12">Industries We’ve Worked With</h2>
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
            {FAQs.map((faq, i) => (
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
