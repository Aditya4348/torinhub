import { motion } from 'framer-motion';
import { Mail, Github, Twitter, Linkedin, Send, MessageSquare } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Contact = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen pt-32 px-6 pb-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-5xl md:text-8xl font-bold mb-8">{t.contact.title.split(' ').slice(0, -1).join(' ')} <span className="text-purple-accent">{t.contact.title.split(' ').slice(-1)}</span></h1>
            <p className="text-2xl text-slate-400 mb-12 leading-relaxed">
              {t.contact.subtitle}
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center group-hover:bg-purple-accent transition-colors">
                  <Mail className="text-slate-300 group-hover:text-white" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 uppercase tracking-widest font-bold">{t.contact.email}</p>
                  <p className="text-xl font-bold">hello@adit.dev</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center group-hover:bg-neon-cyan transition-colors">
                  <MessageSquare className="text-slate-300 group-hover:text-navy-900" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 uppercase tracking-widest font-bold">{t.contact.discord}</p>
                  <p className="text-xl font-bold">adit#1337</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-16">
              {[
                { icon: <Github />, link: "#" },
                { icon: <Twitter />, link: "#" },
                { icon: <Linkedin />, link: "#" }
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.link}
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="w-12 h-12 glass rounded-xl flex items-center justify-center hover:text-purple-accent transition-colors"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass p-8 md:p-12 rounded-[40px]"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-500 uppercase tracking-widest">{t.contact.form.name}</label>
                  <input 
                    type="text" 
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-purple-accent transition-colors"
                    placeholder={t.contact.form.placeholderName}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-500 uppercase tracking-widest">{t.contact.form.email}</label>
                  <input 
                    type="email" 
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-purple-accent transition-colors"
                    placeholder={t.contact.form.placeholderEmail}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-500 uppercase tracking-widest">{t.contact.form.subject}</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-purple-accent transition-colors appearance-none">
                  {t.contact.form.subjects.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-500 uppercase tracking-widest">{t.contact.form.message}</label>
                <textarea 
                  rows={5}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-purple-accent transition-colors resize-none"
                  placeholder={t.contact.form.placeholderMsg}
                />
              </div>
              <button className="w-full py-5 bg-purple-accent hover:bg-purple-600 text-white rounded-2xl font-bold flex items-center justify-center gap-2 transition-all hover:scale-[1.02]">
                {t.contact.form.btn} <Send size={20} />
              </button>
            </form>
          </motion.div>
        </div>

        <footer className="mt-32 pt-12 border-t border-white/5 text-center text-slate-600 text-sm">
          <p>© 2026 Adit. Built with intention and React.</p>
        </footer>
      </div>
    </div>
  );
};
