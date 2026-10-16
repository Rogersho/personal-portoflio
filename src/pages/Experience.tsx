import { PORTFOLIO_DATA } from './portfolioData';

export const content = PORTFOLIO_DATA;

export const routeConfig = [
  { path: '/', label: 'Home' },
  { path: '/projects', label: 'Projects' },
  { path: '/experience', label: 'Experience' },
  { path: '/about', label: 'About' },
  { path: '/contact', label: 'Contact' },
  { path: '/cv', label: 'CV' }
];

export const seoDefaults = {
  title: 'Roger Hodali | Full-Stack & AI Architect',
  description:
    'Portfolio of Roger Hodali — CEO of NEXA STACK LTD, AI architect, full-stack engineer, and Flutter specialist.'
};
