import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, ChevronDown, Globe, Megaphone, Search, Users, Zap, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedBackground from '../components/AnimatedBackground';
import img from "../public/assets/img/whyChoose.jpg";
import img2 from "../public/assets/img/OfficeMeeting.jpeg";

export default function Home() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Can you handle both small and large projects?",
      a: "Yes, at Ainovex, we are equipped to handle projects of all sizes. Whether it’s a small task or a large-scale solution, we ensure the same level of quality and attention."
    },
    {
      q: "How long does a typical project take?",
      a: "Project timelines vary based on scope and complexity. We always provide a clear timeline upfront and ensure timely delivery without compromising quality."
    },
    {
      q: "Do you offer ongoing support after project delivery?",
      a: "Absolutely. We provide ongoing support and maintenance to keep your systems running smoothly and updated as your business grows."
    },
    {
      q: "Do you sign contracts before starting work?",
      a: "Yes, we believe in transparency and professionalism. We finalize all project details through a clear agreement before starting any work."
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 bg-navy-950">
        <AnimatedBackground />

        <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold tracking-widest uppercase mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              Next-Gen Enterprise Software
            </div>
            <h1 className="font-display text-3xl md:text-5xl font-bold text-white leading-[1.1] mb-6">
              Where Innovation   <span className="text-accent">Meets Technology <br /></span> to Build Your Digital Future
            </h1>
            <p className="text-slate-400 text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
              At Ainovex Technologies, we deliver innovative, scalable digital solutions that drive performance, growth, and long-term business success.

            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="bg-accent hover:bg-accent-hover text-navy-950 px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all shadow-lg shadow-accent/20"
              >
                Start Transformation <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="bg-white/5 hover:bg-white/10 text-white border border-white/10 px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center transition-all backdrop-blur-sm"
              >
                Explore Solutions
              </Link>
            </div>

            <div className="mt-12 flex items-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
              <span className="text-white font-display font-bold text-xl">TRUSTED BY</span>
              <div className="flex gap-6">
                <Globe className="w-8 h-8 text-white" />
                <Zap className="w-8 h-8 text-white" />
                <ShieldCheck className="w-8 h-8 text-white" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 bg-gradient-to-br from-navy-900 to-navy-950 border border-white/10 p-8 rounded-3xl shadow-2xl backdrop-blur-xl">
              <div className="flex items-center gap-2 mb-8">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="space-y-6">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-12 bg-white/5 rounded-xl animate-pulse" style={{ animationDelay: `${i * 0.2}s` }}></div>
                ))}
                <div className="grid grid-cols-2 gap-4">
                  <div className="h-32 bg-accent/10 rounded-xl border border-accent/20 flex items-center justify-center">
                    <div className="text-accent font-display font-bold text-3xl">99.9%</div>
                  </div>
                  <div className="h-32 bg-white/5 rounded-xl border border-white/5 flex items-center justify-center">
                    <div className="text-white font-display font-bold text-3xl">24/7</div>
                  </div>
                </div>
              </div>
            </div>
            {/* Decorative rings */}
            <div className="absolute -top-10 -right-10 w-40 h-40 border-2 border-accent/20 rounded-full animate-spin-slow"></div>
            <div className="absolute -bottom-10 -left-10 w-60 h-60 border-2 border-white/10 rounded-full animate-reverse-spin-slow"></div>
          </motion.div>
        </div>
      </section>

      {/* Section 1: Why Choose Ainovex? */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-4xl font-bold text-navy-950 mb-8">Why Choose Ainovex?</h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                Choosing Ainovex means working with a team that truly understands your goals and turns them into smart, result-driven digital solutions. We don’t believe in one-size-fits-all approaches; everything we create is tailored to your business. With a strong focus on quality, transparency, and long-term support, we stay committed beyond delivery. Our blend of creativity and technology ensures you get solutions that are not just functional, but impactful and future-ready.
              </p>
              {/* <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-accent w-5 h-5" />
                  <span className="font-bold text-navy-900">Tailored Solutions</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-accent w-5 h-5" />
                  <span className="font-bold text-navy-900">Long-term Support</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-accent w-5 h-5" />
                  <span className="font-bold text-navy-900">Quality Focused</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-accent w-5 h-5" />
                  <span className="font-bold text-navy-900">Future-ready</span>
                </div>
              </div> */}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src={img}
                alt="Why Choose Us"
                className="rounded-3xl shadow-2xl  w-full max-h-[480px] max-w-[550px] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 right-0 bg-accent p-8 rounded-2xl shadow-xl hidden md:block">
                <div className="text-navy-950 font-display font-bold text-4xl">100%</div>
                <div className="text-navy-950/70 text-sm font-bold uppercase tracking-widest">Commitment</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2: What Sets Us Apart? */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <img
                src={img2}
                alt="What Sets Us Apart"
                className="rounded-3xl shadow-2xl w-full max-h-[480px] max-w-[550px] object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <h2 className="font-display text-4xl font-bold text-navy-950 mb-8">What Sets Us Apart?</h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                We focus on building meaningful digital experiences backed by deep research, clear strategy, and modern technology. Every project is handled with attention to detail, ensuring smooth performance and real business impact. Our team stays flexible, adapts quickly to changing needs, and communicates openly throughout the process. Instead of just delivering services, we work as an extended part of your team to create lasting digital value.
              </p>
              {/* <div className="space-y-4">
                {[
                  "Deep Research & Strategy",
                  "Attention to Detail",
                  "Flexible & Adaptive Team",
                  "Open Communication"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent font-bold">
                      {i + 1}
                    </div>
                    <span className="font-bold text-navy-900">{item}</span>
                  </div>
                ))}
              </div> */}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="font-display text-4xl font-bold text-navy-950 mb-6">Benefits of Working with Ainovex Technologies</h2>
            <p className="text-slate-600 text-lg">
              We provide key advantages that drive faster, smarter, and more efficient business growth online.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Faster Execution & Delivery",
                desc: "We ensure streamlined workflows and agile processes, delivering high-quality projects quickly without compromising performance, precision, or overall excellence.",
                icon: <Globe className="w-8 h-8 text-accent" />
              },
              {
                title: "Adaptive & Scalable Solutions",
                desc: "Our solutions are designed to evolve with your business, allowing easy scaling, updates, and seamless integration with new technologies.",
                icon: <ShieldCheck className="w-8 h-8 text-accent" />
              },
              {
                title: "Reliable Long-Term Support",
                desc: "We provide ongoing post-delivery support, ensuring system stability, continuous improvements, and dependable assistance for smooth long-term digital operations.",
                icon: <Zap className="w-8 h-8 text-accent" />
              }

            ].map((feature, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-all"
              >
                <div className="mb-6">{feature.icon}</div>
                <h3 className="text-xl font-bold text-navy-950 mb-4">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="font-display text-4xl font-bold text-navy-950 mb-6">Our Core Expertise</h2>
              <p className="text-slate-600 text-lg">Our services deliver specialized expertise designed to drive measurable business growth.</p>
            </div>
            <Link to="/services" className="text-accent font-bold flex items-center gap-2 hover:gap-4 transition-all">
              View All Services <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Digital Marketing",
                href: "/digital-marketing",
                desc: "At Ainovex Technologies, we deliver result-driven digital marketing strategies to reach the right audience at the right time.",
                icon: <Megaphone className="w-8 h-8" />
              },
              {
                title: "Search Engine Optimization",
                href: "/seo",
                desc: "We help businesses improve search visibility with strong SEO strategies. At Ainovex Technologies, we use keyword research.",
                icon: <Search className="w-8 h-8" />
              },
              {
                title: "Lead Generation",
                href: "/lead-generation",
                desc: "We at Ainovex Technologies build lead generation systems that attract the right audience and turn interest into business opportunities.",
                icon: <Users className="w-8 h-8" />
              }
            ].map((service, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="p-10 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all group"
              >
                <div className="w-16 h-16 rounded-2xl bg-accent/10 text-accent flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-navy-950 mb-4">{service.title}</h3>
                <p className="text-slate-500 mb-8">{service.desc}</p>
                <Link to={service.href} className="text-navy-950 font-bold flex items-center gap-2 group-hover:text-accent transition-colors">
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 bg-navy-900 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="font-display text-4xl font-bold mb-8">Proven Performance</h2>
              <div className="space-y-6">
                {[
                  "Consistent delivery of quality results",
                  "Fast execution with accurate outcomes",
                  "High client satisfaction across projects",
                  "Scalable solutions for all businesses"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <CheckCircle2 className="text-accent w-6 h-6 shrink-0" />
                    <span className="text-lg text-slate-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              <div className="bg-white/5 p-8 rounded-2xl border border-white/10 text-center">
                <div className="text-5xl font-bold text-accent mb-2">500+</div>
                <div className="text-sm text-slate-400 uppercase tracking-widest">Global Clients</div>
              </div>
              <div className="bg-white/5 p-8 rounded-2xl border border-white/10 text-center">
                <div className="text-5xl font-bold text-accent mb-2">1200+</div>
                <div className="text-sm text-slate-400 uppercase tracking-widest">Projects Completed</div>
              </div>
              <div className="bg-white/5 p-8 rounded-2xl border border-white/10 text-center">
                <div className="text-5xl font-bold text-accent mb-2">950+</div>
                <div className="text-sm text-slate-400 uppercase tracking-widest">Successful Deployments</div>
              </div>
              <div className="bg-white/5 p-8 rounded-2xl border border-white/10 text-center">
                <div className="text-5xl font-bold text-accent mb-2">300+</div>
                <div className="text-sm text-slate-400 uppercase tracking-widest">Repeat Clients</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews / Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="font-display text-4xl font-bold text-navy-950 mb-6">Client Success Stories</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                text: "Our solutions are built to evolve with your business needs. We design flexible systems that can easily scale, update, and integrate with new technologies, ensuring your digital presence always remains relevant and future-ready.",
                author: "James Carter",
                role: "Chief Executive Officer (CEO)",
                img: "https://picsum.photos/seed/p1/100/100"
              },
              {
                text: "We work closely with clients through clear communication and shared planning. This collaborative approach helps us understand your vision better, reduce misunderstandings, and create results that truly match your expectations and business objectives.",
                author: "Olivia Bennett",
                role: "Operations Director",
                img: "https://picsum.photos/seed/p2/100/100"
              }
            ].map((review, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-10 bg-slate-50 rounded-[2.5rem] border border-slate-100 relative"
              >
                <div className="text-accent text-6xl font-serif absolute top-6 right-10 opacity-20">"</div>
                <p className="text-slate-700 text-lg leading-relaxed mb-8 relative z-10 italic">
                  {review.text}
                </p>
                <div className="flex items-center gap-4">
                  <img src={review.img} alt={review.author} className="w-14 h-14 rounded-full object-cover" referrerPolicy="no-referrer" />
                  <div>
                    <h4 className="font-bold text-navy-950">{review.author}</h4>
                    <p className="text-slate-500 text-sm">{review.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-16">
            <Link to="/reviews" className="inline-flex items-center gap-2 text-navy-950 font-bold hover:text-accent transition-colors">
              Read More Testimonials <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Team Preview */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="font-display text-4xl font-bold text-navy-950 mb-6">Meet the Visionaries</h2>
              <p className="text-slate-600 text-lg">Our global collective of experts is dedicated to building the future of enterprise technology.</p>
            </div>
            <Link to="/team" className="bg-navy-950 text-white px-8 py-4 rounded-xl font-bold hover:bg-accent hover:text-navy-950 transition-all flex items-center gap-2">
              View All Team <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Dr. Elena Vance", role: "CEO", img: "https://picsum.photos/seed/ceo/300/400" },
              { name: "Marcus Thorne", role: "CTO", img: "https://picsum.photos/seed/cto/300/400" },
              { name: "Sarah Chen", role: "Design Lead", img: "https://picsum.photos/seed/design/300/400" },
              { name: "James Wilson", role: "VP Engineering", img: "https://picsum.photos/seed/engineer/300/400" }
            ].map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="aspect-[3/4] rounded-2xl overflow-hidden mb-4">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
                </div>
                <h4 className="font-bold text-navy-950">{member.name}</h4>
                <p className="text-slate-500 text-sm">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="font-display text-4xl font-bold text-navy-950 mb-6">Latest Insights</h2>
              <p className="text-slate-600 text-lg">Stay ahead of the curve with our latest technical deep dives and strategic insights.</p>
            </div>
            <Link to="/blog" className="text-navy-950 font-bold flex items-center gap-2 hover:gap-4 transition-all">
              Read All Articles <ArrowRight className="w-4 h-4 text-accent" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "The Future of AI in Enterprise", cat: "AI & ML", img: "https://picsum.photos/seed/ai/600/400" },
              { title: "Securing the Edge in 2026", cat: "Security", img: "https://picsum.photos/seed/sec/600/400" },
              { title: "Cloud Cost Optimization", cat: "Cloud", img: "https://picsum.photos/seed/cloud/600/400" }
            ].map((post, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 hover:shadow-xl transition-all group cursor-pointer"
              >
                <div className="aspect-video overflow-hidden">
                  <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
                </div>
                <div className="p-8">
                  <span className="text-accent text-xs font-bold uppercase tracking-widest mb-2 block">{post.cat}</span>
                  <h4 className="text-xl font-bold text-navy-950 group-hover:text-accent transition-colors">{post.title}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-navy-950 mb-6">Frequently Asked Questions</h2>
            <p className="text-slate-600 text-lg">Everything you need to know about our process and solutions.</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => {
              const isOpen = openFaqIndex === i;

              return (
                <div key={i} className="bg-white rounded-2xl border border-slate-100 overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 p-6 text-left"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${i}`}
                  >
                    <h4 className="font-bold text-navy-950">{faq.q}</h4>
                    <ChevronDown
                      className={`w-5 h-5 text-accent transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {isOpen ? (
                    <div id={`faq-answer-${i}`} className="px-6 pb-6">
                      <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
}
