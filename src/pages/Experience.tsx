import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <div style={{ paddingTop: '20px' }}>
      <div className="section-header">
        <span className="section-tag">// Career & Academic Path</span>
        <h1 className="section-title">Experience & Leadership</h1>
        <p className="text-muted-color" style={{ fontSize: '1.05rem', marginTop: '8px', maxWidth: '800px' }}>
          Building products, leading teams, and solving complex technical problems across AI systems, mobile platforms, and SaaS architecture.
        </p>
      </div>

      <section style={{ marginBottom: '80px' }}>
        <div className="timeline-container">
          {PORTFOLIO_DATA.timeline.map((item, idx) => (
            <div key={idx} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-year">{item.year}</div>
              <h3 className="timeline-role">{item.role}</h3>
              <div className="timeline-company">{item.company}</div>
              <p className="text-muted-color" style={{ fontSize: '0.92rem', marginBottom: '14px', lineHeight: '1.7' }}>
                {item.description}
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {item.highlights.map((h, hIdx) => (
                  <div key={hIdx} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
                    <span className="text-primary-color">▸</span> {h}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
