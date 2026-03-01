import { motion } from 'framer-motion';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, Users, Calendar, Award, Image as ImageIcon } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { organizationsData } from '../data/Content';
import { useEffect } from 'react';

export const OrgDetail = () => {
  const { id } = useParams();
  const { t } = useLanguage();
  const navigate = useNavigate();
  const org = organizationsData.find(o => o.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!org) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Organization Not Found</h1>
          <Link to="/work" className="text-purple-accent hover:underline">Back to Work</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 px-6 pb-20">
      <div className="max-w-7xl mx-auto">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate('/work')}
          className="flex items-center gap-2 text-slate-400 hover:text-purple-accent mb-12 transition-colors group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          {t.work.orgBack}
        </motion.button>

        <div className="grid lg:grid-cols-3 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-2 space-y-12"
          >
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-purple-accent/10 rounded-2xl">
                  <Users className="text-purple-accent" size={32} />
                </div>
                <div>
                  <h1 className="text-5xl md:text-7xl font-bold">{org.name}</h1>
                  <p className="text-xl text-purple-accent font-mono mt-2">{org.role}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-6 text-slate-500 font-mono mb-12">
                <div className="flex items-center gap-2">
                  <Calendar size={18} /> {org.period}
                </div>
              </div>

              <div className="prose prose-invert max-w-none">
                <p className="text-2xl text-slate-300 leading-relaxed">
                  {org.fullDesc}
                </p>
              </div>
            </div>

            <div className="p-10 glass rounded-[40px] border-l-8 border-neon-cyan">
              <h3 className="flex items-center gap-3 text-2xl font-bold mb-6">
                <Award className="text-neon-cyan" size={28} /> {t.work.orgImpact}
              </h3>
              <p className="text-xl text-slate-300 italic">
                "{org.impact}"
              </p>
            </div>

            {/* Gallery Section */}
            <div>
              <h3 className="flex items-center gap-3 text-3xl font-bold mb-10">
                <ImageIcon className="text-purple-accent" size={32} /> {t.work.orgGallery}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {org.gallery.map((img, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="rounded-3xl overflow-hidden glass aspect-video group"
                  >
                    <img 
                      src={img} 
                      alt={`${org.name} gallery ${i}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Sidebar Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="glass p-8 rounded-[40px]">
              <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-6">{t.work.orgRole}</h4>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-accent rounded-full" />
                  <span className="text-slate-300">{org.role}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-accent rounded-full" />
                  <span className="text-slate-300">{org.period}</span>
                </div>
              </div>
            </div>

            <div className="glass p-8 rounded-[40px] bg-gradient-to-br from-purple-accent/10 to-transparent">
              <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-6">Quick Summary</h4>
              <p className="text-slate-400 leading-relaxed">
                {org.desc}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
