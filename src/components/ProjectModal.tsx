import React from 'react';
import { X, ExternalLink, Github, CheckCircle2, Star, Sparkles } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-modal-btn" onClick={onClose}>
          <X size={24} />
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
          <span className="project-category-badge">{project.category}</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.85rem', color: '#f59e0b', fontFamily: 'var(--font-mono)' }}>
            <Star size={14} fill="#f59e0b" /> {project.stars} Stars
          </span>
        </div>

        <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '6px' }}>{project.title}</h2>
        <p style={{ color: 'var(--color-primary)', fontWeight: 600, fontSize: '1.05rem', marginBottom: '20px' }}>
          {project.subtitle}
        </p>

        <div style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid var(--border-glass)', borderRadius: '12px', padding: '20px', marginBottom: '24px' }}>
          <h4 style={{ color: '#fff', fontSize: '0.95rem', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Sparkles size={16} style={{ color: 'var(--color-secondary)' }} /> Technical Architecture & Impact
          </h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.7' }}>
            {project.longDescription}
          </p>
        </div>

        <div style={{ marginBottom: '24px' }}>
          <h4 style={{ color: '#fff', fontSize: '0.95rem', marginBottom: '12px' }}>Key Engineering Highlights</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {project.keyHighlights.map((highlight, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                <CheckCircle2 size={16} style={{ color: 'var(--color-primary)', marginTop: '3px', flexShrink: 0 }} />
                <span>{highlight}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: '28px' }}>
          <h4 style={{ color: '#fff', fontSize: '0.95rem', marginBottom: '12px' }}>Performance Metrics</h4>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            {project.metrics.map((metric, idx) => (
              <span key={idx} style={{ padding: '6px 14px', background: 'rgba(6, 182, 212, 0.1)', border: '1px solid rgba(6, 182, 212, 0.25)', borderRadius: '8px', color: 'var(--color-secondary)', fontSize: '0.85rem', fontFamily: 'var(--font-mono)' }}>
                ⚡ {metric}
              </span>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', gap: '16px', paddingTop: '20px', borderTop: '1px solid var(--border-glass)' }}>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ textDecoration: 'none', fontSize: '0.9rem' }}
          >
            <Github size={18} /> View GitHub Repository
          </a>
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              style={{ textDecoration: 'none', fontSize: '0.9rem' }}
            >
              <ExternalLink size={18} /> Live Interactive Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
