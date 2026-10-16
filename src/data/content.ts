import React, { useCallback, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { NavLink, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Projects } from './pages/Projects';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Experience } from './pages/Experience';
import { CVPage } from './pages/CVPage';
import { NotFound } from './pages/NotFound';
import { ProjectModal } from './components/ProjectModal';
import { Project } from './data/portfolioData';
import { content } from './data/content';

const pathForTab = (tab: string): string => {
  switch (tab) {
    case 'projects':
      return '/projects';
    case 'experience':
      return '/experience';
    case 'about':
      return '/about';
    case 'contact':
      return '/contact';
    case 'cv':
      return '/cv';
    default:
      return '/';
  }
};

const tabForPath = (pathname: string): string => {
  if (pathname.startsWith('/projects')) return 'projects';
  if (pathname.startsWith('/experience')) return 'experience';
  if (pathname.startsWith('/about')) return 'about';
  if (pathname.startsWith('/contact')) return 'contact';
  if (pathname.startsWith('/cv')) return 'cv';
  return 'home';
};

const metaByPath: Record<string, { title: string; description: string }> = {
  '/': {
    title: 'Roger Hodali | Full-Stack & AI Architect',
    description: 'Portfolio of Roger Hodali — CEO of NEXA STACK LTD, AI architect, full-stack engineer, and Flutter specialist.'
  },
  '/projects': {
    title: 'Projects | Roger Hodali',
    description: 'Explore Rogers projects across AI, healthcare, developer tools, and mobile platforms.'
  },
  '/experience': {
    title: 'Experience | Roger Hodali',
    description: 'Professional experience, leadership roles, and academic journey of Roger Hodali.'
  },
  '/about': {
    title: 'About | Roger Hodali',
    description: 'Learn about Roger Hodali, his technical skills, career path, and leadership work.'
  },
  '/contact': {
    title: 'Contact | Roger Hodali',
    description: 'Get in touch with Roger Hodali for consulting, collaborations, and engineering opportunities.'
  },
  '/cv': {
    title: 'CV | Roger Hodali',
    description: 'Download or print Roger Hodali’s professional CV and experience summary.'
  }
};

export const App: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeTab, setActiveTabState] = useState<string>(tabForPath(location.pathname));

  useEffect(() => {
    setActiveTabState(tabForPath(location.pathname));
  }, [location.pathname]);

  const setActiveTab = useCallback(
    (tab: string) => {
      setActiveTabState(tab);
      const path = pathForTab(tab);
      if (path !== location.pathname) {
        navigate(path, { replace: false });
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    [location.pathname, navigate]
  );

  const routeMeta = metaByPath[location.pathname] ?? metaByPath['/'];

  return (
    <>
      <Helmet>
        <title>{routeMeta.title}</title>
        <meta name="description" content={routeMeta.description} />
        <meta property="og:title" content={routeMeta.title} />
        <meta property="og:description" content={routeMeta.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://rogerhodali.vercel.app${location.pathname}`} />
        <meta property="og:image" content="https://rogerhodali.vercel.app/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={routeMeta.title} />
        <meta name="twitter:description" content={routeMeta.description} />
        <link rel="canonical" href={`https://rogerhodali.vercel.app${location.pathname}`} />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: content.personal.name,
            jobTitle: content.personal.title,
            url: 'https://rogerhodali.vercel.app',
            sameAs: [
              content.personal.github,
              content.personal.linkedin,
              content.personal.companyWebsite
            ],
            knowsAbout: [
              'Full Stack Development',
              'Flutter',
              'AI Agents',
              'LLM Fine-Tuning',
              'TypeScript',
              'Product Leadership'
            ]
          })}
        </script>
      </Helmet>

      <div className="app-layout">
        <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home setActiveTab={setActiveTab} onSelectProject={setSelectedProject} />} />
            <Route path="/projects" element={<Projects onSelectProject={setSelectedProject} />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cv" element={<CVPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer setActiveTab={setActiveTab} />
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      </div>
    </>
  );
};

export default App;
