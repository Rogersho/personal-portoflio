import React, { useCallback, useEffect, useState } from 'react';
import type { RouteRecord } from 'vite-react-ssg';
import { Head } from 'vite-react-ssg';
import { useLocation, useNavigate, Outlet } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { Home } from './pages/Home';
import { Projects } from './pages/Projects';
import { Experience } from './pages/Experience';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { CVPage } from './pages/CVPage';
import { NotFound } from './pages/NotFound';
import { content, Project } from './data/content';

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

export const Layout: React.FC = () => {
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
      if (typeof window !== 'undefined' && typeof window.scrollTo === 'function') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    },
    [location.pathname, navigate]
  );

  const routeMeta = content.seoByPath[location.pathname] ?? content.seoByPath['/'];
  const canonicalUrl = `${content.siteUrl}${location.pathname === '/' ? '' : location.pathname}`;

  return (
    <>
      <Head>
        <title>{routeMeta.title}</title>
        <meta name="description" content={routeMeta.description} />
        <meta property="og:title" content={routeMeta.title} />
        <meta property="og:description" content={routeMeta.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={`${content.siteUrl}/og-image.png`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={routeMeta.title} />
        <meta name="twitter:description" content={routeMeta.description} />
        <meta name="twitter:image" content={`${content.siteUrl}/og-image.png`} />
        <link rel="canonical" href={canonicalUrl} />
        {location.pathname === '/' && (
          <script type="application/ld+json">
            {JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: content.personal.name,
              jobTitle: content.personal.title,
              url: content.siteUrl,
              sameAs: [
                content.personal.github,
                content.personal.linkedin,
                content.personal.companyWebsite
              ],
              knowsAbout: [
                'Full-Stack Web Development',
                'Flutter Mobile Architecture',
                'Autonomous AI Agents',
                'LLM Fine-Tuning (LoRA / QLoRA)',
                'TypeScript & Node.js',
                'Computational Mathematics & Algorithms'
              ],
              worksFor: {
                '@type': 'Organization',
                name: content.personal.company,
                url: content.personal.companyWebsite
              },
              alumniOf: {
                '@type': 'EducationalOrganization',
                name: 'University of Rwanda'
              }
            })}
          </script>
        )}
      </Head>

      <div className="app-layout">
        <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

        <main className="main-content">
          <Outlet context={{ onSelectProject: setSelectedProject, setActiveTab }} />
        </main>

        <Footer setActiveTab={setActiveTab} />
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      </div>
    </>
  );
};

export const routes: RouteRecord[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'projects', element: <Projects /> },
      { path: 'experience', element: <Experience /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
      { path: 'cv', element: <CVPage /> },
      { path: '404', element: <NotFound /> },
      { path: '*', element: <NotFound /> }
    ]
  }
];

export const App = Layout;
export default Layout;
