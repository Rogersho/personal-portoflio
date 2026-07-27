import React, { useState } from 'react';
import { Mail, Github, Linkedin, Send, CheckCircle2, MessageSquare, MapPin, Phone, Building2, ExternalLink } from 'lucide-react';
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
        <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', marginTop: '8px', maxWidth: '720px' }}>
          Reach out directly to **Roger Hodali** (CEO of NEXA STACK LTD) for software development, AI agent implementation, or consulting inquiries.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '36px' }}>
        {/* Contact Info Card */}
        <div className="glass-panel" style={{ padding: '36px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '24px' }}>Direct Contact</h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '32px' }}>
              {/* Phone / WhatsApp */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'rgba(56, 189, 248, 0.12)', border: '1px solid rgba(56, 189, 248, 0.35)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary)' }}>
                  <Phone size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Phone & WhatsApp</div>
                  <a href={`tel:${PORTFOLIO_DATA.personal.phoneRaw}`} style={{ color: '#fff', fontWeight: 700, textDecoration: 'none', fontSize: '1.05rem' }}>
                    {PORTFOLIO_DATA.personal.phone}
                  </a>
                </div>
              </div>

              {/* Company */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'rgba(0, 240, 255, 0.12)', border: '1px solid rgba(0, 240, 255, 0.35)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-accent)' }}>
                  <Building2 size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Company</div>
                  <a href={PORTFOLIO_DATA.personal.companyWebsite} target="_blank" rel="noopener noreferrer" style={{ color: '#fff', fontWeight: 700, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                    {PORTFOLIO_DATA.personal.company} <ExternalLink size={14} />
                  </a>
                </div>
              </div>

              {/* LinkedIn */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'rgba(99, 102, 241, 0.12)', border: '1px solid rgba(99, 102, 241, 0.35)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-indigo)' }}>
                  <Linkedin size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>LinkedIn</div>
                  <a href={PORTFOLIO_DATA.personal.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: '#fff', fontWeight: 600, textDecoration: 'none' }}>
                    Roger Hodali on LinkedIn
                  </a>
                </div>
              </div>

              {/* GitHub */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'rgba(255, 255, 255, 0.08)', border: '1px solid var(--border-glass)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
                  <Github size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>GitHub</div>
                  <a href={PORTFOLIO_DATA.personal.github} target="_blank" rel="noopener noreferrer" style={{ color: '#fff', fontWeight: 600, textDecoration: 'none' }}>
                    github.com/Rogersho
                  </a>
                </div>
              </div>

              {/* Location */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'rgba(56, 189, 248, 0.08)', border: '1px solid var(--border-glass)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary)' }}>
                  <MapPin size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Location</div>
                  <div style={{ color: '#fff', fontWeight: 600 }}>
                    {PORTFOLIO_DATA.personal.location}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div style={{ background: 'rgba(56, 189, 248, 0.08)', border: '1px solid rgba(56, 189, 248, 0.25)', padding: '20px', borderRadius: '12px' }}>
            <h4 style={{ color: 'var(--color-primary)', fontSize: '0.95rem', marginBottom: '6px' }}>⚡ Availability Status</h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem' }}>
              Currently accepting enterprise projects at NEXA STACK LTD, mobile app contracts, and AI agent architecture reviews.
            </p>
          </div>
        </div>

        {/* Form Container */}
        <div className="glass-panel" style={{ padding: '36px' }}>
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '40px 20px' }}>
              <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'rgba(56, 189, 248, 0.2)', border: '2px solid var(--color-primary)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary)', marginBottom: '16px' }}>
                <CheckCircle2 size={32} />
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '8px' }}>Message Sent!</h3>
              <p style={{ color: 'var(--text-muted)', marginBottom: '24px' }}>
                Thank you for reaching out, {formState.name}. Roger Hodali will review your message and get back to you promptly!
              </p>
              <button onClick={() => { setSubmitted(false); setFormState({ name: '', email: '', subject: '', message: '' }); }} className="btn-secondary">
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '4px' }}>Send Direct Message</h3>
              
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '6px' }}>Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sarah Jenkins"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  style={{ width: '100%', padding: '12px 16px', background: 'rgba(255, 255, 255, 0.04)', border: '1px solid var(--border-glass)', borderRadius: '8px', color: '#fff', outline: 'none' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '6px' }}>Your Email</label>
                <input
                  type="email"
                  required
                  placeholder="e.g. sarah@company.com"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  style={{ width: '100%', padding: '12px 16px', background: 'rgba(255, 255, 255, 0.04)', border: '1px solid var(--border-glass)', borderRadius: '8px', color: '#fff', outline: 'none' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '6px' }}>Subject</label>
                <input
                  type="text"
                  placeholder="e.g. NEXA STACK Partnership / Mobile App Development"
                  value={formState.subject}
                  onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                  style={{ width: '100%', padding: '12px 16px', background: 'rgba(255, 255, 255, 0.04)', border: '1px solid var(--border-glass)', borderRadius: '8px', color: '#fff', outline: 'none' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '6px' }}>Message</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell me about your project or inquiry..."
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  style={{ width: '100%', padding: '12px 16px', background: 'rgba(255, 255, 255, 0.04)', border: '1px solid var(--border-glass)', borderRadius: '8px', color: '#fff', outline: 'none', resize: 'vertical' }}
                />
              </div>

              <button type="submit" className="btn-primary" style={{ justifyContent: 'center', marginTop: '10px' }}>
                <Send size={18} /> Transmit Message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
