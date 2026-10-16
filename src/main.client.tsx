import { createApp } from './main';
import { hydrateRoot } from 'react-dom/client';

const { app } = createApp();

hydrateRoot(document.getElementById('root')!, app as any);
