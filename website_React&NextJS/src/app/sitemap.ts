import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://danialsystem.com';

  const routes = [
    '',
    '/rajafifi',
    '/rajafifi/gallery',
    '/rajafifi/calculator',
    '/rajafifi/contact',
    '/rajafifi/services/detailed',
    '/rajafifi/services/fast-track',
    '/rajafifi/services/systems-apps',
    '/rajafifi/services/website-fix',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' || route === '/rajafifi' ? 'daily' : 'weekly',
    priority: route === '/rajafifi' ? 1.0 : 0.8,
  }));
}
