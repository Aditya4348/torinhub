import { motion } from 'framer-motion';
import { useState } from 'react';
import { Rocket, Sparkles, Brain, Code2, RefreshCw } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Lab = () => {
  const { t } = useLanguage();
  const [careerPath, setCareerPath] = useState<string | null>(null);
  const [sideHustle, setSideHustle] = useState<string | null>(null);

  const generateCareer = () => {
    const paths = t.lab.career.paths;
    setCareerPath(paths[Math.floor(Math.random() * paths.length)]);
  };

  const generateHustle = () => {
    const ideas = t.lab.hustle.ideas;
    setSideHustle(ideas[Math.floor(Math.random() * ideas.length)]);
  };

  return (
    <div className="min-h-screen pt-32 px-6 pb-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">{t.lab.title.split(' ').slice(0, -1).join(' ')} <span className="text-purple-accent">{t.lab.title.split(' ').slice(-1)}</span></h1>
          <p className="text-xl text-slate-400 max-w-2xl">
            {t.lab.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Career Path Generator */}
          <motion.div
            whileHover={{ y: -5 }}
            className="glass p-8 rounded-3xl flex flex-col items-center text-center"
          >
            <div className="p-4 bg-purple-accent/10 rounded-2xl mb-6">
              <Rocket className="text-purple-accent" size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4">{t.lab.career.title}</h3>
            <p className="text-slate-400 mb-8">{t.lab.career.desc}</p>
            
            <div className="h-16 flex items-center justify-center mb-8">
              {careerPath && (
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-2xl font-display font-bold text-purple-accent"
                >
                  {careerPath}
                </motion.span>
              )}
            </div>

            <button
              onClick={generateCareer}
              className="w-full py-4 bg-purple-accent rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-purple-600 transition-colors"
            >
              <RefreshCw size={20} /> {t.lab.career.btn}
            </button>
          </motion.div>

          {/* Side Hustle Idea Generator */}
          <motion.div
            whileHover={{ y: -5 }}
            className="glass p-8 rounded-3xl flex flex-col items-center text-center"
          >
            <div className="p-4 bg-neon-cyan/10 rounded-2xl mb-6">
              <Sparkles className="text-neon-cyan" size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4">{t.lab.hustle.title}</h3>
            <p className="text-slate-400 mb-8">{t.lab.hustle.desc}</p>
            
            <div className="h-16 flex items-center justify-center mb-8">
              {sideHustle && (
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-2xl font-display font-bold text-neon-cyan"
                >
                  {sideHustle}
                </motion.span>
              )}
            </div>

            <button
              onClick={generateHustle}
              className="w-full py-4 bg-neon-cyan rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-cyan-600 transition-colors text-navy-900"
            >
              <RefreshCw size={20} /> {t.lab.hustle.btn}
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
