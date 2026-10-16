const http = require('http');

const routes = ['/', '/projects', '/experience', '/about', '/contact', '/cv', '/404'];

function checkRoute(route) {
  return new Promise((resolve) => {
    http.get(`http://localhost:4173${route}`, (res) => {
      let data = '';
      res.on('data', chunk => { data += chunk; });
      res.on('end', () => {
        const titleMatch = data.match(/<title[^>]*>(.*?)<\/title>/i);
        const h1Match = data.match(/<h1[^>]*>(.*?)<\/h1>/i);
        const hasJsonLd = data.includes('application/ld+json');
        resolve({
          route,
          status: res.statusCode,
          title: titleMatch ? titleMatch[1] : 'NONE',
          h1: h1Match ? h1Match[1].replace(/<[^>]+>/g, '') : 'NONE',
          hasJsonLd,
          contentLength: data.length
        });
      });
    }).on('error', err => {
      resolve({ route, error: err.message });
    });
  });
}

async function run() {
  console.log('='.repeat(70));
  console.log('PRERENDERED ROUTE VERIFICATION (http://localhost:4173)');
  console.log('='.repeat(70));
  for (const r of routes) {
    const result = await checkRoute(r);
    console.log(`Route:        ${result.route}`);
    console.log(`Status:       ${result.status}`);
    console.log(`Title:        ${result.title}`);
    console.log(`<h1> Text:   ${result.h1}`);
    console.log(`JSON-LD:      ${result.hasJsonLd ? 'Present' : 'Not included'}`);
    console.log(`HTML Size:    ${result.contentLength} bytes`);
    console.log('-'.repeat(70));
  }
}

run();
