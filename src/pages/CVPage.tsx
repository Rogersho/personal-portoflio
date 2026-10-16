import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

const printStyles = `
  @media print {
    body { background: white !important; color: black !important; }
    .cv-page { max-width: 100% !important; padding: 0 !important; }
    .cv-actions, .navbar, .footer, .project-modal { display: none !important; }
    .cv-section { break-inside: avoid; }
  }
`;

export const CVPage: React.FC = () => {
  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  return (
    <div className="cv-page" style={{ maxWidth: '1100px', margin: '0 auto', padding: '32px 20px 80px' }}>
      <style>{printStyles}</style>

      <div className="cv-actions" style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', marginBottom: '28px' }}>
        <button className="btn-secondary" onClick={handlePrint}>Print / Save PDF</button>
        <a className="btn-primary" href="/cv.txt" target="_blank" rel="noreferrer">Download TXT</a>
      </div>

      <article>
        <header style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '20px', marginBottom: '28px' }}>
          <h1 style={{ margin: 0, fontSize: '2.2rem' }}>{PORTFOLIO_DATA.personal.name}</h1>
          <p style={{ margin: '8px 0 0', color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
            {PORTFOLIO_DATA.personal.title}
          </p>
          <p style={{ margin: '12px 0 0', color: 'var(--text-muted)' }}>
            {PORTFOLIO_DATA.personal.location} · {PORTFOLIO_DATA.personal.email} · {PORTFOLIO_DATA.personal.phone}
          </p>
        </header>

        <section className="cv-section" style={{ marginBottom: '30px' }}>
          <h2 style={{ fontSize: '1.4rem', marginBottom: '12px' }}>Summary</h2>
          <p className="text-muted-color" style={{ lineHeight: '1.8' }}>{PORTFOLIO_DATA.personal.bio}</p>
        </section>

        <section className="cv-section" style={{ marginBottom: '30px' }}>
          <h2 style={{ fontSize: '1.4rem', marginBottom: '12px' }}>Skills</h2>
          <ul style={{ margin: 0, paddingLeft: '18px', lineHeight: '1.9', color: 'var(--text-secondary)' }}>
            {PORTFOLIO_DATA.skillCategories.flatMap((category) => category.skills.map((skill) => `${skill.name} (${skill.level}%)`))
              .slice(0, 18)
              .map((skill, idx) => <li key={idx}>{skill}</li>)}
          </ul>
        </section>

        <section className="cv-section" style={{ marginBottom: '30px' }}>
          <h2 style={{ fontSize: '1.4rem', marginBottom: '12px' }}>Experience</h2>
          {PORTFOLIO_DATA.timeline.map((item, idx) => (
            <div key={idx} style={{ marginBottom: '16px' }}>
              <h3 style={{ marginBottom: '4px', fontSize: '1.1rem' }}>{item.role}</h3>
              <div style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{item.company}</div>
              <div style={{ color: 'var(--text-muted)', marginBottom: '8px' }}>{item.year}</div>
              <p className="text-muted-color" style={{ lineHeight: '1.75' }}>{item.description}</p>
              <ul style={{ margin: '8px 0 0', paddingLeft: '18px', color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                {item.highlights.map((h, hIdx) => <li key={hIdx}>{h}</li>)}
              </ul>
            </div>
          ))}
        </section>

        <section className="cv-section" style={{ marginBottom: '30px' }}>
          <h2 style={{ fontSize: '1.4rem', marginBottom: '12px' }}>Projects</h2>
          <ul style={{ margin: 0, paddingLeft: '18px', lineHeight: '1.9', color: 'var(--text-secondary)' }}>
            {PORTFOLIO_DATA.projects.map((project) => (
              <li key={project.id}>
                <strong>{project.title}</strong> — {project.description}
              </li>
            ))}
          </ul>
        </section>

        <section className="cv-section" style={{ marginBottom: '30px' }}>
          <h2 style={{ fontSize: '1.4rem', marginBottom: '12px' }}>Education</h2>
          <p className="text-muted-color" style={{ lineHeight: '1.8' }}>{PORTFOLIO_DATA.personal.education}</p>
        </section>

        <section className="cv-section" style={{ marginBottom: '30px' }}>
          <h2 style={{ fontSize: '1.4rem', marginBottom: '12px' }}>Contact</h2>
          <ul style={{ margin: 0, paddingLeft: '18px', lineHeight: '1.9', color: 'var(--text-secondary)' }}>
            <li>Email: {PORTFOLIO_DATA.personal.email}</li>
            <li>Phone: {PORTFOLIO_DATA.personal.phone}</li>
            <li>Website: {PORTFOLIO_DATA.personal.companyWebsite}</li>
            <li>GitHub: {PORTFOLIO_DATA.personal.github}</li>
            <li>LinkedIn: {PORTFOLIO_DATA.personal.linkedin}</li>
          </ul>
        </section>
      </article>
    </div>
  );
};
