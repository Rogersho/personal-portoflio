import React from 'react';
import { User, Award, CheckCircle2, ShieldAlert, Cpu, Code2, Rocket, Layers, GraduationCap, Building2, Globe } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <div style={{ paddingTop: '20px' }}>
      <div className="section-header">
        <span className="section-tag">// Background & Leadership</span>
        <h1 className="section-title">About Roger Hodali</h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', marginTop: '8px', maxWidth: '800px' }}>
          CEO of **NEXA STACK LTD** and Year 4 student at the **University of Rwanda**, pursuing a Bachelor's degree in **Mathematics and Computer Science with Education**.
        </p>
      </div>

      {/* Grid: Bio & Core Principles */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px', marginBottom: '60px' }}>
        <div className="glass-panel" style={{ padding: '32px' }}>
          <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '16px', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <User size={22} /> Executive Profile
          </h3>
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', fontSize: '0.98rem' }}>
            {PORTFOLIO_DATA.personal.bio}
          </p>
          
          <div style={{ marginTop: '24px', paddingTop: '20px', borderTop: '1px solid var(--border-glass)', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.92rem', color: 'var(--text-main)' }}>
              <Building2 size={18} style={{ color: 'var(--color-primary)' }} />
              <span><strong>Company:</strong> CEO @ <a href={PORTFOLIO_DATA.personal.companyWebsite} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary)', textDecoration: 'none' }}>NEXA STACK LTD</a></span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.92rem', color: 'var(--text-main)' }}>
              <GraduationCap size={18} style={{ color: 'var(--color-accent)' }} />
              <span><strong>Education:</strong> {PORTFOLIO_DATA.personal.education}</span>
            </div>
          </div>
        </div>

        <div className="glass-panel" style={{ padding: '32px' }}>
          <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '16px', color: 'var(--color-secondary)', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Cpu size={22} /> AI & Mathematics Foundations
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div style={{ display: 'flex', gap: '12px' }}>
              <CheckCircle2 size={18} style={{ color: 'var(--color-primary)', marginTop: '4px', flexShrink: 0 }} />
              <div>
                <strong style={{ color: '#fff' }}>Fine-Tuning Pretrained LLMs:</strong> Applying LoRA/QLoRA domain adaptation to tailor open models for specialized software & enterprise logic.
              </div>
            </div>
            <div style={{ display: 'flex', gap: '12px' }}>
              <CheckCircle2 size={18} style={{ color: 'var(--color-primary)', marginTop: '4px', flexShrink: 0 }} />
              <div>
                <strong style={{ color: '#fff' }}>Autonomous AI Agents:</strong> Building multi-agent tool loops, structured JSON function calling, and decision trees.
              </div>
            </div>
            <div style={{ display: 'flex', gap: '12px' }}>
              <CheckCircle2 size={18} style={{ color: 'var(--color-primary)', marginTop: '4px', flexShrink: 0 }} />
              <div>
                <strong style={{ color: '#fff' }}>Computational Mathematics:</strong> Leveraging mathematical rigour from UR degree studies to model complex algorithm optimizations.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Skill Proficiency Matrix */}
      <section style={{ marginBottom: '80px' }}>
        <div className="section-header">
          <span className="section-tag">// Skill Matrix</span>
          <h2 className="section-title">Technical Competencies</h2>
        </div>

        <div className="skills-grid">
          {PORTFOLIO_DATA.skillCategories.map((category, catIdx) => (
            <div key={catIdx} className="glass-panel skill-category-card">
              <h3 className="skill-category-title">
                <Code2 size={20} style={{ color: 'var(--color-primary)' }} /> {category.title}
              </h3>
              <div className="skill-list">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx}>
                    <div className="skill-item-header">
                      <span style={{ color: skill.highlight ? '#fff' : 'var(--text-muted)', fontWeight: skill.highlight ? 600 : 400 }}>
                        {skill.name}
                      </span>
                      <span style={{ color: 'var(--color-primary)', fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>
                        {skill.level}%
                      </span>
                    </div>
                    <div className="skill-bar-bg">
                      <div className="skill-bar-fill" style={{ width: `${skill.level}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Career Timeline */}
      <section style={{ marginBottom: '60px' }}>
        <div className="section-header">
          <span className="section-tag">// Career & Academic Path</span>
          <h2 className="section-title">Leadership & Experience</h2>
        </div>

        <div className="timeline-container">
          {PORTFOLIO_DATA.timeline.map((item, idx) => (
            <div key={idx} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-year">{item.year}</div>
              <h3 className="timeline-role">{item.role}</h3>
              <div className="timeline-company">{item.company}</div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '14px', lineHeight: '1.6' }}>
                {item.description}
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {item.highlights.map((h, hIdx) => (
                  <div key={hIdx} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#cbd5e1', fontSize: '0.88rem' }}>
                    <span style={{ color: 'var(--color-primary)' }}>▸</span> {h}
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
