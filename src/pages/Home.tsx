import React from 'react';
import { ArrowRight, FolderGit2, Cpu, Globe, Smartphone } from 'lucide-react';
import { PORTFOLIO_DATA, Project } from '../data/portfolioData';
import { InteractiveTerminal } from '../components/InteractiveTerminal';

interface HomeProps {
  setActiveTab: (tab: string) => void;
  onSelectProject: (project: Project) => void;
}

export const Home: React.FC<HomeProps> = ({ setActiveTab, onSelectProject }) => {
  const featuredProjects = PORTFOLIO_DATA.projects.filter((p) => p.featured);

  return (
    <div>
      <section className="hero-section">
        <div>
          <div className="badge-status">
            <span className="pulse-dot"></span>
            {PORTFOLIO_DATA.personal.statusBadge}
          </div>

          <h1 className="hero-title">
            Hi, I'm <span className="text-primary-color">Rogers</span>
          </h1>

          <p style={{ fontSize: '1.2rem', color: 'var(--color-primary)', fontWeight: 500, marginBottom: '16px', fontFamily: 'var(--font-sans)' }}>
            {PORTFOLIO_DATA.personal.title}
          </p>

          <p className="hero-subtitle">
            {PORTFOLIO_DATA.personal.tagline} {PORTFOLIO_DATA.personal.bio}
          </p>

          <div className="hero-cta">
            <button onClick={() => setActiveTab('projects')} className="btn-primary">
              <FolderGit2 size={18} /> Explore Projects <ArrowRight size={18} />
            </button>
            <button onClick={() => setActiveTab('contact')} className="btn-secondary">
              Let's Connect
            </button>
          </div>
        </div>

        <div className="hero-stats-grid">
          {PORTFOLIO_DATA.personal.stats.map((stat, idx) => (
            <div key={idx} className="stat-card">
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ margin: '80px 0' }}>
        <div className="section-header">
          <span className="section-tag">// Flagship Systems</span>
          <h2 className="section-title">Production Engineering Work</h2>
        </div>

        <div className="projects-grid">
          {featuredProjects.map((project) => (
            <div key={project.id} className="glass-panel project-card">
              <div className="project-header">
                <span className="project-category-badge">{project.category}</span>
                <span className="text-muted-color" style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)' }}>
                  ★ {project.stars} Stars
                </span>
              </div>

              <h3 className="project-title">{project.title}</h3>
              <div className="project-subtitle">{project.subtitle}</div>
              <p className="project-description">{project.description}</p>

              <div className="project-tags">
                {project.tags.slice(0, 4).map((tag, idx) => (
                  <span key={idx} className="tag-item">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="project-footer">
                <button
                  onClick={() => onSelectProject(project)}
                  className="link-btn"
                  style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                >
                  Architecture & Metrics <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <button onClick={() => setActiveTab('projects')} className="btn-secondary">
            View All {PORTFOLIO_DATA.projects.length} Repositories <ArrowRight size={16} />
          </button>
        </div>
      </section>

      <section style={{ margin: '80px 0' }}>
        <div className="section-header">
          <span className="section-tag">// Architectural Pillars</span>
          <h2 className="section-title">Technical Mastery</h2>
        </div>

        <div className="skills-grid">
          <div className="glass-panel skill-category-card">
            <div className="skill-category-title">
              <Cpu className="text-primary-color" size={20} /> LLM Fine-Tuning & AI Agents
            </div>
            <p className="text-muted-color" style={{ fontSize: '0.92rem', lineHeight: '1.7' }}>
              Fine-tuning pretrained models (LoRA/QLoRA), designing autonomous multi-agent tool execution loops, multimodal vision parsing, and vector search.
            </p>
          </div>

          <div className="glass-panel skill-category-card">
            <div className="skill-category-title">
              <Smartphone className="text-accent-color" size={20} /> Cross-Platform Flutter Mobile
            </div>
            <p className="text-muted-color" style={{ fontSize: '0.92rem', lineHeight: '1.7' }}>
              60fps Flutter & Dart mobile applications with offline-first synchronization, custom platform channels, real-time WebSocket state management, and biometric security.
            </p>
          </div>

          <div className="glass-panel skill-category-card">
            <div className="skill-category-title">
              <Globe className="text-primary-color" size={20} /> Modern Full-Stack & Desktop Systems
            </div>
            <p className="text-muted-color" style={{ fontSize: '0.92rem', lineHeight: '1.7' }}>
              TypeScript, Next.js, React, Node.js REST APIs, Supabase real-time databases, and Electron desktop applications (Kodlama AI IDE).
            </p>
          </div>
        </div>
      </section>

      <section style={{ margin: '80px 0' }}>
        <div className="section-header">
          <span className="section-tag">// Interactive Console</span>
          <h2 className="section-title">Developer CLI Terminal</h2>
        </div>
        <InteractiveTerminal />
      </section>
    </div>
  );
};
