import React from 'react';
import { Github, Linkedin, Phone, ExternalLink } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface FooterProps {
  setActiveTab: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab }) => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div>
          <div style={{ fontWeight: 700, fontSize: '1.15rem', fontFamily: 'var(--font-heading)', marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            {PORTFOLIO_DATA.personal.name}
            <span className="text-primary-color" style={{ fontSize: '0.78rem', fontWeight: 600, fontFamily: 'var(--font-sans)', padding: '2px 10px', background: 'var(--color-primary-dim)', border: '1px solid var(--border-primary)', borderRadius: '99px' }}>
              CEO @ NEXA STACK LTD
            </span>
          </div>
          <p className="text-muted-color" style={{ fontSize: '0.88rem', maxWidth: '420px', lineHeight: '1.6' }}>
            {PORTFOLIO_DATA.personal.tagline}
          </p>
        </div>

        <div className="social-links">
          <a
            href={`tel:${PORTFOLIO_DATA.personal.phoneRaw}`}
            className="social-icon-btn"
            title="Call / WhatsApp"
          >
            <Phone size={18} />
          </a>
          <a
            href={PORTFOLIO_DATA.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon-btn"
            title="GitHub Profile"
          >
            <Github size={18} />
          </a>
          <a
            href={PORTFOLIO_DATA.personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon-btn"
            title="LinkedIn Profile"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={PORTFOLIO_DATA.personal.companyWebsite}
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon-btn"
            title="NEXA STACK LTD"
          >
            <ExternalLink size={18} />
          </a>
        </div>
      </div>
      <div className="text-dim-color" style={{ textAlign: 'center', marginTop: '28px', fontSize: '0.82rem' }}>
        © {new Date().getFullYear()} Roger Hodali (NEXA STACK LTD). All rights reserved.
      </div>
    </footer>
  );
};
