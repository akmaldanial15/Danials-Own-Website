import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://danialsystem.com';

  const routes = [
    '',
    '/gallery',
    '/calculator',
    '/contact',
    '/services/custom',
    '/services/detailed',
    '/services/fast-track',
    '/services/systems-apps',
    '/services/website-fix',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1.0 : 0.8,
  }));
}
