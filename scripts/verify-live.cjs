const https = require('https');

const routes = ['/', '/projects', '/experience', '/about', '/contact', '/cv'];

function check(path) {
  return new Promise((resolve) => {
    https.get(`https://roger.nexastack.net${path}`, (res) => {
      let data = '';
      res.on('data', chunk => { data += chunk; });
      res.on('end', () => {
        const titleMatch = data.match(/<title[^>]*>(.*?)<\/title>/i);
        const h1Match = data.match(/<h1[^>]*>(.*?)<\/h1>/i);
        const ogTitleMatch = data.match(/<meta[^>]*property=["']og:title["'][^>]*content=["'](.*?)["']/i);
        const ogDescMatch = data.match(/<meta[^>]*property=["']og:description["'][^>]*content=["'](.*?)["']/i);
        const ogImgMatch = data.match(/<meta[^>]*property=["']og:image["'][^>]*content=["'](.*?)["']/i);
        const jsonLd = data.includes('application/ld+json');
        resolve({
          path,
          status: res.statusCode,
          title: titleMatch ? titleMatch[1] : 'NONE',
          h1: h1Match ? h1Match[1].replace(/<[^>]+>/g, '') : 'NONE',
          ogTitle: ogTitleMatch ? ogTitleMatch[1] : 'NONE',
          ogDesc: ogDescMatch ? ogDescMatch[1] : 'NONE',
          ogImg: ogImgMatch ? ogImgMatch[1] : 'NONE',
          jsonLd,
          size: data.length
        });
      });
    }).on('error', err => resolve({ path, error: err.message }));
  });
}

async function main() {
  console.log('='.repeat(80));
  console.log('LIVE PRODUCTION VERIFICATION: https://roger.nexastack.net');
  console.log('='.repeat(80));
  for (const r of routes) {
    const res = await check(r);
    console.log(`Path:       ${res.path}`);
    console.log(`Status:     ${res.status}`);
    console.log(`Title:      ${res.title}`);
    console.log(`H1:         ${res.h1}`);
    console.log(`OG Title:   ${res.ogTitle}`);
    console.log(`OG Image:   ${res.ogImg}`);
    console.log(`JSON-LD:    ${res.jsonLd ? 'Present' : 'Not included'}`);
    console.log(`HTML Size:  ${res.size} bytes`);
    console.log('-'.repeat(80));
  }
}

main();
