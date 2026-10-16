import React from 'react';
import { content } from '../data/content';

const printStyles = `
  @media print {
    body { background: white !important; color: black !important; }
    .cv-page { max-width: 100% !important; padding: 0 !important; margin: 0 !important; }
    .cv-actions, .navbar, .footer, .project-modal { display: none !important; }
    .cv-section { break-inside: avoid; }
    h1, h2, h3 { color: black !important; }
    p, li, div, span { color: #222 !important; }
    a { color: black !important; text-decoration: underline !important; }
  }
`;

export const CVPage: React.FC = () => {
  const handlePrint = () => {
    if (typeof window !== 'undefined' && typeof window.print === 'function') {
      window.print();
    }
  };

  return (
    <div className="cv-page" style={{ maxWidth: '1100px', margin: '0 auto', padding: '32px 20px 80px' }}>
      <style>{printStyles}</style>

      <div className="cv-actions" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-end', gap: '12px', marginBottom: '28px' }}>
        <button className="btn-secondary" onClick={handlePrint}>Download PDF / Print</button>
        <a className="btn-primary" href="/cv.txt" target="_blank" rel="noreferrer">Download Plain Text (.txt)</a>
        <a className="btn-secondary" href="/cv.md" target="_blank" rel="noreferrer">Download Markdown (.md)</a>
      </div>

      <article>
        <header style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '20px', marginBottom: '28px' }}>
          <h1 style={{ margin: 0, fontSize: '2.2rem' }}>{content.personal.name}</h1>
          <p style={{ margin: '8px 0 0', color: 'var(--text-secondary)', fontSize: '1.1rem', fontWeight: 600 }}>
            {content.personal.title}
          </p>
          <p style={{ margin: '12px 0 0', color: 'var(--text-muted)' }}>
            {content.personal.location} · <a href={`mailto:${content.personal.email}`} style={{ color: 'var(--color-primary)' }}>{content.personal.email}</a> · <a href={`tel:${content.personal.phoneRaw}`} style={{ color: 'var(--color-primary)' }}>{content.personal.phone}</a>
          </p>
          <p style={{ margin: '6px 0 0', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
            Company: <a href={content.personal.companyWebsite} target="_blank" rel="noreferrer" style={{ color: 'var(--color-primary)' }}>{content.personal.company}</a> · GitHub: <a href={content.personal.github} target="_blank" rel="noreferrer" style={{ color: 'var(--color-primary)' }}>github.com/Rogersho</a> · LinkedIn: <a href={content.personal.linkedin} target="_blank" rel="noreferrer" style={{ color: 'var(--color-primary)' }}>roger-hodali</a>
          </p>
        </header>

        <section className="cv-section" style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: '1.4rem', marginBottom: '12px', color: 'var(--color-primary)' }}>Summary</h2>
          <p className="text-muted-color" style={{ lineHeight: '1.8', fontSize: '0.95rem' }}>{content.personal.bio}</p>
        </section>

        <section className="cv-section" style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: '1.4rem', marginBottom: '12px', color: 'var(--color-primary)' }}>Skills</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            {content.skillCategories.map((cat, idx) => (
              <div key={idx} style={{ background: 'rgba(255,255,255,0.02)', padding: '16px', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                <h3 style={{ fontSize: '1rem', marginBottom: '8px', color: '#fff' }}>{cat.title}</h3>
                <ul style={{ margin: 0, paddingLeft: '18px', lineHeight: '1.8', color: 'var(--text-secondary)', fontSize: '0.88rem' }}>
                  {cat.skills.map((skill, sIdx) => (
                    <li key={sIdx}>
                      <strong>{skill.name}</strong> ({skill.level}%)
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="cv-section" style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: '1.4rem', marginBottom: '16px', color: 'var(--color-primary)' }}>Experience</h2>
          {content.timeline.map((item, idx) => (
            <div key={idx} style={{ marginBottom: '22px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', alignItems: 'baseline' }}>
                <h3 style={{ margin: '0 0 4px', fontSize: '1.15rem' }}>{item.role}</h3>
                <span style={{ color: 'var(--color-primary)', fontFamily: 'var(--font-mono)', fontSize: '0.88rem' }}>{item.year}</span>
              </div>
              <div style={{ fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '8px' }}>{item.company}</div>
              <p className="text-muted-color" style={{ lineHeight: '1.75', margin: '0 0 8px', fontSize: '0.92rem' }}>{item.description}</p>
              <ul style={{ margin: '8px 0 0', paddingLeft: '18px', color: 'var(--text-secondary)', lineHeight: '1.8', fontSize: '0.88rem' }}>
                {item.highlights.map((h, hIdx) => <li key={hIdx}>{h}</li>)}
              </ul>
            </div>
          ))}
        </section>

        <section className="cv-section" style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: '1.4rem', marginBottom: '16px', color: 'var(--color-primary)' }}>Projects</h2>
          <ul style={{ margin: 0, paddingLeft: '18px', lineHeight: '1.9', color: 'var(--text-secondary)' }}>
            {content.projects.map((project) => (
              <li key={project.id} style={{ marginBottom: '10px' }}>
                <strong>{project.title}</strong> ({project.category}) — {project.description}
                <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                  Tags: {project.tags.join(', ')} · <a href={project.githubUrl} target="_blank" rel="noreferrer" style={{ color: 'var(--color-primary)' }}>Code on GitHub</a>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className="cv-section" style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: '1.4rem', marginBottom: '12px', color: 'var(--color-primary)' }}>Education</h2>
          <p className="text-muted-color" style={{ lineHeight: '1.8', fontSize: '0.95rem' }}>{content.personal.education}</p>
        </section>

        <section className="cv-section" style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: '1.4rem', marginBottom: '12px', color: 'var(--color-primary)' }}>Contact</h2>
          <ul style={{ margin: 0, paddingLeft: '18px', lineHeight: '1.9', color: 'var(--text-secondary)' }}>
            <li>Email: <a href={`mailto:${content.personal.email}`} style={{ color: 'var(--color-primary)' }}>{content.personal.email}</a></li>
            <li>Phone: <a href={`tel:${content.personal.phoneRaw}`} style={{ color: 'var(--color-primary)' }}>{content.personal.phone}</a></li>
            <li>Company: <a href={content.personal.companyWebsite} target="_blank" rel="noreferrer" style={{ color: 'var(--color-primary)' }}>{content.personal.companyWebsite}</a></li>
            <li>GitHub: <a href={content.personal.github} target="_blank" rel="noreferrer" style={{ color: 'var(--color-primary)' }}>{content.personal.github}</a></li>
            <li>LinkedIn: <a href={content.personal.linkedin} target="_blank" rel="noreferrer" style={{ color: 'var(--color-primary)' }}>{content.personal.linkedin}</a></li>
          </ul>
        </section>
      </article>
    </div>
  );
};

export default CVPage;
