import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://danialsystem.com';

  const newRoutes = [
    { path: '', priority: 1.0, changeFrequency: 'daily' as const },
    { path: '/services', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/services/websites', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/services/design', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/services/website-fix', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/services/systems-apps', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/pricing', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/gallery', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/calculator', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/contact', priority: 0.8, changeFrequency: 'monthly' as const },
  ];

  const legacyRoutes = [
    '/rajafifi',
    '/rajafifi/gallery',
    '/rajafifi/calculator',
    '/rajafifi/contact',
    '/rajafifi/services/detailed',
    '/rajafifi/services/fast-track',
    '/rajafifi/services/systems-apps',
    '/rajafifi/services/website-fix',
  ];

  return [
    ...newRoutes.map((r) => ({
      url: `${baseUrl}${r.path}`,
      lastModified: new Date(),
      changeFrequency: r.changeFrequency,
      priority: r.priority,
    })),
    ...legacyRoutes.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: route === '/rajafifi' ? ('daily' as const) : ('weekly' as const),
      priority: 0.6,
    })),
  ];
}
