import { motion } from 'framer-motion';
import { Search, Clock, ArrowUpRight } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { blogPostsData } from '../data/Content';

export const Thoughts = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState(t.blog.categories[0]);

  const filteredPosts = activeCategory === t.blog.categories[0] 
    ? blogPostsData 
    : blogPostsData.filter(p => p.category === activeCategory || (activeCategory === "Semua" && p.category));

  return (
    <div className="min-h-screen pt-32 px-6 pb-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">{t.blog.title.split(' ').slice(0, -1).join(' ')} <span className="text-purple-accent">{t.blog.title.split(' ').slice(-1)}</span></h1>
          <p className="text-xl text-slate-400 max-w-2xl">
            {t.blog.subtitle}
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-12">
          {t.blog.categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat 
                  ? "bg-purple-accent text-white" 
                  : "glass text-slate-400 hover:bg-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              onClick={() => navigate(`/blog/${post.id}`)}
              className="group glass rounded-[40px] overflow-hidden flex flex-col cursor-pointer"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 to-transparent" />
                <div className="absolute top-6 right-6 p-3 glass rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight className="text-purple-accent" size={20} />
                </div>
              </div>
              
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-purple-accent">{post.category}</span>
                  <div className="w-1 h-1 bg-slate-600 rounded-full" />
                  <span className="text-[10px] font-mono text-slate-500 flex items-center gap-1">
                    <Clock size={10} /> {post.readTime} {t.blog.readTime}
                  </span>
                </div>

                <h3 className="text-2xl font-bold mb-4 group-hover:text-purple-accent transition-colors line-clamp-2">{post.title}</h3>
                <p className="text-slate-400 mb-6 line-clamp-3">{post.excerpt}</p>
                
                <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-500">{post.date}</span>
                  <span className="text-purple-accent font-bold text-xs">Read More →</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
