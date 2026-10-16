import React from 'react';
import App from './App';
import './styles/index.css';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import { StaticRouter } from 'react-router-dom/server';

export const createApp = (url = '/') => {
  const Router = import.meta.env.SSR ? StaticRouter : BrowserRouter;
  const routerProps = import.meta.env.SSR ? { location: url } : {};

  const app = (
    <HelmetProvider>
      <Router {...routerProps}>
        <App />
      </Router>
    </HelmetProvider>
  );

  return { app };
};
