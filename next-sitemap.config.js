/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://bbsalonsuites.com',
  generateRobotsTxt: true,
  
  // 🔧 CONFIGURAÇÕES IMPORTANTES PARA O FUNCIONAMENTO
  sourceDir: '.next',  // Onde o Next.js guarda o build
  outDir: 'public',    // Onde o sitemap será salvo
  
  // 🔍 ESCANEAMENTO AUTOMÁTICO DE ROTAS
  additionalPaths: async (config) => {
    // Rotas estáticas do seu site
    const routes = [
      '/',
      '/about',
      '/services',
      '/contact',
      '/blog',
      '/faq',
      '/salon-suites',
      '/gallery',
      '/team',
      '/testimonials',
      '/privacy',
      '/terms',
      '/book',
      '/robots.txt',
      '/sitemap.xml',
    ];
    
    // Rotas dinâmicas (seus serviços)
    const dynamicRoutes = [
      '/services/knotless-braids',
      '/services/box-braids',
      '/services/boho-braids',
      '/services/faux-locs',
      '/services/crochet-braids',
      '/services/twist-braids',
      '/services/lace-frontals',
      '/services/closures',
      '/services/wigs',
      '/services/custom-styles',
    ];
    
    const allRoutes = [...routes, ...dynamicRoutes];
    
    return allRoutes.map((route) => ({
      loc: route,
      changefreq: 'weekly',
      priority: route === '/' ? 1.0 : 0.8,
      lastmod: new Date().toISOString(),
    }));
  },
  
  // Excluir rotas que não devem aparecer no sitemap
  exclude: ['/admin/*', '/dashboard/*', '/api/*'],
  
  // Configuração do robots.txt
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: '*', disallow: '/admin/' },
      { userAgent: '*', disallow: '/api/' },
    ],
    additionalSitemaps: [
      'https://bbsalonsuites.com/sitemap.xml',
    ],
  },
}