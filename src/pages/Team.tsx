import { motion } from 'motion/react';
import { Linkedin, Twitter, Mail, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const team = [
  {
    name: "Dr. Elena Vance",
    role: "Chief Executive Officer",
    bio: "With over 20 years in enterprise tech, Elena leads Ainovex with a vision for ethical AI and global scalability.",
    image: "https://picsum.photos/seed/ceo/400/500",
    social: { linkedin: "#", twitter: "#" }
  },
  {
    name: "Marcus Thorne",
    role: "Chief Technology Officer",
    bio: "A pioneer in cloud architecture, Marcus oversees our technical roadmap and infrastructure security.",
    image: "https://picsum.photos/seed/cto/400/500",
    social: { linkedin: "#", github: "#" }
  },
  {
    name: "Sarah Chen",
    role: "Head of Design",
    bio: "Sarah ensures that every product we build is not only functional but provides a world-class user experience.",
    image: "https://picsum.photos/seed/design/400/500",
    social: { linkedin: "#", dribbble: "#" }
  },
  {
    name: "James Wilson",
    role: "VP of Engineering",
    bio: "James manages our global engineering teams, fostering a culture of excellence and agile innovation.",
    image: "https://picsum.photos/seed/engineer/400/500",
    social: { linkedin: "#", twitter: "#" }
  },
  {
    name: "Anya Petrova",
    role: "AI Research Lead",
    bio: "Leading our Singapore lab, Anya focuses on the next generation of predictive analytics and LLM optimization.",
    image: "https://picsum.photos/seed/ai/400/500",
    social: { linkedin: "#", twitter: "#" }
  },
  {
    name: "Robert Aris",
    role: "Head of Cybersecurity",
    bio: "Robert ensures that our zero-trust protocols and data encryption standards remain impenetrable.",
    image: "https://picsum.photos/seed/security/400/500",
    social: { linkedin: "#", twitter: "#" }
  }
];

export default function Team() {
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
            Meet the <span className="text-accent">Visionaries</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
          >
            Our team is a global collective of engineers, designers, and strategists dedicated to building the future of enterprise technology.
          </motion.p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-32">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="relative mb-8 aspect-[4/5] rounded-[3rem] overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-10">
                  <div className="flex gap-4">
                    <a
                      href="https://www.linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit ${member.name} on LinkedIn`}
                      className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-accent hover:text-navy-950 transition-all"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href="https://x.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit ${member.name} on X`}
                      className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-accent hover:text-navy-950 transition-all"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a
                      href="mailto:hello@ainovextechnologies.com"
                      aria-label={`Email ${member.name}`}
                      className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-accent hover:text-navy-950 transition-all"
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-navy-950 mb-2">{member.name}</h3>
              <p className="text-accent font-bold text-sm uppercase tracking-widest mb-4">{member.role}</p>
              <p className="text-slate-600 leading-relaxed">{member.bio}</p>
            </motion.div>
          ))}
        </div>

        {/* Culture Section */}
        <section className="bg-navy-50 rounded-[4rem] p-12 md:p-20 mb-32">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl font-display font-bold text-navy-950 mb-8">Our Culture</h2>
              <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                <p>
                  At Ainovex Technologies, we believe that the best work happens in an environment of trust, autonomy, and continuous learning. We are a remote-first company with a global mindset.
                </p>
                <p>
                  We value diversity of thought and encourage our team members to push boundaries, experiment with new technologies, and challenge the status quo.
                </p>
              </div>
              <div className="mt-10">
                <Link to="/careers" className="inline-flex items-center gap-2 bg-navy-950 text-white px-8 py-4 rounded-2xl font-bold hover:bg-accent hover:text-navy-950 transition-all">
                  Join Our Team <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square rounded-3xl overflow-hidden">
                <img src="https://picsum.photos/seed/culture1/400/400" alt="Culture" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="aspect-square rounded-3xl overflow-hidden mt-8">
                <img src="https://picsum.photos/seed/culture2/400/400" alt="Culture" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-navy-950 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(45,212,191,0.1),transparent)]" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
              Want to work with us?
            </h2>
            <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
              We&apos;re always looking for talented individuals who share our passion for
              innovation.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-accent hover:bg-accent-hover text-navy-950 px-10 py-5 rounded-2xl font-bold transition-all transform hover:scale-105"
            >
              Get in Touch
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
