import React from 'react';
import { Github, Linkedin, Mail, Phone, ExternalLink, Terminal } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface FooterProps {
  setActiveTab: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab }) => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div>
          <div style={{ fontWeight: 800, fontSize: '1.25rem', marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            {PORTFOLIO_DATA.personal.name} <span style={{ color: 'var(--color-primary)', fontSize: '0.9rem', padding: '2px 10px', background: 'rgba(56, 189, 248, 0.12)', border: '1px solid rgba(56, 189, 248, 0.3)', borderRadius: '99px' }}>CEO @ NEXA STACK LTD</span>
          </div>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', maxWidth: '420px', lineHeight: '1.6' }}>
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
      <div style={{ textAlign: 'center', marginTop: '30px', color: 'var(--text-dim)', fontSize: '0.85rem' }}>
        © {new Date().getFullYear()} Roger Hodali (NEXA STACK LTD). All rights reserved.
      </div>
    </footer>
  );
};
