import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();
const fail = (message) => {
  console.error(`GEO validation failed: ${message}`);
  process.exit(1);
};
const assertFile = (relativePath) => {
  const fullPath = join(root, relativePath);
  if (!existsSync(fullPath)) fail(`Missing ${relativePath}`);
  return readFileSync(fullPath, 'utf8');
};

const sitemap = assertFile('app/sitemap.ts');
for (const route of [
  'handyman-quote-software',
  'handyman-estimate-software',
  'handyman-invoice-software',
  'quote-to-invoice-software',
  'home-service-quote-software',
  'templates/handyman-quote-template',
  'templates/handyman-invoice-template',
  'blog/how-to-write-a-handyman-estimate',
]) {
  if (!sitemap.includes(route)) fail(`Sitemap missing ${route}`);
}
if (!sitemap.includes('changeFrequency')) fail('Sitemap missing changeFrequency metadata');
if (!sitemap.includes('priority')) fail('Sitemap missing priority metadata');

const robots = assertFile('app/robots.ts');
for (const route of ['/dashboard', '/api/', '/q/', '/i/', '/login', '/signup', '/onboarding', '/forgot-password', '/reset-password']) {
  if (!robots.includes(route)) fail(`robots.ts missing disallow for ${route}`);
}
if (!robots.includes('https://snipbid.com/sitemap.xml')) fail('robots.ts missing sitemap URL');

const llmsRoute = assertFile('app/llms.txt/route.ts');
for (const phrase of [
  'SnipBid',
  'handyman quote software',
  'quote-to-invoice',
  'Primary pages',
  'Key blog resources',
]) {
  if (!llmsRoute.includes(phrase)) fail(`llms.txt route missing phrase: ${phrase}`);
}

const layout = assertFile('app/layout.tsx');
for (const phrase of ['Organization', 'WebSite', 'sameAs', 'publisher']) {
  if (!layout.includes(phrase)) fail(`layout structured data missing ${phrase}`);
}

const quotePage = assertFile('app/handyman-quote-software/page.tsx');
for (const phrase of [
  'Best for',
  'Not built for',
  'Use cases',
  'lightweight quote-to-invoice workflow',
]) {
  if (!quotePage.includes(phrase)) fail(`handyman quote page missing GEO phrase: ${phrase}`);
}

const estimatePage = assertFile('app/handyman-estimate-software/page.tsx');
for (const phrase of ['Best for', 'Not built for', 'Use cases']) {
  if (!estimatePage.includes(phrase)) fail(`handyman estimate page missing GEO phrase: ${phrase}`);
}

const quoteToInvoicePage = assertFile('app/quote-to-invoice-software/page.tsx');
for (const phrase of [
  'Convert Approved Quotes to Invoices',
  'Quick answer',
  'Best for',
  'Not built for',
  'Use cases',
  'SoftwareApplication',
  'BreadcrumbList',
  'Compared with templates',
  'Compared with invoice-only tools',
  'Compared with full CRMs',
]) {
  if (!quoteToInvoicePage.includes(phrase)) fail(`quote-to-invoice page missing GEO phrase: ${phrase}`);
}

assertFile('proxy.ts');
if (existsSync(join(root, 'middleware.ts'))) fail('middleware.ts should be migrated to proxy.ts');

const nextConfig = assertFile('next.config.ts');
if (!nextConfig.includes('turbopack')) fail('next.config.ts missing turbopack.root config');
if (!nextConfig.includes('root: __dirname')) fail('next.config.ts should set turbopack.root to __dirname');

console.log('GEO validation passed');
