import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Projects } from './pages/Projects';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { InteractiveTerminal } from './components/InteractiveTerminal';
import { ProjectModal } from './components/ProjectModal';
import { Project } from './data/portfolioData';

export const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="app-layout">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="main-content">
        {activeTab === 'home' && (
          <Home setActiveTab={setActiveTab} onSelectProject={(p) => setSelectedProject(p)} />
        )}
        {activeTab === 'projects' && (
          <Projects onSelectProject={(p) => setSelectedProject(p)} />
        )}
        {activeTab === 'about' && <About />}
        {activeTab === 'terminal' && (
          <div style={{ paddingTop: '20px' }}>
            <div className="section-header">
              <span className="section-tag">// Developer Workstation</span>
              <h1 className="section-title">Interactive Cyber Terminal</h1>
              <p style={{ color: 'var(--text-muted)', marginTop: '8px' }}>
                Run CLI commands directly in your browser to inspect system details, skills matrix, and developer manifesto.
              </p>
            </div>
            <InteractiveTerminal />
          </div>
        )}
        {activeTab === 'contact' && <Contact />}
      </main>

      <Footer setActiveTab={setActiveTab} />

      {/* Project Detail Modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
};

export default App;
