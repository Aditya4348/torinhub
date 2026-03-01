import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { ScrollProgress, CursorGlow, PageTransition } from './components/LayoutEffects';
import { useDarkMode } from './hooks/useUI';
import { LanguageProvider } from './context/LanguageContext';

// Pages
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Work } from './pages/Work';
import { Thoughts } from './pages/Thoughts';
import { Lab } from './pages/Lab';
import { Contact } from './pages/Contact';

import { ProjectDetail } from './pages/ProjectDetail';
import { BlogDetail } from './pages/BlogDetail';

const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <div key={location.pathname}>
        <Routes location={location}>
          <Route path="/" element={<PageTransition><Home /></PageTransition>} />
          <Route path="/about" element={<PageTransition><About /></PageTransition>} />
          <Route path="/work" element={<PageTransition><Work /></PageTransition>} />
          <Route path="/projects/:id" element={<PageTransition><ProjectDetail /></PageTransition>} />
          <Route path="/blog" element={<PageTransition><Thoughts /></PageTransition>} />
          <Route path="/blog/:id" element={<PageTransition><BlogDetail /></PageTransition>} />
          <Route path="/lab" element={<PageTransition><Lab /></PageTransition>} />
          <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
        </Routes>
      </div>
    </AnimatePresence>
  );
};

export default function App() {
  const { isDark, toggle } = useDarkMode();

  return (
    <LanguageProvider>
      <Router>
        <div className="relative min-h-screen selection:bg-purple-accent selection:text-white">
          <div className="fixed inset-0 bg-navy-900 z-[-2]" />
          <div className="fixed inset-0 bg-grid z-[-1]" />
          
          <ScrollProgress />
          <CursorGlow />
          <Navbar isDark={isDark} toggleDark={toggle} />
          
          <main>
            <AnimatedRoutes />
          </main>
        </div>
      </Router>
    </LanguageProvider>
  );
}
