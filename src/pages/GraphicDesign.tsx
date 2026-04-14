import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { PenTool, Palette, Image as ImageIcon, Layout, ArrowRight, CheckCircle2, MessageSquare, Map, Settings, CheckCircle, Plus, Minus, Zap, Brush, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';

const subServices = [
  {
    title: "Brand Identity Design",
    icon: <Brush className="w-10 h-10" />,
    desc: "We create cohesive brand identities that tell your story. From logo design to color palettes and typography, we define how the world sees your brand.",
    features: ["Logo Design", "Brand Guidelines", "Color & Typography", "Brand Voice Mapping"],
    color: "bg-blue-500/10 text-blue-600"
  },
  {
    title: "Marketing Materials",
    icon: <ImageIcon className="w-10 h-10" />,
    desc: "Eye-catching designs for both print and digital marketing. We help you communicate your message effectively across brochures, flyers, and banners.",
    features: ["Brochure & Flyer Design", "Banner & Poster Ads", "Business Card Design", "Presentation Decks"],
    color: "bg-purple-500/10 text-purple-600"
  },
  {
    title: "Social Media Graphics",
    icon: <Palette className="w-10 h-10" />,
    desc: "Engaging visuals tailored for social platforms. We design high-impact posts, stories, and cover images that stop the scroll and drive engagement.",
    features: ["Social Post Design", "Story & Reels Assets", "Profile & Cover Graphics", "Ad Creative Design"],
    color: "bg-green-500/10 text-green-600"
  },
  {
    title: "Custom Illustrations & Icons",
    icon: <PenTool className="w-10 h-10" />,
    desc: "Adding a unique touch to your brand with custom-drawn illustrations and iconography. Stand out from the competition with bespoke visual assets.",
    features: ["Vector Illustrations", "Custom Icon Sets", "Infographic Design", "Character Design"],
    color: "bg-orange-500/10 text-orange-600"
  }
];

const faqs = [
  {
    question: "Do you offer revisions on designs?",
    answer: "Yes, we include a set number of revisions for every project to ensure the final design perfectly matches your vision and requirements."
  },
  {
    question: "What files will I receive?",
    answer: "You will receive high-resolution files in multiple formats (AI, PSD, PDF, PNG, JPG) suitable for both print and digital use."
  },
  {
    question: "Can you design for print?",
    answer: "Absolutely. We understand the technical requirements for print (CMYK, bleeds, margins) and provide print-ready files for all projects."
  },
  {
    question: "How long does a brand identity project take?",
    answer: "A full brand identity project typically takes 2 to 4 weeks, depending on the complexity and number of assets required."
  }
];

export default function GraphicDesign() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"]
  });
  const scrollX = useTransform(scrollYProgress, [0, 1], [-500, 200]);

  const valueProps = [
    { title: "Visual Storytelling", desc: "Designs that communicate your brand values instantly." },
    { title: "Consistency", desc: "Maintaining a unified look across all marketing channels." },
    { title: "Memorability", desc: "Creating visuals that stick in your audience's mind." },
    { title: "Professionalism", desc: "Boosting your brand's credibility with high-end design." }
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
            Graphic Design
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-display font-bold text-navy-950 mb-8"
          >
            Visuals that <span className="text-accent">Tell Your Story</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
          >
            Ainovex Technologies creates powerful, creative, and purposeful designs that help your brand stand out and communicate with clarity.
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
            <h2 className="text-4xl font-display font-bold text-navy-950 mb-6">Our Creative Process</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              How we turn your vision into impactful visual assets.
            </p>
          </div>

          <div className="relative max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {[
                { step: "1", title: "Briefing", desc: "Understanding the project goals.", icon: <MessageSquare /> },
                { step: "2", title: "Concepts", desc: "Sketching initial design ideas.", icon: <Map /> },
                { step: "3", title: "Refining", desc: "Perfecting the chosen direction.", icon: <Settings /> },
                { step: "4", title: "Finalizing", desc: "Adding final touches and details.", icon: <Layers /> },
                { step: "5", title: "Delivery", desc: "Providing all file formats.", icon: <Zap /> }
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

        {/* Value Prop Section */}
        <div ref={scrollRef} className="mb-32 overflow-hidden">
          <h2 className="text-4xl font-display font-bold text-navy-950 mb-12">The Power of Design</h2>
          <motion.div style={{ x: scrollX }} className="flex gap-8">
            {[...valueProps, ...valueProps].map((prop, i) => (
              <div key={i} className="min-w-[300px] p-8 bg-navy-950 text-white rounded-[2rem]">
                <h3 className="text-2xl font-bold mb-4">{prop.title}</h3>
                <p className="text-slate-400">{prop.desc}</p>
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
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Need Stunning Visuals?</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg mb-12">
              Let's create designs that represent your brand and engage your audience.
            </p>
            <Link to="/contact" className="inline-flex items-center bg-accent hover:bg-accent-hover text-navy-950 px-10 py-5 rounded-2xl font-bold transition-all transform hover:scale-105 gap-2">
              Start Your Design <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
