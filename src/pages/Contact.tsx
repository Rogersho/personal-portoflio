import React, { useState } from 'react';
import { Github, Linkedin, Send, CheckCircle2, MapPin, Phone, Building2, ExternalLink } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    setSubmitted(true);
  };

  return (
    <div style={{ paddingTop: '20px' }}>
      <div className="section-header">
        <span className="section-tag">// Executive & Technical Contact</span>
        <h1 className="section-title">Let's Connect & Collaborate</h1>
        <p className="text-muted-color" style={{ fontSize: '1.05rem', marginTop: '8px', maxWidth: '720px' }}>
          Reach out directly to Roger Hodali (CEO of NEXA STACK LTD) for software development, AI agent implementation, or consulting inquiries.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '32px' }}>
        <div className="glass-panel" style={{ padding: '36px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <h3 style={{ fontSize: '1.35rem', fontWeight: 700, fontFamily: 'var(--font-heading)', marginBottom: '24px' }}>Direct Contact</h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '32px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--color-primary-dim)', border: '1px solid var(--border-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary)' }}>
                  <Phone size={18} />
                </div>
                <div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-dim)' }}>Phone & WhatsApp</div>
                  <a href={`tel:${PORTFOLIO_DATA.personal.phoneRaw}`} style={{ color: 'var(--text-primary)', fontWeight: 600, textDecoration: 'none', fontSize: '1rem' }}>
                    {PORTFOLIO_DATA.personal.phone}
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--color-accent-dim)', border: '1px solid rgba(16, 185, 129, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-accent)' }}>
                  <Building2 size={18} />
                </div>
                <div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-dim)' }}>Company</div>
                  <a href={PORTFOLIO_DATA.personal.companyWebsite} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-primary)', fontWeight: 600, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                    {PORTFOLIO_DATA.personal.company} <ExternalLink size={14} />
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--color-primary-dim)', border: '1px solid var(--border-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary)' }}>
                  <Linkedin size={18} />
                </div>
                <div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-dim)' }}>LinkedIn</div>
                  <a href={PORTFOLIO_DATA.personal.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-primary)', fontWeight: 500, textDecoration: 'none' }}>
                    Roger Hodali on LinkedIn
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255, 255, 255, 0.04)', border: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)' }}>
                  <Github size={18} />
                </div>
                <div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-dim)' }}>GitHub</div>
                  <a href={PORTFOLIO_DATA.personal.github} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-primary)', fontWeight: 500, textDecoration: 'none' }}>
                    github.com/Rogersho
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--color-primary-dim)', border: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary)' }}>
                  <MapPin size={18} />
                </div>
                <div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-dim)' }}>Location</div>
                  <div style={{ color: 'var(--text-primary)', fontWeight: 500 }}>
                    {PORTFOLIO_DATA.personal.location}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div style={{ background: 'var(--color-primary-dim)', border: '1px solid var(--border-primary)', padding: '20px', borderRadius: '12px' }}>
            <h4 className="text-primary-color" style={{ fontSize: '0.9rem', marginBottom: '6px', fontFamily: 'var(--font-sans)', fontWeight: 600 }}>Availability Status</h4>
            <p className="text-muted-color" style={{ fontSize: '0.85rem' }}>
              Currently accepting enterprise projects at NEXA STACK LTD, mobile app contracts, and AI agent architecture reviews.
            </p>
          </div>
        </div>

        <div className="glass-panel" style={{ padding: '36px' }}>
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '40px 20px' }}>
              <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'var(--color-primary-dim)', border: '2px solid var(--color-primary)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary)', marginBottom: '16px' }}>
                <CheckCircle2 size={28} />
              </div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 700, fontFamily: 'var(--font-heading)', marginBottom: '8px' }}>Message Sent</h3>
              <p className="text-muted-color" style={{ marginBottom: '24px' }}>
                Thank you for reaching out, {formState.name}. Roger Hodali will review your message and get back to you promptly.
              </p>
              <button onClick={() => { setSubmitted(false); setFormState({ name: '', email: '', subject: '', message: '' }); }} className="btn-secondary">
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 700, fontFamily: 'var(--font-heading)', marginBottom: '4px' }}>Send Direct Message</h3>

              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', color: 'var(--text-dim)', marginBottom: '6px', fontWeight: 500 }}>Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sarah Jenkins"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  style={{ width: '100%', padding: '10px 14px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid var(--border-color)', borderRadius: '8px', color: 'var(--text-primary)', outline: 'none', fontSize: '0.9rem', fontFamily: 'var(--font-sans)' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', color: 'var(--text-dim)', marginBottom: '6px', fontWeight: 500 }}>Your Email</label>
                <input
                  type="email"
                  required
                  placeholder="e.g. sarah@company.com"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  style={{ width: '100%', padding: '10px 14px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid var(--border-color)', borderRadius: '8px', color: 'var(--text-primary)', outline: 'none', fontSize: '0.9rem', fontFamily: 'var(--font-sans)' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', color: 'var(--text-dim)', marginBottom: '6px', fontWeight: 500 }}>Subject</label>
                <input
                  type="text"
                  placeholder="e.g. NEXA STACK Partnership / Mobile App Development"
                  value={formState.subject}
                  onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                  style={{ width: '100%', padding: '10px 14px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid var(--border-color)', borderRadius: '8px', color: 'var(--text-primary)', outline: 'none', fontSize: '0.9rem', fontFamily: 'var(--font-sans)' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', color: 'var(--text-dim)', marginBottom: '6px', fontWeight: 500 }}>Message</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell me about your project or inquiry..."
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  style={{ width: '100%', padding: '10px 14px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid var(--border-color)', borderRadius: '8px', color: 'var(--text-primary)', outline: 'none', resize: 'vertical', fontSize: '0.9rem', fontFamily: 'var(--font-sans)' }}
                />
              </div>

              <button type="submit" className="btn-primary" style={{ justifyContent: 'center', marginTop: '10px' }}>
                <Send size={16} /> Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
