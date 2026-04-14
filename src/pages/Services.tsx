import { motion } from 'motion/react';
import { Globe, Zap, ShieldCheck, Database, Layout, Smartphone, ArrowRight, CheckCircle2, Cloud, Code, PenTool, Briefcase, Target, Settings, Users, MessageSquare, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const detailedServices = [
  {
    title: "Digital Marketing",
    icon: <Globe className="w-12 h-12" />,
    desc: "At Ainovex Technologies, we deliver result-driven digital marketing strategies that help your business reach the right audience at the right time. Our approach starts with understanding your goals, target market, and competition to build a strong marketing foundation.",
    features: ["Search Engine Optimization (SEO)", "Social Media Marketing", "Pay-Per-Click (PPC) Advertising", "Content Marketing"],
    color: "bg-accent/10 text-accent",
    path: "/digital-marketing"
  },
  {
    title: "Mobile Development",
    icon: <Smartphone className="w-12 h-12" />,
    desc: "We design and develop mobile applications that combine smooth performance with a modern user experience. From idea to deployment, we focus on creating apps that are fast, scalable, and user-friendly. At Ainovex Technologies, our team follows a clear process of planning, designing, and development to ensure every feature adds real value.",
    features: ["iOS & Android Apps", "Cross-Platform Development", "UI/UX Design", "App Store Optimization"],
    color: "bg-accent/10 text-accent",
    path: "/mobile-development"
  },
  {
    title: "Virtual Assistance",
    icon: <Briefcase className="w-12 h-12" />,
    desc: "Ainovex Technologies provides virtual assistance that helps businesses stay organized, efficient, and focused on growth. Our approach begins by understanding your daily tasks, workflows, and priorities to ensure seamless support. From administrative work to scheduling, communication, and data handling, everything is managed with accuracy and professionalism.",
    features: ["Administrative Support", "Scheduling & Calendar Management", "Customer Communication", "Task Management"],
    color: "bg-accent/10 text-accent",
    path: "/virtual-assistance"
  },
  {
    title: "Sales Funnel Development",
    icon: <Database className="w-12 h-12" />,
    desc: "We design and optimize sales funnels that guide your audience from first interaction to final purchase with clarity and precision. Every step is carefully planned to reduce drop-offs and increase conversions through compelling content, strategic flow, and user-focused design.",
    features: ["Lead Capture Pages", "Email Automation Sequences", "Conversion Rate Optimization (CRO)", "A/B Testing & Analytics"],
    color: "bg-accent/10 text-accent",
    path: "/sales-funnel"
  },
  {
    title: "Web Development",
    icon: <Layout className="w-12 h-12" />,
    desc: "Ainovex Technologies develops high-quality websites that combine strong performance, modern design, and seamless functionality. From planning to deployment, every step is focused on creating fast, secure, and scalable web solutions tailored to your business needs.",
    features: ["Custom Web Applications", "E-commerce Solutions", "Progressive Web Apps (PWA)", "API Integrations"],
    color: "bg-accent/10 text-accent",
    path: "/web-development"
  },
  {
    title: "Search Engine Optimization",
    icon: <Zap className="w-12 h-12" />,
    desc: "We help businesses improve their search visibility by building strong SEO strategies that actually deliver results. Our process starts with deep keyword research, competitor analysis, and technical optimization to ensure your website is fully search-engine friendly. ",
    features: ["Keyword Research", "On-Page Optimization", "Off-Page Optimization", "Technical SEO"],
    color: "bg-accent/10 text-accent",
    path: "/seo"
  },
  {
    title: "UI UX Design",
    icon: <Cloud className="w-12 h-12" />,
    desc: "We create intuitive and visually appealing UI/UX designs that focus on user behavior, clarity, and seamless navigation. Every interface is crafted to enhance engagement and make digital interactions simple and enjoyable. Our process includes research, wireframing, prototyping, and detailed design execution to ensure every element serves a purpose.",
    features: ["User Research & Strategy", "Interactive Prototyping", "Responsive Web Design", "Design System Development"],
    color: "bg-accent/10 text-accent",
    path: "/ui-ux-design"
  },
  {
    title: "Graphic Design",
    icon: <Code className="w-12 h-12" />,
    desc: "At Ainovex Technologies, we create visually powerful graphic designs that communicate your brand message with clarity and impact. Our process starts by understanding your brand identity, audience, and goals to ensure every design feels purposeful. From concept creation to final execution, we focus on creativity, consistency, and modern aesthetics.",
    features: ["Logo Design", "Marketing Materials", "Digital Graphics", "Brand Consistency"],
    color: "bg-accent/10 text-accent",
    path: "/graphic-design"
  },
  {
    title: "Software Quality Assurance",
    icon: <PenTool className="w-12 h-12" />,
    desc: "We focus on delivering software that performs smoothly, securely, and without errors. Our QA process includes detailed testing at every stage, from functionality and usability to performance and security. We identify issues early, ensuring your product meets the highest quality standards before launch.",
    features: ["Manual Testing", "Automated Testing", "Performance Testing", "Security Testing"],
    color: "bg-accent/10 text-accent",
    path: "/software-qa"
  },
  {
    title: "Lead Generation",
    icon: <ShieldCheck className="w-12 h-12" />,
    desc: "We at Ainovex Technologies create powerful lead generation systems that attract the right audience and convert interest into real business opportunities. Our approach focuses on understanding your target market, crafting compelling offers, and building strategies that drive consistent inbound leads.",
    features: ["Targeted Lead Campaigns", "SEO-Driven Lead Generation", "Social Media Lead Generation", "Content Marketing for Leads"],
    color: "bg-accent/10 text-accent",
    path: "/lead-generation"
  }
];

export default function Services() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero Section */}
        <div className="text-center mb-24">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-display font-bold text-navy-950 mb-8"
          >
            Smart <span className="text-accent">Digital</span>Solutions<br /> for Real Results
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
          >
            Explore smart digital solutions to boost performance, increase visibility, and deliver real business results now.
          </motion.p>
        </div>
        {/* Detailed Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {detailedServices.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-10 bg-white rounded-[3rem] border border-slate-100 shadow-xl hover:shadow-2xl transition-all group flex flex-col"
            >
              <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-8 transition-transform group-hover:scale-110 ${service.color}`}>
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-navy-950 mb-4">{service.title}</h3>
              <p className="text-slate-600 mb-8 leading-relaxed flex-grow">
                {service.desc}
              </p>
              <div className="space-y-3 mb-10">
                {service.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-sm font-medium text-navy-900">{feature}</span>
                  </div>
                ))}
              </div>
              {service.path ? (
                <Link to={service.path} className="w-full py-4 bg-navy-950 text-white rounded-2xl font-bold hover:bg-accent hover:text-navy-950 transition-all flex items-center justify-center gap-2">
                  LEARN MORE <ArrowRight className="w-5 h-5" />
                </Link>
              ) : (
                <button className="w-full py-4 bg-navy-950 text-white rounded-2xl font-bold hover:bg-accent hover:text-navy-950 transition-all flex items-center justify-center gap-2">
                  LEARN MORE <ArrowRight className="w-5 h-5" />
                </button>
              )}
            </motion.div>
          ))}
        </div>

        {/* Pricing / Why Choose Us Section */}
        <section className="mb-32">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent font-bold tracking-widest uppercase mb-6">
              Pricing Guide
            </div>
            <h2 className="text-4xl font-display font-bold text-navy-950 mb-6">Why Choose Our Services?</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              We deliver more than just services—we build partnerships geared towards your long-term success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              {
                title: "Results-Driven Approach",
                desc: "We focus on delivering measurable results that directly impact your business growth. Every strategy is designed to improve performance, visibility, and overall success effectively.",
                icon: <Target className="w-8 h-8 text-accent" />
              },
              {
                title: "Long-Term Growth Focus",
                desc: "We don’t just deliver projects, we build long-term value. Our strategies are designed to support sustainable growth and keep your business competitive over time.",
                icon: <Settings className="w-8 h-8 text-accent" />
              },
              {
                title: "Skilled & Experienced Team",
                desc: "Our team brings strong industry experience and technical expertise. We combine creativity and strategy to deliver high-quality solutions that meet modern business needs.",
                icon: <Users className="w-8 h-8 text-accent" />
              },
              {
                title: "Clear Communication & Transparency",
                desc: "We maintain open communication throughout the project. You stay updated at every stage, ensuring clarity, trust, and smooth collaboration from start to finish.",
                icon: <MessageSquare className="w-8 h-8 text-accent" />
              },
              {
                title: "Tailored Solutions for Every Business",
                desc: "We don’t believe in one-size-fits-all services. Each solution is customized based on your goals, industry, and target audience for better and more relevant outcomes.",
                icon: <TrendingUp className="w-8 h-8 text-accent" />
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`md:col-span-2 ${i === 3 ? "lg:col-start-2" : ""} ${i === 4 ? "md:col-start-2 lg:col-start-auto" : ""} w-full p-8 bg-slate-50 rounded-[2rem] border border-slate-100 hover:shadow-xl transition-all group flex flex-col items-center text-center`}
              >
                <div className="w-16 h-16 rounded-2xl bg-white border border-slate-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-sm">
                  {item.icon}
                </div>
                <h4 className="font-bold text-xl text-navy-950 mb-4">{item.title}</h4>
                <p className="text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <h2 className="text-4xl font-display font-bold text-navy-950 mb-8">Ready to transform your ideas into <br /> powerful digital solutions?</h2>
          <p className="text-slate-600 mb-12 max-w-2xl mx-auto">Let’s build something impactful together and grow your business with confidence.</p>
          <button className="bg-accent hover:bg-accent-hover text-navy-950 px-10 py-5 rounded-2xl font-bold transition-all transform hover:scale-105">
            Schedule a Consultation
          </button>
        </section>
      </div>
    </div >
  );
}
