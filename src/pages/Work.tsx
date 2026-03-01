import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ExternalLink, Github, Code2, Layers, Lightbulb, Zap, Code, Users, Building2, Trophy } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { projectsData } from '../data/Content';

const experiences = [
  {
    role: "Lead System Architect",
    company: "TechNexus Lab",
    period: "2024 - Present",
    desc: "Designing scalable backend architectures for high-traffic applications. Leading a team of 5 developers.",
    impact: "Reduced system latency by 40% through intelligent caching layers.",
    icon: <Zap className="text-purple-accent" />
  },
  {
    role: "Full Stack Developer",
    company: "Creative Solutions Inc.",
    period: "2022 - 2024",
    desc: "Built and shipped 10+ web and mobile products for global clients.",
    impact: "Shipped products used by over 50k active users.",
    icon: <Code className="text-neon-cyan" />
  }
];

const organizations = [
  {
    name: "Global Tech Community",
    role: "Regional Lead",
    period: "2023 - Present",
    desc: "Managing developer relations and organizing monthly meetups for over 1000 members.",
    icon: <Users className="text-pink-500" />
  },
  {
    name: "Open Source Collective",
    role: "Core Contributor",
    period: "2022 - 2023",
    desc: "Contributing to various open-source projects focused on system performance and developer tools.",
    icon: <Building2 className="text-yellow-500" />
  }
];

export const Work = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pt-32 px-6 pb-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">{t.work.title}</h1>
          <p className="text-xl text-slate-400 max-w-2xl">
            {t.work.subtitle}
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {projectsData.map((project) => (
            <motion.div
              key={project.id}
              onClick={() => navigate(`/projects/${project.id}`)}
              className="group cursor-pointer glass rounded-[40px] overflow-hidden flex flex-col"
            >
              <div className="relative h-72 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <span className="px-3 py-1 bg-purple-accent/80 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-widest">
                    {project.complexity} {t.work.complexity}
                  </span>
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-3xl font-bold mb-4 group-hover:text-purple-accent transition-colors">{project.title}</h3>
                <p className="text-slate-400 line-clamp-2 mb-8 text-lg">{project.problem}</p>
                <div className="mt-auto flex items-center justify-between">
                  <div className="flex -space-x-2">
                    {project.stack.slice(0, 3).map((tech, i) => (
                      <div key={tech} className="w-8 h-8 glass rounded-full flex items-center justify-center text-[10px] font-mono border-2 border-navy-900 bg-navy-800">
                        {tech[0]}
                      </div>
                    ))}
                  </div>
                  <span className="text-purple-accent font-bold text-sm group-hover:translate-x-1 transition-transform">Explore →</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Experience Section */}
        <div className="grid lg:grid-cols-2 gap-20 mb-32">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">{t.work.expTitle}</h2>
            <p className="text-xl text-slate-400 mb-12">
              {t.work.expSubtitle}
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-12">
              {t.work.stats.map((stat, i) => (
                <div key={i} className="glass p-8 rounded-3xl text-center">
                  <h3 className="text-4xl font-bold text-purple-accent mb-2">{stat.value}</h3>
                  <p className="text-slate-500 uppercase tracking-widest text-[10px] font-bold">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="space-y-6">
              {experiences.map((exp, i) => (
                <div key={i} className="glass p-8 rounded-3xl hover:bg-white/10 transition-colors">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-white/5 rounded-2xl">{exp.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold">{exp.role}</h3>
                      <p className="text-purple-accent text-sm">{exp.company}</p>
                    </div>
                  </div>
                  <p className="text-slate-400 mb-4">{exp.desc}</p>
                  <p className="text-xs font-mono text-slate-500">{exp.period}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">{t.work.orgTitle}</h2>
            <p className="text-xl text-slate-400 mb-12">
              {t.work.orgSubtitle}
            </p>

            <div className="space-y-6">
              {organizations.map((org, i) => (
                <div key={i} className="glass p-8 rounded-3xl hover:bg-white/10 transition-colors">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-white/5 rounded-2xl">{org.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold">{org.name}</h3>
                      <p className="text-pink-500 text-sm">{org.role}</p>
                    </div>
                  </div>
                  <p className="text-slate-400 mb-4">{org.desc}</p>
                  <p className="text-xs font-mono text-slate-500">{org.period}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 glass p-12 rounded-[40px] relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <Trophy className="text-purple-accent mb-6" size={48} />
              <h3 className="text-2xl font-bold mb-4 italic">"True leadership is building systems that empower others to lead."</h3>
              <p className="text-slate-500 font-mono text-sm">— Adit's Philosophy</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
