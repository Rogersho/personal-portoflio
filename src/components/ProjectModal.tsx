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
          <span style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.82rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
            <Star size={14} className="text-primary-color" /> {project.stars} Stars
          </span>
        </div>

        <h2 style={{ fontSize: '1.8rem', fontWeight: 700, fontFamily: 'var(--font-heading)', marginBottom: '6px' }}>{project.title}</h2>
        <p className="text-primary-color" style={{ fontWeight: 500, fontSize: '1rem', marginBottom: '20px', fontFamily: 'var(--font-sans)' }}>
          {project.subtitle}
        </p>

        <div style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '20px', marginBottom: '24px' }}>
          <h4 style={{ color: 'var(--text-primary)', fontSize: '0.92rem', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Sparkles size={16} className="text-primary-color" /> Technical Architecture & Impact
          </h4>
          <p className="text-muted-color" style={{ fontSize: '0.92rem', lineHeight: '1.7' }}>
            {project.longDescription}
          </p>
        </div>

        <div style={{ marginBottom: '24px' }}>
          <h4 style={{ color: 'var(--text-primary)', fontSize: '0.92rem', marginBottom: '12px', fontFamily: 'var(--font-sans)', fontWeight: 600 }}>Key Engineering Highlights</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {project.keyHighlights.map((highlight, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                <CheckCircle2 size={16} className="text-primary-color" style={{ marginTop: '3px', flexShrink: 0 }} />
                <span>{highlight}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: '28px' }}>
          <h4 style={{ color: 'var(--text-primary)', fontSize: '0.92rem', marginBottom: '12px', fontFamily: 'var(--font-sans)', fontWeight: 600 }}>Performance Metrics</h4>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            {project.metrics.map((metric, idx) => (
              <span key={idx} style={{ padding: '6px 12px', background: 'var(--color-primary-dim)', border: '1px solid var(--border-primary)', borderRadius: '8px', color: 'var(--color-primary)', fontSize: '0.82rem', fontFamily: 'var(--font-mono)' }}>
                {metric}
              </span>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', gap: '16px', paddingTop: '20px', borderTop: '1px solid var(--border-color)' }}>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ textDecoration: 'none', fontSize: '0.88rem' }}
          >
            <Github size={16} /> View GitHub Repository
          </a>
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              style={{ textDecoration: 'none', fontSize: '0.88rem' }}
            >
              <ExternalLink size={16} /> Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
