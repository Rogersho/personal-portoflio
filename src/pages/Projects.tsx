import React, { useState } from 'react';
import { ArrowRight, Search, Star, ExternalLink, Github, Filter, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA, Project } from '../data/portfolioData';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'AI & ML', 'Mobile Apps', 'Full-Stack', 'Developer Tools'];

  const filteredProjects = PORTFOLIO_DATA.projects.filter((project) => {
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <div style={{ paddingTop: '20px' }}>
      <div className="section-header">
        <span className="section-tag">// Engineering Portfolio</span>
        <h1 className="section-title">Projects & Open Source</h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', marginTop: '8px' }}>
          Explore featured production platforms, open-source AI tools, desktop IDEs, and mobile apps engineered by Rogers.
        </p>
      </div>

      {/* Filter Tabs & Search */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '40px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'rgba(15, 23, 42, 0.7)', padding: '12px 20px', borderRadius: 'var(--radius-full)', border: '1px solid var(--border-glass)' }}>
          <Search size={20} style={{ color: 'var(--text-muted)' }} />
          <input
            type="text"
            placeholder="Search projects by technology (e.g. Flutter, Llama-3, Supabase, Electron)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#fff',
              outline: 'none',
              width: '100%',
              fontSize: '0.95rem'
            }}
          />
        </div>

        <div className="filter-tabs">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-tab ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Filtered Projects */}
      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <div key={project.id} className="glass-panel project-card">
            <div className="project-header">
              <span className="project-category-badge">{project.category}</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>
                  ★ {project.stars}
                </span>
              </div>
            </div>

            <h3 className="project-title">{project.title}</h3>
            <div className="project-subtitle">{project.subtitle}</div>
            <p className="project-description">{project.description}</p>

            <div className="project-tags">
              {project.tags.map((tag, idx) => (
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
                Deep-Dive & Metrics <ArrowRight size={16} />
              </button>

              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--text-muted)', transition: 'color 0.2s' }}
                title="View Code on GitHub"
              >
                <Github size={18} />
              </a>
            </div>
          </div>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div style={{ textAlign: 'center', padding: '60px 20px', color: 'var(--text-muted)' }}>
          <p style={{ fontSize: '1.2rem', marginBottom: '12px' }}>No projects match your filter criteria.</p>
          <button onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }} className="btn-secondary">
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
};
