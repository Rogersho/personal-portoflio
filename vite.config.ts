import { defineConfig, Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'node:fs';
import path from 'node:path';
import { generateCVText, generateCVMarkdown } from './src/data/cvGenerator';

function cvGeneratorPlugin(): Plugin {
  return {
    name: 'cv-generator-plugin',
    buildStart() {
      const publicDir = path.resolve(__dirname, 'public');
      if (!fs.existsSync(publicDir)) {
        fs.mkdirSync(publicDir, { recursive: true });
      }
      fs.writeFileSync(path.join(publicDir, 'cv.txt'), generateCVText(), 'utf-8');
      fs.writeFileSync(path.join(publicDir, 'cv.md'), generateCVMarkdown(), 'utf-8');
    }
  };
}

export default defineConfig({
  plugins: [react(), cvGeneratorPlugin()],
  ssgOptions: {
    script: 'async',
    formatting: 'none',
    dirStyle: 'nested',
    includedRoutes() {
      return ['/', '/projects', '/experience', '/about', '/contact', '/cv', '/404'];
    },
    onFinished() {
      const distDir = path.resolve(__dirname, 'dist');
      if (fs.existsSync(distDir)) {
        // Ensure cv files exist in dist
        fs.writeFileSync(path.join(distDir, 'cv.txt'), generateCVText(), 'utf-8');
        fs.writeFileSync(path.join(distDir, 'cv.md'), generateCVMarkdown(), 'utf-8');

        // Also duplicate each nested route to flat .html (e.g. dist/projects.html) for any hosting environment
        const routes = ['projects', 'experience', 'about', 'contact', 'cv', '404'];
        for (const route of routes) {
          const nestedPath = path.join(distDir, route, 'index.html');
          const flatPath = path.join(distDir, `${route}.html`);
          if (fs.existsSync(nestedPath)) {
            fs.copyFileSync(nestedPath, flatPath);
          }
        }
      }
    }
  },
  server: {
    port: 3000,
    host: true
  }
});
