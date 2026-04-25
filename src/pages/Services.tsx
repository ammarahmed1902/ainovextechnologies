import { motion } from 'motion/react';
import { Megaphone, Smartphone, Briefcase, Target, Code, Search, Layout, PenTool, ShieldCheck, Shield, Brain, Users, ArrowRight, CheckCircle2, Settings, MessageSquare, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const detailedServices = [
  {
    title: "Digital Marketing",
    icon: <Megaphone className="w-12 h-12" />,
    desc: "At Ainovex Technologies, we deliver result-driven digital marketing strategies to reach the right audience at the right time. We analyze your goals, market, and competition, then optimize SEO, ads, social media, and content for growth, engagement, and conversions.",
    features: ["Social Media Marketing", "Content Marketing", "Pay-Per-Click (PPC) Advertising", "Email Marketing Campaigns", "Social Media Management"],
    color: "bg-accent/10 text-accent",
    path: "/digital-marketing"
  },
  {
    title: "Mobile Development",
    icon: <Smartphone className="w-12 h-12" />,
    desc: "We design and develop mobile apps with smooth performance and modern UX. From idea to execution, we deliver fast, scalable, and user-friendly digital solutions. We plan, design, and develop carefully, ensuring every feature adds value, boosts engagement, and growth.",
    features: ["Custom Mobile App Development", "UI/UX Mobile Design", "App Maintenance & Support", "API Integration Services", "App Testing & Quality Assurance", "Cross-Platform Development"],
    color: "bg-accent/10 text-accent",
    path: "/mobile-development"
  },
  {
    title: "Virtual Assistance",
    icon: <Briefcase className="w-12 h-12" />,
    desc: "Ainovex Technologies provides virtual assistance to keep businesses organized, efficient, and growth-focused by managing tasks, scheduling, communication, and data handling with accuracy while acting as an extension of your team for smooth operations efficiently.",
    features: ["Administrative Support", "Data Entry & Management", "Customer Support Assistance", "Social Media Assistance", "Research & Reporting Tasks", "Calendar & Inbox Management"],
    color: "bg-accent/10 text-accent",
    path: "/virtual-assistance"
  },
  {
    title: "Sales Funnel Development",
    icon: <Target className="w-12 h-12" />,
    desc: "We design sales funnels guiding users from first interaction to purchase with clarity. Each step is optimized to reduce drop-offs and boost conversions using strategic flow, content, and data insights. At Ainovex Technologies, we build funnels that drive revenue growth.",
    features: ["Funnel Strategy & Planning", "Landing Page Design", "Lead Capture Systems", "Email Automation Funnels", "Conversion Optimization", "Funnel Analytics & Tracking"],
    color: "bg-accent/10 text-accent",
    path: "/sales-funnel"
  },
  {
    title: "Web Development",
    icon: <Code className="w-12 h-12" />,
    desc: "Ainovex Technologies builds high-quality websites with strong performance, modern design, and smooth functionality. We create fast, secure, scalable solutions from planning to deployment, ensuring responsive design, great user experience, and real business results.",
    features: ["Custom Web Applications", "Frontend Development", "Backend Development", "E-Commerce Development", "CMS Development", "Website Maintenance & Support"],
    color: "bg-accent/10 text-accent",
    path: "/web-development"
  },
  {
    title: "Search Engine Optimization",
    icon: <Search className="w-12 h-12" />,
    desc: "We help businesses improve search visibility with strong SEO strategies. At Ainovex Technologies, we use keyword research, competitor analysis, technical SEO, content optimization, and ethical link building to increase rankings, organic traffic, and conversions. ",
    features: ["Keyword Research", "On-Page Optimization", "Off-Page Optimization", "Technical SEO", "Content Optimization", "Link Building Strategy", "SEO Performance Tracking"],
    color: "bg-accent/10 text-accent",
    path: "/seo"
  },
  {
    title: "UI UX Design",
    icon: <Layout className="w-12 h-12" />,
    desc: "We create intuitive UI/UX designs focused on user behavior, clarity, and smooth navigation. Our process includes research, wireframing, prototyping, and design execution for usability. At Ainovex Technologies, we balance creativity and function for a better experience.",
    features: ["UI Visual Design Expertise", "Usability Testing Services", "Wireframes & Interactive Prototypes", "Mobile UI Optimization", "User Research & Persona Building", "Design System Development"],
    color: "bg-accent/10 text-accent",
    path: "/ui-ux-design"
  },
  {
    title: "Graphic Design",
    icon: <PenTool className="w-12 h-12" />,
    desc: "At Ainovex Technologies, we create powerful graphic designs that communicate your brand clearly. We understand your identity, audience, and goals, then craft visuals with creativity, consistency, and modern style. Every design builds attention and strengthens your brand.",
    features: ["Brand Identity Design", "Social Media Graphics", "Marketing & Advertising Designs", "UI Graphic Elements", "Print Design Solutions", "Motion Graphics Design"],
    color: "bg-accent/10 text-accent",
    path: "/graphic-design"
  },
  {
    title: "Software Quality Assurance",
    icon: <ShieldCheck className="w-12 h-12" />,
    desc: "We ensure software performs smoothly, securely, and error-free. Our QA process includes functional, usability, performance, and security testing. We detect issues early using manual and automated testing for reliable user experience across all devices. Continuous.",
    features: ["Manual Testing", "Automated Testing", "Performance Testing", "Security Testing", "Regression Testing", "Compatibility Testing", "Usability Testing"],
    color: "bg-accent/10 text-accent",
    path: "/software-qa"
  },
  {
    title: "Lead Generation",
    icon: <Users className="w-12 h-12" />,
    desc: "We at Ainovex Technologies build lead generation systems that attract the right audience and turn interest into business opportunities. We understand your market, create strong offers, and run targeted campaigns to deliver quality leads and steady business growth.",
    features: ["Target Audience Research", "High-Converting Landing Pages", "Paid Ad Campaign Management", "Email Outreach & Automation", "Lead Capture & CRM Integration", "Results Tracking & Optimization"],
    color: "bg-accent/10 text-accent",
    path: "/lead-generation"
  },
  {
    title: "Cyber Security",
    icon: <Shield className="w-12 h-12" />,
    desc: "At Ainovex Technologies, we provide reliable cybersecurity solutions to protect your business from evolving threats. We secure systems, detect vulnerabilities, and ensure continuous monitoring to keep your data safe and operations protected. Ensuring business safety.",
    features: ["Vulnerability Assessment", "Network Security Management", "Endpoint Protection", "Data Backup & Recovery", "Access Control Management", "Security Monitoring & Alerts"],
    color: "bg-accent/10 text-accent",
    path: "/cyber-security"
  },
  {
    title: "Artificial Intelligence",
    icon: <Brain className="w-12 h-12" />,
    desc: "We develop AI solutions that automate processes, improve decision-making, and boost efficiency. At Ainovex Technologies, we analyze business needs and deliver scalable, future-ready systems with data insights, automation, and smart performance. Built for modern growth.",
    features: ["AI Chatbot Development", "Predictive Analytics Solutions", "Process Automation Systems", "AI Data Processing", "Smart Recommendation Engines", "NLP Solutions"],
    color: "bg-accent/10 text-accent",
    path: "/artificial-intelligence"
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
        <section className="bg-navy-950 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(45,212,191,0.1),transparent)]" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
              Ready to transform your ideas into <br /> powerful digital solutions?
            </h2>
            <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
              Let&apos;s build something impactful together and grow your business with confidence.
            </p>
            <Link
              to="/contact"
              className="inline-flex bg-accent hover:bg-accent-hover text-navy-950 px-10 py-5 rounded-2xl font-bold transition-all transform hover:scale-105"
            >
              Schedule a Consultation
            </Link>
          </div>
        </section>
      </div>
    </div >
  );
}
