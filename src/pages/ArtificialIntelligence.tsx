import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { Brain, Cpu, Bot, BarChart3, MessageSquare, Settings, Layers, ArrowRight, CheckCircle2, Map, CheckCircle, Headset, Zap, Plus, Minus, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

const aiServices = [
  {
    title: "Custom AI Models",
    icon: <Cpu className="w-10 h-10" />,
    desc: "We build bespoke machine learning models designed to solve your specific business challenges. From recommendation engines to specialized classifiers, we create intelligence that adds unique value.",
    features: ["Bespoke ML Algorithms", "Data Model Training", "Algorithm Optimization", "Feature Engineering"],
    color: "bg-blue-500/10 text-blue-600"
  },
  {
    title: "AI Chatbots & Agents",
    icon: <Bot className="w-10 h-10" />,
    desc: "Elevate your customer experience with smart virtual assistants. Our bots use advanced Natural Language Processing (NLP) to understand context and provide human-like interactions at scale.",
    features: ["NLP & NLU Integration", "Multi-platform Deployment", "Intent Recognition", "24/7 Smart Support"],
    color: "bg-purple-500/10 text-purple-600"
  },
  {
    title: "Predictive Analytics",
    icon: <BarChart3 className="w-10 h-10" />,
    desc: "Turn your historical data into a crystal ball for your business. We develop forecasting models that predict market trends, customer behavior, and operational needs with high accuracy.",
    features: ["Trend Forecasting", "Customer Churn Prediction", "Demand Planning", "Risk Modeling"],
    color: "bg-green-500/10 text-green-600"
  },
  {
    title: "Process Automation (RPA)",
    icon: <Zap className="w-10 h-10" />,
    desc: "Eliminate repetitive tasks with intelligent automation. We combine RPA with AI to create workflows that don't just follow rules but learn and adapt to changing data and environments.",
    features: ["Workflow Automation", "Intelligent Document Parsing", "Auto-scaling Processes", "Error Handling AI"],
    color: "bg-orange-500/10 text-orange-600"
  },
  {
    title: "Computer Vision",
    icon: <Layers className="w-10 h-10" />,
    desc: "Give your systems the power of sight. Our vision solutions enable automated quality control, facial recognition, and complex scene analysis for manufacturing, security, and retail.",
    features: ["Object Detection", "Image Classification", "Real-time Video Analysis", "OCR & Text Extraction"],
    color: "bg-rose-500/10 text-rose-600"
  },
  {
    title: "Sentiment Analysis",
    icon: <MessageSquare className="w-10 h-10" />,
    desc: "Understand the 'why' behind the words. We use AI to analyze customer reviews, social media mentions, and feedback to gauge public sentiment and drive data-backed improvements.",
    features: ["Opinion Mining", "Brand Perception Tracking", "Multilingual Support", "Real-time Sentiment Alerts"],
    color: "bg-teal-500/10 text-teal-600"
  }
];

const faqs = [
  {
    question: "How can AI benefit my small business?",
    answer: "AI can help you automate routine tasks, provide personalized experiences to your customers, and uncover growth opportunities hidden in your data that would be impossible to find manually."
  },
  {
    question: "Is AI expensive to implement?",
    answer: "While complex systems can be costly, we focus on scalable solutions. We identify high-impact, lower-cost AI applications first to ensure you see a fast return on your investment before scaling."
  },
  {
    question: "Do I need a massive amount of data?",
    answer: "Not necessarily. While more data often helps, many modern AI techniques like transfer learning allow us to build highly effective models using smaller, more focused datasets or pre-trained systems."
  },
  {
    question: "How do you handle AI ethics and data privacy?",
    answer: "We prioritize transparency and data security in every AI project. Our systems are built to be explainable, and we ensure all data used for training is handled with strict adherence to privacy regulations."
  },
  {
    question: "How long does it take to deploy an AI solution?",
    answer: "Deployment timelines vary based on complexity. Simple integrations can be done in weeks, while custom-trained models usually take 2-4 months from data collection to full deployment."
  }
];

export default function ArtificialIntelligence() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"]
  });
  const scrollX = useTransform(scrollYProgress, [0, 1], [-800, 200]);

  const industries = [
    {
      title: "Technology & Software",
      desc: "We embed intelligence directly into software products, enabling features like automated sorting, smart recommendations, and predictive maintenance that give tech companies a competitive edge."
    },
    {
      title: "E-Commerce & Retail",
      desc: "Our AI solutions power personalized shopping experiences, dynamic pricing models, and optimized inventory management that directly increase conversion rates and reduce operational costs."
    },
    {
      title: "Healthcare & Biotech",
      desc: "We support medical researchers and providers with AI tools for diagnostic assistance, patient data analysis, and drug discovery optimization, always with a focus on precision and privacy."
    },
    {
      title: "Finance & Trading",
      desc: "In the financial world, our models analyze market signals in real-time to support smarter trading decisions and implementation of robust fraud detection systems that learn from emerging patterns."
    },
    {
      title: "Manufacturing & Logistics",
      desc: "We implement computer vision for quality control on assembly lines and AI-driven route optimization for logistics, significantly reducing waste and improving delivery efficiency."
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
            Artificial Intelligence
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-display font-bold text-navy-950 mb-8"
          >
            Smart Solutions for a <span className="text-accent">Scalable Future</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
          >
            We develop AI solutions that automate processes, improve decision-making, and boost efficiency. At Ainovex Technologies, we analyze business needs and deliver scalable, future-ready systems with data insights, automation, and smart performance.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-32">
          {aiServices.map((service, i) => (
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
            <h2 className="text-4xl font-display font-bold text-navy-950 mb-6">Our AI Lifecycle</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              From data collection to model deployment, we ensure a seamless and effective AI journey.
            </p>
          </div>

          <div className="relative max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {[
                { step: "1", title: "Data Audit", desc: "Evaluate available data sources and quality for model training.", icon: <Layers /> },
                { step: "2", title: "Strategy", desc: "Define the right AI approach and model architecture for your goals.", icon: <Settings /> },
                { step: "3", title: "Training", desc: "Develop, train, and iterate on models to achieve peak performance.", icon: <Brain /> },
                { step: "4", title: "Validation", desc: "Rigorous testing to ensure model accuracy and unbiased results.", icon: <CheckCircle /> },
                { step: "5", title: "Deployment", desc: "Seamless integration of AI into your production environment.", icon: <Zap /> }
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
          <h1 className="text-4xl md:text-5xl font-display font-bold text-navy-950 mb-12 text-left tracking-tight">Industries We Empower</h1>
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
            <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-950 text-center tracking-tight">AI & Machine Learning Stack</h2>
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
                    { name: "PyTorch", icon: <Cpu className="w-8 h-8 md:w-10 md:h-10 text-orange-600" /> },
                    { name: "TensorFlow", icon: <Layers className="w-8 h-8 md:w-10 md:h-10 text-orange-500" /> },
                    { name: "OpenAI", icon: <Bot className="w-8 h-8 md:w-10 md:h-10 text-emerald-600" /> },
                    { name: "Hugging Face", icon: <Brain className="w-8 h-8 md:w-10 md:h-10 text-yellow-500" /> },
                    { name: "scikit-learn", icon: <BarChart3 className="w-8 h-8 md:w-10 md:h-10 text-blue-500" /> },
                    { name: "LangChain", icon: <Settings className="w-8 h-8 md:w-10 md:h-10 text-emerald-800" /> },
                    { name: "NLTK", icon: <MessageSquare className="w-8 h-8 md:w-10 md:h-10 text-slate-800" /> }
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
              Clear answers to help you understand how AI can transform your operations.
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
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Ready to lead with Artificial Intelligence?</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg mb-12">
              Let's explore how AI can drive efficiency, growth, and innovation in your business. Scale your operations with smart, future-ready solutions today.
            </p>
            <Link to="/contact" className="inline-flex items-center justify-center bg-accent hover:bg-accent-hover text-navy-950 px-10 py-5 rounded-2xl font-bold transition-all transform hover:scale-105 gap-2 text-lg">
              Explore AI Possibilities <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
