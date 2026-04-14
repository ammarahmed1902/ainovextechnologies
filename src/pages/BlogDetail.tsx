import { motion } from 'motion/react';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';

export default function BlogDetail() {
  const { slug } = useParams();
  const post = blogPosts.find((entry) => entry.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <article className="pt-32 pb-20">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10"
        >
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-slate-500 hover:text-accent transition-colors font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to all articles
          </Link>
        </motion.div>

        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="mb-12"
        >
          <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent text-xs font-bold rounded-full uppercase tracking-widest mb-6">
            {post.category}
          </span>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-navy-950 mb-6 leading-tight">
            {post.title}
          </h1>
          <p className="text-xl text-slate-600 mb-8">{post.excerpt}</p>
          <div className="flex flex-wrap items-center gap-6 text-slate-500 text-sm">
            <span className="flex items-center gap-2">
              <User className="w-4 h-4" /> {post.author}
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" /> {post.date}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" /> {post.readTime}
            </span>
          </div>
        </motion.header>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="rounded-[2rem] overflow-hidden border border-slate-100 shadow-xl mb-14"
        >
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-[260px] md:h-[440px] object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12 }}
          className="bg-white rounded-[2rem] border border-slate-100 shadow-sm p-8 md:p-12 space-y-6"
        >
          {post.content.map((paragraph) => (
            <p key={paragraph} className="text-slate-700 text-lg leading-relaxed">
              {paragraph}
            </p>
          ))}
        </motion.section>
      </div>
    </article>
  );
}
