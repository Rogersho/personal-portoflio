import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Terminal, Code2, Menu, X, Sparkles, FolderGit2, User, Mail } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: Sparkles, to: '/' },
    { id: 'projects', label: 'Projects', icon: FolderGit2, to: '/projects' },
    { id: 'experience', label: 'Experience', icon: User, to: '/experience' },
    { id: 'about', label: 'About & Skills', icon: User, to: '/about' },
    { id: 'contact', label: 'Contact', icon: Mail, to: '/contact' },
    { id: 'cv', label: 'CV', icon: Terminal, to: '/cv' }
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <NavLink to="/" onClick={() => handleNavClick('home')} className="nav-brand">
          <div className="nav-brand-logo">
            <Code2 size={22} />
          </div>
          <span>{PORTFOLIO_DATA.personal.name}<span style={{ color: 'var(--color-primary)' }}>.dev</span></span>
        </NavLink>

        <div className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.id}
                to={item.to}
                onClick={() => handleNavClick(item.id)}
                className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
                style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
              >
                <Icon size={16} />
                <span>{item.label}</span>
              </NavLink>
            );
          })}
        </div>

        <button
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>
    </nav>
  );
};
