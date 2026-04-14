import { motion } from 'motion/react';
import { Calendar, Clock, User, ArrowRight, Search, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { blogCategories, blogPosts } from '../data/blogPosts';

export default function Blog() {
  const featuredPost = blogPosts[0];
  const gridPosts = blogPosts.slice(1);

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero Section */}
        <div className="mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-display font-bold text-navy-950 mb-6"
          >
            Insights & <span className="text-accent">Innovation</span>
          </motion.h1>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-slate-600 max-w-2xl"
            >
              The latest news, technical deep dives, and strategic insights from the experts at Ainovex Technologies.
            </motion.p>
            
            {/* Search Bar */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input 
                type="text" 
                placeholder="Search articles..."
                className="w-full pl-12 pr-4 py-4 bg-white border border-slate-100 rounded-2xl focus:outline-none focus:border-accent transition-colors shadow-sm"
              />
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-3 mb-12">
          {blogCategories.map((cat, idx) => (
            <button 
              key={idx}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${idx === 0 ? 'bg-navy-950 text-white' : 'bg-white text-slate-600 border border-slate-100 hover:border-accent'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured Post */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 group cursor-pointer"
        >
          <Link
            to={`/blog/${featuredPost.slug}`}
            className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-[3rem]"
          >
          <div className="grid lg:grid-cols-2 gap-10 bg-white rounded-[3rem] overflow-hidden border border-slate-100 shadow-xl hover:shadow-2xl transition-all">
            <div className="h-[400px] lg:h-auto overflow-hidden">
              <img 
                src={featuredPost.image} 
                alt={featuredPost.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-10 md:p-16 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-6">
                <span className="px-4 py-1.5 bg-accent/10 text-accent text-xs font-bold rounded-full uppercase tracking-widest">
                  Featured Article
                </span>
                <span className="text-slate-400 text-sm">{featuredPost.category}</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-navy-950 mb-6 group-hover:text-accent transition-colors">
                {featuredPost.title}
              </h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                {featuredPost.excerpt}
              </p>
              <div className="flex items-center gap-6 text-slate-500 text-sm mb-10">
                <span className="flex items-center gap-2"><User className="w-4 h-4" /> {featuredPost.author}</span>
                <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {featuredPost.date}</span>
                <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> {featuredPost.readTime}</span>
              </div>
              <span className="flex items-center gap-2 font-bold text-navy-950 group-hover:gap-4 transition-all">
                Read Full Article <ArrowRight className="w-5 h-5 text-accent" />
              </span>
            </div>
          </div>
          </Link>
        </motion.section>

        {/* Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {gridPosts.map((post, idx) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all cursor-pointer"
            >
              <Link
                to={`/blog/${post.slug}`}
                className="block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-3xl"
              >
              <div className="h-60 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-2 mb-4">
                  <Tag className="w-4 h-4 text-accent" />
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{post.category}</span>
                </div>
                <h3 className="text-2xl font-bold text-navy-950 mb-4 group-hover:text-accent transition-colors">
                  {post.title}
                </h3>
                <p className="text-slate-600 mb-6 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-navy-100 rounded-full flex items-center justify-center text-navy-950 font-bold text-xs">
                      {post.author[0]}
                    </div>
                    <span className="text-sm font-medium text-slate-600">{post.author}</span>
                  </div>
                  <span className="text-xs text-slate-400">{post.readTime}</span>
                </div>
              </div>
              </Link>
            </motion.article>
          ))}
        </div>

        {/* Newsletter Section */}
        <section className="bg-navy-950 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_100%_0%,rgba(45,212,191,0.1),transparent)]" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
              Stay Ahead of the Curve
            </h2>
            <p className="text-slate-400 text-lg mb-10">
              Get the latest insights on AI, cybersecurity, and enterprise tech delivered straight to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-grow px-8 py-5 bg-white/5 border border-white/10 rounded-2xl text-white focus:outline-none focus:border-accent transition-colors"
                required
              />
              <button className="bg-accent hover:bg-accent-hover text-navy-950 px-10 py-5 rounded-2xl font-bold transition-all transform hover:scale-105">
                Subscribe
              </button>
            </form>
            <p className="text-slate-500 text-xs mt-6">
              By subscribing, you agree to our Privacy Policy and consent to receive marketing communications.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
