import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { after, before, test } from 'node:test';
import sharp from 'sharp';

const canonicalOrigin = 'https://taruvingaekie-lawns.vercel.app';
const paths = ['/', '/contact', '/durban-lawn', '/kikuyu-lawn', '/bulk-lawn-supply', '/lawn-delivery-installation-zimbabwe'];
const base = process.env.SEO_BASE_URL || 'http://localhost:3107';
const pages = new Map();
let server;
let logs = '';
const jsonNodes = html => [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].flatMap(match => {
  const data = JSON.parse(match[1]);
  return data['@graph'] || [data];
});
const renderedContent = html => html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, '').replace(/<[^>]+>/g, ' ');

before(async () => {
  if (!process.env.SEO_BASE_URL) {
    server = spawn(process.execPath, ['node_modules/next/dist/bin/next', 'start', '-p', '3107'], { windowsHide: true, stdio: ['ignore', 'pipe', 'pipe'] });
    server.stdout.on('data', data => { logs += data; });
    server.stderr.on('data', data => { logs += data; });
    let ready = false;
    for (let attempt = 0; attempt < 80; attempt++) {
      try { if ((await fetch(base, { redirect: 'manual' })).status === 200) { ready = true; break; } } catch {}
      await new Promise(resolve => setTimeout(resolve, 250));
    }
    assert.ok(ready, `Production preview failed to start: ${logs}`);
  }
  await Promise.all(paths.map(async path => {
    const response = await fetch(base + path, { redirect: 'manual' });
    assert.equal(response.status, 200, `${path} must be publicly accessible without redirects`);
    assert.ok(!/noindex/i.test(response.headers.get('x-robots-tag') || ''), path);
    pages.set(path, await response.text());
  }));
});

after(() => { server?.kill(); });

test('six public pages have unique titles, exact canonicals, descriptions and share metadata', () => {
  const titles = new Set();
  for (const [path, html] of pages) {
    const title = html.match(/<title>([^<]+)<\/title>/)?.[1];
    assert.ok(title?.includes('Ekie Gardens'), path);
    assert.ok(!titles.has(title), `duplicate title: ${title}`);
    titles.add(title);
    const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
    assert.ok(canonical, `canonical exists ${path}`);
    assert.equal(new URL(canonical).href, new URL(canonicalOrigin + path).href, `canonical ${path}`);
    assert.match(html, /<meta name="description" content="[^"]{50,}/);
    assert.match(html, /<meta property="og:image"/);
    assert.match(html, /<meta name="twitter:card" content="summary_large_image"/);
    assert.match(html, /<meta name="robots" content="index, follow"/);
    assert.equal((html.match(/<h1\b/g) || []).length, 1, `one h1 ${path}`);
    assert.match(html, /<html lang="en-ZW"/);
  }
});

test('business schema has the real identity, two contacts and no fabricated ratings or pin', () => {
  for (const html of pages.values()) {
    const business = jsonNodes(html).find(node => node['@type'] === 'LocalBusiness');
    assert.equal(business.name, 'Ekie Gardens');
    assert.equal(business.address.streetAddress, 'Plot 10 Amalinda Farm');
    assert.equal(business.address.addressLocality, 'Harare');
    assert.equal(business.address.addressCountry, 'ZW');
    assert.equal(business.areaServed.name, 'Zimbabwe');
    assert.deepEqual(business.contactPoint.map(point => point.telephone), ['+263772711588', '+263719711588']);
    assert.ok(!business.geo && !business.aggregateRating && !business.openingHours);
  }
});

test('product pages expose their factual per-square-metre price and readable content without JS', () => {
  for (const [slug, price] of [['durban-lawn', '4.00'], ['kikuyu-lawn', '2.00']]) {
    const html = pages.get('/' + slug);
    const nodes = jsonNodes(html);
    const product = nodes.find(node => node['@type'] === 'Product');
    assert.equal(product.offers.price, price);
    assert.equal(product.offers.priceCurrency, 'USD');
    assert.equal(product.offers.priceSpecification.unitCode, 'MTK');
    assert.equal(product.offers.priceSpecification.unitText, 'per square metre');
    assert.ok(nodes.some(node => node['@type'] === 'BreadcrumbList'));
    const text = renderedContent(html);
    assert.match(text, /national|Zimbabwe/);
    assert.match(text, /Harare/);
    assert.ok(text.split(/\s+/).length > 300, `useful ${slug} content`);
    assert.ok(html.includes(`/?lawn=${slug.split('-')[0]}#quote`), 'selected-lawn quote link');
  }
});

test('all new pages are discoverable through homepage links and link onward to related content', () => {
  for (const path of paths.slice(2)) {
    assert.ok(pages.get('/').includes(`href="${path}"`), `homepage links ${path}`);
    for (const related of paths.slice(2).filter(item => item !== path)) assert.ok(pages.get(path).includes(`href="${related}"`), `${path} links ${related}`);
  }
});

test('robots permits crawling and the sitemap contains precisely the canonical routes', async () => {
  const response = await fetch(base + '/robots.txt');
  assert.equal(response.status, 200);
  const robots = await response.text();
  assert.match(robots, /Allow: \//);
  assert.ok(robots.includes(`Sitemap: ${canonicalOrigin}/sitemap.xml`));
  const sitemap = await fetch(base + '/sitemap.xml');
  assert.equal(sitemap.status, 200);
  const urls = [...(await sitemap.text()).matchAll(/<loc>(.*?)<\/loc>/g)].map(match => match[1]);
  assert.deepEqual(urls.sort(), paths.map(path => canonicalOrigin + path).sort());
});

test('share image, branding and source photography are publicly available', async () => {
  const response = await fetch(base + '/opengraph-image');
  assert.equal(response.status, 200);
  assert.match(response.headers.get('content-type'), /image\/png/);
  const meta = await sharp(Buffer.from(await response.arrayBuffer())).metadata();
  assert.equal(meta.width, 1200);
  assert.equal(meta.height, 630);
  for (const path of ['/ekie-tools-icon.png', '/media/ekie/ekie-gardens-logo-light.webp', '/media/ekie/durban-field-upscaled.webp', '/media/ekie/kikuyu-field-upscaled.webp', '/media/ekie/bulk-delivery-upscaled.webp', '/media/ekie/ekie-truck.jpeg']) {
    assert.equal((await fetch(base + path, { method: 'HEAD' })).status, 200, path);
  }
});

test('heavy video and Maps remain opt-in and invalid routes return 404', async () => {
  for (const html of pages.values()) {
    assert.doesNotMatch(html, /<video\b/);
    assert.doesNotMatch(html, /<iframe\b/);
  }
  assert.equal((await fetch(base + '/no-such-lawn-page', { redirect: 'manual' })).status, 404);
});
